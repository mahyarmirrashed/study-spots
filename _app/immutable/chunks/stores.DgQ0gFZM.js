import{O as I,ap as g,aq as m,a8 as M,y as E,ar as P,T as $,$ as j,v as y,J as q,as as B,x as f,H,b as A,e as N,h as T,k as i,g as _,at as U,au as z,j as G,U as J,af as x,av as Q,Q as Y,F as K,aw as X,ax as Z}from"./entry.D0qt5YfA.js";function fe(e,t){if(t){const r=document.body;e.autofocus=!0,I(()=>{document.activeElement===r&&e.focus()})}}let O=!1;function ee(){O||(O=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function C(e){var t=M,r=E;g(null),m(null);try{return e()}finally{g(t),m(r)}}function de(e,t,r,a=r){e.addEventListener(t,()=>C(r));const s=e.__on_r;s?e.__on_r=()=>{s(),a(!0)}:e.__on_r=()=>a(!0),ee()}const te=new Set,re=new Set;function ne(e,t,r,a){function s(n){if(a.capture||ae.call(t,n),!n.cancelBubble)return C(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?I(()=>{t.addEventListener(e,s,a)}):t.addEventListener(e,s,a),s}function _e(e,t,r,a,s){var n={capture:a,passive:s},o=ne(e,t,r,n);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(e,o,n)})}function ve(e){for(var t=0;t<e.length;t++)te.add(e[t]);for(var r of re)r(e)}function ae(e){var k;var t=this,r=t.ownerDocument,a=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],n=s[0]||e.target,o=0,d=e.__root;if(d){var c=s.indexOf(d);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var S=s.indexOf(t);if(S===-1)return;c<=S&&(o=c)}if(n=s[o]||e.target,n!==t){$(e,"currentTarget",{configurable:!0,get(){return n||r}});var R=M,V=E;g(null),m(null);try{for(var v,L=[];n!==null;){var w=n.assignedSlot||n.parentNode||n.host||null;try{var p=n["__"+a];if(p!==void 0&&!n.disabled)if(j(p)){var[F,...W]=p;F.apply(n,[e,...W])}else p.call(n,e)}catch(h){v?L.push(h):v=h}if(e.cancelBubble||w===t||w===null)break;n=w}if(v){for(let h of L)queueMicrotask(()=>{throw h});throw v}}finally{e.__root=t,delete e.currentTarget,g(R),m(V)}}}let u;function pe(){u=void 0}function he(e){let t=null,r=f;var a;if(f){for(t=i,u===void 0&&(u=_(document.head));u!==null&&(u.nodeType!==8||u.data!==H);)u=A(u);u===null?N(!1):u=T(A(u))}f||(a=document.head.appendChild(y()));try{q(()=>e(a),B)}finally{r&&(N(!0),u=i,T(t))}}function D(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function l(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function be(e,t){var r=(t&U)!==0,a=(t&z)!==0,s,n=!e.startsWith("<!>");return()=>{if(f)return l(i,null),i;s===void 0&&(s=D(n?e:"<!>"+e),r||(s=_(s)));var o=a?document.importNode(s,!0):s.cloneNode(!0);if(r){var d=_(o),c=o.lastChild;l(d,c)}else l(o,o);return o}}function ge(e,t,r="svg"){var a=!e.startsWith("<!>"),s=`<${r}>${a?e:"<!>"+e}</${r}>`,n;return()=>{if(f)return l(i,null),i;if(!n){var o=D(s),d=_(o);n=_(d)}var c=n.cloneNode(!0);return l(c,c),c}}function me(e=""){if(!f){var t=y(e+"");return l(t,t),t}var r=i;return r.nodeType!==3&&(r.before(r=y()),T(r)),l(r,r),r}function ye(){if(f)return l(i,null),i;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),l(t,r),e}function Ee(e,t){if(f){E.nodes_end=i,G();return}e!==null&&e.before(t)}function we(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const se=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Te(e){return se.includes(e)}const oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Se(e){return e=e.toLowerCase(),oe[e]??e}const ue=["touchstart","touchmove"];function Le(e){return ue.includes(e)}let b=!1;function ke(e,t,r){const a=r[t]??(r[t]={store:null,source:J(void 0),unsubscribe:x});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=x;else{var s=!0;a.unsubscribe=Q(e,n=>{s?a.source.v=n:Y(a.source,n)}),s=!1}return K(a.source)}function Ae(){const e={};return P(()=>{for(var t in e)e[t].unsubscribe()}),e}function Ne(e){var t=b;try{return b=!1,[e(),b]}finally{b=t}}const ie="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);X();const ce=()=>{const e=Z;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},xe={subscribe(e){return ce().page.subscribe(e)}};export{Ee as a,ke as b,te as c,pe as d,l as e,ye as f,me as g,ae as h,Le as i,ee as j,we as k,ne as l,ve as m,fe as n,Se as o,xe as p,Te as q,re as r,Ae as s,be as t,D as u,he as v,Ne as w,de as x,ge as y,_e as z};
