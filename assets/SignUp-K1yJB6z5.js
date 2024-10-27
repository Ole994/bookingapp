import{r as Qt,j as be}from"./index-xqDPF-6l.js";var Or={};/**
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
 */const Ts=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Pa=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],l=n[i++],u=n[i++],g=((o&7)<<18|(c&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const c=n[i++],l=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],l=o+1<n.length,u=l?n[o+1]:0,g=o+2<n.length,E=g?n[o+2]:0,A=c>>2,S=(c&3)<<4|u>>4;let R=(u&15)<<2|E>>6,N=E&63;g||(N=64,l||(R=64)),r.push(i[A],i[S],i[R],i[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ts(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],u=o<n.length?i[n.charAt(o)]:0;++o;const E=o<n.length?i[n.charAt(o)]:64;++o;const S=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||u==null||E==null||S==null)throw new ka;const R=c<<2|u>>4;if(r.push(R),E!==64){const N=u<<4&240|E>>2;if(r.push(N),S!==64){const P=E<<6&192|S;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ka extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oa=function(n){const e=Ts(n);return As.encodeByteArray(e,!0)},on=function(n){return Oa(n).replace(/\./g,"")},bs=function(n){try{return As.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Da(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Na=()=>Da().__FIREBASE_DEFAULTS__,La=()=>{if(typeof process>"u"||typeof Or>"u")return;const n=Or.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ma=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bs(n[1]);return e&&JSON.parse(e)},pi=()=>{try{return Na()||La()||Ma()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ss=n=>{var e,i;return(i=(e=pi())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},Ua=n=>{const e=Ss(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},Rs=()=>{var n;return(n=pi())===null||n===void 0?void 0:n.config},Cs=n=>{var e;return(e=pi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class xa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function Fa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[on(JSON.stringify(i)),on(JSON.stringify(l)),""].join(".")}/**
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
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Ba(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ps(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Va(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $a(){const n=K();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ks(){try{return typeof indexedDB=="object"}catch{return!1}}function Os(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}function Ha(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const za="FirebaseError";class oe extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=za,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?Wa(c,r):"Error",u=`${this.serviceName}: ${l} (${o}).`;return new oe(o,u,r)}}function Wa(n,e){return n.replace(Ga,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ga=/\{\$([^}]+)}/g;function Ka(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rt(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],l=e[o];if(Dr(c)&&Dr(l)){if(!Rt(c,l))return!1}else if(c!==l)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function Dr(n){return n!==null&&typeof n=="object"}/**
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
 */function kt(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qa(n,e){const i=new Ja(n,e);return i.subscribe.bind(i)}class Ja{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Xa(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=qn),o.error===void 0&&(o.error=qn),o.complete===void 0&&(o.complete=qn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xa(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function qn(){}/**
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
 */const Ya=1e3,Qa=2,Za=4*60*60*1e3,ec=.5;function Nr(n,e=Ya,i=Qa){const r=e*Math.pow(i,n),o=Math.round(ec*r*(Math.random()-.5)*2);return Math.min(Za,r+o)}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class se{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class tc{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new xa;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ic(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(c);r===u&&l.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const l=this.instances.get(o);return l&&e(l,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nc(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nc(n){return n===je?void 0:n}function ic(n){return n.instantiationMode==="EAGER"}/**
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
 */class rc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new tc(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const sc={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},oc=O.INFO,ac={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},cc=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=ac[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mn{constructor(e){this.name=e,this._logLevel=oc,this._logHandler=cc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const lc=(n,e)=>e.some(i=>n instanceof i);let Lr,Mr;function hc(){return Lr||(Lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uc(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ds=new WeakMap,si=new WeakMap,Ns=new WeakMap,Jn=new WeakMap,gi=new WeakMap;function dc(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",l)},c=()=>{i(Oe(n.result)),o()},l=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&Ds.set(i,n)}).catch(()=>{}),gi.set(e,n),e}function fc(n){if(si.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",l),n.removeEventListener("abort",l)},c=()=>{i(),o()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",l),n.addEventListener("abort",l)});si.set(n,e)}let oi={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return si.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ns.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Oe(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pc(n){oi=n(oi)}function gc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(Xn(this),e,...i);return Ns.set(r,e.sort?e.sort():[e]),Oe(r)}:uc().includes(n)?function(...e){return n.apply(Xn(this),e),Oe(Ds.get(this))}:function(...e){return Oe(n.apply(Xn(this),e))}}function mc(n){return typeof n=="function"?gc(n):(n instanceof IDBTransaction&&fc(n),lc(n,hc())?new Proxy(n,oi):n)}function Oe(n){if(n instanceof IDBRequest)return dc(n);if(Jn.has(n))return Jn.get(n);const e=mc(n);return e!==n&&(Jn.set(n,e),gi.set(e,n)),e}const Xn=n=>gi.get(n);function Ls(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(n,e),u=Oe(l);return r&&l.addEventListener("upgradeneeded",g=>{r(Oe(l.result),g.oldVersion,g.newVersion,Oe(l.transaction),g)}),i&&l.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),u.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),u}const yc=["get","getKey","getAll","getAllKeys","count"],vc=["put","add","delete","clear"],Yn=new Map;function Ur(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yn.get(e))return Yn.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=vc.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||yc.includes(i)))return;const c=async function(l,...u){const g=this.transaction(l,o?"readwrite":"readonly");let E=g.store;return r&&(E=E.index(u.shift())),(await Promise.all([E[i](...u),o&&g.done]))[0]};return Yn.set(e,c),c}pc(n=>({...n,get:(e,i,r)=>Ur(e,i)||n.get(e,i,r),has:(e,i)=>!!Ur(e,i)||n.has(e,i)}));/**
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
 */class _c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Ic(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function Ic(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ai="@firebase/app",xr="0.10.15";/**
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
 */const ve=new mn("@firebase/app"),wc="@firebase/app-compat",Ec="@firebase/analytics-compat",Tc="@firebase/analytics",Ac="@firebase/app-check-compat",bc="@firebase/app-check",Sc="@firebase/auth",Rc="@firebase/auth-compat",Cc="@firebase/database",Pc="@firebase/data-connect",kc="@firebase/database-compat",Oc="@firebase/functions",Dc="@firebase/functions-compat",Nc="@firebase/installations",Lc="@firebase/installations-compat",Mc="@firebase/messaging",Uc="@firebase/messaging-compat",xc="@firebase/performance",Fc="@firebase/performance-compat",jc="@firebase/remote-config",Bc="@firebase/remote-config-compat",Vc="@firebase/storage",$c="@firebase/storage-compat",Hc="@firebase/firestore",zc="@firebase/vertexai",Wc="@firebase/firestore-compat",Gc="firebase",Kc="11.0.1";/**
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
 */const ci="[DEFAULT]",qc={[ai]:"fire-core",[wc]:"fire-core-compat",[Tc]:"fire-analytics",[Ec]:"fire-analytics-compat",[bc]:"fire-app-check",[Ac]:"fire-app-check-compat",[Sc]:"fire-auth",[Rc]:"fire-auth-compat",[Cc]:"fire-rtdb",[Pc]:"fire-data-connect",[kc]:"fire-rtdb-compat",[Oc]:"fire-fn",[Dc]:"fire-fn-compat",[Nc]:"fire-iid",[Lc]:"fire-iid-compat",[Mc]:"fire-fcm",[Uc]:"fire-fcm-compat",[xc]:"fire-perf",[Fc]:"fire-perf-compat",[jc]:"fire-rc",[Bc]:"fire-rc-compat",[Vc]:"fire-gcs",[$c]:"fire-gcs-compat",[Hc]:"fire-fst",[Wc]:"fire-fst-compat",[zc]:"fire-vertex","fire-js":"fire-js",[Gc]:"fire-js-all"};/**
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
 */const an=new Map,Jc=new Map,li=new Map;function Fr(n,e){try{n.container.addComponent(e)}catch(i){ve.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function le(n){const e=n.name;if(li.has(e))return ve.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,n);for(const i of an.values())Fr(i,n);for(const i of Jc.values())Fr(i,n);return!0}function Ge(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function pe(n){return n.settings!==void 0}/**
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
 */const Xc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new We("app","Firebase",Xc);/**
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
 */class Yc{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new se("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const rt=Kc;function Ms(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw De.create("bad-app-name",{appName:String(o)});if(i||(i=Rs()),!i)throw De.create("no-options");const c=an.get(o);if(c){if(Rt(i,c.options)&&Rt(r,c.config))return c;throw De.create("duplicate-app",{appName:o})}const l=new rc(o);for(const g of li.values())l.addComponent(g);const u=new Yc(i,r,l);return an.set(o,u),u}function mi(n=ci){const e=an.get(n);if(!e&&n===ci&&Rs())return Ms();if(!e)throw De.create("no-app",{appName:n});return e}function te(n,e,i){var r;let o=(r=qc[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const c=o.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const u=[`Unable to register library "${o}" with version "${e}":`];c&&u.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ve.warn(u.join(" "));return}le(new se(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Qc="firebase-heartbeat-database",Zc=1,Ct="firebase-heartbeat-store";let Qn=null;function Us(){return Qn||(Qn=Ls(Qc,Zc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ct)}catch(i){console.warn(i)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),Qn}async function el(n){try{const i=(await Us()).transaction(Ct),r=await i.objectStore(Ct).get(xs(n));return await i.done,r}catch(e){if(e instanceof oe)ve.warn(e.message);else{const i=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ve.warn(i.message)}}}async function jr(n,e){try{const r=(await Us()).transaction(Ct,"readwrite");await r.objectStore(Ct).put(e,xs(n)),await r.done}catch(i){if(i instanceof oe)ve.warn(i.message);else{const r=De.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});ve.warn(r.message)}}}function xs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tl=1024,nl=30*24*60*60*1e3;class il{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new sl(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Br();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=nl}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ve.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Br(),{heartbeatsToSend:r,unsentEntries:o}=rl(this._heartbeatsCache.heartbeats),c=on(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return ve.warn(i),""}}}function Br(){return new Date().toISOString().substring(0,10)}function rl(n,e=tl){const i=[];let r=n.slice();for(const o of n){const c=i.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Vr(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Vr(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class sl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ks()?Os().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await el(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return jr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return jr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vr(n){return on(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ol(n){le(new se("platform-logger",e=>new _c(e),"PRIVATE")),le(new se("heartbeat",e=>new il(e),"PRIVATE")),te(ai,xr,n),te(ai,xr,"esm2017"),te("fire-js","")}ol("");var al="firebase",cl="11.0.1";/**
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
 */te(al,cl,"app");var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,d){function p(){}p.prototype=d.prototype,v.D=d.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(m,y,I){for(var f=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)f[ue-2]=arguments[ue];return d.prototype[y].apply(m,f)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,d,p){p||(p=0);var m=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)m[y]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(y=0;16>y;++y)m[y]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=v.g[0],p=v.g[1],y=v.g[2];var I=v.g[3],f=d+(I^p&(y^I))+m[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[1]+3905402710&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[2]+606105819&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[3]+3250441966&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[5]+1200080426&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[6]+2821735955&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[7]+4249261313&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[9]+2336552879&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[10]+4294925233&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[11]+2304563134&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[13]+4254626195&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[14]+2792965006&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[15]+1236535329&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(y^I&(p^y))+m[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[6]+3225465664&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[11]+643717713&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[0]+3921069994&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[10]+38016083&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[15]+3634488961&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[4]+3889429448&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[14]+3275163606&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[3]+4107603335&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[8]+1163531501&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[2]+4243563512&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[7]+1735328473&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[12]+2368359562&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(p^y^I)+m[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[8]+2272392833&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[11]+1839030562&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[14]+4259657740&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[4]+1272893353&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[7]+4139469664&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[10]+3200236656&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[0]+3936430074&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[3]+3572445317&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[6]+76029189&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[12]+3873151461&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[15]+530742520&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[2]+3299628645&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(y^(p|~I))+m[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[7]+1126891415&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[14]+2878612391&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[5]+4237533241&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[3]+2399980690&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[10]+4293915773&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[1]+2240044497&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[15]+4264355552&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[6]+2734768916&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[13]+1309151649&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[11]+3174756917&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[2]+718787259&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var p=d-this.blockSize,m=this.B,y=this.h,I=0;I<d;){if(y==0)for(;I<=p;)o(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<d;)if(m[y++]=v.charCodeAt(I++),y==this.blockSize){o(this,m),y=0;break}}else for(;I<d;)if(m[y++]=v[I++],y==this.blockSize){o(this,m),y=0;break}}this.h=y,this.o+=d},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var p=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=p&255,p/=256;for(this.u(v),v=Array(16),d=p=0;4>d;++d)for(var m=0;32>m;m+=8)v[p++]=this.g[d]>>>m&255;return v};function c(v,d){var p=u;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=d(v)}function l(v,d){this.h=d;for(var p=[],m=!0,y=v.length-1;0<=y;y--){var I=v[y]|0;m&&I==d||(p[y]=I,m=!1)}this.g=p}var u={};function g(v){return-128<=v&&128>v?c(v,function(d){return new l([d|0],0>d?-1:0)}):new l([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return S;if(0>v)return M(E(-v));for(var d=[],p=1,m=0;v>=p;m++)d[m]=v/p|0,p*=4294967296;return new l(d,0)}function A(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return M(A(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=E(Math.pow(d,8)),m=S,y=0;y<v.length;y+=8){var I=Math.min(8,v.length-y),f=parseInt(v.substring(y,y+I),d);8>I?(I=E(Math.pow(d,I)),m=m.j(I).add(E(f))):(m=m.j(p),m=m.add(E(f)))}return m}var S=g(0),R=g(1),N=g(16777216);n=l.prototype,n.m=function(){if(x(this))return-M(this).m();for(var v=0,d=1,p=0;p<this.g.length;p++){var m=this.i(p);v+=(0<=m?m:4294967296+m)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(x(this))return"-"+M(this).toString(v);for(var d=E(Math.pow(v,6)),p=this,m="";;){var y=ne(p,d).g;p=he(p,y.j(d));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=y,P(p))return I+m;for(;6>I.length;)I="0"+I;m=I+m}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=he(this,v),x(v)?-1:P(v)?0:1};function M(v){for(var d=v.g.length,p=[],m=0;m<d;m++)p[m]=~v.g[m];return new l(p,~v.h).add(R)}n.abs=function(){return x(this)?M(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0,y=0;y<=d;y++){var I=m+(this.i(y)&65535)+(v.i(y)&65535),f=(I>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);m=f>>>16,I&=65535,f&=65535,p[y]=f<<16|I}return new l(p,p[p.length-1]&-2147483648?-1:0)};function he(v,d){return v.add(M(d))}n.j=function(v){if(P(this)||P(v))return S;if(x(this))return x(v)?M(this).j(M(v)):M(M(this).j(v));if(x(v))return M(this.j(M(v)));if(0>this.l(N)&&0>v.l(N))return E(this.m()*v.m());for(var d=this.g.length+v.g.length,p=[],m=0;m<2*d;m++)p[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<v.g.length;y++){var I=this.i(m)>>>16,f=this.i(m)&65535,ue=v.i(y)>>>16,ot=v.i(y)&65535;p[2*m+2*y]+=f*ot,Q(p,2*m+2*y),p[2*m+2*y+1]+=I*ot,Q(p,2*m+2*y+1),p[2*m+2*y+1]+=f*ue,Q(p,2*m+2*y+1),p[2*m+2*y+2]+=I*ue,Q(p,2*m+2*y+2)}for(m=0;m<d;m++)p[m]=p[2*m+1]<<16|p[2*m];for(m=d;m<2*d;m++)p[m]=0;return new l(p,0)};function Q(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function j(v,d){this.g=v,this.h=d}function ne(v,d){if(P(d))throw Error("division by zero");if(P(v))return new j(S,S);if(x(v))return d=ne(M(v),d),new j(M(d.g),M(d.h));if(x(d))return d=ne(v,M(d)),new j(M(d.g),d.h);if(30<v.g.length){if(x(v)||x(d))throw Error("slowDivide_ only works with positive integers.");for(var p=R,m=d;0>=m.l(v);)p=Me(p),m=Me(m);var y=q(p,1),I=q(m,1);for(m=q(m,2),p=q(p,2);!P(m);){var f=I.add(m);0>=f.l(v)&&(y=y.add(p),I=f),m=q(m,1),p=q(p,1)}return d=he(v,y.j(d)),new j(y,d)}for(y=S;0<=v.l(d);){for(p=Math.max(1,Math.floor(v.m()/d.m())),m=Math.ceil(Math.log(p)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),I=E(p),f=I.j(d);x(f)||0<f.l(v);)p-=m,I=E(p),f=I.j(d);P(I)&&(I=R),y=y.add(I),v=he(v,f)}return new j(y,v)}n.A=function(v){return ne(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)&v.i(m);return new l(p,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)|v.i(m);return new l(p,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)^v.i(m);return new l(p,this.h^v.h)};function Me(v){for(var d=v.g.length+1,p=[],m=0;m<d;m++)p[m]=v.i(m)<<1|v.i(m-1)>>>31;return new l(p,v.h)}function q(v,d){var p=d>>5;d%=32;for(var m=v.g.length-p,y=[],I=0;I<m;I++)y[I]=0<d?v.i(I+p)>>>d|v.i(I+p+1)<<32-d:v.i(I+p);return new l(y,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,Fs=l}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});var Zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zt=="object"&&Zt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var h=0;h<t.length-1;h++){var _=t[h];if(!(_ in a))break e;a=a[_]}t=t[t.length-1],h=a[t],s=s(h),s!=h&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,h=!1,_={next:function(){if(!h&&a<t.length){var w=a++;return{value:s(w,t[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function g(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function A(t,s,a){return t.call.apply(t.bind,arguments)}function S(t,s,a){if(!t)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,h),t.apply(s,_)}}return function(){return t.apply(s,arguments)}}function R(t,s,a){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:S,R.apply(null,arguments)}function N(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function P(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(h,_,w){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return s.prototype[_].apply(h,T)}}function x(t){const s=t.length;if(0<s){const a=Array(s);for(let h=0;h<s;h++)a[h]=t[h];return a}return[]}function M(t,s){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(g(h)){const _=t.length||0,w=h.length||0;t.length=_+w;for(let T=0;T<w;T++)t[_+T]=h[T]}else t.push(h)}}class he{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Q(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=u.navigator;return t&&(t=t.userAgent)?t:""}function ne(t){return ne[" "](t),t}ne[" "]=function(){};var Me=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,s,a){for(const h in t)s.call(a,t[h],h,t)}function v(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function d(t){const s={};for(const a in t)s[a]=t[a];return s}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(t,s){let a,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(a in h)t[a]=h[a];for(let w=0;w<p.length;w++)a=p[w],Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a])}}function y(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function I(t){u.setTimeout(()=>{throw t},0)}function f(){var t=En;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ue{constructor(){this.h=this.g=null}add(s,a){const h=ot.get();h.set(s,a),this.h?this.h.next=h:this.g=h,this.h=h}}var ot=new he(()=>new Go,t=>t.reset());class Go{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let at,ct=!1,En=new ue,Ni=()=>{const t=u.Promise.resolve(void 0);at=()=>{t.then(Ko)}};var Ko=()=>{for(var t;t=f();){try{t.h.call(t.g)}catch(a){I(a)}var s=ot;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}ct=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var qo=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};u.addEventListener("test",a,s),u.removeEventListener("test",a,s)}catch{}return t}();function lt(t,s){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Me){e:{try{ne(s.nodeName);var _=!0;break e}catch{}_=!1}_||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Jo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.aa.h.call(this)}}P(lt,B);var Jo={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),Xo=0;function Yo(t,s,a,h,_){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!h,this.ha=_,this.key=++Xo,this.da=this.fa=!1}function xt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ft(t){this.src=t,this.g={},this.h=0}Ft.prototype.add=function(t,s,a,h,_){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var T=An(t,s,h,_);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new Yo(s,this.src,w,!!h,_),s.fa=a,t.push(s)),s};function Tn(t,s){var a=s.type;if(a in t.g){var h=t.g[a],_=Array.prototype.indexOf.call(h,s,void 0),w;(w=0<=_)&&Array.prototype.splice.call(h,_,1),w&&(xt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function An(t,s,a,h){for(var _=0;_<t.length;++_){var w=t[_];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==h)return _}return-1}var bn="closure_lm_"+(1e6*Math.random()|0),Sn={};function Li(t,s,a,h,_){if(Array.isArray(s)){for(var w=0;w<s.length;w++)Li(t,s[w],a,h,_);return null}return a=xi(a),t&&t[Ut]?t.K(s,a,E(h)?!!h.capture:!!h,_):Qo(t,s,a,!1,h,_)}function Qo(t,s,a,h,_,w){if(!s)throw Error("Invalid event type");var T=E(_)?!!_.capture:!!_,D=Cn(t);if(D||(t[bn]=D=new Ft(t)),a=D.add(s,a,h,T,w),a.proxy)return a;if(h=Zo(),a.proxy=h,h.src=t,h.listener=a,t.addEventListener)qo||(_=T),_===void 0&&(_=!1),t.addEventListener(s.toString(),h,_);else if(t.attachEvent)t.attachEvent(Ui(s.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Zo(){function t(a){return s.call(t.src,t.listener,a)}const s=ea;return t}function Mi(t,s,a,h,_){if(Array.isArray(s))for(var w=0;w<s.length;w++)Mi(t,s[w],a,h,_);else h=E(h)?!!h.capture:!!h,a=xi(a),t&&t[Ut]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],a=An(w,a,h,_),-1<a&&(xt(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=Cn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=An(s,a,h,_)),(a=-1<t?s[t]:null)&&Rn(a))}function Rn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Ut])Tn(s.i,t);else{var a=t.type,h=t.proxy;s.removeEventListener?s.removeEventListener(a,h,t.capture):s.detachEvent?s.detachEvent(Ui(a),h):s.addListener&&s.removeListener&&s.removeListener(h),(a=Cn(s))?(Tn(a,t),a.h==0&&(a.src=null,s[bn]=null)):xt(t)}}}function Ui(t){return t in Sn?Sn[t]:Sn[t]="on"+t}function ea(t,s){if(t.da)t=!0;else{s=new lt(s,this);var a=t.listener,h=t.ha||t.src;t.fa&&Rn(t),t=a.call(h,s)}return t}function Cn(t){return t=t[bn],t instanceof Ft?t:null}var Pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(t){return typeof t=="function"?t:(t[Pn]||(t[Pn]=function(s){return t.handleEvent(s)}),t[Pn])}function V(){we.call(this),this.i=new Ft(this),this.M=this,this.F=null}P(V,we),V.prototype[Ut]=!0,V.prototype.removeEventListener=function(t,s,a,h){Mi(this,t,s,a,h)};function z(t,s){var a,h=t.F;if(h)for(a=[];h;h=h.F)a.push(h);if(t=t.M,h=s.type||s,typeof s=="string")s=new B(s,t);else if(s instanceof B)s.target=s.target||t;else{var _=s;s=new B(h,t),m(s,_)}if(_=!0,a)for(var w=a.length-1;0<=w;w--){var T=s.g=a[w];_=jt(T,h,!0,s)&&_}if(T=s.g=t,_=jt(T,h,!0,s)&&_,_=jt(T,h,!1,s)&&_,a)for(w=0;w<a.length;w++)T=s.g=a[w],_=jt(T,h,!1,s)&&_}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],h=0;h<a.length;h++)xt(a[h]);delete t.g[s],t.h--}}this.F=null},V.prototype.K=function(t,s,a,h){return this.i.add(String(t),s,!1,a,h)},V.prototype.L=function(t,s,a,h){return this.i.add(String(t),s,!0,a,h)};function jt(t,s,a,h){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var _=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==a){var D=T.listener,F=T.ha||T.src;T.fa&&Tn(t.i,T),_=D.call(F,h)!==!1&&_}}return _&&!h.defaultPrevented}function Fi(t,s,a){if(typeof t=="function")a&&(t=R(t,a));else if(t&&typeof t.handleEvent=="function")t=R(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:u.setTimeout(t,s||0)}function ji(t){t.g=Fi(()=>{t.g=null,t.i&&(t.i=!1,ji(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class ta extends we{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(t){we.call(this),this.h=t,this.g={}}P(ht,we);var Bi=[];function Vi(t){q(t.g,function(s,a){this.g.hasOwnProperty(a)&&Rn(s)},t),t.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Vi(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=u.JSON.stringify,na=u.JSON.parse,ia=class{stringify(t){return u.JSON.stringify(t,void 0)}parse(t){return u.JSON.parse(t,void 0)}};function On(){}On.prototype.h=null;function $i(t){return t.h||(t.h=t.i())}function ra(){}var ut={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dn(){B.call(this,"d")}P(Dn,B);function Nn(){B.call(this,"c")}P(Nn,B);var qe={},Hi=null;function Ln(){return Hi=Hi||new V}qe.La="serverreachability";function zi(t){B.call(this,qe.La,t)}P(zi,B);function dt(t){const s=Ln();z(s,new zi(s))}qe.STAT_EVENT="statevent";function Wi(t,s){B.call(this,qe.STAT_EVENT,t),this.stat=s}P(Wi,B);function W(t){const s=Ln();z(s,new Wi(s,t))}qe.Ma="timingevent";function Gi(t,s){B.call(this,qe.Ma,t),this.size=s}P(Gi,B);function ft(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){t()},s)}function pt(){this.g=!0}pt.prototype.xa=function(){this.g=!1};function sa(t,s,a,h,_,w){t.info(function(){if(t.g)if(w)for(var T="",D=w.split("&"),F=0;F<D.length;F++){var k=D[F].split("=");if(1<k.length){var $=k[0];k=k[1];var H=$.split("_");T=2<=H.length&&H[1]=="type"?T+($+"="+k+"&"):T+($+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+s+`
`+a+`
`+T})}function oa(t,s,a,h,_,w,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+s+`
`+a+`
`+w+" "+T})}function Je(t,s,a,h){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+ca(t,a)+(h?" "+h:"")})}function aa(t,s){t.info(function(){return"TIMEOUT: "+s})}pt.prototype.info=function(){};function ca(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var h=a[t];if(!(2>h.length)){var _=h[1];if(Array.isArray(_)&&!(1>_.length)){var w=_[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<_.length;T++)_[T]=""}}}}return kn(a)}catch{return s}}var Mn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},la={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function Bt(){}P(Bt,On),Bt.prototype.g=function(){return new XMLHttpRequest},Bt.prototype.i=function(){return{}},Un=new Bt;function Ee(t,s,a,h){this.j=t,this.i=s,this.l=a,this.R=h||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var qi={},xn={};function Fn(t,s,a){t.L=1,t.v=zt(de(s)),t.m=a,t.P=!0,Ji(t,null)}function Ji(t,s){t.F=Date.now(),Vt(t),t.A=de(t.v);var a=t.A,h=t.R;Array.isArray(h)||(h=[String(h)]),lr(a.i,"t",h),t.C=0,a=t.j.J,t.h=new Ki,t.g=Rr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new ta(R(t.Y,t,t.g),t.O)),s=t.U,a=t.g,h=t.ca;var _="readystatechange";Array.isArray(_)||(_&&(Bi[0]=_.toString()),_=Bi);for(var w=0;w<_.length;w++){var T=Li(a,_[w],h||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?d(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),dt(),sa(t.i,t.u,t.A,t.l,t.R,t.m)}Ee.prototype.ca=function(t){t=t.target;const s=this.M;s&&fe(t)==3?s.j():this.Y(t)},Ee.prototype.Y=function(t){try{if(t==this.g)e:{const H=fe(this.g);var s=this.g.Ba();const Qe=this.g.Z();if(!(3>H)&&(H!=3||this.g&&(this.h.h||this.g.oa()||mr(this.g)))){this.J||H!=4||s==7||(s==8||0>=Qe?dt(3):dt(2)),jn(this);var a=this.g.Z();this.X=a;t:if(Xi(this)){var h=mr(this.g);t="";var _=h.length,w=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),gt(this);var T="";break t}this.h.i=new u.TextDecoder}for(s=0;s<_;s++)this.h.h=!0,t+=this.h.i.decode(h[s],{stream:!(w&&s==_-1)});h.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,oa(this.i,this.u,this.A,this.l,this.R,H,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,F=this.g;if((D=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(D)){var k=D;break t}}k=null}if(a=k)Je(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bn(this,a);else{this.o=!1,this.s=3,W(12),Ue(this),gt(this);break e}}if(this.P){a=!0;let ie;for(;!this.J&&this.C<T.length;)if(ie=ha(this,T),ie==xn){H==4&&(this.s=4,W(14),a=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}else if(ie==qi){this.s=4,W(15),Je(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Je(this.i,this.l,ie,null),Bn(this,ie);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||T.length!=0||this.h.h||(this.s=1,W(16),a=!1),this.o=this.o&&a,!a)Je(this.i,this.l,T,"[Invalid Chunked Response]"),Ue(this),gt(this);else if(0<T.length&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.ba&&!$.M&&($.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Gn($),$.M=!0,W(11))}}else Je(this.i,this.l,T,null),Bn(this,T);H==4&&Ue(this),this.o&&!this.J&&(H==4?Tr(this.j,this):(this.o=!1,Vt(this)))}else Ra(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,W(12)):(this.s=0,W(13)),Ue(this),gt(this)}}}catch{}finally{}};function Xi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ha(t,s){var a=t.C,h=s.indexOf(`
`,a);return h==-1?xn:(a=Number(s.substring(a,h)),isNaN(a)?qi:(h+=1,h+a>s.length?xn:(s=s.slice(h,h+a),t.C=h+a,s)))}Ee.prototype.cancel=function(){this.J=!0,Ue(this)};function Vt(t){t.S=Date.now()+t.I,Yi(t,t.I)}function Yi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ft(R(t.ba,t),s)}function jn(t){t.B&&(u.clearTimeout(t.B),t.B=null)}Ee.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(aa(this.i,this.A),this.L!=2&&(dt(),W(17)),Ue(this),this.s=2,gt(this)):Yi(this,this.S-t)};function gt(t){t.j.G==0||t.J||Tr(t.j,t)}function Ue(t){jn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Vi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Bn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Vn(a.h,t))){if(!t.K&&Vn(a.h,t)&&a.G==3){try{var h=a.Da.g.parse(s)}catch{h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Xt(a),qt(a);else break e;Wn(a),W(18)}}else a.za=_[1],0<a.za-a.T&&37500>_[2]&&a.F&&a.v==0&&!a.C&&(a.C=ft(R(a.Za,a),6e3));if(1>=er(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Fe(a,11)}else if((t.K||a.g==t)&&Xt(a),!Q(s))for(_=a.Da.g.parse(s),s=0;s<_.length;s++){let k=_[s];if(a.T=k[0],k=k[1],a.G==2)if(k[0]=="c"){a.K=k[1],a.ia=k[2];const $=k[3];$!=null&&(a.la=$,a.j.info("VER="+a.la));const H=k[4];H!=null&&(a.Aa=H,a.j.info("SVER="+a.Aa));const Qe=k[5];Qe!=null&&typeof Qe=="number"&&0<Qe&&(h=1.5*Qe,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const ie=t.g;if(ie){const Yt=ie.g?ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yt){var w=h.h;w.g||Yt.indexOf("spdy")==-1&&Yt.indexOf("quic")==-1&&Yt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&($n(w,w.h),w.h=null))}if(h.D){const Kn=ie.g?ie.g.getResponseHeader("X-HTTP-Session-Id"):null;Kn&&(h.ya=Kn,L(h.I,h.D,Kn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var T=t;if(h.qa=Sr(h,h.J?h.ia:null,h.W),T.K){tr(h.h,T);var D=T,F=h.L;F&&(D.I=F),D.B&&(jn(D),Vt(D)),h.g=T}else wr(h);0<a.i.length&&Jt(a)}else k[0]!="stop"&&k[0]!="close"||Fe(a,7);else a.G==3&&(k[0]=="stop"||k[0]=="close"?k[0]=="stop"?Fe(a,7):zn(a):k[0]!="noop"&&a.l&&a.l.ta(k),a.v=0)}}dt(4)}catch{}}var ua=class{constructor(t,s){this.g=t,this.map=s}};function Qi(t){this.l=t||10,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function er(t){return t.h?1:t.g?t.g.size:0}function Vn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function $n(t,s){t.g?t.g.add(s):t.h=s}function tr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Qi.prototype.cancel=function(){if(this.i=nr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nr(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return x(t.i)}function da(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(g(t)){for(var s=[],a=t.length,h=0;h<a;h++)s.push(t[h]);return s}s=[],a=0;for(h in t)s[a++]=t[h];return s}function fa(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(g(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const h in t)s[a++]=h;return s}}}function ir(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(g(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=fa(t),h=da(t),_=h.length,w=0;w<_;w++)s.call(void 0,h[w],a&&a[w],t)}var rr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pa(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var h=t[a].indexOf("="),_=null;if(0<=h){var w=t[a].substring(0,h);_=t[a].substring(h+1)}else w=t[a];s(w,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function xe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof xe){this.h=t.h,$t(this,t.j),this.o=t.o,this.g=t.g,Ht(this,t.s),this.l=t.l;var s=t.i,a=new vt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),sr(this,a),this.m=t.m}else t&&(s=String(t).match(rr))?(this.h=!1,$t(this,s[1]||"",!0),this.o=mt(s[2]||""),this.g=mt(s[3]||"",!0),Ht(this,s[4]),this.l=mt(s[5]||"",!0),sr(this,s[6]||"",!0),this.m=mt(s[7]||"")):(this.h=!1,this.i=new vt(null,this.h))}xe.prototype.toString=function(){var t=[],s=this.j;s&&t.push(yt(s,or,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(yt(s,or,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(yt(a,a.charAt(0)=="/"?ya:ma,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",yt(a,_a)),t.join("")};function de(t){return new xe(t)}function $t(t,s,a){t.j=a?mt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Ht(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function sr(t,s,a){s instanceof vt?(t.i=s,Ia(t.i,t.h)):(a||(s=yt(s,va)),t.i=new vt(s,t.h))}function L(t,s,a){t.i.set(s,a)}function zt(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,ga),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ga(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var or=/[#\/\?@]/g,ma=/[#\?:]/g,ya=/[#\?]/g,va=/[#\?@]/g,_a=/#/g;function vt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Te(t){t.g||(t.g=new Map,t.h=0,t.i&&pa(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=vt.prototype,n.add=function(t,s){Te(this),this.i=null,t=Xe(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function ar(t,s){Te(t),s=Xe(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function cr(t,s){return Te(t),s=Xe(t,s),t.g.has(s)}n.forEach=function(t,s){Te(this),this.g.forEach(function(a,h){a.forEach(function(_){t.call(s,_,h,this)},this)},this)},n.na=function(){Te(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let h=0;h<s.length;h++){const _=t[h];for(let w=0;w<_.length;w++)a.push(s[h])}return a},n.V=function(t){Te(this);let s=[];if(typeof t=="string")cr(this,t)&&(s=s.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},n.set=function(t,s){return Te(this),this.i=null,t=Xe(this,t),cr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function lr(t,s,a){ar(t,s),0<a.length&&(t.i=null,t.g.set(Xe(t,s),x(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var h=s[a];const w=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var _=w;T[h]!==""&&(_+="="+encodeURIComponent(String(T[h]))),t.push(_)}}return this.i=t.join("&")};function Xe(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Ia(t,s){s&&!t.j&&(Te(t),t.i=null,t.g.forEach(function(a,h){var _=h.toLowerCase();h!=_&&(ar(this,h),lr(this,_,a))},t)),t.j=s}function wa(t,s){const a=new pt;if(u.Image){const h=new Image;h.onload=N(Ae,a,"TestLoadImage: loaded",!0,s,h),h.onerror=N(Ae,a,"TestLoadImage: error",!1,s,h),h.onabort=N(Ae,a,"TestLoadImage: abort",!1,s,h),h.ontimeout=N(Ae,a,"TestLoadImage: timeout",!1,s,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else s(!1)}function Ea(t,s){const a=new pt,h=new AbortController,_=setTimeout(()=>{h.abort(),Ae(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:h.signal}).then(w=>{clearTimeout(_),w.ok?Ae(a,"TestPingServer: ok",!0,s):Ae(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(_),Ae(a,"TestPingServer: error",!1,s)})}function Ae(t,s,a,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(a)}catch{}}function Ta(){this.g=new ia}function Aa(t,s,a){const h=a||"";try{ir(t,function(_,w){let T=_;E(_)&&(T=kn(_)),s.push(h+w+"="+encodeURIComponent(T))})}catch(_){throw s.push(h+"type="+encodeURIComponent("_badmap")),_}}function Wt(t){this.l=t.Ub||null,this.j=t.eb||!1}P(Wt,On),Wt.prototype.g=function(){return new Gt(this.l,this.j)},Wt.prototype.i=function(t){return function(){return t}}({});function Gt(t,s){V.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Gt,V),n=Gt.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,It(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||u).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_t(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,It(this)),this.g&&(this.readyState=3,It(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hr(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function hr(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?_t(this):It(this),this.readyState==3&&hr(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,_t(this))},n.Qa=function(t){this.g&&(this.response=t,_t(this))},n.ga=function(){this.g&&_t(this)};function _t(t){t.readyState=4,t.l=null,t.j=null,t.v=null,It(t)}n.setRequestHeader=function(t,s){this.u.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function It(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ur(t){let s="";return q(t,function(a,h){s+=h,s+=":",s+=a,s+=`\r
`}),s}function Hn(t,s,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=ur(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):L(t,s,a))}function U(t){V.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(U,V);var ba=/^https?$/i,Sa=["POST","PUT"];n=U.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,s,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?$i(this.o):$i(Un),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){dr(this,w);return}if(t=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)a.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())a.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),_=u.FormData&&t instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Sa,s,void 0))||h||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of a)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gr(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){dr(this,w)}};function dr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,fr(t),Kt(t)}function fr(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),Kt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kt(this,!0)),U.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pr(this):this.bb())},n.bb=function(){pr(this)};function pr(t){if(t.h&&typeof l<"u"&&(!t.v[1]||fe(t)!=4||t.Z()!=2)){if(t.u&&fe(t)==4)Fi(t.Ea,0,t);else if(z(t,"readystatechange"),fe(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var h;if(h=T===0){var _=String(t.D).match(rr)[1]||null;!_&&u.self&&u.self.location&&(_=u.self.location.protocol.slice(0,-1)),h=!ba.test(_?_.toLowerCase():"")}a=h}if(a)z(t,"complete"),z(t,"success");else{t.m=6;try{var w=2<fe(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",fr(t)}}finally{Kt(t)}}}}function Kt(t,s){if(t.g){gr(t);const a=t.g,h=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||z(t,"ready");try{a.onreadystatechange=h}catch{}}}function gr(t){t.I&&(u.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function fe(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),na(s)}};function mr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ra(t){const s={};t=(t.g&&2<=fe(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(Q(t[h]))continue;var a=y(t[h]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[_]||[];s[_]=w,w.push(a)}v(s,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function yr(t){this.Aa=0,this.i=[],this.j=new pt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wt("baseRetryDelayMs",5e3,t),this.cb=wt("retryDelaySeedMs",1e4,t),this.Wa=wt("forwardChannelMaxRetries",2,t),this.wa=wt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(t&&t.concurrentRequestLimit),this.Da=new Ta,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yr.prototype,n.la=8,n.G=1,n.connect=function(t,s,a,h){W(0),this.W=t,this.H=s||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=Sr(this,null,this.W),Jt(this)};function zn(t){if(vr(t),t.G==3){var s=t.U++,a=de(t.I);if(L(a,"SID",t.K),L(a,"RID",s),L(a,"TYPE","terminate"),Et(t,a),s=new Ee(t,t.j,s),s.L=2,s.v=zt(de(a)),a=!1,u.navigator&&u.navigator.sendBeacon)try{a=u.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&u.Image&&(new Image().src=s.v,a=!0),a||(s.g=Rr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Vt(s)}br(t)}function qt(t){t.g&&(Gn(t),t.g.cancel(),t.g=null)}function vr(t){qt(t),t.u&&(u.clearTimeout(t.u),t.u=null),Xt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&u.clearTimeout(t.s),t.s=null)}function Jt(t){if(!Zi(t.h)&&!t.s){t.s=!0;var s=t.Ga;at||Ni(),ct||(at(),ct=!0),En.add(s,t),t.B=0}}function Ca(t,s){return er(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ft(R(t.Ga,t,s),Ar(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const _=new Ee(this,this.j,t);let w=this.o;if(this.S&&(w?(w=d(w),m(w,this.S)):w=this.S),this.m!==null||this.O||(_.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(s+=h,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Ir(this,_,s),a=de(this.I),L(a,"RID",t),L(a,"CVER",22),this.D&&L(a,"X-HTTP-Session-Id",this.D),Et(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(ur(w)))+"&"+s:this.m&&Hn(a,this.m,w)),$n(this.h,_),this.Ua&&L(a,"TYPE","init"),this.P?(L(a,"$req",s),L(a,"SID","null"),_.T=!0,Fn(_,a,null)):Fn(_,a,s),this.G=2}}else this.G==3&&(t?_r(this,t):this.i.length==0||Zi(this.h)||_r(this))};function _r(t,s){var a;s?a=s.l:a=t.U++;const h=de(t.I);L(h,"SID",t.K),L(h,"RID",a),L(h,"AID",t.T),Et(t,h),t.m&&t.o&&Hn(h,t.m,t.o),a=new Ee(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=Ir(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),$n(t.h,a),Fn(a,h,s)}function Et(t,s){t.H&&q(t.H,function(a,h){L(s,h,a)}),t.l&&ir({},function(a,h){L(s,h,a)})}function Ir(t,s,a){a=Math.min(t.i.length,a);var h=t.l?R(t.l.Na,t.l,t):null;e:{var _=t.i;let w=-1;for(;;){const T=["count="+a];w==-1?0<a?(w=_[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let D=!0;for(let F=0;F<a;F++){let k=_[F].g;const $=_[F].map;if(k-=w,0>k)w=Math.max(0,_[F].g-100),D=!1;else try{Aa($,T,"req"+k+"_")}catch{h&&h($)}}if(D){h=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,h}function wr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;at||Ni(),ct||(at(),ct=!0),En.add(s,t),t.v=0}}function Wn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ft(R(t.Fa,t),Ar(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Er(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ft(R(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,W(10),qt(this),Er(this))};function Gn(t){t.A!=null&&(u.clearTimeout(t.A),t.A=null)}function Er(t){t.g=new Ee(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=de(t.qa);L(s,"RID","rpc"),L(s,"SID",t.K),L(s,"AID",t.T),L(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(s,"TO",t.ja),L(s,"TYPE","xmlhttp"),Et(t,s),t.m&&t.o&&Hn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=zt(de(s)),a.m=null,a.P=!0,Ji(a,t)}n.Za=function(){this.C!=null&&(this.C=null,qt(this),Wn(this),W(19))};function Xt(t){t.C!=null&&(u.clearTimeout(t.C),t.C=null)}function Tr(t,s){var a=null;if(t.g==s){Xt(t),Gn(t),t.g=null;var h=2}else if(Vn(t.h,s))a=s.D,tr(t.h,s),h=1;else return;if(t.G!=0){if(s.o)if(h==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var _=t.B;h=Ln(),z(h,new Gi(h,a)),Jt(t)}else wr(t);else if(_=s.s,_==3||_==0&&0<s.X||!(h==1&&Ca(t,s)||h==2&&Wn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),_){case 1:Fe(t,5);break;case 4:Fe(t,10);break;case 3:Fe(t,6);break;default:Fe(t,2)}}}function Ar(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Fe(t,s){if(t.j.info("Error code "+s),s==2){var a=R(t.fb,t),h=t.Xa;const _=!h;h=new xe(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||$t(h,"https"),zt(h),_?wa(h.toString(),a):Ea(h.toString(),a)}else W(2);t.G=0,t.l&&t.l.sa(s),br(t),vr(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),W(2)):(this.j.info("Failed to ping google.com"),W(1))};function br(t){if(t.G=0,t.ka=[],t.l){const s=nr(t.h);(s.length!=0||t.i.length!=0)&&(M(t.ka,s),M(t.ka,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ra()}}function Sr(t,s,a){var h=a instanceof xe?de(a):new xe(a);if(h.g!="")s&&(h.g=s+"."+h.g),Ht(h,h.s);else{var _=u.location;h=_.protocol,s=s?s+"."+_.hostname:_.hostname,_=+_.port;var w=new xe(null);h&&$t(w,h),s&&(w.g=s),_&&Ht(w,_),a&&(w.l=a),h=w}return a=t.D,s=t.ya,a&&s&&L(h,a,s),L(h,"VER",t.la),Et(t,h),h}function Rr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new U(new Wt({eb:a})):new U(t.pa),s.Ha(t.J),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cr(){}n=Cr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ee(t,s){V.call(this),this.g=new yr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Q(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Q(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Ye(this)}P(ee,V),ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){zn(this.g)},ee.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=kn(t),t=a);s.i.push(new ua(s.Ya++,t)),s.G==3&&Jt(s)},ee.prototype.N=function(){this.g.l=null,delete this.j,zn(this.g),delete this.g,ee.aa.N.call(this)};function Pr(t){Dn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}P(Pr,Dn);function kr(){Nn.call(this),this.status=1}P(kr,Nn);function Ye(t){this.g=t}P(Ye,Cr),Ye.prototype.ua=function(){z(this.g,"a")},Ye.prototype.ta=function(t){z(this.g,new Pr(t))},Ye.prototype.sa=function(t){z(this.g,new kr)},Ye.prototype.ra=function(){z(this.g,"b")},ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,la.COMPLETE="complete",ra.EventType=ut,ut.OPEN="a",ut.CLOSE="b",ut.ERROR="c",ut.MESSAGE="d",V.prototype.listen=V.prototype.K,U.prototype.listenOnce=U.prototype.L,U.prototype.getLastError=U.prototype.Ka,U.prototype.getLastErrorCode=U.prototype.Ba,U.prototype.getStatus=U.prototype.Z,U.prototype.getResponseJson=U.prototype.Oa,U.prototype.getResponseText=U.prototype.oa,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Ha}).apply(typeof Zt<"u"?Zt:typeof self<"u"?self:typeof window<"u"?window:{});const Hr="@firebase/firestore";/**
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
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
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
 */let Ot="11.0.0";/**
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
 */const it=new mn("@firebase/firestore");function re(n,...e){if(it.logLevel<=O.DEBUG){const i=e.map(yi);it.debug(`Firestore (${Ot}): ${n}`,...i)}}function js(n,...e){if(it.logLevel<=O.ERROR){const i=e.map(yi);it.error(`Firestore (${Ot}): ${n}`,...i)}}function ll(n,...e){if(it.logLevel<=O.WARN){const i=e.map(yi);it.warn(`Firestore (${Ot}): ${n}`,...i)}}function yi(n){if(typeof n=="string")return n;try{/**
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
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
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
 */function vi(n="Unexpected state"){const e=`FIRESTORE (${Ot}) INTERNAL ASSERTION FAILED: `+n;throw js(e),new Error(e)}function Tt(n,e){n||vi()}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends oe{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class At{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class Bs{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(G.UNAUTHENTICATED))}shutdown(){}}class ul{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class dl{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Tt(this.o===void 0);let r=this.i;const o=g=>this.i!==r?(r=this.i,i(g)):Promise.resolve();let c=new At;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new At,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},u=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(g=>u(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?u(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new At)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Tt(typeof r.accessToken=="string"),new Bs(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Tt(e===null||typeof e=="string"),new G(e)}}class fl{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=G.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pl{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new fl(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ml{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){Tt(this.o===void 0);const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,re("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Tt(typeof i.token=="string"),this.R=i.token,new gl(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function yl(n){return n.name==="IndexedDbTransactionError"}class cn{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new cn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var zr,C;(C=zr||(zr={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Fs([4294967295,4294967295],0);function Zn(){return typeof document<"u"?document:null}/**
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
 */class vl{constructor(e,i,r=1e3,o=1.5,c=6e4){this.ui=e,this.timerId=i,this.ko=r,this.qo=o,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,i-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class _i{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const l=Date.now()+r,u=new _i(e,i,l,o,c);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Wr,Gr;(Gr=Wr||(Wr={})).ea="default",Gr.Cache="cache";/**
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
 */function _l(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Kr=new Map;function Il(n,e,i,r){if(e===!0&&r===!0)throw new X(J.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":vi()}function El(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=wl(n);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
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
 */class qr{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Il("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_l((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vs{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hl;switch(r.type){case"firstParty":return new pl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=Kr.get(i);r&&(re("ComponentProvider","Removing Datastore"),Kr.delete(i),r.terminate())}(this),Promise.resolve()}}function Tl(n,e,i,r={}){var o;const c=(n=El(n,Vs))._getSettings(),l=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let u,g;if(typeof r.mockUserToken=="string")u=r.mockUserToken,g=G.MOCK_USER;else{u=Fa(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new G(E)}n._authCredentials=new ul(new Bs(u,g))}}/**
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
 */class Jr{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vl(this,"async_queue_retry"),this.Vu=()=>{const r=Zn();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const i=Zn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=Zn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const i=new At;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!yl(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const i=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const o=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw js("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=i,i}enqueueAfterDelay(e,i,r){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const o=_i.createAndSchedule(this,e,i,r,c=>this.yu(c));return this.Tu.push(o),o}fu(){this.Eu&&vi()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}class Al extends Vs{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new Jr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jr(e),this._firestoreClient=void 0,await e}}}function bl(n,e){const i=typeof n=="object"?n:mi(),r=typeof n=="string"?n:"(default)",o=Ge(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Ua("firestore");c&&Tl(o,...c)}return o}(function(e,i=!0){(function(o){Ot=o})(rt),le(new se("firestore",(r,{instanceIdentifier:o,options:c})=>{const l=r.getProvider("app").getImmediate(),u=new Al(new dl(r.getProvider("auth-internal")),new ml(r.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cn(E.options.projectId,A)}(l,o),l);return c=Object.assign({useFetchStreams:i},c),u._setSettings(c),u},"PUBLIC").setMultipleInstances(!0)),te(Hr,"4.7.4",e),te(Hr,"4.7.4","esm2017")})();function Ii(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}function $s(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sl=$s,Hs=new We("auth","Firebase",$s());/**
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
 */const ln=new mn("@firebase/auth");function Rl(n,...e){ln.logLevel<=O.WARN&&ln.warn(`Auth (${rt}): ${n}`,...e)}function tn(n,...e){ln.logLevel<=O.ERROR&&ln.error(`Auth (${rt}): ${n}`,...e)}/**
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
 */function _e(n,...e){throw wi(n,...e)}function ae(n,...e){return wi(n,...e)}function zs(n,e,i){const r=Object.assign(Object.assign({},Sl()),{[e]:i});return new We("auth","Firebase",r).create(e,{appName:n.name})}function Ne(n){return zs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wi(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return Hs.create(n,...e)}function b(n,e,...i){if(!n)throw wi(e,...i)}function ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tn(e),new Error(e)}function Ie(n,e){n||ge(e)}/**
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
 */function hi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cl(){return Xr()==="http:"||Xr()==="https:"}function Xr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Pl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cl()||Ps()||"connection"in navigator)?navigator.onLine:!0}function kl(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Dt{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ie(i>e,"Short delay should be less than long delay!"),this.isMobile=ja()||Va()}get(){return Pl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ei(n,e){Ie(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Ws{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ol={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dl=new Dt(3e4,6e4);function Nt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ke(n,e,i,r,o={}){return Gs(n,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const u=kt(Object.assign({key:n.config.apiKey},l)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const E=Object.assign({method:e,headers:g},c);return Ba()||(E.referrerPolicy="no-referrer"),Ws.fetch()(qs(n,n.config.apiHost,i,u),E)})}async function Gs(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ol),e);try{const o=new Ll(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw en(n,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const u=c.ok?l.errorMessage:l.error.message,[g,E]=u.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw en(n,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw en(n,"email-already-in-use",l);if(g==="USER_DISABLED")throw en(n,"user-disabled",l);const A=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw zs(n,A,E);_e(n,A)}}catch(o){if(o instanceof oe)throw o;_e(n,"network-request-failed",{message:String(o)})}}async function Ks(n,e,i,r,o={}){const c=await Ke(n,e,i,r,o);return"mfaPendingCredential"in c&&_e(n,"multi-factor-auth-required",{_serverResponse:c}),c}function qs(n,e,i,r){const o=`${e}${i}?${r}`;return n.config.emulator?Ei(n.config,o):`${n.config.apiScheme}://${o}`}function Nl(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ll{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(ae(this.auth,"network-request-failed")),Dl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function en(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=ae(n,e,r);return o.customData._tokenResponse=i,o}function Yr(n){return n!==void 0&&n.enterprise!==void 0}class Ml{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return Nl(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ul(n,e){return Ke(n,"GET","/v2/recaptchaConfig",Nt(n,e))}/**
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
 */async function xl(n,e){return Ke(n,"POST","/v1/accounts:delete",e)}async function Js(n,e){return Ke(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function bt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fl(n,e=!1){const i=Le(n),r=await i.getIdToken(e),o=Ti(r);b(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:bt(ei(o.auth_time)),issuedAtTime:bt(ei(o.iat)),expirationTime:bt(ei(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function ei(n){return Number(n)*1e3}function Ti(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return tn("JWT malformed, contained fewer than 3 sections"),null;try{const o=bs(i);return o?JSON.parse(o):(tn("Failed to decode base64 JWT payload"),null)}catch(o){return tn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Qr(n){const e=Ti(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pt(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof oe&&jl(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Bl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ui{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=bt(this.lastLoginAt),this.creationTime=bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hn(n){var e;const i=n.auth,r=await n.getIdToken(),o=await Pt(n,Js(i,{idToken:r}));b(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];n._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Xs(c.providerUserInfo):[],u=$l(n.providerData,l),g=n.isAnonymous,E=!(n.email&&c.passwordHash)&&!(u!=null&&u.length),A=g?E:!1,S={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:u,metadata:new ui(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(n,S)}async function Vl(n){const e=Le(n);await hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $l(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Xs(n){return n.map(e=>{var{providerId:i}=e,r=Ii(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hl(n,e){const i=await Gs(n,{},async()=>{const r=kt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,l=qs(n,o,"/v1/token",`key=${c}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Ws.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function zl(n,e){return Ke(n,"POST","/v2/accounts:revokeToken",Nt(n,e))}/**
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
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){b(e.length!==0,"internal-error");const i=Qr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await Hl(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,l=new et;return r&&(b(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(b(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(b(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
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
 */function Se(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class me{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=Ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new ui(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Pt(this,this.stsTokenManager.getToken(this.auth,e));return b(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Fl(this,e)}reload(){return Vl(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await hn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await Pt(this,xl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,l,u,g,E,A;const S=(r=i.displayName)!==null&&r!==void 0?r:void 0,R=(o=i.email)!==null&&o!==void 0?o:void 0,N=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,P=(l=i.photoURL)!==null&&l!==void 0?l:void 0,x=(u=i.tenantId)!==null&&u!==void 0?u:void 0,M=(g=i._redirectEventId)!==null&&g!==void 0?g:void 0,he=(E=i.createdAt)!==null&&E!==void 0?E:void 0,Q=(A=i.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:j,emailVerified:ne,isAnonymous:Me,providerData:q,stsTokenManager:v}=i;b(j&&v,e,"internal-error");const d=et.fromJSON(this.name,v);b(typeof j=="string",e,"internal-error"),Se(S,e.name),Se(R,e.name),b(typeof ne=="boolean",e,"internal-error"),b(typeof Me=="boolean",e,"internal-error"),Se(N,e.name),Se(P,e.name),Se(x,e.name),Se(M,e.name),Se(he,e.name),Se(Q,e.name);const p=new me({uid:j,auth:e,email:R,emailVerified:ne,displayName:S,isAnonymous:Me,photoURL:P,phoneNumber:N,tenantId:x,stsTokenManager:d,createdAt:he,lastLoginAt:Q});return q&&Array.isArray(q)&&(p.providerData=q.map(m=>Object.assign({},m))),M&&(p._redirectEventId=M),p}static async _fromIdTokenResponse(e,i,r=!1){const o=new et;o.updateFromServerResponse(i);const c=new me({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await hn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];b(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Xs(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),u=new et;u.updateFromIdToken(r);const g=new me({uid:o.localId,auth:e,stsTokenManager:u,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ui(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,E),g}}/**
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
 */const Zr=new Map;function ye(n){Ie(n instanceof Function,"Expected a class definition");let e=Zr.get(n);return e?(Ie(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zr.set(n,e),e)}/**
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
 */class Ys{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Ys.type="NONE";const es=Ys;/**
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
 */function nn(n,e,i){return`firebase:${n}:${e}:${i}`}class tt{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=nn(this.userKey,o.apiKey,c),this.fullPersistenceKey=nn("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new tt(ye(es),e,r);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||ye(es);const l=nn(r,e.config.apiKey,e.name);let u=null;for(const E of i)try{const A=await E._get(l);if(A){const S=me._fromJSON(e,A);E!==c&&(u=S),c=E;break}}catch{}const g=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new tt(c,e,r):(c=g[0],u&&await c._set(l,u.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new tt(c,e,r))}}/**
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
 */function ts(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(to(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(io(e))return"Blackberry";if(ro(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||eo(e))&&!e.includes("edge/"))return"Chrome";if(no(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qs(n=K()){return/firefox\//i.test(n)}function Zs(n=K()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eo(n=K()){return/crios\//i.test(n)}function to(n=K()){return/iemobile/i.test(n)}function no(n=K()){return/android/i.test(n)}function io(n=K()){return/blackberry/i.test(n)}function ro(n=K()){return/webos/i.test(n)}function Ai(n=K()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wl(n=K()){var e;return Ai(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gl(){return $a()&&document.documentMode===10}function so(n=K()){return Ai(n)||no(n)||ro(n)||io(n)||/windows phone/i.test(n)||to(n)}/**
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
 */function oo(n,e=[]){let i;switch(n){case"Browser":i=ts(K());break;case"Worker":i=`${ts(K())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${rt}/${r}`}/**
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
 */class Kl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((l,u)=>{try{const g=e(c);l(g)}catch(g){u(g)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ql(n,e={}){return Ke(n,"GET","/v2/passwordPolicy",Nt(n,e))}/**
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
 */const Jl=6;class Xl{constructor(e){var i,r,o,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:Jl,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,l,u;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(i=g.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(r=g.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(c=g.containsUppercaseLetter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(l=g.containsNumericCharacter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(u=g.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),g}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Yl{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ns(this),this.idTokenSubscription=new ns(this),this.beforeStateQueue=new Kl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ye(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await tt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Js(this,{idToken:e}),r=await me._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(pe(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,u=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!l||l===u)&&(g!=null&&g.user)&&(o=g.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await hn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(Ne(this));const i=e?Le(e):null;return i&&b(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ql(this),i=new Xl(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await zl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ye(e)||this._popupRedirectResolver;b(i,this,"argument-error"),this.redirectPersistenceManager=await tt.create(this,[ye(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(u,this,"internal-error"),u.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,r,o);return()=>{l=!0,g()}}else{const g=e.addObserver(i);return()=>{l=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Rl(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function st(n){return Le(n)}class ns{constructor(e){this.auth=e,this.observer=null,this.addObserver=qa(i=>this.observer=i)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ql(n){yn=n}function ao(n){return yn.loadJS(n)}function Zl(){return yn.recaptchaEnterpriseScript}function eh(){return yn.gapiScript}function th(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class nh{constructor(){this.enterprise=new ih}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class ih{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const rh="recaptcha-enterprise",co="NO_RECAPTCHA";class sh{constructor(e){this.type=rh,this.auth=st(e)}async verify(e="verify",i=!1){async function r(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(l,u)=>{Ul(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const E=new Ml(g);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,l(E.siteKey)}}).catch(g=>{u(g)})})}function o(c,l,u){const g=window.grecaptcha;Yr(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(E=>{l(E)}).catch(()=>{l(co)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nh().execute("siteKey",{action:"verify"}):new Promise((c,l)=>{r(this.auth).then(u=>{if(!i&&Yr(window.grecaptcha))o(u,c,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Zl();g.length!==0&&(g+=u),ao(g).then(()=>{o(u,c,l)}).catch(E=>{l(E)})}}).catch(u=>{l(u)})})}}async function is(n,e,i,r=!1,o=!1){const c=new sh(n);let l;if(o)l=co;else try{l=await c.verify(i)}catch{l=await c.verify(i,!0)}const u=Object.assign({},e);return r?Object.assign(u,{captchaResp:l}):Object.assign(u,{captchaResponse:l}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function oh(n,e,i,r,o){var c;if(!((c=n._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await is(n,e,i,i==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await is(n,e,i,i==="getOobCode");return r(n,u)}else return Promise.reject(l)})}/**
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
 */function ah(n,e){const i=Ge(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Rt(c,e??{}))return o;_e(o,"already-initialized")}return i.initialize({options:e})}function ch(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lh(n,e,i){const r=st(n);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=lo(e),{host:l,port:u}=hh(e),g=u===null?"":`:${u}`;r.config.emulator={url:`${c}//${l}${g}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),uh()}function lo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hh(n){const e=lo(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:rs(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:rs(l)}}}function rs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function uh(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ho{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,i){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}/**
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
 */async function nt(n,e){return Ks(n,"POST","/v1/accounts:signInWithIdp",Nt(n,e))}/**
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
 */const dh="http://localhost";class Ve extends ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):_e("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=Ii(i,["providerId","signInMethod"]);if(!r||!o)return null;const l=new Ve(r,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const i=this.buildRequest();return nt(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,nt(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,nt(e,i)}buildRequest(){const e={requestUri:dh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=kt(i)}return e}}/**
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
 */class uo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lt extends uo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Re extends Lt{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
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
 */class Ce extends Lt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Ve._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Ce.credential(i,r)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
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
 */class Pe extends Lt{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class ke extends Lt{constructor(){super("twitter.com")}static credential(e,i){return Ve._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return ke.credential(i,r)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
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
 */async function fh(n,e){return Ks(n,"POST","/v1/accounts:signUp",Nt(n,e))}/**
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
 */class $e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await me._fromIdTokenResponse(e,r,o),l=ss(r);return new $e({user:c,providerId:l,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=ss(r);return new $e({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function ss(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class un extends oe{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,un.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new un(e,i,r,o)}}function fo(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?un._fromErrorAndOperation(n,c,e,r):c})}async function ph(n,e,i=!1){const r=await Pt(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return $e._forOperation(n,"link",r)}/**
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
 */async function gh(n,e,i=!1){const{auth:r}=n;if(pe(r.app))return Promise.reject(Ne(r));const o="reauthenticate";try{const c=await Pt(n,fo(r,o,e,n),i);b(c.idToken,r,"internal-error");const l=Ti(c.idToken);b(l,r,"internal-error");const{sub:u}=l;return b(n.uid===u,r,"user-mismatch"),$e._forOperation(n,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&_e(r,"user-mismatch"),c}}/**
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
 */async function mh(n,e,i=!1){if(pe(n.app))return Promise.reject(Ne(n));const r="signIn",o=await fo(n,r,e),c=await $e._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}/**
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
 */async function yh(n){const e=st(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vh(n,e,i){if(pe(n.app))return Promise.reject(Ne(n));const r=st(n),l=await oh(r,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fh).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&yh(n),g}),u=await $e._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(u.user),u}function _h(n,e,i,r){return Le(n).onIdTokenChanged(e,i,r)}function Ih(n,e,i){return Le(n).beforeAuthStateChanged(e,i)}const dn="__sak";/**
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
 */class po{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(dn,"1"),this.storage.removeItem(dn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wh=1e3,Eh=10;class go extends po{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=so(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((l,u,g)=>{this.notifyListeners(l,g)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(r);!i&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Gl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Eh):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},wh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}go.type="LOCAL";const Th=go;/**
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
 */class mo extends po{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}mo.type="SESSION";const yo=mo;/**
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
 */function Ah(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class vn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new vn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const u=Array.from(l).map(async E=>E(i.origin,c)),g=await Ah(u);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vn.receivers=[];/**
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
 */function bi(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
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
 */class bh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((u,g)=>{const E=bi("",20);o.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(S){const R=S;if(R.data.eventId===E)switch(R.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),u(R.data.response);break;default:clearTimeout(A),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function ce(){return window}function Sh(n){ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function vo(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Rh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ch(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ph(){return vo()?self:null}/**
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
 */const _o="firebaseLocalStorageDb",kh=1,fn="firebaseLocalStorage",Io="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function _n(n,e){return n.transaction([fn],e?"readwrite":"readonly").objectStore(fn)}function Oh(){const n=indexedDB.deleteDatabase(_o);return new Mt(n).toPromise()}function di(){const n=indexedDB.open(_o,kh);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fn,{keyPath:Io})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fn)?e(r):(r.close(),await Oh(),e(await di()))})})}async function os(n,e,i){const r=_n(n,!0).put({[Io]:e,value:i});return new Mt(r).toPromise()}async function Dh(n,e){const i=_n(n,!1).get(e),r=await new Mt(i).toPromise();return r===void 0?null:r.value}function as(n,e){const i=_n(n,!0).delete(e);return new Mt(i).toPromise()}const Nh=800,Lh=3;class wo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await di(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Lh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vn._getInstance(Ph()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Rh(),!this.activeServiceWorker)return;this.sender=new bh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ch()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await di();return await os(e,dn,"1"),await as(e,dn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>os(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Dh(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>as(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=_n(o,!1).getAll();return new Mt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wo.type="LOCAL";const Mh=wo;new Dt(3e4,6e4);/**
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
 */function Uh(n,e){return e?ye(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Si extends ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,i){return nt(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function xh(n){return mh(n.auth,new Si(n),n.bypassAuthState)}function Fh(n){const{auth:e,user:i}=n;return b(i,e,"internal-error"),gh(i,new Si(n),n.bypassAuthState)}async function jh(n){const{auth:e,user:i}=n;return b(i,e,"internal-error"),ph(i,new Si(n),n.bypassAuthState)}/**
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
 */class Eo{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:l,type:u}=e;if(l){this.reject(l);return}const g={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(g))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xh;case"linkViaPopup":case"linkViaRedirect":return jh;case"reauthViaPopup":case"reauthViaRedirect":return Fh;default:_e(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bh=new Dt(2e3,1e4);class Ze extends Eo{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Ze.currentPopupAction&&Ze.currentPopupAction.cancel(),Ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bh.get())};e()}}Ze.currentPopupAction=null;/**
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
 */const Vh="pendingRedirect",rn=new Map;class $h extends Eo{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=rn.get(this.auth._key());if(!e){try{const r=await Hh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}rn.set(this.auth._key(),e)}return this.bypassAuthState||rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hh(n,e){const i=Gh(e),r=Wh(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function zh(n,e){rn.set(n._key(),e)}function Wh(n){return ye(n._redirectPersistence)}function Gh(n){return nn(Vh,n.config.apiKey,n.name)}async function Kh(n,e,i=!1){if(pe(n.app))return Promise.reject(Ne(n));const r=st(n),o=Uh(r,e),l=await new $h(r,o,i).execute();return l&&!i&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const qh=10*60*1e3;class Jh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xh(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!To(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(ae(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qh&&this.cachedEventUids.clear(),this.cachedEventUids.has(cs(e))}saveEventToCache(e){this.cachedEventUids.add(cs(e)),this.lastProcessedEventTime=Date.now()}}function cs(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function To({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return To(n);default:return!1}}/**
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
 */async function Yh(n,e={}){return Ke(n,"GET","/v1/projects",e)}/**
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
 */const Qh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zh=/^https?/;async function eu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yh(n);for(const i of e)try{if(tu(i))return}catch{}_e(n,"unauthorized-domain")}function tu(n){const e=hi(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&l.hostname===r}if(!Zh.test(i))return!1;if(Qh.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const nu=new Dt(3e4,6e4);function ls(){const n=ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function iu(n){return new Promise((e,i)=>{var r,o,c;function l(){ls(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ls(),i(ae(n,"network-request-failed"))},timeout:nu.get()})}if(!((o=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=ce().gapi)===null||c===void 0)&&c.load)l();else{const u=th("iframefcb");return ce()[u]=()=>{gapi.load?l():i(ae(n,"network-request-failed"))},ao(`${eh()}?onload=${u}`).catch(g=>i(g))}}).catch(e=>{throw sn=null,e})}let sn=null;function ru(n){return sn=sn||iu(n),sn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const su=new Dt(5e3,15e3),ou="__/auth/iframe",au="emulator/auth/iframe",cu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hu(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?Ei(e,au):`https://${n.config.authDomain}/${ou}`,r={apiKey:e.apiKey,appName:n.name,v:rt},o=lu.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${kt(r).slice(1)}`}async function uu(n){const e=await ru(n),i=ce().gapi;return b(i,n,"internal-error"),e.open({where:document.body,url:hu(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cu,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const l=ae(n,"network-request-failed"),u=ce().setTimeout(()=>{c(l)},su.get());function g(){ce().clearTimeout(u),o(r)}r.ping(g).then(g,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const du={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fu=500,pu=600,gu="_blank",mu="http://localhost";class hs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yu(n,e,i,r=fu,o=pu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const g=Object.assign(Object.assign({},du),{width:r.toString(),height:o.toString(),top:c,left:l}),E=K().toLowerCase();i&&(u=eo(E)?gu:i),Qs(E)&&(e=e||mu,g.scrollbars="yes");const A=Object.entries(g).reduce((R,[N,P])=>`${R}${N}=${P},`,"");if(Wl(E)&&u!=="_self")return vu(e||"",u),new hs(null);const S=window.open(e||"",u,A);b(S,n,"popup-blocked");try{S.focus()}catch{}return new hs(S)}function vu(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const _u="__/auth/handler",Iu="emulator/auth/handler",wu=encodeURIComponent("fac");async function us(n,e,i,r,o,c){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:rt,eventId:o};if(e instanceof uo){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Ka(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,S]of Object.entries({}))l[A]=S}if(e instanceof Lt){const A=e.getScopes().filter(S=>S!=="");A.length>0&&(l.scopes=A.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const A of Object.keys(u))u[A]===void 0&&delete u[A];const g=await n._getAppCheckToken(),E=g?`#${wu}=${encodeURIComponent(g)}`:"";return`${Eu(n)}?${kt(u).slice(1)}${E}`}function Eu({config:n}){return n.emulator?Ei(n,Iu):`https://${n.authDomain}/${_u}`}/**
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
 */const ti="webStorageSupport";class Tu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yo,this._completeRedirectFn=Kh,this._overrideRedirectResult=zh}async _openPopup(e,i,r,o){var c;Ie((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await us(e,i,r,hi(),o);return yu(e,l,bi())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await us(e,i,r,hi(),o);return Sh(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Ie(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await uu(e),r=new Jh(e);return i.register("authEvent",o=>(b(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ti,{type:ti},o=>{var c;const l=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[ti];l!==void 0&&i(!!l),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=eu(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return so()||Zs()||Ai()}}const Au=Tu;var ds="@firebase/auth",fs="1.8.0";/**
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
 */class bu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Su(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ru(n){le(new se("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;b(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oo(n)},E=new Yl(r,o,c,g);return ch(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),le(new se("auth-internal",e=>{const i=st(e.getProvider("auth").getImmediate());return(r=>new bu(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),te(ds,fs,Su(n)),te(ds,fs,"esm2017")}/**
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
 */const Cu=5*60,Pu=Cs("authIdTokenMaxAge")||Cu;let ps=null;const ku=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Pu)return;const o=i==null?void 0:i.token;ps!==o&&(ps=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ou(n=mi()){const e=Ge(n,"auth");if(e.isInitialized())return e.getImmediate();const i=ah(n,{popupRedirectResolver:Au,persistence:[Mh,Th,yo]}),r=Cs("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=ku(c.toString());Ih(i,l,()=>l(i.currentUser)),_h(i,u=>l(u))}}const o=Ss("auth");return o&&lh(i,`http://${o}`),i}function Du(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ql({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=ae("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",Du().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ru("Browser");const Ao="@firebase/installations",Ri="0.6.10";/**
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
 */const bo=1e4,So=`w:${Ri}`,Ro="FIS_v2",Nu="https://firebaseinstallations.googleapis.com/v1",Lu=60*60*1e3,Mu="installations",Uu="Installations";/**
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
 */const xu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},He=new We(Mu,Uu,xu);function Co(n){return n instanceof oe&&n.code.includes("request-failed")}/**
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
 */function Po({projectId:n}){return`${Nu}/projects/${n}/installations`}function ko(n){return{token:n.token,requestStatus:2,expiresIn:ju(n.expiresIn),creationTime:Date.now()}}async function Oo(n,e){const r=(await e.json()).error;return He.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Do({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Fu(n,{refreshToken:e}){const i=Do(n);return i.append("Authorization",Bu(e)),i}async function No(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ju(n){return Number(n.replace("s","000"))}function Bu(n){return`${Ro} ${n}`}/**
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
 */async function Vu({appConfig:n,heartbeatServiceProvider:e},{fid:i}){const r=Po(n),o=Do(n),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&o.append("x-firebase-client",E)}const l={fid:i,authVersion:Ro,appId:n.appId,sdkVersion:So},u={method:"POST",headers:o,body:JSON.stringify(l)},g=await No(()=>fetch(r,u));if(g.ok){const E=await g.json();return{fid:E.fid||i,registrationStatus:2,refreshToken:E.refreshToken,authToken:ko(E.authToken)}}else throw await Oo("Create Installation",g)}/**
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
 */function Lo(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function $u(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Hu=/^[cdef][\w-]{21}$/,fi="";function zu(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const i=Wu(n);return Hu.test(i)?i:fi}catch{return fi}}function Wu(n){return $u(n).substr(0,22)}/**
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
 */function In(n){return`${n.appName}!${n.appId}`}/**
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
 */const Mo=new Map;function Uo(n,e){const i=In(n);xo(i,e),Gu(i,e)}function xo(n,e){const i=Mo.get(n);if(i)for(const r of i)r(e)}function Gu(n,e){const i=Ku();i&&i.postMessage({key:n,fid:e}),qu()}let Be=null;function Ku(){return!Be&&"BroadcastChannel"in self&&(Be=new BroadcastChannel("[Firebase] FID Change"),Be.onmessage=n=>{xo(n.data.key,n.data.fid)}),Be}function qu(){Mo.size===0&&Be&&(Be.close(),Be=null)}/**
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
 */const Ju="firebase-installations-database",Xu=1,ze="firebase-installations-store";let ni=null;function Ci(){return ni||(ni=Ls(Ju,Xu,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ze)}}})),ni}async function pn(n,e){const i=In(n),o=(await Ci()).transaction(ze,"readwrite"),c=o.objectStore(ze),l=await c.get(i);return await c.put(e,i),await o.done,(!l||l.fid!==e.fid)&&Uo(n,e.fid),e}async function Fo(n){const e=In(n),r=(await Ci()).transaction(ze,"readwrite");await r.objectStore(ze).delete(e),await r.done}async function wn(n,e){const i=In(n),o=(await Ci()).transaction(ze,"readwrite"),c=o.objectStore(ze),l=await c.get(i),u=e(l);return u===void 0?await c.delete(i):await c.put(u,i),await o.done,u&&(!l||l.fid!==u.fid)&&Uo(n,u.fid),u}/**
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
 */async function Pi(n){let e;const i=await wn(n.appConfig,r=>{const o=Yu(r),c=Qu(n,o);return e=c.registrationPromise,c.installationEntry});return i.fid===fi?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function Yu(n){const e=n||{fid:zu(),registrationStatus:0};return jo(e)}function Qu(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(He.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Zu(n,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ed(n)}:{installationEntry:e}}async function Zu(n,e){try{const i=await Vu(n,e);return pn(n.appConfig,i)}catch(i){throw Co(i)&&i.customData.serverCode===409?await Fo(n.appConfig):await pn(n.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function ed(n){let e=await gs(n.appConfig);for(;e.registrationStatus===1;)await Lo(100),e=await gs(n.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await Pi(n);return r||i}return e}function gs(n){return wn(n,e=>{if(!e)throw He.create("installation-not-found");return jo(e)})}function jo(n){return td(n)?{fid:n.fid,registrationStatus:0}:n}function td(n){return n.registrationStatus===1&&n.registrationTime+bo<Date.now()}/**
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
 */async function nd({appConfig:n,heartbeatServiceProvider:e},i){const r=id(n,i),o=Fu(n,i),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&o.append("x-firebase-client",E)}const l={installation:{sdkVersion:So,appId:n.appId}},u={method:"POST",headers:o,body:JSON.stringify(l)},g=await No(()=>fetch(r,u));if(g.ok){const E=await g.json();return ko(E)}else throw await Oo("Generate Auth Token",g)}function id(n,{fid:e}){return`${Po(n)}/${e}/authTokens:generate`}/**
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
 */async function ki(n,e=!1){let i;const r=await wn(n.appConfig,c=>{if(!Bo(c))throw He.create("not-registered");const l=c.authToken;if(!e&&od(l))return c;if(l.requestStatus===1)return i=rd(n,e),c;{if(!navigator.onLine)throw He.create("app-offline");const u=cd(c);return i=sd(n,u),u}});return i?await i:r.authToken}async function rd(n,e){let i=await ms(n.appConfig);for(;i.authToken.requestStatus===1;)await Lo(100),i=await ms(n.appConfig);const r=i.authToken;return r.requestStatus===0?ki(n,e):r}function ms(n){return wn(n,e=>{if(!Bo(e))throw He.create("not-registered");const i=e.authToken;return ld(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sd(n,e){try{const i=await nd(n,e),r=Object.assign(Object.assign({},e),{authToken:i});return await pn(n.appConfig,r),i}catch(i){if(Co(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await Fo(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pn(n.appConfig,r)}throw i}}function Bo(n){return n!==void 0&&n.registrationStatus===2}function od(n){return n.requestStatus===2&&!ad(n)}function ad(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Lu}function cd(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ld(n){return n.requestStatus===1&&n.requestTime+bo<Date.now()}/**
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
 */async function hd(n){const e=n,{installationEntry:i,registrationPromise:r}=await Pi(e);return r?r.catch(console.error):ki(e).catch(console.error),i.fid}/**
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
 */async function ud(n,e=!1){const i=n;return await dd(i),(await ki(i,e)).token}async function dd(n){const{registrationPromise:e}=await Pi(n);e&&await e}/**
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
 */function fd(n){if(!n||!n.options)throw ii("App Configuration");if(!n.name)throw ii("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!n.options[i])throw ii(i);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ii(n){return He.create("missing-app-config-values",{valueName:n})}/**
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
 */const Vo="installations",pd="installations-internal",gd=n=>{const e=n.getProvider("app").getImmediate(),i=fd(e),r=Ge(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},md=n=>{const e=n.getProvider("app").getImmediate(),i=Ge(e,Vo).getImmediate();return{getId:()=>hd(i),getToken:o=>ud(i,o)}};function yd(){le(new se(Vo,gd,"PUBLIC")),le(new se(pd,md,"PRIVATE"))}yd();te(Ao,Ri);te(Ao,Ri,"esm2017");/**
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
 */const gn="analytics",vd="firebase_id",_d="origin",Id=60*1e3,wd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oi="https://www.googletagmanager.com/gtag/js";/**
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
 */const Y=new mn("@firebase/analytics");/**
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
 */const Ed={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Z=new We("analytics","Analytics",Ed);/**
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
 */function Td(n){if(!n.startsWith(Oi)){const e=Z.create("invalid-gtag-resource",{gtagURL:n});return Y.warn(e.message),""}return n}function $o(n){return Promise.all(n.map(e=>e.catch(i=>i)))}function Ad(n,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(n,e)),i}function bd(n,e){const i=Ad("firebase-js-sdk-policy",{createScriptURL:Td}),r=document.createElement("script"),o=`${Oi}?l=${n}&id=${e}`;r.src=i?i==null?void 0:i.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function Sd(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Rd(n,e,i,r,o,c){const l=r[o];try{if(l)await e[l];else{const g=(await $o(i)).find(E=>E.measurementId===o);g&&await e[g.appId]}}catch(u){Y.error(u)}n("config",o,c)}async function Cd(n,e,i,r,o){try{let c=[];if(o&&o.send_to){let l=o.send_to;Array.isArray(l)||(l=[l]);const u=await $o(i);for(const g of l){const E=u.find(S=>S.measurementId===g),A=E&&e[E.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),n("event",r,o||{})}catch(c){Y.error(c)}}function Pd(n,e,i,r){async function o(c,...l){try{if(c==="event"){const[u,g]=l;await Cd(n,e,i,u,g)}else if(c==="config"){const[u,g]=l;await Rd(n,e,i,r,u,g)}else if(c==="consent"){const[u,g]=l;n("consent",u,g)}else if(c==="get"){const[u,g,E]=l;n("get",u,g,E)}else if(c==="set"){const[u]=l;n("set",u)}else n(c,...l)}catch(u){Y.error(u)}}return o}function kd(n,e,i,r,o){let c=function(...l){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=Pd(c,n,e,i),{gtagCore:c,wrappedGtag:window[o]}}function Od(n){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(Oi)&&i.src.includes(n))return i;return null}/**
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
 */const Dd=30,Nd=1e3;class Ld{constructor(e={},i=Nd){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ho=new Ld;function Md(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ud(n){var e;const{appId:i,apiKey:r}=n,o={method:"GET",headers:Md(r)},c=wd.replace("{app-id}",i),l=await fetch(c,o);if(l.status!==200&&l.status!==304){let u="";try{const g=await l.json();!((e=g.error)===null||e===void 0)&&e.message&&(u=g.error.message)}catch{}throw Z.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function xd(n,e=Ho,i){const{appId:r,apiKey:o,measurementId:c}=n.options;if(!r)throw Z.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:r};throw Z.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Bd;return setTimeout(async()=>{u.abort()},Id),zo({appId:r,apiKey:o,measurementId:c},l,u,e)}async function zo(n,{throttleEndTimeMillis:e,backoffCount:i},r,o=Ho){var c;const{appId:l,measurementId:u}=n;try{await Fd(r,e)}catch(g){if(u)return Y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:u};throw g}try{const g=await Ud(n);return o.deleteThrottleMetadata(l),g}catch(g){const E=g;if(!jd(E)){if(o.deleteThrottleMetadata(l),u)return Y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:l,measurementId:u};throw g}const A=Number((c=E==null?void 0:E.customData)===null||c===void 0?void 0:c.httpStatus)===503?Nr(i,o.intervalMillis,Dd):Nr(i,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+A,backoffCount:i+1};return o.setThrottleMetadata(l,S),Y.debug(`Calling attemptFetch again in ${A} millis`),zo(n,S,r,o)}}function Fd(n,e){return new Promise((i,r)=>{const o=Math.max(e-Date.now(),0),c=setTimeout(i,o);n.addEventListener(()=>{clearTimeout(c),r(Z.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jd(n){if(!(n instanceof oe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Bd{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Vd(n,e,i,r,o){if(o&&o.global){n("event",i,r);return}else{const c=await e,l=Object.assign(Object.assign({},r),{send_to:c});n("event",i,l)}}/**
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
 */async function $d(){if(ks())try{await Os()}catch(n){return Y.warn(Z.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Y.warn(Z.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hd(n,e,i,r,o,c,l){var u;const g=xd(n);g.then(N=>{i[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&Y.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>Y.error(N)),e.push(g);const E=$d().then(N=>{if(N)return r.getId()}),[A,S]=await Promise.all([g,E]);Od(c)||bd(c,A.measurementId),o("js",new Date);const R=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return R[_d]="firebase",R.update=!0,S!=null&&(R[vd]=S),o("config",A.measurementId,R),A.measurementId}/**
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
 */class zd{constructor(e){this.app=e}_delete(){return delete St[this.app.options.appId],Promise.resolve()}}let St={},ys=[];const vs={};let ri="dataLayer",Wd="gtag",_s,Wo,Is=!1;function Gd(){const n=[];if(Ps()&&n.push("This is a browser extension environment."),Ha()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,o)=>`(${o+1}) ${r}`).join(" "),i=Z.create("invalid-analytics-context",{errorInfo:e});Y.warn(i.message)}}function Kd(n,e,i){Gd();const r=n.options.appId;if(!r)throw Z.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Z.create("no-api-key");if(St[r]!=null)throw Z.create("already-exists",{id:r});if(!Is){Sd(ri);const{wrappedGtag:c,gtagCore:l}=kd(St,ys,vs,ri,Wd);Wo=c,_s=l,Is=!0}return St[r]=Hd(n,ys,vs,e,_s,ri,i),new zd(n)}function qd(n=mi()){n=Le(n);const e=Ge(n,gn);return e.isInitialized()?e.getImmediate():Jd(n)}function Jd(n,e={}){const i=Ge(n,gn);if(i.isInitialized()){const o=i.getImmediate();if(Rt(e,i.getOptions()))return o;throw Z.create("already-initialized")}return i.initialize({options:e})}function Xd(n,e,i,r){n=Le(n),Vd(Wo,St[n.app.options.appId],e,i,r).catch(o=>Y.error(o))}const ws="@firebase/analytics",Es="0.10.9";function Yd(){le(new se(gn,(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Kd(r,o,i)},"PUBLIC")),le(new se("analytics-internal",n,"PRIVATE")),te(ws,Es),te(ws,Es,"esm2017");function n(e){try{const i=e.getProvider(gn).getImmediate();return{logEvent:(r,o,c)=>Xd(i,r,o,c)}}catch(i){throw Z.create("interop-component-reg-failed",{reason:i})}}}Yd();const Qd={apiKey:"AIzaSyBf-UV2wzdvuGdUdAb4dUVKQln6hYJWtJY",authDomain:"bookingpage-bef4a.firebaseapp.com",projectId:"bookingpage-bef4a",storageBucket:"bookingpage-bef4a.appspot.com",messagingSenderId:"676485037932",appId:"1:676485037932:web:91736d92b774a628a23d49",measurementId:"G-6JTVF4PKK8"},Di=Ms(Qd);bl(Di);const Zd=Ou(Di);qd(Di);const tf=()=>{const[n,e]=Qt.useState(""),[i,r]=Qt.useState(""),[o,c]=Qt.useState(null),[l,u]=Qt.useState(null),g=async E=>{E.preventDefault(),c(null),u(null);try{await vh(Zd,n,i),u("User registered successfully!"),console.log("User registered successfully")}catch(A){console.error("Error signing up:",A.message),c(A.message)}};return be.jsxs("div",{children:[be.jsx("h2",{children:"Sign Up"}),o&&be.jsx("p",{style:{color:"red"},children:o})," ",l&&be.jsx("p",{style:{color:"green"},children:l})," ",be.jsxs("form",{onSubmit:g,children:[be.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:E=>e(E.target.value),required:!0}),be.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:E=>r(E.target.value),required:!0}),be.jsx("button",{type:"submit",children:"Sign Up"})]})]})};export{tf as default};
