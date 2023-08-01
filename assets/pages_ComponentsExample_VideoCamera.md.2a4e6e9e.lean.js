import{b as pe,i as ae,l as be,d as me,u as ee,E as I,_ as ue,w as ye,a as ke,v as _e,c as xe,s as Se,e as we}from"./chunks/index.73179d7b.js";import{g as H,V as Me,h as y,a4 as Be,a5 as Re,d as U,o as p,b as P,w as v,c as w,K as ce,r as D,l,n as Z,S as L,e as G,U as Ae,$ as Ce,a6 as He,q as re,_ as Ve,j as Te,k as V,N as h,a as N}from"./chunks/framework.7d9b3b51.js";import{u as Ee,a as Ne,b as Ie,c as fe,E as $e}from"./chunks/index.368a1207.js";import{u as Fe,E as ne}from"./chunks/index.7f13ba01.js";import{u as Pe}from"./chunks/index.de6006ef.js";const de=Symbol("buttonGroupContextKey"),je=(a,t)=>{Ee({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},H(()=>a.type==="text"));const e=Me(de,void 0),r=Fe("button"),{form:o}=Ne(),n=Ie(H(()=>e==null?void 0:e.size)),s=fe(),i=y(),u=Be(),g=H(()=>a.type||(e==null?void 0:e.type)||""),C=H(()=>{var _,x,B;return(B=(x=a.autoInsertSpace)!=null?x:(_=r.value)==null?void 0:_.autoInsertSpace)!=null?B:!1}),M=H(()=>a.tag==="button"?{ariaDisabled:s.value||a.loading,disabled:s.value||a.loading,autofocus:a.autofocus,type:a.nativeType}:{}),$=H(()=>{var _;const x=(_=u.default)==null?void 0:_.call(u);if(C.value&&(x==null?void 0:x.length)===1){const B=x[0];if((B==null?void 0:B.type)===Re){const W=B.children;return/^\p{Unified_Ideograph}{2}$/u.test(W.trim())}}return!1});return{_disabled:s,_size:n,_type:g,_ref:i,_props:M,shouldAddSpace:$,handleClick:_=>{a.nativeType==="reset"&&(o==null||o.resetFields()),t("click",_)}}},Oe=["default","primary","success","warning","info","danger","text",""],ze=["button","submit","reset"],Q=pe({size:Pe,disabled:Boolean,type:{type:String,values:Oe,default:""},icon:{type:ae},nativeType:{type:String,values:ze,default:"button"},loading:Boolean,loadingIcon:{type:ae,default:()=>be},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:me([String,Object]),default:"button"}}),De={click:a=>a instanceof MouseEvent};function f(a,t){Ge(a)&&(a="100%");var e=Ue(a);return a=t===360?a:Math.min(t,Math.max(0,parseFloat(a))),e&&(a=parseInt(String(a*t),10)/100),Math.abs(a-t)<1e-6?1:(t===360?a=(a<0?a%t+t:a%t)/parseFloat(String(t)):a=a%t/parseFloat(String(t)),a)}function O(a){return Math.min(1,Math.max(0,a))}function Ge(a){return typeof a=="string"&&a.indexOf(".")!==-1&&parseFloat(a)===1}function Ue(a){return typeof a=="string"&&a.indexOf("%")!==-1}function he(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function z(a){return a<=1?"".concat(Number(a)*100,"%"):a}function T(a){return a.length===1?"0"+a:String(a)}function We(a,t,e){return{r:f(a,255)*255,g:f(t,255)*255,b:f(e,255)*255}}function oe(a,t,e){a=f(a,255),t=f(t,255),e=f(e,255);var r=Math.max(a,t,e),o=Math.min(a,t,e),n=0,s=0,i=(r+o)/2;if(r===o)s=0,n=0;else{var u=r-o;switch(s=i>.5?u/(2-r-o):u/(r+o),r){case a:n=(t-e)/u+(t<e?6:0);break;case t:n=(e-a)/u+2;break;case e:n=(a-t)/u+4;break}n/=6}return{h:n,s,l:i}}function K(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*(6*e):e<1/2?t:e<2/3?a+(t-a)*(2/3-e)*6:a}function qe(a,t,e){var r,o,n;if(a=f(a,360),t=f(t,100),e=f(e,100),t===0)o=e,n=e,r=e;else{var s=e<.5?e*(1+t):e+t-e*t,i=2*e-s;r=K(i,s,a+1/3),o=K(i,s,a),n=K(i,s,a-1/3)}return{r:r*255,g:o*255,b:n*255}}function se(a,t,e){a=f(a,255),t=f(t,255),e=f(e,255);var r=Math.max(a,t,e),o=Math.min(a,t,e),n=0,s=r,i=r-o,u=r===0?0:i/r;if(r===o)n=0;else{switch(r){case a:n=(t-e)/i+(t<e?6:0);break;case t:n=(e-a)/i+2;break;case e:n=(a-t)/i+4;break}n/=6}return{h:n,s:u,v:s}}function Le(a,t,e){a=f(a,360)*6,t=f(t,100),e=f(e,100);var r=Math.floor(a),o=a-r,n=e*(1-t),s=e*(1-o*t),i=e*(1-(1-o)*t),u=r%6,g=[e,s,n,n,i,e][u],C=[i,e,e,s,n,n][u],M=[n,n,i,e,e,s][u];return{r:g*255,g:C*255,b:M*255}}function ie(a,t,e,r){var o=[T(Math.round(a).toString(16)),T(Math.round(t).toString(16)),T(Math.round(e).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Ke(a,t,e,r,o){var n=[T(Math.round(a).toString(16)),T(Math.round(t).toString(16)),T(Math.round(e).toString(16)),T(Xe(r))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function Xe(a){return Math.round(parseFloat(a)*255).toString(16)}function le(a){return m(a)/255}function m(a){return parseInt(a,16)}function Je(a){return{r:a>>16,g:(a&65280)>>8,b:a&255}}var Y={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ze(a){var t={r:0,g:0,b:0},e=1,r=null,o=null,n=null,s=!1,i=!1;return typeof a=="string"&&(a=et(a)),typeof a=="object"&&(S(a.r)&&S(a.g)&&S(a.b)?(t=We(a.r,a.g,a.b),s=!0,i=String(a.r).substr(-1)==="%"?"prgb":"rgb"):S(a.h)&&S(a.s)&&S(a.v)?(r=z(a.s),o=z(a.v),t=Le(a.h,r,o),s=!0,i="hsv"):S(a.h)&&S(a.s)&&S(a.l)&&(r=z(a.s),n=z(a.l),t=qe(a.h,r,n),s=!0,i="hsl"),Object.prototype.hasOwnProperty.call(a,"a")&&(e=a.a)),e=he(e),{ok:s,format:a.format||i,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}var Qe="[-\\+]?\\d+%?",Ye="[-\\+]?\\d*\\.\\d+%?",A="(?:".concat(Ye,")|(?:").concat(Qe,")"),X="[\\s|\\(]+(".concat(A,")[,|\\s]+(").concat(A,")[,|\\s]+(").concat(A,")\\s*\\)?"),J="[\\s|\\(]+(".concat(A,")[,|\\s]+(").concat(A,")[,|\\s]+(").concat(A,")[,|\\s]+(").concat(A,")\\s*\\)?"),k={CSS_UNIT:new RegExp(A),rgb:new RegExp("rgb"+X),rgba:new RegExp("rgba"+J),hsl:new RegExp("hsl"+X),hsla:new RegExp("hsla"+J),hsv:new RegExp("hsv"+X),hsva:new RegExp("hsva"+J),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function et(a){if(a=a.trim().toLowerCase(),a.length===0)return!1;var t=!1;if(Y[a])a=Y[a],t=!0;else if(a==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e=k.rgb.exec(a);return e?{r:e[1],g:e[2],b:e[3]}:(e=k.rgba.exec(a),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=k.hsl.exec(a),e?{h:e[1],s:e[2],l:e[3]}:(e=k.hsla.exec(a),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=k.hsv.exec(a),e?{h:e[1],s:e[2],v:e[3]}:(e=k.hsva.exec(a),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=k.hex8.exec(a),e?{r:m(e[1]),g:m(e[2]),b:m(e[3]),a:le(e[4]),format:t?"name":"hex8"}:(e=k.hex6.exec(a),e?{r:m(e[1]),g:m(e[2]),b:m(e[3]),format:t?"name":"hex"}:(e=k.hex4.exec(a),e?{r:m(e[1]+e[1]),g:m(e[2]+e[2]),b:m(e[3]+e[3]),a:le(e[4]+e[4]),format:t?"name":"hex8"}:(e=k.hex3.exec(a),e?{r:m(e[1]+e[1]),g:m(e[2]+e[2]),b:m(e[3]+e[3]),format:t?"name":"hex"}:!1)))))))))}function S(a){return!!k.CSS_UNIT.exec(String(a))}var tt=function(){function a(t,e){t===void 0&&(t=""),e===void 0&&(e={});var r;if(t instanceof a)return t;typeof t=="number"&&(t=Je(t)),this.originalInput=t;var o=Ze(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=e.format)!==null&&r!==void 0?r:o.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return a.prototype.isDark=function(){return this.getBrightness()<128},a.prototype.isLight=function(){return!this.isDark()},a.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},a.prototype.getLuminance=function(){var t=this.toRgb(),e,r,o,n=t.r/255,s=t.g/255,i=t.b/255;return n<=.03928?e=n/12.92:e=Math.pow((n+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),.2126*e+.7152*r+.0722*o},a.prototype.getAlpha=function(){return this.a},a.prototype.setAlpha=function(t){return this.a=he(t),this.roundA=Math.round(100*this.a)/100,this},a.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},a.prototype.toHsv=function(){var t=se(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},a.prototype.toHsvString=function(){var t=se(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(e,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(e,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},a.prototype.toHsl=function(){var t=oe(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},a.prototype.toHslString=function(){var t=oe(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(e,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(e,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},a.prototype.toHex=function(t){return t===void 0&&(t=!1),ie(this.r,this.g,this.b,t)},a.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},a.prototype.toHex8=function(t){return t===void 0&&(t=!1),Ke(this.r,this.g,this.b,this.a,t)},a.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},a.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},a.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},a.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(e,", ").concat(r,")"):"rgba(".concat(t,", ").concat(e,", ").concat(r,", ").concat(this.roundA,")")},a.prototype.toPercentageRgb=function(){var t=function(e){return"".concat(Math.round(f(e,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},a.prototype.toPercentageRgbString=function(){var t=function(e){return Math.round(f(e,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},a.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+ie(this.r,this.g,this.b,!1),e=0,r=Object.entries(Y);e<r.length;e++){var o=r[e],n=o[0],s=o[1];if(t===s)return n}return!1},a.prototype.toString=function(t){var e=!!t;t=t??this.format;var r=!1,o=this.a<1&&this.a>=0,n=!e&&o&&(t.startsWith("hex")||t==="name");return n?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},a.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},a.prototype.clone=function(){return new a(this.toString())},a.prototype.lighten=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.l+=t/100,e.l=O(e.l),new a(e)},a.prototype.brighten=function(t){t===void 0&&(t=10);var e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new a(e)},a.prototype.darken=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.l-=t/100,e.l=O(e.l),new a(e)},a.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},a.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},a.prototype.desaturate=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.s-=t/100,e.s=O(e.s),new a(e)},a.prototype.saturate=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.s+=t/100,e.s=O(e.s),new a(e)},a.prototype.greyscale=function(){return this.desaturate(100)},a.prototype.spin=function(t){var e=this.toHsl(),r=(e.h+t)%360;return e.h=r<0?360+r:r,new a(e)},a.prototype.mix=function(t,e){e===void 0&&(e=50);var r=this.toRgb(),o=new a(t).toRgb(),n=e/100,s={r:(o.r-r.r)*n+r.r,g:(o.g-r.g)*n+r.g,b:(o.b-r.b)*n+r.b,a:(o.a-r.a)*n+r.a};return new a(s)},a.prototype.analogous=function(t,e){t===void 0&&(t=6),e===void 0&&(e=30);var r=this.toHsl(),o=360/e,n=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,n.push(new a(r));return n},a.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new a(t)},a.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var e=this.toHsv(),r=e.h,o=e.s,n=e.v,s=[],i=1/t;t--;)s.push(new a({h:r,s:o,v:n})),n=(n+i)%1;return s},a.prototype.splitcomplement=function(){var t=this.toHsl(),e=t.h;return[this,new a({h:(e+72)%360,s:t.s,l:t.l}),new a({h:(e+216)%360,s:t.s,l:t.l})]},a.prototype.onBackground=function(t){var e=this.toRgb(),r=new a(t).toRgb(),o=e.a+r.a*(1-e.a);return new a({r:(e.r*e.a+r.r*r.a*(1-e.a))/o,g:(e.g*e.a+r.g*r.a*(1-e.a))/o,b:(e.b*e.a+r.b*r.a*(1-e.a))/o,a:o})},a.prototype.triad=function(){return this.polyad(3)},a.prototype.tetrad=function(){return this.polyad(4)},a.prototype.polyad=function(t){for(var e=this.toHsl(),r=e.h,o=[this],n=360/t,s=1;s<t;s++)o.push(new a({h:(r+s*n)%360,s:e.s,l:e.l}));return o},a.prototype.equals=function(t){return this.toRgbString()===new a(t).toRgbString()},a}();function R(a,t=20){return a.mix("#141414",t).toString()}function at(a){const t=fe(),e=ee("button");return H(()=>{let r={};const o=a.color;if(o){const n=new tt(o),s=a.dark?n.tint(20).toString():R(n,20);if(a.plain)r=e.cssVarBlock({"bg-color":a.dark?R(n,90):n.tint(90).toString(),"text-color":o,"border-color":a.dark?R(n,50):n.tint(50).toString(),"hover-text-color":`var(${e.cssVarName("color-white")})`,"hover-bg-color":o,"hover-border-color":o,"active-bg-color":s,"active-text-color":`var(${e.cssVarName("color-white")})`,"active-border-color":s}),t.value&&(r[e.cssVarBlockName("disabled-bg-color")]=a.dark?R(n,90):n.tint(90).toString(),r[e.cssVarBlockName("disabled-text-color")]=a.dark?R(n,50):n.tint(50).toString(),r[e.cssVarBlockName("disabled-border-color")]=a.dark?R(n,80):n.tint(80).toString());else{const i=a.dark?R(n,30):n.tint(30).toString(),u=n.isDark()?`var(${e.cssVarName("color-white")})`:`var(${e.cssVarName("color-black")})`;if(r=e.cssVarBlock({"bg-color":o,"text-color":u,"border-color":o,"hover-bg-color":i,"hover-text-color":u,"hover-border-color":i,"active-bg-color":s,"active-border-color":s}),t.value){const g=a.dark?R(n,50):n.tint(50).toString();r[e.cssVarBlockName("disabled-bg-color")]=g,r[e.cssVarBlockName("disabled-text-color")]=a.dark?"rgba(255, 255, 255, 0.5)":`var(${e.cssVarName("color-white")})`,r[e.cssVarBlockName("disabled-border-color")]=g}}}return r})}const rt=U({name:"ElButton"}),nt=U({...rt,props:Q,emits:De,setup(a,{expose:t,emit:e}){const r=a,o=at(r),n=ee("button"),{_ref:s,_size:i,_type:u,_disabled:g,_props:C,shouldAddSpace:M,handleClick:$}=je(r,e);return t({ref:s,size:i,type:u,disabled:g,shouldAddSpace:M}),(c,_)=>(p(),P(L(c.tag),Ae({ref_key:"_ref",ref:s},l(C),{class:[l(n).b(),l(n).m(l(u)),l(n).m(l(i)),l(n).is("disabled",l(g)),l(n).is("loading",c.loading),l(n).is("plain",c.plain),l(n).is("round",c.round),l(n).is("circle",c.circle),l(n).is("text",c.text),l(n).is("link",c.link),l(n).is("has-bg",c.bg)],style:l(o),onClick:l($)}),{default:v(()=>[c.loading?(p(),w(ce,{key:0},[c.$slots.loading?D(c.$slots,"loading",{key:0}):(p(),P(l(I),{key:1,class:Z(l(n).is("loading"))},{default:v(()=>[(p(),P(L(c.loadingIcon)))]),_:1},8,["class"]))],64)):c.icon||c.$slots.icon?(p(),P(l(I),{key:1},{default:v(()=>[c.icon?(p(),P(L(c.icon),{key:0})):D(c.$slots,"icon",{key:1})]),_:3})):G("v-if",!0),c.$slots.default?(p(),w("span",{key:2,class:Z({[l(n).em("text","expand")]:l(M)})},[D(c.$slots,"default")],2)):G("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var ot=ue(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const st={size:Q.size,type:Q.type},it=U({name:"ElButtonGroup"}),lt=U({...it,props:st,setup(a){const t=a;Ce(de,He({size:re(t,"size"),type:re(t,"type")}));const e=ee("button");return(r,o)=>(p(),w("div",{class:Z(`${l(e).b("group")}`)},[D(r.$slots,"default")],2))}});var ge=ue(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const E=ye(ot,{ButtonGroup:ge});ke(ge);const ut=["poster"],ct={key:0},ft={key:1},dt={class:"perview"},ht=["src"],gt={class:"perview"},vt=["poster","src"],pt={__name:"VideoCamera",setup(a){const t=y(!1),e=y(),r=y(),o=y(),n=y([]),s=y(),i=y(),u=y(),g=y("/notebook/logo.png");Te(()=>{navigator.mediaDevices.enumerateDevices().then(b=>{b.forEach(function(d){console.log(d.kind+": "+d.label+" id = "+d.deviceId)})})});var C={video:{width:200,height:200,deviceId:"yhx825"}};const M=()=>{navigator.mediaDevices.getUserMedia(C).then(function(b){e.value.srcObject=b,e.value.onloadedmetadata=function(d){e.value.play()}}).catch(function(b){console.log(b.name+": "+b.message)})},$=()=>{e.value.srcObject.getTracks().forEach(b=>{b.stop(),console.log(g.value),e.value.poster=g.value})},c=()=>{t.value?($(),t.value=!1):(M(),t.value=!0)},_=()=>{if(!t.value)return ne.warning("请先打开摄像头在试试");r.value.getContext("2d").drawImage(e.value,0,0,200,200),o.value=r.value.toDataURL("image/png")},x=b=>{if(!t.value){ne.warning("请先开启摄像头");return}if(!u.value&&(u.value=new MediaRecorder(e.value.srcObject)),console.log(u.value.state),u.value.state==="inactive"){console.log("开启 录制"),u.value.start();return}if(u.value.ondataavailable=d=>{console.log(d),d.data&&d.data.size>0&&n.value.push(d.data)},u.value.onstop=d=>{const te=new Blob(n.value,{type:"video/mp4"}),q=URL.createObjectURL(te);if(d==="download"){const F=document.createElement("a");F.href=q,F.download="屏幕录制.mp4",document.body.appendChild(F),F.click(),document.body.removeChild(F)}else console.log(q),i.value=q;B(),t.value=!1},b==="stop"){if(!u.value)return;u.value.stop();return}u.value.state==="recording"?(console.log("暂停 录制"),u.value.pause()):u.value.state==="paused"&&(console.log("继续 录制"),u.value.resume()),console.log(u.value.state)},B=()=>{console.log("关闭"),e.value.srcObject.getTracks().forEach(d=>{d.stop()})},W=()=>{e.value.style.transform==="scaleX(-1)"?e.value.style.transform="scaleX(1)":e.value.style.transform="scaleX(-1)"},j=y(1),ve=()=>{j.value===0?(e.value.style.borderRadius="50%",j.value=1):j.value===1&&(j.value=0,e.value.style.borderRadius="0")};return(b,d)=>(p(),w(ce,null,[V("video",{class:"video",src:"",ref_key:"video",ref:e,poster:g.value},null,8,ut),V("canvas",{ref_key:"canvas",ref:r,height:"200",width:"200",style:{display:"none"}},null,512),h(l(E),{type:"primary",onClick:c},{default:v(()=>[t.value?(p(),w("span",ct,[h(l(I),null,{default:v(()=>[h(l(_e))]),_:1})])):(p(),w("span",ft,[h(l(I),null,{default:v(()=>[h(l(xe))]),_:1})]))]),_:1}),h(l(E),{type:"primary",onClick:W},{default:v(()=>[N("镜像")]),_:1}),h(l(E),{type:"primary",onClick:ve},{default:v(()=>[h(l(I),null,{default:v(()=>[h(l(Se))]),_:1})]),_:1}),h(l(E),{type:"primary",onClick:_},{default:v(()=>[h(l(I),null,{default:v(()=>[h(l(we))]),_:1})]),_:1}),h(l(E),{type:"primary",disabled:t.value!==!0,onClick:x},{default:v(()=>[N("录制状态切换")]),_:1},8,["disabled"]),h(l(E),{type:"primary",disabled:!u.value||t.value!==!0,onClick:d[0]||(d[0]=te=>x("stop"))},{default:v(()=>[N("停止录制")]),_:1},8,["disabled"]),V("div",dt,[N(" 拍照 "),o.value?(p(),w("img",{key:0,class:"img",src:o.value},null,8,ht)):G("",!0)]),V("div",gt,[N("预览录制视频 "),i.value?(p(),w("video",{key:0,class:"video",ref_key:"perviewVideo",ref:s,poster:g.value,controls:"",src:i.value},null,8,vt)):G("",!0)])],64))}},bt=Ve(pt,[["__scopeId","data-v-85d2e11a"]]),mt=V("h1",{id:"摄像头测试用例组件",tabindex:"-1"},[N("摄像头测试用例组件 "),V("a",{class:"header-anchor",href:"#摄像头测试用例组件","aria-label":'Permalink to "摄像头测试用例组件"'},"​")],-1),yt=V("br",null,null,-1),Bt=JSON.parse('{"title":"摄像头测试用例组件","description":"","frontmatter":{},"headers":[],"relativePath":"pages/ComponentsExample/VideoCamera.md","filePath":"pages/ComponentsExample/VideoCamera.md","lastUpdated":1690873091000}'),kt={name:"pages/ComponentsExample/VideoCamera.md"},Rt=Object.assign(kt,{setup(a){return(t,e)=>(p(),w("div",null,[mt,yt,h(l($e),null,{default:v(()=>[h(bt)]),_:1})]))}});export{Bt as __pageData,Rt as default};
