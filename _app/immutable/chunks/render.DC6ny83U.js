import{i as m,g as D,H,b as L,d as p,e as h,h as E,j as O,k as _,l as I,m as Y,n as j,o as k,q as C,u as M,v as S,w as V,p as $,x as w,y as q,a as z,z as W}from"./runtime.B76Vjo_i.js";import{b as B,r as b,h as y,c as F,i as G}from"./legacy.Dm4gyfrH.js";import{r as J}from"./store.BvVuv4PB.js";function X(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function K(t,e){return N(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var r=D(n);r&&(r.nodeType!==8||r.data!==H);)r=L(r);if(!r)throw p;h(!0),E(r),O();const o=N(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),p;return h(!1),o}catch(o){if(o===p)return e.recover===!1&&j(),m(),k(n),h(!1),K(t,e);throw o}finally{h(l),E(u),J()}}const i=new Map;function N(t,{target:e,anchor:n,props:l={},events:u,context:r,intro:o=!0}){m();var v=new Set,g=d=>{for(var a=0;a<d.length;a++){var s=d[a];if(!v.has(s)){v.add(s);var f=G(s);e.addEventListener(s,y,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};g(C(B)),b.add(g);var c=void 0,A=M(()=>{var d=n??e.appendChild(S());return V(()=>{if(r){$({});var a=W;a.c=r}u&&(l.$$events=u),w&&F(d,null),c=t(d,l)||{},w&&(q.nodes_end=_),r&&z()}),()=>{var f;for(var a of v){e.removeEventListener(a,y);var s=i.get(a);--s===0?(document.removeEventListener(a,y),i.delete(a)):i.set(a,s)}b.delete(g),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,A),c}let R=new WeakMap;function x(t){const e=R.get(t);e&&e()}export{Z as h,K as m,X as s,x as u};