import{H as Se,aT as Te,d as j,aR as be,h as x,b0 as Oe,k as y,y as J,U as Ce,l as _e,o as m,b as M,J as p,w as f,m as t,n as v,p as e,Q as le,a2 as Ve,e as E,c as S,F as pe,L as xe,G as Be,aj as Re,aG as Ae,r as P,T as Pe,aL as De,aF as Me,t as de,N as je,au as He,$ as Ye,aw as Ie,O as Fe,aD as Xe,ao as We,a as ge,a1 as Ke,_ as Ue,q as Ge,s as Ze}from"./framework.Cyz3vTHn.js";import{a as q}from"./index.ClFtIAma.js";import{x as qe,y as Je,E as V,d as Ee,A as Qe,o as et,B as tt,z as st,C as lt,D as nt,e as at}from"./index.4hICx8yr.js";import{b as fe,d as he,u as ve,_ as me,w as we,a as it}from"./plugin-vue_export-helper.Fsmj3gze.js";import{m as $e}from"./typescript.Bp3YSIOJ.js";import{b as Z,i as ne,l as ot,o as rt}from"./types.DTMeA5EJ.js";import{u as ze}from"./index.DDvycNo5.js";import{u as ut}from"./index.C4Hremo0.js";import{E as G}from"./aria.BUADUvnR.js";import{k as ct}from"./objects.udGwCpTy.js";import{d as dt}from"./debounce.C2KADLPb.js";import{i as pt}from"./get.nfDng5OV.js";import{u as ft,E as vt}from"./index.CszaQUJT.js";import{a as mt}from"./scroll.CpkHC_n9.js";import{E as yt}from"./index.CZcDM0ok.js";import{E as gt}from"./index.QF29vx0d.js";import{E as ke}from"./index.0TklCpjJ.js";import{C as Le}from"./event.BE20p1dL.js";import{f as ht}from"./vnode.CBLYlbSD.js";import{i as _t}from"./icon.BN6CzzPm.js";const wt=(r,u)=>{if(!Z||!r||!u)return!1;const s=r.getBoundingClientRect();let n;return u instanceof Element?n=u.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},s.top<n.bottom&&s.bottom>n.top&&s.right>n.left&&s.left<n.right};var bt="Expected a function";function ye(r,u,s){var n=!0,g=!0;if(typeof r!="function")throw new TypeError(bt);return pt(s)&&(n="leading"in s?!!s.leading:n,g="trailing"in s?!!s.trailing:g),dt(r,u,{leading:n,maxWait:u,trailing:g})}const kt=(r,u,s)=>ht(r.subTree).filter(c=>{var l;return Te(c)&&((l=c.type)==null?void 0:l.name)===u&&!!c.component}).map(c=>c.component.uid).map(c=>s[c]).filter(c=>!!c),St=(r,u)=>{const s={},n=Se([]);return{children:n,addChild:l=>{s[l.uid]=l,n.value=kt(r,u,s)},removeChild:l=>{delete s[l],n.value=n.value.filter(b=>b.uid!==l)}}},Ct=fe({urlList:{type:he(Array),default:()=>$e([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),xt={close:()=>!0,switch:r=>ne(r)},It=["src"],Et=j({name:"ElImageViewer"}),$t=j({...Et,props:Ct,emits:xt,setup(r,{expose:u,emit:s}){const n=r,g={CONTAIN:{name:"contain",icon:be(qe)},ORIGINAL:{name:"original",icon:be(Je)}},{t:c}=ze(),l=ve("image-viewer"),{nextZIndex:b}=ut(),h=x(),B=x([]),$=Oe(),z=x(!0),_=x(n.initialIndex),C=Se(g.CONTAIN),k=x({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),T=y(()=>{const{urlList:a}=n;return a.length<=1}),D=y(()=>_.value===0),X=y(()=>_.value===n.urlList.length-1),Q=y(()=>n.urlList[_.value]),ee=y(()=>[l.e("btn"),l.e("prev"),l.is("disabled",!n.infinite&&D.value)]),H=y(()=>[l.e("btn"),l.e("next"),l.is("disabled",!n.infinite&&X.value)]),W=y(()=>{const{scale:a,deg:d,offsetX:w,offsetY:L,enableTransition:R}=k.value;let O=w/a,A=L/a;switch(d%360){case 90:case-270:[O,A]=[A,-O];break;case 180:case-180:[O,A]=[-O,-A];break;case 270:case-90:[O,A]=[-A,O];break}const U={transform:`scale(${a}) rotate(${d}deg) translate(${O}px, ${A}px)`,transition:R?"transform .3s":""};return C.value.name===g.CONTAIN.name&&(U.maxWidth=U.maxHeight="100%"),U}),o=y(()=>ne(n.zIndex)?n.zIndex:b());function I(){K(),s("close")}function Y(){const a=ye(w=>{switch(w.code){case G.esc:n.closeOnPressEscape&&I();break;case G.space:re();break;case G.left:ue();break;case G.up:i("zoomIn");break;case G.right:ce();break;case G.down:i("zoomOut");break}}),d=ye(w=>{const L=w.deltaY||w.deltaX;i(L<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});$.run(()=>{q(document,"keydown",a),q(document,"wheel",d)})}function K(){$.stop()}function ae(){z.value=!1}function ie(a){z.value=!1,a.target.alt=c("el.image.error")}function oe(a){if(z.value||a.button!==0||!h.value)return;k.value.enableTransition=!1;const{offsetX:d,offsetY:w}=k.value,L=a.pageX,R=a.pageY,O=ye(U=>{k.value={...k.value,offsetX:d+U.pageX-L,offsetY:w+U.pageY-R}}),A=q(document,"mousemove",O);q(document,"mouseup",()=>{A()}),a.preventDefault()}function te(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function re(){if(z.value)return;const a=ct(g),d=Object.values(g),w=C.value.name,R=(d.findIndex(O=>O.name===w)+1)%a.length;C.value=g[a[R]],te()}function se(a){const d=n.urlList.length;_.value=(a+d)%d}function ue(){D.value&&!n.infinite||se(_.value-1)}function ce(){X.value&&!n.infinite||se(_.value+1)}function i(a,d={}){if(z.value)return;const{zoomRate:w,rotateDeg:L,enableTransition:R}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...d};switch(a){case"zoomOut":k.value.scale>.2&&(k.value.scale=Number.parseFloat((k.value.scale/w).toFixed(3)));break;case"zoomIn":k.value.scale<7&&(k.value.scale=Number.parseFloat((k.value.scale*w).toFixed(3)));break;case"clockwise":k.value.deg+=L;break;case"anticlockwise":k.value.deg-=L;break}k.value.enableTransition=R}return J(Q,()=>{Ce(()=>{const a=B.value[0];a!=null&&a.complete||(z.value=!0)})}),J(_,a=>{te(),s("switch",a)}),_e(()=>{var a,d;Y(),(d=(a=h.value)==null?void 0:a.focus)==null||d.call(a)}),u({setActiveItem:se}),(a,d)=>(m(),M(De,{to:"body",disabled:!a.teleported},[p(Pe,{name:"viewer-fade",appear:""},{default:f(()=>[t("div",{ref_key:"wrapper",ref:h,tabindex:-1,class:v(e(l).e("wrapper")),style:le({zIndex:e(o)})},[t("div",{class:v(e(l).e("mask")),onClick:d[0]||(d[0]=Ve(w=>a.hideOnClickModal&&I(),["self"]))},null,2),E(" CLOSE "),t("span",{class:v([e(l).e("btn"),e(l).e("close")]),onClick:I},[p(e(V),null,{default:f(()=>[p(e(Ee))]),_:1})],2),E(" ARROW "),e(T)?E("v-if",!0):(m(),S(pe,{key:0},[t("span",{class:v(e(ee)),onClick:ue},[p(e(V),null,{default:f(()=>[p(e(Qe))]),_:1})],2),t("span",{class:v(e(H)),onClick:ce},[p(e(V),null,{default:f(()=>[p(e(et))]),_:1})],2)],64)),E(" ACTIONS "),t("div",{class:v([e(l).e("btn"),e(l).e("actions")])},[t("div",{class:v(e(l).e("actions__inner"))},[p(e(V),{onClick:d[1]||(d[1]=w=>i("zoomOut"))},{default:f(()=>[p(e(tt))]),_:1}),p(e(V),{onClick:d[2]||(d[2]=w=>i("zoomIn"))},{default:f(()=>[p(e(st))]),_:1}),t("i",{class:v(e(l).e("actions__divider"))},null,2),p(e(V),{onClick:re},{default:f(()=>[(m(),M(xe(e(C).icon)))]),_:1}),t("i",{class:v(e(l).e("actions__divider"))},null,2),p(e(V),{onClick:d[3]||(d[3]=w=>i("anticlockwise"))},{default:f(()=>[p(e(lt))]),_:1}),p(e(V),{onClick:d[4]||(d[4]=w=>i("clockwise"))},{default:f(()=>[p(e(nt))]),_:1})],2)],2),E(" CANVAS "),t("div",{class:v(e(l).e("canvas"))},[(m(!0),S(pe,null,Be(a.urlList,(w,L)=>Re((m(),S("img",{ref_for:!0,ref:R=>B.value[L]=R,key:w,src:w,style:le(e(W)),class:v(e(l).e("img")),onLoad:ae,onError:ie,onMousedown:oe},null,46,It)),[[Ae,L===_.value]])),128))],2),P(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var zt=me($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Lt=we(zt),Nt=fe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:he([String,Object])},previewSrcList:{type:he(Array),default:()=>$e([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Tt={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>ne(r),close:()=>!0,show:()=>!0},Ot=["src","loading"],Vt={key:0},Bt=j({name:"ElImage",inheritAttrs:!1}),Rt=j({...Bt,props:Nt,emits:Tt,setup(r,{emit:u}){const s=r;let n="";const{t:g}=ze(),c=ve("image"),l=Me(),b=ft(),h=x(),B=x(!1),$=x(!0),z=x(!1),_=x(),C=x(),k=Z&&"loading"in HTMLImageElement.prototype;let T,D;const X=y(()=>[c.e("inner"),H.value&&c.e("preview"),$.value&&c.is("loading")]),Q=y(()=>l.style),ee=y(()=>{const{fit:i}=s;return Z&&i?{objectFit:i}:{}}),H=y(()=>{const{previewSrcList:i}=s;return Array.isArray(i)&&i.length>0}),W=y(()=>{const{previewSrcList:i,initialIndex:a}=s;let d=a;return a>i.length-1&&(d=0),d}),o=y(()=>s.loading==="eager"?!1:!k&&s.loading==="lazy"||s.lazy),I=()=>{Z&&($.value=!0,B.value=!1,h.value=s.src)};function Y(i){$.value=!1,B.value=!1,u("load",i)}function K(i){$.value=!1,B.value=!0,u("error",i)}function ae(){wt(_.value,C.value)&&(I(),te())}const ie=rt(ae,200,!0);async function oe(){var i;if(!Z)return;await Ce();const{scrollContainer:a}=s;ot(a)?C.value=a:He(a)&&a!==""?C.value=(i=document.querySelector(a))!=null?i:void 0:_.value&&(C.value=mt(_.value)),C.value&&(T=q(C,"scroll",ie),setTimeout(()=>ae(),100))}function te(){!Z||!C.value||!ie||(T==null||T(),C.value=void 0)}function re(i){if(i.ctrlKey){if(i.deltaY<0)return i.preventDefault(),!1;if(i.deltaY>0)return i.preventDefault(),!1}}function se(){H.value&&(D=q("wheel",re,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",z.value=!0,u("show"))}function ue(){D==null||D(),document.body.style.overflow=n,z.value=!1,u("close")}function ce(i){u("switch",i)}return J(()=>s.src,()=>{o.value?($.value=!0,B.value=!1,te(),oe()):I()}),_e(()=>{o.value?oe():I()}),(i,a)=>(m(),S("div",{ref_key:"container",ref:_,class:v([e(c).b(),i.$attrs.class]),style:le(e(Q))},[B.value?P(i.$slots,"error",{key:0},()=>[t("div",{class:v(e(c).e("error"))},de(e(g)("el.image.error")),3)]):(m(),S(pe,{key:1},[h.value!==void 0?(m(),S("img",je({key:0},e(b),{src:h.value,loading:i.loading,style:e(ee),class:e(X),onClick:se,onLoad:Y,onError:K}),null,16,Ot)):E("v-if",!0),$.value?(m(),S("div",{key:1,class:v(e(c).e("wrapper"))},[P(i.$slots,"placeholder",{},()=>[t("div",{class:v(e(c).e("placeholder"))},null,2)])],2)):E("v-if",!0)],64)),e(H)?(m(),S(pe,{key:2},[z.value?(m(),M(e(Lt),{key:0,"z-index":i.zIndex,"initial-index":e(W),infinite:i.infinite,"zoom-rate":i.zoomRate,"url-list":i.previewSrcList,"hide-on-click-modal":i.hideOnClickModal,teleported:i.previewTeleported,"close-on-press-escape":i.closeOnPressEscape,onClose:ue,onSwitch:ce},{default:f(()=>[i.$slots.viewer?(m(),S("div",Vt,[P(i.$slots,"viewer")])):E("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):E("v-if",!0)],64)):E("v-if",!0)],6))}});var At=me(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Pt=we(At),Dt=fe({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Mt={[Le]:(r,u)=>[r,u].every(ne)},jt=j({name:"ElSteps"}),Ht=j({...jt,props:Dt,emits:Mt,setup(r,{emit:u}){const s=r,n=ve("steps"),{children:g,addChild:c,removeChild:l}=St(Ie(),"ElStep");return J(g,()=>{g.value.forEach((b,h)=>{b.setIndex(h)})}),Ye("ElSteps",{props:s,steps:g,addStep:c,removeStep:l}),J(()=>s.active,(b,h)=>{u(Le,b,h)}),(b,h)=>(m(),S("div",{class:v([e(n).b(),e(n).m(b.simple?"simple":b.direction)])},[P(b.$slots,"default")],2))}});var Yt=me(Ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const Ft=fe({title:{type:String,default:""},icon:{type:_t},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Xt=j({name:"ElStep"}),Wt=j({...Xt,props:Ft,setup(r){const u=r,s=ve("step"),n=x(-1),g=x({}),c=x(""),l=Fe("ElSteps"),b=Ie();_e(()=>{J([()=>l.props.active,()=>l.props.processStatus,()=>l.props.finishStatus],([o])=>{H(o)},{immediate:!0})}),Xe(()=>{l.removeStep(W.uid)});const h=y(()=>u.status||c.value),B=y(()=>{const o=l.steps.value[n.value-1];return o?o.currentStatus:"wait"}),$=y(()=>l.props.alignCenter),z=y(()=>l.props.direction==="vertical"),_=y(()=>l.props.simple),C=y(()=>l.steps.value.length),k=y(()=>{var o;return((o=l.steps.value[C.value-1])==null?void 0:o.uid)===(b==null?void 0:b.uid)}),T=y(()=>_.value?"":l.props.space),D=y(()=>[s.b(),s.is(_.value?"simple":l.props.direction),s.is("flex",k.value&&!T.value&&!$.value),s.is("center",$.value&&!z.value&&!_.value)]),X=y(()=>{const o={flexBasis:ne(T.value)?`${T.value}px`:T.value?T.value:`${100/(C.value-($.value?0:1))}%`};return z.value||k.value&&(o.maxWidth=`${100/C.value}%`),o}),Q=o=>{n.value=o},ee=o=>{const I=o==="wait",Y={transitionDelay:`${I?"-":""}${150*n.value}ms`},K=o===l.props.processStatus||I?0:100;Y.borderWidth=K&&!_.value?"1px":0,Y[l.props.direction==="vertical"?"height":"width"]=`${K}%`,g.value=Y},H=o=>{o>n.value?c.value=l.props.finishStatus:o===n.value&&B.value!=="error"?c.value=l.props.processStatus:c.value="wait";const I=l.steps.value[n.value-1];I&&I.calcProgress(c.value)},W=We({uid:b.uid,currentStatus:h,setIndex:Q,calcProgress:ee});return l.addStep(W),(o,I)=>(m(),S("div",{style:le(e(X)),class:v(e(D))},[E(" icon & line "),t("div",{class:v([e(s).e("head"),e(s).is(e(h))])},[e(_)?E("v-if",!0):(m(),S("div",{key:0,class:v(e(s).e("line"))},[t("i",{class:v(e(s).e("line-inner")),style:le(g.value)},null,6)],2)),t("div",{class:v([e(s).e("icon"),e(s).is(o.icon||o.$slots.icon?"icon":"text")])},[P(o.$slots,"icon",{},()=>[o.icon?(m(),M(e(V),{key:0,class:v(e(s).e("icon-inner"))},{default:f(()=>[(m(),M(xe(o.icon)))]),_:1},8,["class"])):e(h)==="success"?(m(),M(e(V),{key:1,class:v([e(s).e("icon-inner"),e(s).is("status")])},{default:f(()=>[p(e(at))]),_:1},8,["class"])):e(h)==="error"?(m(),M(e(V),{key:2,class:v([e(s).e("icon-inner"),e(s).is("status")])},{default:f(()=>[p(e(Ee))]),_:1},8,["class"])):e(_)?E("v-if",!0):(m(),S("div",{key:3,class:v(e(s).e("icon-inner"))},de(n.value+1),3))])],2)],2),E(" title & description "),t("div",{class:v(e(s).e("main"))},[t("div",{class:v([e(s).e("title"),e(s).is(e(h))])},[P(o.$slots,"title",{},()=>[ge(de(o.title),1)])],2),e(_)?(m(),S("div",{key:0,class:v(e(s).e("arrow"))},null,2)):(m(),S("div",{key:1,class:v([e(s).e("description"),e(s).is(e(h))])},[P(o.$slots,"description",{},()=>[ge(de(o.description),1)])],2))],2)],6))}});var Ne=me(Wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const Kt=we(Yt,{Step:Ne}),F=it(Ne),Ut={class:"empty-container"},Gt={key:0},Zt={key:1},qt=t("div",{style:{display:"flex",padding:"10px 0"}},[t("h3",{style:{margin:"auto"}},"扫描关注获取密码")],-1),Jt=t("div",{style:{display:"flex",padding:"10px 0"}},[t("p",{style:{margin:"auto"}},"请输入密码以继续")],-1),Qt={style:{display:"flex",padding:"10px 0"}},es={style:{"text-align":"center",padding:"10px 0"}},ts={__name:"base",setup(r){const u=x(null),s=x(!1);function n(){window.localStorage.setItem("password",u.value),console.log("密码已设置")}function g(){u.value!="1024"?(s.value=!1,ke.error("密码错误")):(s.value=!0,n(),ke.success("密码正确"))}function c(){s.value&&(s.value=!1)}return(l,b)=>(m(),S("div",Ut,[s.value?(m(),S("div",Gt,[P(l.$slots,"default")])):(m(),S("div",Zt,[p(e(gt),{type:"always",style:{margin:"10px 0"}},{default:f(()=>[qt,Jt,t("div",Qt,[p(e(Pt),{style:{width:"300px",height:"300px","text-align":"center",margin:"auto"},src:"/images/二维码.jpg"})]),t("div",es,[p(e(vt),{style:{display:"inline","padding-right":"10px"},type:"text",modelValue:u.value,"onUpdate:modelValue":b[0]||(b[0]=h=>u.value=h),onChange:c,onKeydown:Ke(g,["enter"])},null,8,["modelValue"]),p(e(yt),{style:{display:"inline-block"},onClick:g},{default:f(()=>[ge("提交")]),_:1})])]),_:1})]))]))}},N=r=>(Ge("data-v-325c9ddd"),r=r(),Ze(),r),ss={style:{height:"fit-content","margin-top":"20px"}},ls=N(()=>t("div",{style:{display:"flex","justify-content":"space-between"}},[t("div",{class:"title"},"农业农村环境治理项目"),t("div",{class:"create_time",style:{"font-size":".8em"}},"2023-03-2023-07")],-1)),ns=N(()=>t("ul",null,[t("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),t("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),t("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),t("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),as=N(()=>t("div",{style:{display:"flex","justify-content":"space-between"}},[t("div",{class:"title"},"驾驶舱配置系统"),t("div",{class:"create_time",style:{"font-size":".8em"}},"2023-01-2023-05")],-1)),is=N(()=>t("ul",null,[t("li",null,"主要依托于 AirCity（DTS） CIM平台，二次开发实现 "),t("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),t("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),t("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),t("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),os=N(()=>t("div",{style:{display:"flex","justify-content":"space-between"}},[t("div",{class:"title"},"海水淡化项目"),t("div",{class:"create_time",style:{"font-size":".8em"}},"2022-12-2023-03")],-1)),rs=N(()=>t("ul",null,[t("li",null,"以山东小钦岛，鲁北碧水源污水处理厂为背景，实现海水淡化大屏项目，海水淡化后台管理系统"),t("li",null,"大屏项目 使用echarts 展示海水 产水量 净水等多种指标 展示实时监测数据，轮播展示处理厂风貌，实时的video视频采集"),t("li",null,"后台管理系统 主要实现了对数据（污水处理指标数据、人员信息、紧急联系人、值班信息、人员所属）的维护 实现基本的crud 使用echarts 展现数据"),t("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),us=N(()=>t("div",{style:{display:"flex","justify-content":"space-between"}},[t("div",{class:"title"},"燃气考试系统"),t("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-11")],-1)),cs=N(()=>t("ul",null,[t("li",null,"主要采用Vue框架，axios，vue-router，vuex，elementUI；uniapp（作为移动端框架）"),t("li",null,"以天津滨海新区某某燃气公司作为大环境，实现管理员，内外勤员工日常考试，安全知识学习，技能评比，投票与反馈等主要功能"),t("li",null,"设计思路 角色权限 根据用户角色赋予差异化 功能，管理员可以进行题库 人员的配置；用户根据配置 题目在约定时间范围进行考试，投票功能近乎相似不做赘述"),t("li",null,"反馈功能主要是为了更好的 提高用户体验，有利于用户对软件做出反馈与日常需求的可能性，提供基本信息检索功能，使得项目朝着更符合用户思维的方向上行走 "),t("li",null,"同时 打造来了一套更便捷的移动端系统，主要采用 uniapp 与 vantUI 实现功能与pc端基本一致 不做赘述")],-1)),ds=N(()=>t("div",{style:{display:"flex","justify-content":"space-between"}},[t("div",{class:"title"},"智慧电力可视化大屏（数据可视化项目）"),t("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-06")],-1)),ps=N(()=>t("ul",null,[t("li",null,"以四川省为背景，围绕电厂负荷监测、调节策略、执行考核、与效果分析三个层级，部署一套自主调节、快速响应、科学研判的多功能性智能电力综合管控平台。"),t("li",null,"页面数据呈现主要由 表格 ，柱形图，折线图，雷达图、响应式地图以及动画效果构成； "),t("li",null,"技术依托基于HTML5的2D、3D渲染引擎，为可视化提供了丰富的展示效果。")],-1)),fs=N(()=>t("div",{style:{display:"flex","justify-content":"space-between"}},[t("div",{class:"title"},"云问答（基于区块链问答系统）"),t("div",{class:"create_time",style:{"font-size":".8em"}},"2021-12-2022-03")],-1)),vs=N(()=>t("ul",null,[t("li",null,"以信息工程学院作为大环境，实现学生老师等用户注册登录，登录成功后即可提出问题，回复问题，为了解决学生的切实问题的平台，减轻学生的压力。"),t("li",null,"整体设计，包含前台，与后台管理，前台主要实现登录、注册、搜索、个人中心、提问、回复问题、每日文案、推广、公告等诸多业务功能；后台主要实现用户、标签、问答、评论、文章、推广管理等，数据的增删改查功能； "),t("li",null,"主要采用Vue框架，axios，vue-router，vuex，bulma，elementUI；")],-1)),ms={__name:"index",setup(r){return(u,s)=>(m(),M(ts,null,{default:f(()=>[t("main",ss,[p(e(Kt),{direction:"vertical",active:14},{default:f(()=>[p(e(F),null,{title:f(()=>[ls]),description:f(()=>[ns]),_:1}),p(e(F),null,{title:f(()=>[as]),description:f(()=>[is]),_:1}),p(e(F),null,{title:f(()=>[os]),description:f(()=>[rs]),_:1}),p(e(F),null,{title:f(()=>[us]),description:f(()=>[cs]),_:1}),p(e(F),null,{title:f(()=>[ds]),description:f(()=>[ps]),_:1}),p(e(F),null,{title:f(()=>[fs]),description:f(()=>[vs]),_:1}),p(e(F),{title:"..."})]),_:1})])]),_:1}))}},Rs=Ue(ms,[["__scopeId","data-v-325c9ddd"]]);export{Rs as B};