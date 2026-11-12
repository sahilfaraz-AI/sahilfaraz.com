// The virtual partition: rectangle, cubicle, sphere or blinds, at a set distance and transparency.
// It rises from desk level so the workstation in front of you stays visible.
import * as THREE from 'three';

const FT = 0.3048;

// Tileable noise, generated once. R: large soft blobs, G: medium detail, B: white grain.
export function makeNoiseTexture(size = 256) {
  const data = new Uint8Array(size * size * 4);
  const rnd = (seed) => { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); };
  const layer = (cells, seed) => {
    const r = rnd(seed), g = new Float32Array(cells * cells);
    for (let i = 0; i < g.length; i++) g[i] = r();
    return (x, y) => {
      const fx = (x / size) * cells, fy = (y / size) * cells;
      const x0 = Math.floor(fx), y0 = Math.floor(fy);
      let tx = fx - x0, ty = fy - y0; tx = tx * tx * (3 - 2 * tx); ty = ty * ty * (3 - 2 * ty);
      const a = g[(y0 % cells) * cells + (x0 % cells)], b = g[(y0 % cells) * cells + ((x0 + 1) % cells)];
      const c = g[((y0 + 1) % cells) * cells + (x0 % cells)], d = g[((y0 + 1) % cells) * cells + ((x0 + 1) % cells)];
      return (a + (b - a) * tx) + ((c + (d - c) * tx) - (a + (b - a) * tx)) * ty;
    };
  };
  const l8 = layer(8, 11), l16 = layer(16, 23), l32 = layer(32, 37), l64 = layer(64, 51), l128 = layer(128, 77);
  const white = rnd(99);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4;
    data[i] = 255 * (l8(x, y) * 0.5 + l16(x, y) * 0.3 + l32(x, y) * 0.2);
    data[i + 1] = 255 * (l32(x, y) * 0.5 + l64(x, y) * 0.3 + l128(x, y) * 0.2);
    data[i + 2] = 255 * white();
    data[i + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true; tex.colorSpace = THREE.NoColorSpace; tex.needsUpdate = true;
  return tex;
}

const VERT = /* glsl */`
attribute vec2 aSurf; attribute vec3 aEdge;
varying vec2 vSurf; varying vec3 vEdge; varying vec3 vWorld;
void main() {
  vSurf = aSurf; vEdge = aEdge;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const FRAG = /* glsl */`
precision highp float;
uniform sampler2D uNoise;
uniform float uOpacity, uReveal, uSat, uTime, uMix, uBlinds, uBottom, uEye;
uniform int uBgA, uBgB;
uniform vec2 uYaw; uniform vec3 uTintCol; uniform float uTintAmt;
varying vec2 vSurf; varying vec3 vEdge; varying vec3 vWorld;

// Texture 1: the dusty teal background people chose in the preference test.
vec3 tex1(vec2 s) {
  float a = texture2D(uNoise, s * 0.11).r, b = texture2D(uNoise, s * 0.37 + 0.3).g, g = texture2D(uNoise, s * 3.1).b;
  vec3 col = mix(vec3(0.112, 0.122, 0.098), vec3(0.135, 0.295, 0.285), smoothstep(0.34, 0.78, a * 0.7 + b * 0.3));
  col += (g - 0.5) * 0.05;
  col += step(0.988, texture2D(uNoise, s * 1.7 + 0.5).b) * 0.11;
  return col;
}
// Texture 2: dark rippled sand.
vec3 tex2(vec2 s) {
  float a = texture2D(uNoise, s * 0.09).r, g = texture2D(uNoise, s * 2.7).b;
  float r = sin(s.y * 34.0 + a * 16.0 + sin(s.x * 2.6) * 1.6);
  vec3 col = mix(vec3(0.060, 0.062, 0.058), vec3(0.165, 0.170, 0.158), smoothstep(-0.3, 1.0, r) * (0.55 + 0.45 * a));
  col += (g - 0.5) * 0.04 + step(0.99, texture2D(uNoise, s * 1.3 + 0.2).b) * 0.10;
  return col;
}
// Texture 3: midnight blue with a soft green glow overhead.
vec3 tex3(vec2 s) {
  float a = texture2D(uNoise, s * 0.10 + 0.6).r, g = texture2D(uNoise, s * 3.3).b;
  float h = vWorld.y - uEye;
  vec3 col = mix(vec3(0.035, 0.040, 0.105), vec3(0.055, 0.075, 0.150), a);
  col += vec3(0.10, 0.24, 0.08) * exp(-pow((h - 0.85) / 0.55, 2.0)) * (0.55 + 0.6 * a);
  col += (g - 0.5) * 0.035;
  return col;
}
// Beach at dusk. Drawn from the view direction, so any partition shape works as a window onto it.
vec3 beach(vec3 d) {
  d = normalize(vec3(d.x * uYaw.x - d.z * uYaw.y, d.y, d.x * uYaw.y + d.z * uYaw.x));
  float e = d.y, az = atan(d.x, -d.z);
  vec3 horizon = vec3(0.80, 0.56, 0.38);
  float t = clamp(e / 0.9, 0.0, 1.0);
  vec3 sky = mix(horizon, vec3(0.20, 0.36, 0.40), smoothstep(0.0, 0.24, t));
  sky = mix(sky, vec3(0.055, 0.115, 0.180), smoothstep(0.18, 0.9, t));
  float sd = length(vec2(az * 0.9, e - 0.06));
  sky += vec3(1.0, 0.70, 0.40) * 0.50 * exp(-sd * sd / 0.018) + vec3(0.90, 0.48, 0.28) * 0.22 * exp(-sd * sd / 0.22);
  float cl = texture2D(uNoise, vec2(az * 0.30 + uTime * 0.0015, e * 1.5 + 0.2)).r;
  sky += vec3(0.22, 0.14, 0.10) * smoothstep(0.52, 0.78, cl) * smoothstep(0.03, 0.28, e) * (1.0 - smoothstep(0.3, 0.8, e));
  if (e >= 0.0) return sky * 0.86;
  float dist = 1.4 * length(d.xz) / max(-d.y, 0.002);
  vec2 wp = normalize(d.xz) * dist;
  float fres = exp(e * 11.0);
  vec3 sea = mix(vec3(0.075, 0.215, 0.255), horizon * 0.85, fres);
  float w = texture2D(uNoise, vec2(wp.x * 0.035, wp.y * 0.14 + uTime * 0.012)).g;
  sea += (w - 0.5) * 0.09;
  float glit = smoothstep(0.62, 0.95, texture2D(uNoise, vec2(wp.x * 0.22, wp.y * 0.55 - uTime * 0.025)).g);
  sea += vec3(1.0, 0.72, 0.45) * 0.42 * exp(-az * az / 0.02) * glit * fres * 1.6;
  vec3 sand = vec3(0.285, 0.245, 0.190) * (0.78 + 0.45 * texture2D(uNoise, wp * 0.21).r);
  sand += (texture2D(uNoise, wp * 2.3).b - 0.5) * 0.03;
  float fwd = -wp.y;
  float shore = 6.4 + sin(wp.x * 0.33 + uTime * 0.22) * 0.5 + sin(uTime * 0.35) * 0.55;
  vec3 g = mix(sand, sea, smoothstep(shore - 0.5, shore + 0.5, fwd));
  g += vec3(0.55) * exp(-pow((fwd - shore) / 0.3, 2.0)) * 0.42 * smoothstep(40.0, 12.0, dist);
  g = mix(sand * 0.8, g, smoothstep(shore - 3.5, shore - 0.5, fwd) * 0.35 + 0.65);
  g = mix(g, horizon * 0.78, fres * 0.55);
  return g * 0.86;
}
vec3 bg(int id) {
  if (id == 1) return tex2(vSurf);
  if (id == 2) return tex3(vSurf);
  if (id == 3) return beach(vWorld - cameraPosition);
  return tex1(vSurf);
}
void main() {
  vec3 col = bg(uBgA);
  if (uMix > 0.002) col = mix(col, bg(uBgB), uMix);
  // Colour tint: keeps the texture's light and shade, swaps its hue.
  float tl = dot(col, vec3(0.30, 0.59, 0.11));
  col = mix(col, uTintCol * tl * 2.0, uTintAmt * 0.7);
  float alpha = uOpacity;
  if (uBlinds > 0.5) {
    float f = fract((vWorld.y - uBottom) / 0.118);
    alpha *= smoothstep(0.0, 0.035, f) * (1.0 - smoothstep(0.72, 0.755, f));
    col *= 0.80 + 0.30 * (1.0 - f / 0.74);
  }
  alpha *= smoothstep(0.0, 0.16, vEdge.x) * smoothstep(0.0, 0.14, vEdge.y) * smoothstep(0.0, 0.08, vEdge.z);
  // Dissolve in and out. No abrupt changes between realities.
  float nr = texture2D(uNoise, vSurf * 0.19 + 0.13).r;
  alpha *= smoothstep(nr - 0.22, nr + 0.22, uReveal * 1.44 - 0.22);
  float l = dot(col, vec3(0.30, 0.59, 0.11));
  col = mix(vec3(l), col, uSat);
  gl_FragColor = vec4(col, alpha);
}`;

function gridGeometry(nu, nv, fn) {
  const pos = new Float32Array((nu + 1) * (nv + 1) * 3), surf = new Float32Array((nu + 1) * (nv + 1) * 2), edge = new Float32Array((nu + 1) * (nv + 1) * 3);
  const idx = [];
  let k = 0;
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++, k++) {
    const r = fn(i / nu, j / nv);
    pos.set(r.slice(0, 3), k * 3); surf.set(r.slice(3, 5), k * 2); edge.set(r.slice(5, 8), k * 3);
  }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSurf', new THREE.BufferAttribute(surf, 2));
  g.setAttribute('aEdge', new THREE.BufferAttribute(edge, 3));
  g.setIndex(idx);
  return g;
}

const BG_ID = { tex1: 0, tex2: 1, tex3: 2, beach: 3 };

export class Partition {
  constructor(noise) {
    this.uniforms = {
      uNoise: { value: noise }, uOpacity: { value: 0 }, uReveal: { value: 0 }, uSat: { value: 1 }, uTime: { value: 0 },
      uMix: { value: 0 }, uBlinds: { value: 0 }, uBottom: { value: 0.75 }, uEye: { value: 1.2 }, uBgA: { value: 0 }, uBgB: { value: 0 },
      uYaw: { value: new THREE.Vector2(1, 0) }, uTintCol: { value: new THREE.Color(1, 1, 1) }, uTintAmt: { value: 0 },
    };
    this.material = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms,
      transparent: true, depthWrite: false, depthTest: true, side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), this.material);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 1; this.mesh.visible = false;
    this.group = new THREE.Group(); this.group.add(this.mesh);
    this.seat = { eyeY: 1.2, yaw: 0 };
    this.shape = null; this.distance = 0; this.key = '';
    this.target = { opacity: 0, reveal: 0, sat: 1 };
    this.bg = 'tex1'; this.mixing = false;
    this.tintTarget = new THREE.Color(1, 1, 1); this.tintAmtTarget = 0;
  }

  setTint(hex) {
    if (!hex) { this.tintAmtTarget = 0; return; }
    this.tintTarget.set(hex); this.tintAmtTarget = 1;
    if (this.uniforms.uTintAmt.value < 0.01) this.uniforms.uTintCol.value.copy(this.tintTarget);
  }

  // Seat the partition around the person: head position on the floor plane, facing the way they face.
  place(head, yaw) {
    this.group.position.set(head.x, 0, head.z);
    this.group.rotation.set(0, yaw, 0);
    this.seat.eyeY = THREE.MathUtils.clamp(head.y, 0.9, 1.9);
    this.seat.yaw = yaw;
    this.uniforms.uYaw.value.set(Math.cos(yaw), Math.sin(yaw));
    this.key = '';
  }

  get bottom() { return this.seat.eyeY - 0.47; }
  get top() { return this.seat.eyeY + 0.9; }

  configure(shape, distanceFt) {
    const d = THREE.MathUtils.clamp(distanceFt * FT, 0.5, 5);
    const key = shape + '|' + d.toFixed(3) + '|' + this.seat.eyeY.toFixed(2);
    if (key === this.key) return;
    this.key = key; this.shape = shape; this.distance = d;
    const eye = this.seat.eyeY, bottom = this.bottom, top = this.top, H = top - bottom, BIG = 9;
    let g;
    if (shape === 'rectangle') {
      const W = this.width = THREE.MathUtils.clamp(2.3 * d, 2.4, 7);
      g = gridGeometry(24, 8, (u, v) => { const x = (u - 0.5) * W, y = bottom + v * H; return [x, y, -d, x, y, Math.min(u, 1 - u) * W, (1 - v) * H, v * H]; });
    } else if (shape === 'cubicle') {
      const hw = this.halfWidth = THREE.MathUtils.clamp(0.95 * d, 0.85, 3.2), zb = 0.5, rc = Math.min(0.32, hw * 0.4, d * 0.4);
      const side = d + zb - rc, arc = Math.PI * rc / 2, front = 2 * hw - 2 * rc, total = 2 * side + 2 * arc + front;
      const at = (s) => {
        if (s < side) return [-hw, zb - s];
        s -= side; if (s < arc) { const a = s / rc; return [-hw + rc - rc * Math.cos(a), -d + rc - rc * Math.sin(a)]; }
        s -= arc; if (s < front) return [-hw + rc + s, -d];
        s -= front; if (s < arc) { const a = s / rc; return [hw - rc + rc * Math.sin(a), -d + rc - rc * Math.cos(a)]; }
        s -= arc; return [hw, -d + rc + s];
      };
      g = gridGeometry(120, 8, (u, v) => { const s = u * total, p = at(s), y = bottom + v * H; return [p[0], y, p[1], s, y, Math.min(s, total - s), (1 - v) * H, v * H]; });
    } else if (shape === 'blinds') {
      const span = THREE.MathUtils.degToRad(215);
      g = gridGeometry(96, 8, (u, v) => { const a = (u - 0.5) * span, y = bottom + v * H; return [d * Math.sin(a), y, -d * Math.cos(a), a * d, y, Math.min(u, 1 - u) * span * d, (1 - v) * H, v * H]; });
    } else { // sphere: a dome centred on the eyes, open below desk level
      const e0 = Math.asin(THREE.MathUtils.clamp((bottom - eye) / d, -0.95, 0.3));
      g = gridGeometry(96, 28, (u, v) => {
        const a = (u - 0.5) * Math.PI * 2, e = e0 + v * (Math.PI / 2 - e0);
        return [d * Math.cos(e) * Math.sin(a), eye + d * Math.sin(e), -d * Math.cos(e) * Math.cos(a), a * d, eye + e * d, BIG, BIG, (e - e0) * d];
      });
    }
    this.mesh.geometry.dispose();
    this.mesh.geometry = g;
    this.uniforms.uBlinds.value = shape === 'blinds' ? 1 : 0;
    this.uniforms.uBottom.value = bottom; this.uniforms.uEye.value = eye;
  }

  setBackground(id, instant = false) {
    if (id === this.bg) return;
    const u = this.uniforms;
    if (instant || u.uOpacity.value < 0.01) { u.uBgA.value = BG_ID[id] ?? 0; u.uMix.value = 0; this.mixing = false; }
    else { if (this.mixing && u.uMix.value > 0.5) u.uBgA.value = u.uBgB.value; u.uBgB.value = BG_ID[id] ?? 0; u.uMix.value = 0; this.mixing = true; }
    this.bg = id;
  }

  // Where a marker for someone at a given bearing sits on the partition (local space, eye height).
  shellPoint(az, out = new THREE.Vector3()) {
    const d = this.distance, eye = this.seat.eyeY;
    if (this.shape === 'rectangle') {
      const lim = Math.atan2(this.width / 2 - 0.2, d); const a = THREE.MathUtils.clamp(az, -lim, lim);
      return out.set(d * Math.tan(a), eye, -d);
    }
    if (this.shape === 'cubicle') {
      const hw = this.halfWidth, lim = Math.PI * 0.72, a = THREE.MathUtils.clamp(az, -lim, lim);
      const sx = Math.sin(a), cz = -Math.cos(a);
      const r = Math.min(cz < -0.01 ? d / -cz : 99, Math.abs(sx) > 0.01 ? hw / Math.abs(sx) : 99);
      return out.set(sx * r, eye, cz * r);
    }
    const lim = this.shape === 'blinds' ? THREE.MathUtils.degToRad(100) : Math.PI;
    const a = THREE.MathUtils.clamp(az, -lim, lim);
    return out.set(d * Math.sin(a), eye, -d * Math.cos(a));
  }

  update(dt, time) {
    const u = this.uniforms, t = this.target;
    u.uTime.value = time;
    const ease = (cur, to, rate) => cur + (to - cur) * (1 - Math.exp(-dt * rate));
    u.uOpacity.value = ease(u.uOpacity.value, t.opacity, 2.2);
    u.uReveal.value = ease(u.uReveal.value, t.reveal, 1.5);
    u.uSat.value = ease(u.uSat.value, t.sat, 1.4);
    u.uTintAmt.value = ease(u.uTintAmt.value, this.tintAmtTarget, 3);
    u.uTintCol.value.lerp(this.tintTarget, 1 - Math.exp(-dt * 3));
    if (this.mixing) { u.uMix.value = Math.min(1, u.uMix.value + dt / 2.5); if (u.uMix.value >= 1) { u.uBgA.value = u.uBgB.value; u.uMix.value = 0; this.mixing = false; } }
    this.mesh.visible = u.uOpacity.value > 0.004 && u.uReveal.value > 0.004;
  }
}
