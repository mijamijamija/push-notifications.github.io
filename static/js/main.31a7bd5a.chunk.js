(this.webpackJsonppushnotifications=this.webpackJsonppushnotifications||[]).push([[0],{14:function(n,e,t){"use strict";t.r(e);t(6);var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var r=t(2),c=t.n(r),a=t(4),s=(t(8),t(1)),u=t.n(s),l=t.p+"static/media/logo.103b5fa1.svg",f=t(0),d=function(){var n=Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.Notification.requestPermission();case 2:if("granted"===n.sent){n.next=5;break}throw new Error("Permission not granted for Notification");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(a.a)(c.a.mark((function n(e,t){var o,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.serviceWorker.getRegistration("".concat("/push-notifications.github.io","/service-worker.js"));case 2:o=n.sent,i={body:t},null===o||void 0===o||o.showNotification(e,i),console.log("pokazalem");case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();var p=function(){return Object(s.useEffect)((function(){d().then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}))}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(f.jsxs)("p",{children:["Edit ",Object(f.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(f.jsx)("button",{onClick:function(){return h("title","body")},children:"Click button"})]})})},g=t(5),v=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(e){var t=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),o(n),i(n),r(n),c(n)}))};t.n(g).a.render(Object(f.jsx)(u.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/push-notifications.github.io",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/push-notifications.github.io","/service-worker.js");o?i(e,n):(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):i(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})))}))}}(),v()},6:function(n,e,t){},8:function(n,e,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.31a7bd5a.chunk.js.map