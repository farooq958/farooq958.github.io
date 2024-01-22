'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "48ead6b8f661dc5eb610ad10195fdc95",
"index.html": "4bc58216fb24e09a85a2385511986741",
"/": "4bc58216fb24e09a85a2385511986741",
"main.dart.js": "e3dfb1e36cc6249df340bae86b79c108",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bcc7b4034df87a442bfe1e15b038fb48",
"assets/AssetManifest.json": "ed09cb839e64146a909ee66678bbe22f",
"assets/NOTICES": "8ae46311f96952319de80b6cd7842a90",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "aa0af760212a1851c46d7926296bb27e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "c1d8e280e2864b100cf05bee6f9f5068",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/assets/images/HIJRIA.jpg": "b2eefd55a0ef832abeb4270d9922eb72",
"assets/assets/images/man.png": "0ab0f4dc74d326b3cac832fcb9e9b1a3",
"assets/assets/images/flutdash.png": "ac9d3e804bfc692c064b9647e3ebff5b",
"assets/assets/images/home%2520page%2520logo.png": "73d3b66900a6fa24e547de31616059d1",
"assets/assets/images/me2.png": "5be2941cddbc96c8f797a3af3d570b6d",
"assets/assets/images/me3.jpg": "62f1af99b1dc6ec898f2f193a532cea1",
"assets/assets/images/MEE.png": "9d256476c50dc59456c726ced82f21cd",
"assets/assets/images/me4.jpg": "01fd8183bb6f225bfd3b6d1c42ba032b",
"assets/assets/images/me5.jpg": "f5d61fda87689388d5f08bae74a2cea9",
"assets/assets/images/me6.png": "c65a9a9c0acbf50313279bf946515b7a",
"assets/assets/resume/FarooqFlutterCV_Resume.pdf": "d19081befbf44becd9ca81155066403b",
"assets/assets/logos/DartLogo.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/logos/adobexd.png": "a0899133b64247a024570b6207322413",
"assets/assets/logos/FlutterLogo.png": "1f3a520cd9695b0b91d803b9dc42a4fe",
"assets/assets/logos/FirebaseLogo.png": "264b4af3b14bfeca830e7bb11f17ba17",
"assets/assets/logos/dotnet.png": "6eb1ee09009290485f0821da594aefa5",
"assets/assets/logos/c%2523.png": "6d7b9eb65af97b72d35c04873966ddc6",
"assets/assets/project/Project5.png": "ac98408a3e3a593d1525db006bd95e8c",
"assets/assets/project/Project3.png": "1be548c2710469e42a54f6906124ebd6",
"assets/assets/project/HBK.jpg": "390a7dda3e62994b64a8ff460d43507f",
"assets/assets/project/OMNI1.jpg": "3f96cd2766eeeb6f3f6eded9ed970b73",
"assets/assets/project/Project2.png": "f3a18f1a5a2995072b48dc15065f6c3c",
"assets/assets/project/Project1.png": "fe0e8ea646bbc6436d05130cbf2cb7f8",
"assets/assets/project/empleado.png": "ff4417c37e608d6e81e972767b27ecdf",
"assets/assets/project/tennis.jpg": "6623293507345e84f833716de20b9f12",
"assets/assets/project/Project4.jpeg": "f4c7b3a2f428537e8ec8c7faebec5066",
"assets/assets/project/hijria.jpeg": "51dbd7e80418860eb2f219e35199d2c1",
"assets/assets/project/apopou.jpg": "babb42fefeb08b8a7c9ccf42d3243391",
"assets/assets/project/apopou.jpeg": "bf3a37b16f98765edb5386c4d45f5e32",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
