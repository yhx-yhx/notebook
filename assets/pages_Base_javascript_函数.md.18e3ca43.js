import{_ as a,o as e,c as t,X as i}from"./chunks/framework.64e72696.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/javascript/函数.md","filePath":"pages/Base/javascript/函数.md","lastUpdated":1692265127000}'),l={name:"pages/Base/javascript/函数.md"},s=i('<h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h3 id="apply-call-bind" tabindex="-1">apply/call/bind <a class="header-anchor" href="#apply-call-bind" aria-label="Permalink to &quot;apply/call/bind&quot;">​</a></h3><ul><li>作用：改变this 指向</li><li>区别： - apply call 改变指向同时执行函数； - bind 仅改变指向不执行函数 - apply 可以传递数组</li></ul><h3 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h3><ul><li>箭头函数 指向外部作用域 ；场景：定时器 、逻辑（内藏函数使用外部对象的this 跨级别使用外部this，若没有直到找见 window 若是严格模式 直接输输出undefined）</li><li>普通函数 谁调用指向谁</li></ul>',5),r=[s];function n(o,c,d,p,_,h){return e(),t("div",null,r)}const m=a(l,[["render",n]]);export{f as __pageData,m as default};
