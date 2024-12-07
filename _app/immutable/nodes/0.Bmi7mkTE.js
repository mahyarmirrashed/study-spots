import{e as Y,u as oe,s as q,f as R,a as y,b as H,p as G,t as E,v as te}from"../chunks/stores.DgQ0gFZM.js";import{J as le,x as Q,j as W,w as ie,k as X,b as ce,m as ge,d as de,h as me,g as ue,a7 as fe,ay as he,p,az as ne,aA as u,aB as z,f as w,a as A,t as F,F as n,aC as M,Q as U,G as v,am as ve,aD as _e,s as se}from"../chunks/entry.D0qt5YfA.js";import{e as ye,i as be,s as j,L as Ce,a as Le,k as Se,b as ke,c as Z,d as we,f as Ne,g as Te,h as Pe,j as $,l as Re,m as Ke,n as Me,o as ee,t as ae,p as Ue,q as pe,r as Ae,u as Ee,v as Ie}from"../chunks/mode.qgxThjTJ.js";import{n as re,p as i,b as I,c as J,s as V,o as Be,i as Oe}from"../chunks/i18n.Dq4jj2NZ.js";import{i as B}from"../chunks/lifecycle.C3N4iVFg.js";function xe(l,e,c,r,t){var d=l,s="",o;le(()=>{if(s===(s=e()??"")){Q&&W();return}o!==void 0&&(fe(o),o=void 0),s!==""&&(o=ie(()=>{if(Q){X.data;for(var a=W(),m=a;a!==null&&(a.nodeType!==8||a.data!=="");)m=a,a=ce(a);if(a===null)throw ge(),de;Y(X,m),d=me(a);return}var h=s+"",f=oe(h);Y(ue(f),f.lastChild),d.before(f)}))})}const He=he;function je(l,e){return l.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:l.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function De(l,e,c){const r=new URL(c??"/",e).pathname;return l.origin!==e.origin||!l.pathname.startsWith(r)}var Ge=E('<link rel="alternate">');function Je(l,e){p(e,!1);const c=q(),r=()=>H(G,"$page",c),t=M(),d=M(),s=M(),o=re(ne,new URL(r().url))||"/";let a=i(e,"availableLanguageTags",8),m=i(e,"strategy",8),h=i(e,"currentLang",8);const f=(g,L)=>{const C=[];for(const T of a()){const P=L.getLocalisedPath(g,T),S=V(P,o,void 0),N=new URL(S,new URL(r().url)).href;C.push(N)}return C};u(()=>r(),()=>{U(t,J(r().url.pathname,o)[0])}),u(()=>(v(m()),n(t),v(h())),()=>{U(d,m().getCanonicalPath(n(t),h()))}),u(()=>(n(d),v(m())),()=>{U(s,f(n(d),m()))}),z(),B();var K=R(),b=w(K);{var _=g=>{var L=R(),C=w(L);ye(C,1,()=>n(s),be,(T,P,S)=>{var N=Ge();F(()=>{j(N,"hreflang",a()[S]),j(N,"href",n(P))}),y(T,N)}),y(g,L)};I(b,g=>{a().length>=1&&g(_)})}y(l,K),A()}const Ve=(l,e)=>`${Ce}=${l};Path=${e};SameSite=lax;Max-Age=31557600`;function qe(l,e){p(e,!1);const c=q(),r=()=>H(G,"$page",c),t=M(),d=M(),s=re(ne,new URL(r().url))||"/";let o=i(e,"languageTag",24,()=>{}),a=i(e,"i18n",8),m=M(0);function h(b,_){try{const g=new URL(ve(G).url),[L,C]=J(g.pathname,s),T=a().strategy.getCanonicalPath(L,n(t)),P=new URL(g);P.pathname=V(T,s,C);const S=new URL(b,new URL(P));if(De(S,g,s)||a().config.exclude(S.pathname))return b;const N=_??n(t),[k,D]=J(S.pathname,s),O=a().strategy.getLocalisedPath(k,N),x=new URL(S);return x.pathname=V(O,s,D),je(g,x)}catch{return b}}Le({translateHref:h}),u(()=>(v(o()),v(a()),r()),()=>{U(t,o()??a().getLanguageFromUrl(r().url))}),u(()=>(v(a()),n(t)),()=>{a().config.runtime.setLanguageTag(n(t))}),u(()=>n(t),()=>{document.documentElement.lang=n(t)}),u(()=>(v(a()),n(t)),()=>{document.documentElement.dir=a().config.textDirection[n(t)]??"ltr"}),u(()=>(n(t),n(m)),()=>{n(t)&&U(m,n(m)+1)}),u(()=>(n(t),n(m),Z),()=>{n(t)&&(n(m)>1||He)&&_e(Z)}),u(()=>n(t),()=>{U(d,n(t))}),u(()=>n(t),()=>{document.cookie=Ve(n(t),s)}),z(),B();var f=R();te(b=>{var _=R(),g=w(_);{var L=C=>{Je(C,{get availableLanguageTags(){return a().config.runtime.availableLanguageTags},get strategy(){return a().strategy},get currentLang(){return n(t)}})};I(g,C=>{a().config.seo.noAlternateLinks!==!0&&!a().config.exclude(r().url.pathname)&&C(L)})}y(b,_)});var K=w(f);Se(K,()=>n(d),b=>{var _=R(),g=w(_);ke(g,e,"default",{}),y(b,_)}),y(l,f),A()}var ze=E('<meta name="theme-color">');function Fe(l,e){p(e,!1);let c=i(e,"themeColors",24,()=>{});B();var r=R(),t=w(r);{var d=s=>{var o=ze();F(()=>j(o,"content",c().dark)),y(s,o)};I(t,s=>{c()&&s(d)})}y(l,r),A()}var Ye=E('<meta name="theme-color">'),Qe=E("<!> <!>",1);function We(l,e){p(e,!1);let c=i(e,"trueNonce",8,""),r=i(e,"initConfig",8),t=i(e,"themeColors",24,()=>{});B(),te(d=>{var s=Qe(),o=w(s);{var a=h=>{var f=Ye();F(()=>j(f,"content",t().dark)),y(h,f)};I(o,h=>{t()&&h(a)})}var m=se(o,2);xe(m,()=>`<script${c()?` nonce=${c()}`:""}>(`+we.toString()+")("+JSON.stringify(r())+");<\/script>",!1,!1),y(d,s)}),A()}function Xe(l,e){p(e,!1);const c=q(),r=()=>H(ee,"$modeStorageKeyStore",c),t=()=>H(ae,"$themeStorageKeyStore",c),d=M();let s=i(e,"track",8,!0),o=i(e,"defaultMode",8,"system"),a=i(e,"themeColors",24,()=>{}),m=i(e,"disableTransitions",8,!0),h=i(e,"darkClassNames",24,()=>["dark"]),f=i(e,"lightClassNames",24,()=>[]),K=i(e,"defaultTheme",8,""),b=i(e,"nonce",8,""),_=i(e,"themeStorageKey",8,"mode-watcher-theme"),g=i(e,"modeStorageKey",8,"mode-watcher-mode"),L=i(e,"disableHeadScriptInjection",8,!1);Be(()=>{const k=Te.subscribe(()=>{}),D=Pe.subscribe(()=>{});$.tracking(s()),$.query();const O=localStorage.getItem(r());Re(Ke(O)?O:o());const x=localStorage.getItem(t());return Me(x||K()),()=>{k(),D()}});const C=Ne({defaultMode:o(),themeColors:a(),darkClassNames:h(),lightClassNames:f(),defaultTheme:K(),modeStorageKey:g(),themeStorageKey:_()});u(()=>v(m()),()=>{Ue.set(m())}),u(()=>v(a()),()=>{pe.set(a())}),u(()=>v(h()),()=>{Ae.set(h())}),u(()=>v(f()),()=>{Ee.set(f())}),u(()=>v(g()),()=>{ee.set(g())}),u(()=>v(_()),()=>{ae.set(_())}),u(()=>v(b()),()=>{U(d,typeof window>"u"?b():"")}),z(),B();var T=R(),P=w(T);{var S=k=>{Fe(k,{get themeColors(){return a()}})},N=k=>{We(k,{get trueNonce(){return n(d)},initConfig:C,get themeColors(){return a()}})};I(P,k=>{L()?k(S):k(N,!1)})}y(l,T),A()}var Ze=E("<!> <!>",1);function sa(l,e){p(e,!0);var c=Ze(),r=w(c);Xe(r,{});var t=se(r,2);qe(t,{i18n:Oe,children:(d,s)=>{var o=R(),a=w(o);Ie(a,()=>e.children),y(d,o)},$$slots:{default:!0}}),y(l,c),A()}export{sa as component};
