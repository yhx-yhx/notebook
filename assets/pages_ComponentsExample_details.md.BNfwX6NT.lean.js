import{_ as d,k as g,o as n,c as l,m as s,t,r,aY as y,J as p,w as E,a as o,a5 as c}from"./chunks/framework.Cyz3vTHn.js";const F={class:"details_wrap"},u=["open"],b=["data-showArrow"],m={key:0},C={class:"details_content"},A={key:0},B="/images/poster.jpg",D={__name:"details",props:["name","content","color","bgcColor","open","showArrow","arrowIcon"],setup(k){y(a=>({"6f5c344a":i.bgcColor,"2920eae6":i.color}));const i=k,e=g(()=>i.showArrow==null||i.showArrow===!0?i.arrowIcon==null?`url(${B})`:i.arrowIcon:"");return(a,S)=>(n(),l("div",F,[s("details",{open:a.$props.open===""||a.$props.open===!0},[s("summary",{"data-showArrow":e.value},[a.$props.name?(n(),l("span",m,t(i.name)+t(a.$props.open),1)):r(a.$slots,"name",{key:1},void 0,!0)],8,b),s("div",C,[a.$props.content?(n(),l("div",A,t(i.content),1)):r(a.$slots,"content",{key:1},void 0,!0)])],8,u)]))}},h=d(D,[["__scopeId","data-v-d962475c"]]),_=s("h1",{id:"details-样例",tabindex:"-1"},[o("details 样例 "),s("a",{class:"header-anchor",href:"#details-样例","aria-label":'Permalink to "details 样例"'},"​")],-1),w=s("br",null,null,-1),v=s("ul",null,[s("li",null,"自定义属性")],-1),q=s("ul",null,[s("li",null,"通过插槽来实现")],-1),f=s("span",null,"插槽来实现name",-1),x=s("div",null,"插槽来实现详情内容",-1),$=c("",4),V=JSON.parse('{"title":"details 样例","description":"","frontmatter":{},"headers":[],"relativePath":"pages/ComponentsExample/details.md","filePath":"pages/ComponentsExample/details.md","lastUpdated":1709735719000}'),I={name:"pages/ComponentsExample/details.md"},N=Object.assign(I,{setup(k){return(i,e)=>(n(),l("div",null,[_,w,v,p(h,{name:"自定义属性",content:"我是详情内容",color:"#fff",bgcColor:"rgb(137, 85, 186)"}),p(h,{name:"自定义属性",content:"我是详情内容",color:"#fff",bgcColor:"rgb(137, 85, 186)",showArrow:!1}),q,p(h,{open:""},{name:E(()=>[f]),content:E(()=>[x]),_:1}),$]))}});export{V as __pageData,N as default};