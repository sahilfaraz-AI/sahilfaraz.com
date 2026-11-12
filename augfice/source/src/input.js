// Input. Three ways to interact, as in the project:
//   1. Hand ray (or controller ray) with pinch. Also direct touch with the index finger.
//   2. Head tracking with an air-tap (pinch). Point with your head.
//   3. Mouse and keyboard.
import * as THREE from 'three';

const _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _n = new THREE.Vector3(), _m = new THREE.Matrix4();

function makeCursor() {
  const g = new THREE.Group();
  const mat = (o) => new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: o, depthTest: false, depthWrite: false, toneMapped: false });
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.0045, 24), mat(0.95));
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.0085, 0.0105, 40), mat(0.6));
  dot.renderOrder = 50; ring.renderOrder = 50;
  g.add(dot, ring); g.visible = false; g.userData = { dot, ring };
  return g;
}

function makeRay() {
  const geo = new THREE.CylinderGeometry(0.0012, 0.0012, 1, 8, 1, true);
  geo.rotateX(-Math.PI / 2); geo.translate(0, 0, -0.5);
  const mat = new THREE.ShaderMaterial({
    uniforms: { uOpacity: { value: 0.4 }, uColor: { value: new THREE.Color(1, 1, 1) } },
    vertexShader: 'varying float vT; void main(){ vT = -position.z; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'precision highp float; varying float vT; uniform float uOpacity; uniform vec3 uColor; void main(){ float a = smoothstep(0.0, 0.08, vT) * (1.0 - smoothstep(0.55, 1.0, vT)); gl_FragColor = vec4(uColor, a * uOpacity); }',
    transparent: true, depthTest: false, depthWrite: false,
  });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = 49; m.visible = false; m.frustumCulled = false;
  return m;
}

export class Input {
  constructor(app) {
    this.app = app; this.targets = []; this.scene = app.scene;
    const mk = (id, kind, slot, ray = false) => {
      const p = { id, kind, slot, origin: new THREE.Vector3(), dir: new THREE.Vector3(0, 0, -1), active: false, pressed: false, was: false,
        capture: null, cursor: makeCursor(), ray: ray ? makeRay() : null, source: null, connected: false, select: false, z: 1, prevZ: 1, suppressed: false };
      this.scene.add(p.cursor); if (p.ray) this.scene.add(p.ray);
      return p;
    };
    this.mouse = mk('mouse', 'mouse', 0);
    this.xr = [mk('xr0', 'ray', 0, true), mk('xr1', 'ray', 1, true)];
    this.poke = [mk('poke0', 'poke', 0), mk('poke1', 'poke', 1)];
    this.head = mk('head', 'head', 0);
    this.pointers = [this.mouse, ...this.xr, ...this.poke, this.head];
    this.ndc = new THREE.Vector2(); this.mouseInside = false; this.look = null; this.hands = []; this.controllers = [];
    this.overRegion = false;
  }

  addTarget(panel, owner) { this.targets.push({ panel, owner }); }

  bindXR(renderer) {
    for (let i = 0; i < 2; i++) {
      const c = renderer.xr.getController(i), p = this.xr[i];
      c.addEventListener('connected', (e) => { p.connected = true; p.source = e.data; });
      c.addEventListener('disconnected', () => { p.connected = false; p.source = null; p.select = false; });
      c.addEventListener('selectstart', () => { p.select = true; p.latch = true; p.headLatch = true; });
      c.addEventListener('selectend', () => { p.select = false; });
      this.scene.add(c); this.controllers.push(c);
      const h = renderer.xr.getHand(i); this.scene.add(h); this.hands.push(h);
    }
  }

  bindDOM(dom, camera) {
    this.dom = dom; this.camera = camera;
    const set = (e) => { const r = dom.getBoundingClientRect(); this.ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); };
    dom.addEventListener('pointermove', (e) => {
      set(e); this.mouseInside = true;
      if (this.look) { this.app.lookBy((e.clientX - this.look.x) * -0.0028, (e.clientY - this.look.y) * -0.0028); this.look.x = e.clientX; this.look.y = e.clientY; }
    });
    dom.addEventListener('pointerdown', (e) => { set(e); this.mouseInside = true; this.mouse.select = true; this.latch = true; this.downEvent = e; try { dom.setPointerCapture(e.pointerId); } catch (err) { /* ok */ } });
    const up = (e) => { this.mouse.select = false; this.look = null; if (e.pointerType !== 'mouse') this.touchEnded = true; };
    dom.addEventListener('pointerup', up); dom.addEventListener('pointercancel', up);
    dom.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !this.mouse.select) this.mouseInside = false; });
  }

  hitTest(p) {
    let best = null;
    for (const t of this.targets) {
      if (!t.panel.enabled || !t.panel.group.visible) continue;
      const hit = t.panel.intersect(p.origin, p.dir);
      if (!hit) continue;
      const zone = t.panel.zoneAt(hit.x, hit.y);
      if (zone && (!best || hit.dist < best.hit.dist)) best = { ...t, hit, zone };
    }
    return best;
  }

  update(dt, head, presenting) {
    const app = this.app, headMode = presenting && app.store.data.settings.pointer === 'head';
    for (const t of this.targets) { t.panel.clearPointer(0); t.panel.clearPointer(1); t.panel.barTarget = 0; t.panel.cornerTarget.fill(0); }
    this.overRegion = false;

    // --- gather pointer rays ---
    const m = this.mouse;
    m.active = !presenting && this.mouseInside && !this.look;
    if (m.active) { m.origin.setFromMatrixPosition(this.camera.matrixWorld); m.dir.set(this.ndc.x, this.ndc.y, 0.5).unproject(this.camera).sub(m.origin).normalize(); }
    m.pressed = m.active && (m.select || !!this.latch); this.latch = false;

    for (let i = 0; i < 2; i++) {
      const p = this.xr[i], c = this.controllers[i], pk = this.poke[i], h = this.hands[i];
      // direct touch
      pk.active = false; pk.pressed = pk.pressed && presenting;
      const tip = presenting && h && h.joints ? h.joints['index-finger-tip'] : null;
      let near = false;
      if (tip && tip.visible && h.visible !== false) {
        tip.getWorldPosition(_v);
        let bestT = null, bestZ = 1e9, bx = 0, by = 0;
        for (const t of this.targets) {
          const pn = t.panel; if (!pn.enabled || !pn.group.visible) continue;
          pn.group.updateWorldMatrix(true, false);
          _m.copy(pn.group.matrixWorld).invert(); _n.copy(_v).applyMatrix4(_m);
          const sc = pn.group.matrixWorld.getMaxScaleOnAxis(), z = _n.z * sc;
          const x = _n.x / pn.s + pn.w / 2, y = pn.h / 2 - _n.y / pn.s;
          if (z > (pk.pressed ? -0.14 : -0.04) && z < 0.1 && pn.zoneAt(x, y) === 'content' && Math.abs(z) < Math.abs(bestZ)) { bestT = t; bestZ = z; bx = x; by = y; }
        }
        if (bestT) {
          near = true; pk.active = true; pk.prevZ = pk.z; pk.z = bestZ;
          const pn = bestT.panel;
          _n.set(0, 0, 1).transformDirection(pn.group.matrixWorld);
          pk.origin.copy(_v).addScaledVector(_n, 0.25 - bestZ + 0.0); pk.dir.copy(_n).negate();
          // a touch starts when the fingertip reaches the glass from the front, and ends when it pulls back
          if (!pk.pressed && pk.z <= 0.004 && pk.prevZ > 0.004 && pk.prevZ < 0.09) pk.pressed = true;
          else if (pk.pressed && pk.z > 0.024) pk.pressed = false;
        }
      }
      if (!near) { pk.pressed = false; pk.z = pk.prevZ = 1; }

      p.active = presenting && p.connected && c.visible && !headMode && !near;
      if (presenting && p.connected && c.visible) { c.getWorldPosition(p.origin); c.getWorldQuaternion(_q); p.dir.set(0, 0, -1).applyQuaternion(_q).normalize(); }
      p.pressed = p.active && (p.select || !!p.latch); p.latch = false;
    }

    const hd = this.head;
    hd.active = headMode;
    if (headMode) { hd.origin.copy(head.pos); hd.dir.copy(head.forward); }
    hd.pressed = headMode && (this.xr[0].select || this.xr[1].select || !!this.xr[0].headLatch || !!this.xr[1].headLatch); this.xr[0].headLatch = this.xr[1].headLatch = false;

    // --- resolve each pointer ---
    for (const p of this.pointers) {
      if (!p.active) {
        if (p.capture) this.release(p, null);
        p.was = false; p.cursor.visible = false; if (p.ray) p.ray.visible = false;
        continue;
      }
      const best = p.capture ? null : this.hitTest(p);
      const cap = p.capture;
      let shown = best;

      if (cap) {
        const hit = cap.panel.intersect(p.origin, p.dir);
        if (hit) {
          shown = { ...cap, hit };
          if (cap.zone === 'content') { cap.panel.setPointer(p.slot, hit.x, hit.y, cap.region, true); if (cap.region && cap.region.onDrag) cap.region.onDrag(hit.x, hit.y, p); }
          else if (cap.zone === 'bar') cap.panel.barTarget = 1;
          else cap.panel.cornerTarget[+cap.zone.slice(6)] = 1;
        }
        if (cap.zone !== 'content' && cap.owner) cap.owner.dragUpdate(p, head.pos);
        if (!p.pressed) this.release(p, hit);
      } else if (best) {
        const pn = best.panel;
        if (best.zone === 'content') {
          const region = pn.findRegion(best.hit.x, best.hit.y);
          pn.setPointer(p.slot, best.hit.x, best.hit.y, region, p.pressed);
          if (region) this.overRegion = true;
          if (p.pressed && !p.was) {
            p.capture = { ...best, region };
            if (region && region.onDown) region.onDown(best.hit.x, best.hit.y, p);
          }
        } else {
          if (best.zone === 'bar') pn.barTarget = 1; else pn.cornerTarget[+best.zone.slice(6)] = 1;
          this.overRegion = true;
          if (p.pressed && !p.was && best.owner) {
            p.capture = { ...best, region: null };
            if (best.zone === 'bar') best.owner.beginMove(p, best.hit, head.pos); else best.owner.beginResize(p, best.hit);
            app.feedback(p, 0.3);
          }
        }
      } else if (p.kind === 'mouse' && p.pressed && !p.was && this.downEvent) {
        this.look = { x: this.downEvent.clientX, y: this.downEvent.clientY };
      }
      p.was = p.pressed;

      // visuals
      const showCursor = shown && p.kind !== 'mouse';
      p.cursor.visible = !!showCursor;
      if (showCursor) {
        const pn = shown.panel;
        pn.pxToLocal(shown.hit.x, shown.hit.y, p.cursor.position); p.cursor.position.z = 0.003;
        p.cursor.position.applyMatrix4(pn.group.matrixWorld);
        pn.group.getWorldQuaternion(p.cursor.quaternion);
        const { dot, ring } = p.cursor.userData;
        if (p.kind === 'poke') { const k = THREE.MathUtils.clamp(p.z / 0.08, 0, 1); ring.scale.setScalar(0.9 + 2.4 * k); ring.material.opacity = 0.75 * (1 - k * 0.6); dot.scale.setScalar(p.pressed ? 1.5 : 1); }
        else { ring.scale.setScalar(p.pressed ? 0.72 : 1); ring.material.opacity = p.pressed ? 0.95 : 0.6; dot.scale.setScalar(p.pressed ? 0.8 : 1); }
      }
      if (p.ray) {
        p.ray.visible = true;
        p.ray.position.copy(p.origin);
        p.ray.quaternion.setFromUnitVectors(_n.set(0, 0, -1), p.dir);
        const len = shown ? Math.min(shown.hit.dist, 3) : 0.55;
        p.ray.scale.set(1, 1, len);
        p.ray.material.uniforms.uOpacity.value = shown ? (p.pressed ? 0.85 : 0.5) : 0.16;
      }
    }
    if (this.touchEnded && !m.pressed && !m.capture) { this.touchEnded = false; this.mouseInside = false; }
    if (this.dom) this.dom.style.cursor = this.look ? 'grabbing' : this.overRegion && !presenting ? 'pointer' : 'default';
  }

  release(p, hit) {
    const cap = p.capture; p.capture = null;
    if (!cap) return;
    if (cap.zone !== 'content') { if (cap.owner) cap.owner.endDrag(); return; }
    const r = cap.region;
    if (r && r.onUp) r.onUp(p);
    if (r && hit && r.onClick) {
      const now = cap.panel.findRegion(hit.x, hit.y);
      if (now && now.id === r.id) { this.app.feedback(p, 0.5); r.onClick(p); }
    }
  }
}
