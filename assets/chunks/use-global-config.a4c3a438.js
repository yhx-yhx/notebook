import{u as g,c as x,n as C}from"./plugin-vue_export-helper.52eedff0.js";import{a as I,l as _,S as z}from"./index.4a01d82b.js";import{u as y,d as b,z as S}from"./index.5d77a144.js";import{k as f}from"./objects.0ee4a266.js";import{r as K,g as d,V as N,e as o,u as c,$ as k}from"./framework.32e73e40.js";const m=Symbol(),i=K();function p(t,l=void 0){const n=d()?N(m,i):i;return t?o(()=>{var r,a;return(a=(r=n.value)==null?void 0:r[t])!=null?a:l}):n}function J(t,l){const n=p(),r=g(t,o(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||x})),a=I(o(()=>{var e;return(e=n.value)==null?void 0:e.locale})),s=y(o(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||b})),u=o(()=>{var e;return c(l)||((e=n.value)==null?void 0:e.size)||""});return E(o(()=>c(n)||{})),{ns:r,locale:a,zIndex:s,size:u}}const E=(t,l,n=!1)=>{var r;const a=!!d(),s=a?p():void 0,u=(r=l==null?void 0:l.provide)!=null?r:a?k:void 0;if(!u)return;const e=o(()=>{const v=c(t);return s!=null&&s.value?G(s.value,v):v});return u(m,e),u(_,o(()=>e.value.locale)),u(C,o(()=>e.value.namespace)),u(S,o(()=>e.value.zIndex)),u(z,{size:o(()=>e.value.size||"")}),(n||!i.value)&&(i.value=e.value),e},G=(t,l)=>{var n;const r=[...new Set([...f(t),...f(l)])],a={};for(const s of r)a[s]=(n=l[s])!=null?n:t[s];return a};export{J as a,p as u};