// Quiet interface sounds. Soft bells for transitions, a faint tick for taps.
export class Sounds {
  constructor() { this.ctx = null; this.enabled = true; }

  unlock() {
    try {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.ctx.state === 'suspended') this.ctx.resume();
    } catch (e) { /* no audio */ }
  }

  tone(freq, t0, dur, gain, type = 'sine') {
    const a = this.ctx; if (!a) return;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination); o.start(t0); o.stop(t0 + dur + 0.05);
  }

  bell(freq, when = 0, gain = 0.08) {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime + when;
    this.tone(freq, t, 1.8, gain); this.tone(freq * 2.01, t, 1.1, gain * 0.35); this.tone(freq * 3.0, t, 0.6, gain * 0.12);
  }

  tap() { if (this.enabled && this.ctx) this.tone(1500, this.ctx.currentTime, 0.05, 0.018, 'triangle'); }
  start() { this.bell(523.25); this.bell(783.99, 0.22); }
  toBreak() { this.bell(659.25); this.bell(523.25, 0.26); }
  toWork() { this.bell(587.33); this.bell(880, 0.22); }
  done() { this.bell(523.25); this.bell(659.25, 0.2); this.bell(783.99, 0.4); }
}
