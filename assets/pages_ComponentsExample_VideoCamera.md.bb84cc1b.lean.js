import{P as H}from"./chunks/index.min.d280e7fe.js";import{d as I,g as T,o as s,c as n,b,w as _,S as A,l as u,e as y,n as E,r as x,_ as V,a5 as K,h as r,a2 as F,k as e,X as J,j as Z,N as m,a as R,K as q,p as G,m as Q}from"./chunks/framework.b53b6339.js";import{b as W,i as Y,u as e1,E as t1,_ as s1,w as a1}from"./chunks/index.5757b740.js";import{E as M}from"./chunks/index.64e8ca49.js";import"./chunks/commonjsHelpers.725317a4.js";import"./chunks/index.c2984fee.js";const o1=W({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:Y}}),l1={click:d=>d instanceof MouseEvent},i1=["href"],c1=I({name:"ElLink"}),n1=I({...c1,props:o1,emits:l1,setup(d,{emit:a}){const t=d,p=e1("link"),h=T(()=>[p.b(),p.m(t.type),p.is("disabled",t.disabled),p.is("underline",t.underline&&!t.disabled)]);function g(l){t.disabled||a("click",l)}return(l,i)=>(s(),n("a",{class:E(u(h)),href:l.disabled||!l.href?void 0:l.href,onClick:g},[l.icon?(s(),b(u(t1),{key:0},{default:_(()=>[(s(),b(A(l.icon)))]),_:1})):y("v-if",!0),l.$slots.default?(s(),n("span",{key:1,class:E(u(p).e("inner"))},[x(l.$slots,"default")],2)):y("v-if",!0),l.$slots.icon?x(l.$slots,"icon",{key:2}):y("v-if",!0)],10,i1))}});var d1=s1(n1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const f=a1(d1);const r1={id:"mse"},p1={__name:"lightweightXgVideo",props:{url:String},setup(d){const a=d,t=K({id:"mse",url:"",height:"100",width:"100",fluid:!0,fitVideoSize:"auto",volume:.6,autoplay:!1,loop:!1,videoInit:!0,poster:"",playbackRate:[.5,.75,1,1.5,2],defaultPlaybackRate:1,rotate:{clockwise:!0,innerRotate:!0},playsinline:!0,plugins:[],playsinline:!0,whitelist:[""],keyShortcut:"on",closeVideoClick:!0,closeVideoDblclick:!0,closeVideoTouch:!0,playbackRate:[null],pip:!0,download:!0,thumbnail:{pic_num:44,width:160,height:90,col:10,row:10,urls:[""]}});let p=r();return F(()=>{a.url&&(t.url=a.url,p.value=new H(t))}),(h,g)=>(s(),n("div",r1))}},u1=V(p1,[["__scopeId","data-v-d58b5194"]]);const v1={class:"previews_ctn"},_1=J('<div class="tools" data-v-507c0f0b><div class="circle" data-v-507c0f0b><span class="red box" data-v-507c0f0b></span></div><div class="circle" data-v-507c0f0b><span class="yellow box" data-v-507c0f0b></span></div><div class="circle" data-v-507c0f0b><span class="green box" data-v-507c0f0b></span></div></div>',1),h1={class:"main_ctn"},f1={__name:"baseContent",setup(d){return(a,t)=>(s(),n("div",v1,[_1,e("div",h1,[x(a.$slots,"default",{},void 0,!0)])]))}},m1=V(f1,[["__scopeId","data-v-507c0f0b"]]);const v=d=>(G("data-v-9a67c2b5"),d=d(),Q(),d),g1={class:"video_ctn"},w1={class:"video_warp"},b1=["poster"],y1={class:"btn_groups"},k1={key:0},z1=v(()=>e("svg",{t:"1690897238478",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3453",width:"48",height:"48"},[e("path",{d:"M887.74 353.5c-20.511-48.423-49.759-91.872-87.139-129.251s-80.828-66.628-129.251-87.139c-50.123-21.238-103.402-31.918-158.257-31.918s-108.134 10.801-158.257 31.918c-48.423 20.511-91.872 49.759-129.251 87.139-37.379 37.379-66.628 80.828-87.139 129.251-21.238 50.123-31.918 103.402-31.918 158.257s10.801 108.134 31.918 158.257c20.511 48.423 49.759 91.872 87.139 129.251 37.379 37.379 80.828 66.628 129.251 87.139 50.123 21.238 103.402 31.918 158.257 31.918s108.134-10.801 158.257-31.918c48.423-20.511 91.872-49.759 129.251-87.139 37.379-37.379 66.628-80.828 87.139-129.251 21.238-50.123 31.918-103.402 31.918-158.257s-10.801-108.013-31.918-158.257zM513.092 860.069c-192.117 0-348.311-156.194-348.311-348.311s156.194-348.311 348.311-348.311 348.311 156.194 348.311 348.311-156.194 348.311-348.311 348.311z",fill:"#1296db","p-id":"3454"}),e("path",{d:"M618.678 324.13c-19.419 0-35.195 15.899-35.195 35.195v303.408c0 19.419 15.777 35.195 35.195 35.195 19.297 0 35.195-15.777 35.195-35.195v-303.408c0-19.297-15.777-35.195-35.195-35.195zM407.506 324.13c-19.419 0-35.195 15.899-35.195 35.195v303.408c0 19.419 15.777 35.195 35.195 35.195 19.297 0 35.195-15.777 35.195-35.195v-303.408c0-19.297-15.777-35.195-35.195-35.195z",fill:"#1296db","p-id":"3455"})],-1)),M1=[z1],C1={key:1},x1=v(()=>e("svg",{t:"1690897286002",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3705",width:"48",height:"48"},[e("path",{d:"M440.8 663.3c-4.5 0-8.8-1-12.8-3.3-8.5-4.7-13.9-13.6-13.9-23.4V387.4c0-9.7 5.4-18.7 13.9-23.4s19-4.3 27.2 0.9l195.9 124.6c7.7 4.8 12.3 13.4 12.3 22.5s-4.7 17.7-12.3 22.5L455.2 659.1c-4.5 2.9-9.4 4.2-14.4 4.2zM467.5 436v152l119.4-76-119.4-76z","p-id":"3706",fill:"#1296db"}),e("path",{d:"M512 894.8c-211.1 0-382.8-171.7-382.8-382.8S300.9 129.2 512 129.2 894.8 300.9 894.8 512 723.1 894.8 512 894.8z m0-712.2c-181.7 0-329.4 147.8-329.4 329.4S330.3 841.4 512 841.4 841.4 693.7 841.4 512 693.7 182.6 512 182.6z","p-id":"3707",fill:"#1296db"})],-1)),V1=[x1],L1=v(()=>e("svg",{t:"1690897033631",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2324",width:"48",height:"48"},[e("path",{d:"M491.885382 191.666274l40.038902 0 0 640.641869-40.038902 0 0-640.641869Z",fill:"#1296db","p-id":"2325"}),e("path",{d:"M71.234903 821.527612l0.010233 0.013303-7.606235 10.729365 15.195074 0 0.026606 0.037862 21.945825 0 14.858406 0 316.41651 0 0-40.058344L432.081321 385.17757l0-21.00643 0-52.550867-340.126514 480.630548L71.234903 821.527612zM143.849734 792.192493l11.549034-16.123212 0.030699 0.045025L395.2863 437.193247l0 339.870688 0.00307 0 0 15.185864 0 0.005117-3.5038 0 0 0.00614L171.569052 792.261055l-18.8493 0 0-0.011256 0-0.034792L143.849734 792.192493z",fill:"#1296db","p-id":"2326"}),e("path",{d:"M944.955224 832.303027l15.405875-0.058328-10.68127-14.794961-357.89111-505.391489 0 52.513004 0 20.97573 0 446.760137 331.225797 0 13.988596 0-0.075725 0.024559 6.583952-0.024559 1.440815 0L944.955224 832.303027zM855.281879 792.298917l0.014326-0.038886L632.025119 792.260032l0-0.035816-3.413749 0 0-11.890818-0.027629 0L628.58374 437.524798l237.048881 334.715271 0.031722 0 6.595208 9.410324 0 0.053212 7.465019 10.595312L855.281879 792.298917z",fill:"#1296db","p-id":"2327"})],-1)),S1=v(()=>e("svg",{t:"1690897380252",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4870",width:"48",height:"48"},[e("path",{d:"M285.376 320.64H843.84a48 48 0 1 1 0 96H184.32a54.4 54.4 0 0 1-38.336-93.056l174.976-173.44a48 48 0 1 1 67.584 68.224L285.44 320.64z m452.096 381.888H178.944a48 48 0 0 1 0-96h659.584a54.4 54.4 0 0 1 38.272 93.056L701.824 872.96a48 48 0 1 1-67.52-68.224l103.168-102.208z",fill:"#1296db","p-id":"4871"})],-1)),$1=v(()=>e("svg",{t:"1690897579289",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6009",width:"48",height:"48"},[e("path",{d:"M851.552 890.88 172.448 890.88c-74.592 0-135.296-60.672-135.296-135.296L37.152 370.752c0-74.624 60.672-135.328 135.296-135.328l132.16 0L302.912 195.904c0-34.624 28.192-62.816 62.816-62.816l302.016 0c29.408 0 53.312 23.904 53.312 53.312l0 49.024 130.464 0c74.592 0 135.296 60.672 135.296 135.328l0 384.832C986.816 830.208 926.144 890.88 851.552 890.88zM172.448 283.456c-48.128 0-87.296 39.168-87.296 87.328l0 384.832c0 48.128 39.168 87.296 87.296 87.296l679.104 0c48.128 0 87.296-39.168 87.296-87.296L938.848 370.752c0-48.16-39.168-87.328-87.296-87.328L716.8 283.424c-24.096 0-43.712-19.616-43.712-43.712L673.088 186.4c0-2.944-2.368-5.312-5.312-5.312l-302.016 0c-8.16 0-14.816 6.656-14.816 14.816L350.944 237.12c0 25.536-20.768 46.304-46.304 46.304L172.448 283.424zM512 755.84c-107.04 0-194.08-87.072-194.08-194.08S404.992 367.68 512 367.68s194.08 87.072 194.08 194.08S619.04 755.84 512 755.84zM512 415.68c-80.576 0-146.08 65.536-146.08 146.08S431.456 707.84 512 707.84s146.08-65.536 146.08-146.08S592.576 415.68 512 415.68zM816.8 438.016c-25.568 0-46.336-20.768-46.336-46.336s20.768-46.336 46.336-46.336 46.336 20.768 46.336 46.336S842.368 438.016 816.8 438.016zM816.8 390.016l-1.664 1.664c0 0.896 0.736 1.664 1.664 1.664L816.8 390.016z",fill:"#1296db","p-id":"6010"})],-1)),B1={key:0},E1=v(()=>e("svg",{t:"1690897238478",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3453",width:"48",height:"48"},[e("path",{d:"M887.74 353.5c-20.511-48.423-49.759-91.872-87.139-129.251s-80.828-66.628-129.251-87.139c-50.123-21.238-103.402-31.918-158.257-31.918s-108.134 10.801-158.257 31.918c-48.423 20.511-91.872 49.759-129.251 87.139-37.379 37.379-66.628 80.828-87.139 129.251-21.238 50.123-31.918 103.402-31.918 158.257s10.801 108.134 31.918 158.257c20.511 48.423 49.759 91.872 87.139 129.251 37.379 37.379 80.828 66.628 129.251 87.139 50.123 21.238 103.402 31.918 158.257 31.918s108.134-10.801 158.257-31.918c48.423-20.511 91.872-49.759 129.251-87.139 37.379-37.379 66.628-80.828 87.139-129.251 21.238-50.123 31.918-103.402 31.918-158.257s-10.801-108.013-31.918-158.257zM513.092 860.069c-192.117 0-348.311-156.194-348.311-348.311s156.194-348.311 348.311-348.311 348.311 156.194 348.311 348.311-156.194 348.311-348.311 348.311z",fill:"#1296db","p-id":"3454"}),e("path",{d:"M618.678 324.13c-19.419 0-35.195 15.899-35.195 35.195v303.408c0 19.419 15.777 35.195 35.195 35.195 19.297 0 35.195-15.777 35.195-35.195v-303.408c0-19.297-15.777-35.195-35.195-35.195zM407.506 324.13c-19.419 0-35.195 15.899-35.195 35.195v303.408c0 19.419 15.777 35.195 35.195 35.195 19.297 0 35.195-15.777 35.195-35.195v-303.408c0-19.297-15.777-35.195-35.195-35.195z",fill:"#1296db","p-id":"3455"})],-1)),I1=[E1],R1={key:1},P1=v(()=>e("svg",{t:"1690897286002",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3705",width:"48",height:"48"},[e("path",{d:"M440.8 663.3c-4.5 0-8.8-1-12.8-3.3-8.5-4.7-13.9-13.6-13.9-23.4V387.4c0-9.7 5.4-18.7 13.9-23.4s19-4.3 27.2 0.9l195.9 124.6c7.7 4.8 12.3 13.4 12.3 22.5s-4.7 17.7-12.3 22.5L455.2 659.1c-4.5 2.9-9.4 4.2-14.4 4.2zM467.5 436v152l119.4-76-119.4-76z","p-id":"3706",fill:"#1296db"}),e("path",{d:"M512 894.8c-211.1 0-382.8-171.7-382.8-382.8S300.9 129.2 512 129.2 894.8 300.9 894.8 512 723.1 894.8 512 894.8z m0-712.2c-181.7 0-329.4 147.8-329.4 329.4S330.3 841.4 512 841.4 841.4 693.7 841.4 512 693.7 182.6 512 182.6z","p-id":"3707",fill:"#1296db"})],-1)),j1=[P1],N1={class:"perview",title:"截图"},O1=["src"],D1={key:1,t:"1690899550343",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8248",width:"48",height:"48"},X1=v(()=>e("path",{d:"M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z",fill:"#1296db","p-id":"8249"},null,-1)),U1=[X1],H1={class:"perview",title:"视频预览"},T1={key:1,t:"1690899435991",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7104",width:"48",height:"48"},A1=v(()=>e("path",{d:"M849.5 962l-675 0c-66.284 0-112.5-46.216-112.5-112.5l0-675c0-66.284 46.216-112.5 112.5-112.5l675 0c66.284 0 112.5 46.216 112.5 112.5l0 675c0 66.284-46.216 112.5-112.5 112.5zM99.5 212l0 75 150 0-72.858-182.135c-46.619 13.532-77.142 53.522-77.142 107.135zM249.5 99.5l75.001 187.5 112.481 0-74.982-187.5-112.5 0zM436.982 99.5l75.018 187.5 112.5 0-75-187.5-112.519 0zM624.5 99.5l75 187.5 112.5 0-75-187.5-112.5 0zM924.5 212c0-66.284-46.216-112.5-112.5-112.5l75.001 187.5 37.499 0 0-75zM924.5 324.5l-824.999 0 0 487.5c0 66.284 46.216 112.5 112.5 112.5l600 0c66.284 0 112.5-46.216 112.5-112.5l0-487.5zM362 437l337.5 187.5-337.5 187.5 0-374.999z",fill:"#1296db","p-id":"7105"},null,-1)),K1=[A1],F1={__name:"VideoCamera",setup(d){const a=r(!1),t=r(),p=r(),h=r(),g=r([]);r();const l=r(),i=r(),L=r("/notebook/images/poster.jpg");Z(()=>{navigator.mediaDevices.enumerateDevices().then(c=>{c.forEach(function(o){console.log(o.kind+": "+o.label+" id = "+o.deviceId)})}),S()});var P={video:{width:200,height:200,deviceId:"yhx825"}};const S=()=>{navigator.mediaDevices.getUserMedia(P).then(function(c){t.value.srcObject=c,t.value.onloadedmetadata=function(o){t.value.play(),a.value=!0}}).catch(function(c){console.log(c.name+": "+c.message)})},j=()=>{t.value.srcObject.getTracks().forEach(c=>{c.stop(),t.value.poster=L.value})},N=()=>{a.value?(j(),a.value=!1):S()},O=()=>{if(!a.value)return M.warning("请先打开摄像头在试试");p.value.getContext("2d").drawImage(t.value,0,0,200,200),h.value=p.value.toDataURL("image/png")},k=r(!1),$=c=>{if(!a.value){M.warning("请先开启摄像头");return}if(!i.value&&(i.value=new MediaRecorder(t.value.srcObject)),console.log(i.value.state),i.value.state==="inactive"){console.log("开启 录制"),i.value.start(),k.value=!0;return}if(i.value.ondataavailable=o=>{console.log(o),o.data&&o.data.size>0&&g.value.push(o.data)},i.value.onstop=o=>{const B=new Blob(g.value,{type:"video/mp4"}),C=URL.createObjectURL(B);if(o==="download"){const w=document.createElement("a");w.href=C,w.download="屏幕录制.mp4",document.body.appendChild(w),w.click(),document.body.removeChild(w)}else console.log(C),l.value=C;D(),a.value=!1},c==="stop"){if(!i.value)return;i.value.stop();return}i.value.state==="recording"?(M.info("暂停 录制"),i.value.pause()):i.value.state==="paused"&&(M.info("继续 录制"),i.value.resume()),console.log(i.value.state)},D=()=>{console.log("关闭"),t.value.srcObject.getTracks().forEach(o=>{o.stop(),k.value=!1})},X=()=>{t.value.style.transform==="scaleX(-1)"?t.value.style.transform="scaleX(1)":t.value.style.transform="scaleX(-1)"},z=r(1),U=()=>{z.value===0?(t.value.style.borderRadius="50%",z.value=1):z.value===1&&(z.value=0,t.value.style.borderRadius="0")};return(c,o)=>(s(),b(m1,null,{default:_(()=>[e("div",g1,[e("div",w1,[e("video",{class:"video",src:"",ref_key:"video",ref:t,poster:L.value},null,8,b1),e("canvas",{ref_key:"canvas",ref:p,height:"200",width:"200",style:{display:"none"}},null,512),e("div",y1,[m(u(f),{type:"primary",onClick:N,title:a.value?"关闭摄像头":"开启摄像头"},{default:_(()=>[a.value?(s(),n("span",k1,M1)):(s(),n("span",C1,V1))]),_:1},8,["title"]),m(u(f),{type:"primary",onClick:X,title:"镜像"},{default:_(()=>[L1]),_:1}),m(u(f),{type:"primary",onClick:U,title:"更改样式"},{default:_(()=>[S1]),_:1}),m(u(f),{type:"primary",onClick:O,title:"截图"},{default:_(()=>[$1]),_:1}),m(u(f),{type:"primary",onClick:$,title:"开始暂停继续录制"},{default:_(()=>[k.value?(s(),n("span",B1,I1)):(s(),n("span",R1,j1))]),_:1}),k.value?(s(),b(u(f),{key:0,type:"primary",onClick:o[0]||(o[0]=B=>$("stop"))},{default:_(()=>[R("结束录制")]),_:1})):y("",!0)])])]),e("div",N1,[h.value?(s(),n(q,{key:0},[h.value?(s(),n("img",{key:0,class:"img",src:h.value},null,8,O1)):y("",!0)],64)):(s(),n("svg",D1,U1))]),e("div",H1,[l.value?(s(),b(u1,{key:0,url:l.value},null,8,["url"])):(s(),n("svg",T1,K1))])]),_:1}))}},J1=V(F1,[["__scopeId","data-v-9a67c2b5"]]),Z1=e("h1",{id:"摄像头测试用例组件",tabindex:"-1"},[R("摄像头测试用例组件 "),e("a",{class:"header-anchor",href:"#摄像头测试用例组件","aria-label":'Permalink to "摄像头测试用例组件"'},"​")],-1),q1=e("br",null,null,-1),a3=JSON.parse('{"title":"摄像头测试用例组件","description":"","frontmatter":{},"headers":[],"relativePath":"pages/ComponentsExample/VideoCamera.md","filePath":"pages/ComponentsExample/VideoCamera.md","lastUpdated":1690901653000}'),G1={name:"pages/ComponentsExample/VideoCamera.md"},o3=Object.assign(G1,{setup(d){return(a,t)=>(s(),n("div",null,[Z1,q1,m(J1)]))}});export{a3 as __pageData,o3 as default};
