import{f as K,a as P,t as S}from"../chunks/legacy.Bc-hJaG5.js";import{p as U,f as L,t as p,a as R,s as a,c as r,r as n}from"../chunks/runtime.BKTTeIqF.js";import{s as u}from"../chunks/render.C2tpOIPO.js";import{i as j}from"../chunks/lifecycle.9ZlX1hPB.js";import{s as q,a as y}from"../chunks/store.BTL598sS.js";import{l as z,i as v}from"../chunks/i18n.Bn6b7SCv.js";import{p as A}from"../chunks/stores.BcUrXKJx.js";import{g as B}from"../chunks/entry.mvMhNtn4.js";const C=t=>`Hello, ${t.name} from en!`,D=t=>`Hello, ${t.name} from fr!`,g=(t,o={})=>({en:C,fr:D})[o.languageTag??z()](t);var E=(t,o)=>o("en"),F=(t,o)=>o("fr"),G=(t,o)=>o("en"),I=(t,o)=>o("fr"),J=S("<h1> </h1> <div><button>en</button> <button>fr</button></div> <h1> </h1> <div><button>en</button> <button>fr</button></div>",1);function Z(t,o){U(o,!1);const h=q(),d=()=>y(A,"$page",h);function e(x){const T=v.route(d().url.pathname),H=v.resolveRoute(T,x);B(H)}j();var _=J(),s=L(_),b=r(s,!0);p(()=>u(b,g({name:"SvelteKit User"}))),n(s);var i=a(s,2),c=r(i);c.__click=[E,e];var k=a(c,2);k.__click=[F,e],n(i);var l=a(i,2),$=r(l,!0);p(()=>u($,g({name:"SvelteKit User"}))),n(l);var m=a(l,2),f=r(m);f.__click=[G,e];var w=a(f,2);w.__click=[I,e],n(m),P(t,_),R()}K(["click"]);export{Z as component};