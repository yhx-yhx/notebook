import{h,d as o,o as k,c as r,J as E,p as t,m as e,_ as c,a as y,a5 as g}from"./chunks/framework.Cyz3vTHn.js";import{E as m}from"./chunks/index.CszaQUJT.js";import"./chunks/index.ClFtIAma.js";import"./chunks/types.DTMeA5EJ.js";import"./chunks/index.4hICx8yr.js";import"./chunks/plugin-vue_export-helper.Fsmj3gze.js";import"./chunks/index.DCbbXQus.js";import"./chunks/icon.BN6CzzPm.js";import"./chunks/typescript.Bp3YSIOJ.js";import"./chunks/event.BE20p1dL.js";import"./chunks/use-form-item.CoVXonr6.js";import"./chunks/constants.DkItJwIb.js";import"./chunks/isNil.CHIgUVhi.js";function u(){const s=h(!1);function i(l){if(typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(l).then(()=>{s.value=!0},d=>{s.value=!1});else if(typeof document.execCommand=="function"){var a=document.createElement("textarea");a.value=l,document.body.appendChild(a),a.select(),s.value=document.execCommand("copy"),document.body.removeChild(a)}else alert("此浏览器不支持复制到剪贴板的功能")}return{isDone:s,copyToClipboard:i}}const F={class:"text-center"},b=o({__name:"index",setup(s){const i=h("张三的诗"),{isDone:l,copyToClipboard:a}=u();return(d,n)=>(k(),r("div",F,[E(t(m),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=p=>i.value=p),placeholder:"请输入需要复制的文字",clearable:"",onChange:n[1]||(n[1]=()=>{})},null,8,["modelValue"]),e("button",{onClick:n[2]||(n[2]=p=>t(a)(i.value))}," copyToClipboard ")]))}}),C=c(b,[["__scopeId","data-v-fa003016"]]),f=e("h2",{id:"copytoclipboard-hook",tabindex:"-1"},[y("copyToClipboard hook "),e("a",{class:"header-anchor",href:"#copytoclipboard-hook","aria-label":'Permalink to "copyToClipboard hook"'},"​")],-1),D=g("",1),J=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Config/hooks/copyToClipboard/index.md","filePath":"pages/Config/hooks/copyToClipboard/index.md","lastUpdated":1709735719000}'),_={name:"pages/Config/hooks/copyToClipboard/index.md"},O=Object.assign(_,{setup(s){return(i,l)=>(k(),r("div",null,[f,E(C),D]))}});export{J as __pageData,O as default};