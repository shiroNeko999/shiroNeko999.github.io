'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "df4421153002b184b7f730df41a4114e",
"assets/AssetManifest.bin.json": "e22bceec7085ad29e2ba18b27ef19b30",
"assets/AssetManifest.json": "eb629f52b8a76548ac04e11dfd927038",
"assets/assets/images/ankita.png": "0ff65d65c4c6e0bd5ba8f64ab782e2cc",
"assets/assets/images/background.png": "4fa5a6a19bb8ca61ec17f4ff206dbe92",
"assets/assets/images/bottom.svg": "ecefccd2ec29c389e1c01c64a281b651",
"assets/assets/images/bottom1.png": "dfdcedf081ae010ea64d23d25be434db",
"assets/assets/images/ganga.jpg": "52cbfed3e914b62bfc8c64a9ee1b9a46",
"assets/assets/images/ganges.jpg": "1ac9ee3fd313cd5afd56deb3111e0af5",
"assets/assets/images/guide.jpg": "e83cddc11074787f150be6c1e32155dd",
"assets/assets/images/guide_sample.png": "d149d536e05ab98ae6aa59260ccac1ab",
"assets/assets/images/guide_tour.jpg": "ecc3a1766e4addb9b1333d79e8b35d45",
"assets/assets/images/K1.png": "1f5b20935954fe3fe7d3645c6bc1caa4",
"assets/assets/images/K2.jpg": "4c31b85097d4c759bb5e3b2ee1e3d4f3",
"assets/assets/images/kashi.png": "02c7db78cbbcbd6e2ea247a4967a93c1",
"assets/assets/images/kashi.svg": "bb4844df2df212438631d21d622f506a",
"assets/assets/images/km.jpg": "0a07f8258efeb9690e4bc3b8ff08f62b",
"assets/assets/images/kumbh.svg": "2968f96c20b4f24b0551767fb9eb052d",
"assets/assets/images/Kumbh1.jpg": "92565370891f510ebf0e935b8bb16668",
"assets/assets/images/Kumbh2.jpg": "147556274769599f85b816ee336a8af2",
"assets/assets/images/Kumbh3.jpg": "f3f3046b84e1c4acda0e9a7615b909d7",
"assets/assets/images/Kumbh5.jpg": "c61e735bbb305dde149729e2e152b5d8",
"assets/assets/images/kumbhMela1.jpg": "6d644707352a3c88b87585f46cb64cd4",
"assets/assets/images/KumbhMela2.jpg": "6879a51978fec036ff305c834ff48098",
"assets/assets/images/KumbhMela5.jpg": "fc2f15284f296f3ec910f715cc7c691f",
"assets/assets/images/mandir.jpg": "f3c78ca03f56f3fe3f476a0e4af484d6",
"assets/assets/images/naveen.png": "bae19995aaf09d900f1654cea862df0d",
"assets/assets/images/overlay.png": "3c9fdb3e85dd51ab01c75eaab67d583f",
"assets/assets/images/overlay2.png": "31eec1e5a3e7d2eb49ea348660c056ba",
"assets/assets/images/rashmi.png": "8221ca0f9c3897601cf02389aa0ea547",
"assets/assets/images/s.svg": "ab412a44fdb731299da66c5bfe586b37",
"assets/assets/images/saadhna.png": "1f70f61101027e7344b0aa1581cddec5",
"assets/assets/images/Saadhna_logo.png": "d0ea3d680dad5f82b84a80b47caf298f",
"assets/assets/images/saadhna_up.svg": "fe24553842ce38a7cd4355177dea7b5b",
"assets/assets/images/shani_snan.jpeg": "6d644707352a3c88b87585f46cb64cd4",
"assets/assets/images/shani_snan2.jpeg": "be46e5d9067e86aecfb4a834706d1b9e",
"assets/assets/images/svgviewer-output.svg": "d627198e77b8387230afeff994a86a41",
"assets/assets/images/s_up.svg": "fe24553842ce38a7cd4355177dea7b5b",
"assets/assets/images/temple.png": "fe1c2a99f319c2ff745b13ebc5439f13",
"assets/assets/images/Venkatesh.png": "1b1bf313f9a0fd0c16c5e80678614368",
"assets/assets/sample/Saadhana_Private_policy.pdf": "3e0bb690ebf6bc52c28f65c4aff53151",
"assets/assets/sample/TermsOfUse.pdf": "ed0bd0801427d5a69b94fd3b9e2c969d",
"assets/FontManifest.json": "278c754facd3852e4242026d39aa673a",
"assets/fonts/MaterialIcons-Regular.otf": "7f82b3d8e15cb2ecf63bcf25039a704c",
"assets/fonts/Montserrat-VariableFont_wght.ttf": "b87689f37dfb5c51719210e4d96a34a2",
"assets/fonts/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/fonts/NicoMoji-Regular.ttf": "73c00071d90ecfb78bf0ccdeda529307",
"assets/fonts/RobotoCondensed-VariableFont_wght.ttf": "db98a47617ff4be3def284d81a518149",
"assets/fonts/Samarkan.ttf": "8107f8b787a40a84fbf3ee220abd84aa",
"assets/fonts/Volkhov-Bold.ttf": "f7bda5027eb06d48017511ee194aa57b",
"assets/NOTICES": "f813c8ff2cae32a7e45ec4edffaf9d1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7609103f3a637fab452cccf573c08d1c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73cfe7962c912d361a14e0cf62823c23",
"/": "73cfe7962c912d361a14e0cf62823c23",
"main.dart.js": "687501a34946c717d512323f5e30572a",
"manifest.json": "26b0f1217ba04ed80ee99758250b059f",
"version.json": "8f38238617fb31c1a9ca6dc2c0b6f488"};
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
