// Every screen of the Aug-Fice flow, drawn on the 1920 x 1080 frame from the hi-fi design:
// splash, mode, environment, customize, session, to-do, people indicator, whitelisting, grayscale fade, work and break.
import { C, HEAD, T } from './theme.js';
import { SHAPES, SHAPE_LABEL, BGS, BG_LABEL, ENVS, ENV_LABEL, APPS, APP_ICON, transparencyLabel, fmtTime } from './store.js';

const CX = 960;
const INFO = {
  shape: 'Rectangle is a flat wall in front of you. Cubicle wraps three sides. Sphere surrounds you. Blinds hide the room in strips, so you are hidden but not cut off.',
  bg: 'What the partition shows. Texture 1 is the background people preferred in testing. Beach opens a calm scene all around you.',
  transparency: 'How much of the room shows through. Low hides the most.',
  distance: 'How far away the partition sits. It starts at desk height, so your workstation stays in view.',
  people: 'Shows a marker for people nearby while the partition is more than half opaque. Brighter means closer.',
  gray: 'Fades colour from your view 5 seconds before a break and keeps it muted until the break ends.',
  duration: 'How long each work set lasts.',
  sets: 'How many work sets make up the session.',
  short: 'The pause between sets. The partition clears so you can look around.',
  long: 'A longer rest, offered after the last set.',
  changeBg: 'Switches the partition background at the start of every set.',
  zenLength: 'Zen is untimed by default. Set a length if you want a gentle end.',
  zenScene: 'What surrounds you in Zen mode.',
  pointer: 'Hand ray: point with your hand and pinch. Head tracking: point with your head and pinch to tap.',
  speed: 'Demo runs the timer 30 times faster, so a 25 minute set takes 50 seconds.',
  depth: 'Uses the headset depth sensor so things closer than the partition, like your hands or someone walking up, show in front of it. Turn it off if a nearby wall hides the partition.',
};

function title(p, s, y = 230, size = T.title) { p.text(s, CX, y, { font: HEAD, weight: 300, size, align: 'center', color: C.white, ls: 1.5, maxW: 1560 }); }

function header(p, app, o = {}) {
  const w = app.window;
  p.iconButton('lock', 92, 86, 76, w.locked ? 'lock' : 'unlock', { color: w.locked ? C.green : C.white, plate: w.locked, fill: 'rgba(139,195,74,0.16)' }, () => app.toggleLock());
  if (app.canBack() && o.back !== false) p.iconButton('back', 186, 86, 76, 'chevron-left', { color: C.white, plate: false }, () => app.back());
  if (o.close) p.iconButton('close', 1828, 86, 76, 'x', { color: C.white, plate: false }, () => app.back());
  else if (o.gear !== false) p.iconButton('gear', 1828, 86, 76, 'settings', { color: C.white, plate: false }, () => app.go('settings'));
}

function card(p, id, x, y, w, h, onClick) {
  p.platter(x, y, w, h, 44);
  if (onClick) p.region(id, x, y, w, h, { r: 44, onClick });
}

function yesNo(p, app, y, onNo, onYes, labels = ['No', 'Yes']) {
  p.button('no', 716, y, 230, 88, labels[0], { kind: 'secondary' }, onNo);
  p.button('yes', 974, y, 230, 88, labels[1], { kind: 'primary' }, onYes);
}

// ---------- settings rows ----------
function row(p, app, y, label, infoKey, h = 84) {
  const x = 150, w = 1620;
  p.platter(x, y, w, h, 30, { fill: 'rgba(255,255,255,0.05)' });
  p.text(label, x + 40, y + h / 2 + 2, { size: T.body1, weight: 700, color: C.whiteHi, maxW: 600 });
  if (infoKey) p.iconButton('info-' + infoKey, x + 706, y + h / 2, 60, 'info', { color: app.info && app.info.key === infoKey ? C.green : C.dim, plate: false, iconSize: 40 }, () => app.toggleInfo(infoKey, y + h));
  return { x: x + 780, y, w: w - 780 - 20, h };
}

function stepper(p, id, a, value, onPrev, onNext) {
  const cy = a.y + a.h / 2;
  p.iconButton(id + '-prev', a.x + 44, cy, 72, 'chevron-left', { plate: false, iconSize: 52 }, onPrev);
  p.iconButton(id + '-next', a.x + a.w - 44, cy, 72, 'chevron-right', { plate: false, iconSize: 52 }, onNext);
  p.text(value, a.x + a.w / 2, cy + 2, { size: T.body1, align: 'center', color: C.whiteHi, maxW: a.w - 200 });
}

function slider(p, id, a, frac, value, onChange, onNudge) {
  const cy = a.y + a.h / 2, tx = a.x + 110, tw = a.w - 110 - 250, c = p.ctx;
  p.iconButton(id + '-prev', a.x + 44, cy, 72, 'chevron-left', { plate: false, iconSize: 52 }, () => onNudge(-1));
  p.iconButton(id + '-next', a.x + a.w - 44, cy, 72, 'chevron-right', { plate: false, iconSize: 52 }, () => onNudge(1));
  c.lineCap = 'round'; c.lineWidth = 5;
  c.strokeStyle = 'rgba(255,255,255,0.20)'; c.beginPath(); c.moveTo(tx, cy); c.lineTo(tx + tw, cy); c.stroke();
  c.strokeStyle = C.green; c.beginPath(); c.moveTo(tx, cy); c.lineTo(tx + tw * frac, cy); c.stroke();
  const kx = tx + tw * frac;
  c.beginPath(); c.arc(kx, cy, 30, 0, Math.PI * 2); c.fillStyle = 'rgba(139,195,74,0.30)'; c.fill();
  c.beginPath(); c.arc(kx, cy, 13, 0, Math.PI * 2); c.fillStyle = C.green; c.fill();
  p.text(value, a.x + a.w - 96, cy + 2, { size: T.body1, align: 'right', color: C.whiteHi });
  const set = (px) => onChange(Math.min(1, Math.max(0, (px - tx) / tw)));
  p.region(id + '-track', tx - 34, a.y + 6, tw + 68, a.h - 12, { r: (a.h - 12) / 2, onDown: set, onDrag: set });
}

function segmented(p, id, a, options, index, onSelect, width) {
  const w = width ?? Math.min(a.w - 40, options.length * 250), x = a.x + (a.w - w) / 2, h = 64, y = a.y + (a.h - h) / 2, sw = w / options.length, c = p.ctx;
  p.rr(x, y, w, h, h / 2); c.fillStyle = 'rgba(0,0,0,0.22)'; c.fill();
  options.forEach((label, i) => {
    const sx = x + i * sw, on = i === index;
    if (on) { p.rr(sx + 5, y + 5, sw - 10, h - 10, (h - 10) / 2); c.fillStyle = C.green; c.fill(); }
    p.text(label, sx + sw / 2, y + h / 2 + 2, { size: 30, weight: on ? 700 : 400, align: 'center', color: on ? C.ink : C.white });
    if (!on) p.region(id + '-' + i, sx, y - 10, sw, h + 20, { r: h / 2, hx: sx + 5, hy: y + 5, hw: sw - 10, hh: h - 10, onClick: () => onSelect(i) });
  });
}

function onOff(p, id, a, value, onSet) { segmented(p, id, a, ['Off', 'On'], value ? 1 : 0, (i) => onSet(i === 1), 300); }

function infoPopover(p, app) {
  if (!app.info) return;
  const c = p.ctx, text = INFO[app.info.key] || '', w = 780, x = 150 + 706 - 60, o = { size: 30, color: C.whiteHi };
  const ls = p.lines(text, w - 72, o), h = ls.length * 40 + 52;
  let y = app.info.y + 12; if (y + h > 1050) y = app.info.y - 84 - h - 12;
  p.region('info-dismiss', 0, 0, p.w, p.h, { hover: false, onClick: () => app.toggleInfo(null) });
  p.rr(x, y, w, h, 28); c.fillStyle = 'rgba(22,26,20,0.97)'; c.fill();
  c.strokeStyle = 'rgba(139,195,74,0.55)'; c.lineWidth = 2; p.rr(x + 1, y + 1, w - 2, h - 2, 27); c.stroke();
  ls.forEach((l, i) => p.text(l, x + 36, y + 46 + i * 40, o));
}

function toast(p, app, y = 872) {
  if (!app.toastMsg) return;
  const o = { size: 30, weight: 600, color: C.ink }, w = p.measure(app.toastMsg, o) + 72;
  p.rr(CX - w / 2, y - 30, w, 60, 30); p.ctx.fillStyle = C.gold; p.ctx.fill();
  p.text(app.toastMsg, CX, y + 2, { ...o, align: 'center' });
}

const clampStep = (v, d, lo, hi) => Math.min(hi, Math.max(lo, v + d));
const cycle = (list, cur, d) => list[(list.indexOf(cur) + d + list.length) % list.length];

// ---------- screens ----------
const SCREENS = {
  splash(p, app) {
    p.text('Aug-Fice', CX, 592, { font: HEAD, weight: 800, size: T.wordmark, align: 'center', color: 'rgba(255,255,255,0.90)' });
    p.text('Focus on what matters.', CX, 842, { font: HEAD, weight: 300, italic: true, size: 80, align: 'center', color: C.white });
    if (app.started) p.text(app.xr ? 'Pinch to begin' : 'Click to begin', CX, 992, { size: 32, align: 'center', color: C.dim, ls: 1 });
    p.region('splash', 0, 0, p.w, p.h, { hover: false, onClick: () => app.leaveSplash() });
  },

  mode(p, app) {
    header(p, app);
    title(p, 'CHOOSE A MODE', 240);
    const modes = [
      { id: 'zen', x: 417, icon: 'tree-palm', name: 'Zen', desc: 'When you need some extra relaxation' },
      { id: 'focus', x: 1060, icon: 'target', name: 'Focus', desc: 'When you need to get stuff done' },
    ];
    for (const m of modes) {
      card(p, 'mode-' + m.id, m.x, 387, 443, 559, () => app.chooseMode(m.id));
      p.icon(m.icon, m.x + 221, 500, 132, C.green);
      p.text(m.name, m.x + 221, 624, { size: T.h3, weight: 700, align: 'center', color: C.whiteHi });
      p.wrap(m.desc, m.x + 221, 704, 350, 44, { size: T.body1, align: 'center', color: C.white });
      p.button('cust-' + m.id, m.x + 22, 844, 399, 80, 'Customize', { kind: 'secondary', icon: 'pen', size: 30 }, () => app.customizeMode(m.id));
    }
  },

  environment(p, app) {
    header(p, app);
    title(p, 'CHOOSE YOUR ENVIRONMENT', 240, 92);
    const icons = { home: 'home', work: 'briefcase', public: 'earth' };
    ENVS.forEach((e, i) => {
      const x = 191 + i * 548, pr = app.store.data.presets[e];
      card(p, 'env-' + e, x, 387, 443, 559, () => app.chooseEnv(e));
      p.icon(icons[e], x + 221, 492, 124, C.green);
      p.text(ENV_LABEL[e], x + 221, 606, { size: T.h3, weight: 700, align: 'center', color: C.whiteHi });
      p.text('Transparency', x + 232, 690, { size: 33, weight: 700, align: 'right', color: C.white });
      p.text(transparencyLabel(pr.transparency), x + 250, 690, { size: 33, color: C.white });
      p.text('Shape', x + 232, 740, { size: 33, weight: 700, align: 'right', color: C.white });
      p.text(SHAPE_LABEL[pr.shape], x + 250, 740, { size: 33, color: C.white });
      p.button('cust-' + e, x + 22, 844, 399, 80, 'Customize', { kind: 'secondary', icon: 'pen', size: 30 }, () => app.customizeEnv(e));
    });
  },

  customizeEnv(p, app) {
    header(p, app);
    const s = app.store, pr = s.preset, name = ENV_LABEL[s.data.env].toUpperCase();
    const o = { font: HEAD, weight: 300, size: 84, ls: 1.5 };
    const w1 = p.measure('CUSTOMIZE', o), w2 = p.measure(name, o), total = w1 + 40 + w2 + 48, x0 = CX - total / 2;
    p.text('CUSTOMIZE', x0, 196, { ...o, color: C.white });
    p.ctx.strokeStyle = 'rgba(255,255,255,0.38)'; p.ctx.lineWidth = 2.5; p.rr(x0 + w1 + 40, 140, w2 + 48, 108, 18); p.ctx.stroke();
    p.text(name, x0 + w1 + 64, 196, { ...o, color: C.whiteHi });
    const set = (k, v) => { pr[k] = v; s.changed(); };
    let y = 296; const step = 98;
    stepper(p, 'shape', row(p, app, y, 'Partition shape', 'shape'), SHAPE_LABEL[pr.shape], () => set('shape', cycle(SHAPES, pr.shape, -1)), () => set('shape', cycle(SHAPES, pr.shape, 1)));
    y += step;
    stepper(p, 'bg', row(p, app, y, 'Partition background', 'bg'), BG_LABEL[pr.bg], () => set('bg', cycle(BGS, pr.bg, -1)), () => set('bg', cycle(BGS, pr.bg, 1)));
    y += step;
    slider(p, 'tr', row(p, app, y, 'Partition transparency', 'transparency'), (pr.transparency - 0.1) / 0.8, transparencyLabel(pr.transparency),
      (f) => set('transparency', Math.round((0.1 + f * 0.8) * 100) / 100), (d) => set('transparency', Math.round(clampStep(pr.transparency, d * 0.1, 0.1, 0.9) * 100) / 100));
    y += step;
    slider(p, 'dist', row(p, app, y, 'Partition distance', 'distance'), (pr.distanceFt - 2) / 10, pr.distanceFt + ' ft',
      (f) => set('distanceFt', Math.round((2 + f * 10) * 2) / 2), (d) => set('distanceFt', clampStep(pr.distanceFt, d * 0.5, 2, 12)));
    y += step;
    onOff(p, 'people', row(p, app, y, 'People indicator', 'people'), pr.people, (v) => set('people', v));
    y += step;
    onOff(p, 'gray', row(p, app, y, 'Grayscale fade', 'gray'), pr.gray, (v) => set('gray', v));
    p.button('done', 740, 916, 440, 88, 'Done', { kind: 'primary' }, () => app.back());
    infoPopover(p, app);
  },

  customizeSession(p, app) {
    header(p, app);
    title(p, 'CUSTOMIZE SESSION', 196, 84);
    const s = app.store, f = s.data.focus, set = (k, v) => { f[k] = v; s.changed(); };
    let y = 296; const step = 104;
    stepper(p, 'dur', row(p, app, y, 'Session duration', 'duration'), f.duration + ' minutes', () => set('duration', clampStep(f.duration, -5, 5, 90)), () => set('duration', clampStep(f.duration, 5, 5, 90)));
    y += step;
    stepper(p, 'sets', row(p, app, y, 'No. of sets', 'sets'), String(f.sets), () => set('sets', clampStep(f.sets, -1, 1, 8)), () => set('sets', clampStep(f.sets, 1, 1, 8)));
    y += step;
    slider(p, 'sb', row(p, app, y, 'Short break duration', 'short'), (f.shortBreak - 1) / 14, f.shortBreak + ' min', (v) => set('shortBreak', Math.round(1 + v * 14)), (d) => set('shortBreak', clampStep(f.shortBreak, d, 1, 15)));
    y += step;
    slider(p, 'lb', row(p, app, y, 'Long break duration', 'long'), (f.longBreak - 5) / 40, f.longBreak + ' min', (v) => set('longBreak', Math.round((5 + v * 40) / 5) * 5), (d) => set('longBreak', clampStep(f.longBreak, d * 5, 5, 45)));
    y += step;
    onOff(p, 'cbg', row(p, app, y, 'Change background after each set', 'changeBg'), f.changeBg, (v) => set('changeBg', v));
    p.button('done', 740, 890, 440, 88, 'Done', { kind: 'primary' }, () => app.back());
    infoPopover(p, app);
  },

  customizeZen(p, app) {
    header(p, app);
    title(p, 'CUSTOMIZE ZEN', 196, 84);
    const s = app.store, z = s.data.zen, lens = [0, 10, 20, 30, 45, 60], set = (k, v) => { z[k] = v; s.changed(); };
    stepper(p, 'zl', row(p, app, 330, 'Session length', 'zenLength'), z.length ? z.length + ' minutes' : 'Untimed', () => set('length', cycle(lens, z.length, -1)), () => set('length', cycle(lens, z.length, 1)));
    stepper(p, 'zs', row(p, app, 434, 'Scene', 'zenScene'), BG_LABEL[z.scene], () => set('scene', cycle(BGS, z.scene, -1)), () => set('scene', cycle(BGS, z.scene, 1)));
    p.wrap('Zen uses the partition shape, distance and transparency of the environment you pick next.', CX, 610, 1200, 46, { size: T.body1, align: 'center', color: C.dim });
    p.button('done', 740, 890, 440, 88, 'Done', { kind: 'primary' }, () => app.back());
    infoPopover(p, app);
  },

  todo(p, app) {
    header(p, app);
    title(p, 'PREPARE TO-DO LIST', 220, 88);
    todoList(p, app, { x: 150, y: 318, w: 730, rows: 5, edit: true });
    const g = p.ctx.createLinearGradient(0, 320, 0, 830);
    g.addColorStop(0, 'rgba(139,195,74,0)'); g.addColorStop(0.5, 'rgba(139,195,74,0.55)'); g.addColorStop(1, 'rgba(139,195,74,0)');
    p.ctx.fillStyle = g; p.ctx.fillRect(959, 320, 2, 510);
    const n = app.store.data.prepared.length;
    card(p, 'import', 1150, 400, 540, 320, () => app.importTodos());
    p.icon('cloud-download', 1420, 498, 116, C.green);
    p.text('Import from web app', 1420, 606, { size: T.h3 - 4, weight: 700, align: 'center', color: C.whiteHi });
    p.text(n ? `${n} ${n === 1 ? 'task' : 'tasks'} ready from the launch page` : 'Add tasks on the launch page first', 1420, 666, { size: 30, align: 'center', color: C.dim });
    toast(p, app, 868);
    p.button('skip', 716, 930, 230, 88, 'Skip', { kind: 'secondary' }, () => app.afterTodo());
    p.button('done', 974, 930, 230, 88, 'Done', { kind: 'primary' }, () => app.afterTodo());
  },

  introPeople(p, app) {
    header(p, app);
    title(p, 'How people indicator works', 230, 88);
    const labels = ['Within 2 metres', '2 to 8 metres away', '8 to 15 metres away'], alphas = [1, 0.6, 0.34];
    labels.forEach((l, i) => {
      const x = 191 + i * 548;
      p.platter(x, 360, 443, 400, 44);
      p.icon('user-fill', x + 221, 512, 150, C.gold, alphas[i]);
      p.text(l, x + 221, 688, { size: 42, weight: 700, align: 'center', color: C.whiteHi, maxW: 400 });
    });
    p.text('Turn on the people indicator when transparency is below 50%?', CX, 826, { size: T.body1, align: 'center', color: C.white });
    const note = !app.xr ? 'In this preview the people are simulated.' : app.depthAvailable ? 'On this headset it uses the depth sensor, so it works best at close range.' : 'This headset did not share depth data, so markers cannot appear in this session.';
    p.text(note, CX, 876, { size: T.body2, align: 'center', color: C.dim });
    yesNo(p, app, 930, () => app.answerPeople(false), () => app.answerPeople(true));
  },

  whitelist(p, app) {
    header(p, app);
    title(p, 'WHITELISTING', 220, 88);
    p.wrap('Choose the contacts and apps you still want to hear from in focus mode. Everything else can wait.', CX, 320, 1500, 46, { size: T.body1, align: 'center', color: C.white });
    const wl = app.store.data.whitelist;
    const items = [
      { id: 'contacts', x: 338, icon: 'contacts', name: 'Choose contacts', n: wl.contacts.length, go: 'wlContacts' },
      { id: 'apps', x: 1139, icon: 'grid-3x3', name: 'Choose apps', n: wl.apps.length, go: 'wlApps' },
    ];
    for (const it of items) {
      card(p, 'wl-' + it.id, it.x, 470, 443, 310, () => app.go(it.go));
      p.icon(it.icon, it.x + 221, 568, 110, C.green);
      p.text(it.name, it.x + 221, 672, { size: T.h3 - 4, weight: 700, align: 'center', color: C.whiteHi });
      p.text(it.n ? it.n + ' chosen' : 'None chosen', it.x + 221, 728, { size: T.body2, align: 'center', color: it.n ? C.green : C.dim });
    }
    p.text('Choices are saved on this device. Linking them to your phone is not part of this prototype yet.', CX, 852, { size: T.body2, align: 'center', color: C.dim });
    p.button('skip', 716, 930, 230, 88, 'Skip', { kind: 'secondary' }, () => app.afterWhitelist());
    p.button('done', 974, 930, 230, 88, 'Done', { kind: 'primary' }, () => app.afterWhitelist());
  },

  wlApps(p, app) {
    header(p, app);
    title(p, 'CHOOSE APPS', 220, 88);
    const wl = app.store.data.whitelist;
    APPS.forEach((name, i) => {
      const x = 150 + (i % 4) * 410, y = 350 + Math.floor(i / 4) * 200, on = wl.apps.includes(name);
      p.platter(x, y, 390, 170, 36, on ? { fill: 'rgba(139,195,74,0.16)', strokeColor: C.green, lineWidth: 2.5 } : {});
      p.icon(APP_ICON[name], x + 76, y + 85, 64, on ? C.green : C.white);
      p.text(name, x + 132, y + 87, { size: 38, weight: 700, color: C.whiteHi, maxW: 190 });
      if (on) p.icon('check', x + 340, y + 85, 44, C.green);
      p.region('app-' + i, x, y, 390, 170, { r: 36, onClick: () => { if (on) wl.apps = wl.apps.filter((a) => a !== name); else wl.apps.push(name); app.store.changed(); } });
    });
    p.button('done', 740, 890, 440, 88, 'Done', { kind: 'primary' }, () => app.back());
  },

  wlContacts(p, app) {
    header(p, app);
    title(p, 'CHOOSE CONTACTS', 220, 88);
    const wl = app.store.data.whitelist;
    wl.contacts.forEach((name, i) => {
      const x = 150 + (i % 3) * 547, y = 350 + Math.floor(i / 3) * 130;
      p.platter(x, y, 526, 104, 36);
      p.icon('user', x + 60, y + 52, 50, C.green);
      p.text(name, x + 104, y + 54, { size: 38, color: C.whiteHi, maxW: 310 });
      p.iconButton('rm-' + i, x + 470, y + 52, 72, 'x', { color: C.dim, plate: false, iconSize: 40 }, () => { wl.contacts.splice(i, 1); app.store.changed(); });
    });
    if (wl.contacts.length < 9) {
      const i = wl.contacts.length, x = 150 + (i % 3) * 547, y = 350 + Math.floor(i / 3) * 130;
      p.button('add-contact', x, y, 526, 104, 'Add a contact', { kind: 'plain', icon: 'circle-plus', upper: false, size: 38 }, () => app.editText('', 'Contact name', (text) => { if (text) { wl.contacts.push(text); app.store.changed(); } }));
    }
    p.button('done', 740, 890, 440, 88, 'Done', { kind: 'primary' }, () => app.back());
  },

  introGray(p, app) {
    header(p, app);
    title(p, 'How grayscale fade works', 230, 88);
    const caps = ['Full colour while you work', 'Colour starts to fade 5 seconds before a break', 'Colour stays muted until the break ends'];
    const cols = [C.green, '#9FB088', '#A3A3A3'];
    caps.forEach((cap, i) => {
      const x = 191 + i * 548;
      p.platter(x, 360, 443, 400, 44);
      p.icon('laptop', x + 221, 500, 170, cols[i]);
      p.wrap(cap, x + 221, 668, 370, 42, { size: 34, align: 'center', color: C.whiteHi, vcenter: true });
    });
    p.text('Grayscale fade is off by default. Turn it on?', CX, 838, { size: T.body1, align: 'center', color: C.white });
    yesNo(p, app, 930, () => app.answerGray(false), () => app.answerGray(true));
  },

  work(p, app) {
    const s = app.store.session;
    if (!s) return;
    const A = app.accentHex, zen = s.mode === 'zen', brk = s.phase === 'break' || s.phase === 'longBreak';
    header(p, app, { back: false });
    const pl = app.people;
    if (app.store.preset.people) p.icon('user-fill', 1736, 86, 50, C.gold, pl.nearestBand < 0 ? 0.28 : [1, 0.7, 0.45][pl.nearestBand]);
    const rx = app.window.ringCxTarget;
    if (!zen) {
      todoList(p, app, { x: 110, y: 262, w: 760, rows: 6, edit: false, accent: A });
      const g = p.ctx.createLinearGradient(0, 250, 0, 900);
      g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, brk ? 'rgba(217,195,126,0.5)' : 'rgba(139,195,74,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      p.ctx.fillStyle = g; p.ctx.fillRect(957, 250, 2, 650);
    }
    const label = zen ? 'ZEN' : s.phase === 'longBreak' ? 'LONG BREAK' : brk ? 'BREAK' : 'SET #' + s.set;
    const timeStr = zen && !s.total ? fmtTime(s.elapsed + 0.999) : fmtTime(app.store.remaining());
    const sub = s.paused ? 'paused' : zen ? (s.total ? 'until you finish' : 'take your time') : s.phase === 'longBreak' ? "until you're back" : brk ? 'until your next set' : s.set >= s.sets ? 'until you finish' : 'until your break';
    p.text(label, rx, 300, { size: 46, weight: 700, align: 'center', color: A, ls: 3 });
    p.text(timeStr, rx, 506, { size: timeStr.length > 5 ? 170 : T.timer, weight: 700, align: 'center', color: A });
    p.text(sub, rx, 668, { size: T.h3, weight: 700, align: 'center', color: A });
    const bx = zen ? CX : 958;
    p.iconButton('pause', bx, 980, 100, s.paused ? 'circle-play' : 'circle-pause', { color: A, plate: false, iconSize: 92 }, () => app.store.togglePause());
    if (s.paused) p.button('end', bx + 86, 939, 250, 82, 'End session', { kind: 'plain', size: 28 }, () => app.endSession());
    toast(p, app, 880);
  },

  complete(p, app) {
    header(p, app, { back: false });
    const d = app.completed || { mode: 'focus', sets: 0, minutes: 0 }, todos = app.store.data.todos;
    p.icon('circle-check', CX, 372, 168, C.green);
    title(p, d.mode === 'zen' ? 'ZEN SESSION COMPLETE' : 'SESSION COMPLETE', 548, 88);
    const done = todos.filter((t) => t.done).length;
    let line = d.mode === 'zen' ? `${d.minutes} ${d.minutes === 1 ? 'minute' : 'minutes'} of calm.` : `${d.sets} ${d.sets === 1 ? 'set' : 'sets'}, ${d.minutes} minutes of focus.`;
    if (d.mode !== 'zen' && todos.length) line += ` ${done} of ${todos.length} tasks done.`;
    p.text(line, CX, 660, { size: T.body1, align: 'center', color: C.white });
    if (d.mode === 'zen') {
      p.button('again', 640, 800, 300, 88, 'Start again', { kind: 'secondary' }, () => app.startSession());
      p.button('done', 980, 800, 300, 88, 'Done', { kind: 'primary' }, () => app.finish());
    } else {
      const lb = app.store.data.focus.longBreak;
      p.button('long', 430, 800, 470, 88, `Long break, ${lb} min`, { kind: 'secondary', icon: 'coffee' }, () => app.longBreak());
      p.button('again', 930, 800, 290, 88, 'Start again', { kind: 'secondary' }, () => app.startSession());
      p.button('done', 1250, 800, 240, 88, 'Done', { kind: 'primary' }, () => app.finish());
    }
  },

  settings(p, app) {
    header(p, app, { close: true });
    title(p, 'SETTINGS', 190, 84);
    const s = app.store, st = s.data.settings, set = (k, v) => { st[k] = v; s.changed(); app.applySettings(); };
    let y = 270; const step = 96;
    if (app.xr) { segmented(p, 'ptr', row(p, app, y, 'Pointer', 'pointer', 80), ['Hand ray', 'Head tracking'], st.pointer === 'head' ? 1 : 0, (i) => set('pointer', i ? 'head' : 'hand'), 540); y += step; }
    onOff(p, 'snd', row(p, app, y, 'Sounds', null, 80), st.sounds, (v) => set('sounds', v)); y += step;
    segmented(p, 'spd', row(p, app, y, 'Timer speed', 'speed', 80), ['Real time', 'Demo'], st.speed > 1 ? 1 : 0, (i) => set('speed', i ? 30 : 1), 540); y += step;
    if (app.xr && app.depthAvailable) { onOff(p, 'dep', row(p, app, y, 'Nearby things show through', 'depth', 80), st.depth, (v) => set('depth', v)); y += step; }
    let a = row(p, app, y, 'Workspace position', null, 80);
    p.button('recenter', a.x + a.w / 2 - 190, y + 9, 380, 62, 'Recenter on me', { kind: 'plain', icon: 'locate-fixed', upper: false, size: 30 }, () => app.recenter(true)); y += step;
    a = row(p, app, y, 'Feature introductions', null, 80);
    p.button('tips', a.x + a.w / 2 - 190, y + 9, 380, 62, 'Show again', { kind: 'plain', icon: 'rotate-ccw', upper: false, size: 30 }, () => app.resetTips()); y += step;
    toast(p, app, y + 26);
    const btns = [];
    if (s.session) btns.push(['end', 'End session', 'secondary', () => app.endSession()]);
    if (app.xr) btns.push(['exit', 'Exit mixed reality', 'secondary', () => app.exitXR()]);
    else if (app.started) btns.push(['exit', 'Exit preview', 'secondary', () => app.exitPreview()]);
    btns.push(['done', 'Done', 'primary', () => app.back()]);
    const widths = btns.map((b) => Math.max(240, p.measure(b[1].toUpperCase(), { size: 32, weight: 600, ls: 1.6 }) + 110));
    let x = CX - (widths.reduce((q, w) => q + w, 0) + (btns.length - 1) * 28) / 2;
    btns.forEach((b, i) => { p.button(b[0], x, 916, widths[i], 88, b[1], { kind: b[2] }, b[3]); x += widths[i] + 28; });
    p.text('Aug-Fice. Concept and design by Sahil Faraz.', CX, 1042, { size: 24, align: 'center', color: C.dim });
    infoPopover(p, app);
  },
};

// The to-do list, shared by the prepare screen and the work view.
function todoList(p, app, { x, y, w, rows, edit, accent = C.green }) {
  const s = app.store, todos = s.data.todos, c = p.ctx, RH = 92;
  const pages = Math.max(1, Math.ceil((todos.length + 0.0001) / rows));
  app.todoPage = Math.min(app.todoPage || 0, pages - 1);
  const start = app.todoPage * rows, view = todos.slice(start, start + rows);
  view.forEach((t, i) => {
    const ry = y + i * RH, cy = ry + RH / 2, editing = app.editingId === t.id;
    const toggle = () => { t.done = !t.done; s.changed(); };
    // checkbox
    p.rr(x + 20, cy - 23, 46, 46, 12);
    if (t.done) { c.fillStyle = accent; c.fill(); p.icon('check', x + 43, cy, 36, C.ink); }
    else { c.fillStyle = 'rgba(255,255,255,0.92)'; c.fill(); }
    const label = t.text || (editing ? '' : 'New task');
    p.text(label, x + 100, cy + 2, { size: T.body1, weight: 600, color: t.text ? accent : C.dim, alpha: t.done ? 0.5 : 1, maxW: w - 200 });
    if (t.done && t.text) { const tw = Math.min(w - 200, p.measure(t.text, { size: T.body1, weight: 600 })); c.fillStyle = accent; c.globalAlpha = 0.5; c.fillRect(x + 100, cy, tw, 2.5); c.globalAlpha = 1; }
    c.fillStyle = editing ? accent : 'rgba(139,195,74,0.28)'; c.fillRect(x + 100, ry + RH - 12, w - 190, editing ? 3 : 2);
    if (edit) {
      p.region('todo-' + t.id, x, ry + 4, w - 96, RH - 8, { r: 22, onClick: () => app.editTodo(t) });
      p.iconButton('todo-rm-' + t.id, x + w - 44, cy, 64, 'x', { color: C.dim, plate: false, iconSize: 38 }, () => { s.removeTodo(t.id); });
    } else {
      p.region('todo-' + t.id, x, ry + 4, w - 10, RH - 8, { r: 22, onClick: toggle });
    }
  });
  const ay = y + view.length * RH + 54;
  if (view.length < rows) {
    p.iconButton('todo-add', x + 43 + 60, ay, 84, 'circle-plus', { color: accent, plate: false, iconSize: 78 }, () => app.editTodo(s.addTodo('')));
    if (!todos.length) p.text('Add your first task', x + 170, ay + 2, { size: T.body1, color: C.dim });
  }
  if (pages > 1 || todos.length >= rows) {
    const py = y + rows * RH + 54, px = x + w - 150;
    if (view.length >= rows) p.iconButton('todo-add', x + 103, py, 84, 'circle-plus', { color: accent, plate: false, iconSize: 78 }, () => { app.todoPage = pages; app.editTodo(s.addTodo('')); });
    p.iconButton('todo-up', px, py, 72, 'chevron-up', { color: app.todoPage > 0 ? C.white : C.faint, plate: false, iconSize: 46 }, app.todoPage > 0 ? () => { app.todoPage--; app.redraw(); } : null);
    p.text(`${app.todoPage + 1} / ${pages}`, px + 72, py + 2, { size: T.body2, align: 'center', color: C.dim });
    p.iconButton('todo-down', px + 144, py, 72, 'chevron-down', { color: app.todoPage < pages - 1 ? C.white : C.faint, plate: false, iconSize: 46 }, app.todoPage < pages - 1 ? () => { app.todoPage++; app.redraw(); } : null);
  }
}

export function drawScreen(p, app) {
  p.begin();
  const fn = SCREENS[app.store.screen];
  if (fn) fn(p, app);
  p.end();
}
