import{a4 as z,o as c,c as u,r as C,Q as b,_ as v,h as x,J as k,w as d,p as r,a as o,m as P,a5 as S}from"./chunks/framework.Mt7VO4PB.js";import{E as B}from"./chunks/index.CeFG_DbG.js";import{E as f}from"./chunks/index.h4oFwTuf.js";import"./chunks/index.DXyqwIaM.js";import"./chunks/plugin-vue_export-helper.DbJrgBmy.js";import"./chunks/types.BF4QX0iS.js";import"./chunks/objects.udGwCpTy.js";import"./chunks/get.nfDng5OV.js";import"./chunks/icon.CYK0vRCA.js";const y={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((s,i)=>(s[i.id]=i)&&s,{})}},methods:{updatePaneComponents(){this.panes.forEach(s=>{s.update&&s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(s,i){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=i},onMouseMove(s){this.touch.mouseDown&&(s.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(s)),this.$emit("resize",this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(s,i){"ontouchstart"in window&&(s.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===i?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(s,i),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=i,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[i])},onSplitterDblClick(s,i){let t=0;this.panes=this.panes.map((n,a)=>(n.size=a===i?n.max:n.min,a!==i&&(t+=n.min),n)),this.panes[i].size-=t,this.$emit("pane-maximize",this.panes[i]),this.$emit("resized",this.panes.map(n=>({min:n.min,max:n.max,size:n.size})))},onPaneClick(s,i){this.$emit("pane-click",this.indexedPanes[i])},getCurrentMouseDrag(s){const i=this.container.getBoundingClientRect(),{clientX:t,clientY:n}="ontouchstart"in window&&s.touches?s.touches[0]:s;return{x:t-i.left,y:n-i.top}},getCurrentDragPercentage(s){s=s[this.horizontal?"y":"x"];const i=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(s=i-s),s*100/i},calculatePanesSize(s){const i=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(i),nextPanesSize:this.sumNextPanesSize(i),prevReachedMinPanes:0,nextReachedMinPanes:0};const n=0+(this.pushOtherPanes?0:t.prevPanesSize),a=100-(this.pushOtherPanes?0:t.nextPanesSize),e=Math.max(Math.min(this.getCurrentDragPercentage(s),a),n);let h=[i,i+1],l=this.panes[h[0]]||null,p=this.panes[h[1]]||null;const g=l.max<100&&e>=l.max+t.prevPanesSize,F=p.max<100&&e<=100-(p.max+this.sumNextPanesSize(i+1));if(g||F){g?(l.size=l.max,p.size=Math.max(100-l.max-t.prevPanesSize-t.nextPanesSize,0)):(l.size=Math.max(100-p.max-t.prevPanesSize-this.sumNextPanesSize(i+1),0),p.size=p.max);return}if(this.pushOtherPanes){const m=this.doPushOtherPanes(t,e);if(!m)return;({sums:t,panesToResize:h}=m),l=this.panes[h[0]]||null,p=this.panes[h[1]]||null}l!==null&&(l.size=Math.min(Math.max(e-t.prevPanesSize-t.prevReachedMinPanes,l.min),l.max)),p!==null&&(p.size=Math.min(Math.max(100-e-t.nextPanesSize-t.nextReachedMinPanes,p.min),p.max))},doPushOtherPanes(s,i){const t=this.touch.activeSplitter,n=[t,t+1];return i<s.prevPanesSize+this.panes[n[0]].min&&(n[0]=this.findPrevExpandedPane(t).index,s.prevReachedMinPanes=0,n[0]<t&&this.panes.forEach((a,e)=>{e>n[0]&&e<=t&&(a.size=a.min,s.prevReachedMinPanes+=a.min)}),s.prevPanesSize=this.sumPrevPanesSize(n[0]),n[0]===void 0)?(s.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((a,e)=>{e>0&&e<=t&&(a.size=a.min,s.prevReachedMinPanes+=a.min)}),this.panes[n[1]].size=100-s.prevReachedMinPanes-this.panes[0].min-s.prevPanesSize-s.nextPanesSize,null):i>100-s.nextPanesSize-this.panes[n[1]].min&&(n[1]=this.findNextExpandedPane(t).index,s.nextReachedMinPanes=0,n[1]>t+1&&this.panes.forEach((a,e)=>{e>t&&e<n[1]&&(a.size=a.min,s.nextReachedMinPanes+=a.min)}),s.nextPanesSize=this.sumNextPanesSize(n[1]-1),n[1]===void 0)?(s.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((a,e)=>{e<this.panesCount-1&&e>=t+1&&(a.size=a.min,s.nextReachedMinPanes+=a.min)}),this.panes[n[0]].size=100-s.prevPanesSize-s.nextReachedMinPanes-this.panes[this.panesCount-1].min-s.nextPanesSize,null):{sums:s,panesToResize:n}},sumPrevPanesSize(s){return this.panes.reduce((i,t,n)=>i+(n<s?t.size:0),0)},sumNextPanesSize(s){return this.panes.reduce((i,t,n)=>i+(n>s+1?t.size:0),0)},findPrevExpandedPane(s){return[...this.panes].reverse().find(i=>i.index<s&&i.size>i.min)||{}},findNextExpandedPane(s){return this.panes.find(i=>i.index>s+1&&i.size>i.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(s=>{const i=s.classList.contains("splitpanes__pane"),t=s.classList.contains("splitpanes__splitter");!i&&!t&&(s.parentNode.removeChild(s),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(s,i,t=!1){const n=s-1,a=document.createElement("div");a.classList.add("splitpanes__splitter"),t||(a.onmousedown=e=>this.onMouseDown(e,n),typeof window<"u"&&"ontouchstart"in window&&(a.ontouchstart=e=>this.onMouseDown(e,n)),a.onclick=e=>this.onSplitterClick(e,n+1)),this.dblClickSplitter&&(a.ondblclick=e=>this.onSplitterDblClick(e,n+1)),i.parentNode.insertBefore(a,i)},removeSplitter(s){s.onmousedown=void 0,s.onclick=void 0,s.ondblclick=void 0,s.parentNode.removeChild(s)},redoSplitters(){const s=Array.from(this.container.children);s.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let i=0;s.forEach(t=>{t.className.includes("splitpanes__pane")&&(!i&&this.firstSplitter?this.addSplitter(i,t,!0):i&&this.addSplitter(i,t),i++)})},requestUpdate({target:s,...i}){const t=this.indexedPanes[s._.uid];Object.entries(i).forEach(([n,a])=>t[n]=a)},onPaneAdd(s){let i=-1;Array.from(s.$el.parentNode.children).some(a=>(a.className.includes("splitpanes__pane")&&i++,a===s.$el));const t=parseFloat(s.minSize),n=parseFloat(s.maxSize);this.panes.splice(i,0,{id:s._.uid,index:i,min:isNaN(t)?0:t,max:isNaN(n)?100:n,size:s.size===null?null:parseFloat(s.size),givenSize:s.size,update:s.update}),this.panes.forEach((a,e)=>a.index=e),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[i]}),this.$emit("pane-add",{index:i,panes:this.panes.map(a=>({min:a.min,max:a.max,size:a.size}))})})},onPaneRemove(s){const i=this.panes.findIndex(n=>n.id===s._.uid),t=this.panes.splice(i,1)[0];this.panes.forEach((n,a)=>n.index=a),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...t,index:i}}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))})})},resetPaneSizes(s={}){!s.addedPane&&!s.removedPane?this.initialPanesSizing():this.panes.some(i=>i.givenSize!==null||i.min||i.max<100)?this.equalizeAfterAddOrRemove(s):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size})))},equalize(){const s=100/this.panesCount;let i=0;const t=[],n=[];this.panes.forEach(a=>{a.size=Math.max(Math.min(s,a.max),a.min),i-=a.size,a.size>=a.max&&t.push(a.id),a.size<=a.min&&n.push(a.id)}),i>.1&&this.readjustSizes(i,t,n)},initialPanesSizing(){let s=100;const i=[],t=[];let n=0;this.panes.forEach(e=>{s-=e.size,e.size!==null&&n++,e.size>=e.max&&i.push(e.id),e.size<=e.min&&t.push(e.id)});let a=100;s>.1&&(this.panes.forEach(e=>{e.size===null&&(e.size=Math.max(Math.min(s/(this.panesCount-n),e.max),e.min)),a-=e.size}),a>.1&&this.readjustSizes(s,i,t))},equalizeAfterAddOrRemove({addedPane:s,removedPane:i}={}){let t=100/this.panesCount,n=0;const a=[],e=[];s&&s.givenSize!==null&&(t=(100-s.givenSize)/(this.panesCount-1)),this.panes.forEach(h=>{n-=h.size,h.size>=h.max&&a.push(h.id),h.size<=h.min&&e.push(h.id)}),!(Math.abs(n)<.1)&&(this.panes.forEach(h=>{s&&s.givenSize!==null&&s.id===h.id||(h.size=Math.max(Math.min(t,h.max),h.min)),n-=h.size,h.size>=h.max&&a.push(h.id),h.size<=h.min&&e.push(h.id)}),n>.1&&this.readjustSizes(n,a,e))},readjustSizes(s,i,t){let n;s>0?n=s/(this.panesCount-i.length):n=s/(this.panesCount-t.length),this.panes.forEach((a,e)=>{if(s>0&&!i.includes(a.id)){const h=Math.max(Math.min(a.size+n,a.max),a.min),l=h-a.size;s-=l,a.size=h}else if(!t.includes(a.id)){const h=Math.max(Math.min(a.size+n,a.max),a.min),l=h-a.size;s-=l,a.size=h}a.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[a.id].size}%`})}),Math.abs(s)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(s){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((i,t)=>{i.ondblclick=s?n=>this.onSplitterDblClick(n,t):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return z("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},_=(s,i)=>{const t=s.__vccOpts||s;for(const[n,a]of i)t[n]=a;return t},A={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(s){this.style=s}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(s){this.requestUpdate({target:this,size:s})},minSizeNumber(s){this.requestUpdate({target:this,min:s})},maxSizeNumber(s){this.requestUpdate({target:this,max:s})}}};function D(s,i,t,n,a,e){return c(),u("div",{class:"splitpanes__pane",onClick:i[0]||(i[0]=h=>e.onPaneClick(h,s._.uid)),style:b(s.style)},[C(s.$slots,"default")],4)}const E=_(A,[["render",D]]),M={class:"splitpanes-container layout-pd"},q={__name:"index",setup(s){const i=x(50);return(t,n)=>(c(),u("div",M,[k(r(f),{shadow:"hover",header:"splitpanes 窗格拆分器"},{default:d(()=>[k(r(B),{title:"感谢优秀的 `splitpanes`，项目地址：https://github.com/antoniandre/splitpanes",type:"success",closable:!1,class:"mb15"}),k(r(y),{class:"default-theme",onResize:n[0]||(n[0]=a=>i.value=a[0].size),style:{height:"500px"}},{default:d(()=>[k(r(E),{size:32},{default:d(()=>[o(" 1 ")]),_:1}),k(r(E),{size:36},{default:d(()=>[k(r(y),{class:"default-theme",horizontal:!0},{default:d(()=>[k(r(E),{size:100},{default:d(()=>[o(" 2 ")]),_:1}),k(r(E),{size:100},{default:d(()=>[o(" 3 ")]),_:1})]),_:1})]),_:1}),k(r(E),{size:32},{default:d(()=>[o(" 4 ")]),_:1})]),_:1})]),_:1})]))}},N=v(q,[["__scopeId","data-v-9afee116"]]),w=P("br",null,null,-1),R=S(`<details class="details custom-block"><summary>代码实现</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;splitpanes-container layout-pd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-card</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hover&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;splitpanes 窗格拆分器&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-alert</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">				title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;感谢优秀的 \`splitpanes\`，项目地址：https://github.com/antoniandre/splitpanes&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">				type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">closable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">				class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb15&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">splitpanes</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-theme&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">paneSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $event[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 1 &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">36</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">splitpanes</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-theme&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">horizontal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 2 &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 3 &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">splitpanes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 4 &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">splitpanes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-card</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {ElCard,ElButton,ElAlert} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;element-plus&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Splitpanes, Pane } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;splitpanes&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;splitpanes/dist/splitpanes.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义变量内容</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> paneSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.splitpanes__pane</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">70</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--el-color-primary-light-5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--el-border-color-lighter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--el-color-primary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></details>`,1),Q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Components/splitpanes/index.md","filePath":"pages/Components/splitpanes/index.md","lastUpdated":1709195911000}'),$={name:"pages/Components/splitpanes/index.md"},W=Object.assign($,{setup(s){return(i,t)=>(c(),u("div",null,[w,k(N),R]))}});export{Q as __pageData,W as default};
