import{e as Y,u as oe,s as q,f as P,a as _,b as G,p as H,t as E,v as z,w as le}from"../chunks/stores.DTLFJNHg.js";import{J as ie,x as Z,j as Q,w as ce,k as W,b as ge,m as de,d as me,h as ue,g as fe,a7 as he,ay as ve,p as U,az as ne,aA as u,aB as F,f as k,a as A,t as X,F as n,aC as R,Q as M,G as v,am as _e,aD as ye,s as se,aE as be}from"../chunks/entry.DzBsC5rC.js";import{e as Ce,i as Le,s as O,L as we,a as Se,k as ke,b as pe,c as $,d as Ke,f as Ne,g as Pe,h as Te,j as ee,l as Re,m as Me,n as Ue,o as ae,t as te,p as Ae,q as Ee,r as Ie,u as je,v as xe}from"../chunks/mode.Dko1caYl.js";import{n as re,p as c,b as I,c as J,s as V,o as Be,i as Ge}from"../chunks/i18n.DVvcUmry.js";import{i as j}from"../chunks/lifecycle.COcn30qN.js";function Oe(l,e,g,r,t){var i=l,s="",o;ie(()=>{if(s===(s=e()??"")){Z&&Q();return}o!==void 0&&(he(o),o=void 0),s!==""&&(o=ce(()=>{if(Z){W.data;for(var a=Q(),m=a;a!==null&&(a.nodeType!==8||a.data!=="");)m=a,a=ge(a);if(a===null)throw de(),me;Y(W,m),i=ue(a);return}var h=s+"",f=oe(h);Y(fe(f),f.lastChild),i.before(f)}))})}const De=ve;function He(l,e){return l.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:l.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function Je(l,e,g){const r=new URL(g??"/",e).pathname;return l.origin!==e.origin||!l.pathname.startsWith(r)}var Ve=E('<link rel="alternate">');function qe(l,e){U(e,!1);const g=q(),r=()=>G(H,"$page",g),t=R(),i=R(),s=R(),o=re(ne,new URL(r().url))||"/";let a=c(e,"availableLanguageTags",8),m=c(e,"strategy",8),h=c(e,"currentLang",8);const f=(d,L)=>{const C=[];for(const K of a()){const N=L.getLocalisedPath(d,K),w=V(N,o,void 0),p=new URL(w,new URL(r().url)).href;C.push(p)}return C};u(()=>r(),()=>{M(t,J(r().url.pathname,o)[0])}),u(()=>(v(m()),n(t),v(h())),()=>{M(i,m().getCanonicalPath(n(t),h()))}),u(()=>(n(i),v(m())),()=>{M(s,f(n(i),m()))}),F(),j();var T=P(),b=k(T);{var y=d=>{var L=P(),C=k(L);Ce(C,1,()=>n(s),Le,(K,N,w)=>{var p=Ve();X(()=>{O(p,"hreflang",a()[w]),O(p,"href",n(N))}),_(K,p)}),_(d,L)};I(b,d=>{a().length>=1&&d(y)})}_(l,T),A()}const ze=(l,e)=>`${we}=${l};Path=${e};SameSite=lax;Max-Age=31557600`;function Fe(l,e){U(e,!1);const g=q(),r=()=>G(H,"$page",g),t=R(),i=R(),s=re(ne,new URL(r().url))||"/";let o=c(e,"languageTag",24,()=>{}),a=c(e,"i18n",8),m=R(0);function h(b,y){try{const d=new URL(_e(H).url),[L,C]=J(d.pathname,s),K=a().strategy.getCanonicalPath(L,n(t)),N=new URL(d);N.pathname=V(K,s,C);const w=new URL(b,new URL(N));if(Je(w,d,s)||a().config.exclude(w.pathname))return b;const p=y??n(t),[S,D]=J(w.pathname,s),x=a().strategy.getLocalisedPath(S,p),B=new URL(w);return B.pathname=V(x,s,D),He(d,B)}catch{return b}}Se({translateHref:h}),u(()=>(v(o()),v(a()),r()),()=>{M(t,o()??a().getLanguageFromUrl(r().url))}),u(()=>(v(a()),n(t)),()=>{a().config.runtime.setLanguageTag(n(t))}),u(()=>n(t),()=>{document.documentElement.lang=n(t)}),u(()=>(v(a()),n(t)),()=>{document.documentElement.dir=a().config.textDirection[n(t)]??"ltr"}),u(()=>(n(t),n(m)),()=>{n(t)&&M(m,n(m)+1)}),u(()=>(n(t),n(m),$),()=>{n(t)&&(n(m)>1||De)&&ye($)}),u(()=>n(t),()=>{M(i,n(t))}),u(()=>n(t),()=>{document.cookie=ze(n(t),s)}),F(),j();var f=P();z(b=>{var y=P(),d=k(y);{var L=C=>{qe(C,{get availableLanguageTags(){return a().config.runtime.availableLanguageTags},get strategy(){return a().strategy},get currentLang(){return n(t)}})};I(d,C=>{a().config.seo.noAlternateLinks!==!0&&!a().config.exclude(r().url.pathname)&&C(L)})}_(b,y)});var T=k(f);ke(T,()=>n(i),b=>{var y=P(),d=k(y);pe(d,e,"default",{}),_(b,y)}),_(l,f),A()}var Xe=E('<meta name="theme-color">');function Ye(l,e){U(e,!1);let g=c(e,"themeColors",24,()=>{});j();var r=P(),t=k(r);{var i=s=>{var o=Xe();X(()=>O(o,"content",g().dark)),_(s,o)};I(t,s=>{g()&&s(i)})}_(l,r),A()}var Ze=E('<meta name="theme-color">'),Qe=E("<!> <!>",1);function We(l,e){U(e,!1);let g=c(e,"trueNonce",8,""),r=c(e,"initConfig",8),t=c(e,"themeColors",24,()=>{});j(),z(i=>{var s=Qe(),o=k(s);{var a=h=>{var f=Ze();X(()=>O(f,"content",t().dark)),_(h,f)};I(o,h=>{t()&&h(a)})}var m=se(o,2);Oe(m,()=>`<script${g()?` nonce=${g()}`:""}>(`+Ke.toString()+")("+JSON.stringify(r())+");<\/script>",!1,!1),_(i,s)}),A()}function $e(l,e){U(e,!1);const g=q(),r=()=>G(ae,"$modeStorageKeyStore",g),t=()=>G(te,"$themeStorageKeyStore",g),i=R();let s=c(e,"track",8,!0),o=c(e,"defaultMode",8,"system"),a=c(e,"themeColors",24,()=>{}),m=c(e,"disableTransitions",8,!0),h=c(e,"darkClassNames",24,()=>["dark"]),f=c(e,"lightClassNames",24,()=>[]),T=c(e,"defaultTheme",8,""),b=c(e,"nonce",8,""),y=c(e,"themeStorageKey",8,"mode-watcher-theme"),d=c(e,"modeStorageKey",8,"mode-watcher-mode"),L=c(e,"disableHeadScriptInjection",8,!1);Be(()=>{const S=Pe.subscribe(()=>{}),D=Te.subscribe(()=>{});ee.tracking(s()),ee.query();const x=localStorage.getItem(r());Re(Me(x)?x:o());const B=localStorage.getItem(t());return Ue(B||T()),()=>{S(),D()}});const C=Ne({defaultMode:o(),themeColors:a(),darkClassNames:h(),lightClassNames:f(),defaultTheme:T(),modeStorageKey:d(),themeStorageKey:y()});u(()=>v(m()),()=>{Ae.set(m())}),u(()=>v(a()),()=>{Ee.set(a())}),u(()=>v(h()),()=>{Ie.set(h())}),u(()=>v(f()),()=>{je.set(f())}),u(()=>v(d()),()=>{ae.set(d())}),u(()=>v(y()),()=>{te.set(y())}),u(()=>v(b()),()=>{M(i,typeof window>"u"?b():"")}),F(),j();var K=P(),N=k(K);{var w=S=>{Ye(S,{get themeColors(){return a()}})},p=S=>{We(S,{get trueNonce(){return n(i)},initConfig:C,get themeColors(){return a()}})};I(N,S=>{L()?S(w):S(p,!1)})}_(l,K),A()}var ea=le(`<script async src="https://www.googletagmanager.com/gtag/js?id=G-SK8KKXP57Z">
  <\/script> <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-SK8KKXP57Z");
  <\/script>`,1),aa=E("<!> <!>",1);function la(l,e){U(e,!0);var g=aa();z(i=>{var s=ea();be(2),_(i,s)});var r=k(g);$e(r,{});var t=se(r,2);Fe(t,{i18n:Ge,children:(i,s)=>{var o=P(),a=k(o);xe(a,()=>e.children),_(i,o)},$$slots:{default:!0}}),_(l,g),A()}export{la as component};
