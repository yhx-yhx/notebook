import{u as a,r,h as i,e as A,j as D,k as F,C as p,_ as u,N as b,p as m,V as d}from"./chunks/framework.5dd7d4b8.js";function f(s=document.body){s=a(s);const n=r(!1),l=()=>{if(s=a(s),!s){console.warn("target is null");return}s.requestFullscreen?s.requestFullscreen():s.mozRequestFullScreen?s.mozRequestFullScreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen()},e=()=>{if(!s){console.warn("target is null");return}document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},o=()=>{n.value?e():l()};return document.addEventListener("fullscreenchange",y=>{document.FullScreenElement?n.value=!0:n.value=!1}),{enter:l,exit:e,isFullscreen:n,toggle:o}}const _={class:"text-center"},h=i({__name:"index",setup(s){const n=r(null),l=A(()=>n),{isFullscreen:e,enter:o,exit:y,toggle:c}=f(l);return(q,t)=>(D(),F("div",_,[p("video",{ref_key:"el",ref:n,src:"https://vjs.zencdn.net/v/oceans.mp4",width:"600",controls:""},null,512),p("button",{onClick:t[0]||(t[0]=(...C)=>a(c)&&a(c)(...C))}," Go Fullscreen ")]))}});const g=u(h,[["__scopeId","data-v-94f40a94"]]),E=p("h2",{id:"fullscreen-hook",tabindex:"-1"},[m("fullscreen hook "),p("a",{class:"header-anchor",href:"#fullscreen-hook","aria-label":'Permalink to "fullscreen hook"'},"​")],-1),x=d("",1),k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Config/hooks/fullscreen/index.md","filePath":"pages/Config/hooks/fullscreen/index.md","lastUpdated":1707115218000}'),v={name:"pages/Config/hooks/fullscreen/index.md"},w=Object.assign(v,{setup(s){return(n,l)=>(D(),F("div",null,[E,b(g),x]))}});export{k as __pageData,w as default};