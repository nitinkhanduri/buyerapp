'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b65deabac9876202085f536648d222fc",
"version.json": "be52a7b3cc09fb6a36624be117e42b6e",
"index.html": "3cbe1961c8863d83a3578e890427f377",
"/": "3cbe1961c8863d83a3578e890427f377",
"main.dart.js": "bb9655367ea6e89ef27e315387e8eb1a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "765dc5e3e62171df251b202841a0dd76",
"assets/AssetManifest.json": "c1b007515141e0be85b86b44bfac622d",
"assets/NOTICES": "3b26032eb33e41670e297a2f2583cadd",
"assets/FontManifest.json": "a270fec445645a6dd46e100bfb1e2b27",
"assets/AssetManifest.bin.json": "dca6ed78f4b28cd1ccc514799f33dc99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ec907e0d64c95858f7660c94a3b70f22",
"assets/fonts/MaterialIcons-Regular.otf": "2cbbb9a123a65140bbf4124f7fc70fff",
"assets/assets/image/add.png": "b0d8bd459f1df2b6cabab1d83db7f3f3",
"assets/assets/image/lava.png": "343001157b828c60bc449cfdde457353",
"assets/assets/image/same_day.png": "eeda2c6544867950ef6ab9eb48a9ba2a",
"assets/assets/image/termsandcondition.png": "c0c26ff0e5fdfbd85f86489520235608",
"assets/assets/image/hometheater.png": "f615d96bcec9f7fc0595112c632f75c4",
"assets/assets/image/support.png": "7f0a4cf977eff741be1b277059ce3418",
"assets/assets/image/house_icons.png": "133f6c62aed658d5d1bef58edfa678b8",
"assets/assets/image/suport.png": "007f30c7fc61f9230cfeba7885fcdbce",
"assets/assets/image/shop.svg": "d89929393cc6cdcf45c8d28c4b594f2c",
"assets/assets/image/product_svg.svg": "f74d0aa3a33b8f2c2228f8a10e19f8e9",
"assets/assets/image/oledtv.png": "fb005855f5805b4d4f26f2915deafd1e",
"assets/assets/image/cart.png": "d1381754c6719d5101e2f6f136085bb1",
"assets/assets/image/msg.png": "6448e8354bd7c01fce62b5d2c59f9e4d",
"assets/assets/image/settings.png": "ae04bdb3b218f67e3a99c5bb03fdc2ce",
"assets/assets/image/product.png": "ef557f96cad0c78ac8451a7ad7e1a093",
"assets/assets/image/shopopen.jpg": "14ef50fce0eb92225ebb9bbcc33b5d6d",
"assets/assets/image/case.png": "19834b2ae22f0fe389366fddb813b852",
"assets/assets/image/ban.png": "95ade38f28bcc6822a7e0b5d8948a030",
"assets/assets/image/applogo.png": "c3e53ac9d564b81dfa1c835783975b0d",
"assets/assets/image/banner.png": "e06655b8421e2430a44e2591389f0f2b",
"assets/assets/image/Phone@3x.png": "976d6212eccb49b2174383d710cb1f00",
"assets/assets/image/address.png": "4c49b7bc36dfbcd9ecd137c504870aca",
"assets/assets/image/backgroundApp.png": "a18bef407f407d563737b0c250ff0599",
"assets/assets/image/product.svg": "3e32a3180b3dab991e90efa9921544a9",
"assets/assets/image/headset.png": "85923f3ae8e6295e8eea44aca5712bb3",
"assets/assets/image/sliderimage1.png": "314369878874424461fc5dc7b09d991e",
"assets/assets/image/cart.svg": "80e8115cf98d3d292fd049c12f8595b1",
"assets/assets/image/down.png": "1bdf2a1e7e3f71f80a38c8ae74acb968",
"assets/assets/image/logout.png": "3e984776a2b6766d3548a3b1017d2b0f",
"assets/assets/image/sliderimage2.png": "6721bc1138cea1acb8a653697f6665ea",
"assets/assets/image/projecter.png": "25e9b9f21c8c14e15d7c9fc50706007a",
"assets/assets/image/shop.png": "849d36ae2ac200af4d167c9a9e389397",
"assets/assets/image/provicypolicy.png": "7f0a0ec6a33eb22d96a02d09831b4288",
"assets/assets/image/food_delivery.png": "008b31e3646ea153b3e3c92c1b226a36",
"assets/assets/image/demo.png": "283d1d092189e6c3988bfffb55a5fd71",
"assets/assets/image/house.png": "16d30f75b19f69a4843b55cbf7a73b29",
"assets/assets/image/shopiful.png": "db439f43ecb1dcefed79cc42bc220a58",
"assets/assets/image/upi.png": "46355a38e5346fde206bb61e9432146a",
"assets/assets/image/Search.png": "fa163a0184af250b76e68904a3327ec1",
"assets/assets/image/cart_svg.svg": "f4cbb40c44ce5d5ed0c29981674bc9aa",
"assets/assets/image/shop1.png": "35457fab4e0b8c5a2028b0f10fd87ecb",
"assets/assets/image/googlemap.png": "61cecf18a5333b31be93b408b2f0110d",
"assets/assets/image/shop_svg.svg": "3354d30520b60e7b0d538bbcdff591af",
"assets/assets/image/mail_icon.png": "5ef9a2d7414edc1dde3540da12c733c4",
"assets/assets/image/monitor.png": "5419ff774809c823b3924d65f6d94c18",
"assets/assets/image/web_app_bar_sec.png": "14a593384c8f94daabf30c348ca36e0f",
"assets/assets/image/add%2520fill.png": "82bf93b8725c0285ecd7b7074b810787",
"assets/assets/image/splash.png": "e2438b6736f03da9af4975ae31269676",
"assets/assets/image/shop2.png": "a55257629bf0154c0647e42d01bedf4a",
"assets/assets/image/done.png": "074958a37b1f40c95302e18a89b0589e",
"assets/assets/image/tablet.png": "02014a437630cccca07bde1c8f98775c",
"assets/assets/image/shop3.png": "7c0ee1d5742d9bacb37db21f2f1abd3b",
"assets/assets/image/product_banner_images.png": "5e9f14070abf283113e31277b2b25406",
"assets/assets/image/location_selector.png": "40050e69e25863aeabad6ec891826d9c",
"assets/assets/image/app_bar.png": "423eb798194d9624ba8597df52716935",
"assets/assets/image/categories.svg": "8389b0d63e556b0acf94ba89d2a82b00",
"assets/assets/image/sort.png": "0ae28756e5fc7954f6113daa87b97559",
"assets/assets/image/share.png": "1fdc6d696981ce327fe308e8d034c0ed",
"assets/assets/image/profile.png": "7dda8183778655eb388d9a39df8434fe",
"assets/assets/image/rightFill.png": "0b5d8d28a3e6d5a0364750e57c5ea7ea",
"assets/assets/image/eye.png": "fdc53c23bdf48ef67961bf6d5ecbc57b",
"assets/assets/image/mobile.png": "395e92b2138a133b0a95b6c3892f325c",
"assets/assets/image/locations_login.png": "d25945c28b006f20a2234e78449537ba",
"assets/assets/image/location.png": "bd219ddf133024a65064d220ca3fb51d",
"assets/assets/image/phone.png": "852dbd8a988dcb296cb96d5092db192f",
"assets/assets/image/call.png": "c7d7da076272cc0a2045784700c2c546",
"assets/assets/image/credit-card.png": "1a14c85820d230db3dbb1eec4543552c",
"assets/assets/image/categori_svg.svg": "cb65c5adbb29c4f4d5dc9f24e9aa1276",
"assets/assets/image/bank.png": "cc106e3b98a7be0ec10ac0d0f25fc909",
"assets/assets/image/notfound.jpg": "5c170c80d02d81dfd9cb98e7520bc563",
"assets/assets/image/Hamburger_icon.png": "a621bcc457d25dfdd4f2788924853f50",
"assets/assets/image/neckband.png": "46a1f3f47e9eebcad3c51765ddf9bf96",
"assets/assets/image/categories.png": "9031e2600e0015dcf10ab397c6b976bf",
"assets/assets/image/web_app_bar.png": "f33fa14321f6182e8b9c6a4a0d52aa93",
"assets/assets/image/third_day.png": "aef17537f7890fc3fe4fbce7d9b9be05",
"assets/assets/image/dress.png": "d1eed6efe7355d3a4caaf4e5f953e67f",
"assets/assets/image/admin_tool_logo.png": "67eef811dae86312008e8393ba44af1b",
"assets/assets/image/messages.png": "f39a90b348ab9759d7f2bf02f14a9b6b",
"assets/assets/image/message.png": "7d36c5d3e8e4e095866e4f8c3af9c7f3",
"assets/assets/image/single_section.png": "2b529472137d69079e1bf4598dafc548",
"assets/assets/image/right.png": "50fa4bffaf2267fe5ec7e09df6157dce",
"assets/assets/image/grosery.png": "c2ffdbb933a283f2489bceec9817c672",
"assets/assets/image/apps_logo_top.png": "a27efb42385b2598b3ace656f9f9993f",
"assets/assets/image/emptycart.jpg": "b2022a8268aa89bb1f50d485b07a3b62",
"assets/assets/image/second_day.png": "5b2ac25af2f0aaa067850e7d20199d1e",
"assets/assets/image/leading.png": "196cafa90e278d38a61e87c8adfcb207",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
