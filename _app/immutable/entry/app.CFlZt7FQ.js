const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.D5hSJYif.js","../chunks/legacy.DHf068we.js","../chunks/runtime.dhyehua_.js","../chunks/snippet.ByBQTMSY.js","../chunks/i18n.BssukISo.js","../chunks/entry.DPYnpvgY.js","../chunks/utils.ChQC_ljl.js","../chunks/stores.D84dQPQS.js","../chunks/props.CRxYe_fY.js","../chunks/store.AgIWSnlE.js","../chunks/lifecycle.BV4XB3ks.js","../chunks/index.aEY9_z0S.js","../assets/0.DbilSCDy.css","../nodes/1.CumGnZEI.js","../chunks/render.DGZ6b2EI.js","../chunks/events.Dc_Wopij.js","../nodes/2.C09IIe5m.js","../chunks/index-client.DmZY7iv3.js","../assets/2.CGOudrHS.css","../nodes/3.Cf68yDRt.js","../nodes/4.B6VK_bAQ.js"])))=>i.map(i=>d[i]);
var q=n=>{throw TypeError(n)};var F=(n,e,r)=>e.has(n)||q("Cannot "+r);var l=(n,e,r)=>(F(n,e,"read from private field"),r?r.call(n):e.get(n)),O=(n,e,r)=>e.has(n)?q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r),S=(n,e,r,a)=>(F(n,e,"write to private field"),a?a.call(n,r):e.set(n,r),r);import{i as H}from"../chunks/i18n.BssukISo.js";import{h as U,M as J,b as K,E as M,d as Q,e as X,a9 as Z,j as v,al as $,k as x,av as ee,_ as te,m as re,p as se,l as ne,o as ae,f as k,a as oe,aw as T,ax as ie,s as ce,c as le,t as ue,r as de,y as C}from"../chunks/runtime.dhyehua_.js";import{h as fe,m as me,u as he,s as _e}from"../chunks/render.DGZ6b2EI.js";import{c as D,a as P,t as N,d as ve}from"../chunks/legacy.DHf068we.js";import{p as I,i as V,a as ge}from"../chunks/props.CRxYe_fY.js";import{o as ye,b as j}from"../chunks/index-client.DmZY7iv3.js";function p(n,e,r){U&&J();var a=n,o,c;K(()=>{o!==(o=e())&&(c&&(Z(c),c=null),o&&(c=Q(()=>r(a,o))))},M),U&&(a=X)}function Ee(n){return class extends be{constructor(e){super({component:n,...e})}}}var g,d;class be{constructor(e){O(this,g);O(this,d);var c;var r=new Map,a=(s,t)=>{var f=re(t);return r.set(s,f),f};const o=new Proxy({...e.props||{},$$events:{}},{get(s,t){return v(r.get(t)??a(t,Reflect.get(s,t)))},has(s,t){return t===$?!0:(v(r.get(t)??a(t,Reflect.get(s,t))),Reflect.has(s,t))},set(s,t,f){return x(r.get(t)??a(t,f),f),Reflect.set(s,t,f)}});S(this,d,(e.hydrate?fe:me)(e.component,{target:e.target,anchor:e.anchor,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&ee(),S(this,g,o.$$events);for(const s of Object.keys(l(this,d)))s==="$set"||s==="$destroy"||s==="$on"||te(this,s,{get(){return l(this,d)[s]},set(t){l(this,d)[s]=t},enumerable:!0});l(this,d).$set=s=>{Object.assign(o,s)},l(this,d).$destroy=()=>{he(l(this,d))}}$set(e){l(this,d).$set(e)}$on(e,r){l(this,g)[e]=l(this,g)[e]||[];const a=(...o)=>r.call(this,...o);return l(this,g)[e].push(a),()=>{l(this,g)[e]=l(this,g)[e].filter(o=>o!==a)}}$destroy(){l(this,d).$destroy()}}g=new WeakMap,d=new WeakMap;const Pe="modulepreload",Re=function(n,e){return new URL(n,e).href},G={},R=function(e,r,a){let o=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),f=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=Re(u,a),u in G)return;G[u]=!0;const y=u.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!a)for(let m=s.length-1;m>=0;m--){const _=s[m];if(_.href===u&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${A}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":Pe,y||(i.as="script"),i.crossOrigin="",i.href=u,f&&i.setAttribute("nonce",f),document.head.appendChild(i),y)return new Promise((m,_)=>{i.addEventListener("load",m),i.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(s){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=s,window.dispatchEvent(t),!t.defaultPrevented)throw s}return o.then(s=>{for(const t of s||[])t.status==="rejected"&&c(t.reason);return e().catch(c)})},we=H.reroute(),je={};var ke=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),xe=N("<!> <!>",1);function Ae(n,e){se(e,!0);let r=I(e,"components",23,()=>[]),a=I(e,"data_0",3,null),o=I(e,"data_1",3,null);ne(()=>e.stores.page.set(e.page)),ae(()=>{e.stores,e.page,e.constructors,r(),e.form,a(),o(),e.stores.page.notify()});let c=T(!1),s=T(!1),t=T(null);ye(()=>{const E=e.stores.page.subscribe(()=>{v(c)&&(x(s,!0),ie().then(()=>{x(t,ge(document.title||"untitled page"))}))});return x(c,!0),E});const f=C(()=>e.constructors[1]);var u=xe(),y=k(u);V(y,()=>e.constructors[1],E=>{var i=D();const m=C(()=>e.constructors[0]);var _=k(i);p(_,()=>v(m),(b,L)=>{j(L(b,{get data(){return a()},get form(){return e.form},children:(h,Le)=>{var B=D(),W=k(B);p(W,()=>v(f),(Y,z)=>{j(z(Y,{get data(){return o()},get form(){return e.form}}),w=>r()[1]=w,()=>{var w;return(w=r())==null?void 0:w[1]})}),P(h,B)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(E,i)},E=>{var i=D();const m=C(()=>e.constructors[0]);var _=k(i);p(_,()=>v(m),(b,L)=>{j(L(b,{get data(){return a()},get form(){return e.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(E,i)});var A=ce(y,2);V(A,()=>v(c),E=>{var i=ke(),m=le(i);V(m,()=>v(s),_=>{var b=ve();ue(()=>_e(b,v(t))),P(_,b)}),de(i),P(E,i)}),P(n,u),oe()}const pe=Ee(Ae),Be=[()=>R(()=>import("../nodes/0.D5hSJYif.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>R(()=>import("../nodes/1.CumGnZEI.js"),__vite__mapDeps([13,1,2,14,15,7,5,6,10,9]),import.meta.url),()=>R(()=>import("../nodes/2.C09IIe5m.js"),__vite__mapDeps([16,1,2,15,8,9,6,3,17,18]),import.meta.url),()=>R(()=>import("../nodes/3.Cf68yDRt.js"),__vite__mapDeps([19,1,2,11,10]),import.meta.url),()=>R(()=>import("../nodes/4.B6VK_bAQ.js"),__vite__mapDeps([20,1,2,14,15,7,5,6,10,9,4]),import.meta.url)],qe=[],Fe={"/":[2],"/demo":[3],"/demo/paraglide":[4]},Ue={handleError:({error:n})=>{console.error(n)},reroute:we||(()=>{})};export{Fe as dictionary,Ue as hooks,je as matchers,Be as nodes,pe as root,qe as server_loads};
