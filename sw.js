if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};
var CACHE_NAME = 'my-site-cache-v3';
var urlsToCache = [
    'index.html',
    'css/materialize.min.css',
    'css/style.css',
    'css/style.css',
    'css/alertify.css',
    'css/normalize.css',
    'js/materialize.min.js',
    'js/jquery-3.3.1.min.js',
    'js/alertify.min.js',
    'img/slides/slide1.jpg',
    'img/slides/slide1m.jpg'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			console.log('Opened cache '+CACHE_NAME);
			return cache.addAll(urlsToCache);
		})
		.catch(function(e) {
			console.log('Error from caches open', e);
		})
	)
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
	  caches.match(event.request)
		.then(function(response) {
		  // Cache hit - return response
		  if (response) {
				console.log('got it from cache', event.request);
				return response;
		  }
		  return fetch(event.request);
		}
	  )
	);
  });
  
self.addEventListener("activate", function(event) {  
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
	    	return Promise.all(
				cacheNames.map(function(cacheName) {          
					if (CACHE_NAME !== cacheName) {
						return caches.delete(cacheName);          
					}        
				})      
			);    
		})  
	);
});
