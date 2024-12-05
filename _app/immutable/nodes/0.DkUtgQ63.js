import{c as z,o as oe,l as P,a as y,t as E}from"../chunks/legacy.Dm4gyfrH.js";import{J as le,x as Q,j as W,w as ie,k as X,b as ce,m as ge,d as me,h as de,g as fe,aC as ue,aN as he,p as M,aO as f,aP as q,f as w,a as A,t as F,F as n,aQ as U,U as K,G as v,s as te}from"../chunks/runtime.B76Vjo_i.js";import{e as ve,i as _e,k as ye,s as be,a as Ce,d as Le,b as Se,c as ke,f as Z,g as we,h as Ne,j as pe,m as $,t as ee,l as Te,n as Pe,o as Re,p as Ue,q as Ke}from"../chunks/mode.CHMDlCvN.js";import{n as ne,p as D,s as J,i as Me}from"../chunks/i18n.DV3FCGNH.js";import{s as Y,a as H,h as re}from"../chunks/store.BvVuv4PB.js";import{p as i,i as I,o as Ae}from"../chunks/index-client.BrO4ukPi.js";import{i as O}from"../chunks/lifecycle.CU51bgik.js";import{p as V}from"../chunks/stores.CEtiPPAo.js";import{s as j,L as Ee,a as Ie,b as ae}from"../chunks/index.DKNLSslk.js";import{b as se,i as Oe}from"../chunks/entry.CRHXc8EA.js";import{g as xe}from"../chunks/index.B9CFuaGY.js";function Be(l,e,c,s,t){var m=l,r="",o;le(()=>{if(r===(r=e()??"")){Q&&W();return}o!==void 0&&(ue(o),o=void 0),r!==""&&(o=ie(()=>{if(Q){X.data;for(var a=W(),d=a;a!==null&&(a.nodeType!==8||a.data!=="");)d=a,a=ce(a);if(a===null)throw ge(),me;z(X,d),m=de(a);return}var h=r+"",u=oe(h);z(fe(u),u.lastChild),m.before(u)}))})}const He=he;function je(l,e){return l.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:l.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function Ge(l,e,c){const s=new URL(c??"/",e).pathname;return l.origin!==e.origin||!l.pathname.startsWith(s)}var De=E('<link rel="alternate">');function Je(l,e){M(e,!1);const c=Y(),s=()=>H(V,"$page",c),t=U(),m=U(),r=U(),o=ne(se,new URL(s().url))||"/";let a=i(e,"availableLanguageTags",8),d=i(e,"strategy",8),h=i(e,"currentLang",8);const u=(g,L)=>{const C=[];for(const p of a()){const T=L.getLocalisedPath(g,p),S=J(T,o,void 0),N=new URL(S,new URL(s().url)).href;C.push(N)}return C};f(()=>s(),()=>{K(t,D(s().url.pathname,o)[0])}),f(()=>(v(d()),n(t),v(h())),()=>{K(m,d().getCanonicalPath(n(t),h()))}),f(()=>(n(m),v(d())),()=>{K(r,u(n(m),d()))}),q(),O();var R=P(),b=w(R);{var _=g=>{var L=P(),C=w(L);ve(C,1,()=>n(r),_e,(p,T,S)=>{var N=De();F(()=>{j(N,"hreflang",a()[S]),j(N,"href",n(T))}),y(p,N)}),y(g,L)};I(b,g=>{a().length>=1&&g(_)})}y(l,R),A()}const Ve=(l,e)=>`${Ee}=${l};Path=${e};SameSite=lax;Max-Age=31557600`;function qe(l,e){M(e,!1);const c=Y(),s=()=>H(V,"$page",c),t=U(),m=U(),r=ne(se,new URL(s().url))||"/";let o=i(e,"languageTag",24,()=>{}),a=i(e,"i18n",8),d=U(0);function h(b,_){try{const g=new URL(xe(V).url),[L,C]=D(g.pathname,r),p=a().strategy.getCanonicalPath(L,n(t)),T=new URL(g);T.pathname=J(p,r,C);const S=new URL(b,new URL(T));if(Ge(S,g,r)||a().config.exclude(S.pathname))return b;const N=_??n(t),[k,G]=D(S.pathname,r),x=a().strategy.getLocalisedPath(k,N),B=new URL(S);return B.pathname=J(x,r,G),je(g,B)}catch{return b}}Ie({translateHref:h}),f(()=>(v(o()),v(a()),s()),()=>{K(t,o()??a().getLanguageFromUrl(s().url))}),f(()=>(v(a()),n(t)),()=>{a().config.runtime.setLanguageTag(n(t))}),f(()=>n(t),()=>{document.documentElement.lang=n(t)}),f(()=>(v(a()),n(t)),()=>{document.documentElement.dir=a().config.textDirection[n(t)]??"ltr"}),f(()=>(n(t),n(d)),()=>{n(t)&&K(d,n(d)+1)}),f(()=>(n(t),n(d),ae),()=>{n(t)&&(n(d)>1||He)&&Oe(ae)}),f(()=>n(t),()=>{K(m,n(t))}),f(()=>n(t),()=>{document.cookie=Ve(n(t),r)}),q(),O();var u=P();re(b=>{var _=P(),g=w(_);{var L=C=>{Je(C,{get availableLanguageTags(){return a().config.runtime.availableLanguageTags},get strategy(){return a().strategy},get currentLang(){return n(t)}})};I(g,C=>{a().config.seo.noAlternateLinks!==!0&&!a().config.exclude(s().url.pathname)&&C(L)})}y(b,_)});var R=w(u);ye(R,()=>n(m),b=>{var _=P(),g=w(_);be(g,e,"default",{}),y(b,_)}),y(l,u),A()}var Fe=E('<meta name="theme-color">');function Ye(l,e){M(e,!1);let c=i(e,"themeColors",24,()=>{});O();var s=P(),t=w(s);{var m=r=>{var o=Fe();F(()=>j(o,"content",c().dark)),y(r,o)};I(t,r=>{c()&&r(m)})}y(l,s),A()}var ze=E('<meta name="theme-color">'),Qe=E("<!> <!>",1);function We(l,e){M(e,!1);let c=i(e,"trueNonce",8,""),s=i(e,"initConfig",8),t=i(e,"themeColors",24,()=>{});O(),re(m=>{var r=Qe(),o=w(r);{var a=h=>{var u=ze();F(()=>j(u,"content",t().dark)),y(h,u)};I(o,h=>{t()&&h(a)})}var d=te(o,2);Be(d,()=>`<script${c()?` nonce=${c()}`:""}>(`+Ce.toString()+")("+JSON.stringify(s())+");<\/script>",!1,!1),y(m,r)}),A()}function Xe(l,e){M(e,!1);const c=Y(),s=()=>H($,"$modeStorageKeyStore",c),t=()=>H(ee,"$themeStorageKeyStore",c),m=U();let r=i(e,"track",8,!0),o=i(e,"defaultMode",8,"system"),a=i(e,"themeColors",24,()=>{}),d=i(e,"disableTransitions",8,!0),h=i(e,"darkClassNames",24,()=>["dark"]),u=i(e,"lightClassNames",24,()=>[]),R=i(e,"defaultTheme",8,""),b=i(e,"nonce",8,""),_=i(e,"themeStorageKey",8,"mode-watcher-theme"),g=i(e,"modeStorageKey",8,"mode-watcher-mode"),L=i(e,"disableHeadScriptInjection",8,!1);Ae(()=>{const k=Se.subscribe(()=>{}),G=ke.subscribe(()=>{});Z.tracking(r()),Z.query();const x=localStorage.getItem(s());we(Ne(x)?x:o());const B=localStorage.getItem(t());return pe(B||R()),()=>{k(),G()}});const C=Le({defaultMode:o(),themeColors:a(),darkClassNames:h(),lightClassNames:u(),defaultTheme:R(),modeStorageKey:g(),themeStorageKey:_()});f(()=>v(d()),()=>{Te.set(d())}),f(()=>v(a()),()=>{Pe.set(a())}),f(()=>v(h()),()=>{Re.set(h())}),f(()=>v(u()),()=>{Ue.set(u())}),f(()=>v(g()),()=>{$.set(g())}),f(()=>v(_()),()=>{ee.set(_())}),f(()=>v(b()),()=>{K(m,typeof window>"u"?b():"")}),q(),O();var p=P(),T=w(p);{var S=k=>{Ye(k,{get themeColors(){return a()}})},N=k=>{We(k,{get trueNonce(){return n(m)},initConfig:C,get themeColors(){return a()}})};I(T,k=>{L()?k(S):k(N,!1)})}y(l,p),A()}var Ze=E("<!> <!>",1);function ga(l,e){M(e,!0);var c=Ze(),s=w(c);Xe(s,{});var t=te(s,2);qe(t,{i18n:Me,children:(m,r)=>{var o=P(),a=w(o);Ke(a,()=>e.children),y(m,o)},$$slots:{default:!0}}),y(l,c),A()}export{ga as component};