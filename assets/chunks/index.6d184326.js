import{b as n,d as p,u as c,_ as i,w as u}from"./plugin-vue_export-helper.83baa7e2.js";import{d,o,c as t,n as r,l as s,r as l,a as m,t as y,e as f,k as h,W as v}from"./framework.0f723ccb.js";const w=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=d({name:"ElCard"}),_=d({...S,props:w,setup(k){const a=c("card");return(e,C)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[m(y(e.header),1)])],2)):f("v-if",!0),h("div",{class:r(s(a).e("body")),style:v(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var b=i(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const N=u(b);export{N as E};