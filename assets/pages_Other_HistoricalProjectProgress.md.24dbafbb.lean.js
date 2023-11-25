import{s as Z,aw as ee,h as k,w as z,$ as se,j as p,k as y,l as $,q as c,u as s,g as U,r as N,V as te,o as le,ag as ie,e as f,a6 as ne,y as x,C as e,W as M,v as b,x as o,S as ae,N as _,p as V,m as T,_ as oe,D as re,E as ce}from"./chunks/framework.32e73e40.js";import{b as W,u as A,_ as L,w as ue,a as pe}from"./chunks/plugin-vue_export-helper.52eedff0.js";import{C as q}from"./chunks/event.9519ab40.js";import{i as G}from"./chunks/types.03449d87.js";import{f as de}from"./chunks/vnode.a2052fa5.js";import{E as j,e as ve,d as me}from"./chunks/index.d9974c70.js";import{i as _e}from"./chunks/icon.51024f73.js";const fe=(r,v,t)=>de(r.subTree).filter(n=>{var l;return ee(n)&&((l=n.type)==null?void 0:l.name)===v&&!!n.component}).map(n=>n.component.uid).map(n=>t[n]).filter(n=>!!n),he=(r,v)=>{const t={},a=Z([]);return{children:a,addChild:l=>{t[l.uid]=l,a.value=fe(r,v,t)},removeChild:l=>{delete t[l],a.value=a.value.filter(u=>u.uid!==l)}}},ye=W({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Se={[q]:(r,v)=>[r,v].every(G)},ge=k({name:"ElSteps"}),Ce=k({...ge,props:ye,emits:Se,setup(r,{emit:v}){const t=r,a=A("steps"),{children:h,addChild:n,removeChild:l}=he(U(),"ElStep");return z(h,()=>{h.value.forEach((u,m)=>{u.setIndex(m)})}),se("ElSteps",{props:t,steps:h,addStep:n,removeStep:l}),z(()=>t.active,(u,m)=>{v(q,u,m)}),(u,m)=>(p(),y("div",{class:c([s(a).b(),s(a).m(u.simple?"simple":u.direction)])},[$(u.$slots,"default")],2))}});var we=L(Ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const xe=W({title:{type:String,default:""},icon:{type:_e},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),be=k({name:"ElStep"}),$e=k({...be,props:xe,setup(r){const v=r,t=A("step"),a=N(-1),h=N({}),n=N(""),l=te("ElSteps"),u=U();le(()=>{z([()=>l.props.active,()=>l.props.processStatus,()=>l.props.finishStatus],([i])=>{Y(i)},{immediate:!0})}),ie(()=>{l.removeStep(H.uid)});const m=f(()=>v.status||n.value),K=f(()=>{const i=l.steps.value[a.value-1];return i?i.currentStatus:"wait"}),E=f(()=>l.props.alignCenter),B=f(()=>l.props.direction==="vertical"),S=f(()=>l.props.simple),I=f(()=>l.steps.value.length),D=f(()=>{var i;return((i=l.steps.value[I.value-1])==null?void 0:i.uid)===(u==null?void 0:u.uid)}),w=f(()=>S.value?"":l.props.space),R=f(()=>[t.b(),t.is(S.value?"simple":l.props.direction),t.is("flex",D.value&&!w.value&&!E.value),t.is("center",E.value&&!B.value&&!S.value)]),F=f(()=>{const i={flexBasis:G(w.value)?`${w.value}px`:w.value?w.value:`${100/(I.value-(E.value?0:1))}%`};return B.value||D.value&&(i.maxWidth=`${100/I.value}%`),i}),Q=i=>{a.value=i},X=i=>{const C=i==="wait",P={transitionDelay:`${C?"-":""}${150*a.value}ms`},O=i===l.props.processStatus||C?0:100;P.borderWidth=O&&!S.value?"1px":0,P[l.props.direction==="vertical"?"height":"width"]=`${O}%`,h.value=P},Y=i=>{i>a.value?n.value=l.props.finishStatus:i===a.value&&K.value!=="error"?n.value=l.props.processStatus:n.value="wait";const C=l.steps.value[a.value-1];C&&C.calcProgress(n.value)},H=ne({uid:u.uid,currentStatus:m,setIndex:Q,calcProgress:X});return l.addStep(H),(i,C)=>(p(),y("div",{style:M(s(F)),class:c(s(R))},[x(" icon & line "),e("div",{class:c([s(t).e("head"),s(t).is(s(m))])},[s(S)?x("v-if",!0):(p(),y("div",{key:0,class:c(s(t).e("line"))},[e("i",{class:c(s(t).e("line-inner")),style:M(h.value)},null,6)],2)),e("div",{class:c([s(t).e("icon"),s(t).is(i.icon||i.$slots.icon?"icon":"text")])},[$(i.$slots,"icon",{},()=>[i.icon?(p(),b(s(j),{key:0,class:c(s(t).e("icon-inner"))},{default:o(()=>[(p(),b(ae(i.icon)))]),_:1},8,["class"])):s(m)==="success"?(p(),b(s(j),{key:1,class:c([s(t).e("icon-inner"),s(t).is("status")])},{default:o(()=>[_(s(ve))]),_:1},8,["class"])):s(m)==="error"?(p(),b(s(j),{key:2,class:c([s(t).e("icon-inner"),s(t).is("status")])},{default:o(()=>[_(s(me))]),_:1},8,["class"])):s(S)?x("v-if",!0):(p(),y("div",{key:3,class:c(s(t).e("icon-inner"))},V(a.value+1),3))])],2)],2),x(" title & description "),e("div",{class:c(s(t).e("main"))},[e("div",{class:c([s(t).e("title"),s(t).is(s(m))])},[$(i.$slots,"title",{},()=>[T(V(i.title),1)])],2),s(S)?(p(),y("div",{key:0,class:c(s(t).e("arrow"))},null,2)):(p(),y("div",{key:1,class:c([s(t).e("description"),s(t).is(s(m))])},[$(i.$slots,"description",{},()=>[T(V(i.description),1)])],2))],2)],6))}});var J=L($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const ke=ue(we,{Step:J}),g=pe(J);const d=r=>(re("data-v-c53fc8ce"),r=r(),ce(),r),Ee={style:{height:"fit-content","margin-top":"20px"}},Ie=d(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"农业农村环境治理项目"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2023-03-2023-07")],-1)),Pe=d(()=>e("ul",null,[e("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),e("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),e("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),e("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Ne=d(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"驾驶舱配置系统"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2023-01-2023-05")],-1)),Ve=d(()=>e("ul",null,[e("li",null,"主要依托于 AirCity（DTS） CIM平台，二次开发实现 "),e("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),e("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),e("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),e("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),je=d(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"海水淡化项目"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2022-12-2023-03")],-1)),ze=d(()=>e("ul",null,[e("li",null,"以山东小钦岛，鲁北碧水源污水处理厂为背景，实现海水淡化大屏项目，海水淡化后台管理系统"),e("li",null,"大屏项目 使用echarts 展示海水 产水量 净水等多种指标 展示实时监测数据，轮播展示处理厂风貌，实时的video视频采集"),e("li",null,"后台管理系统 主要实现了对数据（污水处理指标数据、人员信息、紧急联系人、值班信息、人员所属）的维护 实现基本的crud 使用echarts 展现数据"),e("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Te=d(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"燃气考试系统"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-11")],-1)),Be=d(()=>e("ul",null,[e("li",null,"主要采用Vue框架，axios，vue-router，vuex，elementUI；uniapp（作为移动端框架）"),e("li",null,"以天津滨海新区某某燃气公司作为大环境，实现管理员，内外勤员工日常考试，安全知识学习，技能评比，投票与反馈等主要功能"),e("li",null,"设计思路 角色权限 根据用户角色赋予差异化 功能，管理员可以进行题库 人员的配置；用户根据配置 题目在约定时间范围进行考试，投票功能近乎相似不做赘述"),e("li",null,"反馈功能主要是为了更好的 提高用户体验，有利于用户对软件做出反馈与日常需求的可能性，提供基本信息检索功能，使得项目朝着更符合用户思维的方向上行走 "),e("li",null,"同时 打造来了一套更便捷的移动端系统，主要采用 uniapp 与 vantUI 实现功能与pc端基本一致 不做赘述")],-1)),De=d(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"智慧电力可视化大屏（数据可视化项目）"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-06")],-1)),He=d(()=>e("ul",null,[e("li",null,"以四川省为背景，围绕电厂负荷监测、调节策略、执行考核、与效果分析三个层级，部署一套自主调节、快速响应、科学研判的多功能性智能电力综合管控平台。"),e("li",null,"页面数据呈现主要由 表格 ，柱形图，折线图，雷达图、响应式地图以及动画效果构成； "),e("li",null,"技术依托基于HTML5的2D、3D渲染引擎，为可视化提供了丰富的展示效果。")],-1)),Oe=d(()=>e("div",{style:{display:"flex","justify-content":"space-between"}},[e("div",{class:"title"},"云问答（基于区块链问答系统）"),e("div",{class:"create_time",style:{"font-size":".8em"}},"2021-12-2022-03")],-1)),Me=d(()=>e("ul",null,[e("li",null,"以信息工程学院作为大环境，实现学生老师等用户注册登录，登录成功后即可提出问题，回复问题，为了解决学生的切实问题的平台，减轻学生的压力。"),e("li",null,"整体设计，包含前台，与后台管理，前台主要实现登录、注册、搜索、个人中心、提问、回复问题、每日文案、推广、公告等诸多业务功能；后台主要实现用户、标签、问答、评论、文章、推广管理等，数据的增删改查功能； "),e("li",null,"主要采用Vue框架，axios，vue-router，vuex，bulma，elementUI；")],-1)),Ue={__name:"HistoryTime",setup(r){return(v,t)=>(p(),y("main",Ee,[_(s(ke),{direction:"vertical",active:14},{default:o(()=>[_(s(g),null,{title:o(()=>[Ie]),description:o(()=>[Pe]),_:1}),_(s(g),null,{title:o(()=>[Ne]),description:o(()=>[Ve]),_:1}),_(s(g),null,{title:o(()=>[je]),description:o(()=>[ze]),_:1}),_(s(g),null,{title:o(()=>[Te]),description:o(()=>[Be]),_:1}),_(s(g),null,{title:o(()=>[De]),description:o(()=>[He]),_:1}),_(s(g),null,{title:o(()=>[Oe]),description:o(()=>[Me]),_:1}),_(s(g),{title:"..."})]),_:1})]))}},We=oe(Ue,[["__scopeId","data-v-c53fc8ce"]]),Ae=e("h2",{id:"more-docs",tabindex:"-1"},[T("More docs "),e("a",{class:"header-anchor",href:"#more-docs","aria-label":'Permalink to "More docs"'},"​")],-1),Xe=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Other/HistoricalProjectProgress.md","filePath":"pages/Other/HistoricalProjectProgress.md","lastUpdated":1700922392000}'),Le={name:"pages/Other/HistoricalProjectProgress.md"},Ye=Object.assign(Le,{setup(r){return(v,t)=>(p(),y("div",null,[_(We),Ae]))}});export{Xe as __pageData,Ye as default};
