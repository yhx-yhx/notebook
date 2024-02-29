import{_ as s,c as n,o as a,a5 as p}from"./chunks/framework.Mt7VO4PB.js";const h=JSON.parse('{"title":"scss","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/Css/Scss/index.md","filePath":"pages/Base/Css/Scss/index.md","lastUpdated":1709195911000}'),e={name:"pages/Base/Css/Scss/index.md"},l=p(`<h1 id="scss" tabindex="-1">scss <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;scss&quot;">​</a></h1><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$color:blue;</span></span>
<span class="line"><span>$width:100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.main{</span></span>
<span class="line"><span>  background:$color;</span></span>
<span class="line"><span>  width:$width*2;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="if-else" tabindex="-1">@if @else <a class="header-anchor" href="#if-else" aria-label="Permalink to &quot;@if @else&quot;">​</a></h2><p><strong>@if条件为字符串</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$isShow:true;</span></span>
<span class="line"><span>$isRed:true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@if($isShow==true){</span></span>
<span class="line"><span>    .main{</span></span>
<span class="line"><span>      background:$color;</span></span>
<span class="line"><span>      width:$width*2;</span></span>
<span class="line"><span>      @if(isRed==true){</span></span>
<span class="line"><span>          color:red</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      @else{</span></span>
<span class="line"><span>          color:blue</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@else{</span></span>
<span class="line"><span>    .main{</span></span>
<span class="line"><span>      background:$color;</span></span>
<span class="line"><span>      width:$width*4;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="for" tabindex="-1">@for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;@for&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 变量$item从1开始不包括6</span></span>
<span class="line"><span>@form $item from 1 to 6{</span></span>
<span class="line"><span>   li:nth-child(#{$item}){</span></span>
<span class="line"><span>       position:absolute;</span></span>
<span class="line"><span>       left:($item  -  1) * 100px;</span></span>
<span class="line"><span>       top:($item - 1)*100px</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> // 变量$item从1开始包括6</span></span>
<span class="line"><span>@form $item from 1 through 6{</span></span>
<span class="line"><span>   li:nth-child(#{$item}){</span></span>
<span class="line"><span>       position:absolute;</span></span>
<span class="line"><span>       left:($item  -  1) * 100px;</span></span>
<span class="line"><span>       top:($item - 1)*100px</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="each" tabindex="-1">@each <a class="header-anchor" href="#each" aria-label="Permalink to &quot;@each&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$color:red,blue,green;</span></span>
<span class="line"><span>@each $item in $colors{</span></span>
<span class="line"><span>    $index:index($colors,$item);</span></span>
<span class="line"><span>    li:nth-child(#{$index}){</span></span>
<span class="line"><span>    background:$item</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="混入-mixin-inlude" tabindex="-1">混入 @mixin @inlude <a class="header-anchor" href="#混入-mixin-inlude" aria-label="Permalink to &quot;混入 @mixin @inlude&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin tran($q,$b:2s){</span></span>
<span class="line"><span>transition：all 1s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.main{</span></span>
<span class="line"><span>@include tran($q,$b)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="嵌套" tabindex="-1">嵌套 <a class="header-anchor" href="#嵌套" aria-label="Permalink to &quot;嵌套&quot;">​</a></h2><p><strong>&amp;伪类</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ul{</span></span>
<span class="line"><span>    &gt;li{</span></span>
<span class="line"><span>        background:red</span></span>
<span class="line"><span>        &amp;:hover{</span></span>
<span class="line"><span>        color:red</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><p><strong>@extend 类名</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.base{</span></span>
<span class="line"><span>width:200px;</span></span>
<span class="line"><span>height:100px;</span></span>
<span class="line"><span>outline:none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.btn_base{</span></span>
<span class="line"><span>  @extend .base;</span></span>
<span class="line"><span>  background-color:red</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h2><p><strong>定制文件</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &quot;./xxxx&quot;</span></span>
<span class="line"><span>​\`\`\` --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,21),i=[l];function r(c,b,t,o,u,d){return a(),n("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
