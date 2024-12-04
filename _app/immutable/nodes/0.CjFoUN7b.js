import{c as z,l as oe,j as N,a as y,t as U}from"../chunks/legacy.B-dgXQir.js";import{Q as le,B as F,l as Q,A as ie,m as W,d as ce,o as ge,h as me,k as de,g as fe,aB as ue,aK as he,p as M,aL as f,aM as J,f as S,a as R,t as V,J as n,aN as P,I as K,O as _,s as ae}from"../chunks/runtime.BefGoBhH.js";import{e as _e,i as ve,k as ye,s as be,a as Ce,d as Le,b as Se,c as ke,f as X,g as we,h as Ne,j as pe,m as Z,t as $,l as Te,n as Pe,o as Ke,p as Me,q as Re}from"../chunks/mode.CON09V4h.js";import{n as te,p as x,s as D,i as Ue}from"../chunks/i18n.D9mFLzhE.js";import{p as G,h as ne}from"../chunks/stores.DDHe57Vh.js";import{p as l,i as A,o as Ae}from"../chunks/index-client.CCCJPISP.js";import{i as I}from"../chunks/lifecycle.WJekmia1.js";import{s as q,a as B}from"../chunks/store.BvD9b0WA.js";import{s as O,L as Ie,a as Ee,b as ee}from"../chunks/index.BLdYaey5.js";import{b as re,i as Be}from"../chunks/entry.DYBFWp2I.js";import{g as Oe}from"../chunks/index.Cwm3lF48.js";function He(o,e,i,s,t){var g=o,r="",c;le(()=>{if(r===(r=e()??"")){F&&Q();return}c!==void 0&&(ue(c),c=void 0),r!==""&&(c=ie(()=>{if(F){W.data;for(var a=Q(),m=a;a!==null&&(a.nodeType!==8||a.data!=="");)m=a,a=ce(a);if(a===null)throw ge(),me;z(W,m),g=de(a);return}var v=r+"",b=oe(v);z(fe(b),b.lastChild),g.before(b)}))})}const je=he;function xe(o,e){return o.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:o.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function De(o,e,i){const s=new URL(i??"/",e).pathname;return o.origin!==e.origin||!o.pathname.startsWith(s)}var Ge=U('<link rel="alternate">');function Je(o,e){M(e,!1);const i=q(),s=()=>B(G,"$page",i),t=P(),g=P(),r=P(),c=te(re,new URL(s().url))||"/";let a=l(e,"availableLanguageTags",8),m=l(e,"strategy",8),v=l(e,"currentLang",8);const b=(h,d)=>{const L=[];for(const T of a()){const k=d.getLocalisedPath(h,T),w=D(k,c,void 0),u=new URL(w,new URL(s().url)).href;L.push(u)}return L};f(()=>s(),()=>{K(t,x(s().url.pathname,c)[0])}),f(()=>(_(m()),n(t),_(v())),()=>{K(g,m().getCanonicalPath(n(t),v()))}),f(()=>(n(g),_(m())),()=>{K(r,b(n(g),m()))}),J(),I();var p=N(),C=S(p);A(C,()=>a().length>=1,h=>{var d=N(),L=S(d);_e(L,1,()=>n(r),ve,(T,k,w)=>{var u=Ge();V(()=>{O(u,"hreflang",a()[w]),O(u,"href",n(k))}),y(T,u)}),y(h,d)}),y(o,p),R()}const Ve=(o,e)=>`${Ie}=${o};Path=${e};SameSite=lax;Max-Age=31557600`;function qe(o,e){M(e,!1);const i=q(),s=()=>B(G,"$page",i),t=P(),g=P(),r=te(re,new URL(s().url))||"/";let c=l(e,"languageTag",24,()=>{}),a=l(e,"i18n",8),m=P(0);function v(C,h){try{const d=new URL(Oe(G).url),[L,T]=x(d.pathname,r),k=a().strategy.getCanonicalPath(L,n(t)),w=new URL(d);w.pathname=D(k,r,T);const u=new URL(C,new URL(w));if(De(u,d,r)||a().config.exclude(u.pathname))return C;const H=h??n(t),[E,j]=x(u.pathname,r),se=a().strategy.getLocalisedPath(E,H),Y=new URL(u);return Y.pathname=D(se,r,j),xe(d,Y)}catch{return C}}Ee({translateHref:v}),f(()=>(_(c()),_(a()),s()),()=>{K(t,c()??a().getLanguageFromUrl(s().url))}),f(()=>(_(a()),n(t)),()=>{a().config.runtime.setLanguageTag(n(t))}),f(()=>n(t),()=>{document.documentElement.lang=n(t)}),f(()=>(_(a()),n(t)),()=>{document.documentElement.dir=a().config.textDirection[n(t)]??"ltr"}),f(()=>(n(t),n(m)),()=>{n(t)&&K(m,n(m)+1)}),f(()=>(n(t),n(m),ee),()=>{n(t)&&(n(m)>1||je)&&Be(ee)}),f(()=>n(t),()=>{K(g,n(t))}),f(()=>n(t),()=>{document.cookie=Ve(n(t),r)}),J(),I();var b=N();ne(C=>{var h=N(),d=S(h);A(d,()=>a().config.seo.noAlternateLinks!==!0&&!a().config.exclude(s().url.pathname),L=>{Je(L,{get availableLanguageTags(){return a().config.runtime.availableLanguageTags},get strategy(){return a().strategy},get currentLang(){return n(t)}})}),y(C,h)});var p=S(b);ye(p,()=>n(g),C=>{var h=N(),d=S(h);be(d,e,"default",{}),y(C,h)}),y(o,b),R()}var Ye=U('<meta name="theme-color">');function ze(o,e){M(e,!1);let i=l(e,"themeColors",24,()=>{});I();var s=N(),t=S(s);A(t,i,g=>{var r=Ye();V(()=>O(r,"content",i().dark)),y(g,r)}),y(o,s),R()}var Fe=U('<meta name="theme-color">'),Qe=U("<!> <!>",1);function We(o,e){M(e,!1);let i=l(e,"trueNonce",8,""),s=l(e,"initConfig",8),t=l(e,"themeColors",24,()=>{});I(),ne(g=>{var r=Qe(),c=S(r);A(c,t,m=>{var v=Fe();V(()=>O(v,"content",t().dark)),y(m,v)});var a=ae(c,2);He(a,()=>`<script${i()?` nonce=${i()}`:""}>(`+Ce.toString()+")("+JSON.stringify(s())+");<\/script>",!1,!1),y(g,r)}),R()}function Xe(o,e){M(e,!1);const i=q(),s=()=>B(Z,"$modeStorageKeyStore",i),t=()=>B($,"$themeStorageKeyStore",i),g=P();let r=l(e,"track",8,!0),c=l(e,"defaultMode",8,"system"),a=l(e,"themeColors",24,()=>{}),m=l(e,"disableTransitions",8,!0),v=l(e,"darkClassNames",24,()=>["dark"]),b=l(e,"lightClassNames",24,()=>[]),p=l(e,"defaultTheme",8,""),C=l(e,"nonce",8,""),h=l(e,"themeStorageKey",8,"mode-watcher-theme"),d=l(e,"modeStorageKey",8,"mode-watcher-mode"),L=l(e,"disableHeadScriptInjection",8,!1);Ae(()=>{const u=Se.subscribe(()=>{}),H=ke.subscribe(()=>{});X.tracking(r()),X.query();const E=localStorage.getItem(s());we(Ne(E)?E:c());const j=localStorage.getItem(t());return pe(j||p()),()=>{u(),H()}});const T=Le({defaultMode:c(),themeColors:a(),darkClassNames:v(),lightClassNames:b(),defaultTheme:p(),modeStorageKey:d(),themeStorageKey:h()});f(()=>_(m()),()=>{Te.set(m())}),f(()=>_(a()),()=>{Pe.set(a())}),f(()=>_(v()),()=>{Ke.set(v())}),f(()=>_(b()),()=>{Me.set(b())}),f(()=>_(d()),()=>{Z.set(d())}),f(()=>_(h()),()=>{$.set(h())}),f(()=>_(C()),()=>{K(g,typeof window>"u"?C():"")}),J(),I();var k=N(),w=S(k);A(w,L,u=>{ze(u,{get themeColors(){return a()}})},u=>{We(u,{get trueNonce(){return n(g)},initConfig:T,get themeColors(){return a()}})}),y(o,k),R()}var Ze=U("<!> <!>",1);function ga(o,e){M(e,!0);var i=Ze(),s=S(i);Xe(s,{});var t=ae(s,2);qe(t,{i18n:Ue,children:(g,r)=>{var c=N(),a=S(c);Re(a,()=>e.children),y(g,c)},$$slots:{default:!0}}),y(o,i),R()}export{ga as component};