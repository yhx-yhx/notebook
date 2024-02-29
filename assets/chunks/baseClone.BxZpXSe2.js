import{c as T,k as F,a as j,g as C,s as _,b as N,d as K,e as R,f as E,h as v,j as p,n as u,l as B,m as q,o as W,p as Y,q as H,S as J,r as Q}from"./isEqual.CTUePyao.js";import{a as V}from"./objects.udGwCpTy.js";import{S as $,d as x,i as X,j as Z}from"./get.nfDng5OV.js";function z(r,e){for(var n=-1,o=r==null?0:r.length;++n<o&&e(r[n],n,r)!==!1;);return r}function k(r,e){return r&&T(e,F(e),r)}function rr(r,e){return r&&T(e,j(e),r)}function er(r,e){return T(r,C(r),e)}var tr=Object.getOwnPropertySymbols,L=tr?function(r){for(var e=[];r;)N(e,C(r)),r=K(r);return e}:_;function nr(r,e){return T(r,L(r),e)}function ar(r){return R(r,j,L)}var or=Object.prototype,sr=or.hasOwnProperty;function cr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&sr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function ir(r,e){var n=e?E(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var fr=/\w*$/;function gr(r){var e=new r.constructor(r.source,fr.exec(r));return e.lastIndex=r.lastIndex,e}var O=$?$.prototype:void 0,w=O?O.valueOf:void 0;function br(r){return w?Object(w.call(r)):{}}var yr="[object Boolean]",ur="[object Date]",Tr="[object Map]",lr="[object Number]",jr="[object RegExp]",pr="[object Set]",Ar="[object String]",dr="[object Symbol]",Sr="[object ArrayBuffer]",mr="[object DataView]",$r="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Ir="[object Int16Array]",hr="[object Int32Array]",Fr="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Er="[object Uint16Array]",Br="[object Uint32Array]";function xr(r,e,n){var o=r.constructor;switch(e){case Sr:return E(r);case yr:case ur:return new o(+r);case mr:return ir(r,n);case $r:case Or:case wr:case Ir:case hr:case Fr:case Cr:case Er:case Br:return v(r,n);case Tr:return new o;case lr:case Ar:return new o(r);case jr:return gr(r);case pr:return new o;case dr:return br(r)}}var Lr="[object Map]";function Mr(r){return x(r)&&p(r)==Lr}var I=u&&u.isMap,Ur=I?B(I):Mr,Pr="[object Set]";function Dr(r){return x(r)&&p(r)==Pr}var h=u&&u.isSet,Gr=h?B(h):Dr,_r=1,Nr=2,Kr=4,M="[object Arguments]",Rr="[object Array]",vr="[object Boolean]",qr="[object Date]",Wr="[object Error]",U="[object Function]",Yr="[object GeneratorFunction]",Hr="[object Map]",Jr="[object Number]",P="[object Object]",Qr="[object RegExp]",Vr="[object Set]",Xr="[object String]",Zr="[object Symbol]",zr="[object WeakMap]",kr="[object ArrayBuffer]",re="[object DataView]",ee="[object Float32Array]",te="[object Float64Array]",ne="[object Int8Array]",ae="[object Int16Array]",oe="[object Int32Array]",se="[object Uint8Array]",ce="[object Uint8ClampedArray]",ie="[object Uint16Array]",fe="[object Uint32Array]",t={};t[M]=t[Rr]=t[kr]=t[re]=t[vr]=t[qr]=t[ee]=t[te]=t[ne]=t[ae]=t[oe]=t[Hr]=t[Jr]=t[P]=t[Qr]=t[Vr]=t[Xr]=t[Zr]=t[se]=t[ce]=t[ie]=t[fe]=!0;t[Wr]=t[U]=t[zr]=!1;function l(r,e,n,o,g,s){var a,b=e&_r,y=e&Nr,D=e&Kr;if(n&&(a=g?n(r,o,g,s):n(r)),a!==void 0)return a;if(!X(r))return r;var A=Z(r);if(A){if(a=cr(r),!b)return q(r,a)}else{var f=p(r),d=f==U||f==Yr;if(W(r))return Y(r,b);if(f==P||f==M||d&&!g){if(a=y||d?{}:H(r),!b)return y?nr(r,rr(a,r)):er(r,k(a,r))}else{if(!t[f])return g?r:{};a=xr(r,f,b)}}s||(s=new J);var S=s.get(r);if(S)return S;s.set(r,a),Gr(r)?r.forEach(function(c){a.add(l(c,e,n,c,r,s))}):Ur(r)&&r.forEach(function(c,i){a.set(i,l(c,e,n,i,r,s))});var G=D?y?ar:Q:y?j:F,m=A?void 0:G(r);return z(m||r,function(c,i){m&&(i=c,c=r[i]),V(a,i,l(c,e,n,i,r,s))}),a}export{l as b};
