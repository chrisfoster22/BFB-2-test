"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/BFB-2-test/index.html","1a1ffe9db6c918b9079bece6d00c151e"],["/BFB-2-test/static/css/main.7b9b0cff.css","38d68a26de92b1ec09bfef302043e3e8"],["/BFB-2-test/static/js/main.869071ea.js","5470c08b35405249a396e5c1c4eb5e40"],["/BFB-2-test/static/media/bathbomb.601510ee.jpg","601510eeb02b9a807f633d67c110c14f"],["/BFB-2-test/static/media/booster.db07a7c0.png","db07a7c0cb44b2e7dac24821143f1f8c"],["/BFB-2-test/static/media/boosters.cdc054cc.svg","cdc054ccc0b8b6f2215b1d161ae87d64"],["/BFB-2-test/static/media/butters.17a03aac.svg","17a03aac47cc757dffa79988a36a90db"],["/BFB-2-test/static/media/butters.41c525fc.png","41c525fc322b75a1caba716df60059b6"],["/BFB-2-test/static/media/focusArea.d47edd0c.png","d47edd0cc0ea20e87174f243f2ec9159"],["/BFB-2-test/static/media/focusArea.db11ba43.svg","db11ba43969e8fdc1c85e0ae7947d112"],["/BFB-2-test/static/media/logo.d0fdea0d.svg","d0fdea0de64e197dab2431b2cfa8f803"],["/BFB-2-test/static/media/oils.13b8ca51.svg","13b8ca51cf4e8c65134114701f99baaa"],["/BFB-2-test/static/media/oils.e2624abe.png","e2624abe4499548aea8245db558dc632"],["/BFB-2-test/static/media/product.1795d00e.svg","1795d00e145d5f4d126ee1aa77dab967"],["/BFB-2-test/static/media/product.84569e19.png","84569e1932b0e9802ddd3e65b8c17bba"],["/BFB-2-test/static/media/recipient.b187a690.png","b187a690598295bc0fd6f97d1294e029"],["/BFB-2-test/static/media/recipient.e786b296.svg","e786b29691f54f93db7c64169e15f34d"],["/BFB-2-test/static/media/scents.6727bf3c.png","6727bf3cca91d7dd3e5583478923afc0"],["/BFB-2-test/static/media/scents.c4350650.svg","c435065083c95099ddd61daea3a2b494"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var s="/BFB-2-test/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});