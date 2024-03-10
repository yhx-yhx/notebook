import{d as N,k as d,o as p,c as B,r as U,J as I,w,aj as q,m as M,n as m,p as n,t as A,aq as j,T as J,aI as ae,h as E,l as re,y as le,b as C,Q as ie,e as T,K as ue,F as ce,a2 as de,a8 as O,aD as Z,a7 as _,aJ as F}from"./framework.Svq8VKyI.js";import{a as pe,b as me}from"./index.JcRHzX7x.js";import{b as G,u as fe,_ as K,w as ge,d as H,h as ye}from"./plugin-vue_export-helper.D7P7YZzh.js";import{i as $,c as Q,u as ve,d as he}from"./types.CF8Z-v_j.js";import{E as P}from"./index.Cl81w-4Z.js";import{m as Ce}from"./typescript.Bp3YSIOJ.js";import{i as be,T as R,a as Te}from"./icon.ebjsOQxC.js";import{a as we}from"./use-global-config.VnTph4vd.js";import{E as Ne}from"./aria.BUADUvnR.js";const V={},Se=G({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),ke=["textContent"],Ee=N({name:"ElBadge"}),Be=N({...Ee,props:Se,setup(s,{expose:t}){const e=s,o=fe("badge"),a=d(()=>e.isDot?"":$(e.value)&&$(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(p(),B("div",{class:m(n(o).b())},[U(l.$slots,"default"),I(J,{name:`${n(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[q(M("sup",{class:m([n(o).e("content"),n(o).em("content",l.type),n(o).is("fixed",!!l.$slots.default),n(o).is("dot",l.isDot)]),textContent:A(n(a))},null,10,ke),[[j,!l.hidden&&(n(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Me=K(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const _e=ge(Me),W=["success","info","warning","error"],i=Ce({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Q?document.body:void 0}),$e=G({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:be,default:i.icon},id:{type:String,default:i.id},message:{type:H([String,Object,Function]),default:i.message},onClose:{type:H(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:W,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Ie={destroy:()=>!0},c=ae([]),xe=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let o;return t>0&&(o=c[t-1]),{current:e,prev:o}},ze=s=>{const{prev:t}=xe(s);return t?t.vm.exposed.bottom.value:0},De=(s,t)=>c.findIndex(o=>o.id===s)>0?20:t,Le=["id"],Oe=["innerHTML"],Fe=N({name:"ElMessage"}),He=N({...Fe,props:$e,emits:Ie,setup(s,{expose:t}){const e=s,{Close:o}=Te,{ns:a,zIndex:l}=we("message"),{currentZIndex:u,nextZIndex:f}=l,g=E(),v=E(!1),h=E(0);let S;const Y=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&R[r]}}),x=d(()=>e.icon||R[e.type]||""),se=d(()=>ze(e.id)),z=d(()=>De(e.id,e.offset)+se.value),te=d(()=>h.value+z.value),ne=d(()=>({top:`${z.value}px`,zIndex:u.value}));function k(){e.duration!==0&&({stop:S}=ve(()=>{b()},e.duration))}function D(){S==null||S()}function b(){v.value=!1}function oe({code:r}){r===Ne.esc&&b()}return re(()=>{k(),f(),v.value=!0}),le(()=>e.repeatNum,()=>{D(),k()}),pe(document,"keydown",oe),me(g,()=>{h.value=g.value.getBoundingClientRect().height}),t({visible:v,bottom:te,close:b}),(r,L)=>(p(),C(J,{name:n(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:L[0]||(L[0]=Ae=>r.$emit("destroy")),persisted:""},{default:w(()=>[q(M("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([n(a).b(),{[n(a).m(r.type)]:r.type&&!r.icon},n(a).is("center",r.center),n(a).is("closable",r.showClose),r.customClass]),style:ie(n(ne)),role:"alert",onMouseenter:D,onMouseleave:k},[r.repeatNum>1?(p(),C(n(_e),{key:0,value:r.repeatNum,type:n(Y),class:m(n(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),n(x)?(p(),C(n(P),{key:1,class:m([n(a).e("icon"),n(ee)])},{default:w(()=>[(p(),C(ue(n(x))))]),_:1},8,["class"])):T("v-if",!0),U(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),B(ce,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:m(n(a).e("content")),innerHTML:r.message},null,10,Oe)],2112)):(p(),B("p",{key:0,class:m(n(a).e("content"))},A(r.message),3))]),r.showClose?(p(),C(n(P),{key:2,class:m(n(a).e("closeBtn")),onClick:de(b,["stop"])},{default:w(()=>[I(n(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,Le),[[j,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=K(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Re=1;const X=s=>{const t=!s||O(s)||Z(s)||_(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(O(e.appendTo)){let o=document.querySelector(e.appendTo);he(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Ue=({appendTo:s,...t},e)=>{const o=`message_${Re++}`,a=t.onClose,l=document.createElement("div"),u={...t,id:o,onClose:()=>{a==null||a(),Ve(h)},onDestroy:()=>{F(null,l)}},f=I(Pe,u,_(u.message)||Z(u.message)?{default:_(u.message)?u.message:()=>u.message}:null);f.appContext=e||y._context,F(f,l),s.appendChild(l.firstElementChild);const g=f.component,h={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return h},y=(s={},t)=>{if(!Q)return{close:()=>{}};if($(V.max)&&c.length>=V.max)return{close:()=>{}};const e=X(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ue(e,t);return c.push(o),o.handler};W.forEach(s=>{y[s]=(t={},e)=>{const o=X(t);return y({...o,type:s},e)}});function qe(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}y.closeAll=qe;y._context=null;const es=ye(y,"$message");export{es as E};