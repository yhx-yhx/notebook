import{a as _,e as O,i as d,c as v,t as g,g as l}from"./get.nfDng5OV.js";var c=function(){try{var r=_(Object,"defineProperty");return r({},"",{}),r}catch{}}(),P=9007199254740991,m=/^(?:0|[1-9]\d*)$/;function x(r,t){var n=typeof r;return t=t??P,!!t&&(n=="number"||n!="symbol"&&m.test(r))&&r>-1&&r%1==0&&r<t}function I(r,t,n){t=="__proto__"&&c?c(r,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):r[t]=n}var A=Object.prototype,E=A.hasOwnProperty;function y(r,t,n){var e=r[t];(!(E.call(r,t)&&O(e,n))||n===void 0&&!(t in r))&&I(r,t,n)}function N(r,t,n,e){if(!d(r))return r;t=v(t,r);for(var a=-1,u=t.length,p=u-1,i=r;i!=null&&++a<u;){var s=g(t[a]),f=n;if(s==="__proto__"||s==="constructor"||s==="prototype")return r;if(a!=p){var o=i[s];f=e?e(o,s,i):void 0,f===void 0&&(f=d(o)?o:x(t[a+1])?[]:{})}y(i,s,f),i=i[s]}return r}function S(r,t,n){return r==null?r:N(r,t,n)}const q=r=>Object.keys(r),w=r=>Object.entries(r),F=(r,t,n)=>({get value(){return l(r,t,n)},set value(e){S(r,t,e)}});export{y as a,I as b,N as c,c as d,w as e,F as g,x as i,q as k};
