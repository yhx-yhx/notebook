import{_ as A,j as b,Q as F,o as y,c as i,N as s,w as a,a as n,a3 as u,l,k as e,p as m,m as d,X as g}from"./chunks/framework.0f723ccb.js";import{E as p}from"./chunks/index.d559efd6.js";import"./chunks/index.aa8d0667.js";import"./chunks/plugin-vue_export-helper.83baa7e2.js";import"./chunks/types.818102b1.js";import"./chunks/index.726892a4.js";import"./chunks/use-global-config.9fd27099.js";import"./chunks/index.1a58e3eb.js";import"./chunks/index.aec0572e.js";import"./chunks/objects.3d398694.js";import"./chunks/use-form-item.d1ef574a.js";import"./chunks/constants.492d77ee.js";import"./chunks/icon.98ea5fda.js";const f=[{element:"#hamburger-container",popover:{title:"Hamburger",description:"Open && Close sidebar",position:"bottom"}},{element:"#breadcrumb-container",popover:{title:"Breadcrumb",description:"Indicate the current page location",position:"bottom"}},{element:"#header-search",popover:{title:"Page Search",description:"Page search, quick navigation",position:"left"}},{element:"#screenfull",popover:{title:"Screenfull",description:"Set the page into fullscreen",position:"left"}},{element:"#size-select",popover:{title:"Switch Size",description:"Switch the system size",position:"left"}},{element:"#tags-view-container",popover:{title:"Tags view",description:"The history of the page you visited",position:"bottom"},padding:0}];const D=o=>(m("data-v-8b7d3acc"),o=o(),d(),o),v={class:"app-container"},E=D(()=>e("div",null,"引导页",-1)),h=D(()=>e("br",null,null,-1)),_=D(()=>e("aside",null,[n(" The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on "),e("a",{href:"https://github.com/kamranahmedse/driver.js",target:"_blank"},"driver.js.")],-1)),q={class:"guide_test"},w={__name:"guide",setup(o){let c=null,t;b(()=>{F(()=>import("./chunks/driver.min.b76862e4.js").then(r=>r.d),["assets/chunks/driver.min.b76862e4.js","assets/chunks/commonjsHelpers.de833af9.js"]).then(r=>{c=r.default,t=new c({animate:!1,opacity:.75,padding:10,allowClose:!1,overlayClickNext:!1,doneBtnText:"Done",closeBtnText:"Close",stageBackground:"#ffffff",nextBtnText:"Next",prevBtnText:"Previous"})})}),F(()=>import("./chunks/driver.min.81247645.js"),[]);const C=()=>{t.defineSteps(f),t.start()};return(r,S)=>(y(),i("div",v,[E,h,_,s(l(p),{icon:"el-icon-question",type:"primary",onClick:u(C,["prevent","stop"])},{default:a(()=>[n(" Show Guide ")]),_:1},8,["onClick"]),e("div",q,[s(l(p),{id:"hamburger-container"},{default:a(()=>[n("hamburger-container")]),_:1}),s(l(p),{id:"breadcrumb-container"},{default:a(()=>[n("breadcrumb-container")]),_:1}),s(l(p),{id:"header-search"},{default:a(()=>[n("header-search")]),_:1}),s(l(p),{id:"screenfull"},{default:a(()=>[n("screenfull")]),_:1}),s(l(p),{id:"size-select"},{default:a(()=>[n("size-select")]),_:1}),s(l(p),{id:"tags-view-container"},{default:a(()=>[n("tags-view-container")]),_:1})])]))}},x=A(w,[["__scopeId","data-v-8b7d3acc"]]),B=g("",1),G=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Components/guide/index.md","filePath":"pages/Components/guide/index.md","lastUpdated":1696949003000}'),T={name:"pages/Components/guide/index.md"},Q=Object.assign(T,{setup(o){return(c,t)=>(y(),i("div",null,[s(x),B]))}});export{G as __pageData,Q as default};