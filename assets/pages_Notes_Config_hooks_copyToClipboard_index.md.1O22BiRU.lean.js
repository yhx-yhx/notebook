import{h,d,o as k,c as r,J as E,p as t,m as l,_ as c,a as y,a5 as g}from"./chunks/framework.Svq8VKyI.js";import{E as m}from"./chunks/index.BsL5oK5y.js";import"./chunks/index.JcRHzX7x.js";import"./chunks/types.CF8Z-v_j.js";import"./chunks/index.Cl81w-4Z.js";import"./chunks/plugin-vue_export-helper.D7P7YZzh.js";import"./chunks/index.BLjPyjd1.js";import"./chunks/icon.ebjsOQxC.js";import"./chunks/typescript.Bp3YSIOJ.js";import"./chunks/event.BB_Ol6Sd.js";import"./chunks/use-form-item.BMXIMvtg.js";import"./chunks/constants.Bn9rfmTB.js";import"./chunks/error.Cq9Fpw4b.js";import"./chunks/isNil.CHIgUVhi.js";function u(){const s=h(!1);function i(e){if(typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(e).then(()=>{s.value=!0},o=>{s.value=!1});else if(typeof document.execCommand=="function"){var a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.select(),s.value=document.execCommand("copy"),document.body.removeChild(a)}else alert("此浏览器不支持复制到剪贴板的功能")}return{isDone:s,copyToClipboard:i}}const F={class:"text-center"},b=d({__name:"index",setup(s){const i=h("张三的诗"),{isDone:e,copyToClipboard:a}=u();return(o,n)=>(k(),r("div",F,[E(t(m),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=p=>i.value=p),placeholder:"请输入需要复制的文字",clearable:"",onChange:n[1]||(n[1]=()=>{})},null,8,["modelValue"]),l("button",{onClick:n[2]||(n[2]=p=>t(a)(i.value))}," copyToClipboard ")]))}}),C=c(b,[["__scopeId","data-v-3538dc31"]]),f=l("h2",{id:"copytoclipboard-hook",tabindex:"-1"},[y("copyToClipboard hook "),l("a",{class:"header-anchor",href:"#copytoclipboard-hook","aria-label":'Permalink to "copyToClipboard hook"'},"​")],-1),D=g("",1),O=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Notes/Config/hooks/copyToClipboard/index.md","filePath":"pages/Notes/Config/hooks/copyToClipboard/index.md","lastUpdated":1710085005000}'),_={name:"pages/Notes/Config/hooks/copyToClipboard/index.md"},U=Object.assign(_,{setup(s){return(i,e)=>(k(),r("div",null,[f,E(C),D]))}});export{O as __pageData,U as default};
