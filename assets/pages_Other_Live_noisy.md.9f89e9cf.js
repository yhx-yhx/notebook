import{_ as e,j as o,k as c,V as d}from"./chunks/framework.497d1fdf.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Other/Live/noisy.md","filePath":"pages/Other/Live/noisy.md","lastUpdated":1701400921000}'),t={name:"pages/Other/Live/noisy.md"},i=d('<blockquote><p>📆 生活的嘈杂 当然 你也可以把它称作 &quot;聒噪&quot;</p></blockquote><h4 id="复盘" tabindex="-1">复盘 <a class="header-anchor" href="#复盘" aria-label="Permalink to &quot;复盘&quot;">​</a></h4><p>⏲️ 2023-11-17</p><p>最近微搭了 智慧公房系统 <code>整体布局</code> <code>主体功能</code> <code>组件拆分</code></p><p>上面提到的组件更多的是 布局组件 基本采用的 flexible 布局；</p><p>组件主要是<code>三分栏</code> 布局， 提取公共的 <code>header </code> <code>content</code> 等;</p><p><code>二次封装menu组件</code> :过程中遇到了一个小坑 [坑点1]<em>后面会提到</em>；</p><p><code>封装水印js</code>:支持<code>font</code> 、<code>横纵布局</code> 小问题不少：<code>动态自定义radio </code> <code>布局宽度 纵横数量 区域位置</code></p><p>这里可以有两种思路：</p><ul><li><code>canvas画布里面 划分成n个区域 找到做点位 绘制</code> 绘制过程 统一函数处理；</li><li><code>在div 分割成多个 child div</code> 将canvas 填入到 div 中来实现 <code>定位需要再canvas 通过 fillTex函数参数来实现 </code></li><li>该说不说挺难算的啊</li></ul><p><code>other small tip</code></p><ul><li><p>freedo 崩溃 至今尚未解决 <code>tmd 谁测谁是大冤种好吧</code>㊙️；</p></li><li><p><code>tree 右键封装</code> 当前的版本 不够灵活；</p><ul><li>大致思路dialog props 传递数组 传入 label event 状态</li><li>show 状态时 click 触发 同时 display:none <code>menubox</code></li><li><code>current version有点鸡肋</code> 可以尝试 <code>自定义指令</code> + <code>render function</code></li></ul></li></ul>',12),a=[i];function l(n,p,s,r,_,u){return o(),c("div",null,a)}const f=e(t,[["render",l]]);export{m as __pageData,f as default};