import{u as g,c as x,n as C}from"./plugin-vue_export-helper.DbJrgBmy.js";import{u as I,l as _}from"./index.zrX3Sylh.js";import{u as z,d as y,z as b}from"./index.D4NKd-Oo.js";import{S}from"./index.CqjJGNXX.js";import{k as f}from"./objects.udGwCpTy.js";import{h as K,aw as d,O as k,k as o,p as c,$ as N}from"./framework.Mt7VO4PB.js";const m=Symbol(),i=K();function p(t,l=void 0){const n=d()?k(m,i):i;return t?o(()=>{var r,a;return(a=(r=n.value)==null?void 0:r[t])!=null?a:l}):n}function J(t,l){const n=p(),r=g(t,o(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||x})),a=I(o(()=>{var e;return(e=n.value)==null?void 0:e.locale})),s=z(o(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||y})),u=o(()=>{var e;return c(l)||((e=n.value)==null?void 0:e.size)||""});return E(o(()=>c(n)||{})),{ns:r,locale:a,zIndex:s,size:u}}const E=(t,l,n=!1)=>{var r;const a=!!d(),s=a?p():void 0,u=(r=l==null?void 0:l.provide)!=null?r:a?N:void 0;if(!u)return;const e=o(()=>{const v=c(t);return s!=null&&s.value?G(s.value,v):v});return u(m,e),u(_,o(()=>e.value.locale)),u(C,o(()=>e.value.namespace)),u(b,o(()=>e.value.zIndex)),u(S,{size:o(()=>e.value.size||"")}),(n||!i.value)&&(i.value=e.value),e},G=(t,l)=>{var n;const r=[...new Set([...f(t),...f(l)])],a={};for(const s of r)a[s]=(n=l[s])!=null?n:t[s];return a};export{J as a,p as u};
