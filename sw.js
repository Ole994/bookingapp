if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(r.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@firebase-CvUDpUTK.js",revision:null},{url:"assets/@remix-run-D3bQaVdt.js",revision:null},{url:"assets/Administration-BLhmNRhT.js",revision:null},{url:"assets/Booking-bEmXsT9j.js",revision:null},{url:"assets/Calendar-u-724qxG.js",revision:null},{url:"assets/Confirmation-CYLL2YUR.js",revision:null},{url:"assets/Dashboard-u-724qxG.js",revision:null},{url:"assets/DeleteAccount-CELvBu32.js",revision:null},{url:"assets/Error-BlwNqqXV.css",revision:null},{url:"assets/Error-CBJqZen4.js",revision:null},{url:"assets/firebase-D2mvULzg.js",revision:null},{url:"assets/Home-CMkVfNjq.js",revision:null},{url:"assets/idb-BXWtuYvb.js",revision:null},{url:"assets/index-B3cqC5ly.js",revision:null},{url:"assets/index-BwDbzO97.css",revision:null},{url:"assets/Login-51xzst4u.js",revision:null},{url:"assets/Login-BEzwh4Ha.css",revision:null},{url:"assets/Logout-C4Jqdr6C.js",revision:null},{url:"assets/Profile-CcllC-pU.js",revision:null},{url:"assets/prop-types-BiVUseAU.js",revision:null},{url:"assets/property-expr-DEi1ZLzV.js",revision:null},{url:"assets/react-B1wZPQ-K.js",revision:null},{url:"assets/react-dom-DmBrwDFL.js",revision:null},{url:"assets/react-router-CQggbiSl.js",revision:null},{url:"assets/react-router-dom-Ds01oWgm.js",revision:null},{url:"assets/scheduler-CzFDRTuY.js",revision:null},{url:"assets/SignUp-DQngvdAW.css",revision:null},{url:"assets/SignUp-N_Jd3swn.js",revision:null},{url:"assets/tiny-case-BJ7jYKNY.js",revision:null},{url:"assets/toposort-CMgDFqWq.js",revision:null},{url:"assets/tslib-BGVaTf34.js",revision:null},{url:"assets/yup-D0TjtoPv.js",revision:null},{url:"index.html",revision:"d4c8584415aae46456ea7cb32b98dc98"},{url:"registerSW.js",revision:"85b3cc8363c9999404ae9e934d233f3c"},{url:"manifest.webmanifest",revision:"0d5fb0deccb8b3f52f683baef520a3c3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
