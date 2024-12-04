import{c as Q,l as ie,j as N,a as y,t as R}from"../chunks/legacy.yaIGdCNm.js";import{aI as ce,aJ as ge,T as me,Q as ae,B as O,l as D,a2 as de,A as te,m as G,Z as fe,d as ue,o as he,h as _e,k as ve,g as ye,av as be,aK as Ce,p as K,aL as f,aM as Y,f as k,a as M,t as Z,J as n,aN as P,I,O as _,s as ne}from"../chunks/runtime.CEiNso2z.js";import{e as Le,i as ke,s as Se,a as we,d as Ne,b as pe,c as Te,f as W,g as Pe,h as Ie,j as Ke,m as X,t as $,k as Me,l as Re,n as Ue,o as Ae,p as Ee}from"../chunks/mode.Bf0cdZw0.js";import{n as re,p as J,s as q,i as Oe}from"../chunks/i18n.6SFjV-48.js";import{p as V,h as se}from"../chunks/stores.Bq83ZmpV.js";import{p as c,i as U,o as Be}from"../chunks/index-client.Cs8_zO_e.js";import{i as A}from"../chunks/lifecycle.D_SdOKBN.js";import{s as z,a as B}from"../chunks/store.CvKJ3oeQ.js";import{s as H,L as He,a as je,b as ee}from"../chunks/index.DfsvHpg0.js";import{b as oe,i as xe}from"../chunks/entry.DWyo50c0.js";import{g as De}from"../chunks/index.DaHOyxh3.js";function Ge(o,e,i){O&&D();var r=o,t=fe,l,s=ce()?ge:me;ae(()=>{s(t,t=e())&&(l&&de(l),l=te(()=>i(r)))}),O&&(r=G)}function Je(o,e,i,r,t){var l=o,s="",g;ae(()=>{if(s===(s=e()??"")){O&&D();return}g!==void 0&&(be(g),g=void 0),s!==""&&(g=te(()=>{if(O){G.data;for(var a=D(),m=a;a!==null&&(a.nodeType!==8||a.data!=="");)m=a,a=ue(a);if(a===null)throw he(),_e;Q(G,m),l=ve(a);return}var v=s+"",b=ie(v);Q(ye(b),b.lastChild),l.before(b)}))})}const qe=Ce;function Ve(o,e){return o.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:o.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function Ye(o,e,i){const r=new URL(i??"/",e).pathname;return o.origin!==e.origin||!o.pathname.startsWith(r)}var Ze=R('<link rel="alternate">');function ze(o,e){K(e,!1);const i=z(),r=()=>B(V,"$page",i),t=P(),l=P(),s=P(),g=re(oe,new URL(r().url))||"/";let a=c(e,"availableLanguageTags",8),m=c(e,"strategy",8),v=c(e,"currentLang",8);const b=(h,d)=>{const L=[];for(const T of a()){const S=d.getLocalisedPath(h,T),w=q(S,g,void 0),u=new URL(w,new URL(r().url)).href;L.push(u)}return L};f(()=>r(),()=>{I(t,J(r().url.pathname,g)[0])}),f(()=>(_(m()),n(t),_(v())),()=>{I(l,m().getCanonicalPath(n(t),v()))}),f(()=>(n(l),_(m())),()=>{I(s,b(n(l),m()))}),Y(),A();var p=N(),C=k(p);U(C,()=>a().length>=1,h=>{var d=N(),L=k(d);Le(L,1,()=>n(s),ke,(T,S,w)=>{var u=Ze();Z(()=>{H(u,"hreflang",a()[w]),H(u,"href",n(S))}),y(T,u)}),y(h,d)}),y(o,p),M()}const Fe=(o,e)=>`${He}=${o};Path=${e};SameSite=lax;Max-Age=31557600`;function Qe(o,e){K(e,!1);const i=z(),r=()=>B(V,"$page",i),t=P(),l=P(),s=re(oe,new URL(r().url))||"/";let g=c(e,"languageTag",24,()=>{}),a=c(e,"i18n",8),m=P(0);function v(C,h){try{const d=new URL(De(V).url),[L,T]=J(d.pathname,s),S=a().strategy.getCanonicalPath(L,n(t)),w=new URL(d);w.pathname=q(S,s,T);const u=new URL(C,new URL(w));if(Ye(u,d,s)||a().config.exclude(u.pathname))return C;const j=h??n(t),[E,x]=J(u.pathname,s),le=a().strategy.getLocalisedPath(E,j),F=new URL(u);return F.pathname=q(le,s,x),Ve(d,F)}catch{return C}}je({translateHref:v}),f(()=>(_(g()),_(a()),r()),()=>{I(t,g()??a().getLanguageFromUrl(r().url))}),f(()=>(_(a()),n(t)),()=>{a().config.runtime.setLanguageTag(n(t))}),f(()=>n(t),()=>{document.documentElement.lang=n(t)}),f(()=>(_(a()),n(t)),()=>{document.documentElement.dir=a().config.textDirection[n(t)]??"ltr"}),f(()=>(n(t),n(m)),()=>{n(t)&&I(m,n(m)+1)}),f(()=>(n(t),n(m),ee),()=>{n(t)&&(n(m)>1||qe)&&xe(ee)}),f(()=>n(t),()=>{I(l,n(t))}),f(()=>n(t),()=>{document.cookie=Fe(n(t),s)}),Y(),A();var b=N();se(C=>{var h=N(),d=k(h);U(d,()=>a().config.seo.noAlternateLinks!==!0&&!a().config.exclude(r().url.pathname),L=>{ze(L,{get availableLanguageTags(){return a().config.runtime.availableLanguageTags},get strategy(){return a().strategy},get currentLang(){return n(t)}})}),y(C,h)});var p=k(b);Ge(p,()=>n(l),C=>{var h=N(),d=k(h);Se(d,e,"default",{}),y(C,h)}),y(o,b),M()}var We=R('<meta name="theme-color">');function Xe(o,e){K(e,!1);let i=c(e,"themeColors",24,()=>{});A();var r=N(),t=k(r);U(t,i,l=>{var s=We();Z(()=>H(s,"content",i().dark)),y(l,s)}),y(o,r),M()}var $e=R('<meta name="theme-color">'),ea=R("<!> <!>",1);function aa(o,e){K(e,!1);let i=c(e,"trueNonce",8,""),r=c(e,"initConfig",8),t=c(e,"themeColors",24,()=>{});A(),se(l=>{var s=ea(),g=k(s);U(g,t,m=>{var v=$e();Z(()=>H(v,"content",t().dark)),y(m,v)});var a=ne(g,2);Je(a,()=>`<script${i()?` nonce=${i()}`:""}>(`+we.toString()+")("+JSON.stringify(r())+");<\/script>",!1,!1),y(l,s)}),M()}function ta(o,e){K(e,!1);const i=z(),r=()=>B(X,"$modeStorageKeyStore",i),t=()=>B($,"$themeStorageKeyStore",i),l=P();let s=c(e,"track",8,!0),g=c(e,"defaultMode",8,"system"),a=c(e,"themeColors",24,()=>{}),m=c(e,"disableTransitions",8,!0),v=c(e,"darkClassNames",24,()=>["dark"]),b=c(e,"lightClassNames",24,()=>[]),p=c(e,"defaultTheme",8,""),C=c(e,"nonce",8,""),h=c(e,"themeStorageKey",8,"mode-watcher-theme"),d=c(e,"modeStorageKey",8,"mode-watcher-mode"),L=c(e,"disableHeadScriptInjection",8,!1);Be(()=>{const u=pe.subscribe(()=>{}),j=Te.subscribe(()=>{});W.tracking(s()),W.query();const E=localStorage.getItem(r());Pe(Ie(E)?E:g());const x=localStorage.getItem(t());return Ke(x||p()),()=>{u(),j()}});const T=Ne({defaultMode:g(),themeColors:a(),darkClassNames:v(),lightClassNames:b(),defaultTheme:p(),modeStorageKey:d(),themeStorageKey:h()});f(()=>_(m()),()=>{Me.set(m())}),f(()=>_(a()),()=>{Re.set(a())}),f(()=>_(v()),()=>{Ue.set(v())}),f(()=>_(b()),()=>{Ae.set(b())}),f(()=>_(d()),()=>{X.set(d())}),f(()=>_(h()),()=>{$.set(h())}),f(()=>_(C()),()=>{I(l,typeof window>"u"?C():"")}),Y(),A();var S=N(),w=k(S);U(w,L,u=>{Xe(u,{get themeColors(){return a()}})},u=>{aa(u,{get trueNonce(){return n(l)},initConfig:T,get themeColors(){return a()}})}),y(o,S),M()}var na=R("<!> <!>",1);function ha(o,e){K(e,!0);var i=na(),r=k(i);ta(r,{});var t=ne(r,2);Qe(t,{i18n:Oe,children:(l,s)=>{var g=N(),a=k(g);Ee(a,()=>e.children),y(l,g)},$$slots:{default:!0}}),y(o,i),M()}export{ha as component};