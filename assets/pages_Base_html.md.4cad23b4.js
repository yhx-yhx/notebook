import{_ as a,o as s,c as n,V as l}from"./chunks/framework.b0d887d5.js";const y=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/html.md"}'),e={name:"pages/Base/html.md"},t=l(`<blockquote><h2 id="html-mdn" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank" rel="noreferrer">HTML MDN</a> <a class="header-anchor" href="#html-mdn" aria-label="Permalink to &quot;[HTML MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)&quot;">​</a></h2></blockquote><h1 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h1><h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">标签</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">DOCTYPE</td><td style="text-align:center;">声明为 HTML 文档</td></tr><tr><td style="text-align:left;">html</td><td style="text-align:center;">lang:网页的语言，如 en/zh 等,非必填选项</td></tr><tr><td style="text-align:left;">head</td><td style="text-align:center;">文档说明部分，对搜索引擎提供信息或加载 CSS、JS 等</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:center;">html标题</td></tr><tr><td style="text-align:left;">keyword</td><td style="text-align:center;">声明关键词</td></tr><tr><td style="text-align:left;">description</td><td style="text-align:center;">声明html页面信息描述</td></tr><tr><td style="text-align:left;">body</td><td style="text-align:center;">html主体内容</td></tr><tr><td style="text-align:left;">meta</td><td style="text-align:center;">声明元信息（信息配置标识）<a href="https://www.runoob.com/tags/tag-meta.html" target="_blank" rel="noreferrer">更多</a></td></tr></tbody></table><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="页面结构" tabindex="-1">页面结构 <a class="header-anchor" href="#页面结构" aria-label="Permalink to &quot;页面结构&quot;">​</a></h2><h3 id="标题标签h1-h6" tabindex="-1">标题标签h1-h6 <a class="header-anchor" href="#标题标签h1-h6" aria-label="Permalink to &quot;标题标签h1-h6&quot;">​</a></h3><p>标签说明：h1 - h6 标签被用来定义 HTML 标题。</p><p><strong>h1定义重要等级最高的标题。h6 定义重要等级最低的标题</strong></p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是h1标签</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是h2标签</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是h3标签</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是h4标签</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h5</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是h5标签</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h5</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是h6标签</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h6</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="语义化标签" tabindex="-1">语义化标签 <a class="header-anchor" href="#语义化标签" aria-label="Permalink to &quot;语义化标签&quot;">​</a></h3><p><code>语义化标签 主要是有利于编码阅读 最主要的是为了 更好的seo</code></p><h4 id="页眉页脚" tabindex="-1">页眉页脚 <a class="header-anchor" href="#页眉页脚" aria-label="Permalink to &quot;页眉页脚&quot;">​</a></h4><p>header footer</p><h4 id="头部区域" tabindex="-1">头部区域 <a class="header-anchor" href="#头部区域" aria-label="Permalink to &quot;头部区域&quot;">​</a></h4><p>header</p><h4 id="导航区域" tabindex="-1">导航区域 <a class="header-anchor" href="#导航区域" aria-label="Permalink to &quot;导航区域&quot;">​</a></h4><p>nav</p><h4 id="主要区域" tabindex="-1">主要区域 <a class="header-anchor" href="#主要区域" aria-label="Permalink to &quot;主要区域&quot;">​</a></h4><p>main</p><h4 id="内容区域" tabindex="-1">内容区域 <a class="header-anchor" href="#内容区域" aria-label="Permalink to &quot;内容区域&quot;">​</a></h4><p>article</p><h4 id="区块定义" tabindex="-1">区块定义 <a class="header-anchor" href="#区块定义" aria-label="Permalink to &quot;区块定义&quot;">​</a></h4><p>section</p><h4 id="附加内容区域" tabindex="-1">附加内容区域 <a class="header-anchor" href="#附加内容区域" aria-label="Permalink to &quot;附加内容区域&quot;">​</a></h4><p>aside</p><h2 id="form表单" tabindex="-1">form表单 <a class="header-anchor" href="#form表单" aria-label="Permalink to &quot;form表单&quot;">​</a></h2><h3 id="input" tabindex="-1">input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;input&quot;">​</a></h3><p><code>type 支持类型 button checkbox color date datetime-loacl email file hidden(提交隐藏信息) image month number password radio range reset search submit tel text time url week</code></p><h2 id="块级元素" tabindex="-1">块级元素 <a class="header-anchor" href="#块级元素" aria-label="Permalink to &quot;块级元素&quot;">​</a></h2><p><code>h div ul li dl dd dt form header hr p ol pre section aside form footer table 等</code></p><h2 id="行内元素" tabindex="-1">行内元素 <a class="header-anchor" href="#行内元素" aria-label="Permalink to &quot;行内元素&quot;">​</a></h2><p><code>span label select input img a 等</code></p><p><code>上述作为 区分 无非就是 人为规定的遵循的标准 浏览器厂商 以 display:block; or display:inline-block</code></p><h2 id="盒子模型" tabindex="-1">盒子模型 <a class="header-anchor" href="#盒子模型" aria-label="Permalink to &quot;盒子模型&quot;">​</a></h2><h3 id="标准盒子" tabindex="-1">标准盒子 <a class="header-anchor" href="#标准盒子" aria-label="Permalink to &quot;标准盒子&quot;">​</a></h3><p>width(content) box-sizing :content-box;</p><h3 id="怪异盒子" tabindex="-1">怪异盒子 <a class="header-anchor" href="#怪异盒子" aria-label="Permalink to &quot;怪异盒子&quot;">​</a></h3><p>border + padding + content = width box-sizing:border-box;</p>`,39),o=[t];function p(r,c,i,h,d,D){return s(),n("div",null,o)}const b=a(e,[["render",p]]);export{y as __pageData,b as default};