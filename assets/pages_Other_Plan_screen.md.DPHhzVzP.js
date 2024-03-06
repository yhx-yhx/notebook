import{_ as s,c as n,o as a,a5 as e}from"./chunks/framework.Cyz3vTHn.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Other/Plan/screen.md","filePath":"pages/Other/Plan/screen.md","lastUpdated":1709735205000}'),p={name:"pages/Other/Plan/screen.md"},l=e(`<h2 id="大屏响应式解决方案" tabindex="-1">大屏响应式解决方案 <a class="header-anchor" href="#大屏响应式解决方案" aria-label="Permalink to &quot;大屏响应式解决方案&quot;">​</a></h2><ul><li><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3></li></ul><br><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i postcss-pxtorem autoprefixer amfe-flexible -S</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>postcss-pxtorem：PostCSS的插件，用于将像素单元生成rem单位 autoprefixer：浏览器前缀处理 amfe-flexible：可伸缩布局方案，替代了原先lib-flexible，选用了当前众多浏览器兼容的viewport</p></blockquote><ul><li><h3 id="配置vite-config-ts" tabindex="-1">配置vite.config.ts <a class="header-anchor" href="#配置vite-config-ts" aria-label="Permalink to &quot;配置vite.config.ts&quot;">​</a></h3></li></ul><br><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//引入依赖</span></span>
<span class="line"><span>import autoprefixer from &quot;autoprefixer&quot;</span></span>
<span class="line"><span>import postcsspxtorem from &quot;postcss-pxtorem&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>//配置适配方案</span></span>
<span class="line"><span>css: {</span></span>
<span class="line"><span>  postcss: {</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>      autoprefixer({</span></span>
<span class="line"><span>        overrideBrowserslist: [</span></span>
<span class="line"><span>          &quot;Android 4.1&quot;,</span></span>
<span class="line"><span>          &quot;iOS 7.1&quot;,</span></span>
<span class="line"><span>          &quot;Chrome &gt; 31&quot;,</span></span>
<span class="line"><span>          &quot;ff &gt; 31&quot;,</span></span>
<span class="line"><span>          &quot;ie &gt;= 8&quot;,</span></span>
<span class="line"><span>          &quot;last 10 versions&quot;, // 所有主流浏览器最近10版本用</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        grid: true</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      postcsspxtorem({</span></span>
<span class="line"><span>        rootValue: 192, // 设计稿宽度的1/ 10 例如设计稿按照 1920设计 此处就为192</span></span>
<span class="line"><span>        propList: [&quot;*&quot;, &quot;!border&quot;], // 除 border 外所有px 转 rem</span></span>
<span class="line"><span>        selectorBlackList: [&quot;.el-&quot;], // 过滤掉.el-开头的class，不进行rem转换</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ul><li><h3 id="导入依赖" tabindex="-1">导入依赖 <a class="header-anchor" href="#导入依赖" aria-label="Permalink to &quot;导入依赖&quot;">​</a></h3></li></ul><br><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &quot;amfe-flexible/index.js&quot;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><br><blockquote><p><code>That&#39;s the end of sharing</code></p></blockquote>`,13),i=[l];function r(t,o,c,u,b,d){return a(),n("div",null,i)}const q=s(p,[["render",r]]);export{h as __pageData,q as default};
