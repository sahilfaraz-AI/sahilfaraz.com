// A stand-in café for the browser preview (and for VR-only headsets), so the partition has a busy room to hide.
// On Quest 3 none of this is shown: the real room comes through passthrough.
import * as THREE from 'three';

const SCREEN_FRAG = /* glsl */`
precision highp float; varying vec2 vUv; uniform float uSat; uniform float uTime;
float box(vec2 p, vec2 a, vec2 b) { vec2 s = step(a, p) * step(p, b); return s.x * s.y; }
void main() {
  vec2 p = vUv; vec3 col = vec3(0.95, 0.96, 0.97);
  col = mix(col, vec3(0.13, 0.16, 0.22), box(p, vec2(0.0, 0.90), vec2(1.0, 1.0)));
  col = mix(col, vec3(0.93, 0.33, 0.27), box(p, vec2(0.05, 0.52), vec2(0.36, 0.84)));
  col = mix(col, vec3(0.20, 0.55, 0.92), box(p, vec2(0.40, 0.52), vec2(0.66, 0.84)));
  col = mix(col, vec3(0.98, 0.75, 0.20), box(p, vec2(0.70, 0.52), vec2(0.95, 0.84)));
  col = mix(col, vec3(0.30, 0.74, 0.45), box(p, vec2(0.05, 0.12), vec2(0.50, 0.44)));
  col = mix(col, vec3(0.62, 0.36, 0.86), box(p, vec2(0.54, 0.30), vec2(0.95, 0.44)));
  col = mix(col, vec3(0.80, 0.82, 0.85), box(p, vec2(0.54, 0.12), vec2(0.95, 0.24)));
  float l = dot(col, vec3(0.30, 0.59, 0.11));
  gl_FragColor = vec4(mix(vec3(l), col, uSat) * 0.92, 1.0);
}`;

export class Room {
  constructor() {
    const g = this.group = new THREE.Group();
    const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o });
    const box = (w, h, d, mat, x, y, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); g.add(m); return m; };

    // Shell
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), std(0x5b4433, { roughness: 0.7 }));
    floor.rotation.x = -Math.PI / 2; g.add(floor);
    const wall = std(0x8a7663), wall2 = std(0x756353);
    box(18, 3.4, 0.2, wall, 0, 1.7, -8); box(0.2, 3.4, 18, wall2, -7, 1.7, 0); box(0.2, 3.4, 18, wall2, 7, 1.7, 0); box(18, 3.4, 0.2, wall2, 0, 1.7, 8);
    box(18, 0.2, 18, new THREE.MeshBasicMaterial({ color: 0x43382f }), 0, 3.5, 0);
    const win = new THREE.MeshBasicMaterial({ color: 0xf0cf9c });
    for (const x of [-4.6, -1.55, 1.55, 4.6]) { box(2.3, 2.0, 0.06, win, x, 1.75, -7.88); box(0.08, 2.0, 0.08, wall2, x, 1.75, -7.84); }
    // Counter with a splash of colour, like the café in the case study photo
    box(4.2, 1.05, 0.7, std(0x7a4b32), -4.2, 0.52, -6.6); box(4.3, 0.06, 0.8, std(0x2f2a26), -4.2, 1.08, -6.6);
    box(0.9, 1.9, 0.6, std(0x1f4fa3), 5.9, 0.95, -6.9); box(0.5, 0.9, 0.05, new THREE.MeshBasicMaterial({ color: 0xd8342c }), 5.9, 1.35, -6.58);

    // Your desk
    const wood = std(0xb9895a, { roughness: 0.6 });
    box(1.5, 0.045, 0.75, wood, 0, 0.735, -0.62);
    for (const [x, z] of [[-0.68, -0.3], [0.68, -0.3], [-0.68, -0.94], [0.68, -0.94]]) box(0.05, 0.72, 0.05, std(0x2b2b2b), x, 0.36, z);
    const alu = std(0xb9bcc0, { roughness: 0.35, metalness: 0.6 });
    box(0.34, 0.014, 0.235, alu, 0, 0.765, -0.5);
    this.screenMat = new THREE.ShaderMaterial({ uniforms: { uSat: { value: 1 }, uTime: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: SCREEN_FRAG });
    const lid = new THREE.Group(); lid.position.set(0, 0.772, -0.615); lid.rotation.x = -0.28; g.add(lid);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.225, 0.008), alu); back.position.set(0, 0.1125, 0); lid.add(back);
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.2), this.screenMat); scr.position.set(0, 0.113, 0.0045); lid.add(scr);
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.09, 20), std(0xe9e4da, { roughness: 0.4 })); mug.position.set(0.42, 0.803, -0.52); g.add(mug);
    box(0.075, 0.009, 0.15, std(0x111214, { roughness: 0.3 }), -0.38, 0.762, -0.45);
    box(0.066, 0.002, 0.14, new THREE.MeshBasicMaterial({ color: 0x3b7bd6 }), -0.38, 0.7675, -0.45);

    // Other tables
    const tableTop = std(0x8a6a4c), dark = std(0x26221f);
    const chairCols = [0x2aa7a0, 0xd0a13c, 0xc6553b, 0x2aa7a0, 0x6a7fbf];
    const tables = [[-2.6, -3.4], [2.7, -3.9], [-0.4, -5.6], [4.3, -1.6], [-4.4, -1.2]];
    tables.forEach(([x, z], i) => {
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.04, 28), tableTop); top.position.set(x, 0.74, z); g.add(top);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.72, 10), dark); leg.position.set(x, 0.36, z); g.add(leg);
      const cm = std(chairCols[i % chairCols.length], { roughness: 0.5 });
      for (const s of [-1, 1]) { box(0.36, 0.04, 0.36, cm, x + s * 0.62, 0.46, z + 0.1 * s); box(0.36, 0.42, 0.04, cm, x + s * 0.78, 0.68, z + 0.1 * s).rotation.y = Math.PI / 2; }
    });

    // Lights
    g.add(new THREE.HemisphereLight(0xfff0dc, 0x5a4a3c, 1.5));
    const sun = new THREE.DirectionalLight(0xffe0b0, 1.5); sun.position.set(-2, 4, -6); g.add(sun);
    for (const [x, z] of [[-2.6, -3.4], [2.7, -3.9], [0, -0.9]]) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffd9a0 })); bulb.position.set(x, 2.55, z); g.add(bulb);
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.85, 6), dark); cord.position.set(x, 3.0, z); g.add(cord);
      const pl = new THREE.PointLight(0xffc98a, 2.2, 6, 1.8); pl.position.set(x, 2.4, z); g.add(pl);
    }

    // People. Three walk around, two sit. Their positions feed the people indicator in the preview.
    const skin = std(0xd9a58a, { roughness: 0.7 });
    const person = (shirt, seated = false) => {
      const p = new THREE.Group();
      const legs = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, seated ? 0.3 : 0.62, 4, 12), std(0x2c3440)); legs.position.y = seated ? 0.42 : 0.45; p.add(legs);
      const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.36, 4, 12), std(shirt, { roughness: 0.6 })); torso.position.y = seated ? 0.92 : 1.16; p.add(torso);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 18, 14), skin); head.position.y = seated ? 1.32 : 1.57; p.add(head);
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), std(0x1d1814)); hair.position.y = head.position.y + 0.012; p.add(hair);
      g.add(p); return p;
    };
    this.walkers = [
      { mesh: person(0xd8452f), id: 'a', path: (t) => [Math.sin(t * 0.22) * 4.4, -3.0 + Math.sin(t * 0.13) * 0.5] },
      { mesh: person(0x2f9aa6), id: 'b', path: (t) => [1.5 + Math.sin(t * 0.09) * 0.3, -4.2 + Math.sin(t * 0.16 + 4.2) * 2.5] },
      { mesh: person(0xe0aa3a), id: 'c', path: (t) => [Math.cos(t * 0.11 + 2.0) * 5.6, -1.2 + Math.sin(t * 0.11 + 2.0) * 5.4] },
    ];
    this.seated = [person(0x8e3b3b, true), person(0x3d5fa8, true)];
    this.seated[0].position.set(-2.0, 0, -3.3); this.seated[0].rotation.y = -1.2;
    this.seated[1].position.set(3.3, 0, -3.8); this.seated[1].rotation.y = 1.4;
    this._p = new THREE.Vector3(); this._prev = new Map();
  }

  update(time, dt) {
    for (const w of this.walkers) {
      const [x, z] = w.path(time), prev = this._prev.get(w.id) || [x, z];
      const dx = x - prev[0], dz = z - prev[1];
      w.mesh.position.set(x, Math.abs(Math.sin(time * 5.5 + x)) * 0.025, z);
      if (Math.hypot(dx, dz) > 1e-5) w.mesh.rotation.y = Math.atan2(dx, dz);
      this._prev.set(w.id, [x, z]);
    }
  }

  // People positions in the seat frame of the partition group, as bearings and distances.
  detections(seatGroup) {
    const out = [];
    const add = (id, obj) => {
      this._p.copy(obj.position); seatGroup.worldToLocal(this._p);
      out.push({ id, az: Math.atan2(this._p.x, -this._p.z), dist: Math.hypot(this._p.x, this._p.z) });
    };
    for (const w of this.walkers) add(w.id, w.mesh);
    this.seated.forEach((s, i) => add('s' + i, s));
    return out;
  }
}
