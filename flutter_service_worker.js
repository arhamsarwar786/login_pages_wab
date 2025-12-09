'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "591f6ed4b5adb48bb5ddd6539aae3c3a",
".git/config": "28ddcefefabbd92b26945b64e7e17991",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "234c9d4397f8ba9c5c199e977da76172",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b2943f5ed15a6a30eecadbd9d1c983c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea20f85b8f74f5f84d57e88ed76c9f99",
".git/logs/refs/heads/master": "ea20f85b8f74f5f84d57e88ed76c9f99",
".git/logs/refs/remotes/origin/HEAD": "378479268744d8d8672ac02a916840cd",
".git/logs/refs/remotes/origin/master": "17a55b5146cd758cb0c97e8abc686e8d",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/35be2bacdaaab7d9521ff53667b25abdc40250": "6f6d8f78701cce6124c8b46cd7e01b74",
".git/objects/18/4342038ca9fc01f49d131d0c95aa06a244da95": "fca6ea124f37f0c910defe231b6e557c",
".git/objects/1a/30a9674e98e2e236d303a6e68c1c8b5f73bb87": "05df3d7de9544db296345a28b50f08bd",
".git/objects/1e/6be70f68db72ed0ff3cd99443f24acaf835e86": "6591ded1c0a2a4118e1a2ba8728c516f",
".git/objects/2a/ddfd65ac808ed4a8bd737c5eeded5cbc3a4450": "59c0a7573ab71c6634725aa5ea5cada1",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/7633beebf5ec24fdb677e386c85fcb09e7180b": "d25374c926c4723ebec7534d4eb297f9",
".git/objects/43/30f4b65d4737ad379021393f87d592df4f9b55": "d841f49d1d351d8eeacfc8372fb07471",
".git/objects/43/8aa4c9448f4e836a4bfff807e4b18ebd14363f": "885eb7340baef7e51418743afdaffcdc",
".git/objects/49/8332b1668cd727c7ed50f413223f4d60d73e37": "6f4613b519447d5d6486cf50a79936fd",
".git/objects/4e/cc80a9163e1545ce0c8bdf76802c3c98ffe52e": "006d5d89a63caac0068d80940895f6ce",
".git/objects/4e/f57b032435a27a1cf88f45401244d0b2f88dd2": "ff0ad2a7f30588bc744ba4a34422e730",
".git/objects/50/241da5db8e129690861747663e79b7208e3c13": "9b901d290b1ed4e7ee83b9535c2bc145",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/8f22d4af8b698bfe0623a1bd69a12dae649281": "4fe13b0fc590fb8b52e7659e9d574f56",
".git/objects/72/4bef286bb69f0ea6e0db39fdde7f58fc59c7a0": "e9e7f7e5fd9baec14da8eba679643484",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/78/eaa85a61bb832b6e43494e1f8f319b57ce3334": "88a251360986dbb141eb84fbe8965313",
".git/objects/79/ddad05c5e85a6eaa1a6b5818e0f8f99e059bc1": "34504f70eda6987702c27efdb876f337",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/84/c7e4763ee7eab4864431f8faa3e38694433321": "3b77796e9a6fe38efada36a0c850e238",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/dcc39ede853e9d9677b9ddc7c6d16bde9ea997": "65e137d85e72207df93a37aff1985d2f",
".git/objects/91/3d6ffdb0054746955ee685b4b5a6d3cdde22a6": "6c5210a7dfdec85c98b402cd1c25ece8",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/a3/ab0b372dea574adf469102bde25a818d963ba9": "d85025576035a9207b9b627549adcc44",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/b008b6e1239840ff746d1d9b7d1081cf517f96": "d94c9177cd881e668f563c5ea3b5b837",
".git/objects/ac/09a008682bef8768a44f3b14db78c6f4c1e03b": "ae221c32eb469e8a147777e5cef1d9a7",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/02a484fefae3e175461a01e6c48b8c6c4d75cc": "e5c521c9ec0646da0bfcc039c65fcbbc",
".git/objects/be/a08ab3b4bde79dd465fcf618fa0e2987f8cf60": "f7a7fc2993533295e2536a5b15f0821b",
".git/objects/c1/b3d742731d1248f34121728d4dc36c1f51e8c9": "2e52b74e285b91f7a7836e8ede3ed908",
".git/objects/c2/e1e3d10c55a91552d2ea794de684f558b135d9": "4d91e36b0e37bb7f9f8eeb68908f8e39",
".git/objects/c5/6a67c753e713e68b3ce0fc493c5c42775ac08b": "7cf57142e5f62f1a361671e163be403c",
".git/objects/c7/e9b00f35934a0839dafb073e97eb090e15a8d9": "e2df146a758c3aa5439fe906504900af",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d3/aa9de776f2dac29c6245f9a5db3e64073abe3c": "bbb5ea8919e97439b9721a7b819cfa8f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e7/361840dbf7eee0429a0d0302acf2de403922c0": "dc0357bc043054f8d2527e53fa73e951",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/20e5a7dbdef0104297ea994060d405061f777f": "ee0b258bc4f040f2adac70ad01b4eaa7",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/ca17a99f5b0f23c16b762ef8bca6b52acdc46f": "46d3ffa354aa2653c6a43ab7dd4da234",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "9f671f3b54960b9b43d28d13ffbb2691",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "9f671f3b54960b9b43d28d13ffbb2691",
"assets/AssetManifest.bin": "2a5403134fcf9b6d0e60c55ac6bee091",
"assets/AssetManifest.bin.json": "5229bb5ff6876f0f4d2ae53fe22546fd",
"assets/assets/fonts/hel.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/images/apple.png": "1b278f1171601e4c674d741c95a1eb93",
"assets/assets/images/circle.png": "e4129c14cef258b99ff2a9adff959e65",
"assets/assets/images/facebook.png": "ccdb2f6de6a03d2f125ee1fd60e5c38e",
"assets/assets/images/google.png": "75bcb7517f1fc5d174c9ac98728e583e",
"assets/assets/images/Gradient1.png": "ac9fc84dcecef7abb57155648f3d0088",
"assets/assets/images/Gradient2.png": "fe0246b858111b95bf45e6973a4e9638",
"assets/assets/images/Gradient3.png": "b65754b08a71cc98ba1311b15c4f8ead",
"assets/assets/images/Gradient4.png": "f9aec5732e8f14980bbec786b2e8eb3e",
"assets/assets/images/Gradient5.png": "4af3bca6f1851de95136ca5b956de1cb",
"assets/assets/images/Gradient6.png": "2223a0328debc81423c911351b72d182",
"assets/assets/images/group.png": "cdea09a25a5c720f0b5d564a90540844",
"assets/assets/images/group1.png": "866b7f6229ae3dc232a7af5c7cb47ae1",
"assets/assets/images/polygon.png": "348fb491fb479be6ccf509a9a8cdea99",
"assets/assets/images/star.png": "cdea09a25a5c720f0b5d564a90540844",
"assets/FontManifest.json": "4575397130e2191fcfaebd9a8fef996d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "df717d274c4894f91361ea38c67126b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "6c74ba479e34c8ec6338acecc859fd44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "44b5bcfef362cdbea79d18e6cc5981c3",
"/": "44b5bcfef362cdbea79d18e6cc5981c3",
"main.dart.js": "d7878408d12366a55fc37a7f7e3372a2",
"manifest.json": "207ea94ae4da7b8bfa79afab5ec6442a",
"version.json": "d9a38c0a1966b91f233828db582230cb"};
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
