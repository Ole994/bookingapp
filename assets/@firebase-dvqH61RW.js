import{o as ia}from"./idb-BXWtuYvb.js";var to={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},bu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},oa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,g=o>>2,w=(o&3)<<4|u>>4;let S=(u&15)<<2|f>>6,C=f&63;h||(C=64,a||(S=64)),r.push(e[g],e[w],e[S],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(sa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):bu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||w==null)throw new Pu;const S=o<<2|u>>4;if(r.push(S),f!==64){const C=u<<4&240|f>>2;if(r.push(C),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=sa(n);return oa.encodeByteArray(t,!0)},Yn=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return oa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=()=>ku().__FIREBASE_DEFAULTS__,Ou=()=>{if(typeof process>"u"||typeof to>"u")return;const n=to.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},lr=()=>{try{return Nu()||Ou()||xu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var t,e;return(e=(t=lr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Lu=n=>{const t=Mu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},aa=()=>{var n;return(n=lr())===null||n===void 0?void 0:n.config},bp=n=>{var t;return(t=lr())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yn(JSON.stringify(e)),Yn(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ci())}function Bu(){var n;const t=(n=lr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kp(){const n=Ci();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ju(){return!Bu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ca(){try{return typeof indexedDB=="object"}catch{return!1}}function ua(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function $u(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="FirebaseError";class ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=zu,Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Gu(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new ne(i,u,r)}}function Gu(n,t){return n.replace(Ku,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ku=/\{\$([^}]+)}/g;function Np(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(eo(o)&&eo(a)){if(!Xn(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function eo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xp(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Mp(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Lp(n,t){const e=new Hu(n,t);return e.subscribe.bind(e)}class Hu{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Wu(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Zr),i.error===void 0&&(i.error=Zr),i.complete===void 0&&(i.complete=Zr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Zr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=1e3,Yu=2,Xu=4*60*60*1e3,Ju=.5;function no(n,t=Qu,e=Yu){const r=t*Math.pow(e,n),i=Math.round(Ju*r*(Math.random()-.5)*2);return Math.min(Xu,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(el(t))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ae){return this.instances.has(t)}getOptions(t=ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ae){return this.component?this.component.multipleInstances?t:ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tl(n){return n===ae?void 0:n}function el(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Zu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const rl={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},il=q.INFO,sl={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},ol=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=sl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bi{constructor(t){this.name=t,this._logLevel=il,this._logHandler=ol,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(cl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function cl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ci="@firebase/app",ro="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new bi("@firebase/app"),ul="@firebase/app-compat",ll="@firebase/analytics-compat",hl="@firebase/analytics",dl="@firebase/app-check-compat",fl="@firebase/app-check",ml="@firebase/auth",pl="@firebase/auth-compat",gl="@firebase/database",_l="@firebase/data-connect",yl="@firebase/database-compat",El="@firebase/functions",vl="@firebase/functions-compat",Tl="@firebase/installations",Il="@firebase/installations-compat",wl="@firebase/messaging",Al="@firebase/messaging-compat",Rl="@firebase/performance",Sl="@firebase/performance-compat",Cl="@firebase/remote-config",bl="@firebase/remote-config-compat",Pl="@firebase/storage",Vl="@firebase/storage-compat",Dl="@firebase/firestore",kl="@firebase/vertexai",Nl="@firebase/firestore-compat",Ol="firebase",xl="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]",Ml={[ci]:"fire-core",[ul]:"fire-core-compat",[hl]:"fire-analytics",[ll]:"fire-analytics-compat",[fl]:"fire-app-check",[dl]:"fire-app-check-compat",[ml]:"fire-auth",[pl]:"fire-auth-compat",[gl]:"fire-rtdb",[_l]:"fire-data-connect",[yl]:"fire-rtdb-compat",[El]:"fire-fn",[vl]:"fire-fn-compat",[Tl]:"fire-iid",[Il]:"fire-iid-compat",[wl]:"fire-fcm",[Al]:"fire-fcm-compat",[Rl]:"fire-perf",[Sl]:"fire-perf-compat",[Cl]:"fire-rc",[bl]:"fire-rc-compat",[Pl]:"fire-gcs",[Vl]:"fire-gcs-compat",[Dl]:"fire-fst",[Nl]:"fire-fst-compat",[kl]:"fire-vertex","fire-js":"fire-js",[Ol]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map,Ll=new Map,li=new Map;function io(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Yt(n){const t=n.name;if(li.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;li.set(t,n);for(const e of Jn.values())io(e,n);for(const e of Ll.values())io(e,n);return!0}function gn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Fp(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new hr("app","Firebase",Fl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=xl;function ql(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(e||(e=aa()),!e)throw Ht.create("no-options");const o=Jn.get(i);if(o){if(Xn(e,o.options)&&Xn(r,o.config))return o;throw Ht.create("duplicate-app",{appName:i})}const a=new nl(i);for(const h of li.values())a.addComponent(h);const u=new Ul(e,r,a);return Jn.set(i,u),u}function la(n=ui){const t=Jn.get(n);if(!t&&n===ui&&aa())return ql();if(!t)throw Ht.create("no-app",{appName:n});return t}function xt(n,t,e){var r;let i=(r=Ml[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(u.join(" "));return}Yt(new Ft(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="firebase-heartbeat-database",$l=1,un="firebase-heartbeat-store";let ti=null;function ha(){return ti||(ti=ia(jl,$l,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(un)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),ti}async function zl(n){try{const e=(await ha()).transaction(un),r=await e.objectStore(un).get(da(n));return await e.done,r}catch(t){if(t instanceof ne)Ut.warn(t.message);else{const e=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function so(n,t){try{const r=(await ha()).transaction(un,"readwrite");await r.objectStore(un).put(t,da(n)),await r.done}catch(e){if(e instanceof ne)Ut.warn(e.message);else{const r=Ht.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(r.message)}}}function da(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=1024,Kl=30*24*60*60*1e3;class Hl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ql(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Kl}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oo(),{heartbeatsToSend:r,unsentEntries:i}=Wl(this._heartbeatsCache.heartbeats),o=Yn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function oo(){return new Date().toISOString().substring(0,10)}function Wl(n,t=Gl){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ao(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ao(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ql{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ca()?ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ao(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n){Yt(new Ft("platform-logger",t=>new al(t),"PRIVATE")),Yt(new Ft("heartbeat",t=>new Hl(t),"PRIVATE")),xt(ci,ro,n),xt(ci,ro,"esm2017"),xt("fire-js","")}Yl("");var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var le,fa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,I){for(var p=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)p[Dt-2]=arguments[Dt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],E=v.g[2];var I=v.g[3],p=m+(I^_&(E^I))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=I+(E^m&(_^E))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(_^I&(m^_))+y[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(m^E&(I^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(I^_&(E^I))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(E^m&(_^E))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(_^I&(m^_))+y[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(m^E&(I^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(I^_&(E^I))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(E^m&(_^E))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(_^I&(m^_))+y[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(m^E&(I^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(I^_&(E^I))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(E^m&(_^E))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(_^I&(m^_))+y[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(m^E&(I^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^I&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(m^_))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(I^m))+y[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(E^I))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(m^_))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(I^m))+y[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(E^I))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(m^_))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(I^m))+y[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(E^I))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(m^_))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(I^m))+y[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(E^I))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^I)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^E)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^_)+y[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^I)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^E)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^_)+y[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^I)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^E)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^_)+y[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^I)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^E)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^_)+y[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~I))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~E))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~_))+y[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~I))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~E))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~_))+y[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~I))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~E))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~_))+y[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~I))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~E))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~_))+y[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=_;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==m||(_[E]=I,y=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return D(f(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function g(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(g(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),p=parseInt(v.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var w=h(0),S=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-D(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var m=f(Math.pow(v,6)),_=this,y="";;){var E=nt(_,m).g;_=G(_,E.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,k(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=G(this,v),O(v)?-1:k(v)?0:1};function D(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(S)}n.abs=function(){return O(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=p>>>16,I&=65535,p&=65535,_[E]=p<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(v,m){return v.add(D(m))}n.j=function(v){if(k(this)||k(v))return w;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,p=this.i(y)&65535,Dt=v.i(E)>>>16,Le=v.i(E)&65535;_[2*y+2*E]+=p*Le,K(_,2*y+2*E),_[2*y+2*E+1]+=I*Le,K(_,2*y+2*E+1),_[2*y+2*E+1]+=p*Dt,K(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Dt,K(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function K(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function W(v,m){this.g=v,this.h=m}function nt(v,m){if(k(m))throw Error("division by zero");if(k(v))return new W(w,w);if(O(v))return m=nt(D(v),m),new W(D(m.g),D(m.h));if(O(m))return m=nt(v,D(m)),new W(D(m.g),m.h);if(30<v.g.length){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=S,y=m;0>=y.l(v);)_=Vt(_),y=Vt(y);var E=st(_,1),I=st(y,1);for(y=st(y,2),_=st(_,2);!k(y);){var p=I.add(y);0>=p.l(v)&&(E=E.add(_),I=p),y=st(y,1),_=st(_,1)}return m=G(v,E.j(m)),new W(E,m)}for(E=w;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),p=I.j(m);O(p)||0<p.l(v);)_-=y,I=f(_),p=I.j(m);k(I)&&(I=S),E=E.add(I),v=G(v,p)}return new W(E,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Vt(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function st(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,E=[],I=0;I<y;I++)E[I]=0<m?v.i(I+_)>>>m|v.i(I+_+1)<<32-m:v.i(I+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,le=a}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ma,tn,pa,zn,hi,ga,_a,ya;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var l=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in l))break t;l=l[T]}s=s[s.length-1],d=l[s],c=c(d),c!=d&&c!=null&&t(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,d=!1,T={next:function(){if(!d&&l<s.length){var A=l++;return{value:c(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function f(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function g(s,c,l){return s.call.apply(s.bind,arguments)}function w(s,c,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(c,T)}}return function(){return s.apply(c,arguments)}}function S(s,c,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:w,S.apply(null,arguments)}function C(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,T,A){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return c.prototype[T].apply(d,P)}}function O(s){const c=s.length;if(0<c){const l=Array(c);for(let d=0;d<c;d++)l[d]=s[d];return l}return[]}function D(s,c){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=s.length||0,A=d.length||0;s.length=T+A;for(let P=0;P<A;P++)s[T+P]=d[P]}else s.push(d)}}class G{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function nt(s){return nt[" "](s),s}nt[" "]=function(){};var Vt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function st(s,c,l){for(const d in s)c.call(l,s[d],d,s)}function v(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function m(s){const c={};for(const l in s)c[l]=s[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)s[l]=d[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function E(s){var c=1;s=s.split(":");const l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function I(s){u.setTimeout(()=>{throw s},0)}function p(){var s=Pr;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Dt{constructor(){this.h=this.g=null}add(c,l){const d=Le.get();d.set(c,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Le=new G(()=>new Hc,s=>s.reset());class Hc{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Ue=!1,Pr=new Dt,ts=()=>{const s=u.Promise.resolve(void 0);Fe=()=>{s.then(Wc)}};var Wc=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){I(l)}var c=Le;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Ue=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var Qc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Be(s,c){if(ut.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Vt){t:{try{nt(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Yc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Be.aa.h.call(this)}}k(Be,ut);var Yc={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),Xc=0;function Jc(s,c,l,d,T){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!d,this.ha=T,this.key=++Xc,this.da=this.fa=!1}function Tn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,c,l,d,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var P=Dr(s,c,d,T);return-1<P?(c=s[P],l||(c.fa=!1)):(c=new Jc(c,this.src,A,!!d,T),c.fa=l,s.push(c)),c};function Vr(s,c){var l=c.type;if(l in s.g){var d=s.g[l],T=Array.prototype.indexOf.call(d,c,void 0),A;(A=0<=T)&&Array.prototype.splice.call(d,T,1),A&&(Tn(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Dr(s,c,l,d){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==c&&A.capture==!!l&&A.ha==d)return T}return-1}var kr="closure_lm_"+(1e6*Math.random()|0),Nr={};function es(s,c,l,d,T){if(Array.isArray(c)){for(var A=0;A<c.length;A++)es(s,c[A],l,d,T);return null}return l=is(l),s&&s[vn]?s.K(c,l,f(d)?!!d.capture:!!d,T):Zc(s,c,l,!1,d,T)}function Zc(s,c,l,d,T,A){if(!c)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,H=xr(s);if(H||(s[kr]=H=new In(s)),l=H.add(c,l,d,P,A),l.proxy)return l;if(d=tu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Qc||(T=P),T===void 0&&(T=!1),s.addEventListener(c.toString(),d,T);else if(s.attachEvent)s.attachEvent(rs(c.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function tu(){function s(l){return c.call(s.src,s.listener,l)}const c=eu;return s}function ns(s,c,l,d,T){if(Array.isArray(c))for(var A=0;A<c.length;A++)ns(s,c[A],l,d,T);else d=f(d)?!!d.capture:!!d,l=is(l),s&&s[vn]?(s=s.i,c=String(c).toString(),c in s.g&&(A=s.g[c],l=Dr(A,l,d,T),-1<l&&(Tn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[c],s.h--)))):s&&(s=xr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Dr(c,l,d,T)),(l=-1<s?c[s]:null)&&Or(l))}function Or(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[vn])Vr(c.i,s);else{var l=s.type,d=s.proxy;c.removeEventListener?c.removeEventListener(l,d,s.capture):c.detachEvent?c.detachEvent(rs(l),d):c.addListener&&c.removeListener&&c.removeListener(d),(l=xr(c))?(Vr(l,s),l.h==0&&(l.src=null,c[kr]=null)):Tn(s)}}}function rs(s){return s in Nr?Nr[s]:Nr[s]="on"+s}function eu(s,c){if(s.da)s=!0;else{c=new Be(c,this);var l=s.listener,d=s.ha||s.src;s.fa&&Or(s),s=l.call(d,c)}return s}function xr(s){return s=s[kr],s instanceof In?s:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function is(s){return typeof s=="function"?s:(s[Mr]||(s[Mr]=function(c){return s.handleEvent(c)}),s[Mr])}function lt(){jt.call(this),this.i=new In(this),this.M=this,this.F=null}k(lt,jt),lt.prototype[vn]=!0,lt.prototype.removeEventListener=function(s,c,l,d){ns(this,s,c,l,d)};function _t(s,c){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=c.type||c,typeof c=="string")c=new ut(c,s);else if(c instanceof ut)c.target=c.target||s;else{var T=c;c=new ut(d,s),y(c,T)}if(T=!0,l)for(var A=l.length-1;0<=A;A--){var P=c.g=l[A];T=wn(P,d,!0,c)&&T}if(P=c.g=s,T=wn(P,d,!0,c)&&T,T=wn(P,d,!1,c)&&T,l)for(A=0;A<l.length;A++)P=c.g=l[A],T=wn(P,d,!1,c)&&T}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],d=0;d<l.length;d++)Tn(l[d]);delete s.g[c],s.h--}}this.F=null},lt.prototype.K=function(s,c,l,d){return this.i.add(String(s),c,!1,l,d)},lt.prototype.L=function(s,c,l,d){return this.i.add(String(s),c,!0,l,d)};function wn(s,c,l,d){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,A=0;A<c.length;++A){var P=c[A];if(P&&!P.da&&P.capture==l){var H=P.listener,ot=P.ha||P.src;P.fa&&Vr(s.i,P),T=H.call(ot,d)!==!1&&T}}return T&&!d.defaultPrevented}function ss(s,c,l){if(typeof s=="function")l&&(s=S(s,l));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function os(s){s.g=ss(()=>{s.g=null,s.i&&(s.i=!1,os(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class nu extends jt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:os(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(s){jt.call(this),this.h=s,this.g={}}k(qe,jt);var as=[];function cs(s){st(s.g,function(c,l){this.g.hasOwnProperty(l)&&Or(c)},s),s.g={}}qe.prototype.N=function(){qe.aa.N.call(this),cs(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=u.JSON.stringify,ru=u.JSON.parse,iu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Fr(){}Fr.prototype.h=null;function us(s){return s.h||(s.h=s.i())}function ls(){}var je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){ut.call(this,"d")}k(Ur,ut);function Br(){ut.call(this,"c")}k(Br,ut);var re={},hs=null;function An(){return hs=hs||new lt}re.La="serverreachability";function ds(s){ut.call(this,re.La,s)}k(ds,ut);function $e(s){const c=An();_t(c,new ds(c))}re.STAT_EVENT="statevent";function fs(s,c){ut.call(this,re.STAT_EVENT,s),this.stat=c}k(fs,ut);function yt(s){const c=An();_t(c,new fs(c,s))}re.Ma="timingevent";function ms(s,c){ut.call(this,re.Ma,s),this.size=c}k(ms,ut);function ze(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function su(s,c,l,d,T,A){s.info(function(){if(s.g)if(A)for(var P="",H=A.split("&"),ot=0;ot<H.length;ot++){var $=H[ot].split("=");if(1<$.length){var ht=$[0];$=$[1];var dt=ht.split("_");P=2<=dt.length&&dt[1]=="type"?P+(ht+"="+$+"&"):P+(ht+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+c+`
`+l+`
`+P})}function ou(s,c,l,d,T,A,P){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+c+`
`+l+`
`+A+" "+P})}function ge(s,c,l,d){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+cu(s,l)+(d?" "+d:"")})}function au(s,c){s.info(function(){return"TIMEOUT: "+c})}Ge.prototype.info=function(){};function cu(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return Lr(l)}catch{return c}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qr;function Sn(){}k(Sn,Fr),Sn.prototype.g=function(){return new XMLHttpRequest},Sn.prototype.i=function(){return{}},qr=new Sn;function $t(s,c,l,d){this.j=s,this.i=c,this.l=l,this.R=d||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gs}function gs(){this.i=null,this.g="",this.h=!1}var _s={},jr={};function $r(s,c,l){s.L=1,s.v=Vn(kt(c)),s.m=l,s.P=!0,ys(s,null)}function ys(s,c){s.F=Date.now(),Cn(s),s.A=kt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),ks(l.i,"t",d),s.C=0,l=s.j.J,s.h=new gs,s.g=Ys(s.j,l?c:null,!s.m),0<s.O&&(s.M=new nu(S(s.Y,s,s.g),s.O)),c=s.U,l=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(as[0]=T.toString()),T=as);for(var A=0;A<T.length;A++){var P=es(l,T[A],d||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),$e(),su(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const c=this.M;c&&Nt(s)==3?c.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const dt=Nt(this.g);var c=this.g.Ba();const Ee=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Us(this.g)))){this.J||dt!=4||c==7||(c==8||0>=Ee?$e(3):$e(2)),zr(this);var l=this.g.Z();this.X=l;e:if(Es(this)){var d=Us(this.g);s="";var T=d.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Ke(this);var P="";break e}this.h.i=new u.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,s+=this.h.i.decode(d[c],{stream:!(A&&c==T-1)});d.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=l==200,ou(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,ot=this.g;if((H=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(H)){var $=H;break e}}$=null}if(l=$)ge(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,l);else{this.o=!1,this.s=3,yt(12),ie(this),Ke(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<P.length;)if(At=uu(this,P),At==jr){dt==4&&(this.s=4,yt(14),l=!1),ge(this.i,this.l,null,"[Incomplete Response]");break}else if(At==_s){this.s=4,yt(15),ge(this.i,this.l,P,"[Invalid Chunk]"),l=!1;break}else ge(this.i,this.l,At,null),Gr(this,At);if(Es(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||P.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ge(this.i,this.l,P,"[Invalid Chunked Response]"),ie(this),Ke(this);else if(0<P.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Xr(ht),ht.M=!0,yt(11))}}else ge(this.i,this.l,P,null),Gr(this,P);dt==4&&ie(this),this.o&&!this.J&&(dt==4?Ks(this.j,this):(this.o=!1,Cn(this)))}else Su(this.g),l==400&&0<P.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),ie(this),Ke(this)}}}catch{}finally{}};function Es(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function uu(s,c){var l=s.C,d=c.indexOf(`
`,l);return d==-1?jr:(l=Number(c.substring(l,d)),isNaN(l)?_s:(d+=1,d+l>c.length?jr:(c=c.slice(d,d+l),s.C=d+l,c)))}$t.prototype.cancel=function(){this.J=!0,ie(this)};function Cn(s){s.S=Date.now()+s.I,vs(s,s.I)}function vs(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ze(S(s.ba,s),c)}function zr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(au(this.i,this.A),this.L!=2&&($e(),yt(17)),ie(this),this.s=2,Ke(this)):vs(this,this.S-s)};function Ke(s){s.j.G==0||s.J||Ks(s.j,s)}function ie(s){zr(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,cs(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Gr(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||Kr(l.h,s))){if(!s.K&&Kr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Mn(l),On(l);else break t;Yr(l),yt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=ze(S(l.Za,l),6e3));if(1>=ws(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else oe(l,11)}else if((s.K||l.g==s)&&Mn(l),!K(c))for(T=l.Da.g.parse(c),c=0;c<T.length;c++){let $=T[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ht=$[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const dt=$[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const Ee=$[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(d=1.5*Ee,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const At=s.g;if(At){const Fn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var A=d.h;A.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Hr(A,A.h),A.h=null))}if(d.D){const Jr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Jr&&(d.ya=Jr,Q(d.I,d.D,Jr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var P=s;if(d.qa=Qs(d,d.J?d.ia:null,d.W),P.K){As(d.h,P);var H=P,ot=d.L;ot&&(H.I=ot),H.B&&(zr(H),Cn(H)),d.g=P}else zs(d);0<l.i.length&&xn(l)}else $[0]!="stop"&&$[0]!="close"||oe(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?oe(l,7):Qr(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}$e(4)}catch{}}var lu=class{constructor(s,c){this.g=s,this.map=c}};function Ts(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Is(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ws(s){return s.h?1:s.g?s.g.size:0}function Kr(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Hr(s,c){s.g?s.g.add(c):s.h=c}function As(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ts.prototype.cancel=function(){if(this.i=Rs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Rs(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.D);return c}return O(s.i)}function hu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,d=0;d<l;d++)c.push(s[d]);return c}c=[],l=0;for(d in s)c[l++]=s[d];return c}function du(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(const d in s)c[l++]=d;return c}}}function Ss(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=du(s),d=hu(s),T=d.length,A=0;A<T;A++)c.call(void 0,d[A],l&&l[A],s)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fu(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),T=null;if(0<=d){var A=s[l].substring(0,d);T=s[l].substring(d+1)}else A=s[l];c(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,bn(this,s.j),this.o=s.o,this.g=s.g,Pn(this,s.s),this.l=s.l;var c=s.i,l=new Qe;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),bs(this,l),this.m=s.m}else s&&(c=String(s).match(Cs))?(this.h=!1,bn(this,c[1]||"",!0),this.o=He(c[2]||""),this.g=He(c[3]||"",!0),Pn(this,c[4]),this.l=He(c[5]||"",!0),bs(this,c[6]||"",!0),this.m=He(c[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}se.prototype.toString=function(){var s=[],c=this.j;c&&s.push(We(c,Ps,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(We(c,Ps,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(We(l,l.charAt(0)=="/"?gu:pu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",We(l,yu)),s.join("")};function kt(s){return new se(s)}function bn(s,c,l){s.j=l?He(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Pn(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function bs(s,c,l){c instanceof Qe?(s.i=c,Eu(s.i,s.h)):(l||(c=We(c,_u)),s.i=new Qe(c,s.h))}function Q(s,c,l){s.i.set(c,l)}function Vn(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function He(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function We(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,mu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function mu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ps=/[#\/\?@]/g,pu=/[#\?:]/g,gu=/[#\?]/g,_u=/[#\?@]/g,yu=/#/g;function Qe(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function zt(s){s.g||(s.g=new Map,s.h=0,s.i&&fu(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Qe.prototype,n.add=function(s,c){zt(this),this.i=null,s=_e(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Vs(s,c){zt(s),c=_e(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Ds(s,c){return zt(s),c=_e(s,c),s.g.has(c)}n.forEach=function(s,c){zt(this),this.g.forEach(function(l,d){l.forEach(function(T){s.call(c,T,d,this)},this)},this)},n.na=function(){zt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let d=0;d<c.length;d++){const T=s[d];for(let A=0;A<T.length;A++)l.push(c[d])}return l},n.V=function(s){zt(this);let c=[];if(typeof s=="string")Ds(this,s)&&(c=c.concat(this.g.get(_e(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return zt(this),this.i=null,s=_e(this,s),Ds(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ks(s,c,l){Vs(s,c),0<l.length&&(s.i=null,s.g.set(_e(s,c),O(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var d=c[l];const A=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var T=A;P[d]!==""&&(T+="="+encodeURIComponent(String(P[d]))),s.push(T)}}return this.i=s.join("&")};function _e(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Eu(s,c){c&&!s.j&&(zt(s),s.i=null,s.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(Vs(this,d),ks(this,T,l))},s)),s.j=c}function vu(s,c){const l=new Ge;if(u.Image){const d=new Image;d.onload=C(Gt,l,"TestLoadImage: loaded",!0,c,d),d.onerror=C(Gt,l,"TestLoadImage: error",!1,c,d),d.onabort=C(Gt,l,"TestLoadImage: abort",!1,c,d),d.ontimeout=C(Gt,l,"TestLoadImage: timeout",!1,c,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else c(!1)}function Tu(s,c){const l=new Ge,d=new AbortController,T=setTimeout(()=>{d.abort(),Gt(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(T),A.ok?Gt(l,"TestPingServer: ok",!0,c):Gt(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),Gt(l,"TestPingServer: error",!1,c)})}function Gt(s,c,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function Iu(){this.g=new iu}function wu(s,c,l){const d=l||"";try{Ss(s,function(T,A){let P=T;f(T)&&(P=Lr(T)),c.push(d+A+"="+encodeURIComponent(P))})}catch(T){throw c.push(d+"type="+encodeURIComponent("_badmap")),T}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Dn,Fr),Dn.prototype.g=function(){return new kn(this.l,this.j)},Dn.prototype.i=function(s){return function(){return s}}({});function kn(s,c){lt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(kn,lt),n=kn.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Xe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ns(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ns(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Ye(this):Xe(this),this.readyState==3&&Ns(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ye(this))},n.Qa=function(s){this.g&&(this.response=s,Ye(this))},n.ga=function(){this.g&&Ye(this)};function Ye(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xe(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Xe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Os(s){let c="";return st(s,function(l,d){c+=d,c+=":",c+=l,c+=`\r
`}),c}function Wr(s,c,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Os(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Q(s,c,l))}function J(s){lt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,lt);var Au=/^https?$/i,Ru=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qr.g(),this.v=this.o?us(this.o):us(qr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){xs(this,A);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())l.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ru,c,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of l)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fs(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){xs(this,A)}};function xs(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Ms(s),Nn(s)}function Ms(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Nn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ls(this):this.bb())},n.bb=function(){Ls(this)};function Ls(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)ss(s.Ea,0,s);else if(_t(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var d;if(d=P===0){var T=String(s.D).match(Cs)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!Au.test(T?T.toLowerCase():"")}l=d}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var A=2<Nt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Ms(s)}}finally{Nn(s)}}}}function Nn(s,c){if(s.g){Fs(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||_t(s,"ready");try{l.onreadystatechange=d}catch{}}}function Fs(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),ru(c)}};function Us(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Su(s){const c={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(K(s[d]))continue;var l=E(s[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=c[T]||[];c[T]=A,A.push(l)}v(c,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function Bs(s){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,s),this.cb=Je("retryDelaySeedMs",1e4,s),this.Wa=Je("forwardChannelMaxRetries",2,s),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ts(s&&s.concurrentRequestLimit),this.Da=new Iu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bs.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,d){yt(0),this.W=s,this.H=c||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Qs(this,null,this.W),xn(this)};function Qr(s){if(qs(s),s.G==3){var c=s.U++,l=kt(s.I);if(Q(l,"SID",s.K),Q(l,"RID",c),Q(l,"TYPE","terminate"),Ze(s,l),c=new $t(s,s.j,c),c.L=2,c.v=Vn(kt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Ys(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Cn(c)}Ws(s)}function On(s){s.g&&(Xr(s),s.g.cancel(),s.g=null)}function qs(s){On(s),s.u&&(u.clearTimeout(s.u),s.u=null),Mn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function xn(s){if(!Is(s.h)&&!s.s){s.s=!0;var c=s.Ga;Fe||ts(),Ue||(Fe(),Ue=!0),Pr.add(c,s),s.B=0}}function Cu(s,c){return ws(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ze(S(s.Ga,s,c),Hs(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new $t(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=$s(this,T,c),l=kt(this.I),Q(l,"RID",s),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),Ze(this,l),A&&(this.O?c="headers="+encodeURIComponent(String(Os(A)))+"&"+c:this.m&&Wr(l,this.m,A)),Hr(this.h,T),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",c),Q(l,"SID","null"),T.T=!0,$r(T,l,null)):$r(T,l,c),this.G=2}}else this.G==3&&(s?js(this,s):this.i.length==0||Is(this.h)||js(this))};function js(s,c){var l;c?l=c.l:l=s.U++;const d=kt(s.I);Q(d,"SID",s.K),Q(d,"RID",l),Q(d,"AID",s.T),Ze(s,d),s.m&&s.o&&Wr(d,s.m,s.o),l=new $t(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=$s(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Hr(s.h,l),$r(l,d,c)}function Ze(s,c){s.H&&st(s.H,function(l,d){Q(c,d,l)}),s.l&&Ss({},function(l,d){Q(c,d,l)})}function $s(s,c,l){l=Math.min(s.i.length,l);var d=s.l?S(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const P=["count="+l];A==-1?0<l?(A=T[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let H=!0;for(let ot=0;ot<l;ot++){let $=T[ot].g;const ht=T[ot].map;if($-=A,0>$)A=Math.max(0,T[ot].g-100),H=!1;else try{wu(ht,P,"req"+$+"_")}catch{d&&d(ht)}}if(H){d=P.join("&");break t}}}return s=s.i.splice(0,l),c.D=s,d}function zs(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Fe||ts(),Ue||(Fe(),Ue=!0),Pr.add(c,s),s.v=0}}function Yr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ze(S(s.Fa,s),Hs(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Gs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ze(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),On(this),Gs(this))};function Xr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Gs(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=kt(s.qa);Q(c,"RID","rpc"),Q(c,"SID",s.K),Q(c,"AID",s.T),Q(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(c,"TO",s.ja),Q(c,"TYPE","xmlhttp"),Ze(s,c),s.m&&s.o&&Wr(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Vn(kt(c)),l.m=null,l.P=!0,ys(l,s)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Yr(this),yt(19))};function Mn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Ks(s,c){var l=null;if(s.g==c){Mn(s),Xr(s),s.g=null;var d=2}else if(Kr(s.h,c))l=c.D,As(s.h,c),d=1;else return;if(s.G!=0){if(c.o)if(d==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var T=s.B;d=An(),_t(d,new ms(d,l)),xn(s)}else zs(s);else if(T=c.s,T==3||T==0&&0<c.X||!(d==1&&Cu(s,c)||d==2&&Yr(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),T){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function Hs(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function oe(s,c){if(s.j.info("Error code "+c),c==2){var l=S(s.fb,s),d=s.Xa;const T=!d;d=new se(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||bn(d,"https"),Vn(d),T?vu(d.toString(),l):Tu(d.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(c),Ws(s),qs(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Ws(s){if(s.G=0,s.ka=[],s.l){const c=Rs(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ka,c),D(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Qs(s,c,l){var d=l instanceof se?kt(l):new se(l);if(d.g!="")c&&(d.g=c+"."+d.g),Pn(d,d.s);else{var T=u.location;d=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var A=new se(null);d&&bn(A,d),c&&(A.g=c),T&&Pn(A,T),l&&(A.l=l),d=A}return l=s.D,c=s.ya,l&&c&&Q(d,l,c),Q(d,"VER",s.la),Ze(s,d),d}function Ys(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new J(new Dn({eb:l})):new J(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xs(){}n=Xs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ln(){}Ln.prototype.g=function(s,c){return new It(s,c)};function It(s,c){lt.call(this),this.g=new Bs(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!K(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new ye(this)}k(It,lt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Qr(this.g)},It.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Lr(s),s=l);c.i.push(new lu(c.Ya++,s)),c.G==3&&xn(c)},It.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,It.aa.N.call(this)};function Js(s){Ur.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const l in c){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}k(Js,Ur);function Zs(){Br.call(this),this.status=1}k(Zs,Br);function ye(s){this.g=s}k(ye,Xs),ye.prototype.ua=function(){_t(this.g,"a")},ye.prototype.ta=function(s){_t(this.g,new Js(s))},ye.prototype.sa=function(s){_t(this.g,new Zs)},ye.prototype.ra=function(){_t(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,ya=function(){return new Ln},_a=function(){return An()},ga=re,hi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,zn=Rn,ps.COMPLETE="complete",pa=ps,ls.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",lt.prototype.listen=lt.prototype.K,tn=ls,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ma=J}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const uo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new bi("@firebase/firestore");function ve(){return he.logLevel}function V(n,...t){if(he.logLevel<=q.DEBUG){const e=t.map(Pi);he.debug(`Firestore (${De}): ${n}`,...e)}}function Bt(n,...t){if(he.logLevel<=q.ERROR){const e=t.map(Pi);he.error(`Firestore (${De}): ${n}`,...e)}}function Re(n,...t){if(he.logLevel<=q.WARN){const e=t.map(Pi);he.warn(`Firestore (${De}): ${n}`,...e)}}function Pi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: `+n;throw Bt(t),new Error(t)}function z(n,t){n||M()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Jl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zl{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new Ea(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new mt(t)}}class th{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new th(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){z(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new nh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ih(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function Se(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Et(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new Et(0,0))}static max(){return new L(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ln.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ln?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends ln{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends ln{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return sh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function oh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new Et(e+1,0):new Et(e,r));return new Xt(i,x.empty(),t)}function ah(n){return new Xt(n.readTime,n.key,-1)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(L.min(),x.empty(),-1)}static max(){return new Xt(L.max(),x.empty(),-1)}}function ch(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==uh)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{a[f]=g,++u,u===o&&r(a)},g=>i(g))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function hh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ne(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}fr.oe=-1;function mr(n){return n==null}function di(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=lo(t)),t=fh(n.get(e),t);return lo(t)}function fh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function lo(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Oe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function mh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new fo(this.data.getIterator())}getIteratorFrom(t){return new fo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class fo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new it(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ta("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ph=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(z(!!n),typeof n=="string"){let t=0;const e=ph.exec(n);if(z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function pr(n){const t=n.mapValue.fields.__previous_value__;return Vi(t)?pr(t):t}function hn(n){const t=Jt(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e,r,i,o,a,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class dn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vi(n)?4:yh(n)?9007199254740991:_h(n)?10:11:M()}function bt(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return hn(n).isEqual(hn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Jt(i.timestampValue),u=Jt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Zt(i.bytesValue).isEqual(Zt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Z(i.doubleValue),u=Z(o.doubleValue);return a===u?di(a)===di(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Se(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(ho(a)!==ho(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!bt(a[h],u[h])))return!1;return!0}(n,t);default:return M()}}function fn(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function Ce(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return mo(n.timestampValue,t.timestampValue);case 4:return mo(hn(n),hn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Zt(o),h=Zt(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const g=j(u[f],h[f]);if(g!==0)return g}return j(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=j(Z(o.latitude),Z(a.latitude));return u!==0?u:j(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return po(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,g;const w=o.fields||{},S=a.fields||{},C=(u=w.value)===null||u===void 0?void 0:u.arrayValue,k=(h=S.value)===null||h===void 0?void 0:h.arrayValue,O=j(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((g=k==null?void 0:k.values)===null||g===void 0?void 0:g.length)||0);return O!==0?O:po(C,k)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===qn.mapValue&&a===qn.mapValue)return 0;if(o===qn.mapValue)return 1;if(a===qn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let w=0;w<h.length&&w<g.length;++w){const S=j(h[w],g[w]);if(S!==0)return S;const C=Ce(u[h[w]],f[g[w]]);if(C!==0)return C}return j(h.length,g.length)}(n.mapValue,t.mapValue);default:throw M()}}function mo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Jt(n),r=Jt(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function po(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ce(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function be(n){return fi(n)}function fi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=fi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fi(e.fields[a])}`;return i+"}"}(n.mapValue):M()}function Gn(n){switch(te(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=pr(n);return t?16+Gn(t):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Gn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Oe(r.fields,(o,a)=>{i+=o.length+Gn(a)}),i}(n.mapValue);default:throw M()}}function mi(n){return!!n&&"integerValue"in n}function Di(n){return!!n&&"arrayValue"in n}function go(n){return!!n&&"nullValue"in n}function _o(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kn(n){return!!n&&"mapValue"in n}function _h(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Oe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function yh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(e)}setAll(t){let e=gt.emptyPath(),r={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=rn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Oe(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(rn(this.value))}}function Ia(n){const t=[];return Oe(n.fields,(e,r)=>{const i=new gt([e]);if(Kn(r)){const o=Ia(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new pt(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new pt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new pt(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.position=t,this.inclusive=e}}function yo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Ce(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Eh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{}class et extends wa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Th(t,e,r):e==="array-contains"?new Ah(t,r):e==="in"?new Rh(t,r):e==="not-in"?new Sh(t,r):e==="array-contains-any"?new Ch(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ih(t,r):new wh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ce(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends wa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Pt(t,e)}matches(t){return Aa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Aa(n){return n.op==="and"}function Ra(n){return vh(n)&&Aa(n)}function vh(n){for(const t of n.filters)if(t instanceof Pt)return!1;return!0}function pi(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+be(n.value);if(Ra(n))return n.filters.map(t=>pi(t)).join(",");{const t=n.filters.map(e=>pi(e)).join(",");return`${n.op}(${t})`}}function Sa(n,t){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,t):n instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&Sa(a,i.filters[u]),!0):!1}(n,t):void M()}function Ca(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${be(e.value)}`}(n):n instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ca).join(" ,")+"}"}(n):"Filter"}class Th extends et{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ih extends et{constructor(t,e){super(t,"in",e),this.keys=ba("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wh extends et{constructor(t,e){super(t,"not-in",e),this.keys=ba("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ba(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class Ah extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Di(e)&&fn(e.arrayValue,this.value)}}class Rh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&fn(this.value.arrayValue,e)}}class Sh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!fn(this.value.arrayValue,e)}}class Ch extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Di(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>fn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function vo(n,t=null,e=[],r=[],i=null,o=null,a=null){return new bh(n,t,e,r,i,o,a)}function ki(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>pi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>be(r)).join(",")),t.ue=e}return t.ue}function Ni(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Eh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Sa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Eo(n.startAt,t.startAt)&&Eo(n.endAt,t.endAt)}function gi(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ph(n,t,e,r,i,o,a,u){return new gr(n,t,e,r,i,o,a,u)}function Pa(n){return new gr(n)}function To(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vh(n){return n.collectionGroup!==null}function sn(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new it(gt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new tr(o,r))}),e.has(gt.keyField().canonicalString())||t.ce.push(new tr(gt.keyField(),r))}return t.ce}function St(n){const t=F(n);return t.le||(t.le=Dh(t,sn(n))),t.le}function Dh(n,t){if(n.limitType==="F")return vo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new tr(i.field,o)});const e=n.endAt?new Zn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zn(n.startAt.position,n.startAt.inclusive):null;return vo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function _i(n,t,e){return new gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function _r(n,t){return Ni(St(n),St(t))&&n.limitType===t.limitType}function Va(n){return`${ki(St(n))}|lt:${n.limitType}`}function Te(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Ca(i)).join(", ")}]`),mr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>be(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>be(i)).join(",")),`Target(${r})`}(St(n))}; limitType=${n.limitType})`}function yr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of sn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,u,h){const f=yo(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,sn(r),i)||r.endAt&&!function(a,u,h){const f=yo(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,sn(r),i))}(n,t)}function kh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Da(n){return(t,e)=>{let r=!1;for(const i of sn(n)){const o=Nh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Nh(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Ce(h,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Oe(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return mh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new X(x.comparator);function qt(){return Oh}const ka=new X(x.comparator);function en(...n){let t=ka;for(const e of n)t=t.insert(e.key,e);return t}function Na(n){let t=ka;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ce(){return on()}function Oa(){return on()}function on(){return new me(n=>n.toString(),(n,t)=>n.isEqual(t))}const xh=new X(x.comparator),Mh=new it(x.comparator);function U(...n){let t=Mh;for(const e of n)t=t.add(e);return t}const Lh=new it(j);function Fh(){return Lh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(t)?"-0":t}}function Bh(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this._=void 0}}function qh(n,t,e){return n instanceof er?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Vi(o)&&(o=pr(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof mn?Ma(n,t):n instanceof pn?La(n,t):function(i,o){const a=xa(i,o),u=Io(a)+Io(i.Pe);return mi(a)&&mi(i.Pe)?Bh(u):Uh(i.serializer,u)}(n,t)}function jh(n,t,e){return n instanceof mn?Ma(n,t):n instanceof pn?La(n,t):e}function xa(n,t){return n instanceof nr?function(r){return mi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class er extends Er{}class mn extends Er{constructor(t){super(),this.elements=t}}function Ma(n,t){const e=Fa(t);for(const r of n.elements)e.some(i=>bt(i,r))||e.push(r);return{arrayValue:{values:e}}}class pn extends Er{constructor(t){super(),this.elements=t}}function La(n,t){let e=Fa(t);for(const r of n.elements)e=e.filter(i=>!bt(i,r));return{arrayValue:{values:e}}}class nr extends Er{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Io(n){return Z(n.integerValue||n.doubleValue)}function Fa(n){return Di(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $h(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof mn&&i instanceof mn||r instanceof pn&&i instanceof pn?Se(r.elements,i.elements,bt):r instanceof nr&&i instanceof nr?bt(r.Pe,i.Pe):r instanceof er&&i instanceof er}(n.transform,t.transform)}class zh{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class vr{}function Ua(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Oi(n.key,Mt.none()):new Tr(n.key,n.data,Mt.none());{const e=n.data,r=Rt.empty();let i=new it(gt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new xe(n.key,r,new Ot(i.toArray()),Mt.none())}}function Gh(n,t,e){n instanceof Tr?function(i,o,a){const u=i.value.clone(),h=Ao(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof xe?function(i,o,a){if(!Hn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ao(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ba(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function an(n,t,e,r){return n instanceof Tr?function(o,a,u,h){if(!Hn(o.precondition,a))return u;const f=o.value.clone(),g=Ro(o.fieldTransforms,h,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof xe?function(o,a,u,h){if(!Hn(o.precondition,a))return u;const f=Ro(o.fieldTransforms,h,a),g=a.data;return g.setAll(Ba(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,u){return Hn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Kh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=xa(r.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function wo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Se(r,i,(o,a)=>$h(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Tr extends vr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xe extends vr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ba(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ao(n,t,e){const r=new Map;z(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,jh(a,u,e[i]))}return r}function Ro(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,qh(o,a,t))}return r}class Oi extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hh extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Gh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Oa();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const h=Ua(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(e,r)=>wo(e,r))&&Se(this.baseMutations,t.baseMutations,(e,r)=>wo(e,r))}}class xi{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){z(t.mutations.length===r.length);let i=function(){return xh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new xi(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function Xh(n){switch(n){default:return M();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function qa(n){if(n===void 0)return Bt("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new le([4294967295,4294967295],0);function So(n){const t=Jh().encode(n),e=new fa;return e.update(t),new Uint8Array(e.digest())}function Co(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new le([e,r],0),new le([i,o],0)]}class Mi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=le.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(le.fromNumber(r)));return i.compare(Zh)===1&&(i=new le([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=So(t),[r,i]=Co(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Mi(o,i,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=So(t),[r,i]=Co(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ir(L.min(),i,new X(j),qt(),U())}}class _n{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new _n(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class ja{constructor(t,e){this.targetId=t,this.me=e}}class $a{constructor(t,e,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class bo{constructor(){this.fe=0,this.ge=Vo(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new _n(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Vo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class td{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Po(),this.Qe=new X(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(gi(o))if(r===0){const a=new x(o.path);this.Ue(e,a,pt.newNoDocument(a,L.min()))}else z(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=Zt(r).toUint8Array()}catch(h){if(h instanceof Ta)return Re("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Mi(a,i,o)}catch(h){return Re(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&gi(u.target)){const h=new x(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,pt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Ir(t,e,this.Qe,this.ke,r);return this.ke=qt(),this.qe=Po(),this.Qe=new X(j),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new bo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new it(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new bo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Po(){return new X(x.comparator)}function Vo(){return new X(x.comparator)}const ed={asc:"ASCENDING",desc:"DESCENDING"},nd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rd={and:"AND",or:"OR"};class id{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yi(n,t){return n.useProto3Json||mr(t)?t:{value:t}}function za(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function od(n,t){return za(n,t.toTimestamp())}function Ct(n){return z(!!n),L.fromTimestamp(function(e){const r=Jt(e);return new Et(r.seconds,r.nanos)}(n))}function Ga(n,t){return Ei(n,t).canonicalString()}function Ei(n,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ka(n){const t=Y.fromString(n);return z(Xa(t)),t}function vi(n,t){return Ga(n.databaseId,t.path)}function ei(n,t){const e=Ka(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Wa(e))}function Ha(n,t){return Ga(n.databaseId,t)}function ad(n){const t=Ka(n);return t.length===4?Y.emptyPath():Wa(t)}function Ti(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wa(n){return z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Do(n,t,e){return{name:vi(n,t),fields:e.value.mapValue.fields}}function cd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(z(g===void 0||typeof g=="string"),ct.fromBase64String(g||"")):(z(g===void 0||g instanceof Buffer||g instanceof Uint8Array),ct.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const g=f.code===void 0?b.UNKNOWN:qa(f.code);return new N(g,f.message||"")}(a);e=new $a(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ei(n,r.document.name),o=Ct(r.document.updateTime),a=r.document.createTime?Ct(r.document.createTime):L.min(),u=new Rt({mapValue:{fields:r.document.fields}}),h=pt.newFoundDocument(i,o,a,u),f=r.targetIds||[],g=r.removedTargetIds||[];e=new Wn(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ei(n,r.document),o=r.readTime?Ct(r.readTime):L.min(),a=pt.newNoDocument(i,o),u=r.removedTargetIds||[];e=new Wn([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ei(n,r.document),o=r.removedTargetIds||[];e=new Wn([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Yh(i,o),u=r.targetId;e=new ja(u,a)}}return e}function ud(n,t){let e;if(t instanceof Tr)e={update:Do(n,t.key,t.value)};else if(t instanceof Oi)e={delete:vi(n,t.key)};else if(t instanceof xe)e={update:Do(n,t.key,t.data),updateMask:yd(t.fieldMask)};else{if(!(t instanceof Hh))return M();e={verify:vi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof er)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof nr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:od(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function ld(n,t){return n&&n.length>0?(z(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Ct(i.updateTime):Ct(o);return a.isEqual(L.min())&&(a=Ct(o)),new zh(a,i.transformResults||[])}(e,t))):[]}function hd(n,t){return{documents:[Ha(n,t.path)]}}function dd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ha(n,i);const o=function(f){if(f.length!==0)return Ya(Pt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(g=>function(S){return{field:Ie(S.field),direction:pd(S.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=yi(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function fd(n){let t=ad(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){z(r===1);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(w){const S=Qa(w);return S instanceof Pt&&Ra(S)?S.getFilters():[S]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(S=>function(k){return new tr(we(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(e.orderBy));let u=null;e.limit&&(u=function(w){let S;return S=typeof w=="object"?w.value:w,mr(S)?null:S}(e.limit));let h=null;e.startAt&&(h=function(w){const S=!!w.before,C=w.values||[];return new Zn(C,S)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const S=!w.before,C=w.values||[];return new Zn(C,S)}(e.endAt)),Ph(t,i,a,o,u,"F",h,f)}function md(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Qa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return et.create(we(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(r=>Qa(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function pd(n){return ed[n]}function gd(n){return nd[n]}function _d(n){return rd[n]}function Ie(n){return{fieldPath:n.canonicalString()}}function we(n){return gt.fromServerFormat(n.fieldPath)}function Ya(n){return n instanceof et?function(e){if(e.op==="=="){if(_o(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NAN"}};if(go(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_o(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NAN"}};if(go(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(e.field),op:gd(e.op),value:e.value}}}(n):n instanceof Pt?function(e){const r=e.getFilters().map(i=>Ya(i));return r.length===1?r[0]:{compositeFilter:{op:_d(e.op),filters:r}}}(n):M()}function yd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Xa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,i,o=L.min(),a=L.min(),u=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.ct=t}}function vd(n){const t=fd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_i(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.un=new Id}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Xt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Id{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new it(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Pe(0)}static kn(){return new Pe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class wd{constructor(t){this.Un=t,this.buffer=new it(No),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();No(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ad{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){V("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ne(e)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ke(e)}await this.Hn(3e5)})}}class Rd{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(fr.oe);const r=new wd(e);return this.Jn.forEachTarget(t,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(t,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Jn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ko)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ko):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let r,i,o,a,u,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,u=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(f=Date.now(),ve()<=q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${w} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Sd(n,t){return new Rd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&an(r.mutation,i,Ot.empty(),Et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=ce();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=en();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,i){let o=qt();const a=on(),u=function(){return on()}();return e.forEach((h,f)=>{const g=r.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof xe)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),an(g.mutation,f,g.mutation.getFieldMask(),Et.now())):a.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>a.set(f,g)),e.forEach((f,g)=>{var w;return u.set(f,new bd(g,(w=a.get(f))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(t,e){const r=on();let i=new X((a,u)=>a-u),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||Ot.empty();g=u.applyToLocalView(f,g),r.set(h,g);const w=(i.get(u.batchId)||U()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,g=h.value,w=Oa();g.forEach(S=>{if(!o.has(S)){const C=Ua(e.get(S),r.get(S));C!==null&&w.set(S,C),o=o.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ce());let u=-1,h=o;return a.next(f=>R.forEach(f,(g,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(g)?R.resolve():this.remoteDocumentCache.getEntry(t,g).next(S=>{h=h.insert(g,S)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(g=>({batchId:u,changes:Na(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let i=en();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=en();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,h=>{const f=function(w,S){return new gr(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(g=>{g.forEach((w,S)=>{a=a.insert(w,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,pt.newInvalidDocument(g)))});let u=en();return a.forEach((h,f)=>{const g=o.get(h);g!==void 0&&an(g.mutation,f,Ot.empty(),Et.now()),yr(e,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ct(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:vd(i.bundledQuery),readTime:Ct(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.overlays=new X(x.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ce(),o=e.length+1,a=new x(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new X((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=ce(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const u=ce(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>u.set(f,g)),!(u.size()>=i)););return R.resolve(u)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qh(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.Tr=new it(rt.Er),this.dr=new it(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new rt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new x(new Y([])),r=new rt(e,t),i=new rt(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new Y([])),r=new rt(e,t),i=new rt(e,t+1);let o=U();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new it(rt.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wh(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new rt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(j);return e.forEach(i=>{const o=new rt(i,0),a=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new rt(new x(o),0);let u=new it(j);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.wr)),!0)},a),R.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return R.forEach(e.mutations,i=>{const o=new rt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new rt(e,0),i=this.br.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.Mr=t,this.docs=function(){return new X(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=qt();const a=e.path,u=new x(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ch(ah(g),r)<=0||(i.has(g.key)||yr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}Or(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new xd(this)}getSize(t){return R.resolve(this.size)}}class xd extends Cd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t){this.persistence=t,this.Nr=new me(e=>ki(e),Ni),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Li,this.targetCount=0,this.kr=Pe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e){this.qr={},this.overlays={},this.Qr=new fr(0),this.Kr=!1,this.Kr=!0,this.$r=new kd,this.referenceDelegate=t(this),this.Ur=new Md(this),this.indexManager=new Td,this.remoteDocumentCache=function(i){return new Od(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ed(e),this.Gr=new Vd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Nd(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Ld(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Ld extends lh{constructor(t){super(),this.currentSequenceNumber=t}}class Fi{constructor(t){this.persistence=t,this.Jr=new Li,this.Yr=null}static Zr(t){return new Fi(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,r=>{const i=x.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}class rr{constructor(t,e){this.persistence=t,this.ti=new me(r=>dh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Sd(this,e)}static Zr(t,e){return new rr(t,e)}zr(){}jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Yn(t){const e=this.er(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}er(t){let e=0;return this.Zn(t,r=>{e++}).next(()=>e)}Zn(t,e){return R.forEach(this.ti,(r,i)=>this.nr(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Or(t,a=>this.nr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ti.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ti.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.ti.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ti.set(e,t.currentSequenceNumber),R.resolve()}Wr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Gn(t.data.value)),e}nr(t,e,r){return R.or([()=>this.persistence.Hr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ti.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ui(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ju()?8:hh(Ci())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fd;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(ve()<=q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Te(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(ve()<=q.DEBUG&&V("QueryEngine","Query:",Te(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ve()<=q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Te(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):R.resolve())}Yi(t,e){if(To(e))return R.resolve(null);let r=St(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=_i(e,null,"F"),r=St(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,u);return this.ns(e,f,a,h.readTime)?this.Yi(t,_i(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,i){return To(e)||i.isEqual(L.min())?R.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?R.resolve(null):(ve()<=q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Te(e)),this.rs(t,a,e,oh(i,-1)).next(u=>u))})}ts(t,e){let r=new it(Da(t));return e.forEach((i,o)=>{yr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return ve()<=q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Te(e)),this.Ji.getDocumentsMatchingQuery(t,e,Xt.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new X(j),this._s=new me(o=>ki(o),Ni),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function qd(n,t,e,r){return new Bd(n,t,e,r)}async function Za(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=U();for(const f of i){a.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:u}))})})}function jd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,g){const w=f.batch,S=w.keys();let C=R.resolve();return S.forEach(k=>{C=C.next(()=>g.getEntry(h,k)).next(O=>{const D=f.docVersions.get(k);z(D!==null),O.version.compareTo(D)<0&&(w.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),g.addEntry(O)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=U();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function tc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function $d(n,t){const e=F(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const u=[];t.targetChanges.forEach((g,w)=>{const S=i.get(w);if(!S)return;u.push(e.Ur.removeMatchingKeys(o,g.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,g.addedDocuments,w)));let C=S.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?C=C.withResumeToken(ct.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(g.resumeToken,r)),i=i.insert(w,C),function(O,D,G){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(S,C,g)&&u.push(e.Ur.updateTargetData(o,C))});let h=qt(),f=U();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),u.push(zd(o,a,t.documentUpdates).next(g=>{h=g.Ps,f=g.Is})),!r.isEqual(L.min())){const g=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(g)}return R.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=i,o))}function zd(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=qt();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):V("LocalStore","Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function Gd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Kd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,R.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Kt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ii(n,t,e){const r=F(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ne(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Oo(n,t,e){const r=F(n);let i=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,g){const w=F(h),S=w._s.get(g);return S!==void 0?R.resolve(w.os.get(S)):w.Ur.getTargetData(f,g)}(r,a,St(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:U())).next(u=>(Hd(r,kh(t),u),{documents:u,Ts:o})))}function Hd(n,t,e){let r=n.us.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class xo{constructor(){this.activeTargetIds=Fh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wd{constructor(){this.so=new xo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new xo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=null;function ni(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Jd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const u=ni(),h=this.xo(e,r.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${u}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,i).then(g=>(V("RestConnection",`Received RPC '${e}' ${u}: `,g),g),g=>{throw Re("RestConnection",`RPC '${e}' ${u} failed with error: `,g,"url: ",h,"request:",i),g})}Lo(e,r,i,o,a,u){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+De}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=Yd[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=ni();return new Promise((a,u)=>{const h=new ma;h.setWithCredentials(!0),h.listenOnce(pa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zn.NO_ERROR:const g=h.getResponseJson();V(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),a(g);break;case zn.TIMEOUT:V(ft,`RPC '${t}' ${o} timed out`),u(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const w=h.getStatus();if(V(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(G)>=0?G:b.UNKNOWN}(C.status);u(new N(k,C.message))}else u(new N(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new N(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);V(ft,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const i=ni(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ya(),u=_a(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");V(ft,`Creating RPC '${t}' stream ${i}: ${g}`,h);const w=a.createWebChannel(g,h);let S=!1,C=!1;const k=new Xd({Io:D=>{C?V(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(S||(V(ft,`Opening RPC '${t}' stream ${i} transport.`),w.open(),S=!0),V(ft,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},To:()=>w.close()}),O=(D,G,K)=>{D.listen(G,W=>{try{K(W)}catch(nt){setTimeout(()=>{throw nt},0)}})};return O(w,tn.EventType.OPEN,()=>{C||(V(ft,`RPC '${t}' stream ${i} transport opened.`),k.yo())}),O(w,tn.EventType.CLOSE,()=>{C||(C=!0,V(ft,`RPC '${t}' stream ${i} transport closed`),k.So())}),O(w,tn.EventType.ERROR,D=>{C||(C=!0,Re(ft,`RPC '${t}' stream ${i} transport errored:`,D),k.So(new N(b.UNAVAILABLE,"The operation could not be completed")))}),O(w,tn.EventType.MESSAGE,D=>{var G;if(!C){const K=D.data[0];z(!!K);const W=K,nt=W.error||((G=W[0])===null||G===void 0?void 0:G.error);if(nt){V(ft,`RPC '${t}' stream ${i} received error:`,nt);const Vt=nt.status;let st=function(_){const y=tt[_];if(y!==void 0)return qa(y)}(Vt),v=nt.message;st===void 0&&(st=b.INTERNAL,v="Unknown error status: "+Vt+" with message "+nt.message),C=!0,k.So(new N(st,v)),w.close()}else V(ft,`RPC '${t}' stream ${i} received:`,K),k.bo(K)}}),O(u,ga.STAT_EVENT,D=>{D.stat===hi.PROXY?V(ft,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===hi.NOPROXY&&V(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function ri(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){return new id(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,r,i,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zd extends rc{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=cd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ct(a.readTime):L.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Ti(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=gi(h)?{documents:hd(o,h)}:{query:dd(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=sd(o,a.resumeToken);const f=yi(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=za(o,a.snapshotVersion.toTimestamp());const f=yi(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=md(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Ti(this.serializer),e.removeTarget=t,this.a_(e)}}class tf extends rc{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=ld(t.writeResults,t.commitTime),r=Ct(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Ti(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ud(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ei(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Ei(e,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bt(e),this.D_=!1):V("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{pe(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.L_.add(4),await yn(f),f.q_.set("Unknown"),f.L_.delete(4),await wr(f)}(this))})}),this.q_=new nf(r,i)}}async function wr(n){if(pe(n))for(const t of n.B_)await t(!0)}async function yn(n){for(const t of n.B_)await t(!1)}function ic(n,t){const e=F(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),$i(e)?ji(e):Me(e).r_()&&qi(e,t))}function Bi(n,t){const e=F(n),r=Me(e);e.N_.delete(t),r.r_()&&sc(e,t),e.N_.size===0&&(r.r_()?r.o_():pe(e)&&e.q_.set("Unknown"))}function qi(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).A_(t)}function sc(n,t){n.Q_.xe(t),Me(n).R_(t)}function ji(n){n.Q_=new td({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.q_.v_()}function $i(n){return pe(n)&&!Me(n).n_()&&n.N_.size>0}function pe(n){return F(n).L_.size===0}function oc(n){n.Q_=void 0}async function sf(n){n.q_.set("Online")}async function of(n){n.N_.forEach((t,e)=>{qi(n,t)})}async function af(n,t){oc(n),$i(n)?(n.q_.M_(t),ji(n)):n.q_.set("Unknown")}async function cf(n,t,e){if(n.q_.set("Online"),t instanceof $a&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ir(n,r)}else if(t instanceof Wn?n.Q_.Ke(t):t instanceof ja?n.Q_.He(t):n.Q_.We(t),!e.isEqual(L.min()))try{const r=await tc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(f);g&&o.N_.set(f,g.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(ct.EMPTY_BYTE_STRING,g.snapshotVersion)),sc(o,h);const w=new Kt(g.target,h,f,g.sequenceNumber);qi(o,w)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await ir(n,r)}}async function ir(n,t,e){if(!Ne(t))throw t;n.L_.add(1),await yn(n),n.q_.set("Offline"),e||(e=()=>tc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await wr(n)})}function ac(n,t){return t().catch(e=>ir(n,e,t))}async function Ar(n){const t=F(n),e=ee(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;uf(t);)try{const i=await Gd(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,lf(t,i)}catch(i){await ir(t,i)}cc(t)&&uc(t)}function uf(n){return pe(n)&&n.O_.length<10}function lf(n,t){n.O_.push(t);const e=ee(n);e.r_()&&e.V_&&e.m_(t.mutations)}function cc(n){return pe(n)&&!ee(n).n_()&&n.O_.length>0}function uc(n){ee(n).start()}async function hf(n){ee(n).p_()}async function df(n){const t=ee(n);for(const e of n.O_)t.m_(e.mutations)}async function ff(n,t,e){const r=n.O_.shift(),i=xi.from(r,t,e);await ac(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ar(n)}async function mf(n,t){t&&ee(n).V_&&await async function(r,i){if(function(a){return Xh(a)&&a!==b.ABORTED}(i.code)){const o=r.O_.shift();ee(r).s_(),await ac(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ar(r)}}(n,t),cc(n)&&uc(n)}async function Lo(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=pe(e);e.L_.add(3),await yn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await wr(e)}async function pf(n,t){const e=F(n);t?(e.L_.delete(2),await wr(e)):t||(e.L_.add(2),await yn(e),e.q_.set("Unknown"))}function Me(n){return n.K_||(n.K_=function(e,r,i){const o=F(e);return o.w_(),new Zd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:sf.bind(null,n),Ro:of.bind(null,n),mo:af.bind(null,n),d_:cf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),$i(n)?ji(n):n.q_.set("Unknown")):(await n.K_.stop(),oc(n))})),n.K_}function ee(n){return n.U_||(n.U_=function(e,r,i){const o=F(e);return o.w_(),new tf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hf.bind(null,n),mo:mf.bind(null,n),f_:df.bind(null,n),g_:ff.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Ar(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new zi(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gi(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),Ne(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=en(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new Ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ae;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.W_=new X(x.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):M():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ve{constructor(t,e,r,i,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ve(t,e,Ae.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_r(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class _f{constructor(){this.queries=Uo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=Uo(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function Uo(){return new me(n=>Va(n),_r)}async function yf(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new gf,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=Gi(a,`Initialization of query '${Te(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ki(e)}async function Ef(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function vf(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&Ki(e)}function Tf(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function Ki(n){n.Y_.forEach(t=>{t.next()})}var wi,Bo;(Bo=wi||(wi={})).ea="default",Bo.Cache="cache";class If{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==wi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t){this.key=t}}class hc{constructor(t){this.key=t}}class wf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=Da(t),this.Ra=new Ae(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Fo,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,w)=>{const S=i.get(g),C=yr(this.query,w)?w:null,k=!!S&&this.mutatedKeys.has(S.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;S&&C?S.data.isEqual(C.data)?k!==O&&(r.track({type:3,doc:C}),D=!0):this.ga(S,C)||(r.track({type:2,doc:C}),D=!0,(h&&this.Aa(C,h)>0||f&&this.Aa(C,f)<0)&&(u=!0)):!S&&C?(r.track({type:0,doc:C}),D=!0):S&&!C&&(r.track({type:1,doc:S}),D=!0,(h||f)&&(u=!0)),D&&(C?(a=a.add(C),o=O?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((g,w)=>function(C,k){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return O(C)-O(k)}(g.type,w.type)||this.Aa(g.doc,w.doc)),this.pa(r),i=i!=null&&i;const u=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new Ve(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new hc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new lc(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ve.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Af{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Rf{constructor(t){this.key=t,this.va=!1}}class Sf{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new me(u=>Va(u),_r),this.Ma=new Map,this.xa=new Set,this.Oa=new X(x.comparator),this.Na=new Map,this.La=new Li,this.Ba={},this.ka=new Map,this.qa=Pe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cf(n,t,e=!0){const r=_c(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await dc(r,t,e,!0),i}async function bf(n,t){const e=_c(n);await dc(e,t,!0,!1)}async function dc(n,t,e,r){const i=await Kd(n.localStore,St(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Pf(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&ic(n.remoteStore,i),u}async function Pf(n,t,e,r,i){n.Ka=(w,S,C)=>async function(O,D,G,K){let W=D.view.ma(G);W.ns&&(W=await Oo(O.localStore,D.query,!1).then(({documents:v})=>D.view.ma(v,W)));const nt=K&&K.targetChanges.get(D.targetId),Vt=K&&K.targetMismatches.get(D.targetId)!=null,st=D.view.applyChanges(W,O.isPrimaryClient,nt,Vt);return jo(O,D.targetId,st.wa),st.snapshot}(n,w,S,C);const o=await Oo(n.localStore,t,!0),a=new wf(t,o.Ts),u=a.ma(o.documents),h=_n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(u,n.isPrimaryClient,h);jo(n,e,f.wa);const g=new Af(t,e,a);return n.Fa.set(t,g),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Vf(n,t,e){const r=F(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!_r(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ii(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Bi(r.remoteStore,i.targetId),Ai(r,i.targetId)}).catch(ke)):(Ai(r,i.targetId),await Ii(r.localStore,i.targetId,!0))}async function Df(n,t){const e=F(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Bi(e.remoteStore,r.targetId))}async function kf(n,t,e){const r=Uf(n);try{const i=await function(a,u){const h=F(a),f=Et.now(),g=u.reduce((C,k)=>C.add(k.key),U());let w,S;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=qt(),O=U();return h.cs.getEntries(C,g).next(D=>{k=D,k.forEach((G,K)=>{K.isValidDocument()||(O=O.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(D=>{w=D;const G=[];for(const K of u){const W=Kh(K,w.get(K.key).overlayedDocument);W!=null&&G.push(new xe(K.key,W,Ia(W.value.mapValue),Mt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,G,u)}).next(D=>{S=D;const G=D.applyToLocalDocumentSet(w,O);return h.documentOverlayCache.saveOverlays(C,D.batchId,G)})}).then(()=>({batchId:S.batchId,changes:Na(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new X(j)),f=f.insert(u,h),a.Ba[a.currentUser.toKey()]=f}(r,i.batchId,e),await En(r,i.changes),await Ar(r.remoteStore)}catch(i){const o=Gi(i,"Failed to persist write");e.reject(o)}}async function fc(n,t){const e=F(n);try{const r=await $d(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?z(a.va):i.removedDocuments.size>0&&(z(a.va),a.va=!1))}),await En(e,r,t)}catch(r){await ke(r)}}function qo(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=F(a);h.onlineState=u;let f=!1;h.queries.forEach((g,w)=>{for(const S of w.j_)S.Z_(u)&&(f=!0)}),f&&Ki(h)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Nf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new X(x.comparator);a=a.insert(o,pt.newNoDocument(o,L.min()));const u=U().add(o),h=new Ir(L.min(),new Map,new X(j),a,u);await fc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Hi(r)}else await Ii(r.localStore,t,!1).then(()=>Ai(r,t,e)).catch(ke)}async function Of(n,t){const e=F(n),r=t.batch.batchId;try{const i=await jd(e.localStore,t);pc(e,r,null),mc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await En(e,i)}catch(i){await ke(i)}}async function xf(n,t,e){const r=F(n);try{const i=await function(a,u){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,u).next(w=>(z(w!==null),g=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(r.localStore,t);pc(r,t,e),mc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await En(r,i)}catch(i){await ke(i)}}function mc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function pc(n,t,e){const r=F(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Ai(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||gc(n,r)})}function gc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Bi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Hi(n))}function jo(n,t,e){for(const r of e)r instanceof lc?(n.La.addReference(r.key,t),Mf(n,r)):r instanceof hc?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||gc(n,r.key)):M()}function Mf(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+e),n.xa.add(r),Hi(n))}function Hi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new x(Y.fromString(t)),r=n.qa.next();n.Na.set(r,new Rf(e)),n.Oa=n.Oa.insert(e,r),ic(n.remoteStore,new Kt(St(Pa(e.path)),r,"TargetPurposeLimboResolution",fr.oe))}}async function En(n,t,e){const r=F(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Ui.Wi(h.targetId,f);o.push(w)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(f,S=>R.forEach(S.$i,C=>g.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>R.forEach(S.Ui,C=>g.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!Ne(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const S=w.targetId;if(!w.fromCache){const C=g.os.get(S),k=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(k);g.os=g.os.insert(S,O)}}}(r.localStore,o))}async function Lf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await Za(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new N(b.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await En(e,r.hs)}}function Ff(n,t){const e=F(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let i=U();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const u=e.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function _c(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ff.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nf.bind(null,t),t.Ca.d_=vf.bind(null,t.eventManager),t.Ca.$a=Tf.bind(null,t.eventManager),t}function Uf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xf.bind(null,t),t}class sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ec(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return qd(this.persistence,new Ud,t.initialUser,this.serializer)}Ga(t){return new Ja(Fi.Zr,this.serializer)}Wa(t){return new Wd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sr.provider={build:()=>new sr};class Bf extends sr{constructor(t){super(),this.cacheSizeBytes=t}ja(t,e){z(this.persistence.referenceDelegate instanceof rr);const r=this.persistence.referenceDelegate.garbageCollector;return new Ad(r,t.asyncQueue,e)}Ga(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Ja(r=>rr.Zr(r,e),this.serializer)}}class Ri{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lf.bind(null,this.syncEngine),await pf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _f}()}createDatastore(t){const e=ec(t.databaseInfo.databaseId),r=function(o){return new Jd(o)}(t.databaseInfo);return function(o,a,u,h){return new ef(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,u){return new rf(r,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>qo(this.syncEngine,e,0),function(){return Mo.D()?new Mo:new Qd}())}createSyncEngine(t,e){return function(i,o,a,u,h,f,g){const w=new Sf(i,o,a,u,h,f);return g&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);V("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await yn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ri.provider={build:()=>new Ri};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Gi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ii(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Za(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function $o(n,t){n.asyncQueue.verifyOperationInProgress();const e=await $f(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Lo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Lo(t.remoteStore,i)),n._onlineComponents=t}async function $f(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await ii(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await ii(n,new sr)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await ii(n,new Bf(void 0));return n._offlineComponents}async function yc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await $o(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await $o(n,new Ri))),n._onlineComponents}function zf(n){return yc(n).then(t=>t.syncEngine)}async function Gf(n){const t=await yc(n),e=t.eventManager;return e.onListen=Cf.bind(null,t.syncEngine),e.onUnlisten=Vf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Df.bind(null,t.syncEngine),e}function Kf(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const g=new qf({next:S=>{g.Za(),a.enqueueAndForget(()=>Ef(o,w)),S.fromCache&&h.source==="server"?f.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(S)},error:S=>f.reject(S)}),w=new If(u,g,{includeMetadataChanges:!0,_a:!0});return yf(o,w)}(await Gf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hf(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Go(n){if(!x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ko(n){if(x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function or(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Wf(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ec((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ho({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ho(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xl;switch(r.type){case"firstParty":return new eh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=zo.get(e);r&&(V("ComponentProvider","Removing Datastore"),zo.delete(e),r.terminate())}(this),Promise.resolve()}}function Qf(n,t,e,r={}){var i;const o=(n=or(n,Rr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=mt.MOCK_USER;else{u=Uu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new mt(f)}n._authCredentials=new Jl(new Ea(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Sr(this.firestore,t,this._query)}}class Lt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lt(this.firestore,t,this._key)}}class Qt extends Sr{constructor(t,e,r){super(t,e,Pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lt(this.firestore,null,new x(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function jp(n,t,...e){if(n=dr(n),vc("collection","path",t),n instanceof Rr){const r=Y.fromString(t,...e);return Ko(r),new Qt(n,null,r)}{if(!(n instanceof Lt||n instanceof Qt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Ko(r),new Qt(n.firestore,null,r)}}function $p(n,t,...e){if(n=dr(n),arguments.length===1&&(t=va.newId()),vc("doc","path",t),n instanceof Rr){const r=Y.fromString(t,...e);return Go(r),new Lt(n,null,new x(r))}{if(!(n instanceof Lt||n instanceof Qt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Go(r),new Lt(n.firestore,n instanceof Qt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nc(this,"async_queue_retry"),this.Vu=()=>{const r=ri();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=ri();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Ne(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=zi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Wi extends Rr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Wo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wo(t),this._firestoreClient=void 0,await t}}}function zp(n,t){const e=typeof n=="object"?n:la(),r=typeof n=="string"?n:"(default)",i=gn(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Lu("firestore");o&&Qf(i,...o)}return i}function Tc(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yf(n),n._firestoreClient}function Yf(n){var t,e,r;const i=n._freezeSettings(),o=function(u,h,f,g){return new gh(u,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Ec(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ar(ct.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ar(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}const Zf=new RegExp("[~\\*/\\[\\]]");function tm(n,t,e){if(t.search(Zf)>=0)throw Qo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ic(...t.split("."))._internalPath}catch{throw Qo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Qo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new N(b.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new em(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ac("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class em extends wc{data(){return super.data()}}function Ac(n,t){return typeof t=="string"?tm(n,t):t instanceof Ic?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rm{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Oe(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Z(a.doubleValue));return new Jf(o)}convertGeoPoint(t){return new Xf(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=pr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new Et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);z(Xa(r));const i=new dn(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class im extends wc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ac("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Qn extends im{data(t={}){return super.data(t)}}class sm{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new $n(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Qn(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new Qn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new $n(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Qn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new $n(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:om(u.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function om(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class am extends rm{constructor(t){super(),this.firestore=t}convertBytes(t){return new ar(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lt(this.firestore,null,e)}}function Gp(n){n=or(n,Sr);const t=or(n.firestore,Wi),e=Tc(t),r=new am(t);return nm(n._query),Kf(e,n._query).then(i=>new sm(t,r,n,i))}function Kp(n){return cm(or(n.firestore,Wi),[new Oi(n._key,Mt.none())])}function cm(n,t){return function(r,i){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>kf(await zf(r),i,o)),o.promise}(Tc(n),t)}(function(t,e=!0){(function(i){De=i})(Bl),Yt(new Ft("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Wi(new Zl(r.getProvider("auth-internal")),new rh(r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(f.options.projectId,g)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),xt(uo,"4.7.4",t),xt(uo,"4.7.4","esm2017")})();const Rc="@firebase/installations",Qi="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=1e4,Cc=`w:${Qi}`,bc="FIS_v2",um="https://firebaseinstallations.googleapis.com/v1",lm=60*60*1e3,hm="installations",dm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},de=new hr(hm,dm,fm);function Pc(n){return n instanceof ne&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc({projectId:n}){return`${um}/projects/${n}/installations`}function Dc(n){return{token:n.token,requestStatus:2,expiresIn:pm(n.expiresIn),creationTime:Date.now()}}async function kc(n,t){const r=(await t.json()).error;return de.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function mm(n,{refreshToken:t}){const e=Nc(n);return e.append("Authorization",gm(t)),e}async function Oc(n){const t=await n();return t.status>=500&&t.status<600?n():t}function pm(n){return Number(n.replace("s","000"))}function gm(n){return`${bc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Vc(n),i=Nc(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:e,authVersion:bc,appId:n.appId,sdkVersion:Cc},u={method:"POST",headers:i,body:JSON.stringify(a)},h=await Oc(()=>fetch(r,u));if(h.ok){const f=await h.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:Dc(f.authToken)}}else throw await kc("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=/^[cdef][\w-]{21}$/,Si="";function vm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Tm(n);return Em.test(e)?e:Si}catch{return Si}}function Tm(n){return ym(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;function Lc(n,t){const e=Cr(n);Fc(e,t),Im(e,t)}function Fc(n,t){const e=Mc.get(n);if(e)for(const r of e)r(t)}function Im(n,t){const e=wm();e&&e.postMessage({key:n,fid:t}),Am()}let ue=null;function wm(){return!ue&&"BroadcastChannel"in self&&(ue=new BroadcastChannel("[Firebase] FID Change"),ue.onmessage=n=>{Fc(n.data.key,n.data.fid)}),ue}function Am(){Mc.size===0&&ue&&(ue.close(),ue=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firebase-installations-database",Sm=1,fe="firebase-installations-store";let si=null;function Yi(){return si||(si=ia(Rm,Sm,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(fe)}}})),si}async function cr(n,t){const e=Cr(n),i=(await Yi()).transaction(fe,"readwrite"),o=i.objectStore(fe),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&Lc(n,t.fid),t}async function Uc(n){const t=Cr(n),r=(await Yi()).transaction(fe,"readwrite");await r.objectStore(fe).delete(t),await r.done}async function br(n,t){const e=Cr(n),i=(await Yi()).transaction(fe,"readwrite"),o=i.objectStore(fe),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await i.done,u&&(!a||a.fid!==u.fid)&&Lc(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(n){let t;const e=await br(n.appConfig,r=>{const i=Cm(r),o=bm(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===Si?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Cm(n){const t=n||{fid:vm(),registrationStatus:0};return Bc(t)}function bm(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(de.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Pm(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Vm(n)}:{installationEntry:t}}async function Pm(n,t){try{const e=await _m(n,t);return cr(n.appConfig,e)}catch(e){throw Pc(e)&&e.customData.serverCode===409?await Uc(n.appConfig):await cr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Vm(n){let t=await Yo(n.appConfig);for(;t.registrationStatus===1;)await xc(100),t=await Yo(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Xi(n);return r||e}return t}function Yo(n){return br(n,t=>{if(!t)throw de.create("installation-not-found");return Bc(t)})}function Bc(n){return Dm(n)?{fid:n.fid,registrationStatus:0}:n}function Dm(n){return n.registrationStatus===1&&n.registrationTime+Sc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km({appConfig:n,heartbeatServiceProvider:t},e){const r=Nm(n,e),i=mm(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:Cc,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},h=await Oc(()=>fetch(r,u));if(h.ok){const f=await h.json();return Dc(f)}else throw await kc("Generate Auth Token",h)}function Nm(n,{fid:t}){return`${Vc(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n,t=!1){let e;const r=await br(n.appConfig,o=>{if(!qc(o))throw de.create("not-registered");const a=o.authToken;if(!t&&Mm(a))return o;if(a.requestStatus===1)return e=Om(n,t),o;{if(!navigator.onLine)throw de.create("app-offline");const u=Fm(o);return e=xm(n,u),u}});return e?await e:r.authToken}async function Om(n,t){let e=await Xo(n.appConfig);for(;e.authToken.requestStatus===1;)await xc(100),e=await Xo(n.appConfig);const r=e.authToken;return r.requestStatus===0?Ji(n,t):r}function Xo(n){return br(n,t=>{if(!qc(t))throw de.create("not-registered");const e=t.authToken;return Um(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function xm(n,t){try{const e=await km(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await cr(n.appConfig,r),e}catch(e){if(Pc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Uc(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await cr(n.appConfig,r)}throw e}}function qc(n){return n!==void 0&&n.registrationStatus===2}function Mm(n){return n.requestStatus===2&&!Lm(n)}function Lm(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+lm}function Fm(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Um(n){return n.requestStatus===1&&n.requestTime+Sc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(n){const t=n,{installationEntry:e,registrationPromise:r}=await Xi(t);return r?r.catch(console.error):Ji(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n,t=!1){const e=n;return await jm(e),(await Ji(e,t)).token}async function jm(n){const{registrationPromise:t}=await Xi(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n){if(!n||!n.options)throw oi("App Configuration");if(!n.name)throw oi("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw oi(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function oi(n){return de.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="installations",zm="installations-internal",Gm=n=>{const t=n.getProvider("app").getImmediate(),e=$m(t),r=gn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Km=n=>{const t=n.getProvider("app").getImmediate(),e=gn(t,jc).getImmediate();return{getId:()=>Bm(e),getToken:i=>qm(e,i)}};function Hm(){Yt(new Ft(jc,Gm,"PUBLIC")),Yt(new Ft(zm,Km,"PRIVATE"))}Hm();xt(Rc,Qi);xt(Rc,Qi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="analytics",Wm="firebase_id",Qm="origin",Ym=60*1e3,Xm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new bi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new hr("analytics","Analytics",Jm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){if(!n.startsWith(Zi)){const t=wt.create("invalid-gtag-resource",{gtagURL:n});return Tt.warn(t.message),""}return n}function $c(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function tp(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function ep(n,t){const e=tp("firebase-js-sdk-policy",{createScriptURL:Zm}),r=document.createElement("script"),i=`${Zi}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function np(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function rp(n,t,e,r,i,o){const a=r[i];try{if(a)await t[a];else{const h=(await $c(e)).find(f=>f.measurementId===i);h&&await t[h.appId]}}catch(u){Tt.error(u)}n("config",i,o)}async function ip(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await $c(e);for(const h of a){const f=u.find(w=>w.measurementId===h),g=f&&t[f.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){Tt.error(o)}}function sp(n,t,e,r){async function i(o,...a){try{if(o==="event"){const[u,h]=a;await ip(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await rp(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,f]=a;n("get",u,h,f)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){Tt.error(u)}}return i}function op(n,t,e,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=sp(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function ap(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Zi)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=30,up=1e3;class lp{constructor(t={},e=up){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zc=new lp;function hp(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function dp(n){var t;const{appId:e,apiKey:r}=n,i={method:"GET",headers:hp(r)},o=Xm.replace("{app-id}",e),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function fp(n,t=zc,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw wt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw wt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new gp;return setTimeout(async()=>{u.abort()},Ym),Gc({appId:r,apiKey:i,measurementId:o},a,u,t)}async function Gc(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=zc){var o;const{appId:a,measurementId:u}=n;try{await mp(r,t)}catch(h){if(u)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await dp(n);return i.deleteThrottleMetadata(a),h}catch(h){const f=h;if(!pp(f)){if(i.deleteThrottleMetadata(a),u)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:u};throw h}const g=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?no(e,i.intervalMillis,cp):no(e,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+g,backoffCount:e+1};return i.setThrottleMetadata(a,w),Tt.debug(`Calling attemptFetch again in ${g} millis`),Gc(n,w,r,i)}}function mp(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(wt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function pp(n){if(!(n instanceof ne)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class gp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function _p(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(){if(ca())try{await ua()}catch(n){return Tt.warn(wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Tt.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ep(n,t,e,r,i,o,a){var u;const h=fp(n);h.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Tt.error(C)),t.push(h);const f=yp().then(C=>{if(C)return r.getId()}),[g,w]=await Promise.all([h,f]);ap(o)||ep(o,g.measurementId),i("js",new Date);const S=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return S[Qm]="firebase",S.update=!0,w!=null&&(S[Wm]=w),i("config",g.measurementId,S),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t){this.app=t}_delete(){return delete cn[this.app.options.appId],Promise.resolve()}}let cn={},Jo=[];const Zo={};let ai="dataLayer",Tp="gtag",ta,Kc,ea=!1;function Ip(){const n=[];if(qu()&&n.push("This is a browser extension environment."),$u()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=wt.create("invalid-analytics-context",{errorInfo:t});Tt.warn(e.message)}}function wp(n,t,e){Ip();const r=n.options.appId;if(!r)throw wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(cn[r]!=null)throw wt.create("already-exists",{id:r});if(!ea){np(ai);const{wrappedGtag:o,gtagCore:a}=op(cn,Jo,Zo,ai,Tp);Kc=o,ta=a,ea=!0}return cn[r]=Ep(n,Jo,Zo,t,ta,ai,e),new vp(n)}function Hp(n=la()){n=dr(n);const t=gn(n,ur);return t.isInitialized()?t.getImmediate():Ap(n)}function Ap(n,t={}){const e=gn(n,ur);if(e.isInitialized()){const i=e.getImmediate();if(Xn(t,e.getOptions()))return i;throw wt.create("already-initialized")}return e.initialize({options:t})}function Rp(n,t,e,r){n=dr(n),_p(Kc,cn[n.app.options.appId],t,e,r).catch(i=>Tt.error(i))}const na="@firebase/analytics",ra="0.10.9";function Sp(){Yt(new Ft(ur,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return wp(r,i,e)},"PUBLIC")),Yt(new Ft("analytics-internal",n,"PRIVATE")),xt(na,ra),xt(na,ra,"esm2017");function n(t){try{const e=t.getProvider(ur).getImmediate();return{logEvent:(r,i,o)=>Rp(e,r,i,o)}}catch(e){throw wt.create("interop-component-reg-failed",{reason:e})}}}Sp();export{Kp as A,$p as B,Ft as C,hr as E,ne as F,bi as L,Bl as S,Yt as _,Dp as a,gn as b,Mu as c,la as d,qu as e,Fp as f,bp as g,dr as h,Pp as i,Lp as j,Xn as k,q as l,Ci as m,Mp as n,Du as o,kp as p,xp as q,xt as r,Op as s,Vp as t,Np as u,ql as v,zp as w,Hp as x,Gp as y,jp as z};
