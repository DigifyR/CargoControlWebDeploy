'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "160ad139aa899aa4d7c7be4cab88f685",
"version.json": "e3218496fb4d48af11f57287751df692",
"favicon.ico": "cafa4318ae8aee76fc4ea38e7ac69f39",
"index.html": "fd66f60c0e39e8e5656a328c6c17e9ac",
"/": "fd66f60c0e39e8e5656a328c6c17e9ac",
"main.dart.js": "0e4240a75c88126599d88b62a7dc38f6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "3a03c21409c9484e8e16f651f3323696",
"icons/Icon-maskable-192.png": "3a03c21409c9484e8e16f651f3323696",
"icons/Icon-maskable-512.png": "3a03c21409c9484e8e16f651f3323696",
"icons/Icon-512.png": "3a03c21409c9484e8e16f651f3323696",
"manifest.json": "dc73c5e792accfa76e4e9d5064e9037d",
"assets/AssetManifest.json": "8b76c7064f21027226d9086fe1b9d2cc",
"assets/NOTICES": "c8fd4ecb25d61d93330359cc3511cefb",
"assets/FontManifest.json": "0d648fbcad51ea4cd00cb983ddbccc17",
"assets/AssetManifest.bin.json": "c09d746359aabd696387a87ff2ce10f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4c37758a84bfefd14ca4b7a4279d429d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2f5ded3e2682765cc628c43b789a2bf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "114437f64e67284fb6e3c133172e5f12",
"assets/fonts/MaterialIcons-Regular.otf": "ffa402fed2e43c6a40a48e72b6514a4d",
"assets/assets/images/general/ship.png": "72fd06e0e83aaeca403d1a7c908076d1",
"assets/assets/images/general/colorful_circle.png": "be13e5e6b23635f907b26c47d64dca1e",
"assets/assets/images/general/2.0x/ship.png": "750a15fbedf62ad0b10df9413c9c0a29",
"assets/assets/images/general/3.0x/ship.png": "8e2915beb933ee951ed4ab0e332b1de3",
"assets/assets/images/logos/white_logo.png": "bea70ed6a9887fa1a811c9571e6eb310",
"assets/assets/images/logos/2.0x/white_logo.png": "e8a3a045e000af8c2a954389b8f82b7d",
"assets/assets/images/logos/2.0x/logo.png": "87f1a9e090629c9342956a3d9b95ee79",
"assets/assets/images/logos/3.0x/white_logo.png": "d74157625debe2999eb82f2c2e9d8548",
"assets/assets/images/logos/3.0x/logo.png": "8a13228a9a9407e1901f73452d4ae57f",
"assets/assets/images/logos/logo.png": "1b6eb6e8fcd4215065d959dd637aec45",
"assets/assets/icons/searchIcon.png": "03048ac429e5aad742eeacd64a3da5ab",
"assets/assets/icons/arrowDown.png": "42d1194e2111b5e62c1b3ea3cd6a0b40",
"assets/assets/icons/deleteArrow.png": "8d783f742d1d1d165bc10aab21493deb",
"assets/assets/icons/scanIcon.png": "91c813eaff0536b9c326145ef117a0a0",
"assets/assets/icons/dialog_close.png": "e063792e154b9ca307f03afe8a0bad11",
"assets/assets/icons/delete.png": "70f2bdb643db313cdd5f5a382d2a6818",
"assets/assets/icons/copy.png": "8655744878bf996c6352ca1f35486f6f",
"assets/assets/icons/arrowback.png": "7b002b350672b3ecb1fe4aaaf99c9065",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
