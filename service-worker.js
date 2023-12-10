// service-worker.js
const CACHE_NAME = 'search-engine-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.css',
  '/script.js',
  '/service-worker.js',
  '/manifest.json',
  '/LICENSE',
  '/README.md',
  // Image files
  '/images/bing.svg',
  '/images/duckduckgo.svg',
  '/images/google.svg',
  '/images/icon.ico',
  '/images/showall.svg',
  '/images/youcom.svg',
  '/images/youtube.svg',

  // Add other assets you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Clone the request to avoid consuming it
        const fetchRequest = event.request.clone();
        // Make the network request
        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clone the response to put it in the cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});
