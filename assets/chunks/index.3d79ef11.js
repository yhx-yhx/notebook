import{E as k}from"./index.aa8d0667.js";import{b as y,u as h,_ as b,w as v}from"./plugin-vue_export-helper.83baa7e2.js";import{i as E}from"./icon.98ea5fda.js";import{d as p,g as C,o,c as t,b as r,w as _,S as g,l,e as i,n as c,r as d}from"./framework.0f723ccb.js";const w=y({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:E}}),B={click:a=>a instanceof MouseEvent},S=["href"],$=p({name:"ElLink"}),L=p({...$,props:w,emits:B,setup(a,{emit:u}){const s=a,n=h("link"),f=C(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function m(e){s.disabled||u("click",e)}return(e,I)=>(o(),t("a",{class:c(l(f)),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(o(),r(l(k),{key:0},{default:_(()=>[(o(),r(g(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(o(),t("span",{key:1,class:c(l(n).e("inner"))},[d(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):i("v-if",!0)],10,S))}});var P=b(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const M=v(P);export{M as E};
