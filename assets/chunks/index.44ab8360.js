import{i as k,E as y}from"./index.dcf49488.js";import{b as h,u as b,_ as v,w as E}from"./plugin-vue_export-helper.36e72a57.js";import{d as u,g as C,o,c as t,b as r,w as _,S as g,l,e as i,n as c,r as d}from"./framework.ecd7c0a9.js";const w=h({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:k}}),B={click:a=>a instanceof MouseEvent},S=["href"],$=u({name:"ElLink"}),L=u({...$,props:w,emits:B,setup(a,{emit:p}){const s=a,n=b("link"),f=C(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function m(e){s.disabled||p("click",e)}return(e,I)=>(o(),t("a",{class:c(l(f)),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(o(),r(l(y),{key:0},{default:_(()=>[(o(),r(g(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(o(),t("span",{key:1,class:c(l(n).e("inner"))},[d(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):i("v-if",!0)],10,S))}});var P=v(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const K=E(P);export{K as E};
