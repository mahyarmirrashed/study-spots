import{S as A,a0 as V,a1 as Z,a2 as P,a3 as z,k as h,a4 as N,a5 as c,j as m,V as C,a6 as k,a7 as J,$ as Q,b as W,a8 as q,d as B,a9 as M,h as x,M as X,E as p,aa as ee,ab as ae,L as re,K as j,e as ne,ac as te,ad as fe,ae as ie,af as se,u as U,ag as ue,ah as le,Y as K,ai as _e,D as ve,aj as de,ak as ce,al as oe,y as $,am as ge,an as be,m as ye}from"./runtime.dhyehua_.js";import{c as he}from"./store.AgIWSnlE.js";function S(f,u=null,b){if(typeof f!="object"||f===null||A in f)return f;const y=J(f);if(y!==V&&y!==Z)return f;var i=new Map,_=Q(f),v=P(0);_&&i.set("length",P(f.length));var d;return new Proxy(f,{defineProperty(t,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&z();var r=i.get(e);return r===void 0?(r=P(a.value),i.set(e,r)):h(r,S(a.value,d)),!0},deleteProperty(t,e){var a=i.get(e);if(a===void 0)e in t&&i.set(e,P(c));else{if(_&&typeof e=="string"){var r=i.get("length"),n=Number(e);Number.isInteger(n)&&n<r.v&&h(r,n)}h(a,c),G(v)}return!0},get(t,e,a){var o;if(e===A)return f;var r=i.get(e),n=e in t;if(r===void 0&&(!n||(o=N(t,e))!=null&&o.writable)&&(r=P(S(n?t[e]:c,d)),i.set(e,r)),r!==void 0){var s=m(r);return s===c?void 0:s}return Reflect.get(t,e,a)},getOwnPropertyDescriptor(t,e){var a=Reflect.getOwnPropertyDescriptor(t,e);if(a&&"value"in a){var r=i.get(e);r&&(a.value=m(r))}else if(a===void 0){var n=i.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return a},has(t,e){var s;if(e===A)return!0;var a=i.get(e),r=a!==void 0&&a.v!==c||Reflect.has(t,e);if(a!==void 0||C!==null&&(!r||(s=N(t,e))!=null&&s.writable)){a===void 0&&(a=P(r?S(t[e],d):c),i.set(e,a));var n=m(a);if(n===c)return!1}return r},set(t,e,a,r){var R;var n=i.get(e),s=e in t;if(_&&e==="length")for(var o=a;o<n.v;o+=1){var E=i.get(o+"");E!==void 0?h(E,c):o in t&&(E=P(c),i.set(o+"",E))}n===void 0?(!s||(R=N(t,e))!=null&&R.writable)&&(n=P(void 0),h(n,S(a,d)),i.set(e,n)):(s=n.v!==c,h(n,S(a,d)));var g=Reflect.getOwnPropertyDescriptor(t,e);if(g!=null&&g.set&&g.set.call(r,a),!s){if(_&&typeof e=="string"){var w=i.get("length"),O=Number(e);Number.isInteger(O)&&O>=w.v&&h(w,O+1)}G(v)}return!0},ownKeys(t){m(v);var e=Reflect.ownKeys(t).filter(n=>{var s=i.get(n);return s===void 0||s.v!==c});for(var[a,r]of i)r.v!==c&&!(a in t)&&e.push(a);return e},setPrototypeOf(){k()}})}function G(f,u=1){h(f,f.v+u)}function Ee(f,u,b,y=null,i=!1){x&&X();var _=f,v=null,d=null,t=null,e=i?p:0;W(()=>{if(t===(t=!!u()))return;let a=!1;if(x){const r=_.data===ee;t===r&&(_=ae(),re(_),j(!1),a=!0)}t?(v?q(v):v=B(()=>b(_)),d&&M(d,()=>{d=null})):(d?q(d):y&&(d=B(()=>y(_))),v&&M(v,()=>{v=null})),a&&j(!0)},e),x&&(_=ne)}function H(f){for(var u=C,b=C;u!==null&&!(u.f&(ue|le));)u=u.parent;try{return K(u),f()}finally{K(b)}}function Re(f,u,b,y){var Y;var i=(b&_e)!==0,_=!ve||(b&de)!==0,v=(b&ce)!==0,d=(b&be)!==0,t=!1,e;v?[e,t]=he(()=>f[u]):e=f[u];var a=A in f||oe in f,r=((Y=N(f,u))==null?void 0:Y.set)??(a&&v&&u in f?l=>f[u]=l:void 0),n=y,s=!0,o=!1,E=()=>(o=!0,s&&(s=!1,d?n=U(y):n=y),n);e===void 0&&y!==void 0&&(r&&_&&te(),e=E(),r&&r(e));var g;if(_)g=()=>{var l=f[u];return l===void 0?E():(s=!0,o=!1,l)};else{var w=H(()=>(i?$:ge)(()=>f[u]));w.f|=fe,g=()=>{var l=m(w);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(b&ie))return g;if(r){var O=f.$$legacy;return function(l,I){return arguments.length>0?((!_||!I||O||t)&&r(I?g():l),l):g()}}var R=!1,F=!1,D=ye(e),T=H(()=>$(()=>{var l=g(),I=m(D);return R?(R=!1,F=!0,I):(F=!1,D.v=l)}));return i||(T.equals=se),function(l,I){if(arguments.length>0){const L=I?m(T):_&&v?S(l):l;return T.equals(L)||(R=!0,h(D,L),o&&n!==void 0&&(n=L),U(()=>m(T))),l}return m(T)}}export{S as a,Ee as i,Re as p};
