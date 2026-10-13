// Warm Race Planner service worker: offline cache. Bump VERSION when publishing new data.
const VERSION='wrp-2.3.0';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url); if(e.request.method!=='GET')return;
  if(u.origin!==location.origin)return; // map tiles etc: network only
  // network-first for pages (fresh data when online), cache-first for the rest
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(VERSION).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));return;}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok){const c=n.clone();caches.open(VERSION).then(x=>x.put(e.request,c));}return n;})));});
