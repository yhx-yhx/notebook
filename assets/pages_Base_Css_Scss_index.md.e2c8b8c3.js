import{_ as s,j as n,k as a,V as l}from"./chunks/framework.8d6cb2c0.js";const d=JSON.parse('{"title":"scss","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/Css/Scss/index.md","filePath":"pages/Base/Css/Scss/index.md","lastUpdated":1701767415000}'),e={name:"pages/Base/Css/Scss/index.md"},p=l(`<h1 id="scss" tabindex="-1">scss <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;scss&quot;">​</a></h1><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$color:blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">$width:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.main{</span></span>
<span class="line"><span style="color:#A6ACCD;">  background:$color;</span></span>
<span class="line"><span style="color:#A6ACCD;">  width:$width*2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="if-else" tabindex="-1">@if @else <a class="header-anchor" href="#if-else" aria-label="Permalink to &quot;@if @else&quot;">​</a></h2><p><strong>@if条件为字符串</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$isShow:true;</span></span>
<span class="line"><span style="color:#A6ACCD;">$isRed:true;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@if($isShow==true){</span></span>
<span class="line"><span style="color:#A6ACCD;">    .main{</span></span>
<span class="line"><span style="color:#A6ACCD;">      background:$color;</span></span>
<span class="line"><span style="color:#A6ACCD;">      width:$width*2;</span></span>
<span class="line"><span style="color:#A6ACCD;">      @if(isRed==true){</span></span>
<span class="line"><span style="color:#A6ACCD;">          color:red</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      @else{</span></span>
<span class="line"><span style="color:#A6ACCD;">          color:blue</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@else{</span></span>
<span class="line"><span style="color:#A6ACCD;">    .main{</span></span>
<span class="line"><span style="color:#A6ACCD;">      background:$color;</span></span>
<span class="line"><span style="color:#A6ACCD;">      width:$width*4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="for" tabindex="-1">@for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;@for&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 变量$item从1开始不包括6</span></span>
<span class="line"><span style="color:#A6ACCD;">@form $item from 1 to 6{</span></span>
<span class="line"><span style="color:#A6ACCD;">   li:nth-child(#{$item}){</span></span>
<span class="line"><span style="color:#A6ACCD;">       position:absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">       left:($item  -  1) * 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">       top:($item - 1)*100px</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> // 变量$item从1开始包括6</span></span>
<span class="line"><span style="color:#A6ACCD;">@form $item from 1 through 6{</span></span>
<span class="line"><span style="color:#A6ACCD;">   li:nth-child(#{$item}){</span></span>
<span class="line"><span style="color:#A6ACCD;">       position:absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">       left:($item  -  1) * 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">       top:($item - 1)*100px</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="each" tabindex="-1">@each <a class="header-anchor" href="#each" aria-label="Permalink to &quot;@each&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$color:red,blue,green;</span></span>
<span class="line"><span style="color:#A6ACCD;">@each $item in $colors{</span></span>
<span class="line"><span style="color:#A6ACCD;">    $index:index($colors,$item);</span></span>
<span class="line"><span style="color:#A6ACCD;">    li:nth-child(#{$index}){</span></span>
<span class="line"><span style="color:#A6ACCD;">    background:$item</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="混入-mixin-inlude" tabindex="-1">混入 @mixin @inlude <a class="header-anchor" href="#混入-mixin-inlude" aria-label="Permalink to &quot;混入 @mixin @inlude&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@mixin tran($q,$b:2s){</span></span>
<span class="line"><span style="color:#A6ACCD;">transition：all 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.main{</span></span>
<span class="line"><span style="color:#A6ACCD;">@include tran($q,$b)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="嵌套" tabindex="-1">嵌套 <a class="header-anchor" href="#嵌套" aria-label="Permalink to &quot;嵌套&quot;">​</a></h2><p><strong>&amp;伪类</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ul{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;li{</span></span>
<span class="line"><span style="color:#A6ACCD;">        background:red</span></span>
<span class="line"><span style="color:#A6ACCD;">        &amp;:hover{</span></span>
<span class="line"><span style="color:#A6ACCD;">        color:red</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><p><strong>@extend 类名</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.base{</span></span>
<span class="line"><span style="color:#A6ACCD;">width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">outline:none;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.btn_base{</span></span>
<span class="line"><span style="color:#A6ACCD;">  @extend .base;</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color:red</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h2><p><strong>定制文件</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &quot;./xxxx&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">​\`\`\` --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,21),r=[p];function i(c,o,t,b,C,u){return n(),a("div",null,r)}const A=s(e,[["render",i]]);export{d as __pageData,A as default};
