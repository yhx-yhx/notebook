import{c as te}from"./chunks/commonjs-dynamic-modules.302442b1.js";import{w as oe,c as Ws,a as le,b as Gs,d as Ks,E as ts,e as re,z as pe,f as ce,p as ie}from"./chunks/index.7d1e2036.js";import{d as es,g as z,a5 as ue,a6 as Ss,o as _,c as N,n as S,l as a,k as J,W as rs,r as G,t as ms,e as O,b as Z,w as q,S as ye,a7 as U,h as Fs,K as de,L as Fe,a1 as Hs,a3 as cs,N as W,a8 as De,a9 as fe,V as me,C as vs,aa as $s,z as Ls,a4 as he,ab as be,$ as Ce,q as ve,ac as Rs,U as Ts,_ as ge,p as Ae,m as we,X as Vs}from"./chunks/framework.57530656.js";import{b as us,d as R,u as is,_ as Ds,w as xs}from"./chunks/plugin-vue_export-helper.6e434dd0.js";import{t as Es,d as Ee,E as ke}from"./chunks/index.440778dc.js";import{i as Js}from"./chunks/isNil.c75b1b34.js";import{m as gs}from"./chunks/typescript.defaf979.js";import{u as _e}from"./chunks/index.7d56342f.js";import{u as hs}from"./chunks/use-form-item.1800e9d7.js";import{e as Se}from"./chunks/objects.ae6aadfd.js";import{b as $e,i as Le}from"./chunks/isEqual.8fbbb203.js";import{u as Re}from"./chunks/index.0c9b8ef1.js";import"./chunks/types.2d60aa44.js";import"./chunks/event.9519ab40.js";import"./chunks/constants.89ff2aa2.js";var Te={exports:{}};(function(s){var e=function(n){var t=Object.prototype,F=t.hasOwnProperty,m=Object.defineProperty||function(l,o,p){l[o]=p.value},y,g=typeof Symbol=="function"?Symbol:{},b=g.iterator||"@@iterator",D=g.asyncIterator||"@@asyncIterator",k=g.toStringTag||"@@toStringTag";function i(l,o,p){return Object.defineProperty(l,o,{value:p,enumerable:!0,configurable:!0,writable:!0}),l[o]}try{i({},"")}catch{i=function(o,p,A){return o[p]=A}}function c(l,o,p,A){var h=o&&o.prototype instanceof u?o:u,$=Object.create(h.prototype),H=new B(A||[]);return m($,"_invoke",{value:os(l,p,H)}),$}n.wrap=c;function f(l,o,p){try{return{type:"normal",arg:l.call(o,p)}}catch(A){return{type:"throw",arg:A}}}var r="suspendedStart",C="suspendedYield",w="executing",d="completed",L={};function u(){}function P(){}function j(){}var T={};i(T,b,function(){return this});var K=Object.getPrototypeOf,ns=K&&K(K(M([])));ns&&ns!==t&&F.call(ns,b)&&(T=ns);var Q=j.prototype=u.prototype=Object.create(T);P.prototype=j,m(Q,"constructor",{value:j,configurable:!0}),m(j,"constructor",{value:P,configurable:!0}),P.displayName=i(j,k,"GeneratorFunction");function as(l){["next","throw","return"].forEach(function(o){i(l,o,function(p){return this._invoke(o,p)})})}n.isGeneratorFunction=function(l){var o=typeof l=="function"&&l.constructor;return o?o===P||(o.displayName||o.name)==="GeneratorFunction":!1},n.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,j):(l.__proto__=j,i(l,k,"GeneratorFunction")),l.prototype=Object.create(Q),l},n.awrap=function(l){return{__await:l}};function ss(l,o){function p($,H,V,Y){var x=f(l[$],l,H);if(x.type==="throw")Y(x.arg);else{var bs=x.arg,ds=bs.value;return ds&&typeof ds=="object"&&F.call(ds,"__await")?o.resolve(ds.__await).then(function(ls){p("next",ls,V,Y)},function(ls){p("throw",ls,V,Y)}):o.resolve(ds).then(function(ls){bs.value=ls,V(bs)},function(ls){return p("throw",ls,V,Y)})}}var A;function h($,H){function V(){return new o(function(Y,x){p($,H,Y,x)})}return A=A?A.then(V,V):V()}m(this,"_invoke",{value:h})}as(ss.prototype),i(ss.prototype,D,function(){return this}),n.AsyncIterator=ss,n.async=function(l,o,p,A,h){h===void 0&&(h=Promise);var $=new ss(c(l,o,p,A),h);return n.isGeneratorFunction(o)?$:$.next().then(function(H){return H.done?H.value:$.next()})};function os(l,o,p){var A=r;return function($,H){if(A===w)throw new Error("Generator is already running");if(A===d){if($==="throw")throw H;return ps()}for(p.method=$,p.arg=H;;){var V=p.delegate;if(V){var Y=v(V,p);if(Y){if(Y===L)continue;return Y}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(A===r)throw A=d,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);A=w;var x=f(l,o,p);if(x.type==="normal"){if(A=p.done?d:C,x.arg===L)continue;return{value:x.arg,done:p.done}}else x.type==="throw"&&(A=d,p.method="throw",p.arg=x.arg)}}}function v(l,o){var p=o.method,A=l.iterator[p];if(A===y)return o.delegate=null,p==="throw"&&l.iterator.return&&(o.method="return",o.arg=y,v(l,o),o.method==="throw")||p!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+p+"' method")),L;var h=f(A,l.iterator,o.arg);if(h.type==="throw")return o.method="throw",o.arg=h.arg,o.delegate=null,L;var $=h.arg;if(!$)return o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,L;if($.done)o[l.resultName]=$.value,o.next=l.nextLoc,o.method!=="return"&&(o.method="next",o.arg=y);else return $;return o.delegate=null,L}as(Q),i(Q,k,"Generator"),i(Q,b,function(){return this}),i(Q,"toString",function(){return"[object Generator]"});function E(l){var o={tryLoc:l[0]};1 in l&&(o.catchLoc=l[1]),2 in l&&(o.finallyLoc=l[2],o.afterLoc=l[3]),this.tryEntries.push(o)}function I(l){var o=l.completion||{};o.type="normal",delete o.arg,l.completion=o}function B(l){this.tryEntries=[{tryLoc:"root"}],l.forEach(E,this),this.reset(!0)}n.keys=function(l){var o=Object(l),p=[];for(var A in o)p.push(A);return p.reverse(),function h(){for(;p.length;){var $=p.pop();if($ in o)return h.value=$,h.done=!1,h}return h.done=!0,h}};function M(l){if(l){var o=l[b];if(o)return o.call(l);if(typeof l.next=="function")return l;if(!isNaN(l.length)){var p=-1,A=function h(){for(;++p<l.length;)if(F.call(l,p))return h.value=l[p],h.done=!1,h;return h.value=y,h.done=!0,h};return A.next=A}}return{next:ps}}n.values=M;function ps(){return{value:y,done:!0}}return B.prototype={constructor:B,reset:function(l){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(I),!l)for(var o in this)o.charAt(0)==="t"&&F.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=y)},stop:function(){this.done=!0;var l=this.tryEntries[0],o=l.completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(l){if(this.done)throw l;var o=this;function p(Y,x){return $.type="throw",$.arg=l,o.next=Y,x&&(o.method="next",o.arg=y),!!x}for(var A=this.tryEntries.length-1;A>=0;--A){var h=this.tryEntries[A],$=h.completion;if(h.tryLoc==="root")return p("end");if(h.tryLoc<=this.prev){var H=F.call(h,"catchLoc"),V=F.call(h,"finallyLoc");if(H&&V){if(this.prev<h.catchLoc)return p(h.catchLoc,!0);if(this.prev<h.finallyLoc)return p(h.finallyLoc)}else if(H){if(this.prev<h.catchLoc)return p(h.catchLoc,!0)}else if(V){if(this.prev<h.finallyLoc)return p(h.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(l,o){for(var p=this.tryEntries.length-1;p>=0;--p){var A=this.tryEntries[p];if(A.tryLoc<=this.prev&&F.call(A,"finallyLoc")&&this.prev<A.finallyLoc){var h=A;break}}h&&(l==="break"||l==="continue")&&h.tryLoc<=o&&o<=h.finallyLoc&&(h=null);var $=h?h.completion:{};return $.type=l,$.arg=o,h?(this.method="next",this.next=h.finallyLoc,L):this.complete($)},complete:function(l,o){if(l.type==="throw")throw l.arg;return l.type==="break"||l.type==="continue"?this.next=l.arg:l.type==="return"?(this.rval=this.arg=l.arg,this.method="return",this.next="end"):l.type==="normal"&&o&&(this.next=o),L},finish:function(l){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.finallyLoc===l)return this.complete(p.completion,p.afterLoc),I(p),L}},catch:function(l){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.tryLoc===l){var A=p.completion;if(A.type==="throw"){var h=A.arg;I(p)}return h}}throw new Error("illegal catch attempt")},delegateYield:function(l,o,p){return this.delegate={iterator:M(l),resultName:o,nextLoc:p},this.method==="next"&&(this.arg=y),L}},n}(s.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})(Te);var ks=(s,e)=>`${s}-${e}-${Math.random().toString(16).slice(3,8)}`;const Oe=ks;let Os=0;var Ys=({id:s,action:e,payload:n={}})=>{let t=s;return typeof t>"u"&&(t=Oe("Job",Os),Os+=1),{id:t,action:e,payload:n}},ys={};let _s=!1;ys.logging=_s;ys.setLogging=s=>{_s=s};ys.log=(...s)=>_s?console.log.apply(globalThis,s):null;const Pe=Ys,{log:fs}=ys,je=ks;let Ps=0;var Ie=()=>{const s=je("Scheduler",Ps),e={},n={};let t=[];Ps+=1;const F=()=>t.length,m=()=>Object.keys(e).length,y=()=>{if(t.length!==0){const i=Object.keys(e);for(let c=0;c<i.length;c+=1)if(typeof n[i[c]]>"u"){t[0](e[i[c]]);break}}},g=(i,c)=>new Promise((f,r)=>{const C=Pe({action:i,payload:c});t.push(async w=>{t.shift(),n[w.id]=C;try{f(await w[i].apply(globalThis,[...c,C.id]))}catch(d){r(d)}finally{delete n[w.id],y()}}),fs(`[${s}]: Add ${C.id} to JobQueue`),fs(`[${s}]: JobQueue length=${t.length}`),y()});return{addWorker:i=>(e[i.id]=i,fs(`[${s}]: Add ${i.id}`),fs(`[${s}]: Number of workers=${m()}`),y(),i.id),addJob:async(i,...c)=>{if(m()===0)throw Error(`[${s}]: You need to have at least one worker before adding jobs`);return g(i,c)},terminate:async()=>{Object.keys(e).forEach(async i=>{await e[i].terminate()}),t=[]},getQueueLen:F,getNumWorkers:m}};function Ne(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var qe=Ne;const Ue=qe;var Be=s=>{const e={};return typeof WorkerGlobalScope<"u"?e.type="webworker":Ue()?e.type="electron":typeof window=="object"?e.type="browser":typeof process=="object"&&typeof te=="function"&&(e.type="node"),typeof s>"u"?e:e[s]};const Me=Be("type")==="browser",ze=Me?s=>new URL(s,window.location.href).href:s=>s;var We=s=>{const e={...s};return["corePath","workerPath","langPath"].forEach(n=>{s[n]&&(e[n]=ze(e[n]))}),e},Ge=s=>{const e=[],n=[],t=[],F=[],m=[];return s.blocks&&s.blocks.forEach(y=>{y.paragraphs.forEach(g=>{g.lines.forEach(b=>{b.words.forEach(D=>{D.symbols.forEach(k=>{m.push({...k,page:s,block:y,paragraph:g,line:b,word:D})}),F.push({...D,page:s,block:y,paragraph:g,line:b})}),t.push({...b,page:s,block:y,paragraph:g})}),n.push({...g,page:s,block:y})}),e.push({...y,page:s})}),{...s,blocks:e,paragraphs:n,lines:t,words:F,symbols:m}},Xs={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Ke=Xs;var He={defaultOEM:Ke.DEFAULT};const Ve="tesseract.js",xe="4.1.2",Je="Pure Javascript Multilingual OCR",Ye="src/index.js",Xe="src/index.d.ts",Ze="dist/tesseract.min.js",Qe="dist/tesseract.min.js",sn={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},en={"./src/worker/node/index.js":"./src/worker/browser/index.js"},nn="",an=["jeromewu"],tn="Apache-2.0",on={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},ln={"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^4.0.4","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},rn={"@rollup/pluginutils":"^5.0.2"},pn={type:"git",url:"https://github.com/naptha/tesseract.js.git"},cn={url:"https://github.com/naptha/tesseract.js/issues"},un="https://github.com/naptha/tesseract.js",yn={type:"opencollective",url:"https://opencollective.com/tesseractjs"},dn={name:Ve,version:xe,description:Je,main:Ye,types:Xe,unpkg:Ze,jsdelivr:Qe,scripts:sn,browser:en,author:nn,contributors:an,license:tn,devDependencies:on,dependencies:ln,overrides:rn,repository:pn,bugs:cn,homepage:un,collective:yn};var Fn={langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:()=>{}};const Dn=s=>new URL(s,window.location.href).href,{version:fn}=dn,mn=Fn;var hn={...mn,workerPath:typeof process<"u"&&{}.TESS_ENV==="development"?Dn(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`):`https://cdn.jsdelivr.net/npm/tesseract.js@v${fn}/dist/worker.min.js`,corePath:null},bn=({workerPath:s,workerBlobURL:e})=>{let n;if(Blob&&URL&&e){const t=new Blob([`importScripts("${s}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(t))}else n=new Worker(s);return n},Cn=s=>{s.terminate()},vn=(s,e)=>{s.onmessage=({data:n})=>{e(n)}},gn=async(s,e)=>{s.postMessage(e)};const Cs=s=>new Promise((e,n)=>{const t=new FileReader;t.onload=()=>{e(t.result)},t.onerror=({target:{error:{code:F}}})=>{n(Error(`File could not be read! Code=${F}`))},t.readAsArrayBuffer(s)}),As=async s=>{let e=s;if(typeof s>"u")return"undefined";if(typeof s=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(s)?e=atob(s.split(",")[1]).split("").map(n=>n.charCodeAt(0)):e=await(await fetch(s)).arrayBuffer();else if(typeof HTMLElement<"u"&&s instanceof HTMLElement)s.tagName==="IMG"&&(e=await As(s.src)),s.tagName==="VIDEO"&&(e=await As(s.poster)),s.tagName==="CANVAS"&&await new Promise(n=>{s.toBlob(async t=>{e=await Cs(t),n()})});else if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){const n=await s.convertToBlob();e=await Cs(n)}else(s instanceof File||s instanceof Blob)&&(e=await Cs(s));return new Uint8Array(e)};var An=As;const wn=hn,En=bn,kn=Cn,_n=vn,Sn=gn,$n=An;var Ln={defaultOptions:wn,spawnWorker:En,terminateWorker:kn,onMessage:_n,send:Sn,loadImage:$n};const Rn=We,Tn=Ge,X=Ys,{log:js}=ys,On=ks,{defaultOEM:Pn}=He,{defaultOptions:jn,spawnWorker:In,terminateWorker:Nn,onMessage:qn,loadImage:Is,send:Un}=Ln;let Ns=0;var Zs=async(s={})=>{const e=On("Worker",Ns),{logger:n,errorHandler:t,...F}=Rn({...jn,...s}),m={},y={};let g,b;const D=new Promise((v,E)=>{b=v,g=E}),k=v=>{g(v.message)};let i=In(F);i.onerror=k,Ns+=1;const c=(v,E)=>{m[v]=E},f=(v,E)=>{y[v]=E},r=({id:v,action:E,payload:I})=>new Promise((B,M)=>{js(`[${e}]: Start ${v}, action=${E}`),c(E,B),f(E,M),Un(i,{workerId:e,jobId:v,action:E,payload:I})}),C=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),w=v=>r(X({id:v,action:"load",payload:{options:F}})),d=(v,E,I)=>r(X({id:I,action:"FS",payload:{method:"writeFile",args:[v,E]}})),L=(v,E)=>r(X({id:E,action:"FS",payload:{method:"readFile",args:[v,{encoding:"utf8"}]}})),u=(v,E)=>r(X({id:E,action:"FS",payload:{method:"unlink",args:[v]}})),P=(v,E,I)=>r(X({id:I,action:"FS",payload:{method:v,args:E}})),j=(v="eng",E)=>r(X({id:E,action:"loadLanguage",payload:{langs:v,options:F}})),T=(v="eng",E=Pn,I,B)=>r(X({id:B,action:"initialize",payload:{langs:v,oem:E,config:I}})),K=(v={},E)=>r(X({id:E,action:"setParameters",payload:{params:v}})),ns=async(v,E={},I={blocks:!0,text:!0,hocr:!0,tsv:!0},B)=>r(X({id:B,action:"recognize",payload:{image:await Is(v),options:E,output:I}})),Q=(v="Tesseract OCR Result",E=!1,I)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),r(X({id:I,action:"getPDF",payload:{title:v,textonly:E}}))),as=async(v,E)=>r(X({id:E,action:"detect",payload:{image:await Is(v)}})),ss=async()=>(i!==null&&(Nn(i),i=null),Promise.resolve());qn(i,({workerId:v,jobId:E,status:I,action:B,data:M})=>{if(I==="resolve"){js(`[${v}]: Complete ${E}`);let ps=M;B==="recognize"?ps=Tn(M):B==="getPDF"&&(ps=Array.from({...M,length:Object.keys(M).length})),m[B]({jobId:E,data:ps})}else if(I==="reject")if(y[B](M),B==="load"&&g(M),t)t(M);else throw Error(M);else I==="progress"&&n({...M,userJobId:E})});const os={id:e,worker:i,setResolve:c,setReject:f,load:C,writeText:d,readText:L,removeFile:u,FS:P,loadLanguage:j,initialize:T,setParameters:K,recognize:ns,getPDF:Q,detect:as,terminate:ss};return w().then(()=>b(os)).catch(()=>{}),D};const Qs=Zs,Bn=async(s,e,n)=>{const t=await Qs(n);return await t.loadLanguage(e),await t.initialize(e),t.recognize(s).finally(async()=>{await t.terminate()})},Mn=async(s,e)=>{const n=await Qs(e);return await n.loadLanguage("osd"),await n.initialize("osd"),n.detect(s).finally(async()=>{await n.terminate()})};var zn={recognize:Bn,detect:Mn},Wn={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Gn={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Kn=Ie,Hn=Zs,Vn=zn,xn=Wn,Jn=Xs,Yn=Gn,{setLogging:Xn}=ys;var Zn={languages:xn,OEM:Jn,PSM:Yn,createScheduler:Kn,createWorker:Hn,setLogging:Xn,...Vn},Qn=1,sa=4;function qs(s){return $e(s,Qn|sa)}const ea=us({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:s=>s>=0&&s<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:R(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:R([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:R(Function),default:s=>`${s}%`}}),na=["aria-valuenow"],aa={viewBox:"0 0 100 100"},ta=["d","stroke","stroke-linecap","stroke-width"],oa=["d","stroke","opacity","stroke-linecap","stroke-width"],la={key:0},ra=es({name:"ElProgress"}),pa=es({...ra,props:ea,setup(s){const e=s,n={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},t=is("progress"),F=z(()=>({width:`${e.percentage}%`,animationDuration:`${e.duration}s`,backgroundColor:L(e.percentage)})),m=z(()=>(e.strokeWidth/e.width*100).toFixed(1)),y=z(()=>["circle","dashboard"].includes(e.type)?Number.parseInt(`${50-Number.parseFloat(m.value)/2}`,10):0),g=z(()=>{const u=y.value,P=e.type==="dashboard";return`
          M 50 50
          m 0 ${P?"":"-"}${u}
          a ${u} ${u} 0 1 1 0 ${P?"-":""}${u*2}
          a ${u} ${u} 0 1 1 0 ${P?"":"-"}${u*2}
          `}),b=z(()=>2*Math.PI*y.value),D=z(()=>e.type==="dashboard"?.75:1),k=z(()=>`${-1*b.value*(1-D.value)/2}px`),i=z(()=>({strokeDasharray:`${b.value*D.value}px, ${b.value}px`,strokeDashoffset:k.value})),c=z(()=>({strokeDasharray:`${b.value*D.value*(e.percentage/100)}px, ${b.value}px`,strokeDashoffset:k.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),f=z(()=>{let u;return e.color?u=L(e.percentage):u=n[e.status]||n.default,u}),r=z(()=>e.status==="warning"?oe:e.type==="line"?e.status==="success"?Ws:le:e.status==="success"?Gs:Ks),C=z(()=>e.type==="line"?12+e.strokeWidth*.4:e.width*.111111+2),w=z(()=>e.format(e.percentage));function d(u){const P=100/u.length;return u.map((T,K)=>Ss(T)?{color:T,percentage:(K+1)*P}:T).sort((T,K)=>T.percentage-K.percentage)}const L=u=>{var P;const{color:j}=e;if(ue(j))return j(u);if(Ss(j))return j;{const T=d(j);for(const K of T)if(K.percentage>u)return K.color;return(P=T[T.length-1])==null?void 0:P.color}};return(u,P)=>(_(),N("div",{class:S([a(t).b(),a(t).m(u.type),a(t).is(u.status),{[a(t).m("without-text")]:!u.showText,[a(t).m("text-inside")]:u.textInside}]),role:"progressbar","aria-valuenow":u.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[u.type==="line"?(_(),N("div",{key:0,class:S(a(t).b("bar"))},[J("div",{class:S(a(t).be("bar","outer")),style:rs({height:`${u.strokeWidth}px`})},[J("div",{class:S([a(t).be("bar","inner"),{[a(t).bem("bar","inner","indeterminate")]:u.indeterminate},{[a(t).bem("bar","inner","striped")]:u.striped},{[a(t).bem("bar","inner","striped-flow")]:u.stripedFlow}]),style:rs(a(F))},[(u.showText||u.$slots.default)&&u.textInside?(_(),N("div",{key:0,class:S(a(t).be("bar","innerText"))},[G(u.$slots,"default",{percentage:u.percentage},()=>[J("span",null,ms(a(w)),1)])],2)):O("v-if",!0)],6)],6)],2)):(_(),N("div",{key:1,class:S(a(t).b("circle")),style:rs({height:`${u.width}px`,width:`${u.width}px`})},[(_(),N("svg",aa,[J("path",{class:S(a(t).be("circle","track")),d:a(g),stroke:`var(${a(t).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":u.strokeLinecap,"stroke-width":a(m),fill:"none",style:rs(a(i))},null,14,ta),J("path",{class:S(a(t).be("circle","path")),d:a(g),stroke:a(f),fill:"none",opacity:u.percentage?1:0,"stroke-linecap":u.strokeLinecap,"stroke-width":a(m),style:rs(a(c))},null,14,oa)]))],6)),(u.showText||u.$slots.default)&&!u.textInside?(_(),N("div",{key:2,class:S(a(t).e("text")),style:rs({fontSize:`${a(C)}px`})},[G(u.$slots,"default",{percentage:u.percentage},()=>[u.status?(_(),Z(a(ts),{key:1},{default:q(()=>[(_(),Z(ye(a(r))))]),_:1})):(_(),N("span",la,ms(a(w)),1))])],6)):O("v-if",!0)],10,na))}});var ca=Ds(pa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const ia=xs(ca),se=Symbol("uploadContextKey"),ua="ElUpload";class ya extends Error{constructor(e,n,t,F){super(e),this.name="UploadAjaxError",this.status=n,this.method=t,this.url=F}}function Us(s,e,n){let t;return n.response?t=`${n.response.error||n.response}`:n.responseText?t=`${n.responseText}`:t=`fail to ${e.method} ${s} ${n.status}`,new ya(t,n.status,e.method,s)}function da(s){const e=s.responseText||s.response;if(!e)return e;try{return JSON.parse(e)}catch{return e}}const Fa=s=>{typeof XMLHttpRequest>"u"&&Es(ua,"XMLHttpRequest is undefined");const e=new XMLHttpRequest,n=s.action;e.upload&&e.upload.addEventListener("progress",m=>{const y=m;y.percent=m.total>0?m.loaded/m.total*100:0,s.onProgress(y)});const t=new FormData;if(s.data)for(const[m,y]of Object.entries(s.data))Array.isArray(y)?t.append(m,...y):t.append(m,y);t.append(s.filename,s.file,s.file.name),e.addEventListener("error",()=>{s.onError(Us(n,s,e))}),e.addEventListener("load",()=>{if(e.status<200||e.status>=300)return s.onError(Us(n,s,e));s.onSuccess(da(e))}),e.open(s.method,n,!0),s.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);const F=s.headers||{};if(F instanceof Headers)F.forEach((m,y)=>e.setRequestHeader(y,m));else for(const[m,y]of Object.entries(F))Js(y)||e.setRequestHeader(m,String(y));return e.send(t),e},ee=["text","picture","picture-card"];let Da=1;const ws=()=>Date.now()+Da++,ne=us({action:{type:String,default:"#"},headers:{type:R(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>gs({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:R(Array),default:()=>gs([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ee,default:"text"},httpRequest:{type:R(Function),default:Fa},disabled:Boolean,limit:Number}),fa=us({...ne,beforeUpload:{type:R(Function),default:U},beforeRemove:{type:R(Function)},onRemove:{type:R(Function),default:U},onChange:{type:R(Function),default:U},onPreview:{type:R(Function),default:U},onSuccess:{type:R(Function),default:U},onProgress:{type:R(Function),default:U},onError:{type:R(Function),default:U},onExceed:{type:R(Function),default:U}}),ma=us({files:{type:R(Array),default:()=>gs([])},disabled:{type:Boolean,default:!1},handlePreview:{type:R(Function),default:U},listType:{type:String,values:ee,default:"text"}}),ha={remove:s=>!!s},ba=["onKeydown"],Ca=["src"],va=["onClick"],ga=["title"],Aa=["onClick"],wa=["onClick"],Ea=es({name:"ElUploadList"}),ka=es({...Ea,props:ma,emits:ha,setup(s,{emit:e}){const{t:n}=_e(),t=is("upload"),F=is("icon"),m=is("list"),y=hs(),g=Fs(!1),b=D=>{e("remove",D)};return(D,k)=>(_(),Z(De,{tag:"ul",class:S([a(t).b("list"),a(t).bm("list",D.listType),a(t).is("disabled",a(y))]),name:a(m).b()},{default:q(()=>[(_(!0),N(de,null,Fe(D.files,i=>(_(),N("li",{key:i.uid||i.name,class:S([a(t).be("list","item"),a(t).is(i.status),{focusing:g.value}]),tabindex:"0",onKeydown:Hs(c=>!a(y)&&b(i),["delete"]),onFocus:k[0]||(k[0]=c=>g.value=!0),onBlur:k[1]||(k[1]=c=>g.value=!1),onClick:k[2]||(k[2]=c=>g.value=!1)},[G(D.$slots,"default",{file:i},()=>[D.listType==="picture"||i.status!=="uploading"&&D.listType==="picture-card"?(_(),N("img",{key:0,class:S(a(t).be("list","item-thumbnail")),src:i.url,alt:""},null,10,Ca)):O("v-if",!0),i.status==="uploading"||D.listType!=="picture-card"?(_(),N("div",{key:1,class:S(a(t).be("list","item-info"))},[J("a",{class:S(a(t).be("list","item-name")),onClick:cs(c=>D.handlePreview(i),["prevent"])},[W(a(ts),{class:S(a(F).m("document"))},{default:q(()=>[W(a(re))]),_:1},8,["class"]),J("span",{class:S(a(t).be("list","item-file-name")),title:i.name},ms(i.name),11,ga)],10,va),i.status==="uploading"?(_(),Z(a(ia),{key:0,type:D.listType==="picture-card"?"circle":"line","stroke-width":D.listType==="picture-card"?6:2,percentage:Number(i.percentage),style:rs(D.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):O("v-if",!0)],2)):O("v-if",!0),J("label",{class:S(a(t).be("list","item-status-label"))},[D.listType==="text"?(_(),Z(a(ts),{key:0,class:S([a(F).m("upload-success"),a(F).m("circle-check")])},{default:q(()=>[W(a(Ws))]),_:1},8,["class"])):["picture-card","picture"].includes(D.listType)?(_(),Z(a(ts),{key:1,class:S([a(F).m("upload-success"),a(F).m("check")])},{default:q(()=>[W(a(Gs))]),_:1},8,["class"])):O("v-if",!0)],2),a(y)?O("v-if",!0):(_(),Z(a(ts),{key:2,class:S(a(F).m("close")),onClick:c=>b(i)},{default:q(()=>[W(a(Ks))]),_:2},1032,["class","onClick"])),O(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),O(" This is a bug which needs to be fixed "),O(" TODO: Fix the incorrect navigation interaction "),a(y)?O("v-if",!0):(_(),N("i",{key:3,class:S(a(F).m("close-tip"))},ms(a(n)("el.upload.deleteTip")),3)),D.listType==="picture-card"?(_(),N("span",{key:4,class:S(a(t).be("list","item-actions"))},[J("span",{class:S(a(t).be("list","item-preview")),onClick:c=>D.handlePreview(i)},[W(a(ts),{class:S(a(F).m("zoom-in"))},{default:q(()=>[W(a(pe))]),_:1},8,["class"])],10,Aa),a(y)?O("v-if",!0):(_(),N("span",{key:0,class:S(a(t).be("list","item-delete")),onClick:c=>b(i)},[W(a(ts),{class:S(a(F).m("delete"))},{default:q(()=>[W(a(ce))]),_:1},8,["class"])],10,wa))],2)):O("v-if",!0)])],42,ba))),128)),G(D.$slots,"append")]),_:3},8,["class","name"]))}});var Bs=Ds(ka,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const _a=us({disabled:{type:Boolean,default:!1}}),Sa={file:s=>fe(s)},$a=["onDrop","onDragover"],ae="ElUploadDrag",La=es({name:ae}),Ra=es({...La,props:_a,emits:Sa,setup(s,{emit:e}){const n=me(se);n||Es(ae,"usage: <el-upload><el-upload-dragger /></el-upload>");const t=is("upload"),F=Fs(!1),m=hs(),y=b=>{if(m.value)return;F.value=!1,b.stopPropagation();const D=Array.from(b.dataTransfer.files),k=n.accept.value;if(!k){e("file",D);return}const i=D.filter(c=>{const{type:f,name:r}=c,C=r.includes(".")?`.${r.split(".").pop()}`:"",w=f.replace(/\/.*$/,"");return k.split(",").map(d=>d.trim()).filter(d=>d).some(d=>d.startsWith(".")?C===d:/\/\*$/.test(d)?w===d.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(d)?f===d:!1)});e("file",i)},g=()=>{m.value||(F.value=!0)};return(b,D)=>(_(),N("div",{class:S([a(t).b("dragger"),a(t).is("dragover",F.value)]),onDrop:cs(y,["prevent"]),onDragover:cs(g,["prevent"]),onDragleave:D[0]||(D[0]=cs(k=>F.value=!1,["prevent"]))},[G(b.$slots,"default")],42,$a))}});var Ta=Ds(Ra,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Oa=us({...ne,beforeUpload:{type:R(Function),default:U},onRemove:{type:R(Function),default:U},onStart:{type:R(Function),default:U},onSuccess:{type:R(Function),default:U},onProgress:{type:R(Function),default:U},onError:{type:R(Function),default:U},onExceed:{type:R(Function),default:U}}),Pa=["onKeydown"],ja=["name","multiple","accept"],Ia=es({name:"ElUploadContent",inheritAttrs:!1}),Na=es({...Ia,props:Oa,setup(s,{expose:e}){const n=s,t=is("upload"),F=hs(),m=vs({}),y=vs(),g=r=>{if(r.length===0)return;const{autoUpload:C,limit:w,fileList:d,multiple:L,onStart:u,onExceed:P}=n;if(w&&d.length+r.length>w){P(r,d);return}L||(r=r.slice(0,1));for(const j of r){const T=j;T.uid=ws(),u(T),C&&b(T)}},b=async r=>{if(y.value.value="",!n.beforeUpload)return D(r);let C,w={};try{const L=n.data,u=n.beforeUpload(r);w=$s(n.data)?qs(n.data):n.data,C=await u,$s(n.data)&&Le(L,w)&&(w=qs(n.data))}catch{C=!1}if(C===!1){n.onRemove(r);return}let d=r;C instanceof Blob&&(C instanceof File?d=C:d=new File([C],r.name,{type:r.type})),D(Object.assign(d,{uid:r.uid}),w)},D=(r,C)=>{const{headers:w,data:d,method:L,withCredentials:u,name:P,action:j,onProgress:T,onSuccess:K,onError:ns,httpRequest:Q}=n,{uid:as}=r,ss={headers:w||{},withCredentials:u,file:r,data:C??d,method:L,filename:P,action:j,onProgress:v=>{T(v,r)},onSuccess:v=>{K(v,r),delete m.value[as]},onError:v=>{ns(v,r),delete m.value[as]}},os=Q(ss);m.value[as]=os,os instanceof Promise&&os.then(ss.onSuccess,ss.onError)},k=r=>{const C=r.target.files;C&&g(Array.from(C))},i=()=>{F.value||(y.value.value="",y.value.click())},c=()=>{i()};return e({abort:r=>{Se(m.value).filter(r?([w])=>String(r.uid)===w:()=>!0).forEach(([w,d])=>{d instanceof XMLHttpRequest&&d.abort(),delete m.value[w]})},upload:b}),(r,C)=>(_(),N("div",{class:S([a(t).b(),a(t).m(r.listType),a(t).is("drag",r.drag)]),tabindex:"0",onClick:i,onKeydown:Hs(cs(c,["self"]),["enter","space"])},[r.drag?(_(),Z(Ta,{key:0,disabled:a(F),onFile:g},{default:q(()=>[G(r.$slots,"default")]),_:3},8,["disabled"])):G(r.$slots,"default",{key:1}),J("input",{ref_key:"inputRef",ref:y,class:S(a(t).e("input")),name:r.name,multiple:r.multiple,accept:r.accept,type:"file",onChange:k,onClick:C[0]||(C[0]=cs(()=>{},["stop"]))},null,42,ja)],42,Pa))}});var Ms=Ds(Na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const zs="ElUpload",qa=s=>{var e;(e=s.url)!=null&&e.startsWith("blob:")&&URL.revokeObjectURL(s.url)},Ua=(s,e)=>{const n=Re(s,"fileList",void 0,{passive:!0}),t=c=>n.value.find(f=>f.uid===c.uid);function F(c){var f;(f=e.value)==null||f.abort(c)}function m(c=["ready","uploading","success","fail"]){n.value=n.value.filter(f=>!c.includes(f.status))}const y=(c,f)=>{const r=t(f);r&&(console.error(c),r.status="fail",n.value.splice(n.value.indexOf(r),1),s.onError(c,r,n.value),s.onChange(r,n.value))},g=(c,f)=>{const r=t(f);r&&(s.onProgress(c,r,n.value),r.status="uploading",r.percentage=Math.round(c.percent))},b=(c,f)=>{const r=t(f);r&&(r.status="success",r.response=c,s.onSuccess(c,r,n.value),s.onChange(r,n.value))},D=c=>{Js(c.uid)&&(c.uid=ws());const f={name:c.name,percentage:0,status:"ready",size:c.size,raw:c,uid:c.uid};if(s.listType==="picture-card"||s.listType==="picture")try{f.url=URL.createObjectURL(c)}catch(r){Ee(zs,r.message),s.onError(r,f,n.value)}n.value=[...n.value,f],s.onChange(f,n.value)},k=async c=>{const f=c instanceof File?t(c):c;f||Es(zs,"file to be removed not found");const r=C=>{F(C);const w=n.value;w.splice(w.indexOf(C),1),s.onRemove(C,w),qa(C)};s.beforeRemove?await s.beforeRemove(f,n.value)!==!1&&r(f):r(f)};function i(){n.value.filter(({status:c})=>c==="ready").forEach(({raw:c})=>{var f;return c&&((f=e.value)==null?void 0:f.upload(c))})}return Ls(()=>s.listType,c=>{c!=="picture-card"&&c!=="picture"||(n.value=n.value.map(f=>{const{raw:r,url:C}=f;if(!C&&r)try{f.url=URL.createObjectURL(r)}catch(w){s.onError(w,f,n.value)}return f}))}),Ls(n,c=>{for(const f of c)f.uid||(f.uid=ws()),f.status||(f.status="success")},{immediate:!0,deep:!0}),{uploadFiles:n,abort:F,clearFiles:m,handleError:y,handleProgress:g,handleStart:D,handleSuccess:b,handleRemove:k,submit:i}},Ba=es({name:"ElUpload"}),Ma=es({...Ba,props:fa,setup(s,{expose:e}){const n=s,t=he(),F=hs(),m=vs(),{abort:y,submit:g,clearFiles:b,uploadFiles:D,handleStart:k,handleError:i,handleRemove:c,handleSuccess:f,handleProgress:r}=Ua(n,m),C=z(()=>n.listType==="picture-card"),w=z(()=>({...n,fileList:D.value,onStart:k,onProgress:r,onSuccess:f,onError:i,onRemove:c}));return be(()=>{D.value.forEach(({url:d})=>{d!=null&&d.startsWith("blob:")&&URL.revokeObjectURL(d)})}),Ce(se,{accept:ve(n,"accept")}),e({abort:y,submit:g,clearFiles:b,handleStart:k,handleRemove:c}),(d,L)=>(_(),N("div",null,[a(C)&&d.showFileList?(_(),Z(Bs,{key:0,disabled:a(F),"list-type":d.listType,files:a(D),"handle-preview":d.onPreview,onRemove:a(c)},Rs({append:q(()=>[W(Ms,Ts({ref_key:"uploadRef",ref:m},a(w)),{default:q(()=>[a(t).trigger?G(d.$slots,"trigger",{key:0}):O("v-if",!0),!a(t).trigger&&a(t).default?G(d.$slots,"default",{key:1}):O("v-if",!0)]),_:3},16)]),_:2},[d.$slots.file?{name:"default",fn:q(({file:u})=>[G(d.$slots,"file",{file:u})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):O("v-if",!0),!a(C)||a(C)&&!d.showFileList?(_(),Z(Ms,Ts({key:1,ref_key:"uploadRef",ref:m},a(w)),{default:q(()=>[a(t).trigger?G(d.$slots,"trigger",{key:0}):O("v-if",!0),!a(t).trigger&&a(t).default?G(d.$slots,"default",{key:1}):O("v-if",!0)]),_:3},16)):O("v-if",!0),d.$slots.trigger?G(d.$slots,"default",{key:2}):O("v-if",!0),G(d.$slots,"tip"),!a(C)&&d.showFileList?(_(),Z(Bs,{key:3,disabled:a(F),"list-type":d.listType,files:a(D),"handle-preview":d.onPreview,onRemove:a(c)},Rs({_:2},[d.$slots.file?{name:"default",fn:q(({file:u})=>[G(d.$slots,"file",{file:u})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):O("v-if",!0)]))}});var za=Ds(Ma,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Wa=xs(za);const Ga=s=>(Ae("data-v-0f86ec11"),s=s(),we(),s),Ka={class:"container"},Ha={class:"tesseract"},Va=Ga(()=>J("div",{class:"el-upload__tip text-red"}," 选择文件后立即触发提取文字事件处理程序 ",-1)),xa=["src"],Ja={__name:"tesseract",setup(s){const e=Fs(null),n=Fs(null),t=async g=>{const b=await Zn.createWorker();(async()=>{await b.loadLanguage("chi_sim+eng"),await b.initialize("chi_sim+eng");const{data:{text:D}}=await b.recognize(g);e.value=D,await b.terminate()})()},F=g=>new Promise((b,D)=>{try{let k=new FileReader(g);k.addEventListener("load",i=>{b(i.target.result)}),k.readAsDataURL(g)}catch(k){D(k)}}),m=Fs(null),y=async g=>{let b=g.raw;m.value=1,t(b),e.value&&(m.value=2),n.value&&(n.value=null),n.value=await F(b)};return(g,b)=>(_(),N("div",Ka,[J("div",Ha,[W(a(Wa),{"auto-upload":!1,action:"","list-type":"picture-card","on-change":y,accept:"image/*"},{tip:q(()=>[Va]),default:q(()=>[W(a(ts),null,{default:q(()=>[W(a(ie))]),_:1})]),_:1}),J("img",{src:n.value,alt:"需要提取文字的图片"},null,8,xa),W(a(ke),{type:"textarea",rows:8,modelValue:e.value,"onUpdate:modelValue":b[0]||(b[0]=D=>e.value=D),placeholder:"",maxlength:-1,"show-word-limit":!1,autosize:{minRows:2,maxRows:10}},null,8,["modelValue"])])]))}},Ya=ge(Ja,[["__scopeId","data-v-0f86ec11"]]),Xa=Vs("",4),Za=Vs("",2),Dt=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Components/OCRTesseract/index.md","filePath":"pages/Components/OCRTesseract/index.md","lastUpdated":1695802926000}'),Qa={name:"pages/Components/OCRTesseract/index.md"},ft=Object.assign(Qa,{setup(s){return(e,n)=>(_(),N("div",null,[Xa,W(Ya),Za]))}});export{Dt as __pageData,ft as default};
