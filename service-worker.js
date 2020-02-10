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
    "revision": "225f41979d220a89d55fc7337647224e"
  },
  {
    "url": "404/index.html",
    "revision": "225f41979d220a89d55fc7337647224e"
  },
  {
    "url": "assets/css/0.styles.ec2040d0.css",
    "revision": "64f6af78febc4b6e6389e16eebb463bf"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "7db3d0c9bc2d5999219df7aecc63bbb9"
  },
  {
    "url": "assets/data/index.json",
    "revision": "292c49d3f7d1a3a3c6b62fbf36c66676"
  },
  {
    "url": "assets/data/q1059211/index.json",
    "revision": "f1b636066be1edb46de3d1a81cafb0cc"
  },
  {
    "url": "assets/data/q1142058/index.json",
    "revision": "22feba4d20c45017bfecd4bd555e0092"
  },
  {
    "url": "assets/data/q11935346/index.json",
    "revision": "fd1a6f35fca69309e1cd96914c832d30"
  },
  {
    "url": "assets/data/q1217213/index.json",
    "revision": "833386f600c337ebc39f487ac503935d"
  },
  {
    "url": "assets/data/q12418/index.json",
    "revision": "865190b98bc48670ecd0a484c3958b5c"
  },
  {
    "url": "assets/data/q1267893/index.json",
    "revision": "7ac9b43d2f25fdca74a07da7cfcfe9fa"
  },
  {
    "url": "assets/data/q12734910/index.json",
    "revision": "32060c98fb3ec329fbbbe20689f7f38b"
  },
  {
    "url": "assets/data/q128910/index.json",
    "revision": "575a34fbfba45b912962670d8dc84a90"
  },
  {
    "url": "assets/data/q1327676/index.json",
    "revision": "8a5bd33d2cb45380ecfe5907ce1d5399"
  },
  {
    "url": "assets/data/q1638622/index.json",
    "revision": "34751e48705ede1fe0e1a7b5678d249f"
  },
  {
    "url": "assets/data/q1892745/index.json",
    "revision": "bcf8a05a70215bba76617a132354285a"
  },
  {
    "url": "assets/data/q20174114/index.json",
    "revision": "d2ad59e4cb1d4c31c95f54b6b01d87e4"
  },
  {
    "url": "assets/data/q2045726/index.json",
    "revision": "5516bcf1c43a00e6e88744992ab730e3"
  },
  {
    "url": "assets/data/q2072801/index.json",
    "revision": "0e6bf3c54330b296a6e2183aa1e71bda"
  },
  {
    "url": "assets/data/q2338404/index.json",
    "revision": "3ef6334f8eb96dd90bdd998be162aa58"
  },
  {
    "url": "assets/data/q2397593/index.json",
    "revision": "b208a51447f5c800ab2e28ca44431070"
  },
  {
    "url": "assets/data/q27970282/index.json",
    "revision": "7fb9b5afabf1790c2030e6f602c6b0bf"
  },
  {
    "url": "assets/data/q3618186/index.json",
    "revision": "a68b6052ca32f4bdc0af0e3d881f3941"
  },
  {
    "url": "assets/data/q3800774/index.json",
    "revision": "4099c834716cd54416f12b5e1501c480"
  },
  {
    "url": "assets/data/q3937378/index.json",
    "revision": "e8796fabefbd839dff5bf1d59c1025a0"
  },
  {
    "url": "assets/data/q3985169/index.json",
    "revision": "2303a6eaf9bdf05a66633881f2c8887f"
  },
  {
    "url": "assets/data/q4009972/index.json",
    "revision": "0eb08db00ae8ce3205e83c6689716704"
  },
  {
    "url": "assets/data/q4390923/index.json",
    "revision": "cac224276bbb012ca14c40b3766a1c17"
  },
  {
    "url": "assets/data/q474338/index.json",
    "revision": "9706dd2e72c26500f09e078f981eb87f"
  },
  {
    "url": "assets/data/q5237905/index.json",
    "revision": "bd187ff3c062eab7590df6ca72b23950"
  },
  {
    "url": "assets/data/q56280397/index.json",
    "revision": "1855e88666b24979ff5b5ff00a4d14a3"
  },
  {
    "url": "assets/data/q563727/index.json",
    "revision": "6639789ae7dca0e4bbc279e36e717339"
  },
  {
    "url": "assets/data/q656434/index.json",
    "revision": "867a520d2e7834cc9c62b584531c2819"
  },
  {
    "url": "assets/data/q6696013/index.json",
    "revision": "7bd4a90bd178d213b79f0d48748bf1c3"
  },
  {
    "url": "assets/data/q698015/index.json",
    "revision": "752309e47b47fc334eed7960f98fb1c9"
  },
  {
    "url": "assets/data/q783215/index.json",
    "revision": "df9e715c310ca657b8c3bfe76b072768"
  },
  {
    "url": "assets/data/q797902/index.json",
    "revision": "16192c3cbc7bd39e2f98fdd993406d72"
  },
  {
    "url": "assets/data/q798034/index.json",
    "revision": "746d2e588f460bbab42be831cb9730e1"
  },
  {
    "url": "assets/data/q972196/index.json",
    "revision": "b77a87a310a8dbcf9fe809c024c547cc"
  },
  {
    "url": "assets/js/app.ee0449db.js",
    "revision": "179b46163a12bdde61b989e41e45d182"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.2c8e7e6a.js",
    "revision": "bca3f9b66b03ee035f95b15440b269bb"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.ff6714ee.js",
    "revision": "6c68c015a4f7782b8fa0536e26815cee"
  },
  {
    "url": "assets/js/page--src--templates--record-vue.8afb8683.js",
    "revision": "948d0aa99f1aaeaaace65765c0e05f9f"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e3c420ed3359221ac22eedbc5cc1630"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "2f85c47cd65b86c6507ff18b2b8d5e98"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "fa38503a9bbe98901bd244b830e4d6c5"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "6b22178d5429b8ac29e5ced482659f49"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "540320e5aa9702b00a08f9e00d7a921e"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "a8710ab24cde9ded477cd08f602f7349"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e2074d4885eacfb8d44276b74beac92"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "94b22eed0bfc12ff09d62a86659c4fab"
  },
  {
    "url": "assets/static/website-icon.png",
    "revision": "505e281bcd369ecc424748ac6e8b6369"
  },
  {
    "url": "index.html",
    "revision": "2533a2a18204bfe0087f6917cfcf631c"
  },
  {
    "url": "manifest.json",
    "revision": "5799d92cc089e36529878003e677b575"
  },
  {
    "url": "q1059211/index.html",
    "revision": "43dc7db71c91f01e78bf2105900231d1"
  },
  {
    "url": "q1142058/index.html",
    "revision": "87364fc4e211b5f0c37f0e71f54d3e70"
  },
  {
    "url": "q11935346/index.html",
    "revision": "2e6a73cf4fee2f3b5a971dd5139e6587"
  },
  {
    "url": "q1217213/index.html",
    "revision": "963ee064254683056f56ab09ce595eba"
  },
  {
    "url": "q12418/index.html",
    "revision": "325b66cb622def60fa85cbad2332f52c"
  },
  {
    "url": "q1267893/index.html",
    "revision": "efe46afe96a0be165f797a80a9dfec9f"
  },
  {
    "url": "q12734910/index.html",
    "revision": "a71733bf5f1be445bfe0d16cb83940ef"
  },
  {
    "url": "q128910/index.html",
    "revision": "9f99326a1eb284bf2811368a85af9bbc"
  },
  {
    "url": "q1327676/index.html",
    "revision": "aa8901305a66278908c858720b0a328c"
  },
  {
    "url": "q1638622/index.html",
    "revision": "39d37ba9ec8cbee9d694d98ac96ff9e8"
  },
  {
    "url": "q1892745/index.html",
    "revision": "b854e00d013681e5fe2f541169137683"
  },
  {
    "url": "q20174114/index.html",
    "revision": "b3d591d3d01826a9caa1d7ca6b7c6d79"
  },
  {
    "url": "q2045726/index.html",
    "revision": "4cb59d4ab38c1316825a1946ee129629"
  },
  {
    "url": "q2072801/index.html",
    "revision": "26703ea73c8dfb0c0964473cda404534"
  },
  {
    "url": "q2338404/index.html",
    "revision": "b0079cf0b0ae150283a1e69f70a42ef4"
  },
  {
    "url": "q2397593/index.html",
    "revision": "e35af06f2ff76872c32a6ea3feaf1f15"
  },
  {
    "url": "q27970282/index.html",
    "revision": "e7c157632eece49bad55e21c8558663c"
  },
  {
    "url": "q3618186/index.html",
    "revision": "a46017c448613b1333d3430926d53ebf"
  },
  {
    "url": "q3800774/index.html",
    "revision": "8df065261891f290ebb62888a89c8522"
  },
  {
    "url": "q3937378/index.html",
    "revision": "8e916595c46c47ceac4f48ac86f4bd01"
  },
  {
    "url": "q3985169/index.html",
    "revision": "1983d40c4e261aabc4ba63a411fd330d"
  },
  {
    "url": "q4009972/index.html",
    "revision": "60292eefdd7cf0e5bf7dcefa55524859"
  },
  {
    "url": "q4390923/index.html",
    "revision": "1dc0849ef5ae4bcfff8698af849fbc87"
  },
  {
    "url": "q474338/index.html",
    "revision": "eff87ce7e0e64c10ada1624c20a7654b"
  },
  {
    "url": "q5237905/index.html",
    "revision": "15508a1678bd309f712b5381efb83234"
  },
  {
    "url": "q56280397/index.html",
    "revision": "639b55166593e498f40695fd1ef18251"
  },
  {
    "url": "q563727/index.html",
    "revision": "18a4a7d71465ae007d3f6a4bc123894c"
  },
  {
    "url": "q656434/index.html",
    "revision": "68de8e26d6cd712dbec9dce4c7ee38cf"
  },
  {
    "url": "q6696013/index.html",
    "revision": "7875dd8dec42bbafc6dd65f3382f7b53"
  },
  {
    "url": "q698015/index.html",
    "revision": "2ea537676cf58170985bb592703e4242"
  },
  {
    "url": "q783215/index.html",
    "revision": "c63399b7e34dc303cb823a86a51c4785"
  },
  {
    "url": "q797902/index.html",
    "revision": "208ac764e93a24762057242a98ce7c11"
  },
  {
    "url": "q798034/index.html",
    "revision": "474c016b60a599ee167eb2d57110d26c"
  },
  {
    "url": "q972196/index.html",
    "revision": "1e1caa36a8b914012c3b78bdd6042d5c"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "q1059211",
    "revision": "5d99b2d44a4de1969ffff94125567cf5"
  },
  {
    "url": "q1217213",
    "revision": "328b5cb2076ff5078af91e1b507bd988"
  },
  {
    "url": "q1267893",
    "revision": "6e93c670a34709ac579d8b2219968f71"
  },
  {
    "url": "q20174114",
    "revision": "b7fba519e2a0d960b43bcb9cee2a60a2"
  },
  {
    "url": "q3618186",
    "revision": "d3680962cc5a0a3a27f24a6e0568492f"
  },
  {
    "url": "q698015",
    "revision": "0ee232afa94211ea95766d6e12ce86de"
  },
  {
    "url": "q1638622",
    "revision": "9eac4e83cf0cbfb8505cafc3bab1483a"
  },
  {
    "url": "q1142058",
    "revision": "4c50c91dc581d5df06e87f98ef0a6b27"
  },
  {
    "url": "q972196",
    "revision": "587cb71bdfd0bd90fca4c0842d985cb5"
  },
  {
    "url": "q11935346",
    "revision": "cd69bb8cf3cba2981df31bb2fd921b32"
  },
  {
    "url": "q2338404",
    "revision": "b201cbb95f8aa739ee562dce31b5cd55"
  },
  {
    "url": "q5237905",
    "revision": "1259a7960f42aee0769dd4e70af1638f"
  },
  {
    "url": "q128910",
    "revision": "d63cdd3db35eae7890c24435d4a2bbd0"
  },
  {
    "url": "q1327676",
    "revision": "7c226ea1aea779f246c740161461807e"
  },
  {
    "url": "q1892745",
    "revision": "9f049e3e17f79d56cd0e7c60743ac854"
  },
  {
    "url": "q474338",
    "revision": "c7ce3b4eac6acb1622c972b26b96596f"
  },
  {
    "url": "q656434",
    "revision": "194e099b257765ea13fa7c6dc59a504b"
  },
  {
    "url": "q3985169",
    "revision": "2a01debba58fcae88aa675c37c2dcc76"
  },
  {
    "url": "q4009972",
    "revision": "cb8d455908504cffa0fae3754d237dc8"
  },
  {
    "url": "q2072801",
    "revision": "3547073f75c2d2b18b00347bbc4970cf"
  },
  {
    "url": "q3937378",
    "revision": "d934beb4c9b92eaba5dc102da61d32b5"
  },
  {
    "url": "q3800774",
    "revision": "dc4aafcb34a78d049cc3852041d5dbc3"
  },
  {
    "url": "q27970282",
    "revision": "1cf7f7bd18abb76bd53b3c8167012116"
  },
  {
    "url": "q4390923",
    "revision": "654946132f84cf2af28804fc8887e70d"
  },
  {
    "url": "q12418",
    "revision": "9acdeb79612716f57e4590d2447c4911"
  },
  {
    "url": "q563727",
    "revision": "d9097dc764b342fbc3560e7f065c03c5"
  },
  {
    "url": "q2397593",
    "revision": "54082bddaf866a72c6cb8ff4147311ef"
  },
  {
    "url": "q2045726",
    "revision": "9109c5e405e853dd80e2b931e967be69"
  },
  {
    "url": "q6696013",
    "revision": "c33c2b7a0d895a487085988f5e2b5709"
  },
  {
    "url": "q797902",
    "revision": "0721b2ce19b9692c88233b780fd48130"
  },
  {
    "url": "q56280397",
    "revision": "fc176f87f8d09fd845b116178569db11"
  },
  {
    "url": "q783215",
    "revision": "8bdf6360f8ab61de495885895b6a2ff0"
  },
  {
    "url": "q798034",
    "revision": "2f4b56199ee6b174a8ce37d09e09116d"
  },
  {
    "url": "q12734910",
    "revision": "4164d3b82965206566a26dce5839f7dc"
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