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
		'img/slides/slide1m.jpg',
		'https://fonts.googleapis.com/icon?family=Material+Icons'
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
	
	this.addEventListener("fetch", function(event) {
		event.respondWith(
			fetch(event.request).then(function(response) {
				return caches.open("1").then(function(cache) {
					return cache.put(event.request, response.clone()).then(function() {
						return response
					})
				})
			}).catch(function() {
				return caches.match(event.request)
			})
		)
	})	
  
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

window.addEventListener('beforeinstallprompt', function(e) {
	// beforeinstallprompt Event fired
  
	// e.userChoice will return a Promise. 
	// For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
	e.userChoice.then(function(choiceResult) {
  
	  console.log(choiceResult.outcome);
  
	  if(choiceResult.outcome == 'dismissed') {
		console.log('User cancelled home screen install');
	  }
	  else {
		console.log('User added to home screen');
	  }
	});
  });

  var deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});

btnSave.addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    // The user has had a postive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt();

    // Follow what the user has done with the prompt.
    deferredPrompt.userChoice.then(function(choiceResult) {

      console.log(choiceResult.outcome);

      if(choiceResult.outcome == 'dismissed') {
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }

      // We no longer need the prompt.  Clear it up.
      deferredPrompt = null;
    });
  }
});
