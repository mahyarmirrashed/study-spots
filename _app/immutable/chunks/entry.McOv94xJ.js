import{au as ut}from"./runtime.B76Vjo_i.js";import{w as _e}from"./index.B9CFuaGY.js";new URL("sveltekit-internal://");function dt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}const gt=["href","pathname","search","toString","toJSON"];function mt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of gt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const yt="/__data.json",_t=".html__data.json";function wt(e){return e.endsWith(".html")?e.replace(/\.html$/,_t):e.replace(/\/$/,"")+yt}function vt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function bt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Ge=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(we(e)),Ge(e,n));const G=new Map;function At(e,n){const t=we(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=bt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function kt(e,n,t){if(G.size>0){const r=we(e,t),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,t)}function we(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${vt(...a)}"]`}return r}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${It(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Et.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function Rt(e){return!/^\([^)]+\)$/.test(e)}function It(e){return e.slice(1).split("/").filter(Rt)}function Tt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=St(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Tt(l,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var Ve;const U=((Ve=globalThis.__sveltekit_1bp49rs)==null?void 0:Ve.base)??"";var Be;const Lt=((Be=globalThis.__sveltekit_1bp49rs)==null?void 0:Be.assets)??U,Pt="1733479746958",Me="sveltekit:snapshot",He="sveltekit:scroll",Ke="sveltekit:states",xt="sveltekit:pageurl",j="sveltekit:history",M="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function We(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ve(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const xe={...J,"":J.hover};function Ye(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Je(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ye(e)}}function ge(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===W&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function z(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=N(s,"preload-code")),a===null&&(a=N(s,"preload-data")),n===null&&(n=N(s,"keepfocus")),t===null&&(t=N(s,"noscroll")),o===null&&(o=N(s,"reload")),i===null&&(i=N(s,"replacestate")),s=Ye(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:xe[r??"off"],preload_data:xe[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ce(e){const n=_e(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ct(){const{set:e,subscribe:n}=_e(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Lt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Pt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==W||!e.pathname.startsWith(n)}function Ne(e){const n=Ot(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ot(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Nt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const jt=-1,Dt=-2,$t=-3,Ft=-4,Vt=-5,Bt=-6;function Gt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===jt)return;if(o===$t)return NaN;if(o===Ft)return 1/0;if(o===Vt)return-1/0;if(o===Bt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Ne(g),p=new u(l);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ne(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Dt&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const qt=new Set([...ze]);[...qt];function Mt(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(n,t){this.status=n,this.location=t}}class be extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Ht="x-sveltekit-invalidated",Kt="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof be?e.status:500}function Wt(e){return e instanceof be?e.text:"Internal Error"}const Yt=new Set(["icon","shortcut icon","apple-touch-icon"]),C=qe(He)??{},H=qe(Me)??{},P={url:Ce({}),page:Ce({}),navigating:_e(null),updated:Ct()};function Ae(e){C[e]=ve()}function Jt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}async function Ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Oe(){}let oe,me,Z,L,ye,V;const Q=[],ee=[];let R=null;const Qe=[],zt=[];let O=[],_={branch:[],error:null,url:null},ke=!1,te=!1,je=!0,K=!1,B=!1,et=!1,Ee=!1,se,S,T,I,F;const q=new Set;let he;async function ln(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),V=e,oe=Ut(e),L=document.documentElement,ye=n,me=e.nodes[0],Z=e.nodes[1],me(),Z(),S=(a=history.state)==null?void 0:a[j],T=(o=history.state)==null?void 0:o[M],S||(S=T=Date.now(),history.replaceState({...history.state,[j]:S,[M]:T},""));const r=C[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await an(ye,t):nn(location.href,{replaceState:!0}),rn()}async function Xt(){if(await(he||(he=Promise.resolve())),!he)return;he=null;const e=ce(_.url,!0);R=null;const n=F={},t=e&&await Te(e);if(!(!t||n!==F)){if(t.type==="redirect")return Se(new URL(t.location,_.url).href,{},1,n);t.props.page&&(I=t.props.page),_=t.state,tt(),se.$set(t.props)}}function tt(){Q.length=0,Ee=!1}function nt(e){ee.some(n=>n==null?void 0:n.snapshot)&&(H[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function rt(e){var n;(n=H[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=ee[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function De(){Ae(S),Pe(He,C),nt(T),Pe(Me,H)}async function Se(e,n,t,r){return Y({type:"goto",url:We(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ee=!0)}})}async function Zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};q.add(n),R={id:e.id,token:n,promise:Te({...e,preload:n}).then(t=>(q.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function pe(e){const n=oe.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function at(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,se=new V.root({target:n,props:{...e.props,stores:P,components:ee},hydrate:t,sync:!1}),rt(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(i=>i(a)),te=!0}function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=dt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Mt(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:I.data}),c}async function Re({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(r,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:mt(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,p){let b;l instanceof Request?(b=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):b=l;const k=new URL(b,t);return s&&u(k.href),k.origin===t.origin&&(b=k.href.slice(t.origin.length)),te?kt(b,k.href,p):At(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function $e(e,n,t,r,a,o){if(Ee)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Q.some(s=>s(new URL(i))))return!0;return!1}function Ie(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Qt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Fe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function Te({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return q.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=Qt(_.url,t);let g=!1;const l=f.map((m,v)=>{var x;const A=_.branch[v],E=!!(m!=null&&m[0])&&((A==null?void 0:A.loader)!==m[1]||$e(g,y,h,u,(x=A.server)==null?void 0:x.uses,r));return E&&(g=!0),E});if(l.some(Boolean)){try{d=await ct(t,l)}catch(m){const v=await D(m,{url:t,params:r,route:{id:e}});return q.has(o)?Fe({error:v,url:t,params:r,route:a}):ie({status:X(m),error:v,url:t,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const k=f.map(async(m,v)=>{var le;if(!m)return;const A=_.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(A==null?void 0:A.loader)&&!$e(b,y,h,u,(le=A.universal)==null?void 0:le.uses,r))return A;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Re({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Le;const Ue={};for(let fe=0;fe<v;fe+=1)Object.assign(Ue,(Le=await k[fe])==null?void 0:Le.data);return Ue},server_data_node:Ie(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?A==null?void 0:A.server:void 0)})});for(const m of k)m.catch(()=>{});const w=[];for(let m=0;m<f.length;m+=1)if(f[m])try{w.push(await k[m])}catch(v){if(v instanceof Xe)return{type:"redirect",location:v.location};if(q.has(o))return Fe({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=X(v),E;if(p!=null&&p.includes(v))A=v.status??A,E=v.error;else if(v instanceof ae)E=v.body;else{if(await P.updated.check())return await Ze(),await $(t);E=await D(v,{params:r,url:t,route:{id:a.id}})}const x=await en(m,w,i);return x?ne({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:E,route:a}):await it(t,{id:a.id},E,A)}else w.push(void 0);return ne({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function en(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:t,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const f=await ct(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==W||t.pathname!==location.pathname||ke)&&await $(t)}const s=await Re({loader:me,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ie(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return ne({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function ce(e,n){if(!e||re(e,U))return;let t;try{t=V.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ot(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:pt(o),url:e}}}function ot(e){return ht(e.slice(U.length)||"/")}function st({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||Qe.forEach(s=>s(i)),a?null:o}async function Y({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Oe,block:d=Oe}){const h=ce(n,!1),y=st({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=S,g=T;f(),K=!0,te&&P.navigating.set(y.navigation),F=c;let l=h&&await Te(h);if(!l){if(re(n,U))return await $(n);l=await it(n,{id:null},await D(new be(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ie({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Se(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await P.updated.check()&&(await Ze(),await $(n));if(tt(),Ae(u),nt(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[j]:S+=w,[M]:T+=w,[Ke]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Jt(S,T)}if(R=null,l.props.page.state=i,te){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(zt.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){O=O.filter(v=>!w.includes(v))};w.push(m),O.push(...w)}se.$set(l.props),et=!0}else at(l,ye,!1);const{activeElement:p}=document;await ut();const b=t?t.scroll:a?ve():null;if(je){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==p&&document.activeElement!==document.body;!r&&!k&&on(),je=!0,l.props.page&&(I=l.props.page),K=!1,e==="popstate"&&rt(T),y.fulfil(void 0),O.forEach(w=>w(y.navigation)),P.navigating.set(null)}async function it(e,n,t,r){return e.origin===W&&e.pathname===location.pathname&&!ke?await ie({status:r,error:t,url:e,route:n}):await $(e)}function tn(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pe(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Je(o,L);if(!s)return;const{url:c,external:f,download:d}=ge(s,U);if(f||d)return;const h=z(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=ce(c,!1);u&&Zt(u)}else i<=h.preload_code&&pe(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=ge(o,U);if(s||c)continue;const f=z(o);f.reload||(f.preload_code===J.viewport&&t.observe(o),f.preload_code===J.eager&&pe(i.pathname))}}O.push(a),a()}function D(e,n){if(e instanceof ae)return e.body;const t=X(e),r=Wt(e);return V.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function nn(e,n={}){return e=We(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):Se(e,n,0)}function fn(e){if(typeof e=="function")Q.push(e);else{const{href:n}=new URL(e,location.href);Q.push(t=>t.href===n)}return Xt()}function rn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(De(),!K){const a=ft(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qe.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||tn(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Je(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=ge(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===ue(location);if(o||c.reload&&(!y||!h)){st({url:a,type:"link"})?K=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,Ae(S),e(a),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(s,U))return;const c=t.target,f=z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),Y({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[j]){const a=t.state[j];if(F={},a===S)return;const o=C[a],i=t.state[Ke]??{},s=new URL(t.state[xt]??location.href),c=t.state[M],f=ue(location)===ue(_.url);if(c===T&&(et||f)){e(s),C[S]=ve(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},se.$set({page:I})),S=a;return}const h=a-S;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,T=c},block:()=>{history.go(-h)},nav_token:F})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[j]:++S,[M]:T},"",location.href))});for(const t of document.querySelectorAll("link"))Yt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...I,url:t}),P.page.notify()}}async function an(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){ke=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ce(c,!1)||{});let f,d=!0;try{const h=r.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=lt(p.uses)),Re({loader:V.nodes[g],url:c,params:a,route:o,parent:async()=>{const b={};for(let k=0;k<l;k+=1)Object.assign(b,(await h[k]).data);return b},server_data_node:Ie(p)})}),y=await Promise.all(h),u=oe.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=ne({url:c,params:a,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof Xe){await $(new URL(h.location,location.href));return}f=await ie({status:X(h),error:await D(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),at(f,e,d)}async function ct(e,n){var a;const t=new URL(e);t.pathname=wt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Kt,"1"),t.searchParams.append(Ht,n.map(o=>o?"1":"0").join(""));const r=await Ge(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(y){return Gt(y,{Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=lt(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:b,error:k}=l,w=i.get(p);i.delete(p),k?w.reject(f(k)):w.fulfil(f(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function on(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{ln as a,U as b,nn as g,fn as i,P as s};
