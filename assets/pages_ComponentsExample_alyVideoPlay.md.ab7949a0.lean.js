import{E as v,a as g,b as m,c as f,d as x,e as E,f as V,g as w}from"./chunks/index.9f384f21.js";import{j as k,a6 as y,h as P,o as c,b as _,w as s,N as l,l as e,c as h,K as C,L as A,k as r,a as i}from"./chunks/framework.b5ba70e4.js";import"./chunks/index.43c81514.js";const N=r("div",{id:"AliPlayer"},null,-1),j={__name:"alyVideoPlay",setup(b){k(()=>{const n=document.createElement("script"),o=document.createElement("link");o.href="https://g.alicdn.com/apsara-media-box/imp-web-player/2.16.3/skins/default/aliplayer-min.css",o.setAttribute("rel","stylesheet"),n.src="https://g.alicdn.com/apsara-media-box/imp-web-player/2.16.3/aliplayer-min.js",n.setAttribute("type","text/javascript"),document.body.appendChild(n),document.body.appendChild(o),n.onload=()=>{console.log("Aliplayer",window.Aliplayer),d.value=new Aliplayer(t,function(a){console.log(a)})}});const t=y({id:"AliPlayer",source:"//player.alicdn.com/video/aliyunmedia.mp4",width:"100%",height:"500px",autoplay:!1,isLive:!1,rePlay:!1,playsinline:!0,preload:!0,controlBarVisibility:"hover",useH5Prism:!0}),p=y({source:[{value:"https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",label:"mp4测试用例"},{value:"https://vip.lz-cdn5.com/20220401/3315_dbd60bc0/index.m3u8",label:"m3u8测试用例"},{value:"https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv",label:"flv测试用例"}]}),d=P(null),u=()=>{t.source&&(d.value.off("ready",()=>{console.log("change")}),d.value=new Aliplayer(t,function(n){}))};return(n,o)=>(c(),_(e(w),null,{default:s(()=>[l(e(v),{"label-width":"100px"},{default:s(()=>[l(e(g),null,{default:s(()=>[l(e(m),{span:11,offset:0},{default:s(()=>[l(e(f),{label:"视频源src"},{default:s(()=>[l(e(x),{modelValue:t.source,"onUpdate:modelValue":o[0]||(o[0]=a=>t.source=a),placeholder:"请输入视频源（src）",onChange:u,clearable:""},{default:s(()=>[(c(!0),h(C,null,A(p.source,a=>(c(),_(e(E),{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(e(m),{span:11,offset:0},{default:s(()=>[l(e(f),{label:"视频源src"},{default:s(()=>[l(e(V),{modelValue:t.source,"onUpdate:modelValue":o[1]||(o[1]=a=>t.source=a),placeholder:"请输入视频源（src）",onChange:u,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),N]),_:1}))}},B=r("h1",{id:"阿里云播放器测试用例",tabindex:"-1"},[i("阿里云播放器测试用例 "),r("a",{class:"header-anchor",href:"#阿里云播放器测试用例","aria-label":'Permalink to "阿里云播放器测试用例"'},"​")],-1),I=r("div",{class:"warning custom-block"},[r("p",{class:"custom-block-title"},"WARNING"),r("p",null,[i("切换视频源 尚未解决"),r("br"),i(" 原因 未找到 卸载实例方法 更新实例source 的方式")])],-1),q=JSON.parse('{"title":"阿里云播放器测试用例","description":"","frontmatter":{},"headers":[],"relativePath":"pages/ComponentsExample/alyVideoPlay.md","filePath":"pages/ComponentsExample/alyVideoPlay.md","lastUpdated":1690765418000}'),F={name:"pages/ComponentsExample/alyVideoPlay.md"},D=Object.assign(F,{setup(b){return(t,p)=>(c(),h("div",null,[B,I,l(j)]))}});export{q as __pageData,D as default};
