const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/howler-Clh8A-Tp.js","assets/react-vendor-c5ypKtDW.js"])))=>i.map(i=>d[i]);
import{r as l,R as s}from"./three-fiber-Bwp70ZHz.js";import{_ as j}from"./three-helpers-CLgfgmyP.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,a)=>a?a.toUpperCase():r.toLowerCase()),E=e=>{const t=I(e);return t.charAt(0).toUpperCase()+t.slice(1)},A=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim(),W=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:i="",children:u,iconNode:c,...f},d)=>l.createElement("svg",{ref:d,...B,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:A("lucide",i),...!u&&!W(f)&&{"aria-hidden":"true"},...f},[...c.map(([p,v])=>l.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const r=l.forwardRef(({className:a,...i},u)=>l.createElement(D,{ref:u,iconNode:t,className:A(`lucide-${N(E(e))}`,`lucide-${e}`,a),...i}));return r.displayName=E(e),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],T=L("refresh-cw",H);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],X=L("x",U);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(null,arguments)}function V(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function Z(e){l.useEffect(e,[])}var q=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function F(e,t){var r={},a=r.volume,i=a===void 0?1:a,u=r.playbackRate,c=u===void 0?1:u,f=r.soundEnabled,d=f===void 0?!0:f,p=r.interrupt,v=p===void 0?!1:p,k=r.onload,b=V(r,q),h=s.useRef(null),y=s.useRef(!1),w=s.useState(null),x=w[0],O=w[1],C=s.useState(null),n=C[0],R=C[1],g=function(){typeof k=="function"&&k.call(this),y.current&&O(this.duration()*1e3),R(this)};Z(function(){return j(()=>import("./howler-Clh8A-Tp.js").then(o=>o.h),__vite__mapDeps([0,1])).then(function(o){if(!y.current){var _;h.current=(_=o.Howl)!==null&&_!==void 0?_:o.default.Howl,y.current=!0,new h.current(m({src:Array.isArray(e)?e:[e],volume:i,rate:c,onload:g},b))}}),function(){y.current=!1}}),s.useEffect(function(){h.current&&n&&R(new h.current(m({src:Array.isArray(e)?e:[e],volume:i,onload:g},b)))},[JSON.stringify(e)]),s.useEffect(function(){n&&(n.volume(i),b.sprite||n.rate(c))},[n,i,c]);var $=s.useCallback(function(o){typeof o>"u"&&(o={}),!(!n||!d&&!o.forceSoundEnabled)&&(v&&n.stop(),o.playbackRate&&n.rate(o.playbackRate),n.play(o.id))},[n,d,v]),S=s.useCallback(function(o){n&&n.stop(o)},[n]),M=s.useCallback(function(o){n&&n.pause(o)},[n]),P=[$,{sound:n,stop:S,pause:M,duration:x}];return P}export{T as R,X,F as u};
