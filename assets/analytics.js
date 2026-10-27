/*
  sahilfaraz.com analytics
  ------------------------
  Loads Microsoft Clarity (session recordings, heatmaps) and Google Analytics 4
  (traffic, sources, engagement time) and teaches both about this site's
  hash routes (#/codesigner, #/cruise-control/deep-dive, ...).

  Everything is wrapped so a blocked or failing tracker can never break the site.

  Handy links:
    ?ref=lyft        tag a visit with where the link was shared (one link per application)
    ?notrack=1       stop tracking this browser (use on your own devices)
    ?notrack=0       start tracking this browser again
*/
(function () {
  'use strict';

  // ---- settings: paste IDs here; an empty ID simply skips that tool ----
  var CLARITY_ID = 'z4fgw3ibez';   // Microsoft Clarity project ID, e.g. 'abcd1234ef'
  var GA4_ID = 'G-6RM7V15QNS';       // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'

  var CASES = {
    'cruise-control': 'Intelligent Cruise Control',
    'codesigner': 'CoDesigner',
    'mysleepytale': 'MySleepyTale',
    'research-alerts': 'Research Alerts',
    'aug-fice': 'Aug-Fice'
  };
  var HOME_SECTIONS = ['work', 'how', 'experience', 'play', 'about', 'resume', 'contact'];

  function safe(fn) { return function () { try { return fn.apply(this, arguments); } catch (e) { /* never break the site */ } }; }
  function store(kind) { try { return window[kind]; } catch (e) { return null; } }

  var params;
  try { params = new URLSearchParams(location.search); } catch (e) { params = { get: function () { return null; } }; }

  // ---- opt out on your own devices ----
  var ls = store('localStorage');
  try {
    if (params.get('notrack') === '1' && ls) ls.setItem('sf_notrack', '1');
    if (params.get('notrack') === '0' && ls) ls.removeItem('sf_notrack');
    if (ls && ls.getItem('sf_notrack') === '1') return;
  } catch (e) { /* storage blocked: keep tracking */ }
  if (!CLARITY_ID && !GA4_ID) return;

  // ---- where the visit came from (?ref=lyft, or utm_source) ----
  var ss = store('sessionStorage');
  var ref = (params.get('ref') || params.get('utm_source') || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
  try {
    if (ref && ss) ss.setItem('sf_ref', ref);
    if (!ref && ss) ref = ss.getItem('sf_ref') || '';
  } catch (e) { /* ignore */ }

  // ---- loaders ----
  var clarity = function () {};
  var gtag = function () {};

  if (CLARITY_ID) {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    clarity = safe(function () { window.clarity.apply(null, arguments); });
    var c = document.createElement('script');
    c.async = true;
    c.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(CLARITY_ID);
    document.head.appendChild(c);
    if (ref) clarity('set', 'ref', ref);
  }

  if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    gtag = safe(function () { window.gtag.apply(null, arguments); });
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_ID);
    document.head.appendChild(g);
    gtag('js', new Date());
    // page views are sent by hand below, because routes live in the hash
    gtag('config', GA4_ID, { send_page_view: false });
    if (ref) gtag('set', 'user_properties', { ref: ref });
  }

  function track(name, data) {
    data = data || {};
    if (ref) data.ref = ref;
    gtag('event', name, data);
    clarity('event', name);
  }

  // ---- routes: one virtual page per case study (and per mode) ----
  function route() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    var parts = h.split('/');
    if (CASES[parts[0]]) return { page: parts[0], mode: parts[1] === 'deep-dive' ? 'deep-dive' : 'highlights' };
    return { page: 'home', mode: '' };
  }

  var lastKey = '';
  var pageStart = Date.now();
  var lastPage = '';

  var onRoute = safe(function () {
    var r = route();
    var key = r.page + '/' + r.mode;
    if (key === lastKey) return;

    // time spent on the page being left
    if (lastPage && lastPage !== r.page) {
      var secs = Math.round((Date.now() - pageStart) / 1000);
      if (secs > 0) track('page_time', { page_name: lastPage, seconds: secs });
    }
    if (lastPage !== r.page) pageStart = Date.now();

    lastKey = key;
    lastPage = r.page;

    var path = r.page === 'home' ? '/' : '/' + r.page + (r.mode === 'deep-dive' ? '/deep-dive' : '');
    var title = r.page === 'home' ? 'Home' : CASES[r.page] + (r.mode === 'deep-dive' ? ' (deep dive)' : '');
    gtag('event', 'page_view', {
      page_location: location.origin + path,
      page_path: path,
      page_title: title,
      ref: ref || undefined
    });
    if (r.page !== 'home') {
      clarity('set', 'case_' + r.page, r.mode);
      clarity('event', 'case_' + r.page.replace(/-/g, '_'));
      if (r.mode === 'deep-dive') clarity('event', 'deep_dive');
    }
  });

  // the site switches highlights/deep dive without a hashchange, so poll the hash lightly
  window.addEventListener('hashchange', onRoute);
  setInterval(onRoute, 1500);

  // ---- which sections were actually seen (once each per visit) ----
  var seen = {};
  var watchSections = safe(function () {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(safe(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var id = el.id;
        if (!id || seen[id]) return;
        seen[id] = true;
        io.unobserve(el);
        var label = el.getAttribute('data-toc') || id;
        var r = route();
        track('section_view', { section_id: id, section_name: label, page_name: r.page });
        if (HOME_SECTIONS.indexOf(id) > -1) clarity('event', 'saw_' + id);
      });
    }), { threshold: 0.35 });
    HOME_SECTIONS.forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
    var cs = document.querySelectorAll('.cs-sec[id]');
    for (var i = 0; i < cs.length; i++) io.observe(cs[i]);
  });

  // ---- clicks that matter ----
  document.addEventListener('click', safe(function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a, button') : null;
    if (!a) return;
    if (a.hasAttribute('data-resume-download')) return track('resume_download');
    if (a.hasAttribute('data-resume-open')) return track('resume_open');
    var href = a.getAttribute('href') || '';
    if (href.indexOf('mailto:') === 0) return track('email_click');
    if (/^https?:/i.test(href) && href.indexOf(location.hostname) === -1) {
      var host = '';
      try { host = new URL(href).hostname; } catch (err) { /* ignore */ }
      return track('outbound_click', { link_domain: host, link_url: href.slice(0, 200) });
    }
  }), true);

  // ---- time on the last page when the visitor leaves ----
  window.addEventListener('pagehide', safe(function () {
    var secs = Math.round((Date.now() - pageStart) / 1000);
    if (lastPage && secs > 0) gtag('event', 'page_time', { page_name: lastPage, seconds: secs, ref: ref || undefined, transport_type: 'beacon' });
  }));

  var start = safe(function () { onRoute(); watchSections(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
