import{q as G,B as T,$ as N,an as $,ao as w,ap as B,aq as K}from"./runtime.BefGoBhH.js";import{d as P,e as R,f as k,n as q,g as x}from"./legacy.B-dgXQir.js";function D(s,t){if(t){const r=document.body;s.autofocus=!0,G(()=>{document.activeElement===r&&s.focus()})}}function M(s,t,r,i){var a=s.__attributes??(s.__attributes={});T&&(a[t]=s.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&s.nodeName==="LINK")||a[t]!==(a[t]=r)&&(t==="style"&&"__styles"in s&&(s.__styles={}),t==="loading"&&(s[w]=r),r==null?s.removeAttribute(t):typeof r!="string"&&h(s).includes(t)?s[t]=r:s.setAttribute(t,r))}function z(s,t,r,i,a=!1,u=!1,l=!1){var f=t||{},e=s.tagName==="OPTION";for(var p in t)p in r||(r[p]=null);var I=h(s),O=s.__attributes??(s.__attributes={});for(const o in r){let n=r[o];if(e&&o==="value"&&n==null){s.value=s.__value="",f[o]=n;continue}var v=f[o];if(n!==v){f[o]=n;var A=o[0]+o[1];if(A!=="$$"){if(A==="on"){const g={},d="$$"+o;let _=o.slice(2);var y=x(_);if(P(_)&&(_=_.slice(0,-7),g.capture=!0),!y&&v){if(n!=null)continue;s.removeEventListener(_,f[d],g),f[d]=null}if(n!=null)if(y)s[`__${_}`]=n,k([_]);else{let C=function(b){f[o].call(this,b)};f[d]=R(_,s,C,g)}}else if(o==="style"&&n!=null)s.style.cssText=n+"";else if(o==="autofocus")D(s,!!n);else if(o==="__value"||o==="value"&&n!=null)s.value=s[o]=s.__value=n;else{var c=o;a||(c=q(c)),n==null&&!u?(O[o]=null,s.removeAttribute(o)):I.includes(c)&&(u||typeof n!="string")?s[c]=n:typeof n!="function"&&(T&&(c==="src"||c==="href"||c==="srcset")||M(s,c,n))}o==="style"&&"__styles"in s&&(s.__styles={})}}}return f}var E=new Map;function h(s){var t=E.get(s.nodeName);if(t)return t;E.set(s.nodeName,t=[]);for(var r,i=N(s),a=Element.prototype;a!==i;){r=$(i);for(var u in r)r[u].set&&t.push(u);i=N(i)}return t}const Y="data-no-translate",F="paraglide:lang",V="paraglide_lang",L={},H=()=>K(L),X=s=>{B(L,s)};function j(){const s=H();function t(i,a){return typeof i!="string"||!s?i:s.translateHref(i,a)}function r(i,a){if(i[Y])return i;for(const{attribute_name:u,lang_attribute_name:l}of a)if(u in i){const f=i[u],e=l?i[l]:void 0;i[u]=t(f,typeof e=="string"?e:void 0)}return i}return[t,r]}export{V as L,X as a,F as b,z as c,j as g,M as s};