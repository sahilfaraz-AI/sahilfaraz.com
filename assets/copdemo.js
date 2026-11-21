/* Auto mode, on the road: a speed zone with an officer waiting.
   Regular cruise holds its speed and gets pulled over; Auto mode follows the new limit.
   Illustration only, not production logic. Mount: <div data-copdemo></div> */
(function () {
  'use strict';
  var BODY = 'M6 30 Q4 22 14 20 L34 18 L48 6 Q52 3 58 3 L80 3 Q86 3 90 8 L100 18 Q110 19 112 26 L112 32 Q112 34 110 34 L8 34 Q6 34 6 30Z';
  var WIN = '<path d="M38 18 L50 8 L66 8 L66 18Z" fill="#9fb3c2" opacity=".85"/><path d="M70 8 L84 8 Q87 8 89 11 L95 18 L70 18Z" fill="#9fb3c2" opacity=".85"/>';
  var WHEELS = '<circle cx="28" cy="34" r="9" fill="#111"/><circle cx="28" cy="34" r="3.5" fill="#777"/><circle cx="90" cy="34" r="9" fill="#111"/><circle cx="90" cy="34" r="3.5" fill="#777"/>';
  var TT = '<svg viewBox="0 0 9 18" aria-hidden="true"><circle cx="4.5" cy="4.5" r="4" fill="currentColor"/><rect x="3.5" y="8" width="2" height="9" rx="1" fill="currentColor"/></svg>';
  var SIM = 1.5, PPM = 7, CAR_X = 150, CAR_MID = CAR_X + 56, LANE_Y = 146, SHOULDER_Y = 30;
  var SIGN_AT = 70, COP_AT = 205;

  function tpl() {
    return '' +
      '<div class="cop-top"><div class="cop-seg" role="group" aria-label="Cruise mode">' +
      '<button type="button" data-m="off" aria-pressed="false">Regular cruise</button>' +
      '<button type="button" data-m="auto" aria-pressed="true">Intelligent cruise, Auto</button></div>' +
      '<div class="cop-btns"><button type="button" class="cop-btn cop-res" disabled>RES</button><button type="button" class="cop-btn cop-play">Play</button></div></div>' +
      '<div class="cop-scene"><svg viewBox="0 0 800 210" role="img" aria-label="Side view of a road. A speed sign drops the limit from 70 to 50, and a police car waits on the shoulder.">' +
      '<rect width="800" height="210" fill="#0D0E09"/><rect y="0" width="800" height="76" fill="#15170f"/>' +
      '<rect class="cop-glow" width="800" height="210"/>' +
      '<rect y="76" width="800" height="126" fill="#202219"/><rect y="76" width="800" height="3" fill="rgba(244,243,232,.35)"/><rect y="199" width="800" height="3" fill="rgba(244,243,232,.35)"/>' +
      '<line class="cop-lane" x1="0" y1="138" x2="800" y2="138"/>' +
      '<g class="cop-sign-g"><rect x="-2" y="20" width="4" height="56" fill="#8a8a80"/><circle r="19" cy="22" fill="#fff" stroke="#D62E2E" stroke-width="6"/><text y="29" text-anchor="middle" font-family="Cabinet Grotesk,Switzer,sans-serif" font-weight="800" font-size="19" fill="#111">50</text></g>' +
      '<g class="cop-cop"><g><path d="' + BODY + '" fill="#f4f3e8"/><path d="M34 18 L100 18 Q108 19 110 24 L110 30 L8 30 L8 24 Q10 20 14 20Z" fill="#111"/>' + WIN + WHEELS +
      '<g class="cop-lights"><rect class="r" x="52" y="-4" width="11" height="6" rx="2"/><rect class="b" x="64" y="-4" width="11" height="6" rx="2"/></g></g>' +
      '<g class="cop-radar"><rect x="-6" y="-34" width="126" height="24" rx="12" fill="#3a4046"/><text class="cop-radar-t" x="57" y="-17" text-anchor="middle" font-family="Tabular,ui-monospace,monospace" font-size="12" fill="#fff">RADAR</text></g></g>' +
      '<g class="cop-car" transform="translate(' + CAR_X + ' ' + LANE_Y + ')"><path d="' + BODY + '" fill="#e9edf0" stroke="#7EDB5A" stroke-width="2"/>' + WIN + WHEELS + '</g>' +
      '</svg></div>' +
      '<div class="cop-row"><div class="cop-hud" aria-hidden="true">' +
      '<div class="cop-toast"><span class="cop-sign">50</span><span>Speed zone detected. To resume previous set speed, press RES</span></div>' +
      '<div class="cop-panel"><span class="cop-sign cop-lim">70</span><div class="cop-sp"><b class="cop-spd">70</b><span class="cop-set">' + TT + '<span class="cop-setv">70</span> <small>km/h</small></span></div></div></div>' +
      '<p class="cop-say" aria-live="polite"></p></div>' +
      '<p class="cop-note">Illustration, not production graphics. Press Play, then try RES while the message is up.</p>';
  }

  function mount(root) {
    if (root.classList.contains('cop')) return;
    root.classList.add('cop'); root.innerHTML = tpl();
    var q = function (s) { return root.querySelector(s); };
    var lane = q('.cop-lane'), sign = q('.cop-sign-g'), cop = q('.cop-cop'), radar = q('.cop-radar'), radarT = q('.cop-radar-t');
    var toast = q('.cop-toast'), lim = q('.cop-lim'), spd = q('.cop-spd'), setv = q('.cop-setv'), say = q('.cop-say');
    var resB = q('.cop-res'), playB = q('.cop-play');
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var S, raf = 0, last = 0;

    function msg(tag, text, cls) { say.className = 'cop-say' + (cls ? ' ' + cls : ''); say.innerHTML = '<span class="cop-tag">' + tag + '</span><span>' + text + '</span>'; }
    function reset() {
      cancelAnimationFrame(raf); raf = 0;
      S = { mode: root.dataset.mode || 'auto', t: 0, dist: 0, v: 70, tv: 70, limit: 70, set: 70, prev: 70, passed: false, until: 0, checked: false, bust: false, copY: SHOULDER_Y, carY: LANE_Y, end: 0, running: false };
      root.classList.remove('is-bust'); toast.classList.remove('on'); radar.classList.remove('on');
      resB.disabled = true; resB.classList.remove('is-hot'); playB.textContent = 'Play';
      msg('Ready', 'Cruising at 70 in a 70 zone. A school zone is coming up, with an officer on the shoulder.');
      draw();
    }
    function draw() {
      lane.style.strokeDashoffset = (S.dist * PPM % 48).toFixed(1);
      var sx = CAR_MID + (SIGN_AT - S.dist) * PPM;
      sign.setAttribute('transform', 'translate(' + sx.toFixed(1) + ' 0)');
      var cw = S.bust ? S.dist - 18 : COP_AT, cx = CAR_MID + (cw - S.dist) * PPM - 59;
      cop.setAttribute('transform', 'translate(' + cx.toFixed(1) + ' ' + S.copY.toFixed(1) + ')');
      if (!S.checked && cx - CAR_X < 300 && cx > CAR_X) { radar.classList.add('on'); radarT.textContent = 'RADAR ' + Math.round(S.v) + ' km/h'; }
      q('.cop-car').setAttribute('transform', 'translate(' + CAR_X + ' ' + S.carY.toFixed(1) + ')');
      lim.textContent = S.limit; spd.textContent = Math.round(S.v); setv.textContent = S.set;
    }
    function step(now) {
      var dt = Math.min(0.05, (now - last) / 1000) * SIM; last = now; S.t += dt;
      var rate = S.bust ? 26 : 9;
      if (S.v < S.tv) S.v = Math.min(S.tv, S.v + rate * dt); else if (S.v > S.tv) S.v = Math.max(S.tv, S.v - rate * dt);
      S.dist += S.v / 3.6 * dt;
      if (!S.passed && S.dist >= SIGN_AT) {
        S.passed = true; S.limit = 50;
        if (S.mode === 'auto') {
          S.prev = S.set; S.set = 50; S.tv = 50; S.until = S.t + 5 * SIM;
          toast.classList.add('on'); resB.disabled = false; resB.classList.add('is-hot');
          msg('Speed zone', 'Auto mode follows the new limit to 50. For five seconds, RES takes you back to 70.');
        } else msg('Speed zone', 'The camera reads 50, but regular cruise holds 70.');
      }
      if (S.until && S.t >= S.until) { S.until = 0; toast.classList.remove('on'); resB.disabled = true; resB.classList.remove('is-hot'); if (S.set === 50) msg('Speed zone', 'Now cruising at 50, the legal limit.'); }
      var copMid = CAR_MID + (COP_AT - S.dist) * PPM;
      if (!S.checked && copMid <= CAR_MID) {
        S.checked = true; radar.classList.remove('on');
        if (S.v > S.limit + 3) {
          S.bust = true; S.tv = 0; root.classList.add('is-bust');
          msg('Pulled over', Math.round(S.v) + ' in a ' + S.limit + ' zone. That\'s a ticket.', 'bad');
        } else { msg('No ticket', Math.round(S.v) + ' in a ' + S.limit + ' zone. The officer has nothing to do.', 'ok'); S.end = S.t + 0.9; }
      }
      if (S.bust && S.carY > SHOULDER_Y) S.carY = Math.max(SHOULDER_Y, S.carY - 70 * dt);
      draw();
      var done = (S.bust && S.v <= 0 && S.carY <= SHOULDER_Y) || (S.end && S.t >= S.end);
      if (done || !root.isConnected) { S.running = false; playB.textContent = 'Replay'; return; }
      raf = requestAnimationFrame(step);
    }
    function play() { reset(); S.running = true; playB.textContent = 'Replay'; last = performance.now(); raf = requestAnimationFrame(step); }

    root.dataset.mode = 'auto';
    root.querySelectorAll('[data-m]').forEach(function (b) {
      b.addEventListener('click', function () {
        root.dataset.mode = b.dataset.m;
        root.querySelectorAll('[data-m]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        play();
      });
    });
    resB.addEventListener('click', function () {
      if (!S.until) return;
      S.set = S.prev; S.tv = S.prev; S.until = 0; toast.classList.remove('on'); resB.disabled = true; resB.classList.remove('is-hot');
      msg('Your call', 'Back to 70. RES is there for when the limit is wrong. Here, it was right.');
    });
    playB.addEventListener('click', play);
    reset();
    if (!reduce && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); setTimeout(play, 500); } }, { threshold: 0.5 });
      io.observe(root);
    }
  }
  window.initCopDemo = function (scope) { (scope || document).querySelectorAll('[data-copdemo]').forEach(mount); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { window.initCopDemo(); });
  else window.initCopDemo();
})();
