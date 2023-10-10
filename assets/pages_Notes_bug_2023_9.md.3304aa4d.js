import{_ as e,o as a,c as t,X as i}from"./chunks/framework.0f723ccb.js";const _=JSON.parse('{"title":"2023-9-27","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Notes/bug/2023/9.md","filePath":"pages/Notes/bug/2023/9.md","lastUpdated":1696949003000}'),r={name:"pages/Notes/bug/2023/9.md"},o=i('<h1 id="_2023-9-27" tabindex="-1">2023-9-27 <a class="header-anchor" href="#_2023-9-27" aria-label="Permalink to &quot;2023-9-27&quot;">​</a></h1><h2 id="bug-vitepress-project-build" tabindex="-1">bug vitepress [project build] <a class="header-anchor" href="#bug-vitepress-project-build" aria-label="Permalink to &quot;bug vitepress [project build]&quot;">​</a></h2><h3 id="version-1-0-0-alpha-74" tabindex="-1">version [1.0.0-alpha.74] <a class="header-anchor" href="#version-1-0-0-alpha-74" aria-label="Permalink to &quot;version [1.0.0-alpha.74]&quot;">​</a></h3><h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><ul><li>打包时候出现 <code>vitpress rror: EPERM: operation not permitted</code> 错误字样</li></ul><h3 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h3><ul><li>目前可以通过 <code>管理员权限打包</code></li><li><code>删除 nodemodules</code> 再打包</li><li><a href="https://githubfast.com/vuejs/vitepress/issues/1209" target="_blank" rel="noreferrer">vitepress</a></li></ul><h2 id="bug-ssg-vitepress-window-is-not-defined" tabindex="-1">bug SSG vitepress [window is not defined] <a class="header-anchor" href="#bug-ssg-vitepress-window-is-not-defined" aria-label="Permalink to &quot;bug SSG vitepress [window is not defined]&quot;">​</a></h2><h3 id="问题描述-1" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述-1" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><blockquote><p>在插件 三方依赖 使用了window对象的情况下会发生该错误</p></blockquote><ul><li>driver.js 引入时 发生</li></ul><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><ul><li>1 在 mounted 周期 执行插件导入 例如： <code> import(&#39;driver.js&#39;).then(res =&gt; {})</code></li><li>2 使用 i<wbr>mport.meta.env.SSR 判断是否是服务端渲染</li></ul>',13),s=[o];function l(d,n,h,u,c,p){return a(),t("div",null,s)}const m=e(r,[["render",l]]);export{_ as __pageData,m as default};