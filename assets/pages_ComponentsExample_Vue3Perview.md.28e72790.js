import{_ as p,o as t,c as a,K as _,W as u,X as v,h as o,k as e,N as m,a as h}from"./chunks/framework.b53b6339.js";const f=v('<div class="tools" data-v-ca1d143f><div class="circle" data-v-ca1d143f><span class="red box" data-v-ca1d143f></span></div><div class="circle" data-v-ca1d143f><span class="yellow box" data-v-ca1d143f></span></div><div class="circle" data-v-ca1d143f><span class="green box" data-v-ca1d143f></span></div></div>',1),w=["data","type"],y=["src"],g={key:2},x=["src"],V={key:1,class:"empty_views"},P={__name:"Vue3Preview",props:{height:{type:String,default:"100%"},width:{type:String,default:"100%"},src:{type:String},mime:{type:String},name:{type:String,default:"name"}},setup(n){const s=n;return(i,r)=>(t(),a("div",{class:"previews_ctn",style:u({width:s.width,height:s.height})},[f,s.src?(t(),a(_,{key:0},[s.mime==="application/pdf"?(t(),a("object",{key:0,class:"pd-5 previews_view",data:s.src,type:s.mime},null,8,w)):s.mime.includes("mp4")?(t(),a("video",{key:1,controls:"",src:i.urlOrigin+s.src,type:"video/mp4",class:"pd-5 previews_view_video"},null,8,y)):s.mime.includes("txt")?(t(),a("div",g," qwqw ")):(t(),a("img",{key:3,class:"pd-5 previews_img",src:i.$props.src,alt:""},null,8,x))],64)):(t(),a("div",V,"暂无数据"))],4))}},b=p(P,[["__scopeId","data-v-ca1d143f"]]);const k=e("h1",{id:"vue3preview-组件",tabindex:"-1"},[h("Vue3Preview 组件 "),e("a",{class:"header-anchor",href:"#vue3preview-组件","aria-label":'Permalink to "Vue3Preview 组件"'},"​")],-1),S=e("br",null,null,-1),$={class:"file"},N=e("br",null,null,-1),C=e("br",null,null,-1),E=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"支持的预览预览格式"),e("ul",null,[e("li",null,"近乎所有的 图片格式"),e("li",null,"txt"),e("li",null,"json")])],-1),O=JSON.parse('{"title":"Vue3Preview 组件","description":"","frontmatter":{},"headers":[],"relativePath":"pages/ComponentsExample/Vue3Perview.md","filePath":"pages/ComponentsExample/Vue3Perview.md","lastUpdated":1691926275000}'),j={name:"pages/ComponentsExample/Vue3Perview.md"},q=Object.assign(j,{setup(n){const s=o(),i=o(),r=d=>{let l=d.target.files[0];i.value=l.type,l.type.split("/")[1];var c=new FileReader;c.onload=()=>{s.value=c.result},l&&c.readAsDataURL(l)};return(d,l)=>(t(),a("div",null,[k,S,e("div",$,[e("input",{class:"file-input",type:"file",onChange:r},null,32)]),N,m(b,{src:s.value,mime:i.value},null,8,["src","mime"]),C,E]))}});export{O as __pageData,q as default};