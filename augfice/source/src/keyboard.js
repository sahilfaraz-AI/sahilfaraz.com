// In-headset keyboard for naming tasks and contacts. A paired physical keyboard works too.
import { GlassPanel } from './panel.js';
import { C } from './theme.js';

const ROWS = {
  abc: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
  num: ['1234567890', '-/:;()&@"', ".,?!'+#"],
};

export class Keyboard {
  constructor({ maxAniso = 8 } = {}) {
    this.panel = new GlassPanel({ w: 1500, h: 600, widthM: 0.66, radius: 54, chrome: false, maxAniso });
    this.panel.mesh.renderOrder = 30;
    this.group = this.panel.group;
    this.group.visible = false;
    this.open = false; this.text = ''; this.layer = 'abc'; this.shift = true;
    this.opacity = 0; this.cb = null; this.placeholder = 'New task'; this.blink = 0;
  }

  show(text, { placeholder = 'New task', onChange, onDone } = {}) {
    this.text = text || ''; this.placeholder = placeholder; this.cb = { onChange, onDone };
    this.layer = 'abc'; this.shift = this.text.length === 0; this.open = true; this.panel.enabled = true; this.panel.dirty = true;
  }

  hide(commit = true) {
    if (!this.open) return;
    this.open = false; this.panel.enabled = false;
    const cb = this.cb; this.cb = null;
    if (cb && cb.onDone) cb.onDone(this.text.trim(), commit);
  }

  type(ch) {
    if (!this.open || this.text.length >= 40) return;
    this.text += this.shift && this.layer === 'abc' ? ch.toUpperCase() : ch;
    this.shift = false; this.changed();
  }

  backspace() { if (!this.open) return; this.text = this.text.slice(0, -1); if (!this.text) this.shift = true; this.changed(); }
  changed() { this.panel.dirty = true; if (this.cb && this.cb.onChange) this.cb.onChange(this.text); }

  // Physical keyboard
  key(e) {
    if (!this.open) return false;
    if (e.key === 'Enter') this.hide(true);
    else if (e.key === 'Escape') this.hide(false);
    else if (e.key === 'Backspace') this.backspace();
    else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) { if (this.text.length < 40) { this.text += e.key; this.shift = false; this.changed(); } }
    else return false;
    return true;
  }

  update(dt, time) {
    this.opacity += ((this.open ? 1 : 0) - this.opacity) * (1 - Math.exp(-dt * 10));
    this.group.visible = this.opacity > 0.01;
    this.panel.uniforms.uOpacity.value = this.opacity;
    this.panel.update(dt);
    const b = Math.floor(time * 1.8) % 2;
    if (this.open && b !== this.blink) { this.blink = b; this.panel.dirty = true; }
    if (this.panel.dirty && this.group.visible) this.draw();
  }

  draw() {
    const p = this.panel, c = p.ctx;
    p.begin();
    // field
    p.platter(40, 28, 1420, 96, 30, { fill: 'rgba(0,0,0,0.28)' });
    const shown = this.text || this.placeholder;
    const o = { size: 44, weight: 400, color: this.text ? C.whiteHi : C.dim, maxW: 1300 };
    p.text(shown, 76, 78, o);
    if (this.blink) { const tw = this.text ? Math.min(1300, p.measure(this.text, o)) : 0; c.fillStyle = C.green; c.fillRect(76 + tw + 4, 50, 3, 54); }

    const key = (id, x, y, w, label, fn, opt = {}) => {
      p.rr(x, y, w, 96, 22);
      c.fillStyle = opt.primary ? C.green : opt.active ? 'rgba(139,195,74,0.28)' : opt.dark ? 'rgba(255,255,255,0.045)' : 'rgba(255,255,255,0.09)';
      c.fill();
      if (opt.icon) p.icon(opt.icon, x + w / 2, y + 48, 44, opt.primary ? C.ink : C.whiteHi);
      else p.text(label, x + w / 2, y + 50, { size: opt.size ?? 46, weight: opt.primary ? 600 : 400, align: 'center', color: opt.primary ? C.ink : C.whiteHi, ls: opt.primary ? 1.5 : 0 });
      p.region(id, x, y, w, 96, { r: 22, onClick: fn });
    };
    const rows = ROWS[this.layer], W = 124, G = 14;
    const up = this.shift && this.layer === 'abc';
    const rowKeys = (str, y, x0) => [...str].forEach((ch, i) => key('k' + ch, x0 + i * (W + G), y, W, up ? ch.toUpperCase() : ch, () => this.type(ch)));
    rowKeys(rows[0], 150, 67);
    rowKeys(rows[1], 260, 67 + (W + G) / 2);
    const n3 = rows[2].length, w3 = n3 * W + (n3 - 1) * G, x3 = (1500 - w3) / 2;
    rowKeys(rows[2], 370, x3);
    if (this.layer === 'abc') key('shift', x3 - 170 - G, 370, 170, '', () => { this.shift = !this.shift; p.dirty = true; }, { icon: 'arrow-up', active: this.shift, dark: true });
    key('bksp', x3 + w3 + G, 370, 170, '', () => this.backspace(), { icon: 'delete', dark: true });
    key('layer', 111, 480, 190, this.layer === 'abc' ? '123' : 'ABC', () => { this.layer = this.layer === 'abc' ? 'num' : 'abc'; p.dirty = true; }, { dark: true, size: 36 });
    key('space', 315, 480, 760, '', () => this.type(' '), { icon: 'space' });
    key('done', 1089, 480, 300, 'DONE', () => this.hide(true), { primary: true, size: 34 });
    p.end();
  }
}
