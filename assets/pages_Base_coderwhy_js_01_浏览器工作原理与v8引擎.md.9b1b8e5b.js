import{_ as a,o as e,c as i,X as t}from"./chunks/framework.5e255872.js";const l="/notebook/assets/image-20230828141958199.9c88ca63.png",r="/notebook/assets/image-20230828143038650.af4babfd.png",o="/notebook/assets/image-20230828144520957.17065834.png",s="/notebook/assets/image-20230828151014150.81936777.png",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/coderwhy/js/01_浏览器工作原理与v8引擎.md","filePath":"pages/Base/coderwhy/js/01_浏览器工作原理与v8引擎.md","lastUpdated":1700062577000}'),c={name:"pages/Base/coderwhy/js/01_浏览器工作原理与v8引擎.md"},n=t('<h3 id="浏览器内核" tabindex="-1">浏览器内核 <a class="header-anchor" href="#浏览器内核" aria-label="Permalink to &quot;浏览器内核&quot;">​</a></h3><ul><li>webkit 苹果基于 KHTML 开发的 开源的 苹果 谷歌之间 使用</li><li>Blink 属于webkit 分支 Google Chrome edge 使用</li></ul><h3 id="浏览器工作原理" tabindex="-1">浏览器工作原理 <a class="header-anchor" href="#浏览器工作原理" aria-label="Permalink to &quot;浏览器工作原理&quot;">​</a></h3><ul><li>地址输入 url</li><li>dns解析url</li><li>遇到link script 标签进行下载</li></ul><h3 id="浏览器渲染" tabindex="-1">浏览器渲染 <a class="header-anchor" href="#浏览器渲染" aria-label="Permalink to &quot;浏览器渲染&quot;">​</a></h3><ul><li>html 解析成为DomTree</li><li>css 解析成cssTree</li><li>两者形成render Tree</li><li>layout （布局）==&gt; painting(绘制)==&gt;渲染</li></ul><h3 id="javascript引擎" tabindex="-1">JavaScript引擎 <a class="header-anchor" href="#javascript引擎" aria-label="Permalink to &quot;JavaScript引擎&quot;">​</a></h3><ul><li>代码通过 引擎（浏览器环境 各种浏览所使用的引擎 node v8）</li><li>常见的引擎 :Chakra 微软开发 iE；JavaScriptCode 苹果开发 webkit中的 js引擎；v8 chrome google 开发</li></ul><h3 id="浏览器内核与javascript引擎关系" tabindex="-1">浏览器内核与JavaScript引擎关系 <a class="header-anchor" href="#浏览器内核与javascript引擎关系" aria-label="Permalink to &quot;浏览器内核与JavaScript引擎关系&quot;">​</a></h3><ul><li>以WebKit为例： <ul><li>WebCore 主要负责 Html 解析布局渲染</li><li>jsCore解析执行JavaScript代码；</li></ul></li></ul><h3 id="v8引擎的原理" tabindex="-1">v8引擎的原理 <a class="header-anchor" href="#v8引擎的原理" aria-label="Permalink to &quot;v8引擎的原理&quot;">​</a></h3><ul><li>v8 是C++编写的 Google 开源 高性能的 javaScript 和 webAssembly引擎，用于chrome和 Node.js</li><li>也可以嵌入到任何的c++应用程序</li><li><img src="'+l+'" alt="image-20230828141958199"></li></ul><p><img src="'+r+'" alt="image-20230828143038650"></p><p><img src="'+o+'" alt="image-20230828144520957"></p><h3 id="javascript执行过程" tabindex="-1">javaScript执行过程 <a class="header-anchor" href="#javascript执行过程" aria-label="Permalink to &quot;javaScript执行过程&quot;">​</a></h3><p><img src="'+s+'" alt="image-20230828151014150"></p><ul><li>使用 var 定义变量时 首先创建一个 GO对象 这个过程是在parseing过程中 创建 window 内置类 声明devar变量 会放在GO里 同时也会放在 VO （作用域变量）</li></ul>',17),_=[n];function h(d,p,m,u,v,g){return e(),i("div",null,_)}const f=a(c,[["render",h]]);export{k as __pageData,f as default};
