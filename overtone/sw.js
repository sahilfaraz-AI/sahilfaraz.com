// Keeps Overtone working offline. Code and data are fetched fresh when there
// is a connection (so updates show up at once) and served from the cache when
// there is not. Audio never changes, so it is served from the cache first.
const CACHE = 'overtone-202611111643';
const FILES = ["./","index.html","app.js","manifest.webmanifest","icon-192.png","icon-512.png","assets/songs/what-you-see.mp3","assets/songs/what-you-see.features.bin","assets/songs/what-you-see.score.json","assets/songs/fracture.mp3","assets/songs/fracture.features.bin","assets/songs/fracture.score.json","assets/songs/low-tide.mp3","assets/songs/low-tide.features.bin","assets/songs/low-tide.score.json"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  const heavy = /\.(mp3|bin|png)$/.test(url.pathname);
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    if (heavy && cached) return cached;
    try {
      const res = await fetch(e.request);
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    } catch (err) {
      if (cached) return cached;
      throw err;
    }
  }));
});
