import{_ as r,f as d,j as p,a as R,D as V,p as g,E as B,F as y,G as j,u as N,H as k,x as v,v as P,I as $,J as T,K as O,L as S,M as C,e as x,d as n,t as M,N as w,h as z,O as q}from"./entry.ea9112ad.js";import{u as H}from"./asyncData.a3f111c6.js";import{h as L,j as F}from"./ContentQuery.aa31ed60.js";import{w as U,s as G,u as W,a as J}from"./utils.45f33423.js";import"./ContentDoc.c33b5fbe.js";import"./ContentList.c3a3807c.js";import"./ContentRenderer.225e0603.js";import"./ContentRendererMarkdown.f873e8e4.js";import"./ContentSlot.cec133de.js";import"./DocumentDrivenEmpty.cab913cd.js";import"./DocumentDrivenNotFound.cf8ea8f9.js";import"./Markdown.0d166c8a.js";import"./ProseCode.81b9c0c0.js";import"./_commonjsHelpers.f8a6f4fc.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=U(e?`/navigation/${L(e)}.json`:"/navigation");if(G())return(await r(()=>import("./client-db.32a5d94c.js"),["./client-db.32a5d94c.js","./entry.ea9112ad.js","./utils.45f33423.js","./ContentQuery.aa31ed60.js","./asyncData.a3f111c6.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(a=>a.generateNavigation))(e||{});const i=await $fetch(o,{method:"GET",responseType:"json",params:{_params:F(e||{}),previewToken:W("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const A={},Y=d({props:{name:String},async setup(t,e){const o=await A[t.name]().then(i=>i.default||i);return()=>p(o,{},e.slots)}}),Q=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=j("_route"),i=o===R()?V():o,u=g(()=>{var a,l;return(l=(a=N(t.name))!=null?a:i.meta.layout)!=null?l:"default"});return()=>{var s;const a=u.value&&u.value in A,l=(s=i.meta.layoutTransition)!=null?s:B;return y(k,a&&l,{default:()=>y(Y,a&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=v(null),u=P();return $(a=>{if(!u.isHydrating)return o("error",a),i.value=a,!1}),()=>{var a,l;return i.value?(a=e.error)==null?void 0:a.call(e,{error:i}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=v(!1);return T(()=>{o.value=!0}),i=>{var s;if(o.value)return(s=e.default)==null?void 0:s.call(e);const u=e.fallback||e.placeholder;if(u)return u();const a=i.fallback||i.placeholder||"",l=i.fallbackTag||i.placeholderTag||"span";return O(l,null,a)}}}),c=new WeakMap;function rt(t){if(c.has(t))return c.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u;if(o.mounted$){const a=t.render(o,...i);return a.children===null||typeof a.children=="string"?S(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):p(a)}else return p("div",(u=o.$attrs)!=null?u:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var a;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((a=t.setup)==null?void 0:a.call(t,o,i))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...s)=>{if(u.value){const _=l(...s);return _.children===null||typeof _.children=="string"?S(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):p(_)}else return p("div",i.attrs)})},c.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),it=d({name:"DevOnly",setup(t,e){return()=>null}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),at=d({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=_t({duration:t.duration,throttle:t.throttle}),i=P();return i.hook("page:start",o.start),i.hook("page:finish",o.finish),C(()=>o.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),o=v(!1),i=g(()=>1e4/t.duration);let u=null,a=null;function l(){_(),e.value=0,o.value=!0,t.throttle?a=setTimeout(E,t.throttle):E()}function s(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(a),u=null,a=null}function I(b){e.value=Math.min(100,e.value+b)}function D(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(i.value)},100)}return{progress:e,isLoading:o,start:l,finish:s,clear:_}}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,i)=>(x(()=>t({...st(o),...i.attrs},i)),()=>{var u,a;return e?(a=(u=i.slots).default)==null?void 0:a.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},pt=d({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{script:[o]}})}),mt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{noscript:[o]}})}),ft=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ht=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),vt=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var i,u,a;return{title:((a=(u=(i=e.default)==null?void 0:i.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),ct=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),gt=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,a,l;const o={...t},i=(l=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:l.children;return i&&(o.children=i),{style:[o]}})}),Et=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,i;return(i=(o=e.slots).default)==null?void 0:i.call(o)}}),yt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),St=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:pt,NoScript:mt,Link:ft,Base:ht,Title:vt,Meta:ct,Style:gt,Head:Et,Html:yt,Body:St},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./ContentDoc.c33b5fbe.js"),["./ContentDoc.c33b5fbe.js","./entry.ea9112ad.js","./ContentRenderer.225e0603.js","./ContentRendererMarkdown.f873e8e4.js","./_commonjsHelpers.f8a6f4fc.js","./ContentQuery.aa31ed60.js","./asyncData.a3f111c6.js","./utils.45f33423.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.c3a3807c.js"),["./ContentList.c3a3807c.js","./ContentQuery.aa31ed60.js","./entry.ea9112ad.js","./asyncData.a3f111c6.js","./utils.45f33423.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>Tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.aa31ed60.js").then(t=>t.C),["./ContentQuery.aa31ed60.js","./entry.ea9112ad.js","./asyncData.a3f111c6.js","./utils.45f33423.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.225e0603.js"),["./ContentRenderer.225e0603.js","./ContentRendererMarkdown.f873e8e4.js","./entry.ea9112ad.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.f873e8e4.js"),["./ContentRendererMarkdown.f873e8e4.js","./entry.ea9112ad.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.cec133de.js"),["./ContentSlot.cec133de.js","./utils.45f33423.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.cab913cd.js"),["./DocumentDrivenEmpty.cab913cd.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.cf8ea8f9.js"),["./DocumentDrivenNotFound.cf8ea8f9.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.0d166c8a.js"),["./Markdown.0d166c8a.js","./ContentSlot.cec133de.js","./utils.45f33423.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.c163de9a.js"),["./ProseA.c163de9a.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.91ffc0d6.js"),["./ProseBlockquote.91ffc0d6.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.81b9c0c0.js"),["./ProseCode.81b9c0c0.js","./entry.ea9112ad.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.2de4840e.js"),["./ProseCodeInline.2de4840e.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.f279b330.js"),["./ProseEm.f279b330.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.91d4df5d.js"),["./ProseH1.91d4df5d.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.36dd4b50.js"),["./ProseH2.36dd4b50.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.7d1891f4.js"),["./ProseH3.7d1891f4.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.7f14f87a.js"),["./ProseH4.7f14f87a.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.af877f24.js"),["./ProseH5.af877f24.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.d8414ed0.js"),["./ProseH6.d8414ed0.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.4193c08c.js"),["./ProseHr.4193c08c.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.a3bed2de.js"),["./ProseImg.a3bed2de.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.7c2c5799.js"),["./ProseLi.7c2c5799.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.9feaf6b1.js"),["./ProseOl.9feaf6b1.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.5a4d1cad.js"),["./ProseP.5a4d1cad.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.9b5afaee.js"),["./ProseStrong.9b5afaee.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.dde577c3.js"),["./ProseTable.dde577c3.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.bfc1ba0b.js"),["./ProseTbody.bfc1ba0b.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.7474fd13.js"),["./ProseTd.7474fd13.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.1aee7860.js"),["./ProseTh.1aee7860.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.c6a69740.js"),["./ProseThead.c6a69740.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.fa170220.js"),["./ProseTr.fa170220.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.9ce7d803.js"),["./ProseUl.9ce7d803.js","./entry.ea9112ad.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.1c0b90ca.js"),["./welcome.1c0b90ca.js","./entry.ea9112ad.js","./asyncData.a3f111c6.js","./ContentQuery.aa31ed60.js","./utils.45f33423.js","./ContentDoc.c33b5fbe.js","./ContentRenderer.225e0603.js","./ContentRendererMarkdown.f873e8e4.js","./_commonjsHelpers.f8a6f4fc.js","./ContentList.c3a3807c.js","./ContentSlot.cec133de.js","./DocumentDrivenEmpty.cab913cd.js","./DocumentDrivenNotFound.cf8ea8f9.js","./Markdown.0d166c8a.js","./ProseCode.81b9c0c0.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.ea9112ad.js").then(t=>t.a0),[],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.ea9112ad.js").then(t=>t.a1),[],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const Pt=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),o=g(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&w("dd-navigation").value){const{navigation:u}=J();return{navigation:u}}const{data:i}=await H(`content-navigation-${L(o.value)}`,()=>K(o.value));return{navigation:i}},render(t){const e=z(),{navigation:o}=t,i=l=>p(q,{to:l._path},()=>l.title),u=(l,s)=>p("ul",s?{"data-level":s}:null,l.map(_=>_.children?p("li",null,[i(_),u(_.children,s+1)]):p("li",null,i(_)))),a=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));export{Pt as default};
