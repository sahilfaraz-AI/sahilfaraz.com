// Keeps Walltrip working offline: everything is cached on first load, then
// served from the cache while a fresh copy is fetched in the background.
const CACHE = 'walltrip-202611110409';
const FILES = ["./","index.html","app.js","analyze.worker.js","manifest.webmanifest","icon-192.png","icon-512.png","assets/songs/first-light.mp3","assets/songs/first-light.map.json","assets/songs/night-drive.mp3","assets/songs/night-drive.map.json","assets/songs/slipstream.mp3","assets/songs/slipstream.map.json","assets/songs/undertow.mp3","assets/songs/undertow.map.json","assets/songs/still-water.mp3","assets/songs/still-water.map.json"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then((res) => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => hit);
    return hit || fresh;
  }));
});
