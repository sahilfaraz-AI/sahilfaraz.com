// Aug-Fice: a quiet office you can wear.
// Mixed reality focus app for Meta Quest 3 (WebXR passthrough), with a browser preview for everything else.
// Concept and design: Sahil Faraz. Concept team: Sahil Faraz, Grace Chen, Sabrina Yeasmin (University of Toronto, 2021).
import * as THREE from 'three';
import { C, loadFonts } from './theme.js';
import { loadIcons } from './icons.js';
import { Store, BGS, TINT_HEX } from './store.js';
import { MainWindow } from './window.js';
import { Keyboard } from './keyboard.js';
import { Partition, makeNoiseTexture } from './partition.js';
import { PeopleLayer, DepthPresence } from './people.js';
import { Room } from './room.js';
import { Input } from './input.js';
import { Sounds } from './audio.js';
import { drawScreen } from './screens.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);

class App {
  constructor() {
    this.store = new Store();
    this.sounds = new Sounds();
    this.xr = false; this.xrMode = null; this.started = false; this.placed = false;
    this.depthAvailable = false; this.info = null; this.toastMsg = null; this.toastUntil = 0;
    this.accentHex = C.green; this.todoPage = 0; this.editingId = null; this.completed = null;
    this.pending = null; this.fade = 1; this.fadeDir = 0; this.splashAt = 0; this.sessionBg = null; this.lastKey = '';
    this.time = 0; this.frames = 0; this.yaw = 0; this.pitch = 0;
    this.head = { pos: new THREE.Vector3(0, 1.2, 0.12), forward: new THREE.Vector3(0, 0, -1), quat: new THREE.Quaternion() };

    const canvas = $('stage');
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.setClearColor(0x000000, 0);
    r.xr.enabled = true;
    try { r.xr.setFramebufferScaleFactor(1.2); r.xr.setFoveation(0.5); } catch (e) { /* older runtimes */ }
    this.scene = new THREE.Scene();
    this.bgColor = new THREE.Color(0x191512);
    this.scene.background = this.bgColor;
    this.scene.fog = new THREE.Fog(0x191512, 9, 22);
    this.camera = new THREE.PerspectiveCamera(56, 1, 0.05, 60);
    this.camera.position.copy(this.head.pos);
    this.scene.add(this.camera);

    const aniso = Math.min(8, r.capabilities.getMaxAnisotropy());
    this.room = new Room(); this.scene.add(this.room.group);
    this.partition = new Partition(makeNoiseTexture()); this.scene.add(this.partition.group);
    this.partition.place(this.head.pos, 0);
    this.people = new PeopleLayer(this.partition);
    this.depth = new DepthPresence();
    this.veil = new THREE.Mesh(new THREE.SphereGeometry(0.6, 24, 16), new THREE.MeshBasicMaterial({ color: 0x858585, transparent: true, opacity: 0, side: THREE.BackSide, depthTest: false, depthWrite: false, fog: false, toneMapped: false }));
    this.veil.renderOrder = 3; this.veil.visible = false; this.scene.add(this.veil);

    this.window = new MainWindow({ maxAniso: aniso }); this.scene.add(this.window.group);
    this.window.place(this.head.pos, this.head.forward, { instant: true });
    this.keyboard = new Keyboard({ maxAniso: aniso });
    this.keyboard.panel.enabled = false;
    this.keyboard.group.position.set(0, -0.37, 0.15); this.keyboard.group.rotation.x = -0.42;
    this.window.group.add(this.keyboard.group);

    this.input = new Input(this);
    this.input.addTarget(this.window.panel, this.window);
    this.input.addTarget(this.keyboard.panel, null);
    this.input.bindXR(r);
    this.input.bindDOM(canvas, this.camera);

    this.store.on((type, detail) => this.onStore(type, detail));
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('keydown', (e) => { if (this.keyboard.key(e)) e.preventDefault(); });
    r.xr.addEventListener('sessionstart', () => this.onSessionStart());
    r.xr.addEventListener('sessionend', () => this.onSessionEnd());
    this.resize();
    this.applySettings();
    this.clock = new THREE.Clock();
    r.setAnimationLoop((t, frame) => this.tick(frame));
  }

  // ---------- launch page ----------
  async setupLaunch() {
    const enter = $('enter'), preview = $('preview'), note = $('xr-note'), tasks = $('tasks');
    let ar = false, vr = false;
    if (navigator.xr && navigator.xr.isSessionSupported) {
      try { ar = await navigator.xr.isSessionSupported('immersive-ar'); } catch (e) { /* no */ }
      try { vr = await navigator.xr.isSessionSupported('immersive-vr'); } catch (e) { /* no */ }
    }
    this.xrMode = ar ? 'immersive-ar' : vr ? 'immersive-vr' : null;
    if (this.xrMode) {
      enter.querySelector('span').textContent = ar ? 'Enter mixed reality' : 'Enter VR';
      enter.hidden = false; preview.classList.add('secondary');
      preview.querySelector('span').textContent = 'Preview on this screen';
      note.textContent = ar ? 'Sit at your desk first. The partition is placed around where you are looking when you enter.' : 'This headset has no passthrough, so Aug-Fice runs in a simulated café.';
    } else {
      enter.hidden = true;
      note.textContent = 'On a Meta Quest 3, open this page in the headset browser to use Aug-Fice in your own room.';
    }
    enter.addEventListener('click', () => this.enterXR());
    preview.addEventListener('click', () => this.startPreview());
    tasks.value = this.store.data.prepared.join('\n');
    tasks.addEventListener('input', () => {
      this.store.data.prepared = tasks.value.split('\n').map((s) => s.trim()).filter(Boolean).slice(0, 30);
      this.store.save(); this.redraw();
    });
    $('launch').classList.add('ready');
  }

  showLaunch(on) { $('launch').classList.toggle('hidden', !on); $('hint').classList.toggle('show', !on && !this.xr); if (!on) setTimeout(() => $('hint').classList.remove('show'), 7000); }

  startPreview() {
    this.sounds.unlock(); this.started = true; this.showLaunch(false);
    this.splashAt = this.time; this.redraw();
  }

  exitPreview() {
    this.endSession(true); this.started = false; this.hardGo('splash'); this.showLaunch(true);
    this.yaw = this.pitch = 0; this.window.userMoved = false; this.window.locked = false;
    this.window.place(this.head.pos.set(0, 1.2, 0.12), new THREE.Vector3(0, 0, -1));
  }

  async enterXR() {
    if (!this.xrMode || this.xr) return;
    this.sounds.unlock();
    const base = { requiredFeatures: ['local-floor'], optionalFeatures: ['hand-tracking'] };
    let session = null;
    try {
      if (this.xrMode === 'immersive-ar' && params.get('depth') !== '0') {
        try {
          session = await navigator.xr.requestSession(this.xrMode, { ...base, optionalFeatures: ['hand-tracking', 'depth-sensing'], depthSensing: { usagePreference: ['gpu-optimized'], dataFormatPreference: [] } });
        } catch (e) { session = null; }
      }
      if (!session) session = await navigator.xr.requestSession(this.xrMode, base);
      this.renderer.xr.setReferenceSpaceType('local-floor');
      await this.renderer.xr.setSession(session);
    } catch (e) {
      console.warn('[Aug-Fice] could not start the session', e);
      $('xr-note').textContent = 'The headset did not start a session. Check that the browser has permission to use mixed reality, then try again.';
    }
  }

  onSessionStart() {
    this.xr = true; this.started = true; this.placed = false; this.frames = 0;
    const ar = this.xrMode === 'immersive-ar';
    this.room.group.visible = !ar;
    this.scene.background = ar ? null : this.bgColor;
    this.window.opacity = 0; this.window.userMoved = false;
    this.showLaunch(false); $('hint').classList.remove('show');
    if (this.store.screen !== 'splash') this.hardGo('splash');
    this.redraw();
  }

  onSessionEnd() {
    this.xr = false; this.depthAvailable = false;
    this.endSession(true);
    this.room.group.visible = true; this.scene.background = this.bgColor;
    this.started = false; this.hardGo('splash'); this.showLaunch(true);
    this.yaw = this.pitch = 0;
    this.head.pos.set(0, 1.2, 0.12);
    this.partition.place(this.head.pos, 0);
    this.window.userMoved = false; this.window.locked = false; this.window.scale = this.window.tScale = 1;
    this.window.place(this.head.pos, new THREE.Vector3(0, 0, -1), { instant: true });
    this.resize();
  }

  exitXR() { const s = this.renderer.xr.getSession(); if (s) s.end(); }

  resize() {
    if (this.renderer.xr.isPresenting) return;
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.viewW = w; this.viewH = h; this.applyView(true);
  }

  // Frame the window for the screen. While the launch card is up, pull back and slide the view aside
  // so the card does not cover the window.
  applyView(force) {
    const launch = !this.started && !this.xr, wide = this.viewW >= 1080, a = this.camera.aspect;
    const tx = launch && wide ? -0.2 : 0, ty = launch && !wide ? 0.22 : 0;
    const tf = launch ? (wide ? 0.5 : 0.8) : Math.min(0.7, 0.92); // share of the view width the window takes
    if (this.vox === undefined) { this.vox = tx; this.voy = ty; this.vf = tf; force = true; }
    const moving = Math.abs(tx - this.vox) > 0.0005 || Math.abs(ty - this.voy) > 0.0005 || Math.abs(tf - this.vf) > 0.0005;
    if (!moving && !force) return;
    const k = moving ? 0.085 : 1;
    this.vox += (tx - this.vox) * k; this.voy += (ty - this.voy) * k; this.vf += (tf - this.vf) * k;
    const halfW = (1.1 / this.vf) / 2 / 1.25; // tan of the horizontal half angle that gives that share
    this.camera.fov = THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(2 * Math.atan(halfW / a)), 38, 105);
    if (Math.abs(this.vox) < 0.0005 && Math.abs(this.voy) < 0.0005) this.camera.clearViewOffset();
    else this.camera.setViewOffset(this.viewW, this.viewH, this.vox * this.viewW, this.voy * this.viewH, this.viewW, this.viewH);
    this.camera.updateProjectionMatrix();
  }

  lookBy(dx, dy) { this.yaw += dx; this.pitch = THREE.MathUtils.clamp(this.pitch + dy, -0.9, 0.9); }

  // ---------- navigation ----------
  redraw() { this.window.panel.dirty = true; }
  canBack() { return this.store.history.length > 0; }

  go(screen, { push = true } = {}) {
    if (this.pending === screen || (this.store.screen === screen && !this.pending)) return;
    if (this.keyboard.open) this.keyboard.hide(true);
    if (push) this.store.history.push(this.store.screen);
    this.info = null; this.pending = screen; this.fadeDir = -1;
    this.window.panel.regions.length = 0;
  }

  hardGo(screen) { this.store.history.length = 0; this.pending = null; this.fadeDir = 0; this.fade = 1; this.store.screen = screen; this.info = null; if (this.keyboard.open) this.keyboard.hide(false); this.redraw(); }

  back() { const prev = this.store.history.pop(); if (prev) this.go(prev, { push: false }); }

  toggleInfo(key, y) { this.info = key && (!this.info || this.info.key !== key) ? { key, y } : null; this.redraw(); }
  toast(msg) { this.toastMsg = msg; this.toastUntil = this.time + 2.6; this.redraw(); }
  feedback(p, strength = 0.4) {
    this.sounds.tap();
    try { const g = p && p.source && p.source.gamepad; if (g && g.hapticActuators && g.hapticActuators[0]) g.hapticActuators[0].pulse(strength, 18); } catch (e) { /* no haptics */ }
  }

  openSettings(tab) {
    const s = this.store.session;
    this.settingsTab = tab || (s && s.phase !== 'done' ? 'space' : (this.settingsTab || 'space'));
    this.go('settings');
  }

  toggleLock() { this.window.locked = !this.window.locked; this.toastSilent(); this.redraw(); }
  toastSilent() { /* the lock icon itself shows the state */ }

  leaveSplash() { if (this.started && this.store.screen === 'splash' && !this.pending) this.go('mode', { push: false }); }

  // ---------- the flow ----------
  chooseMode(m) { this.store.data.mode = m; this.store.save(); this.go('environment'); }
  customizeMode(m) { this.store.data.mode = m; this.store.save(); this.go(m === 'zen' ? 'customizeZen' : 'customizeSession'); }
  chooseEnv(e) { this.store.data.env = e; this.store.save(); if (this.store.data.mode === 'focus') this.go('todo'); else this.nextIntro(); }
  customizeEnv(e) { this.store.data.env = e; this.store.save(); this.go('customizeEnv'); }
  afterTodo() { this.store.data.todos = this.store.data.todos.filter((t) => t.text.trim()); this.store.save(); this.nextIntro(); }

  importTodos() {
    const n = this.store.importPrepared();
    this.toast(n ? `Imported ${n} ${n === 1 ? 'task' : 'tasks'}` : this.store.data.prepared.length ? 'Those tasks are already on your list' : 'No tasks on the launch page yet');
  }

  editText(initial, placeholder, done) { this.keyboard.show(initial, { placeholder, onDone: (text, commit) => { if (commit) done(text); this.redraw(); } }); }

  editTodo(t) {
    if (this.keyboard.open) this.keyboard.hide(true);
    this.editingId = t.id; this.redraw();
    this.keyboard.show(t.text, { placeholder: 'New task', onChange: (text) => { t.text = text; this.redraw(); },
      onDone: (text) => { t.text = text; this.editingId = null; if (!text) this.store.removeTodo(t.id); else this.store.changed(); } });
  }

  // Feature introductions appear once. Each feature starts switched off and asks first.
  nextIntro() {
    const d = this.store.data, focus = d.mode === 'focus';
    if (!d.seen.people) return this.go('introPeople');
    if (focus && !d.seen.whitelist) return this.go('whitelist');
    if (focus && !d.seen.gray) return this.go('introGray');
    this.startSession();
  }

  answerPeople(yes) { const d = this.store.data; d.seen.people = true; for (const k of Object.keys(d.presets)) d.presets[k].people = yes; this.store.save(); this.nextIntro(); }
  afterWhitelist() { this.store.data.seen.whitelist = true; this.store.save(); this.nextIntro(); }
  answerGray(yes) { const d = this.store.data; d.seen.gray = true; for (const k of Object.keys(d.presets)) d.presets[k].gray = yes; this.store.save(); this.nextIntro(); }
  resetTips() { const s = this.store.data.seen; s.people = s.whitelist = s.gray = false; this.store.save(); this.toast('Introductions will show again'); }

  startSession() {
    this.sessionBg = null; this.completed = null; this.wasLongBreak = false; this.store.history.length = 0;
    this.store.startSession(); this.go('work', { push: false });
  }

  endSession(silent = false) {
    if (!this.store.session) return;
    this.store.endSession();
    if (!silent) { this.store.history.length = 0; this.go('mode', { push: false }); }
  }

  longBreak() { this.wasLongBreak = true; this.store.history.length = 0; this.store.startLongBreak(); this.go('work', { push: false }); }
  finish() { this.store.session = null; this.store.history.length = 0; this.go('mode', { push: false }); }

  recenter(announce) {
    const f = this.head.forward.clone(); f.y = 0; if (f.lengthSq() < 1e-6) f.set(0, 0, -1); f.normalize();
    this.partition.place(this.head.pos, Math.atan2(-f.x, -f.z));
    this.window.userMoved = false; this.window.docked = false;
    this.window.place(this.head.pos, f, { instant: !announce });
    if (announce) this.toast('Recentred on you');
  }

  applySettings() {
    const st = this.store.data.settings;
    this.sounds.enabled = st.sounds;
    if (params.get('speed')) st.speed = Math.max(1, +params.get('speed') || 1);
  }

  onStore(type, s) {
    if (type === 'change') { this.redraw(); return; }
    if (type === 'pause') { this.redraw(); return; }
    if (type === 'phase') {
      if (s.phase === 'work' || s.phase === 'zen') { if (s.set === 1 && s.elapsed === 0) this.sounds.start(); else this.sounds.toWork(); } else this.sounds.toBreak();
      if (s.phase === 'work' && s.set > 1 && this.store.data.focus.changeBg) {
        const cur = this.sessionBg || this.store.preset.bg;
        this.sessionBg = BGS[(BGS.indexOf(cur) + 1) % BGS.length];
      }
      this.redraw();
    }
    if (type === 'complete') {
      const d = this.store.data;
      this.sounds.done(); this.store.session = null; this.store.history.length = 0;
      if (this.wasLongBreak) { this.wasLongBreak = false; this.go('mode', { push: false }); return; }
      this.completed = s.mode === 'zen' ? { mode: 'zen', minutes: Math.max(1, Math.round(s.elapsed / 60)) } : { mode: 'focus', sets: s.sets, minutes: s.sets * d.focus.duration };
      this.go('complete', { push: false });
    }
  }

  // ---------- per frame ----------
  updateHead() {
    const h = this.head;
    if (this.renderer.xr.isPresenting) {
      const cam = this.renderer.xr.getCamera();
      h.pos.copy(cam.position); h.quat.copy(cam.quaternion);
    } else {
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
      this.camera.position.set(0, 1.2, 0.12);
      this.camera.updateMatrixWorld();
      h.pos.copy(this.camera.position); h.quat.copy(this.camera.quaternion);
    }
    h.forward.set(0, 0, -1).applyQuaternion(h.quat).normalize();
  }

  updateEnvironment(dt) {
    const st = this.store, s = st.session, pre = st.preset, scr = this.pending || st.screen, pt = this.partition;
    const alpha = THREE.MathUtils.clamp(1.22 - 0.98 * pre.transparency, 0.15, 0.97);
    let opacity = 0, reveal = 0, sat = 1, veil = 0, bg = pre.bg, brk = false;
    const spaceEdit = scr === 'customizeEnv' || (scr === 'settings' && this.settingsTab === 'space');
    if (spaceEdit && !(s && s.phase !== 'done')) { opacity = alpha; reveal = 1; bg = pre.bg; }
    if (s && s.phase !== 'done') {
      const left = (s.total - s.elapsed) / st.speed; // real seconds
      if (s.phase === 'zen') { opacity = alpha; reveal = 1; bg = st.data.zen.scene; }
      else if (s.phase === 'work') {
        opacity = alpha; reveal = 1; bg = this.sessionBg || pre.bg;
        if (pre.gray && s.set < s.sets && left <= 5) sat = 0; // colour fades 5 seconds before the break
      } else {
        // On a break the partition clears, then dissolves back in for the last few seconds.
        brk = true;
        const back = s.phase === 'break' && left <= 4;
        opacity = back ? alpha : 0; reveal = back ? 1 : 0; bg = this.sessionBg || pre.bg;
        if (pre.gray) { veil = left <= 3 ? 0 : 1; sat = left <= 2 ? 1 : 0; }
      }
    }
    pt.configure(pre.shape, pre.distanceFt);
    pt.setBackground(bg);
    pt.setTint(pre.tint && pre.tint !== 'original' ? TINT_HEX[pre.tint] : null);
    pt.target.opacity = opacity; pt.target.reveal = reveal; pt.target.sat = sat;
    pt.material.depthTest = !(this.xr && this.depthAvailable && !st.data.settings.depth);
    pt.update(dt, this.time);

    const vm = this.veil.material;
    vm.opacity += (veil * 0.52 - vm.opacity) * (1 - Math.exp(-dt * 1.3));
    this.veil.visible = vm.opacity > 0.005;
    this.veil.position.copy(this.head.pos);
    this.room.screenMat.uniforms.uSat.value = Math.min(pt.uniforms.uSat.value, 1 - vm.opacity / 0.52);

    const accent = brk ? C.gold : C.green;
    if (accent !== this.accentHex) { this.accentHex = accent; this.redraw(); }
    this.window.setAccent(accent, brk ? 1 : 0);
    this.window.dock(!!s && s.phase !== 'done' && scr === 'work', this.xr ? 36 : 12, this.xr ? 0.66 : 0.62);

    // people indicator
    const active = (s && (s.phase === 'work' || s.phase === 'zen')) || spaceEdit;
    const want = pre.people && pre.transparency < 0.5;
    let det = [];
    if (this.xr && this.xrMode === 'immersive-ar') { if (want && active) this.depth.sample(this.renderer, this.time, pt.group); det = want ? this.depth.detections : []; }
    else det = this.room.detections(pt.group);
    this.people.update(dt, det, active && want && pt.uniforms.uOpacity.value > 0.25);
  }

  tick(frame) {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this.time += dt; this.frames++;
    const st = this.store, w = this.window, presenting = this.renderer.xr.isPresenting;
    this.updateHead();
    if (presenting) {
      this.depthAvailable = !!(this.renderer.xr.hasDepthSensing && this.renderer.xr.hasDepthSensing());
      if (!this.placed && (this.head.pos.y > 0.35 || this.frames > 45)) { this.placed = true; this.recenter(false); this.splashAt = this.time; w.tOpacity = 1; }
      w.tOpacity = this.placed ? 1 : 0; this.keyboard.group.position.set(0, -0.39, 0.16);
    } else { w.tOpacity = 1; this.room.update(this.time, dt); this.applyView(false); this.keyboard.group.position.set(0, -0.2, 0.13); }

    st.tick();
    this.input.update(dt, this.head, presenting);

    // splash moves on by itself; toasts expire
    if (st.screen === 'splash' && this.started && !this.pending && this.time - this.splashAt > 2.8) this.leaveSplash();
    if (this.toastMsg && this.time > this.toastUntil) { this.toastMsg = null; this.redraw(); }

    // screen change: content fades out, swaps, fades in
    if (this.fadeDir < 0) { this.fade -= dt / 0.12; if (this.fade <= 0) { this.fade = 0; st.screen = this.pending; this.pending = null; this.fadeDir = 1; this.todoPage = 0; this.redraw(); } }
    else if (this.fadeDir > 0) { this.fade += dt / 0.24; if (this.fade >= 1) { this.fade = 1; this.fadeDir = 0; } }
    w.contentFade = this.fade * this.fade * (3 - 2 * this.fade);

    this.updateEnvironment(dt);

    // window furniture
    const scr = st.screen, s = st.session;
    w.logoTarget = scr === 'splash' ? 0 : 1;
    w.logoAlphaTarget = scr === 'work' || (scr === 'settings' && s && s.phase !== 'done') ? 0 : w.contentFade < 0.5 && (this.pending === 'work') ? 0 : 1;
    w.ringAlphaTarget = scr === 'work' && s ? 1 : 0;
    if (s) {
      const zen = s.mode === 'zen', ru = w.ring.material.uniforms;
      w.ringCxTarget = zen ? 960 : 1432;
      ru.uProgress.value = s.total > 0 ? THREE.MathUtils.clamp(1 - s.elapsed / s.total, 0, 1) : 1;
      ru.uPulse.value = zen && !s.paused ? 0.5 + 0.5 * Math.sin(this.time * Math.PI * 2 / 10) : 0;
      const key = scr + '|' + s.phase + '|' + s.set + '|' + s.paused + '|' + Math.ceil(s.total > 0 ? s.total - s.elapsed : s.elapsed) + '|' + this.people.nearestBand;
      if ((scr === 'work' || scr === 'settings') && key !== this.lastKey) { this.lastKey = key; this.redraw(); }
    }
    const ga = this.store.data.settings.glass === 'clear' ? 0.66 : 0.92, gu = w.panel.uniforms.uGlassAlpha;
    gu.value += (ga - gu.value) * (1 - Math.exp(-dt * 6));
    w.update(dt);
    this.keyboard.update(dt, this.time);
    if (w.panel.dirty && this.fadeDir >= 0) drawScreen(w.panel, this);

    this.renderer.render(this.scene, this.camera);
  }
}

async function boot() {
  await Promise.all([loadFonts(), loadIcons()]);
  const app = new App();
  window.augfice = app;
  await app.setupLaunch();
  if (params.get('autostart') === '1') app.startPreview();
}
boot();
