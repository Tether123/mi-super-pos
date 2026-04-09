const CACHE_NAME = 'super-pos-v1';
const ASSETS = [
  'ai_studio_code.html',
  'manifest.json'
];

// Instalar y guardar archivos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responder desde la caché si no hay red
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});