/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d5aa25a46804ade651e1a0e3d2e52163"
  },
  {
    "url": "accounts.html",
    "revision": "94172e2acb38b28babdd661c032be1bf"
  },
  {
    "url": "assets/css/0.styles.470dc0eb.css",
    "revision": "acb76e224792d8b4dd44713e70524425"
  },
  {
    "url": "assets/img/bandwidth_viz_ru.ff3233ad.png",
    "revision": "ff3233ad88ea9a2070c24586e06c3b22"
  },
  {
    "url": "assets/img/bandwidth_viz.ff3233ad.png",
    "revision": "ff3233ad88ea9a2070c24586e06c3b22"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/viz_architecture_ru.bf11ed1a.png",
    "revision": "bf11ed1a507160838061acf4a3b1e700"
  },
  {
    "url": "assets/img/viz_architecture.72ab2d71.png",
    "revision": "72ab2d715fe29993a05da5412297a435"
  },
  {
    "url": "assets/js/10.86afaf3a.js",
    "revision": "737f5c076e7594497235b388fcce26fc"
  },
  {
    "url": "assets/js/11.99c464c1.js",
    "revision": "75d0e1e95141252cea135f41059b9e5d"
  },
  {
    "url": "assets/js/12.29ea747c.js",
    "revision": "2e3ca4c308649b2d6395d631341730f6"
  },
  {
    "url": "assets/js/13.fd4e6253.js",
    "revision": "09603de4faf4da4a13295763c08f80c3"
  },
  {
    "url": "assets/js/14.3788c161.js",
    "revision": "4cf03e0cd1342e2a02e9de00b1c9c71d"
  },
  {
    "url": "assets/js/15.f2563aab.js",
    "revision": "df183afb63d7601a8c5c84d6c66850c6"
  },
  {
    "url": "assets/js/16.c8ba0b0c.js",
    "revision": "c68a15b6bb7e1e20279c2c1cf27ef8c1"
  },
  {
    "url": "assets/js/17.1938aeb9.js",
    "revision": "6910f634b45ca04ed13129d5d8fdeab1"
  },
  {
    "url": "assets/js/18.7dd9d0cb.js",
    "revision": "a71260379583343b8ab2c20812248e1d"
  },
  {
    "url": "assets/js/19.606178c8.js",
    "revision": "51bd30380c80e03c5a7c588edf27879e"
  },
  {
    "url": "assets/js/2.6ec4a6dc.js",
    "revision": "ae61696b20da9e7d23d85c271d392ed4"
  },
  {
    "url": "assets/js/20.90dfecd8.js",
    "revision": "655a60395900f44d13ef6b4d6b2017f4"
  },
  {
    "url": "assets/js/21.f428b6b6.js",
    "revision": "404bf733ee3b0db24d4d62b8317e127e"
  },
  {
    "url": "assets/js/22.6dae7f63.js",
    "revision": "deb9d45cbecc22d22f6d4ae2184962a1"
  },
  {
    "url": "assets/js/23.745d1716.js",
    "revision": "b03044996f3e119d6e5be910c938b59f"
  },
  {
    "url": "assets/js/24.ac282214.js",
    "revision": "236b625e7b4883dd93a8eb937e147ee5"
  },
  {
    "url": "assets/js/25.945087be.js",
    "revision": "c44dbc6be5fa8e53e630a2788faa2199"
  },
  {
    "url": "assets/js/26.ac1e5149.js",
    "revision": "e35c67fc8222f4c36821c2baa7418bd9"
  },
  {
    "url": "assets/js/27.8a3db7fe.js",
    "revision": "a140276ec1a7ff46f361c82c3e999560"
  },
  {
    "url": "assets/js/28.759d12f3.js",
    "revision": "40714a1b558e90010f3905a7b879fb1d"
  },
  {
    "url": "assets/js/3.a7581b10.js",
    "revision": "dc1c037a661484afe12f83a3d157f295"
  },
  {
    "url": "assets/js/4.b88c0c4c.js",
    "revision": "19ee467510d3ea12800b7d5948c8f4d2"
  },
  {
    "url": "assets/js/5.0532f907.js",
    "revision": "250087888bb13dc8a58b9bcb2b3bf53a"
  },
  {
    "url": "assets/js/6.39edddee.js",
    "revision": "5b97f6aa16b8c25867b048ef8daa2bbc"
  },
  {
    "url": "assets/js/7.e18a44bc.js",
    "revision": "dcd97e22600ec483b4287311b5f6a2f8"
  },
  {
    "url": "assets/js/8.f6308a6d.js",
    "revision": "6e362eb857f76945e866f059688fe619"
  },
  {
    "url": "assets/js/9.cfb6f887.js",
    "revision": "18d6be7a20e9cfe9884f754619db0a67"
  },
  {
    "url": "assets/js/app.6ddb7372.js",
    "revision": "8a411ffe0efd74a81d1b561f01463703"
  },
  {
    "url": "bandwidth.html",
    "revision": "642ae71abd729c52132fa191e346ede2"
  },
  {
    "url": "check.html",
    "revision": "a4d1e89f1053f74610d6e2cf84e118ce"
  },
  {
    "url": "contacts.html",
    "revision": "7435f55d64990a8efb7c718d26702101"
  },
  {
    "url": "economy.html",
    "revision": "2e71d75a6759bfe8af2803d5bb549771"
  },
  {
    "url": "escrow.html",
    "revision": "a67446829cdca24468456cbdb49b05b2"
  },
  {
    "url": "glossary.html",
    "revision": "4611a891ebb03ccfd060e630e9b42998"
  },
  {
    "url": "icons/android-launchericon-144-144.png",
    "revision": "3d71d797d63fce8d2fc4593f20474578"
  },
  {
    "url": "icons/android-launchericon-192-192.png",
    "revision": "a187c3cb7d2850d8d2ad309383069a12"
  },
  {
    "url": "icons/android-launchericon-512-512.png",
    "revision": "2f237735be36c0a65016355344898b93"
  },
  {
    "url": "icons/ios-appicon-152-152.png",
    "revision": "7ab21321f466b31ce7dd4cae70de547e"
  },
  {
    "url": "index.html",
    "revision": "aaafc8c699e16e19f8d5b611c46de267"
  },
  {
    "url": "logo.png",
    "revision": "6c652b9174dcf144ea60fe510cb6872f"
  },
  {
    "url": "ru/accounts.html",
    "revision": "85a8a6b4db89afa4dd1b908f8b6a8a73"
  },
  {
    "url": "ru/bandwidth.html",
    "revision": "2491337a640801f146eb7ec478dd772d"
  },
  {
    "url": "ru/check.html",
    "revision": "8a43a3a1fad4208f17e509339e13cda0"
  },
  {
    "url": "ru/contacts.html",
    "revision": "20bcd0c0c3687e3fa53dad97ce8688ea"
  },
  {
    "url": "ru/economy.html",
    "revision": "9f31f3528291aa2c9412cb1d119a6238"
  },
  {
    "url": "ru/escrow.html",
    "revision": "eb9216ea8aa1bec674ac72a5f54e9f34"
  },
  {
    "url": "ru/glossary.html",
    "revision": "e8d61b5a06dce44a5ec6f49a6c235c1e"
  },
  {
    "url": "ru/index.html",
    "revision": "70753806f5082ce7747202ce81a142c6"
  },
  {
    "url": "ru/subscriptions.html",
    "revision": "010df5e6b8b3f04a3a3072f1a7e3e5bb"
  },
  {
    "url": "ru/witnesses.html",
    "revision": "52e25073a9f2610ece93ebe97314e9b6"
  },
  {
    "url": "subscriptions.html",
    "revision": "1f14a9d019917eb830928ac0e9806d6c"
  },
  {
    "url": "witnesses.html",
    "revision": "9eb3fc00211bf77f6012de7e11ced43c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
