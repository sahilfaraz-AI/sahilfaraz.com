// The main Aug-Fice window: glass panel, floating logo, timer ring, and window behaviour
// (place, move by the bar, resize by the corner brackets, lock, dock to the side while you work).
import * as THREE from 'three';
import { GlassPanel } from './panel.js';
import { C, hexToRgb } from './theme.js';

const QUAD_VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';

const LOGO_FRAG = /* glsl */`
precision highp float; varying vec2 vUv;
uniform float uRing, uOpacity; uniform vec3 uColor;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p); float aa = fwidth(r);
  float a;
  vec3 col = uColor;
  if (uRing > 0.5) {
    float w = 0.115;
    float ring = 1.0 - smoothstep(w - aa, w + aa, abs(r - (0.985 - w)));
    float fill = (1.0 - smoothstep(0.87 - aa, 0.87 + aa, r)) * 0.13;
    a = max(ring, fill);
    col = mix(vec3(1.0), uColor, ring);
  } else a = 1.0 - smoothstep(0.985 - aa, 0.985 + aa, r);
  gl_FragColor = vec4(col, a * uOpacity);
}`;

const RING_FRAG = /* glsl */`
precision highp float; varying vec2 vUv;
uniform float uProgress, uOpacity, uPulse, uSize, uR; uniform vec3 uColor;
void main() {
  vec2 p = (vUv - 0.5) * uSize; p.y = p.y;
  float r = length(p), aa = max(fwidth(r), 0.5);
  float R = uR * (1.0 + 0.012 * uPulse);
  float ang = atan(p.x, p.y); if (ang < 0.0) ang += 6.2831853;
  float track = 1.0 - smoothstep(1.2, 1.2 + aa, abs(r - R));
  float th = uProgress * 6.2831853;
  float d;
  if (uProgress >= 0.9995) d = abs(r - R);
  else if (ang <= th) d = abs(r - R);
  else d = min(length(p - vec2(0.0, R)), length(p - R * vec2(sin(th), cos(th))));
  float T = 5.5;
  float arc = (1.0 - smoothstep(T - aa, T + aa, d)) * step(0.0005, uProgress);
  float glow = exp(-d * d / (2.0 * 22.0 * 22.0)) * 0.22 * step(0.0005, uProgress) * (0.7 + 0.3 * uPulse);
  float a = max(max(track * 0.34, arc), glow);
  gl_FragColor = vec4(uColor, a * uOpacity);
}`;

const _v = new THREE.Vector3(), _f = new THREE.Vector3(), _dummy = new THREE.Object3D();

export class MainWindow {
  constructor({ maxAniso = 8 } = {}) {
    this.panel = new GlassPanel({ w: 1920, h: 1080, widthM: 1.1, radius: 64, chrome: true, maxAniso });
    this.group = this.panel.group;
    const s = this.panel.s;
    const overlay = (frag, uniforms) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({ vertexShader: QUAD_VERT, fragmentShader: frag, uniforms, transparent: true, depthTest: false, depthWrite: false }));
      m.frustumCulled = false; return m;
    };

    // Logo: two circles, the real and the virtual world. The ring floats in front, so the overlap has real depth.
    this.logo = new THREE.Group();
    this.disc = overlay(LOGO_FRAG, { uRing: { value: 0 }, uOpacity: { value: 1 }, uColor: { value: new THREE.Vector3(...hexToRgb(C.green)) } });
    this.ringMark = overlay(LOGO_FRAG, { uRing: { value: 1 }, uOpacity: { value: 1 }, uColor: { value: new THREE.Vector3(...hexToRgb(C.greenDeep)) } });
    this.disc.scale.setScalar(228 * s); this.disc.position.set(-43 * s, -30 * s, 0.004); this.disc.renderOrder = 22;
    this.ringMark.scale.setScalar(264 * s); this.ringMark.position.set(26 * s, 13 * s, 0.03); this.ringMark.renderOrder = 23;
    this.logo.add(this.disc, this.ringMark);
    this.group.add(this.logo);
    this.logoT = 0; this.logoTarget = 0; this.logoAlpha = 1; this.logoAlphaTarget = 1;

    // Timer ring, floating just in front of the glass.
    this.ringSize = 800; this.ringR = 330;
    this.ring = overlay(RING_FRAG, { uProgress: { value: 1 }, uOpacity: { value: 0 }, uPulse: { value: 0 }, uSize: { value: this.ringSize }, uR: { value: this.ringR }, uColor: { value: new THREE.Vector3(...hexToRgb(C.green)) } });
    this.ring.scale.setScalar(this.ringSize * s); this.ring.renderOrder = 24; this.ring.position.z = 0.014;
    this.group.add(this.ring);
    this.ringCx = 1432; this.ringCxTarget = 1432; this.ringCy = 512; this.ringAlphaTarget = 0;

    // Pose
    this.pos = new THREE.Vector3(0, 1.15, -1.25); this.quat = new THREE.Quaternion(); this.scale = 1;
    this.tPos = this.pos.clone(); this.tQuat = this.quat.clone(); this.tScale = 1;
    this.opacity = 0; this.tOpacity = 1;
    this.drag = null; this.userMoved = false; this.docked = false; this.home = null;
    this.contentFade = 1;
    this.accent = new THREE.Vector3(...hexToRgb(C.green)); this.tAccent = this.accent.clone(); this.tint = 0; this.tTint = 0;
  }

  get locked() { return this.panel.locked; }
  set locked(v) { this.panel.locked = v; }

  faceFrom(pos, head, out) { _dummy.position.copy(pos); _dummy.lookAt(head); return out.copy(_dummy.quaternion); }

  // Put the window in front of the person, a little below eye level, facing them.
  place(head, forward, { instant = false, dist = 1.25 } = {}) {
    _f.copy(forward); _f.y = 0; if (_f.lengthSq() < 1e-6) _f.set(0, 0, -1); _f.normalize();
    this.home = { head: head.clone(), forward: _f.clone(), dist };
    this.tPos.copy(head).addScaledVector(_f, dist); this.tPos.y = head.y - 0.07;
    this.faceFrom(this.tPos, head, this.tQuat);
    this.tScale = this.scale = this.scale || 1;
    this.docked = false;
    if (instant) { this.pos.copy(this.tPos); this.quat.copy(this.tQuat); }
  }

  // While you work the window moves off to the side and shrinks, unless you have placed it yourself.
  dock(on, angle = 36, scale = 0.66) {
    if (!this.home || this.userMoved || this.locked || this.docked === on) return;
    this.docked = on;
    const { head, forward, dist } = this.home;
    if (on) {
      _f.copy(forward).applyAxisAngle(_v.set(0, 1, 0), THREE.MathUtils.degToRad(-angle));
      this.tPos.copy(head).addScaledVector(_f, dist * 0.98); this.tPos.y = head.y - 0.02;
      this.tScale = scale;
    } else {
      this.tPos.copy(head).addScaledVector(forward, dist); this.tPos.y = head.y - 0.07;
      this.tScale = 1;
    }
    this.faceFrom(this.tPos, head, this.tQuat);
  }

  // ---------- drags from the input manager ----------
  beginMove(p, hit, head) {
    this.group.updateWorldMatrix(true, false);
    const grab = this.panel.pxToLocal(hit.x, hit.y, new THREE.Vector3()).applyMatrix4(this.group.matrixWorld);
    this.drag = { type: 'move', dist: grab.distanceTo(p.origin), offset: this.pos.clone().sub(grab), hand0: p.origin.distanceTo(head) };
  }

  beginResize(p, hit) {
    this.drag = { type: 'resize', r0: Math.max(40, Math.hypot(hit.x - this.panel.w / 2, hit.y - this.panel.h / 2)), s0: this.tScale };
  }

  dragUpdate(p, head) {
    const d = this.drag; if (!d) return;
    this.userMoved = true;
    if (d.type === 'move') {
      let dist = d.dist;
      if (p.kind !== 'mouse' && p.kind !== 'head' && d.hand0 > 0.12) dist *= THREE.MathUtils.clamp(Math.pow(p.origin.distanceTo(head) / d.hand0, 2.2), 0.45, 3);
      dist = THREE.MathUtils.clamp(dist, 0.45, 4);
      this.tPos.copy(p.origin).addScaledVector(p.dir, dist).add(d.offset);
      this.faceFrom(this.tPos, head, this.tQuat);
      // keep the grab offset pointing the same way relative to the window as it turns
      this.pos.lerp(this.tPos, 0.55); this.quat.slerp(this.tQuat, 0.55);
    } else {
      const hit = this.panel.intersect(p.origin, p.dir);
      if (!hit) return;
      const r = Math.hypot(hit.x - this.panel.w / 2, hit.y - this.panel.h / 2);
      // hit is measured in the window's current scale, so compare against the starting grab radius
      const ratio = (r * this.scale) / (d.r0 * d.s0);
      this.tScale = THREE.MathUtils.clamp(d.s0 * ratio, 0.48, 2.1);
      this.scale += (this.tScale - this.scale) * 0.5;
    }
  }

  endDrag() { this.drag = null; }

  setAccent(hex, tint) { this.tAccent.set(...hexToRgb(hex)); this.tTint = tint; }

  update(dt) {
    const k = 1 - Math.exp(-dt * 9), p = this.panel, u = p.uniforms;
    if (!this.drag || this.drag.type !== 'move') { this.pos.lerp(this.tPos, k); this.quat.slerp(this.tQuat, k); }
    if (!this.drag || this.drag.type !== 'resize') this.scale += (this.tScale - this.scale) * k;
    this.opacity += (this.tOpacity - this.opacity) * (1 - Math.exp(-dt * 6));
    this.group.position.copy(this.pos); this.group.quaternion.copy(this.quat);
    const open = 0.94 + 0.06 * Math.min(1, this.opacity * 1.2);
    this.group.scale.setScalar(this.scale * open);
    this.group.visible = this.opacity > 0.004;
    u.uOpacity.value = this.opacity; u.uContent.value = this.contentFade;
    this.accent.lerp(this.tAccent, 1 - Math.exp(-dt * 2.5)); u.uAccent.value.copy(this.accent);
    this.tint += (this.tTint - this.tint) * (1 - Math.exp(-dt * 2.5)); u.uTint.value = this.tint;
    p.update(dt);

    // logo glides from the splash position into the header
    this.logoT += (this.logoTarget - this.logoT) * (1 - Math.exp(-dt * 5));
    this.logoAlpha += (this.logoAlphaTarget - this.logoAlpha) * (1 - Math.exp(-dt * 8));
    const e = this.logoT * this.logoT * (3 - 2 * this.logoT);
    const lx = 960, ly = THREE.MathUtils.lerp(338, 82, e), ls = THREE.MathUtils.lerp(1, 0.27, e);
    p.pxToLocal(lx, ly, this.logo.position); this.logo.position.z = 0;
    this.logo.scale.setScalar(ls);
    this.ringMark.position.z = THREE.MathUtils.lerp(0.03, 0.012, e) / Math.max(ls, 0.01) * ls;
    const la = this.logoAlpha * this.opacity;
    this.disc.material.uniforms.uOpacity.value = la; this.ringMark.material.uniforms.uOpacity.value = la;
    this.logo.visible = la > 0.01;

    // timer ring
    const ru = this.ring.material.uniforms;
    ru.uOpacity.value += (this.ringAlphaTarget * this.opacity * this.contentFade - ru.uOpacity.value) * (1 - Math.exp(-dt * 10));
    ru.uColor.value.copy(this.accent);
    this.ringCx += (this.ringCxTarget - this.ringCx) * (1 - Math.exp(-dt * 8));
    p.pxToLocal(this.ringCx, this.ringCy, this.ring.position); this.ring.position.z = 0.014;
    this.ring.visible = ru.uOpacity.value > 0.01;
  }
}
