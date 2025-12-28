
self.addEventListener('install',e=>{
  e.waitUntil(caches.open('bos').then(c=>c.addAll([
    './','./index.html','./manifest.json','./game/index.html'
  ])));
  self.skipWaiting();
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
