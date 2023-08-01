import{ah as V,ac as B,C as te,d as E,z as D,$ as le,o as d,c as y,r as $,n as c,l as s,D as L,h as j,V as ie,j as ne,af as ae,g as h,a6 as oe,e as b,k as e,W as A,b as x,w as r,S as re,N as f,t as z,a as H,_ as ce,p as ue,m as pe}from"./chunks/framework.7d9b3b51.js";import{b as G,g as J,u as K,_ as R,i as de,E as T,B as ve,z as _e,w as me,a as fe}from"./chunks/index.73179d7b.js";import{C as q}from"./chunks/event.8e91c63d.js";const k=a=>{const u=V(a)?a:[a],t=[];return u.forEach(n=>{var _;V(n)?t.push(...k(n)):B(n)&&V(n.children)?t.push(...k(n.children)):(t.push(n),B(n)&&((_=n.component)!=null&&_.subTree)&&t.push(...k(n.component.subTree)))}),t},he=(a,u,t)=>k(a.subTree).filter(o=>{var l;return B(o)&&((l=o.type)==null?void 0:l.name)===u&&!!o.component}).map(o=>o.component.uid).map(o=>t[o]).filter(o=>!!o),ye=(a,u)=>{const t={},n=te([]);return{children:n,addChild:l=>{t[l.uid]=l,n.value=he(a,u,t)},removeChild:l=>{delete t[l],n.value=n.value.filter(p=>p.uid!==l)}}},Se=G({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),ge={[q]:(a,u)=>[a,u].every(J)},Ce=E({name:"ElSteps"}),we=E({...Ce,props:Se,emits:ge,setup(a,{emit:u}){const t=a,n=K("steps"),{children:_,addChild:o,removeChild:l}=ye(L(),"ElStep");return D(_,()=>{_.value.forEach((p,m)=>{p.setIndex(m)})}),le("ElSteps",{props:t,steps:_,addStep:o,removeStep:l}),D(()=>t.active,(p,m)=>{u(q,p,m)}),(p,m)=>(d(),y("div",{class:c([s(n).b(),s(n).m(p.simple?"simple":p.direction)])},[$(p.$slots,"default")],2))}});var be=R(we,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const xe=G({title:{type:String,default:""},icon:{type:de},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),$e=E({name:"ElStep"}),ke=E({...$e,props:xe,setup(a){const u=a,t=K("step"),n=j(-1),_=j({}),o=j(""),l=ie("ElSteps"),p=L();ne(()=>{D([()=>l.props.active,()=>l.props.processStatus,()=>l.props.finishStatus],([i])=>{se(i)},{immediate:!0})}),ae(()=>{l.removeStep(U.uid)});const m=h(()=>u.status||o.value),Q=h(()=>{const i=l.steps.value[n.value-1];return i?i.currentStatus:"wait"}),I=h(()=>l.props.alignCenter),O=h(()=>l.props.direction==="vertical"),S=h(()=>l.props.simple),N=h(()=>l.steps.value.length),M=h(()=>{var i;return((i=l.steps.value[N.value-1])==null?void 0:i.uid)===(p==null?void 0:p.uid)}),w=h(()=>S.value?"":l.props.space),X=h(()=>[t.b(),t.is(S.value?"simple":l.props.direction),t.is("flex",M.value&&!w.value&&!I.value),t.is("center",I.value&&!O.value&&!S.value)]),Y=h(()=>{const i={flexBasis:J(w.value)?`${w.value}px`:w.value?w.value:`${100/(N.value-(I.value?0:1))}%`};return O.value||M.value&&(i.maxWidth=`${100/N.value}%`),i}),Z=i=>{n.value=i},ee=i=>{const C=i==="wait",P={transitionDelay:`${C?"-":""}${150*n.value}ms`},W=i===l.props.processStatus||C?0:100;P.borderWidth=W&&!S.value?"1px":0,P[l.props.direction==="vertical"?"height":"width"]=`${W}%`,_.value=P},se=i=>{i>n.value?o.value=l.props.finishStatus:i===n.value&&Q.value!=="error"?o.value=l.props.processStatus:o.value="wait";const C=l.steps.value[n.value-1];C&&C.calcProgress(o.value)},U=oe({uid:p.uid,currentStatus:m,setIndex:Z,calcProgress:ee});return l.addStep(U),(i,C)=>(d(),y("div",{style:A(s(Y)),class:c(s(X))},[b(" icon & line "),e("div",{class:c([s(t).e("head"),s(t).is(s(m))])},[s(S)?b("v-if",!0):(d(),y("div",{key:0,class:c(s(t).e("line"))},[e("i",{class:c(s(t).e("line-inner")),style:A(_.value)},null,6)],2)),e("div",{class:c([s(t).e("icon"),s(t).is(i.icon||i.$slots.icon?"icon":"text")])},[$(i.$slots,"icon",{},()=>[i.icon?(d(),x(s(T),{key:0,class:c(s(t).e("icon-inner"))},{default:r(()=>[(d(),x(re(i.icon)))]),_:1},8,["class"])):s(m)==="success"?(d(),x(s(T),{key:1,class:c([s(t).e("icon-inner"),s(t).is("status")])},{default:r(()=>[f(s(ve))]),_:1},8,["class"])):s(m)==="error"?(d(),x(s(T),{key:2,class:c([s(t).e("icon-inner"),s(t).is("status")])},{default:r(()=>[f(s(_e))]),_:1},8,["class"])):s(S)?b("v-if",!0):(d(),y("div",{key:3,class:c(s(t).e("icon-inner"))},z(n.value+1),3))])],2)],2),b(" title & description "),e("div",{class:c(s(t).e("main"))},[e("div",{class:c([s(t).e("title"),s(t).is(s(m))])},[$(i.$slots,"title",{},()=>[H(z(i.title),1)])],2),s(S)?(d(),y("div",{key:0,class:c(s(t).e("arrow"))},null,2)):(d(),y("div",{key:1,class:c([s(t).e("description"),s(t).is(s(m))])},[$(i.$slots,"description",{},()=>[H(z(i.description),1)])],2))],2)],6))}});var F=R(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const Ee=me(be,{Step:F}),g=fe(F);const v=a=>(ue("data-v-c53fc8ce"),a=a(),pe(),a),Ie={style:{height:"fit-content","margin-top":"20px"}},Ne=v(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"农业农村环境治理项目"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2023-03-2023-07")],-1)),Pe=v(()=>e("ul",null,[e("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),e("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),e("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),e("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Ve=v(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"驾驶舱配置系统"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2023-01-2023-05")],-1)),je=v(()=>e("ul",null,[e("li",null,"主要依托于 AirCity（DTS） CIM平台，二次开发实现 "),e("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),e("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),e("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),e("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),ze=v(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"海水淡化项目"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2022-12-2023-03")],-1)),Te=v(()=>e("ul",null,[e("li",null,"以山东小钦岛，鲁北碧水源污水处理厂为背景，实现海水淡化大屏项目，海水淡化后台管理系统"),e("li",null,"大屏项目 使用echarts 展示海水 产水量 净水等多种指标 展示实时监测数据，轮播展示处理厂风貌，实时的video视频采集"),e("li",null,"后台管理系统 主要实现了对数据（污水处理指标数据、人员信息、紧急联系人、值班信息、人员所属）的维护 实现基本的crud 使用echarts 展现数据"),e("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Be=v(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"燃气考试系统"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-11")],-1)),De=v(()=>e("ul",null,[e("li",null,"主要采用Vue框架，axios，vue-router，vuex，elementUI；uniapp（作为移动端框架）"),e("li",null,"以天津滨海新区某某燃气公司作为大环境，实现管理员，内外勤员工日常考试，安全知识学习，技能评比，投票与反馈等主要功能"),e("li",null,"设计思路 角色权限 根据用户角色赋予差异化 功能，管理员可以进行题库 人员的配置；用户根据配置 题目在约定时间范围进行考试，投票功能近乎相似不做赘述"),e("li",null,"反馈功能主要是为了更好的 提高用户体验，有利于用户对软件做出反馈与日常需求的可能性，提供基本信息检索功能，使得项目朝着更符合用户思维的方向上行走 "),e("li",null,"同时 打造来了一套更便捷的移动端系统，主要采用 uniapp 与 vantUI 实现功能与pc端基本一致 不做赘述")],-1)),He=v(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"智慧电力可视化大屏（数据可视化项目）"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-06")],-1)),Oe=v(()=>e("ul",null,[e("li",null,"以四川省为背景，围绕电厂负荷监测、调节策略、执行考核、与效果分析三个层级，部署一套自主调节、快速响应、科学研判的多功能性智能电力综合管控平台。"),e("li",null,"页面数据呈现主要由 表格 ，柱形图，折线图，雷达图、响应式地图以及动画效果构成； "),e("li",null,"技术依托基于HTML5的2D、3D渲染引擎，为可视化提供了丰富的展示效果。")],-1)),Me=v(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"云问答（基于区块链问答系统）"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2021-12-2022-03")],-1)),Ue=v(()=>e("ul",null,[e("li",null,"以信息工程学院作为大环境，实现学生老师等用户注册登录，登录成功后即可提出问题，回复问题，为了解决学生的切实问题的平台，减轻学生的压力。"),e("li",null,"整体设计，包含前台，与后台管理，前台主要实现登录、注册、搜索、个人中心、提问、回复问题、每日文案、推广、公告等诸多业务功能；后台主要实现用户、标签、问答、评论、文章、推广管理等，数据的增删改查功能； "),e("li",null,"主要采用Vue框架，axios，vue-router，vuex，bulma，elementUI；")],-1)),We={__name:"HistoryTime",setup(a){return(u,t)=>(d(),y("main",Ie,[f(s(Ee),{direction:"vertical",active:14},{default:r(()=>[f(s(g),null,{title:r(()=>[Ne]),description:r(()=>[Pe]),_:1}),f(s(g),null,{title:r(()=>[Ve]),description:r(()=>[je]),_:1}),f(s(g),null,{title:r(()=>[ze]),description:r(()=>[Te]),_:1}),f(s(g),null,{title:r(()=>[Be]),description:r(()=>[De]),_:1}),f(s(g),null,{title:r(()=>[He]),description:r(()=>[Oe]),_:1}),f(s(g),null,{title:r(()=>[Me]),description:r(()=>[Ue]),_:1}),f(s(g),{title:"..."})]),_:1})]))}},Ae=ce(We,[["__scopeId","data-v-c53fc8ce"]]),Le=e("h2",{id:"more-docs",tabindex:"-1"},[H("More docs "),e("a",{class:"header-anchor",href:"#more-docs","aria-label":'Permalink to "More docs"'},"​")],-1),qe=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Other/HistoricalProjectProgress.md","filePath":"pages/Other/HistoricalProjectProgress.md","lastUpdated":1690873091000}'),Ge={name:"pages/Other/HistoricalProjectProgress.md"},Fe=Object.assign(Ge,{setup(a){return(u,t)=>(d(),y("div",null,[f(Ae),Le]))}});export{qe as __pageData,Fe as default};
