// GlassPanel: one spatial window.
// The glass, edge light, hover light, resize brackets and window bar are drawn in a shader.
// Text and icons are drawn on a 2D canvas (the project's 1920 x 1080 frame) and laid over the glass.
import * as THREE from 'three';
import { C, BODY, HEAD, hexToRgb } from './theme.js';
import { drawIcon } from './icons.js';

const VERT = /* glsl */`
uniform vec2 uSize; uniform vec4 uMargin;
varying vec2 vPx;
void main() {
  vPx = vec2(mix(-uMargin.x, uSize.x + uMargin.z, uv.x), mix(uSize.y + uMargin.w, -uMargin.y, uv.y));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const FRAG = /* glsl */`
precision highp float;
uniform sampler2D uMap;
uniform vec2 uSize; uniform float uRadius;
uniform float uOpacity, uGlassAlpha, uContent, uChrome, uBar, uBarOn, uLocked, uTint;
uniform vec4 uCorner; uniform vec3 uAccent;
uniform vec4 uHoverRect[2]; uniform float uHoverRad[2]; uniform vec2 uPointer[2];
uniform float uHoverAmt[2]; uniform float uPressAmt[2]; uniform float uPointerOn[2];
varying vec2 vPx;

float sdRR(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r; }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }

void main() {
  vec2 c = uSize * 0.5; vec2 p = vPx - c;
  float sd = sdRR(p, c, uRadius);
  float aa = max(fwidth(sd), 0.001);
  float inside = 1.0 - smoothstep(-aa, aa, sd);
  vec2 uv = vPx / uSize;

  // Glass: charcoal with the dusty teal of the tested background C, and fine grain.
  vec3 base = vec3(0.118, 0.129, 0.106);
  float g1 = smoothstep(0.80, 0.0, length((uv - vec2(0.62, 0.40)) * vec2(1.0, 1.45)));
  float g2 = smoothstep(0.60, 0.0, length((uv - vec2(0.95, 1.0)) * vec2(1.0, 1.3)));
  float n = vnoise(uv * vec2(5.0, 3.0) + 3.1) * 0.6 + vnoise(uv * vec2(13.0, 8.0) + 1.7) * 0.4;
  vec3 teal = mix(vec3(0.133, 0.275, 0.263), vec3(0.30, 0.26, 0.15), uTint);
  base = mix(base, teal, clamp(g1 * (0.42 + 0.75 * n) + g2 * 0.45, 0.0, 0.9));
  base += (hash(floor(vPx)) - 0.5) * 0.03;
  base += step(0.9972, hash(floor(vPx * 0.5) + 7.0)) * 0.085;
  base += 0.035 * smoothstep(0.55, 0.0, uv.y);

  // Hover light, visionOS style: the control lifts and a soft light follows the pointer.
  for (int i = 0; i < 2; i++) {
    vec4 r = uHoverRect[i];
    float hsd = sdRR(vPx - (r.xy + r.zw * 0.5), r.zw * 0.5, uHoverRad[i]);
    float hin = 1.0 - smoothstep(-1.0, 1.0, hsd);
    float d = length(vPx - uPointer[i]);
    float glow = exp(-d * d / (2.0 * 170.0 * 170.0));
    base += hin * uHoverAmt[i] * (0.05 + 0.13 * glow);
    base -= hin * uPressAmt[i] * 0.035;
    base += uPointerOn[i] * 0.03 * exp(-d * d / (2.0 * 240.0 * 240.0));
  }

  // Edge: a bright specular line at the top that settles into a green hairline.
  float rim = smoothstep(-3.2, -0.6, sd);
  float top = smoothstep(0.75, 0.0, uv.y);
  base = mix(base, mix(uAccent, vec3(1.0), 0.25 + 0.6 * top), rim * (0.30 + 0.45 * top));
  base += 0.03 * smoothstep(-70.0, 0.0, sd);

  // Content.
  vec4 t = vec4(0.0);
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) t = texture2D(uMap, vec2(uv.x, 1.0 - uv.y)) * uContent;
  vec3 col = base * (1.0 - t.a) + t.rgb;
  float alpha = mix(uGlassAlpha, 1.0, t.a);

  // Outside the glass: soft contact shadow, resize brackets, window bar.
  float sh = 0.20 * exp(-max(sd, 0.0) / 30.0);
  float G = 28.0; float L = 170.0;
  vec2 ap = abs(p);
  float ch = p.x < 0.0 ? (p.y < 0.0 ? uCorner.x : uCorner.z) : (p.y < 0.0 ? uCorner.y : uCorner.w);
  float T = 12.0 + 4.0 * ch;
  float sdo = sdRR(p, c + G, uRadius + G);
  float band = 1.0 - smoothstep(T * 0.5 - aa, T * 0.5 + aa, abs(sdo));
  float ends = smoothstep(c.x + G - L, c.x + G - L + 8.0, ap.x) * smoothstep(c.y + G - L, c.y + G - L + 8.0, ap.y);
  float br = band * ends * (0.86 + 0.14 * ch) * uChrome * (1.0 - 0.7 * uLocked);

  vec2 bh = vec2(112.0 + 22.0 * uBar, 8.0 + 2.5 * uBar);
  float sdb = sdRR(vPx - vec2(c.x, uSize.y + 66.0), bh, bh.y);
  float bar = (1.0 - smoothstep(-aa, aa, sdb)) * (0.46 + 0.42 * uBar) * uBarOn * (1.0 - 0.75 * uLocked);

  vec4 o = vec4(0.0, 0.0, 0.0, sh);
  o = mix(o, vec4(uAccent * (1.0 + 0.15 * ch), 1.0), br);
  o = mix(o, vec4(1.0), bar);
  o = mix(o, vec4(col, alpha), inside);
  gl_FragColor = vec4(o.rgb, o.a * uOpacity);
}`;

function sdRR(px, py, bx, by, r) {
  const qx = Math.abs(px) - bx + r, qy = Math.abs(py) - by + r;
  return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
}

const _inv = new THREE.Matrix4(), _o = new THREE.Vector3(), _d = new THREE.Vector3();

export class GlassPanel {
  constructor({ w = 1920, h = 1080, widthM = 1.1, radius = 60, chrome = true, bar = true, maxAniso = 8 } = {}) {
    this.w = w; this.h = h; this.radius = radius; this.chrome = chrome; this.hasBar = bar;
    this.s = widthM / w; // metres per design pixel
    this.margin = { l: 120, t: 120, r: 120, b: chrome ? 160 : 120 };
    this.canvas = document.createElement('canvas');
    this.canvas.width = w; this.canvas.height = h;
    this.ctx = this.canvas.getContext('2d');
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.NoColorSpace;
    this.tex.premultiplyAlpha = true;
    this.tex.generateMipmaps = true;
    this.tex.minFilter = THREE.LinearMipmapLinearFilter;
    this.tex.anisotropy = maxAniso;

    const m = this.margin;
    this.uniforms = {
      uMap: { value: this.tex }, uSize: { value: new THREE.Vector2(w, h) }, uRadius: { value: radius },
      uMargin: { value: new THREE.Vector4(m.l, m.t, m.r, m.b) },
      uOpacity: { value: 1 }, uGlassAlpha: { value: 0.92 }, uContent: { value: 1 }, uChrome: { value: chrome ? 1 : 0 },
      uBar: { value: 0 }, uBarOn: { value: chrome && bar ? 1 : 0 }, uLocked: { value: 0 }, uTint: { value: 0 },
      uCorner: { value: new THREE.Vector4() }, uAccent: { value: new THREE.Vector3(...hexToRgb(C.green)) },
      uHoverRect: { value: [new THREE.Vector4(), new THREE.Vector4()] }, uHoverRad: { value: [0, 0] },
      uPointer: { value: [new THREE.Vector2(-9999, -9999), new THREE.Vector2(-9999, -9999)] },
      uHoverAmt: { value: [0, 0] }, uPressAmt: { value: [0, 0] }, uPointerOn: { value: [0, 0] },
    };
    const tw = (w + m.l + m.r) * this.s, th = (h + m.t + m.b) * this.s;
    const geo = new THREE.PlaneGeometry(tw, th);
    geo.translate(((m.r - m.l) / 2) * this.s, ((m.t - m.b) / 2) * this.s, 0);
    this.material = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms,
      transparent: true, depthTest: false, depthWrite: false });
    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.renderOrder = 20;
    this.mesh.frustumCulled = false;
    this.group = new THREE.Group();
    this.group.add(this.mesh);

    this.regions = [];
    this.slots = [0, 1].map(() => ({ id: null, amt: 0, press: 0, on: 0, onTarget: 0, pressed: false }));
    this.cornerHover = [0, 0, 0, 0]; this.cornerTarget = [0, 0, 0, 0];
    this.barTarget = 0;
    this.dirty = true;
    this.enabled = true;
    this.locked = false;
  }

  // ---------- geometry ----------
  pxToLocal(x, y, out = new THREE.Vector3()) { return out.set((x - this.w / 2) * this.s, (this.h / 2 - y) * this.s, 0); }

  // Ray against the panel plane. Returns design-pixel coordinates (not clamped), or null.
  intersect(origin, dir) {
    this.group.updateWorldMatrix(true, false);
    _inv.copy(this.group.matrixWorld).invert();
    _o.copy(origin).applyMatrix4(_inv);
    _d.copy(dir).transformDirection(_inv);
    if (Math.abs(_d.z) < 1e-5 || _d.z > 0) return null; // parallel, or looking at the back
    const t = -_o.z / _d.z;
    if (t <= 0) return null;
    const lx = _o.x + _d.x * t, ly = _o.y + _d.y * t;
    const scale = this.group.matrixWorld.getMaxScaleOnAxis();
    return { x: lx / this.s + this.w / 2, y: this.h / 2 - ly / this.s, lx, ly, dist: t * scale };
  }

  zoneAt(x, y) {
    if (!this.enabled) return null;
    const cx = this.w / 2, cy = this.h / 2, px = x - cx, py = y - cy;
    const sd = sdRR(px, py, cx, cy, this.radius);
    if (sd <= 0) return 'content';
    if (!this.chrome || this.locked) return null;
    if (this.hasBar && Math.abs(px) < 200 && y > this.h + 14 && y < this.h + 120) return 'bar';
    if (sd < 84 && Math.abs(px) > cx - 190 && Math.abs(py) > cy - 190) return 'corner' + ((px > 0 ? 1 : 0) + (py > 0 ? 2 : 0));
    return null;
  }

  findRegion(x, y) {
    for (let i = this.regions.length - 1; i >= 0; i--) {
      const r = this.regions[i];
      if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) return r;
    }
    return null;
  }

  // ---------- hover state, driven by the input manager ----------
  setPointer(slot, x, y, region, pressed) {
    const s = this.slots[slot];
    s.onTarget = 1; s.pressed = pressed;
    this.uniforms.uPointer.value[slot].set(x, y);
    const id = region && region.hover !== false ? region.id : null;
    if (id !== s.id) {
      if (id) { s.id = id; s.amt = Math.min(s.amt, 0.25); this._applyRect(slot, region); s.want = true; } else s.want = false;
    } else if (id) s.want = true;
  }

  clearPointer(slot) { const s = this.slots[slot]; s.onTarget = 0; s.want = false; s.pressed = false; }

  _applyRect(slot, r) {
    const hx = r.hx ?? r.x, hy = r.hy ?? r.y, hw = r.hw ?? r.w, hh = r.hh ?? r.h;
    this.uniforms.uHoverRect.value[slot].set(hx, hy, hw, hh);
    this.uniforms.uHoverRad.value[slot] = Math.min(r.r ?? 24, hw / 2, hh / 2);
  }

  update(dt) {
    const k = 1 - Math.exp(-dt * 16), u = this.uniforms;
    for (let i = 0; i < 2; i++) {
      const s = this.slots[i];
      if (s.id && s.want) { const r = this.regions.find((q) => q.id === s.id); if (r) this._applyRect(i, r); else s.want = false; }
      s.amt += ((s.want ? 1 : 0) - s.amt) * k;
      if (!s.want && s.amt < 0.01) { s.amt = 0; s.id = null; }
      s.press += ((s.want && s.pressed ? 1 : 0) - s.press) * k;
      s.on += (s.onTarget - s.on) * k;
      u.uHoverAmt.value[i] = s.amt; u.uPressAmt.value[i] = s.press; u.uPointerOn.value[i] = s.on;
    }
    for (let i = 0; i < 4; i++) this.cornerHover[i] += (this.cornerTarget[i] - this.cornerHover[i]) * k;
    u.uCorner.value.set(...this.cornerHover);
    u.uBar.value += (this.barTarget - u.uBar.value) * k;
    u.uLocked.value += ((this.locked ? 1 : 0) - u.uLocked.value) * k;
  }

  // ---------- immediate-mode drawing kit ----------
  begin() { this.ctx.setTransform(1, 0, 0, 1, 0, 0); this.ctx.clearRect(0, 0, this.w, this.h); this.regions.length = 0; }
  end() { this.tex.needsUpdate = true; this.dirty = false; }

  region(id, x, y, w, h, o = {}) { const r = { id, x, y, w, h, ...o }; this.regions.push(r); return r; }

  font(o) { return `${o.italic ? 'italic ' : ''}${o.weight ?? 400} ${o.size ?? 36}px ${o.font ?? BODY}`; }

  measure(s, o = {}) { const c = this.ctx; c.font = this.font(o); if ('letterSpacing' in c) c.letterSpacing = (o.ls ?? 0) + 'px'; return c.measureText(s).width; }

  text(s, x, y, o = {}) {
    const c = this.ctx;
    let size = o.size ?? 36;
    if ('letterSpacing' in c) c.letterSpacing = (o.ls ?? 0) + 'px';
    c.font = this.font({ ...o, size });
    if (o.maxW) { const mw = c.measureText(s).width; if (mw > o.maxW) { size = Math.floor(size * o.maxW / mw); c.font = this.font({ ...o, size }); } }
    c.fillStyle = o.color ?? C.white;
    c.textAlign = o.align ?? 'left';
    c.textBaseline = o.baseline ?? 'middle';
    const prev = c.globalAlpha; c.globalAlpha = prev * (o.alpha ?? 1);
    c.fillText(s, x, y);
    c.globalAlpha = prev;
    if ('letterSpacing' in c) c.letterSpacing = '0px';
  }

  lines(s, maxW, o = {}) {
    const c = this.ctx; c.font = this.font(o); if ('letterSpacing' in c) c.letterSpacing = '0px';
    const out = []; let line = '';
    for (const word of s.split(' ')) {
      const test = line ? line + ' ' + word : word;
      if (c.measureText(test).width > maxW && line) { out.push(line); line = word; } else line = test;
    }
    if (line) out.push(line);
    return out;
  }

  wrap(s, x, y, maxW, lh, o = {}) {
    const ls = this.lines(s, maxW, o);
    const y0 = o.vcenter ? y - ((ls.length - 1) * lh) / 2 : y;
    ls.forEach((l, i) => this.text(l, x, y0 + i * lh, o));
    return ls.length;
  }

  icon(name, cx, cy, size, color = C.green, alpha = 1) { drawIcon(this.ctx, name, cx, cy, size, color, alpha); }

  rr(x, y, w, h, r) { const c = this.ctx; c.beginPath(); c.roundRect(x, y, w, h, Math.min(r, w / 2, h / 2)); }

  // A raised glass platter for cards and rows.
  platter(x, y, w, h, r = 36, o = {}) {
    const c = this.ctx;
    this.rr(x, y, w, h, r);
    c.fillStyle = o.fill ?? 'rgba(255,255,255,0.065)';
    c.fill();
    if (o.stroke !== false) {
      const g = c.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, 'rgba(255,255,255,0.20)'); g.addColorStop(0.35, 'rgba(255,255,255,0.05)'); g.addColorStop(1, 'rgba(255,255,255,0.03)');
      c.strokeStyle = o.strokeColor ?? g; c.lineWidth = o.lineWidth ?? 2;
      this.rr(x + 1, y + 1, w - 2, h - 2, r - 1); c.stroke();
    }
  }

  button(id, x, y, w, h, label, o = {}, onClick) {
    const c = this.ctx, accent = o.accent ?? C.green, kind = o.kind ?? 'secondary', r = h / 2;
    this.rr(x, y, w, h, r);
    if (kind === 'primary') { c.fillStyle = accent; c.fill(); }
    else {
      c.fillStyle = kind === 'plain' ? 'rgba(255,255,255,0.07)' : 'rgba(139,195,74,0.09)'; c.fill();
      if (kind !== 'plain') { c.strokeStyle = accent; c.lineWidth = 2.5; this.rr(x + 1.25, y + 1.25, w - 2.5, h - 2.5, r); c.stroke(); }
    }
    const col = kind === 'primary' ? C.ink : kind === 'plain' ? C.whiteHi : accent;
    const size = o.size ?? 32, ls = 1.6, txt = (o.upper === false ? label : label.toUpperCase());
    const tw = this.measure(txt, { size, weight: 600, ls });
    const iw = o.icon ? size * 1.05 + 14 : 0;
    const sx = x + w / 2 - (tw + iw) / 2;
    if (o.icon) this.icon(o.icon, sx + size * 0.52, y + h / 2, size * 1.05, col);
    this.text(txt, sx + iw, y + h / 2 + 2, { size, weight: 600, color: col, ls });
    if (onClick && !o.disabled) this.region(id, x, y, w, h, { r, onClick });
  }

  // Round icon button. The hit area is never smaller than 88 px, which is about 5 cm on the default window.
  iconButton(id, cx, cy, d, name, o = {}, onClick) {
    const c = this.ctx;
    if (o.plate !== false) { c.beginPath(); c.arc(cx, cy, d / 2, 0, Math.PI * 2); c.fillStyle = o.fill ?? 'rgba(255,255,255,0.07)'; c.fill(); }
    this.icon(name, cx, cy, o.iconSize ?? d * 0.56, o.color ?? C.green, o.alpha ?? 1);
    const hit = Math.max(d, 88);
    if (onClick) this.region(id, cx - hit / 2, cy - hit / 2, hit, hit, { r: hit / 2, onClick, hx: cx - d / 2, hy: cy - d / 2, hw: d, hh: d });
  }

  dispose() { this.tex.dispose(); this.material.dispose(); this.mesh.geometry.dispose(); }
}

export { HEAD, BODY };
