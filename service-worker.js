"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/BFB-2-test/index.html","f74df401e16d38137fd302009d44f820"],["/BFB-2-test/static/css/main.5c74a91c.css","0088424121e8b47a7ddea044f837ce60"],["/BFB-2-test/static/js/main.c7acb645.js","57736e1f024ba66c09334d0dc12dc52b"],["/BFB-2-test/static/media/Avocado_Vector_SVG.c56da601.svg","c56da60199a4495125469f9554cd63eb"],["/BFB-2-test/static/media/Calendula_Vector_SVG.cb3d9568.svg","cb3d956834f1126e38f96ae68251d423"],["/BFB-2-test/static/media/Carrot seed_Vector_SVG.986a4953.svg","986a49537757a71f264a20499ea0d963"],["/BFB-2-test/static/media/Chamomile_Vector_SVG.4ec44c68.svg","4ec44c68ff45092cc3773d33f77c09fb"],["/BFB-2-test/static/media/Chickweed_Vector_SVG.6589bbf5.svg","6589bbf50217af8eaf95c93d5c79adab"],["/BFB-2-test/static/media/Cinnamon_Vector_SVG.f5c18378.svg","f5c183780b6d990b66c33252d79ceb00"],["/BFB-2-test/static/media/Cocoa_Vector_SVG.74bb20c7.svg","74bb20c74cf8fbc7b82d99e87bb82822"],["/BFB-2-test/static/media/Dandelion_Vector_SVG.ecfb82e7.svg","ecfb82e78a6674ab6e74c90ef2808517"],["/BFB-2-test/static/media/Eucalyptus_Vector_SVG.38fd3e8e.svg","38fd3e8e3185255697e7b80a842de285"],["/BFB-2-test/static/media/Frankincense_Vector_SVG.9086e1ee.svg","9086e1ee8891f2aac72092abde48d9af"],["/BFB-2-test/static/media/Grapefruit_Vector_SVG.e2c907cb.svg","e2c907cb461302aaa4bd2f6a5451eb07"],["/BFB-2-test/static/media/Jojoba_Vector_SVG.f8528485.svg","f852848501445b599d549009b84093e9"],["/BFB-2-test/static/media/Kokum_Vector_SVG.906be4e0.svg","906be4e0654d2a75bb0421e5aec09fac"],["/BFB-2-test/static/media/Lavender_Vector_SVG.a1beb642.svg","a1beb642d3a7f4dd5cbf490900a34f62"],["/BFB-2-test/static/media/Lemon_Vector_SVG.77b147dd.svg","77b147dd1734e3ed7727ed039c875861"],["/BFB-2-test/static/media/Lemongrass_Vector_SVG.755a22a0.svg","755a22a073898da17a7cb979161b19eb"],["/BFB-2-test/static/media/Lime_Vector_SVG.28f033b4.svg","28f033b493f80fa67a384bd03a22defc"],["/BFB-2-test/static/media/Mango_Vector_SVG.75c82ac4.svg","75c82ac4e703d97cdec26d9b27684cf5"],["/BFB-2-test/static/media/Marjoram_Vector_SVG.252b6033.svg","252b6033de8241d8e4ce3c66949f6813"],["/BFB-2-test/static/media/Myrrh_Vector_SVG.d189e2dc.svg","d189e2dc109cc44ae4d1eb680a794a58"],["/BFB-2-test/static/media/None_Vector_SVG.8af11f6e.svg","8af11f6e08b5a70a6f66afa2879b3279"],["/BFB-2-test/static/media/Olive_Vector_SVG.71d1dbe1.svg","71d1dbe17813239c307903bd53712c0e"],["/BFB-2-test/static/media/Orange_Vector_SVG.ac53a97a.svg","ac53a97aa83370944cff78ab9d9c0a6e"],["/BFB-2-test/static/media/Peppermint_Vector_SVG.f9ee9583.svg","f9ee9583670cf7a28ad90cc42a1cdae8"],["/BFB-2-test/static/media/Raspberry Seed_Vector_SVG.0460c3bb.svg","0460c3bb607113fe4ef80e59f470285f"],["/BFB-2-test/static/media/Rose_Vector_SVG.ab548c3a.svg","ab548c3ab65076829b980def6b1df0d7"],["/BFB-2-test/static/media/Sea buckthorn_Vector_SVG.f8833aee.svg","f8833aee4128012d832c44825b897558"],["/BFB-2-test/static/media/Shea_Vector_SVG.d7310957.svg","d731095789f23de3294b9ce58769dbaf"],["/BFB-2-test/static/media/Spearmint_Vector_SVG.365c1d99.svg","365c1d9961b81c7d43efd35a89189d19"],["/BFB-2-test/static/media/Unscented_Vector_SVG.8af11f6e.svg","8af11f6e08b5a70a6f66afa2879b3279"],["/BFB-2-test/static/media/Valerian_Vector_SVG.327e59db.svg","327e59db8a3ac69dbce5a1d083668432"],["/BFB-2-test/static/media/Vanilla_Vector_SVG.d9a98df5.svg","d9a98df5aa60df13e10c7a029d9d1888"],["/BFB-2-test/static/media/Vetiver_Vector_SVG.71e5515e.svg","71e5515e447b639e148f7fa2aabe0741"],["/BFB-2-test/static/media/Wintergreen_Vector_SVG.1bde663e.svg","1bde663e1249bdeaa7a412440aec144e"],["/BFB-2-test/static/media/Ylang ylang_Vector_SVG.733af850.svg","733af850ef5bbe2c687213ba83235158"],["/BFB-2-test/static/media/bathbomb.8365f0cc.jpg","8365f0ccd8bb16da5ee09ac7dcc7dcd9"],["/BFB-2-test/static/media/booster.db07a7c0.png","db07a7c0cb44b2e7dac24821143f1f8c"],["/BFB-2-test/static/media/boosters.cdc054cc.svg","cdc054ccc0b8b6f2215b1d161ae87d64"],["/BFB-2-test/static/media/butters.17a03aac.svg","17a03aac47cc757dffa79988a36a90db"],["/BFB-2-test/static/media/butters.41c525fc.png","41c525fc322b75a1caba716df60059b6"],["/BFB-2-test/static/media/focusArea.d47edd0c.png","d47edd0cc0ea20e87174f243f2ec9159"],["/BFB-2-test/static/media/focusArea.db11ba43.svg","db11ba43969e8fdc1c85e0ae7947d112"],["/BFB-2-test/static/media/logo.d0fdea0d.svg","d0fdea0de64e197dab2431b2cfa8f803"],["/BFB-2-test/static/media/oils.13b8ca51.svg","13b8ca51cf4e8c65134114701f99baaa"],["/BFB-2-test/static/media/oils.e2624abe.png","e2624abe4499548aea8245db558dc632"],["/BFB-2-test/static/media/product.1795d00e.svg","1795d00e145d5f4d126ee1aa77dab967"],["/BFB-2-test/static/media/product.84569e19.png","84569e1932b0e9802ddd3e65b8c17bba"],["/BFB-2-test/static/media/recipient.b187a690.png","b187a690598295bc0fd6f97d1294e029"],["/BFB-2-test/static/media/recipient.e786b296.svg","e786b29691f54f93db7c64169e15f34d"],["/BFB-2-test/static/media/scents.6727bf3c.png","6727bf3cca91d7dd3e5583478923afc0"],["/BFB-2-test/static/media/scents.c4350650.svg","c435065083c95099ddd61daea3a2b494"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var s="/BFB-2-test/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});