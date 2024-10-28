import{o as Bi}from"./idb-BXWtuYvb.js";var mi={};/**
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
 */const $i=function(i){const e=[];let r=0;for(let a=0;a<i.length;a++){let h=i.charCodeAt(a);h<128?e[r++]=h:h<2048?(e[r++]=h>>6|192,e[r++]=h&63|128):(h&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(h=65536+((h&1023)<<10)+(i.charCodeAt(++a)&1023),e[r++]=h>>18|240,e[r++]=h>>12&63|128,e[r++]=h>>6&63|128,e[r++]=h&63|128):(e[r++]=h>>12|224,e[r++]=h>>6&63|128,e[r++]=h&63|128)}return e},or=function(i){const e=[];let r=0,a=0;for(;r<i.length;){const h=i[r++];if(h<128)e[a++]=String.fromCharCode(h);else if(h>191&&h<224){const d=i[r++];e[a++]=String.fromCharCode((h&31)<<6|d&63)}else if(h>239&&h<365){const d=i[r++],v=i[r++],E=i[r++],T=((h&7)<<18|(d&63)<<12|(v&63)<<6|E&63)-65536;e[a++]=String.fromCharCode(55296+(T>>10)),e[a++]=String.fromCharCode(56320+(T&1023))}else{const d=i[r++],v=i[r++];e[a++]=String.fromCharCode((h&15)<<12|(d&63)<<6|v&63)}}return e.join("")},Hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let h=0;h<i.length;h+=3){const d=i[h],v=h+1<i.length,E=v?i[h+1]:0,T=h+2<i.length,A=T?i[h+2]:0,k=d>>2,P=(d&3)<<4|E>>4;let D=(E&15)<<2|A>>6,N=A&63;T||(N=64,v||(D=64)),a.push(r[k],r[P],r[D],r[N])}return a.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray($i(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):or(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let h=0;h<i.length;){const d=r[i.charAt(h++)],E=h<i.length?r[i.charAt(h)]:0;++h;const A=h<i.length?r[i.charAt(h)]:64;++h;const P=h<i.length?r[i.charAt(h)]:64;if(++h,d==null||E==null||A==null||P==null)throw new ar;const D=d<<2|E>>4;if(a.push(D),A!==64){const N=E<<4&240|A>>2;if(a.push(N),P!==64){const S=A<<6&192|P;a.push(S)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ar extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hr=function(i){const e=$i(i);return Hi.encodeByteArray(e,!0)},me=function(i){return hr(i).replace(/\./g,"")},lr=function(i){try{return Hi.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ur=()=>cr().__FIREBASE_DEFAULTS__,fr=()=>{if(typeof process>"u"||typeof mi>"u")return;const i=mi.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},dr=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&lr(i[1]);return e&&JSON.parse(e)},hn=()=>{try{return ur()||fr()||dr()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},pr=i=>{var e,r;return(r=(e=hn())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[i]},gr=i=>{const e=pr(i);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),a]:[e.substring(0,r),a]},Vi=()=>{var i;return(i=hn())===null||i===void 0?void 0:i.config},lh=i=>{var e;return(e=hn())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,a))}}}/**
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
 */function yr(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=e||"demo-project",h=i.iat||0,d=i.sub||i.user_id;if(!d)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const v=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:h,exp:h+3600,auth_time:h,sub:d,user_id:d,firebase:{sign_in_provider:"custom",identities:{}}},i);return[me(JSON.stringify(r)),me(JSON.stringify(v)),""].join(".")}/**
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
 */function zi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zi())}function uh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vr(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function fh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dh(){const i=zi();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Gi(){try{return typeof indexedDB=="object"}catch{return!1}}function qi(){return new Promise((i,e)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(a);h.onsuccess=()=>{h.result.close(),r||self.indexedDB.deleteDatabase(a),i(!0)},h.onupgradeneeded=()=>{r=!1},h.onerror=()=>{var d;e(((d=h.error)===null||d===void 0?void 0:d.message)||"")}}catch(r){e(r)}})}function wr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Er="FirebaseError";class pt extends Error{constructor(e,r,a){super(r),this.code=e,this.customData=a,this.name=Er,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Te.prototype.create)}}class Te{constructor(e,r,a){this.service=e,this.serviceName=r,this.errors=a}create(e,...r){const a=r[0]||{},h=`${this.service}/${e}`,d=this.errors[e],v=d?Ir(d,a):"Error",E=`${this.serviceName}: ${v} (${h}).`;return new pt(h,E,a)}}function Ir(i,e){return i.replace(Tr,(r,a)=>{const h=e[a];return h!=null?String(h):`<${a}?>`})}const Tr=/\{\$([^}]+)}/g;function ph(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ye(i,e){if(i===e)return!0;const r=Object.keys(i),a=Object.keys(e);for(const h of r){if(!a.includes(h))return!1;const d=i[h],v=e[h];if(yi(d)&&yi(v)){if(!ye(d,v))return!1}else if(d!==v)return!1}for(const h of a)if(!r.includes(h))return!1;return!0}function yi(i){return i!==null&&typeof i=="object"}/**
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
 */function gh(i){const e=[];for(const[r,a]of Object.entries(i))Array.isArray(a)?a.forEach(h=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function mh(i){const e={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[h,d]=a.split("=");e[decodeURIComponent(h)]=decodeURIComponent(d)}}),e}function yh(i){const e=i.indexOf("?");if(!e)return"";const r=i.indexOf("#",e);return i.substring(e,r>0?r:void 0)}function vh(i,e){const r=new Ar(i,e);return r.subscribe.bind(r)}class Ar{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,a){let h;if(e===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");_r(e,["next","error","complete"])?h=e:h={next:e,error:r,complete:a},h.next===void 0&&(h.next=Je),h.error===void 0&&(h.error=Je),h.complete===void 0&&(h.complete=Je);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?h.error(this.finalError):h.complete()}catch{}}),this.observers.push(h),d}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _r(i,e){if(typeof i!="object"||i===null)return!1;for(const r of e)if(r in i&&typeof i[r]=="function")return!0;return!1}function Je(){}/**
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
 */const br=1e3,Sr=2,Cr=4*60*60*1e3,Dr=.5;function vi(i,e=br,r=Sr){const a=e*Math.pow(r,i),h=Math.round(Dr*a*(Math.random()-.5)*2);return Math.min(Cr,a+h)}/**
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
 */function Ki(i){return i&&i._delegate?i._delegate:i}class rt{constructor(e,r,a){this.name=e,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vt="[DEFAULT]";/**
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
 */class Rr{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const a=new mr;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:r});h&&a.resolve(h)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),h=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(d){if(h)return null;throw d}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pr(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(r);try{const d=this.getOrInitializeService({instanceIdentifier:h});a.resolve(d)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[d,v]of this.instancesDeferred.entries()){const E=this.normalizeInstanceIdentifier(d);a===E&&v.resolve(h)}return h}onInit(e,r){var a;const h=this.normalizeInstanceIdentifier(r),d=(a=this.onInitCallbacks.get(h))!==null&&a!==void 0?a:new Set;d.add(e),this.onInitCallbacks.set(h,d);const v=this.instances.get(h);return v&&e(v,h),()=>{d.delete(e)}}invokeOnInitCallbacks(e,r){const a=this.onInitCallbacks.get(r);if(a)for(const h of a)try{h(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Or(e),options:r}),this.instances.set(e,a),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Or(i){return i===vt?void 0:i}function Pr(i){return i.instantiationMode==="EAGER"}/**
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
 */class kr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Rr(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var C;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(C||(C={}));const Nr={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Lr=C.INFO,Mr={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},xr=(i,e,...r)=>{if(e<i.logLevel)return;const a=new Date().toISOString(),h=Mr[e];if(h)console[h](`[${a}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ln{constructor(e){this.name=e,this._logLevel=Lr,this._logHandler=xr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}/**
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
 */class jr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Fr(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function Fr(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sn="@firebase/app",wi="0.10.15";/**
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
 */const ot=new ln("@firebase/app"),Ur="@firebase/app-compat",Br="@firebase/analytics-compat",$r="@firebase/analytics",Hr="@firebase/app-check-compat",Vr="@firebase/app-check",zr="@firebase/auth",Gr="@firebase/auth-compat",qr="@firebase/database",Kr="@firebase/data-connect",Xr="@firebase/database-compat",Wr="@firebase/functions",Yr="@firebase/functions-compat",Jr="@firebase/installations",Qr="@firebase/installations-compat",Zr="@firebase/messaging",to="@firebase/messaging-compat",eo="@firebase/performance",no="@firebase/performance-compat",io="@firebase/remote-config",so="@firebase/remote-config-compat",ro="@firebase/storage",oo="@firebase/storage-compat",ao="@firebase/firestore",ho="@firebase/vertexai",lo="@firebase/firestore-compat",co="firebase",uo="11.0.1";/**
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
 */const rn="[DEFAULT]",fo={[sn]:"fire-core",[Ur]:"fire-core-compat",[$r]:"fire-analytics",[Br]:"fire-analytics-compat",[Vr]:"fire-app-check",[Hr]:"fire-app-check-compat",[zr]:"fire-auth",[Gr]:"fire-auth-compat",[qr]:"fire-rtdb",[Kr]:"fire-data-connect",[Xr]:"fire-rtdb-compat",[Wr]:"fire-fn",[Yr]:"fire-fn-compat",[Jr]:"fire-iid",[Qr]:"fire-iid-compat",[Zr]:"fire-fcm",[to]:"fire-fcm-compat",[eo]:"fire-perf",[no]:"fire-perf-compat",[io]:"fire-rc",[so]:"fire-rc-compat",[ro]:"fire-gcs",[oo]:"fire-gcs-compat",[ao]:"fire-fst",[lo]:"fire-fst-compat",[ho]:"fire-vertex","fire-js":"fire-js",[co]:"fire-js-all"};/**
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
 */const ve=new Map,po=new Map,on=new Map;function Ei(i,e){try{i.container.addComponent(e)}catch(r){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,r)}}function dt(i){const e=i.name;if(on.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;on.set(e,i);for(const r of ve.values())Ei(r,i);for(const r of po.values())Ei(r,i);return!0}function Yt(i,e){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(e)}function wh(i){return i.settings!==void 0}/**
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
 */const go={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ft=new Te("app","Firebase",go);/**
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
 */class mo{constructor(e,r,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=uo;function vo(i,e={}){let r=i;typeof e!="object"&&(e={name:e});const a=Object.assign({name:rn,automaticDataCollectionEnabled:!1},e),h=a.name;if(typeof h!="string"||!h)throw ft.create("bad-app-name",{appName:String(h)});if(r||(r=Vi()),!r)throw ft.create("no-options");const d=ve.get(h);if(d){if(ye(r,d.options)&&ye(a,d.config))return d;throw ft.create("duplicate-app",{appName:h})}const v=new kr(h);for(const T of on.values())v.addComponent(T);const E=new mo(r,a,v);return ve.set(h,E),E}function Xi(i=rn){const e=ve.get(i);if(!e&&i===rn&&Vi())return vo();if(!e)throw ft.create("no-app",{appName:i});return e}function st(i,e,r){var a;let h=(a=fo[i])!==null&&a!==void 0?a:i;r&&(h+=`-${r}`);const d=h.match(/\s|\//),v=e.match(/\s|\//);if(d||v){const E=[`Unable to register library "${h}" with version "${e}":`];d&&E.push(`library name "${h}" contains illegal characters (whitespace or "/")`),d&&v&&E.push("and"),v&&E.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(E.join(" "));return}dt(new rt(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
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
 */const wo="firebase-heartbeat-database",Eo=1,Wt="firebase-heartbeat-store";let Qe=null;function Wi(){return Qe||(Qe=Bi(wo,Eo,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Wt)}catch(r){console.warn(r)}}}}).catch(i=>{throw ft.create("idb-open",{originalErrorMessage:i.message})})),Qe}async function Io(i){try{const r=(await Wi()).transaction(Wt),a=await r.objectStore(Wt).get(Yi(i));return await r.done,a}catch(e){if(e instanceof pt)ot.warn(e.message);else{const r=ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(r.message)}}}async function Ii(i,e){try{const a=(await Wi()).transaction(Wt,"readwrite");await a.objectStore(Wt).put(e,Yi(i)),await a.done}catch(r){if(r instanceof pt)ot.warn(r.message);else{const a=ft.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ot.warn(a.message)}}}function Yi(i){return`${i.name}!${i.options.appId}`}/**
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
 */const To=1024,Ao=30*24*60*60*1e3;class _o{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new So(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,r;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),d=Ti();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===d||this._heartbeatsCache.heartbeats.some(v=>v.date===d)?void 0:(this._heartbeatsCache.heartbeats.push({date:d,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(v=>{const E=new Date(v.date).valueOf();return Date.now()-E<=Ao}),this._storage.overwrite(this._heartbeatsCache))}catch(a){ot.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Ti(),{heartbeatsToSend:a,unsentEntries:h}=bo(this._heartbeatsCache.heartbeats),d=me(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}catch(r){return ot.warn(r),""}}}function Ti(){return new Date().toISOString().substring(0,10)}function bo(i,e=To){const r=[];let a=i.slice();for(const h of i){const d=r.find(v=>v.agent===h.agent);if(d){if(d.dates.push(h.date),Ai(r)>e){d.dates.pop();break}}else if(r.push({agent:h.agent,dates:[h.date]}),Ai(r)>e){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class So{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gi()?qi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Io(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const h=await this.read();return Ii(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const h=await this.read();return Ii(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function Ai(i){return me(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Co(i){dt(new rt("platform-logger",e=>new jr(e),"PRIVATE")),dt(new rt("heartbeat",e=>new _o(e),"PRIVATE")),st(sn,wi,i),st(sn,wi,"esm2017"),st("fire-js","")}Co("");var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ji;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function u(){}u.prototype=l.prototype,g.D=l.prototype,g.prototype=new u,g.prototype.constructor=g,g.C=function(f,p,y){for(var c=Array(arguments.length-2),et=2;et<arguments.length;et++)c[et-2]=arguments[et];return l.prototype[p].apply(f,c)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,r),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(g,l,u){u||(u=0);var f=Array(16);if(typeof l=="string")for(var p=0;16>p;++p)f[p]=l.charCodeAt(u++)|l.charCodeAt(u++)<<8|l.charCodeAt(u++)<<16|l.charCodeAt(u++)<<24;else for(p=0;16>p;++p)f[p]=l[u++]|l[u++]<<8|l[u++]<<16|l[u++]<<24;l=g.g[0],u=g.g[1],p=g.g[2];var y=g.g[3],c=l+(y^u&(p^y))+f[0]+3614090360&4294967295;l=u+(c<<7&4294967295|c>>>25),c=y+(p^l&(u^p))+f[1]+3905402710&4294967295,y=l+(c<<12&4294967295|c>>>20),c=p+(u^y&(l^u))+f[2]+606105819&4294967295,p=y+(c<<17&4294967295|c>>>15),c=u+(l^p&(y^l))+f[3]+3250441966&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(y^u&(p^y))+f[4]+4118548399&4294967295,l=u+(c<<7&4294967295|c>>>25),c=y+(p^l&(u^p))+f[5]+1200080426&4294967295,y=l+(c<<12&4294967295|c>>>20),c=p+(u^y&(l^u))+f[6]+2821735955&4294967295,p=y+(c<<17&4294967295|c>>>15),c=u+(l^p&(y^l))+f[7]+4249261313&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(y^u&(p^y))+f[8]+1770035416&4294967295,l=u+(c<<7&4294967295|c>>>25),c=y+(p^l&(u^p))+f[9]+2336552879&4294967295,y=l+(c<<12&4294967295|c>>>20),c=p+(u^y&(l^u))+f[10]+4294925233&4294967295,p=y+(c<<17&4294967295|c>>>15),c=u+(l^p&(y^l))+f[11]+2304563134&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(y^u&(p^y))+f[12]+1804603682&4294967295,l=u+(c<<7&4294967295|c>>>25),c=y+(p^l&(u^p))+f[13]+4254626195&4294967295,y=l+(c<<12&4294967295|c>>>20),c=p+(u^y&(l^u))+f[14]+2792965006&4294967295,p=y+(c<<17&4294967295|c>>>15),c=u+(l^p&(y^l))+f[15]+1236535329&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(p^y&(u^p))+f[1]+4129170786&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^p&(l^u))+f[6]+3225465664&4294967295,y=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(y^l))+f[11]+643717713&4294967295,p=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(p^y))+f[0]+3921069994&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^y&(u^p))+f[5]+3593408605&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^p&(l^u))+f[10]+38016083&4294967295,y=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(y^l))+f[15]+3634488961&4294967295,p=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(p^y))+f[4]+3889429448&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^y&(u^p))+f[9]+568446438&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^p&(l^u))+f[14]+3275163606&4294967295,y=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(y^l))+f[3]+4107603335&4294967295,p=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(p^y))+f[8]+1163531501&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^y&(u^p))+f[13]+2850285829&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^p&(l^u))+f[2]+4243563512&4294967295,y=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(y^l))+f[7]+1735328473&4294967295,p=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(p^y))+f[12]+2368359562&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(u^p^y)+f[5]+4294588738&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^p)+f[8]+2272392833&4294967295,y=l+(c<<11&4294967295|c>>>21),c=p+(y^l^u)+f[11]+1839030562&4294967295,p=y+(c<<16&4294967295|c>>>16),c=u+(p^y^l)+f[14]+4259657740&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^y)+f[1]+2763975236&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^p)+f[4]+1272893353&4294967295,y=l+(c<<11&4294967295|c>>>21),c=p+(y^l^u)+f[7]+4139469664&4294967295,p=y+(c<<16&4294967295|c>>>16),c=u+(p^y^l)+f[10]+3200236656&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^y)+f[13]+681279174&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^p)+f[0]+3936430074&4294967295,y=l+(c<<11&4294967295|c>>>21),c=p+(y^l^u)+f[3]+3572445317&4294967295,p=y+(c<<16&4294967295|c>>>16),c=u+(p^y^l)+f[6]+76029189&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^y)+f[9]+3654602809&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^p)+f[12]+3873151461&4294967295,y=l+(c<<11&4294967295|c>>>21),c=p+(y^l^u)+f[15]+530742520&4294967295,p=y+(c<<16&4294967295|c>>>16),c=u+(p^y^l)+f[2]+3299628645&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(p^(u|~y))+f[0]+4096336452&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~p))+f[7]+1126891415&4294967295,y=l+(c<<10&4294967295|c>>>22),c=p+(l^(y|~u))+f[14]+2878612391&4294967295,p=y+(c<<15&4294967295|c>>>17),c=u+(y^(p|~l))+f[5]+4237533241&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~y))+f[12]+1700485571&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~p))+f[3]+2399980690&4294967295,y=l+(c<<10&4294967295|c>>>22),c=p+(l^(y|~u))+f[10]+4293915773&4294967295,p=y+(c<<15&4294967295|c>>>17),c=u+(y^(p|~l))+f[1]+2240044497&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~y))+f[8]+1873313359&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~p))+f[15]+4264355552&4294967295,y=l+(c<<10&4294967295|c>>>22),c=p+(l^(y|~u))+f[6]+2734768916&4294967295,p=y+(c<<15&4294967295|c>>>17),c=u+(y^(p|~l))+f[13]+1309151649&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~y))+f[4]+4149444226&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~p))+f[11]+3174756917&4294967295,y=l+(c<<10&4294967295|c>>>22),c=p+(l^(y|~u))+f[2]+718787259&4294967295,p=y+(c<<15&4294967295|c>>>17),c=u+(y^(p|~l))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(p+(c<<21&4294967295|c>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+y&4294967295}a.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var u=l-this.blockSize,f=this.B,p=this.h,y=0;y<l;){if(p==0)for(;y<=u;)h(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<l;)if(f[p++]=g.charCodeAt(y++),p==this.blockSize){h(this,f),p=0;break}}else for(;y<l;)if(f[p++]=g[y++],p==this.blockSize){h(this,f),p=0;break}}this.h=p,this.o+=l},a.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var u=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=u&255,u/=256;for(this.u(g),g=Array(16),l=u=0;4>l;++l)for(var f=0;32>f;f+=8)g[u++]=this.g[l]>>>f&255;return g};function d(g,l){var u=E;return Object.prototype.hasOwnProperty.call(u,g)?u[g]:u[g]=l(g)}function v(g,l){this.h=l;for(var u=[],f=!0,p=g.length-1;0<=p;p--){var y=g[p]|0;f&&y==l||(u[p]=y,f=!1)}this.g=u}var E={};function T(g){return-128<=g&&128>g?d(g,function(l){return new v([l|0],0>l?-1:0)}):new v([g|0],0>g?-1:0)}function A(g){if(isNaN(g)||!isFinite(g))return P;if(0>g)return M(A(-g));for(var l=[],u=1,f=0;g>=u;f++)l[f]=g/u|0,u*=4294967296;return new v(l,0)}function k(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return M(k(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=A(Math.pow(l,8)),f=P,p=0;p<g.length;p+=8){var y=Math.min(8,g.length-p),c=parseInt(g.substring(p,p+y),l);8>y?(y=A(Math.pow(l,y)),f=f.j(y).add(A(c))):(f=f.j(u),f=f.add(A(c)))}return f}var P=T(0),D=T(1),N=T(16777216);i=v.prototype,i.m=function(){if(j(this))return-M(this).m();for(var g=0,l=1,u=0;u<this.g.length;u++){var f=this.i(u);g+=(0<=f?f:4294967296+f)*l,l*=4294967296}return g},i.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S(this))return"0";if(j(this))return"-"+M(this).toString(g);for(var l=A(Math.pow(g,6)),u=this,f="";;){var p=at(u,l).g;u=Tt(u,p.j(l));var y=((0<u.g.length?u.g[0]:u.h)>>>0).toString(g);if(u=p,S(u))return y+f;for(;6>y.length;)y="0"+y;f=y+f}},i.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function S(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function j(g){return g.h==-1}i.l=function(g){return g=Tt(this,g),j(g)?-1:S(g)?0:1};function M(g){for(var l=g.g.length,u=[],f=0;f<l;f++)u[f]=~g.g[f];return new v(u,~g.h).add(D)}i.abs=function(){return j(this)?M(this):this},i.add=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0,p=0;p<=l;p++){var y=f+(this.i(p)&65535)+(g.i(p)&65535),c=(y>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);f=c>>>16,y&=65535,c&=65535,u[p]=c<<16|y}return new v(u,u[u.length-1]&-2147483648?-1:0)};function Tt(g,l){return g.add(M(l))}i.j=function(g){if(S(this)||S(g))return P;if(j(this))return j(g)?M(this).j(M(g)):M(M(this).j(g));if(j(g))return M(this.j(M(g)));if(0>this.l(N)&&0>g.l(N))return A(this.m()*g.m());for(var l=this.g.length+g.g.length,u=[],f=0;f<2*l;f++)u[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<g.g.length;p++){var y=this.i(f)>>>16,c=this.i(f)&65535,et=g.i(p)>>>16,Rt=g.i(p)&65535;u[2*f+2*p]+=c*Rt,Z(u,2*f+2*p),u[2*f+2*p+1]+=y*Rt,Z(u,2*f+2*p+1),u[2*f+2*p+1]+=c*et,Z(u,2*f+2*p+1),u[2*f+2*p+2]+=y*et,Z(u,2*f+2*p+2)}for(f=0;f<l;f++)u[f]=u[2*f+1]<<16|u[2*f];for(f=l;f<2*l;f++)u[f]=0;return new v(u,0)};function Z(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function W(g,l){this.g=g,this.h=l}function at(g,l){if(S(l))throw Error("division by zero");if(S(g))return new W(P,P);if(j(g))return l=at(M(g),l),new W(M(l.g),M(l.h));if(j(l))return l=at(g,M(l)),new W(M(l.g),l.h);if(30<g.g.length){if(j(g)||j(l))throw Error("slowDivide_ only works with positive integers.");for(var u=D,f=l;0>=f.l(g);)u=Qt(u),f=Qt(f);var p=tt(u,1),y=tt(f,1);for(f=tt(f,2),u=tt(u,2);!S(f);){var c=y.add(f);0>=c.l(g)&&(p=p.add(u),y=c),f=tt(f,1),u=tt(u,1)}return l=Tt(g,p.j(l)),new W(p,l)}for(p=P;0<=g.l(l);){for(u=Math.max(1,Math.floor(g.m()/l.m())),f=Math.ceil(Math.log(u)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),y=A(u),c=y.j(l);j(c)||0<c.l(g);)u-=f,y=A(u),c=y.j(l);S(y)&&(y=D),p=p.add(y),g=Tt(g,c)}return new W(p,g)}i.A=function(g){return at(this,g).h},i.and=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0;f<l;f++)u[f]=this.i(f)&g.i(f);return new v(u,this.h&g.h)},i.or=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0;f<l;f++)u[f]=this.i(f)|g.i(f);return new v(u,this.h|g.h)},i.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0;f<l;f++)u[f]=this.i(f)^g.i(f);return new v(u,this.h^g.h)};function Qt(g){for(var l=g.g.length+1,u=[],f=0;f<l;f++)u[f]=g.i(f)<<1|g.i(f-1)>>>31;return new v(u,g.h)}function tt(g,l){var u=l>>5;l%=32;for(var f=g.g.length-u,p=[],y=0;y<f;y++)p[y]=0<l?g.i(y+u)>>>l|g.i(y+u+1)<<32-l:g.i(y+u);return new v(p,g.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,v.prototype.add=v.prototype.add,v.prototype.multiply=v.prototype.j,v.prototype.modulo=v.prototype.A,v.prototype.compare=v.prototype.l,v.prototype.toNumber=v.prototype.m,v.prototype.toString=v.prototype.toString,v.prototype.getBits=v.prototype.i,v.fromNumber=A,v.fromString=k,Ji=v}).apply(typeof _i<"u"?_i:typeof self<"u"?self:typeof window<"u"?window:{});var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,n,s){return t==Array.prototype||t==Object.prototype||(t[n]=s.value),t};function r(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ge=="object"&&ge];for(var n=0;n<t.length;++n){var s=t[n];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}var a=r(this);function h(t,n){if(n)t:{var s=a;t=t.split(".");for(var o=0;o<t.length-1;o++){var m=t[o];if(!(m in s))break t;s=s[m]}t=t[t.length-1],o=s[t],n=n(o),n!=o&&n!=null&&e(s,t,{configurable:!0,writable:!0,value:n})}}function d(t,n){t instanceof String&&(t+="");var s=0,o=!1,m={next:function(){if(!o&&s<t.length){var w=s++;return{value:n(w,t[w]),done:!1}}return o=!0,{done:!0,value:void 0}}};return m[Symbol.iterator]=function(){return m},m}h("Array.prototype.values",function(t){return t||function(){return d(this,function(n,s){return s})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var v=v||{},E=this||self;function T(t){var n=typeof t;return n=n!="object"?n:t?Array.isArray(t)?"array":n:"null",n=="array"||n=="object"&&typeof t.length=="number"}function A(t){var n=typeof t;return n=="object"&&t!=null||n=="function"}function k(t,n,s){return t.call.apply(t.bind,arguments)}function P(t,n,s){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var m=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(m,o),t.apply(n,m)}}return function(){return t.apply(n,arguments)}}function D(t,n,s){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:P,D.apply(null,arguments)}function N(t,n){var s=Array.prototype.slice.call(arguments,1);return function(){var o=s.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function S(t,n){function s(){}s.prototype=n.prototype,t.aa=n.prototype,t.prototype=new s,t.prototype.constructor=t,t.Qb=function(o,m,w){for(var I=Array(arguments.length-2),R=2;R<arguments.length;R++)I[R-2]=arguments[R];return n.prototype[m].apply(o,I)}}function j(t){const n=t.length;if(0<n){const s=Array(n);for(let o=0;o<n;o++)s[o]=t[o];return s}return[]}function M(t,n){for(let s=1;s<arguments.length;s++){const o=arguments[s];if(T(o)){const m=t.length||0,w=o.length||0;t.length=m+w;for(let I=0;I<w;I++)t[m+I]=o[I]}else t.push(o)}}class Tt{constructor(n,s){this.i=n,this.j=s,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function Z(t){return/^[\s\xa0]*$/.test(t)}function W(){var t=E.navigator;return t&&(t=t.userAgent)?t:""}function at(t){return at[" "](t),t}at[" "]=function(){};var Qt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function tt(t,n,s){for(const o in t)n.call(s,t[o],o,t)}function g(t,n){for(const s in t)n.call(void 0,t[s],s,t)}function l(t){const n={};for(const s in t)n[s]=t[s];return n}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,n){let s,o;for(let m=1;m<arguments.length;m++){o=arguments[m];for(s in o)t[s]=o[s];for(let w=0;w<u.length;w++)s=u[w],Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}}function p(t){var n=1;t=t.split(":");const s=[];for(;0<n&&t.length;)s.push(t.shift()),n--;return t.length&&s.push(t.join(":")),s}function y(t){E.setTimeout(()=>{throw t},0)}function c(){var t=be;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}class et{constructor(){this.h=this.g=null}add(n,s){const o=Rt.get();o.set(n,s),this.h?this.h.next=o:this.g=o,this.h=o}}var Rt=new Tt(()=>new As,t=>t.reset());class As{constructor(){this.next=this.g=this.h=null}set(n,s){this.h=n,this.g=s,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,Pt=!1,be=new et,vn=()=>{const t=E.Promise.resolve(void 0);Ot=()=>{t.then(_s)}};var _s=()=>{for(var t;t=c();){try{t.h.call(t.g)}catch(s){y(s)}var n=Rt;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}Pt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var bs=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const s=()=>{};E.addEventListener("test",s,n),E.removeEventListener("test",s,n)}catch{}return t}();function kt(t,n){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var s=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(Qt){t:{try{at(n.nodeName);var m=!0;break t}catch{}m=!1}m||(n=null)}}else s=="mouseover"?n=t.fromElement:s=="mouseout"&&(n=t.toElement);this.relatedTarget=n,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ss[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kt.aa.h.call(this)}}S(kt,F);var Ss={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function Ds(t,n,s,o,m){this.listener=t,this.proxy=null,this.src=n,this.type=s,this.capture=!!o,this.ha=m,this.key=++Cs,this.da=this.fa=!1}function te(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ee(t){this.src=t,this.g={},this.h=0}ee.prototype.add=function(t,n,s,o,m){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var I=Ce(t,n,o,m);return-1<I?(n=t[I],s||(n.fa=!1)):(n=new Ds(n,this.src,w,!!o,m),n.fa=s,t.push(n)),n};function Se(t,n){var s=n.type;if(s in t.g){var o=t.g[s],m=Array.prototype.indexOf.call(o,n,void 0),w;(w=0<=m)&&Array.prototype.splice.call(o,m,1),w&&(te(n),t.g[s].length==0&&(delete t.g[s],t.h--))}}function Ce(t,n,s,o){for(var m=0;m<t.length;++m){var w=t[m];if(!w.da&&w.listener==n&&w.capture==!!s&&w.ha==o)return m}return-1}var De="closure_lm_"+(1e6*Math.random()|0),Re={};function wn(t,n,s,o,m){if(Array.isArray(n)){for(var w=0;w<n.length;w++)wn(t,n[w],s,o,m);return null}return s=Tn(s),t&&t[Zt]?t.K(n,s,A(o)?!!o.capture:!!o,m):Rs(t,n,s,!1,o,m)}function Rs(t,n,s,o,m,w){if(!n)throw Error("Invalid event type");var I=A(m)?!!m.capture:!!m,R=Pe(t);if(R||(t[De]=R=new ee(t)),s=R.add(n,s,o,I,w),s.proxy)return s;if(o=Os(),s.proxy=o,o.src=t,o.listener=s,t.addEventListener)bs||(m=I),m===void 0&&(m=!1),t.addEventListener(n.toString(),o,m);else if(t.attachEvent)t.attachEvent(In(n.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return s}function Os(){function t(s){return n.call(t.src,t.listener,s)}const n=Ps;return t}function En(t,n,s,o,m){if(Array.isArray(n))for(var w=0;w<n.length;w++)En(t,n[w],s,o,m);else o=A(o)?!!o.capture:!!o,s=Tn(s),t&&t[Zt]?(t=t.i,n=String(n).toString(),n in t.g&&(w=t.g[n],s=Ce(w,s,o,m),-1<s&&(te(w[s]),Array.prototype.splice.call(w,s,1),w.length==0&&(delete t.g[n],t.h--)))):t&&(t=Pe(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Ce(n,s,o,m)),(s=-1<t?n[t]:null)&&Oe(s))}function Oe(t){if(typeof t!="number"&&t&&!t.da){var n=t.src;if(n&&n[Zt])Se(n.i,t);else{var s=t.type,o=t.proxy;n.removeEventListener?n.removeEventListener(s,o,t.capture):n.detachEvent?n.detachEvent(In(s),o):n.addListener&&n.removeListener&&n.removeListener(o),(s=Pe(n))?(Se(s,t),s.h==0&&(s.src=null,n[De]=null)):te(t)}}}function In(t){return t in Re?Re[t]:Re[t]="on"+t}function Ps(t,n){if(t.da)t=!0;else{n=new kt(n,this);var s=t.listener,o=t.ha||t.src;t.fa&&Oe(t),t=s.call(o,n)}return t}function Pe(t){return t=t[De],t instanceof ee?t:null}var ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tn(t){return typeof t=="function"?t:(t[ke]||(t[ke]=function(n){return t.handleEvent(n)}),t[ke])}function U(){ht.call(this),this.i=new ee(this),this.M=this,this.F=null}S(U,ht),U.prototype[Zt]=!0,U.prototype.removeEventListener=function(t,n,s,o){En(this,t,n,s,o)};function H(t,n){var s,o=t.F;if(o)for(s=[];o;o=o.F)s.push(o);if(t=t.M,o=n.type||n,typeof n=="string")n=new F(n,t);else if(n instanceof F)n.target=n.target||t;else{var m=n;n=new F(o,t),f(n,m)}if(m=!0,s)for(var w=s.length-1;0<=w;w--){var I=n.g=s[w];m=ne(I,o,!0,n)&&m}if(I=n.g=t,m=ne(I,o,!0,n)&&m,m=ne(I,o,!1,n)&&m,s)for(w=0;w<s.length;w++)I=n.g=s[w],m=ne(I,o,!1,n)&&m}U.prototype.N=function(){if(U.aa.N.call(this),this.i){var t=this.i,n;for(n in t.g){for(var s=t.g[n],o=0;o<s.length;o++)te(s[o]);delete t.g[n],t.h--}}this.F=null},U.prototype.K=function(t,n,s,o){return this.i.add(String(t),n,!1,s,o)},U.prototype.L=function(t,n,s,o){return this.i.add(String(t),n,!0,s,o)};function ne(t,n,s,o){if(n=t.i.g[String(n)],!n)return!0;n=n.concat();for(var m=!0,w=0;w<n.length;++w){var I=n[w];if(I&&!I.da&&I.capture==s){var R=I.listener,x=I.ha||I.src;I.fa&&Se(t.i,I),m=R.call(x,o)!==!1&&m}}return m&&!o.defaultPrevented}function An(t,n,s){if(typeof t=="function")s&&(t=D(t,s));else if(t&&typeof t.handleEvent=="function")t=D(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(n)?-1:E.setTimeout(t,n||0)}function _n(t){t.g=An(()=>{t.g=null,t.i&&(t.i=!1,_n(t))},t.l);const n=t.h;t.h=null,t.m.apply(null,n)}class ks extends ht{constructor(n,s){super(),this.m=n,this.l=s,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:_n(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(t){ht.call(this),this.h=t,this.g={}}S(Nt,ht);var bn=[];function Sn(t){tt(t.g,function(n,s){this.g.hasOwnProperty(s)&&Oe(n)},t),t.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),Sn(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=E.JSON.stringify,Ns=E.JSON.parse,Ls=class{stringify(t){return E.JSON.stringify(t,void 0)}parse(t){return E.JSON.parse(t,void 0)}};function Le(){}Le.prototype.h=null;function Cn(t){return t.h||(t.h=t.i())}function Ms(){}var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Me(){F.call(this,"d")}S(Me,F);function xe(){F.call(this,"c")}S(xe,F);var At={},Dn=null;function je(){return Dn=Dn||new U}At.La="serverreachability";function Rn(t){F.call(this,At.La,t)}S(Rn,F);function Mt(t){const n=je();H(n,new Rn(n))}At.STAT_EVENT="statevent";function On(t,n){F.call(this,At.STAT_EVENT,t),this.stat=n}S(On,F);function V(t){const n=je();H(n,new On(n,t))}At.Ma="timingevent";function Pn(t,n){F.call(this,At.Ma,t),this.size=n}S(Pn,F);function xt(t,n){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},n)}function jt(){this.g=!0}jt.prototype.xa=function(){this.g=!1};function xs(t,n,s,o,m,w){t.info(function(){if(t.g)if(w)for(var I="",R=w.split("&"),x=0;x<R.length;x++){var b=R[x].split("=");if(1<b.length){var B=b[0];b=b[1];var $=B.split("_");I=2<=$.length&&$[1]=="type"?I+(B+"="+b+"&"):I+(B+"=redacted&")}}else I=null;else I=w;return"XMLHTTP REQ ("+o+") [attempt "+m+"]: "+n+`
`+s+`
`+I})}function js(t,n,s,o,m,w,I){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+m+"]: "+n+`
`+s+`
`+w+" "+I})}function _t(t,n,s,o){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+Us(t,s)+(o?" "+o:"")})}function Fs(t,n){t.info(function(){return"TIMEOUT: "+n})}jt.prototype.info=function(){};function Us(t,n){if(!t.g)return n;if(!n)return null;try{var s=JSON.parse(n);if(s){for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var o=s[t];if(!(2>o.length)){var m=o[1];if(Array.isArray(m)&&!(1>m.length)){var w=m[0];if(w!="noop"&&w!="stop"&&w!="close")for(var I=1;I<m.length;I++)m[I]=""}}}}return Ne(s)}catch{return n}}var Fe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ue;function ie(){}S(ie,Le),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},Ue=new ie;function lt(t,n,s,o){this.j=t,this.i=n,this.l=s,this.R=o||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kn}function kn(){this.i=null,this.g="",this.h=!1}var Nn={},Be={};function $e(t,n,s){t.L=1,t.v=ae(nt(n)),t.m=s,t.P=!0,Ln(t,null)}function Ln(t,n){t.F=Date.now(),se(t),t.A=nt(t.v);var s=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),Xn(s.i,"t",o),t.C=0,s=t.j.J,t.h=new kn,t.g=fi(t.j,s?n:null,!t.m),0<t.O&&(t.M=new ks(D(t.Y,t,t.g),t.O)),n=t.U,s=t.g,o=t.ca;var m="readystatechange";Array.isArray(m)||(m&&(bn[0]=m.toString()),m=bn);for(var w=0;w<m.length;w++){var I=wn(s,m[w],o||n.handleEvent,!1,n.h||n);if(!I)break;n.g[I.key]=I}n=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),Mt(),xs(t.i,t.u,t.A,t.l,t.R,t.m)}lt.prototype.ca=function(t){t=t.target;const n=this.M;n&&it(t)==3?n.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const $=it(this.g);var n=this.g.Ba();const Ct=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||ei(this.g)))){this.J||$!=4||n==7||(n==8||0>=Ct?Mt(3):Mt(2)),He(this);var s=this.g.Z();this.X=s;e:if(Mn(this)){var o=ei(this.g);t="";var m=o.length,w=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gt(this),Ft(this);var I="";break e}this.h.i=new E.TextDecoder}for(n=0;n<m;n++)this.h.h=!0,t+=this.h.i.decode(o[n],{stream:!(w&&n==m-1)});o.length=0,this.h.g+=t,this.C=0,I=this.h.g}else I=this.g.oa();if(this.o=s==200,js(this.i,this.u,this.A,this.l,this.R,$,s),this.o){if(this.T&&!this.K){e:{if(this.g){var R,x=this.g;if((R=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(R)){var b=R;break e}}b=null}if(s=b)_t(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ve(this,s);else{this.o=!1,this.s=3,V(12),gt(this),Ft(this);break t}}if(this.P){s=!0;let J;for(;!this.J&&this.C<I.length;)if(J=$s(this,I),J==Be){$==4&&(this.s=4,V(14),s=!1),_t(this.i,this.l,null,"[Incomplete Response]");break}else if(J==Nn){this.s=4,V(15),_t(this.i,this.l,I,"[Invalid Chunk]"),s=!1;break}else _t(this.i,this.l,J,null),Ve(this,J);if(Mn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||I.length!=0||this.h.h||(this.s=1,V(16),s=!1),this.o=this.o&&s,!s)_t(this.i,this.l,I,"[Invalid Chunked Response]"),gt(this),Ft(this);else if(0<I.length&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.ba&&!B.M&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+I.length),We(B),B.M=!0,V(11))}}else _t(this.i,this.l,I,null),Ve(this,I);$==4&&gt(this),this.o&&!this.J&&($==4?hi(this.j,this):(this.o=!1,se(this)))}else sr(this.g),s==400&&0<I.indexOf("Unknown SID")?(this.s=3,V(12)):(this.s=0,V(13)),gt(this),Ft(this)}}}catch{}finally{}};function Mn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function $s(t,n){var s=t.C,o=n.indexOf(`
`,s);return o==-1?Be:(s=Number(n.substring(s,o)),isNaN(s)?Nn:(o+=1,o+s>n.length?Be:(n=n.slice(o,o+s),t.C=o+s,n)))}lt.prototype.cancel=function(){this.J=!0,gt(this)};function se(t){t.S=Date.now()+t.I,xn(t,t.I)}function xn(t,n){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xt(D(t.ba,t),n)}function He(t){t.B&&(E.clearTimeout(t.B),t.B=null)}lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Fs(this.i,this.A),this.L!=2&&(Mt(),V(17)),gt(this),this.s=2,Ft(this)):xn(this,this.S-t)};function Ft(t){t.j.G==0||t.J||hi(t.j,t)}function gt(t){He(t);var n=t.M;n&&typeof n.ma=="function"&&n.ma(),t.M=null,Sn(t.U),t.g&&(n=t.g,t.g=null,n.abort(),n.ma())}function Ve(t,n){try{var s=t.j;if(s.G!=0&&(s.g==t||ze(s.h,t))){if(!t.K&&ze(s.h,t)&&s.G==3){try{var o=s.Da.g.parse(n)}catch{o=null}if(Array.isArray(o)&&o.length==3){var m=o;if(m[0]==0){t:if(!s.u){if(s.g)if(s.g.F+3e3<t.F)de(s),ue(s);else break t;Xe(s),V(18)}}else s.za=m[1],0<s.za-s.T&&37500>m[2]&&s.F&&s.v==0&&!s.C&&(s.C=xt(D(s.Za,s),6e3));if(1>=Un(s.h)&&s.ca){try{s.ca()}catch{}s.ca=void 0}}else yt(s,11)}else if((t.K||s.g==t)&&de(s),!Z(n))for(m=s.Da.g.parse(n),n=0;n<m.length;n++){let b=m[n];if(s.T=b[0],b=b[1],s.G==2)if(b[0]=="c"){s.K=b[1],s.ia=b[2];const B=b[3];B!=null&&(s.la=B,s.j.info("VER="+s.la));const $=b[4];$!=null&&(s.Aa=$,s.j.info("SVER="+s.Aa));const Ct=b[5];Ct!=null&&typeof Ct=="number"&&0<Ct&&(o=1.5*Ct,s.L=o,s.j.info("backChannelRequestTimeoutMs_="+o)),o=s;const J=t.g;if(J){const pe=J.g?J.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pe){var w=o.h;w.g||pe.indexOf("spdy")==-1&&pe.indexOf("quic")==-1&&pe.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ge(w,w.h),w.h=null))}if(o.D){const Ye=J.g?J.g.getResponseHeader("X-HTTP-Session-Id"):null;Ye&&(o.ya=Ye,O(o.I,o.D,Ye))}}s.G=3,s.l&&s.l.ua(),s.ba&&(s.R=Date.now()-t.F,s.j.info("Handshake RTT: "+s.R+"ms")),o=s;var I=t;if(o.qa=ui(o,o.J?o.ia:null,o.W),I.K){Bn(o.h,I);var R=I,x=o.L;x&&(R.I=x),R.B&&(He(R),se(R)),o.g=I}else oi(o);0<s.i.length&&fe(s)}else b[0]!="stop"&&b[0]!="close"||yt(s,7);else s.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?yt(s,7):Ke(s):b[0]!="noop"&&s.l&&s.l.ta(b),s.v=0)}}Mt(4)}catch{}}var Hs=class{constructor(t,n){this.g=t,this.map=n}};function jn(t){this.l=t||10,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.chrome&&E.chrome.loadTimes&&E.chrome.loadTimes()&&E.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Un(t){return t.h?1:t.g?t.g.size:0}function ze(t,n){return t.h?t.h==n:t.g?t.g.has(n):!1}function Ge(t,n){t.g?t.g.add(n):t.h=n}function Bn(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}jn.prototype.cancel=function(){if(this.i=$n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $n(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let n=t.i;for(const s of t.g.values())n=n.concat(s.D);return n}return j(t.i)}function Vs(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(T(t)){for(var n=[],s=t.length,o=0;o<s;o++)n.push(t[o]);return n}n=[],s=0;for(o in t)n[s++]=t[o];return n}function zs(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(T(t)||typeof t=="string"){var n=[];t=t.length;for(var s=0;s<t;s++)n.push(s);return n}n=[],s=0;for(const o in t)n[s++]=o;return n}}}function Hn(t,n){if(t.forEach&&typeof t.forEach=="function")t.forEach(n,void 0);else if(T(t)||typeof t=="string")Array.prototype.forEach.call(t,n,void 0);else for(var s=zs(t),o=Vs(t),m=o.length,w=0;w<m;w++)n.call(void 0,o[w],s&&s[w],t)}var Vn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gs(t,n){if(t){t=t.split("&");for(var s=0;s<t.length;s++){var o=t[s].indexOf("="),m=null;if(0<=o){var w=t[s].substring(0,o);m=t[s].substring(o+1)}else w=t[s];n(w,m?decodeURIComponent(m.replace(/\+/g," ")):"")}}}function mt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof mt){this.h=t.h,re(this,t.j),this.o=t.o,this.g=t.g,oe(this,t.s),this.l=t.l;var n=t.i,s=new $t;s.i=n.i,n.g&&(s.g=new Map(n.g),s.h=n.h),zn(this,s),this.m=t.m}else t&&(n=String(t).match(Vn))?(this.h=!1,re(this,n[1]||"",!0),this.o=Ut(n[2]||""),this.g=Ut(n[3]||"",!0),oe(this,n[4]),this.l=Ut(n[5]||"",!0),zn(this,n[6]||"",!0),this.m=Ut(n[7]||"")):(this.h=!1,this.i=new $t(null,this.h))}mt.prototype.toString=function(){var t=[],n=this.j;n&&t.push(Bt(n,Gn,!0),":");var s=this.g;return(s||n=="file")&&(t.push("//"),(n=this.o)&&t.push(Bt(n,Gn,!0),"@"),t.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s=this.s,s!=null&&t.push(":",String(s))),(s=this.l)&&(this.g&&s.charAt(0)!="/"&&t.push("/"),t.push(Bt(s,s.charAt(0)=="/"?Xs:Ks,!0))),(s=this.i.toString())&&t.push("?",s),(s=this.m)&&t.push("#",Bt(s,Ys)),t.join("")};function nt(t){return new mt(t)}function re(t,n,s){t.j=s?Ut(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function oe(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.s=n}else t.s=null}function zn(t,n,s){n instanceof $t?(t.i=n,Js(t.i,t.h)):(s||(n=Bt(n,Ws)),t.i=new $t(n,t.h))}function O(t,n,s){t.i.set(n,s)}function ae(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ut(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bt(t,n,s){return typeof t=="string"?(t=encodeURI(t).replace(n,qs),s&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qs(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gn=/[#\/\?@]/g,Ks=/[#\?:]/g,Xs=/[#\?]/g,Ws=/[#\?@]/g,Ys=/#/g;function $t(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function ct(t){t.g||(t.g=new Map,t.h=0,t.i&&Gs(t.i,function(n,s){t.add(decodeURIComponent(n.replace(/\+/g," ")),s)}))}i=$t.prototype,i.add=function(t,n){ct(this),this.i=null,t=bt(this,t);var s=this.g.get(t);return s||this.g.set(t,s=[]),s.push(n),this.h+=1,this};function qn(t,n){ct(t),n=bt(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function Kn(t,n){return ct(t),n=bt(t,n),t.g.has(n)}i.forEach=function(t,n){ct(this),this.g.forEach(function(s,o){s.forEach(function(m){t.call(n,m,o,this)},this)},this)},i.na=function(){ct(this);const t=Array.from(this.g.values()),n=Array.from(this.g.keys()),s=[];for(let o=0;o<n.length;o++){const m=t[o];for(let w=0;w<m.length;w++)s.push(n[o])}return s},i.V=function(t){ct(this);let n=[];if(typeof t=="string")Kn(this,t)&&(n=n.concat(this.g.get(bt(this,t))));else{t=Array.from(this.g.values());for(let s=0;s<t.length;s++)n=n.concat(t[s])}return n},i.set=function(t,n){return ct(this),this.i=null,t=bt(this,t),Kn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},i.get=function(t,n){return t?(t=this.V(t),0<t.length?String(t[0]):n):n};function Xn(t,n,s){qn(t,n),0<s.length&&(t.i=null,t.g.set(bt(t,n),j(s)),t.h+=s.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(var s=0;s<n.length;s++){var o=n[s];const w=encodeURIComponent(String(o)),I=this.V(o);for(o=0;o<I.length;o++){var m=w;I[o]!==""&&(m+="="+encodeURIComponent(String(I[o]))),t.push(m)}}return this.i=t.join("&")};function bt(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Js(t,n){n&&!t.j&&(ct(t),t.i=null,t.g.forEach(function(s,o){var m=o.toLowerCase();o!=m&&(qn(this,o),Xn(this,m,s))},t)),t.j=n}function Qs(t,n){const s=new jt;if(E.Image){const o=new Image;o.onload=N(ut,s,"TestLoadImage: loaded",!0,n,o),o.onerror=N(ut,s,"TestLoadImage: error",!1,n,o),o.onabort=N(ut,s,"TestLoadImage: abort",!1,n,o),o.ontimeout=N(ut,s,"TestLoadImage: timeout",!1,n,o),E.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else n(!1)}function Zs(t,n){const s=new jt,o=new AbortController,m=setTimeout(()=>{o.abort(),ut(s,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:o.signal}).then(w=>{clearTimeout(m),w.ok?ut(s,"TestPingServer: ok",!0,n):ut(s,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(m),ut(s,"TestPingServer: error",!1,n)})}function ut(t,n,s,o,m){try{m&&(m.onload=null,m.onerror=null,m.onabort=null,m.ontimeout=null),o(s)}catch{}}function tr(){this.g=new Ls}function er(t,n,s){const o=s||"";try{Hn(t,function(m,w){let I=m;A(m)&&(I=Ne(m)),n.push(o+w+"="+encodeURIComponent(I))})}catch(m){throw n.push(o+"type="+encodeURIComponent("_badmap")),m}}function he(t){this.l=t.Ub||null,this.j=t.eb||!1}S(he,Le),he.prototype.g=function(){return new le(this.l,this.j)},he.prototype.i=function(t){return function(){return t}}({});function le(t,n){U.call(this),this.D=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(le,U),i=le.prototype,i.open=function(t,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=n,this.readyState=1,Vt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||E).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ht(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vt(this)),this.g&&(this.readyState=3,Vt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Ht(this):Vt(this),this.readyState==3&&Wn(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,Ht(this))},i.Qa=function(t){this.g&&(this.response=t,Ht(this))},i.ga=function(){this.g&&Ht(this)};function Ht(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Vt(t)}i.setRequestHeader=function(t,n){this.u.append(t,n)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var s=n.next();!s.done;)s=s.value,t.push(s[0]+": "+s[1]),s=n.next();return t.join(`\r
`)};function Vt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(le.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Yn(t){let n="";return tt(t,function(s,o){n+=o,n+=":",n+=s,n+=`\r
`}),n}function qe(t,n,s){t:{for(o in s){var o=!1;break t}o=!0}o||(s=Yn(s),typeof t=="string"?s!=null&&encodeURIComponent(String(s)):O(t,n,s))}function L(t){U.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(L,U);var nr=/^https?$/i,ir=["POST","PUT"];i=L.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,n,s,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ue.g(),this.v=this.o?Cn(this.o):Cn(Ue),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(w){Jn(this,w);return}if(t=s||"",s=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var m in o)s.set(m,o[m]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const w of o.keys())s.set(w,o.get(w));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(s.keys()).find(w=>w.toLowerCase()=="content-type"),m=E.FormData&&t instanceof E.FormData,!(0<=Array.prototype.indexOf.call(ir,n,void 0))||o||m||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,I]of s)this.g.setRequestHeader(w,I);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ti(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){Jn(this,w)}};function Jn(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.m=5,Qn(t),ce(t)}function Qn(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),ce(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ce(this,!0)),L.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Zn(this):this.bb())},i.bb=function(){Zn(this)};function Zn(t){if(t.h&&typeof v<"u"&&(!t.v[1]||it(t)!=4||t.Z()!=2)){if(t.u&&it(t)==4)An(t.Ea,0,t);else if(H(t,"readystatechange"),it(t)==4){t.h=!1;try{const I=t.Z();t:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var s;if(!(s=n)){var o;if(o=I===0){var m=String(t.D).match(Vn)[1]||null;!m&&E.self&&E.self.location&&(m=E.self.location.protocol.slice(0,-1)),o=!nr.test(m?m.toLowerCase():"")}s=o}if(s)H(t,"complete"),H(t,"success");else{t.m=6;try{var w=2<it(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",Qn(t)}}finally{ce(t)}}}}function ce(t,n){if(t.g){ti(t);const s=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,n||H(t,"ready");try{s.onreadystatechange=o}catch{}}}function ti(t){t.I&&(E.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function it(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var n=this.g.responseText;return t&&n.indexOf(t)==0&&(n=n.substring(t.length)),Ns(n)}};function ei(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function sr(t){const n={};t=(t.g&&2<=it(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(Z(t[o]))continue;var s=p(t[o]);const m=s[0];if(s=s[1],typeof s!="string")continue;s=s.trim();const w=n[m]||[];n[m]=w,w.push(s)}g(n,function(o){return o.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zt(t,n,s){return s&&s.internalChannelParams&&s.internalChannelParams[t]||n}function ni(t){this.Aa=0,this.i=[],this.j=new jt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,t),this.cb=zt("retryDelaySeedMs",1e4,t),this.Wa=zt("forwardChannelMaxRetries",2,t),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new jn(t&&t.concurrentRequestLimit),this.Da=new tr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ni.prototype,i.la=8,i.G=1,i.connect=function(t,n,s,o){V(0),this.W=t,this.H=n||{},s&&o!==void 0&&(this.H.OSID=s,this.H.OAID=o),this.F=this.X,this.I=ui(this,null,this.W),fe(this)};function Ke(t){if(ii(t),t.G==3){var n=t.U++,s=nt(t.I);if(O(s,"SID",t.K),O(s,"RID",n),O(s,"TYPE","terminate"),Gt(t,s),n=new lt(t,t.j,n),n.L=2,n.v=ae(nt(s)),s=!1,E.navigator&&E.navigator.sendBeacon)try{s=E.navigator.sendBeacon(n.v.toString(),"")}catch{}!s&&E.Image&&(new Image().src=n.v,s=!0),s||(n.g=fi(n.j,null),n.g.ea(n.v)),n.F=Date.now(),se(n)}ci(t)}function ue(t){t.g&&(We(t),t.g.cancel(),t.g=null)}function ii(t){ue(t),t.u&&(E.clearTimeout(t.u),t.u=null),de(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&E.clearTimeout(t.s),t.s=null)}function fe(t){if(!Fn(t.h)&&!t.s){t.s=!0;var n=t.Ga;Ot||vn(),Pt||(Ot(),Pt=!0),be.add(n,t),t.B=0}}function rr(t,n){return Un(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=n.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=xt(D(t.Ga,t,n),li(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const m=new lt(this,this.j,t);let w=this.o;if(this.S&&(w?(w=l(w),f(w,this.S)):w=this.S),this.m!==null||this.O||(m.H=w,w=null),this.P)t:{for(var n=0,s=0;s<this.i.length;s++){e:{var o=this.i[s];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(n+=o,4096<n){n=s;break t}if(n===4096||s===this.i.length-1){n=s+1;break t}}n=1e3}else n=1e3;n=ri(this,m,n),s=nt(this.I),O(s,"RID",t),O(s,"CVER",22),this.D&&O(s,"X-HTTP-Session-Id",this.D),Gt(this,s),w&&(this.O?n="headers="+encodeURIComponent(String(Yn(w)))+"&"+n:this.m&&qe(s,this.m,w)),Ge(this.h,m),this.Ua&&O(s,"TYPE","init"),this.P?(O(s,"$req",n),O(s,"SID","null"),m.T=!0,$e(m,s,null)):$e(m,s,n),this.G=2}}else this.G==3&&(t?si(this,t):this.i.length==0||Fn(this.h)||si(this))};function si(t,n){var s;n?s=n.l:s=t.U++;const o=nt(t.I);O(o,"SID",t.K),O(o,"RID",s),O(o,"AID",t.T),Gt(t,o),t.m&&t.o&&qe(o,t.m,t.o),s=new lt(t,t.j,s,t.B+1),t.m===null&&(s.H=t.o),n&&(t.i=n.D.concat(t.i)),n=ri(t,s,1e3),s.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ge(t.h,s),$e(s,o,n)}function Gt(t,n){t.H&&tt(t.H,function(s,o){O(n,o,s)}),t.l&&Hn({},function(s,o){O(n,o,s)})}function ri(t,n,s){s=Math.min(t.i.length,s);var o=t.l?D(t.l.Na,t.l,t):null;t:{var m=t.i;let w=-1;for(;;){const I=["count="+s];w==-1?0<s?(w=m[0].g,I.push("ofs="+w)):w=0:I.push("ofs="+w);let R=!0;for(let x=0;x<s;x++){let b=m[x].g;const B=m[x].map;if(b-=w,0>b)w=Math.max(0,m[x].g-100),R=!1;else try{er(B,I,"req"+b+"_")}catch{o&&o(B)}}if(R){o=I.join("&");break t}}}return t=t.i.splice(0,s),n.D=t,o}function oi(t){if(!t.g&&!t.u){t.Y=1;var n=t.Fa;Ot||vn(),Pt||(Ot(),Pt=!0),be.add(n,t),t.v=0}}function Xe(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=xt(D(t.Fa,t),li(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,ai(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=xt(D(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,V(10),ue(this),ai(this))};function We(t){t.A!=null&&(E.clearTimeout(t.A),t.A=null)}function ai(t){t.g=new lt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var n=nt(t.qa);O(n,"RID","rpc"),O(n,"SID",t.K),O(n,"AID",t.T),O(n,"CI",t.F?"0":"1"),!t.F&&t.ja&&O(n,"TO",t.ja),O(n,"TYPE","xmlhttp"),Gt(t,n),t.m&&t.o&&qe(n,t.m,t.o),t.L&&(t.g.I=t.L);var s=t.g;t=t.ia,s.L=1,s.v=ae(nt(n)),s.m=null,s.P=!0,Ln(s,t)}i.Za=function(){this.C!=null&&(this.C=null,ue(this),Xe(this),V(19))};function de(t){t.C!=null&&(E.clearTimeout(t.C),t.C=null)}function hi(t,n){var s=null;if(t.g==n){de(t),We(t),t.g=null;var o=2}else if(ze(t.h,n))s=n.D,Bn(t.h,n),o=1;else return;if(t.G!=0){if(n.o)if(o==1){s=n.m?n.m.length:0,n=Date.now()-n.F;var m=t.B;o=je(),H(o,new Pn(o,s)),fe(t)}else oi(t);else if(m=n.s,m==3||m==0&&0<n.X||!(o==1&&rr(t,n)||o==2&&Xe(t)))switch(s&&0<s.length&&(n=t.h,n.i=n.i.concat(s)),m){case 1:yt(t,5);break;case 4:yt(t,10);break;case 3:yt(t,6);break;default:yt(t,2)}}}function li(t,n){let s=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(s*=2),s*n}function yt(t,n){if(t.j.info("Error code "+n),n==2){var s=D(t.fb,t),o=t.Xa;const m=!o;o=new mt(o||"//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||re(o,"https"),ae(o),m?Qs(o.toString(),s):Zs(o.toString(),s)}else V(2);t.G=0,t.l&&t.l.sa(n),ci(t),ii(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),V(2)):(this.j.info("Failed to ping google.com"),V(1))};function ci(t){if(t.G=0,t.ka=[],t.l){const n=$n(t.h);(n.length!=0||t.i.length!=0)&&(M(t.ka,n),M(t.ka,t.i),t.h.i.length=0,j(t.i),t.i.length=0),t.l.ra()}}function ui(t,n,s){var o=s instanceof mt?nt(s):new mt(s);if(o.g!="")n&&(o.g=n+"."+o.g),oe(o,o.s);else{var m=E.location;o=m.protocol,n=n?n+"."+m.hostname:m.hostname,m=+m.port;var w=new mt(null);o&&re(w,o),n&&(w.g=n),m&&oe(w,m),s&&(w.l=s),o=w}return s=t.D,n=t.ya,s&&n&&O(o,s,n),O(o,"VER",t.la),Gt(t,o),o}function fi(t,n,s){if(n&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return n=t.Ca&&!t.pa?new L(new he({eb:s})):new L(t.pa),n.Ha(t.J),n}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function di(){}i=di.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Y(t,n){U.call(this),this.g=new ni(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(t?t["X-WebChannel-Client-Profile"]=n.va:t={"X-WebChannel-Client-Profile":n.va}),this.g.S=t,(t=n&&n.Sb)&&!Z(t)&&(this.g.m=t),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!Z(n)&&(this.g.D=n,t=this.h,t!==null&&n in t&&(t=this.h,n in t&&delete t[n])),this.j=new St(this)}S(Y,U),Y.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Y.prototype.close=function(){Ke(this.g)},Y.prototype.o=function(t){var n=this.g;if(typeof t=="string"){var s={};s.__data__=t,t=s}else this.u&&(s={},s.__data__=Ne(t),t=s);n.i.push(new Hs(n.Ya++,t)),n.G==3&&fe(n)},Y.prototype.N=function(){this.g.l=null,delete this.j,Ke(this.g),delete this.g,Y.aa.N.call(this)};function pi(t){Me.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){t:{for(const s in n){t=s;break t}t=void 0}(this.i=t)&&(t=this.i,n=n!==null&&t in n?n[t]:void 0),this.data=n}else this.data=t}S(pi,Me);function gi(){xe.call(this),this.status=1}S(gi,xe);function St(t){this.g=t}S(St,di),St.prototype.ua=function(){H(this.g,"a")},St.prototype.ta=function(t){H(this.g,new pi(t))},St.prototype.sa=function(t){H(this.g,new gi)},St.prototype.ra=function(){H(this.g,"b")},Y.prototype.send=Y.prototype.o,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,Fe.NO_ERROR=0,Fe.TIMEOUT=8,Fe.HTTP_ERROR=6,Bs.COMPLETE="complete",Ms.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",U.prototype.listen=U.prototype.K,L.prototype.listenOnce=L.prototype.L,L.prototype.getLastError=L.prototype.Ka,L.prototype.getLastErrorCode=L.prototype.Ba,L.prototype.getStatus=L.prototype.Z,L.prototype.getResponseJson=L.prototype.Oa,L.prototype.getResponseText=L.prototype.oa,L.prototype.send=L.prototype.ea,L.prototype.setWithCredentials=L.prototype.Ha}).apply(typeof ge<"u"?ge:typeof self<"u"?self:typeof window<"u"?window:{});const bi="@firebase/firestore";/**
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
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let Jt="11.0.0";/**
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
 */const Dt=new ln("@firebase/firestore");function Q(i,...e){if(Dt.logLevel<=C.DEBUG){const r=e.map(cn);Dt.debug(`Firestore (${Jt}): ${i}`,...r)}}function Qi(i,...e){if(Dt.logLevel<=C.ERROR){const r=e.map(cn);Dt.error(`Firestore (${Jt}): ${i}`,...r)}}function Do(i,...e){if(Dt.logLevel<=C.WARN){const r=e.map(cn);Dt.warn(`Firestore (${Jt}): ${i}`,...r)}}function cn(i){if(typeof i=="string")return i;try{/**
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
*/return function(r){return JSON.stringify(r)}(i)}catch{return i}}/**
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
 */function un(i="Unexpected state"){const e=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+i;throw Qi(e),new Error(e)}function qt(i,e){i||un()}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends pt{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class Zi{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ro{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(z.UNAUTHENTICATED))}shutdown(){}}class Oo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class Po{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){qt(this.o===void 0);let a=this.i;const h=T=>this.i!==a?(a=this.i,r(T)):Promise.resolve();let d=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),d.resolve(),d=new Kt,e.enqueueRetryable(()=>h(this.currentUser))};const v=()=>{const T=d;e.enqueueRetryable(async()=>{await T.promise,await h(this.currentUser)})},E=T=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=T,this.o&&(this.auth.addAuthTokenListener(this.o),v())};this.t.onInit(T=>E(T)),setTimeout(()=>{if(!this.auth){const T=this.t.getImmediate({optional:!0});T?E(T):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),d.resolve(),d=new Kt)}},0),v()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(a=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(qt(typeof a.accessToken=="string"),new Zi(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qt(e===null||typeof e=="string"),new z(e)}}class ko{constructor(e,r,a){this.l=e,this.h=r,this.P=a,this.type="FirstParty",this.user=z.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class No{constructor(e,r,a){this.l=e,this.h=r,this.P=a}getToken(){return Promise.resolve(new ko(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mo{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,r){qt(this.o===void 0);const a=d=>{d.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${d.error.message}`);const v=d.token!==this.R;return this.R=d.token,Q("FirebaseAppCheckTokenProvider",`Received ${v?"new":"existing"} token.`),v?r(d.token):Promise.resolve()};this.o=d=>{e.enqueueRetryable(()=>a(d))};const h=d=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=d,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(d=>h(d)),setTimeout(()=>{if(!this.appCheck){const d=this.A.getImmediate({optional:!0});d?h(d):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(qt(typeof r.token=="string"),this.R=r.token,new Lo(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function xo(i){return i.name==="IndexedDbTransactionError"}class we{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new we("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof we&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Si,_;(_=Si||(Si={}))[_.OK=0]="OK",_[_.CANCELLED=1]="CANCELLED",_[_.UNKNOWN=2]="UNKNOWN",_[_.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_[_.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_[_.NOT_FOUND=5]="NOT_FOUND",_[_.ALREADY_EXISTS=6]="ALREADY_EXISTS",_[_.PERMISSION_DENIED=7]="PERMISSION_DENIED",_[_.UNAUTHENTICATED=16]="UNAUTHENTICATED",_[_.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_[_.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_[_.ABORTED=10]="ABORTED",_[_.OUT_OF_RANGE=11]="OUT_OF_RANGE",_[_.UNIMPLEMENTED=12]="UNIMPLEMENTED",_[_.INTERNAL=13]="INTERNAL",_[_.UNAVAILABLE=14]="UNAVAILABLE",_[_.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ji([4294967295,4294967295],0);function Ze(){return typeof document<"u"?document:null}/**
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
 */class jo{constructor(e,r,a=1e3,h=1.5,d=6e4){this.ui=e,this.timerId=r,this.ko=a,this.qo=h,this.Qo=d,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const r=Math.floor(this.Ko+this.zo()),a=Math.max(0,Date.now()-this.Uo),h=Math.max(0,r-a);h>0&&Q("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Ko} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,h,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class fn{constructor(e,r,a,h,d){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=a,this.op=h,this.removalCallback=d,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(v=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,a,h,d){const v=Date.now()+a,E=new fn(e,r,v,h,d);return E.start(a),E}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ci,Di;(Di=Ci||(Ci={})).ea="default",Di.Cache="cache";/**
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
 */function Fo(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Ri=new Map;function Uo(i,e,r,a){if(e===!0&&a===!0)throw new q(G.INVALID_ARGUMENT,`${i} and ${r} cannot be used together.`)}function Bo(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":un()}function $o(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new q(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Bo(i);throw new q(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return i}/**
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
 */class Oi{constructor(e){var r,a;if(e.host===void 0){if(e.ssl!==void 0)throw new q(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fo((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(d){if(d.timeoutSeconds!==void 0){if(isNaN(d.timeoutSeconds))throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${d.timeoutSeconds} (must not be NaN)`);if(d.timeoutSeconds<5)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${d.timeoutSeconds} (minimum allowed value is 5)`);if(d.timeoutSeconds>30)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${d.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,h){return a.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ts{constructor(e,r,a,h){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=a,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oi({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oi(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Ro;switch(a.type){case"firstParty":return new No(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new q(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const a=Ri.get(r);a&&(Q("ComponentProvider","Removing Datastore"),Ri.delete(r),a.terminate())}(this),Promise.resolve()}}function Ho(i,e,r,a={}){var h;const d=(i=$o(i,ts))._getSettings(),v=`${e}:${r}`;if(d.host!=="firestore.googleapis.com"&&d.host!==v&&Do("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},d),{host:v,ssl:!1})),a.mockUserToken){let E,T;if(typeof a.mockUserToken=="string")E=a.mockUserToken,T=z.MOCK_USER;else{E=yr(a.mockUserToken,(h=i._app)===null||h===void 0?void 0:h.options.projectId);const A=a.mockUserToken.sub||a.mockUserToken.user_id;if(!A)throw new q(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new z(A)}i._authCredentials=new Oo(new Zi(E,T))}}/**
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
 */class Pi{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jo(this,"async_queue_retry"),this.Vu=()=>{const a=Ze();a&&Q("AsyncQueue","Visibility state changed to "+a.visibilityState),this.t_.jo()},this.mu=e;const r=Ze();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const r=Ze();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const r=new Kt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!xo(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const r=this.mu.then(()=>(this.du=!0,e().catch(a=>{this.Eu=a,this.du=!1;const h=function(v){let E=v.message||"";return v.stack&&(E=v.stack.includes(v.message)?v.stack:v.message+`
`+v.stack),E}(a);throw Qi("INTERNAL UNHANDLED ERROR: ",h),a}).then(a=>(this.du=!1,a))));return this.mu=r,r}enqueueAfterDelay(e,r,a){this.fu(),this.Ru.indexOf(e)>-1&&(r=0);const h=fn.createAndSchedule(this,e,r,a,d=>this.yu(d));return this.Tu.push(h),h}fu(){this.Eu&&un()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const r of this.Tu)if(r.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((r,a)=>r.targetTimeMs-a.targetTimeMs);for(const r of this.Tu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const r=this.Tu.indexOf(e);this.Tu.splice(r,1)}}class Vo extends ts{constructor(e,r,a,h){super(e,r,a,h),this.type="firestore",this._queue=new Pi,this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pi(e),this._firestoreClient=void 0,await e}}}function Eh(i,e){const r=typeof i=="object"?i:Xi(),a=typeof i=="string"?i:"(default)",h=Yt(r,"firestore").getImmediate({identifier:a});if(!h._initialized){const d=gr("firestore");d&&Ho(h,...d)}return h}(function(e,r=!0){(function(h){Jt=h})(yo),dt(new rt("firestore",(a,{instanceIdentifier:h,options:d})=>{const v=a.getProvider("app").getImmediate(),E=new Vo(new Po(a.getProvider("auth-internal")),new Mo(a.getProvider("app-check-internal")),function(A,k){if(!Object.prototype.hasOwnProperty.apply(A.options,["projectId"]))throw new q(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new we(A.options.projectId,k)}(v,h),v);return d=Object.assign({useFetchStreams:r},d),E._setSettings(d),E},"PUBLIC").setMultipleInstances(!0)),st(bi,"4.7.4",e),st(bi,"4.7.4","esm2017")})();const es="@firebase/installations",dn="0.6.10";/**
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
 */const ns=1e4,is=`w:${dn}`,ss="FIS_v2",zo="https://firebaseinstallations.googleapis.com/v1",Go=60*60*1e3,qo="installations",Ko="Installations";/**
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
 */const Xo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Et=new Te(qo,Ko,Xo);function rs(i){return i instanceof pt&&i.code.includes("request-failed")}/**
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
 */function os({projectId:i}){return`${zo}/projects/${i}/installations`}function as(i){return{token:i.token,requestStatus:2,expiresIn:Yo(i.expiresIn),creationTime:Date.now()}}async function hs(i,e){const a=(await e.json()).error;return Et.create("request-failed",{requestName:i,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ls({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function Wo(i,{refreshToken:e}){const r=ls(i);return r.append("Authorization",Jo(e)),r}async function cs(i){const e=await i();return e.status>=500&&e.status<600?i():e}function Yo(i){return Number(i.replace("s","000"))}function Jo(i){return`${ss} ${i}`}/**
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
 */async function Qo({appConfig:i,heartbeatServiceProvider:e},{fid:r}){const a=os(i),h=ls(i),d=e.getImmediate({optional:!0});if(d){const A=await d.getHeartbeatsHeader();A&&h.append("x-firebase-client",A)}const v={fid:r,authVersion:ss,appId:i.appId,sdkVersion:is},E={method:"POST",headers:h,body:JSON.stringify(v)},T=await cs(()=>fetch(a,E));if(T.ok){const A=await T.json();return{fid:A.fid||r,registrationStatus:2,refreshToken:A.refreshToken,authToken:as(A.authToken)}}else throw await hs("Create Installation",T)}/**
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
 */function us(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function Zo(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ta=/^[cdef][\w-]{21}$/,an="";function ea(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const r=na(i);return ta.test(r)?r:an}catch{return an}}function na(i){return Zo(i).substr(0,22)}/**
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
 */function Ae(i){return`${i.appName}!${i.appId}`}/**
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
 */const fs=new Map;function ds(i,e){const r=Ae(i);ps(r,e),ia(r,e)}function ps(i,e){const r=fs.get(i);if(r)for(const a of r)a(e)}function ia(i,e){const r=sa();r&&r.postMessage({key:i,fid:e}),ra()}let wt=null;function sa(){return!wt&&"BroadcastChannel"in self&&(wt=new BroadcastChannel("[Firebase] FID Change"),wt.onmessage=i=>{ps(i.data.key,i.data.fid)}),wt}function ra(){fs.size===0&&wt&&(wt.close(),wt=null)}/**
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
 */const oa="firebase-installations-database",aa=1,It="firebase-installations-store";let tn=null;function pn(){return tn||(tn=Bi(oa,aa,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(It)}}})),tn}async function Ee(i,e){const r=Ae(i),h=(await pn()).transaction(It,"readwrite"),d=h.objectStore(It),v=await d.get(r);return await d.put(e,r),await h.done,(!v||v.fid!==e.fid)&&ds(i,e.fid),e}async function gs(i){const e=Ae(i),a=(await pn()).transaction(It,"readwrite");await a.objectStore(It).delete(e),await a.done}async function _e(i,e){const r=Ae(i),h=(await pn()).transaction(It,"readwrite"),d=h.objectStore(It),v=await d.get(r),E=e(v);return E===void 0?await d.delete(r):await d.put(E,r),await h.done,E&&(!v||v.fid!==E.fid)&&ds(i,E.fid),E}/**
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
 */async function gn(i){let e;const r=await _e(i.appConfig,a=>{const h=ha(a),d=la(i,h);return e=d.registrationPromise,d.installationEntry});return r.fid===an?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function ha(i){const e=i||{fid:ea(),registrationStatus:0};return ms(e)}function la(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const h=Promise.reject(Et.create("app-offline"));return{installationEntry:e,registrationPromise:h}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=ca(i,r);return{installationEntry:r,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ua(i)}:{installationEntry:e}}async function ca(i,e){try{const r=await Qo(i,e);return Ee(i.appConfig,r)}catch(r){throw rs(r)&&r.customData.serverCode===409?await gs(i.appConfig):await Ee(i.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function ua(i){let e=await ki(i.appConfig);for(;e.registrationStatus===1;)await us(100),e=await ki(i.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:a}=await gn(i);return a||r}return e}function ki(i){return _e(i,e=>{if(!e)throw Et.create("installation-not-found");return ms(e)})}function ms(i){return fa(i)?{fid:i.fid,registrationStatus:0}:i}function fa(i){return i.registrationStatus===1&&i.registrationTime+ns<Date.now()}/**
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
 */async function da({appConfig:i,heartbeatServiceProvider:e},r){const a=pa(i,r),h=Wo(i,r),d=e.getImmediate({optional:!0});if(d){const A=await d.getHeartbeatsHeader();A&&h.append("x-firebase-client",A)}const v={installation:{sdkVersion:is,appId:i.appId}},E={method:"POST",headers:h,body:JSON.stringify(v)},T=await cs(()=>fetch(a,E));if(T.ok){const A=await T.json();return as(A)}else throw await hs("Generate Auth Token",T)}function pa(i,{fid:e}){return`${os(i)}/${e}/authTokens:generate`}/**
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
 */async function mn(i,e=!1){let r;const a=await _e(i.appConfig,d=>{if(!ys(d))throw Et.create("not-registered");const v=d.authToken;if(!e&&ya(v))return d;if(v.requestStatus===1)return r=ga(i,e),d;{if(!navigator.onLine)throw Et.create("app-offline");const E=wa(d);return r=ma(i,E),E}});return r?await r:a.authToken}async function ga(i,e){let r=await Ni(i.appConfig);for(;r.authToken.requestStatus===1;)await us(100),r=await Ni(i.appConfig);const a=r.authToken;return a.requestStatus===0?mn(i,e):a}function Ni(i){return _e(i,e=>{if(!ys(e))throw Et.create("not-registered");const r=e.authToken;return Ea(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ma(i,e){try{const r=await da(i,e),a=Object.assign(Object.assign({},e),{authToken:r});return await Ee(i.appConfig,a),r}catch(r){if(rs(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await gs(i.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ee(i.appConfig,a)}throw r}}function ys(i){return i!==void 0&&i.registrationStatus===2}function ya(i){return i.requestStatus===2&&!va(i)}function va(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+Go}function wa(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function Ea(i){return i.requestStatus===1&&i.requestTime+ns<Date.now()}/**
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
 */async function Ia(i){const e=i,{installationEntry:r,registrationPromise:a}=await gn(e);return a?a.catch(console.error):mn(e).catch(console.error),r.fid}/**
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
 */async function Ta(i,e=!1){const r=i;return await Aa(r),(await mn(r,e)).token}async function Aa(i){const{registrationPromise:e}=await gn(i);e&&await e}/**
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
 */function _a(i){if(!i||!i.options)throw en("App Configuration");if(!i.name)throw en("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!i.options[r])throw en(r);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function en(i){return Et.create("missing-app-config-values",{valueName:i})}/**
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
 */const vs="installations",ba="installations-internal",Sa=i=>{const e=i.getProvider("app").getImmediate(),r=_a(e),a=Yt(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Ca=i=>{const e=i.getProvider("app").getImmediate(),r=Yt(e,vs).getImmediate();return{getId:()=>Ia(r),getToken:h=>Ta(r,h)}};function Da(){dt(new rt(vs,Sa,"PUBLIC")),dt(new rt(ba,Ca,"PRIVATE"))}Da();st(es,dn);st(es,dn,"esm2017");/**
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
 */const Ie="analytics",Ra="firebase_id",Oa="origin",Pa=60*1e3,ka="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yn="https://www.googletagmanager.com/gtag/js";/**
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
 */const K=new ln("@firebase/analytics");/**
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
 */const Na={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},X=new Te("analytics","Analytics",Na);/**
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
 */function La(i){if(!i.startsWith(yn)){const e=X.create("invalid-gtag-resource",{gtagURL:i});return K.warn(e.message),""}return i}function ws(i){return Promise.all(i.map(e=>e.catch(r=>r)))}function Ma(i,e){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(i,e)),r}function xa(i,e){const r=Ma("firebase-js-sdk-policy",{createScriptURL:La}),a=document.createElement("script"),h=`${yn}?l=${i}&id=${e}`;a.src=r?r==null?void 0:r.createScriptURL(h):h,a.async=!0,document.head.appendChild(a)}function ja(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function Fa(i,e,r,a,h,d){const v=a[h];try{if(v)await e[v];else{const T=(await ws(r)).find(A=>A.measurementId===h);T&&await e[T.appId]}}catch(E){K.error(E)}i("config",h,d)}async function Ua(i,e,r,a,h){try{let d=[];if(h&&h.send_to){let v=h.send_to;Array.isArray(v)||(v=[v]);const E=await ws(r);for(const T of v){const A=E.find(P=>P.measurementId===T),k=A&&e[A.appId];if(k)d.push(k);else{d=[];break}}}d.length===0&&(d=Object.values(e)),await Promise.all(d),i("event",a,h||{})}catch(d){K.error(d)}}function Ba(i,e,r,a){async function h(d,...v){try{if(d==="event"){const[E,T]=v;await Ua(i,e,r,E,T)}else if(d==="config"){const[E,T]=v;await Fa(i,e,r,a,E,T)}else if(d==="consent"){const[E,T]=v;i("consent",E,T)}else if(d==="get"){const[E,T,A]=v;i("get",E,T,A)}else if(d==="set"){const[E]=v;i("set",E)}else i(d,...v)}catch(E){K.error(E)}}return h}function $a(i,e,r,a,h){let d=function(...v){window[a].push(arguments)};return window[h]&&typeof window[h]=="function"&&(d=window[h]),window[h]=Ba(d,i,e,r),{gtagCore:d,wrappedGtag:window[h]}}function Ha(i){const e=window.document.getElementsByTagName("script");for(const r of Object.values(e))if(r.src&&r.src.includes(yn)&&r.src.includes(i))return r;return null}/**
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
 */const Va=30,za=1e3;class Ga{constructor(e={},r=za){this.throttleMetadata=e,this.intervalMillis=r}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,r){this.throttleMetadata[e]=r}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Es=new Ga;function qa(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function Ka(i){var e;const{appId:r,apiKey:a}=i,h={method:"GET",headers:qa(a)},d=ka.replace("{app-id}",r),v=await fetch(d,h);if(v.status!==200&&v.status!==304){let E="";try{const T=await v.json();!((e=T.error)===null||e===void 0)&&e.message&&(E=T.error.message)}catch{}throw X.create("config-fetch-failed",{httpStatus:v.status,responseMessage:E})}return v.json()}async function Xa(i,e=Es,r){const{appId:a,apiKey:h,measurementId:d}=i.options;if(!a)throw X.create("no-app-id");if(!h){if(d)return{measurementId:d,appId:a};throw X.create("no-api-key")}const v=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},E=new Ja;return setTimeout(async()=>{E.abort()},Pa),Is({appId:a,apiKey:h,measurementId:d},v,E,e)}async function Is(i,{throttleEndTimeMillis:e,backoffCount:r},a,h=Es){var d;const{appId:v,measurementId:E}=i;try{await Wa(a,e)}catch(T){if(E)return K.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${E} provided in the "measurementId" field in the local Firebase config. [${T==null?void 0:T.message}]`),{appId:v,measurementId:E};throw T}try{const T=await Ka(i);return h.deleteThrottleMetadata(v),T}catch(T){const A=T;if(!Ya(A)){if(h.deleteThrottleMetadata(v),E)return K.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${E} provided in the "measurementId" field in the local Firebase config. [${A==null?void 0:A.message}]`),{appId:v,measurementId:E};throw T}const k=Number((d=A==null?void 0:A.customData)===null||d===void 0?void 0:d.httpStatus)===503?vi(r,h.intervalMillis,Va):vi(r,h.intervalMillis),P={throttleEndTimeMillis:Date.now()+k,backoffCount:r+1};return h.setThrottleMetadata(v,P),K.debug(`Calling attemptFetch again in ${k} millis`),Is(i,P,a,h)}}function Wa(i,e){return new Promise((r,a)=>{const h=Math.max(e-Date.now(),0),d=setTimeout(r,h);i.addEventListener(()=>{clearTimeout(d),a(X.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ya(i){if(!(i instanceof pt)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ja{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qa(i,e,r,a,h){if(h&&h.global){i("event",r,a);return}else{const d=await e,v=Object.assign(Object.assign({},a),{send_to:d});i("event",r,v)}}/**
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
 */async function Za(){if(Gi())try{await qi()}catch(i){return K.warn(X.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return K.warn(X.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function th(i,e,r,a,h,d,v){var E;const T=Xa(i);T.then(N=>{r[N.measurementId]=N.appId,i.options.measurementId&&N.measurementId!==i.options.measurementId&&K.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>K.error(N)),e.push(T);const A=Za().then(N=>{if(N)return a.getId()}),[k,P]=await Promise.all([T,A]);Ha(d)||xa(d,k.measurementId),h("js",new Date);const D=(E=v==null?void 0:v.config)!==null&&E!==void 0?E:{};return D[Oa]="firebase",D.update=!0,P!=null&&(D[Ra]=P),h("config",k.measurementId,D),k.measurementId}/**
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
 */class eh{constructor(e){this.app=e}_delete(){return delete Xt[this.app.options.appId],Promise.resolve()}}let Xt={},Li=[];const Mi={};let nn="dataLayer",nh="gtag",xi,Ts,ji=!1;function ih(){const i=[];if(vr()&&i.push("This is a browser extension environment."),wr()||i.push("Cookies are not available."),i.length>0){const e=i.map((a,h)=>`(${h+1}) ${a}`).join(" "),r=X.create("invalid-analytics-context",{errorInfo:e});K.warn(r.message)}}function sh(i,e,r){ih();const a=i.options.appId;if(!a)throw X.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)K.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw X.create("no-api-key");if(Xt[a]!=null)throw X.create("already-exists",{id:a});if(!ji){ja(nn);const{wrappedGtag:d,gtagCore:v}=$a(Xt,Li,Mi,nn,nh);Ts=d,xi=v,ji=!0}return Xt[a]=th(i,Li,Mi,e,xi,nn,r),new eh(i)}function Ih(i=Xi()){i=Ki(i);const e=Yt(i,Ie);return e.isInitialized()?e.getImmediate():rh(i)}function rh(i,e={}){const r=Yt(i,Ie);if(r.isInitialized()){const h=r.getImmediate();if(ye(e,r.getOptions()))return h;throw X.create("already-initialized")}return r.initialize({options:e})}function oh(i,e,r,a){i=Ki(i),Qa(Ts,Xt[i.app.options.appId],e,r,a).catch(h=>K.error(h))}const Fi="@firebase/analytics",Ui="0.10.9";function ah(){dt(new rt(Ie,(e,{options:r})=>{const a=e.getProvider("app").getImmediate(),h=e.getProvider("installations-internal").getImmediate();return sh(a,h,r)},"PUBLIC")),dt(new rt("analytics-internal",i,"PRIVATE")),st(Fi,Ui),st(Fi,Ui,"esm2017");function i(e){try{const r=e.getProvider(Ie).getImmediate();return{logEvent:(a,h,d)=>oh(r,a,h,d)}}catch(r){throw X.create("interop-component-reg-failed",{reason:r})}}}ah();export{rt as C,Te as E,pt as F,ln as L,yo as S,dt as _,fh as a,Yt as b,pr as c,Xi as d,vr as e,wh as f,lh as g,Ki as h,ch as i,vh as j,ye as k,C as l,zi as m,yh as n,lr as o,dh as p,mh as q,st as r,gh as s,uh as t,ph as u,vo as v,Eh as w,Ih as x};
