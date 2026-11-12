// People indicator: markers on the partition for people nearby, in three distance bands.
// Brighter means closer. Shown only while the partition is more than half opaque.
import * as THREE from 'three';
import { iconCanvas } from './icons.js';
import { C } from './theme.js';

export const BANDS = [2, 8, 15]; // metres, from the hi-fi design
const BAND_ALPHA = [1, 0.62, 0.36];
export function bandOf(dist) { return dist <= BANDS[0] ? 0 : dist <= BANDS[1] ? 1 : dist <= BANDS[2] ? 2 : -1; }

function markerTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(128, 128, 30, 128, 128, 126);
  g.addColorStop(0, 'rgba(217,195,126,0.34)'); g.addColorStop(0.55, 'rgba(217,195,126,0.10)'); g.addColorStop(1, 'rgba(217,195,126,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  x.beginPath(); x.arc(128, 128, 62, 0, Math.PI * 2); x.fillStyle = 'rgba(28,30,24,0.82)'; x.fill();
  x.lineWidth = 3; x.strokeStyle = 'rgba(217,195,126,0.85)'; x.stroke();
  x.drawImage(iconCanvas('user-fill', 84, C.gold), 128 - 42, 128 - 42);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class PeopleLayer {
  constructor(partition) {
    this.partition = partition;
    this.group = new THREE.Group();
    partition.group.add(this.group);
    const tex = markerTexture(), geo = new THREE.PlaneGeometry(1, 1);
    this.markers = Array.from({ length: 6 }, () => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthTest: false, depthWrite: false, toneMapped: false }));
      m.renderOrder = 6; m.visible = false; m.userData = { az: 0, alpha: 0, target: 0, id: null, band: 2 };
      this.group.add(m); return m;
    });
    this.nearestBand = -1; this.count = 0;
  }

  // detections: [{ id?, az (radians, 0 = straight ahead, positive = right), dist (metres) }]
  update(dt, detections, show) {
    const list = detections.map((d) => ({ ...d, band: bandOf(d.dist) })).filter((d) => d.band >= 0).sort((a, b) => a.dist - b.dist).slice(0, this.markers.length);
    this.count = list.length; this.nearestBand = list.length ? list[0].band : -1;
    const free = new Set(this.markers);
    const pairs = [];
    for (const d of list) { const m = d.id != null && this.markers.find((q) => q.userData.id === d.id && free.has(q)); if (m) { free.delete(m); pairs.push([m, d]); } }
    for (const d of list) {
      if (pairs.some((p) => p[1] === d)) continue;
      let best = null, bd = 1e9;
      for (const m of free) { const dd = m.userData.alpha < 0.02 ? 0.5 : Math.abs(m.userData.az - d.az); if (dd < bd) { bd = dd; best = m; } }
      if (best) { free.delete(best); if (best.userData.alpha < 0.02 || d.id != null) best.userData.az = d.az; best.userData.id = d.id ?? null; pairs.push([best, d]); }
    }
    for (const m of free) m.userData.target = 0;
    for (const [m, d] of pairs) { m.userData.target = show ? BAND_ALPHA[d.band] : 0; m.userData.goal = d.az; m.userData.band = d.band; }
    const k = 1 - Math.exp(-dt * 6);
    const p = this.partition;
    for (const m of this.markers) {
      const u = m.userData;
      u.alpha += (u.target - u.alpha) * k;
      if (u.goal != null) u.az += (u.goal - u.az) * k;
      m.visible = u.alpha > 0.01;
      if (!m.visible) { if (u.target === 0) u.id = null; continue; }
      p.shellPoint(u.az, m.position);
      const r = Math.hypot(m.position.x, m.position.z);
      m.position.multiplyScalar(1 - 0.03 / Math.max(r, 0.3)); m.position.y = p.seat.eyeY;
      m.rotation.set(0, Math.atan2(-m.position.x, -m.position.z), 0);
      const s = 0.105 * r * (u.band === 0 ? 1.12 : 1);
      m.scale.set(s, s, s);
      m.material.opacity = u.alpha;
    }
  }
}

// Presence sensing from the headset's depth sensor. Experimental.
// The browser does not expose person detection, so this watches for something that was not there before:
// it keeps a background distance for each bearing around the seat and flags bearings that get clearly nearer.
export class DepthPresence {
  constructor() {
    this.W = 40; this.H = 24;
    this.rt = new THREE.WebGLRenderTarget(this.W, this.H, { depthBuffer: false, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
    this.buf = new Uint8Array(this.W * this.H * 4);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { depthColor: { value: null } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `precision highp float; precision highp sampler2DArray; uniform sampler2DArray depthColor; varying vec2 vUv;
        void main(){ float d = texture(depthColor, vec3(vUv, 0.0)).r; vec3 e = fract(d * vec3(1.0, 255.0, 65025.0)); e.xy -= e.yz / 255.0; gl_FragColor = vec4(e, 1.0); }`,
      depthTest: false, depthWrite: false,
    });
    this.scene = new THREE.Scene();
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat); quad.frustumCulled = false; this.scene.add(quad);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.model = new PresenceModel();
    this.last = 0; this.failed = false; this.available = false;
    this._v = new THREE.Vector3(); this._inv = new THREE.Matrix4();
  }

  // Call inside the XR frame, before the main render.
  sample(renderer, time, seatGroup) {
    if (this.failed || time - this.last < 0.25) return;
    this.last = time;
    try {
      const xr = renderer.xr;
      if (!xr.isPresenting || !xr.hasDepthSensing || !xr.hasDepthSensing()) { this.available = false; return; }
      const tex = xr.getDepthTexture(), cam = xr.getCamera().cameras[0];
      if (!tex || !cam) return;
      this.mat.uniforms.depthColor.value = tex;
      const prevRT = renderer.getRenderTarget(), prevXr = xr.enabled;
      xr.enabled = false;
      renderer.setRenderTarget(this.rt);
      renderer.render(this.scene, this.cam);
      renderer.readRenderTargetPixels(this.rt, 0, 0, this.W, this.H, this.buf);
      renderer.setRenderTarget(prevRT);
      xr.enabled = prevXr;

      const P = cam.projectionMatrix.elements, pts = [];
      this._inv.copy(seatGroup.matrixWorld).invert();
      let valid = 0, bad = 0;
      for (let j = 0; j < this.H; j++) for (let i = 0; i < this.W; i++) {
        const k = (j * this.W + i) * 4;
        const d = this.buf[k] / 255 + this.buf[k + 1] / 65025 + this.buf[k + 2] / 16581375;
        if (d <= 0.0005 || d >= 0.99999) continue;
        const ndc = d * 2 - 1, z = P[14] / (-ndc - P[10]);
        if (!(z < -0.12) || z < -40) { bad++; continue; }
        valid++;
        this._v.set(((i + 0.5) / this.W) * 2 - 1, ((j + 0.5) / this.H) * 2 - 1, ndc).applyMatrix4(cam.projectionMatrixInverse).applyMatrix4(cam.matrix).applyMatrix4(this._inv);
        pts.push(this._v.x, this._v.y, this._v.z);
      }
      if (valid < 40 || bad > valid) { this.available = false; return; }
      this.available = true;
      this.model.observe(pts, time);
    } catch (e) {
      this.failed = true; this.available = false;
      console.warn('[Aug-Fice] depth presence disabled:', e);
    }
  }

  get detections() { return this.available ? this.model.detections : []; }
}

// Seat-centred background model. Points are in seat space: x right, y up, -z forward.
export class PresenceModel {
  constructor(bins = 90) {
    this.n = bins; this.bg = new Float32Array(bins).fill(NaN); this.cur = new Float32Array(bins).fill(NaN);
    this.hits = new Float32Array(bins); this.seen = new Float32Array(bins).fill(-1e9);
    this.detections = [];
  }

  observe(pts, time) {
    const n = this.n, lists = Array.from({ length: n }, () => []);
    for (let i = 0; i < pts.length; i += 3) {
      const x = pts[i], y = pts[i + 1], z = pts[i + 2];
      if (y < 0.55 || y > 1.95) continue; // person-height band only: no floor, no ceiling
      const r = Math.hypot(x, z);
      if (r < 0.9) continue; // your own arms and desk
      const b = Math.floor(((Math.atan2(x, -z) + Math.PI) / (2 * Math.PI)) * n) % n;
      lists[b].push(Math.min(r, 16));
    }
    for (let b = 0; b < n; b++) {
      const l = lists[b];
      if (l.length < 2) { if (time - this.seen[b] > 2) this.hits[b] = Math.max(0, this.hits[b] - 1); continue; }
      l.sort((p, q) => p - q);
      const cur = l[Math.floor(l.length * 0.2)];
      this.cur[b] = cur; this.seen[b] = time;
      if (Number.isNaN(this.bg[b])) { this.bg[b] = cur; continue; }
      if (cur < this.bg[b] - 0.5) this.hits[b] = Math.min(6, this.hits[b] + 1);
      else this.hits[b] = Math.max(0, this.hits[b] - 1);
      this.bg[b] += (cur - this.bg[b]) * (cur > this.bg[b] ? 0.5 : 0.012);
    }
    const out = [];
    let b = 0;
    while (b < n) {
      if (this.hits[b] < 3) { b++; continue; }
      let e = b, dist = this.cur[b];
      while (e + 1 < n && this.hits[e + 1] >= 3) { e++; dist = Math.min(dist, this.cur[e]); }
      const mid = (b + e + 1) / 2;
      out.push({ az: (mid / n) * 2 * Math.PI - Math.PI, dist });
      b = e + 1;
    }
    this.detections = out;
  }
}
