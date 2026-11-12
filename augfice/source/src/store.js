// App state, saved settings and the session timer.
const KEY = 'augfice.v1';

export const SHAPES = ['rectangle', 'cubicle', 'sphere', 'blinds'];
export const SHAPE_LABEL = { rectangle: 'Rectangle', cubicle: 'Cubicle', sphere: 'Sphere', blinds: 'Blinds' };
export const BGS = ['tex1', 'tex2', 'tex3', 'beach'];
export const BG_LABEL = { tex1: 'Texture 1', tex2: 'Texture 2', tex3: 'Texture 3', beach: 'Beach' };
export const TINTS = ['original', 'sage', 'sand', 'ocean', 'dusk'];
export const TINT_LABEL = { original: 'Original', sage: 'Sage', sand: 'Sand', ocean: 'Ocean', dusk: 'Dusk' };
// Swatch colours. Sage and Sand are the style guide green and gold.
export const TINT_HEX = { original: '#2E5C57', sage: '#8BC34A', sand: '#D9C37E', ocean: '#4A90A4', dusk: '#8C6BB1' };
export const ENVS = ['home', 'work', 'public'];
export const ENV_LABEL = { home: 'Home', work: 'Work', public: 'Public' };
export const APPS = ['Phone', 'Messages', 'Mail', 'Calendar', 'Slack', 'Teams', 'WhatsApp', 'Reminders'];
export const APP_ICON = { Phone: 'phone', Messages: 'message', Mail: 'mail', Calendar: 'calendar', Slack: 'message', Teams: 'users', WhatsApp: 'message', Reminders: 'bell' };

export function transparencyLabel(t) { return t < 0.35 ? 'Low' : t < 0.6 ? 'Medium' : 'High'; }

function defaults() {
  return {
    mode: 'focus',
    env: 'public',
    // Presets from the hi-fi design: Home low + sphere, Work high + cubicle, Public medium + blinds.
    presets: {
      home: { shape: 'sphere', bg: 'tex1', tint: 'original', transparency: 0.2, distanceFt: 5, people: false, gray: false },
      work: { shape: 'cubicle', bg: 'tex1', tint: 'original', transparency: 0.75, distanceFt: 5, people: false, gray: false },
      public: { shape: 'blinds', bg: 'tex1', tint: 'original', transparency: 0.45, distanceFt: 5, people: false, gray: false },
    },
    focus: { duration: 25, sets: 4, shortBreak: 5, longBreak: 30, changeBg: false },
    zen: { length: 0, scene: 'beach' },
    todos: [],
    prepared: [],
    seen: { people: false, whitelist: false, gray: false },
    whitelist: { apps: [], contacts: [] },
    settings: { pointer: 'hand', sounds: true, speed: 1, depth: false, glass: 'tinted' },
  };
}

function merge(base, saved) {
  if (!saved || typeof saved !== 'object') return base;
  for (const k of Object.keys(base)) {
    if (!(k in saved)) continue;
    if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) base[k] = merge(base[k], saved[k]);
    else if (typeof saved[k] === typeof base[k]) base[k] = saved[k];
  }
  return base;
}

export class Store {
  constructor() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { /* private mode */ }
    this.data = merge(defaults(), saved);
    this.screen = 'splash';
    this.history = [];
    this.session = null;
    this.listeners = new Set();
    this.uid = Date.now();
  }

  get preset() { return this.data.presets[this.data.env]; }

  save() { try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ } }
  on(fn) { this.listeners.add(fn); }
  emit(type, detail) { for (const fn of this.listeners) fn(type, detail); }
  changed() { this.save(); this.emit('change'); }

  // ---------- to-do list ----------
  addTodo(text = '') { const t = { id: ++this.uid, text, done: false }; this.data.todos.push(t); this.changed(); return t; }
  removeTodo(id) { this.data.todos = this.data.todos.filter((t) => t.id !== id); this.changed(); }
  importPrepared() {
    let n = 0;
    for (const text of this.data.prepared) {
      if (!text || this.data.todos.some((t) => t.text === text)) continue;
      this.data.todos.push({ id: ++this.uid, text, done: false }); n++;
    }
    this.changed();
    return n;
  }

  // ---------- session timer ----------
  now() { return performance.now() / 1000; }
  get speed() { return this.data.settings.speed || 1; }

  startSession() {
    const d = this.data;
    if (d.mode === 'zen') {
      this.session = { mode: 'zen', phase: 'zen', set: 1, sets: 1, total: d.zen.length * 60, elapsed: 0, paused: false, last: this.now() };
    } else {
      this.session = { mode: 'focus', phase: 'work', set: 1, sets: d.focus.sets, total: d.focus.duration * 60, elapsed: 0, paused: false, last: this.now() };
    }
    this.emit('phase', this.session);
  }

  endSession() { const s = this.session; this.session = null; if (s) this.emit('ended', s); }

  togglePause() { const s = this.session; if (!s) return; s.paused = !s.paused; s.last = this.now(); this.emit('pause', s); }

  startLongBreak() {
    this.session = { mode: 'focus', phase: 'longBreak', set: this.data.focus.sets, sets: this.data.focus.sets, total: this.data.focus.longBreak * 60, elapsed: 0, paused: false, last: this.now() };
    this.emit('phase', this.session);
  }

  remaining() { const s = this.session; return s ? Math.max(0, s.total - s.elapsed) : 0; }

  // Advance the timer. Uses wall time, so it stays right if the headset was taken off.
  tick() {
    const s = this.session;
    if (!s) return;
    const t = this.now();
    const dt = Math.min(t - s.last, 3600) * this.speed;
    s.last = t;
    if (s.paused || s.phase === 'done') return;
    s.elapsed += dt;
    if (s.phase === 'zen') {
      if (s.total > 0 && s.elapsed >= s.total) { s.phase = 'done'; this.emit('complete', s); }
      return;
    }
    if (s.elapsed < s.total) return;
    const f = this.data.focus;
    if (s.phase === 'work') {
      if (s.set >= s.sets) { s.phase = 'done'; this.emit('complete', s); return; }
      s.phase = 'break'; s.total = f.shortBreak * 60; s.elapsed = 0;
    } else if (s.phase === 'break') {
      s.phase = 'work'; s.set += 1; s.total = f.duration * 60; s.elapsed = 0;
    } else if (s.phase === 'longBreak') {
      s.phase = 'done'; this.emit('complete', s); return;
    }
    this.emit('phase', s);
  }
}

export function fmtTime(sec) {
  sec = Math.max(0, Math.ceil(sec - 0.001));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  const mm = String(m).padStart(2, '0'), ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
