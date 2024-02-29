import{_ as i,c as a,o as l,a5 as e}from"./chunks/framework.Mt7VO4PB.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/coderwhy/vue/index.md","filePath":"pages/Base/coderwhy/vue/index.md","lastUpdated":1709195911000}'),s={name:"pages/Base/coderwhy/vue/index.md"},n=e(`<h2 id="一般指令" tabindex="-1">一般指令 <a class="header-anchor" href="#一般指令" aria-label="Permalink to &quot;一般指令&quot;">​</a></h2><h3 id="v-once" tabindex="-1">v-once <a class="header-anchor" href="#v-once" aria-label="Permalink to &quot;v-once&quot;">​</a></h3><ul><li>只渲染 一次</li><li>当 有子集时 子集也是仅仅渲染 一次</li><li>该指令可以被用作 性能优化 “没遇见过场景”</li></ul><h3 id="v-pre" tabindex="-1">v-pre <a class="header-anchor" href="#v-pre" aria-label="Permalink to &quot;v-pre&quot;">​</a></h3><ul><li>相当于 原生的 pre 标签</li><li>跳过编译 直接将被包裹的模板 渲染到页面上</li></ul><h3 id="v-cloak" tabindex="-1">v-cloak <a class="header-anchor" href="#v-cloak" aria-label="Permalink to &quot;v-cloak&quot;">​</a></h3><ul><li>主要是 为了避免 模板语法 ssr 下的渲染问题 大括号语法 尚未编译渲染在页面上</li><li>原理 再dom 上架了 <code>class {display：none}</code></li></ul><h3 id="v-bind" tabindex="-1">v-bind <a class="header-anchor" href="#v-bind" aria-label="Permalink to &quot;v-bind&quot;">​</a></h3><ul><li>简写 :</li><li>动态绑定属性 ： <code>:[name]=&quot;value&quot; 属性名称以及 值 都在 data中取值</code></li></ul><h2 id="v-on" tabindex="-1">v-on <a class="header-anchor" href="#v-on" aria-label="Permalink to &quot;v-on&quot;">​</a></h2><ul><li><p>简称 @</p></li><li><p>修饰符 .</p></li></ul><blockquote><ul><li><p>stop 阻止事件冒泡 调用 event.stopPropagation() 事件冒泡 子里向外</p></li><li><p>prevent 阻止默认事件 调用 event.preventDefault()</p></li><li><p>capture 添加事件监听器 使用 capture 事件捕获 在外向里 （当然也可以理解 为 捕获的优先级 是高于 冒泡的）</p></li><li><p>self 当触发 绑定元素 才会触发 事件</p></li><li><p>{keyAlias} 仅当事件 从特定的 建触发 才会被触发回调 例<code>@click.enter=&quot;test&quot;</code> 当键盘按下 enter 会被触发</p></li><li><p>once 只触发一次回调</p></li><li><p>left 只当鼠标 左键可以触发回调</p></li><li><p>right 只当鼠标右键 可以触发回调</p></li><li><p>middle 只当触发 鼠标中间键 时 触发回调</p></li><li><p>passive 一般用于 触摸事件的监听器 用来改善 移动端的滚屏性能</p></li></ul></blockquote><h3 id="v-if-v-show" tabindex="-1">v-if v-show <a class="header-anchor" href="#v-if-v-show" aria-label="Permalink to &quot;v-if  v-show&quot;">​</a></h3><ul><li>区别 v-if频繁切换 开销比较大 频繁切换 场景一般 用 v-show来实现 v-show 不能写在 template上</li><li>v-show diplay none</li><li>v-if是将 元素内容直接销毁的</li></ul><h3 id="v-for" tabindex="-1">v-for <a class="header-anchor" href="#v-for" aria-label="Permalink to &quot;v-for&quot;">​</a></h3><ul><li><p>支持对象</p></li><li><p><code>v-for =&quot;(value,key,index) in {name:&#39;uuuu&#39;,age=&#39;23&#39;}&quot;</code></p></li><li><p>渲染结果 <code>uuuu name 0;23 age 1</code></p></li></ul><h3 id="数组检测更新" tabindex="-1">数组检测更新 <a class="header-anchor" href="#数组检测更新" aria-label="Permalink to &quot;数组检测更新&quot;">​</a></h3><p>简而言之 就是 vue 将 pop push unshift shift sort reverse splice 做了处理（重写）</p><p>对于 filter concat slice 生成新的 数组 不改变原来数组</p><h3 id="diff算法" tabindex="-1">diff算法 <a class="header-anchor" href="#diff算法" aria-label="Permalink to &quot;diff算法&quot;">​</a></h3><h3 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h3><ul><li>与methods 最大的区别在于 缓存 computed 是有缓存，当数据源不变的情况下 computed getter 不会再次被触发</li><li>getter setter 改变getter 数据源 达到改变 computed 的意图</li></ul><h2 id="vue的基本语法" tabindex="-1">vue的基本语法 <a class="header-anchor" href="#vue的基本语法" aria-label="Permalink to &quot;vue的基本语法&quot;">​</a></h2><h3 id="简单聊几句" tabindex="-1">简单聊几句 <a class="header-anchor" href="#简单聊几句" aria-label="Permalink to &quot;简单聊几句&quot;">​</a></h3><ul><li>vue3 组合式 api 更接近于 原生JavaScript 开发</li></ul><h3 id="侦听器-watch" tabindex="-1">侦听器 watch <a class="header-anchor" href="#侦听器-watch" aria-label="Permalink to &quot;侦听器 watch&quot;">​</a></h3><ul><li>监听 数据变化达到 想要的 效果</li><li>deep 内部变化 深层监听 <code>deep：true内部变化 也会触发回调</code></li><li>immediate 立即出发 无论是否有数据变化 都会立即执行一次</li><li>另一种 api $watch 第一个参数监听的源 第二个参数 监听的回调 第三个参数 配置项 deep immediate</li></ul><p><em>small tips</em> 巧用 button 来达到 意想不到的 效果</p><h3 id="v-model基本用法" tabindex="-1">v-model基本用法 <a class="header-anchor" href="#v-model基本用法" aria-label="Permalink to &quot;v-model基本用法&quot;">​</a></h3><ul><li>用于双向绑定数据源</li><li>本质 是 @input 与 ：value 语法糖</li><li>修饰符 <code>lazy </code> 默认情况下 绑定的 是 @input 加上修饰符后 @change 事件 只有 enter 提交时才会触发</li><li>修饰 number 将 string 转换为 number 类型</li><li>修饰符 trim 去除首尾空格</li></ul><h3 id="组件开发基础学习" tabindex="-1">组件开发基础学习 <a class="header-anchor" href="#组件开发基础学习" aria-label="Permalink to &quot;组件开发基础学习&quot;">​</a></h3><blockquote><p>整个大前端的开发 都是组件的天下 三大框架 flutter uniapp 移动端 小程序 都在采用组件开发的 思想；</p><p>学习组件化是学习它的思想 ，每个框架 或者是平台 实现的方式不同，但思想都是一样的。</p></blockquote><h3 id="什么是组件" tabindex="-1">什么是组件 <a class="header-anchor" href="#什么是组件" aria-label="Permalink to &quot;什么是组件&quot;">​</a></h3><blockquote><p>开发过程中 需要大规模重复使用的 结构 代码 封装成 一个 轮子（提到的轮子 下面 均可以理解为组件）；化繁为简 将复杂的代码逻辑 封装起来 通过传递数据 展现 定制效果；</p></blockquote><h3 id="注册全局组件" tabindex="-1">注册全局组件 <a class="header-anchor" href="#注册全局组件" aria-label="Permalink to &quot;注册全局组件&quot;">​</a></h3><blockquote><p>顾名思义 全局都可以使用的组件</p><p>组件 ：全局组件、局部组件</p><p>开发中更多的是注册局部组件 通知类 弹出层 反复使用的 可以作为 全局组件 看个人使用习惯</p></blockquote><ul><li>全局注册 在main.js 中 引入组件 app.component(&#39;组件名&#39;，导入的组件)</li><li>局部注册在 components 属性中声明 规范而已</li></ul><h3 id="如何支持-sfc" tabindex="-1">如何支持 sfc <a class="header-anchor" href="#如何支持-sfc" aria-label="Permalink to &quot;如何支持 sfc&quot;">​</a></h3><p>使用打包工具 vite rollup webpack 来实现</p><h2 id="组件之间的通信" tabindex="-1">组件之间的通信 <a class="header-anchor" href="#组件之间的通信" aria-label="Permalink to &quot;组件之间的通信&quot;">​</a></h2><ul><li>拆分成多个 view 页面引入到</li></ul><blockquote><p><code>于2023年5月25日22:19:18</code></p></blockquote><h3 id="父组件传递给子组件" tabindex="-1">父组件传递给子组件 <a class="header-anchor" href="#父组件传递给子组件" aria-label="Permalink to &quot;父组件传递给子组件&quot;">​</a></h3><ul><li>props来实现 通过父组件 绑定属性（字符串数组对象） 子组件接收 可以指定类型 默认值 是否必填 等</li><li>类型 String Boolean Number Function Array Date Object Symbol</li><li>多个 可能的 类型 type:[Number,String]</li><li>required true 该props 为必填项</li><li>default 带默认值的 props</li></ul><h4 id="非prop的属性继承-attribute" tabindex="-1">非prop的属性继承 Attribute <a class="header-anchor" href="#非prop的属性继承-attribute" aria-label="Permalink to &quot;非prop的属性继承 Attribute&quot;">​</a></h4><ul><li>该属性 没有被 props emit 定义</li><li>常见类型class style id</li><li>默认会将 属性自动添加到 根节点</li><li><code>禁止</code>继承的方式 在组件中设置 inheritAttrs：false</li><li>一般 禁用的情况 是为了 通过 $attr 在非根节点 来使用 某些属性</li><li>多个根节点 没有显示 声明 会警告</li></ul><h3 id="子组件-传递给父组件" tabindex="-1">子组件 传递给父组件 <a class="header-anchor" href="#子组件-传递给父组件" aria-label="Permalink to &quot;子组件 传递给父组件&quot;">​</a></h3><ul><li>通过 自定义事件来实现 绑定事件 子组件 传值 父组件存储</li></ul><h3 id="非父子组件-的相互通信" tabindex="-1">非父子组件 的相互通信 <a class="header-anchor" href="#非父子组件-的相互通信" aria-label="Permalink to &quot;非父子组件 的相互通信&quot;">​</a></h3><ul><li>一般用在无论多深层 多层嵌套关系的组件</li><li>我基本没用过</li><li>父级传递 子集接收</li><li>将 数据变成响应式的 可以通过 computed 来 获取</li></ul><h3 id="全局事件总线" tabindex="-1">全局事件总线 <a class="header-anchor" href="#全局事件总线" aria-label="Permalink to &quot;全局事件总线&quot;">​</a></h3><blockquote><p>vue3在实例中移除了$on $off $once这些方法</p></blockquote><ul><li>官方推荐 一些库 例如 mitt或 tiny-emitter</li></ul><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><ul><li>slot 默认插槽 具名插槽</li></ul><h3 id="v-bind-1" tabindex="-1">v-bind <a class="header-anchor" href="#v-bind-1" aria-label="Permalink to &quot;v-bind&quot;">​</a></h3><ul><li>动态绑定数据</li><li>:[key]=&quot;value&quot;</li><li>绑定属性 v-bind={name:&#39;12&#39;,value:34} （）也可以（：=“{name:&#39;12&#39;,value:34}”） 相当于 ：name =“12” ：value=&quot;34&quot;</li><li>高级检索 很方便</li></ul><h3 id="v-on-1" tabindex="-1">v-on <a class="header-anchor" href="#v-on-1" aria-label="Permalink to &quot;v-on&quot;">​</a></h3><ul><li>简：@</li><li>v-on={click:click,mouseover:mouseover} 绑定对象</li></ul><h3 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;key&quot;">​</a></h3><ul><li>头遍历 key</li><li>尾遍历 key</li><li>比对 传空patch（null） 挂载到页面</li><li>key 作为 索引 比较 尽可能 将</li><li>不使用key 最大程度 尽可能复用相同类型元素</li><li>使用 拿旧的vnode</li><li>提升性能</li></ul><h2 id="watch" tabindex="-1">$watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;$watch&quot;">​</a></h2><p>监听$watch 可以接收 作为函数 来进行 取消监听</p><h3 id="对象的引用-指针-的深浅拷贝" tabindex="-1">对象的引用（指针）的深浅拷贝 <a class="header-anchor" href="#对象的引用-指针-的深浅拷贝" aria-label="Permalink to &quot;对象的引用（指针）的深浅拷贝&quot;">​</a></h3><ul><li>对象浅拷贝(拷贝表层数据) Object.assign({},info) === [... info]</li><li>深拷贝 JSON.parse(JSON.stringfy(obj))</li><li>loadsh 常用的方法仓库实现</li><li>_.cloneDeep() 防抖节流</li></ul><h3 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-label="Permalink to &quot;v-model&quot;">​</a></h3><ul><li>@input value</li><li>.lazy @change value</li></ul><h2 id="webpack基础" tabindex="-1">webpack基础 <a class="header-anchor" href="#webpack基础" aria-label="Permalink to &quot;webpack基础&quot;">​</a></h2><ul><li>npm init -y <code>后面的选项 默认yes</code></li><li>npm i -D 开发依赖 -S 生产依赖</li><li>局部 npx webpack 局部使用</li><li>在package 配置 script ：{build:&#39;webpack&#39;}<code>默认在局部找</code></li><li>--entry 入口文件 出口--output-path</li><li>or webpack.config.js ;</li><li>cmj modules.export = { entry:&#39;/xxx&#39;,output:&#39;xxx<code>绝对路径</code>&#39;}</li><li>output.filename:&#39;文件名称&#39;</li><li>配置 --config 对<code>webpack.config.js 更改文件名称</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path= require(&#39;path&#39;);</span></span>
<span class="line"><span>path :path.resolve(__dirname,&#39;///**&#39;)</span></span>
<span class="line"><span>/*__dirname 获取当前文件夹所在路径 ；后面的参数 为了路径拼接*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="webpack依赖" tabindex="-1">webpack依赖 <a class="header-anchor" href="#webpack依赖" aria-label="Permalink to &quot;webpack依赖&quot;">​</a></h3><ul><li><p>配置入口文件 默认<code>src/main.js</code></p></li><li><p>使用了才会被打包</p></li><li><p>根据不同 的文件类型 使用不同的loader 来解析</p></li><li><p><code>css loader</code> npm i css-loader</p><ul><li><p>内联 <code>在文件内部 import &#39;css-loader!css.css&#39;</code></p></li><li><p>webpack.config.js</p></li><li><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`module.rules:[{test:/\\.css$/,//正则 表达式,loader:&#39;css-loader&#39;/,user:[loader:&#39;css-loader&#39;]] \`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p>style-loader npm i style-loader</p><ul><li>user:[&quot;style-loader&quot;,&quot;css-loader&quot;] <code>从后向前执行</code>没有提取操作 仅仅融合到html</li></ul></li><li><p>处理 less文件 npm i less less-loader</p><ul><li>user:[&quot;less-loader&quot;,&quot;style-loader&quot;,&quot;css-loader&quot;]</li><li><code>npm i less</code> 使用lessc 将less转变成 css</li></ul></li><li><p>PostCss 工具</p><ul><li>postcss-loader postcss</li><li>插件 autoprefixer <code>自动给浏览器加前缀</code></li><li>user:[&quot;less-loader&quot;,&quot;style-loader&quot;,{loader:&quot;postcss-loader&quot;,options:{postcssOptions:{plugins:[require(&#39;autoprefixer&#39;)}]}}]</li><li>plugins:[&quot;autoprefixer&quot;]</li><li>or</li><li>postcss.config.js <code>plugins[require(&#39;autoprefixer&#39;)}]}</code></li><li>use:[&quot;css-loader&quot;,&quot;style-loader&quot;,&quot;postcss&quot;]</li><li><code>postcss-preset-env</code> 囊括了 autoprefixder 将css新特性 转换 成浏览器支持的 属性或者值</li><li>&#39;<code>plugins[require(&#39;postcss-preset-env&#39;)}]}</code>&#39;</li><li>#八位 后两位透明度 css新特性</li></ul></li></ul><h4 id="webpack打包其他资源" tabindex="-1">webpack打包其他资源 <a class="header-anchor" href="#webpack打包其他资源" aria-label="Permalink to &quot;webpack打包其他资源&quot;">​</a></h4><h4 id="图片资源打包" tabindex="-1">图片资源打包 <a class="header-anchor" href="#图片资源打包" aria-label="Permalink to &quot;图片资源打包&quot;">​</a></h4><ul><li>file-loader 来处理 ，import require 方式引入</li><li>官方文档 webpack 列举了 很多loader</li><li>file-loader url-loader</li><li>学习下 正则表达式？</li><li>js 设置 img.src = require(&#39;./xxx.png&#39;) 才会依赖解析</li><li>or</li><li>import xxx from “./xxx.png” img.src = xxx</li></ul><h4 id="文件命名规则" tabindex="-1">文件命名规则 <a class="header-anchor" href="#文件命名规则" aria-label="Permalink to &quot;文件命名规则&quot;">​</a></h4><ul><li>placeHolders</li></ul><p>url-loader</p><ul><li><p>将较小的 文件 转成 base64URI</p></li><li><p>雪碧图</p></li><li><p>webpack 配置 limit 小于该数值 就会直接打包成base64</p></li><li><p>assest module type</p></li></ul><h4 id="加载字体文件" tabindex="-1">加载字体文件 <a class="header-anchor" href="#加载字体文件" aria-label="Permalink to &quot;加载字体文件&quot;">​</a></h4><ul><li>file-loader 打包</li></ul><h4 id="清理打包文件" tabindex="-1">清理打包文件 <a class="header-anchor" href="#清理打包文件" aria-label="Permalink to &quot;清理打包文件&quot;">​</a></h4><ul><li><p>安装</p><ul><li>npm i clean-webpack-plugin</li></ul></li><li><p>配置</p><ul><li><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CleanWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;clean-webpack-plugin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//webpack.config.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CleanWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li></ul><h4 id="htmlwebpackplugin" tabindex="-1">HtmlWebpackPlugin <a class="header-anchor" href="#htmlwebpackplugin" aria-label="Permalink to &quot;HtmlWebpackPlugin&quot;">​</a></h4><ul><li><p>安装</p><ul><li>npm i html-webpack-plugin</li></ul></li><li><p>配置</p><ul><li><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;html-webpack-plugin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> html]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li><li><p>自定义模板数据填充</p><ul><li><p>DfinePlugin 内置插件</p><ul><li><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const {DefinePlugin} = require(&#39;webpack&#39;)</span></span>
<span class="line"><span>plugins:[new DefinePlugin({BASE_URL:&quot;&#39;./&#39;&quot;})]</span></span>
<span class="line"><span>//模板渲染路径</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li></ul></li></ul><h4 id="copywebpackplugin" tabindex="-1">CopyWebpackPlugin <a class="header-anchor" href="#copywebpackplugin" aria-label="Permalink to &quot;CopyWebpackPlugin&quot;">​</a></h4><ul><li><p>配置</p><ul><li><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const {CpoyWebpackPlugin} = require(&#39;CopyWebpackPlugin&#39;)</span></span>
<span class="line"><span>plugins:[new CopyWebpack({pattens:{</span></span>
<span class="line"><span>from:&#39;pulic&#39;,to:&quot;build&quot;,  </span></span>
<span class="line"><span>globOptions:{</span></span>
<span class="line"><span>ignore:[&quot;**/index.html&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}})]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ul><h4 id="打包配置" tabindex="-1">打包配置 <a class="header-anchor" href="#打包配置" aria-label="Permalink to &quot;打包配置&quot;">​</a></h4><p>mode:&quot;development&quot;</p><p>devtools:&quot;source-map&quot; 文件映射</p><h3 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;babel&quot;">​</a></h3><ul><li>环境不支持高级语法 降级 将ES6 转变成 ES5 向后兼容</li><li>jsx 转化成 js</li><li>命令行使用</li></ul><h3 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;vite&quot;">​</a></h3><ul><li><p>安装</p><ul><li>npm i vite -D</li></ul></li><li><p>使用</p><ul><li>自动解析包</li></ul></li><li><p>postcss</p></li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm i postcss</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">preset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`css前缀\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 配置 postcss.config.js </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {plugins:[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;postcss-preset-env&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>原理</p><ul><li>搭建 本地服务器Connect（原来用的是 koa） 请求的文件，将代码 转化成 es6js代码 ，拦截请求 转发数据</li></ul></li><li><p>对vue 的支持</p><ul><li>安装插件 <ul><li>@vitejs/plugin-vue vue3</li><li>@vitejs/plugin-vue-jsx jsx</li><li>@vue/compiler-sfc</li><li>引入插件plugins:[]</li></ul></li><li>vite 快的原因 vite存在预打包</li><li>vite preview <code>预览</code> 查看打包效果</li></ul></li><li><p>esbuild 解析</p><ul><li>支持 es6 Commonjs</li><li>支持 es6 tree shaking</li><li>支持go（直接转成机器码 无需经过字节码过程） JavaScript（AST=&gt;字节码=&gt;机器码） 的API</li><li>支持 ts JSX 等语法</li><li>超快 并不需要缓存</li><li>支持 SourceMap</li><li>支持代码压缩</li><li>支持插件扩展</li><li>多线程 尽可能快打包</li></ul></li><li><p>vite 脚手架</p><ul><li>npm @vitejs/create-app -g</li></ul></li><li><p>create-app 名称 select</p></li></ul><blockquote><p>注：host 0.0.0.0 直接访问 0.0.0.0 在windows 电脑 没办法正常解析</p></blockquote><h3 id="组件化开发" tabindex="-1">组件化开发 <a class="header-anchor" href="#组件化开发" aria-label="Permalink to &quot;组件化开发&quot;">​</a></h3><blockquote><p>多个根元素 会被包裹自动包裹</p></blockquote><ul><li><p>父子组件通信</p><ul><li>project inject</li><li>props <code>默认引用类型返回 地址一样 建议使用 Functions </code></li><li>emit</li><li>$attrs 禁用继承 inheritAttrs 设置;多个根节点</li></ul></li><li><p>组件上的V-model</p><ul><li></li></ul></li><li><p>兄弟组件通信</p><ul><li>s</li></ul></li><li><p>slot</p><ul><li>默认插槽</li><li>具名</li><li>动态插槽 高阶组件</li><li>作用域插槽 <code>父级取子集值</code> 给slot 加属性 父级就可以做取到了 slotProps 如何实现的呢</li><li>多占默认插槽缩写 去掉 template 写在外层 标签上</li></ul><h3 id="keep-alive" tabindex="-1">keep-alive <a class="header-anchor" href="#keep-alive" aria-label="Permalink to &quot;keep-alive&quot;">​</a></h3></li><li><p>缓存</p></li><li><p>includes 逗号隔开 数组</p></li><li><p>excludes 正则</p></li><li><p>max 最大缓存数</p></li></ul><h3 id="webpack代码分包" tabindex="-1">webpack代码分包 <a class="header-anchor" href="#webpack代码分包" aria-label="Permalink to &quot;webpack代码分包&quot;">​</a></h3><h3 id="异步组件" tabindex="-1">异步组件 <a class="header-anchor" href="#异步组件" aria-label="Permalink to &quot;异步组件&quot;">​</a></h3><ul><li>defineAsyncComponent <ul><li>会被单独打包</li><li>defineAsyncComponent(()=&gt;import(&#39;..../&#39;))</li><li>直接()=&gt;import(&#39;../&#39;) <ul><li><code>or</code> defineAsyncComponent({loader:()=&gt;import(&#39;..../&#39;),loadingCompont:<code>站位组件</code>,errorCompont:<code>出错的组件</code>,delay:<code>延迟</code>})</li></ul></li></ul></li><li>Suspense（悬念） <ul><li>实验性特性 api可能随时修改 <ul><li>两个插槽 <ul><li>default 可以显示 就显示</li><li>fallback 不显示 default 就显示 fallback</li></ul></li></ul></li></ul></li></ul><h3 id="refs" tabindex="-1">$refs <a class="header-anchor" href="#refs" aria-label="Permalink to &quot;$refs&quot;">​</a></h3><ul><li>可以放在<code>组件</code> 或者<code>元素上</code></li><li>获取组件的属性</li><li>获取组件的方法</li></ul><h3 id="parent" tabindex="-1">$parent <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;$parent&quot;">​</a></h3><ul><li>获取 父组件</li><li>获取方法 与 值</li></ul><h3 id="root" tabindex="-1">$root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;$root&quot;">​</a></h3><ul><li>获取根组件</li></ul><p>注：<code>Vue3中移除了 $children 属性</code></p><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><ul><li>创建，挂载，更新，卸载</li><li>keepalive activated（进入活跃状态） deactived(离开活跃状态) 生命周期</li></ul><h3 id="组件上的-v-model" tabindex="-1">组件上的 v-model <a class="header-anchor" href="#组件上的-v-model" aria-label="Permalink to &quot;组件上的 v-model&quot;">​</a></h3><ul><li>原理 ：@update=&quot;$event = message&quot; :model-value=&quot;message&quot; 语法糖</li></ul><p>14 没看 7 8 好像是 没看</p><h3 id="认识mixin" tabindex="-1">认识Mixin <a class="header-anchor" href="#认识mixin" aria-label="Permalink to &quot;认识Mixin&quot;">​</a></h3><ul><li><p>原理 ：将方法 挂载到当前 组件实例 或者vue实例上</p></li><li><p>混入 代码逻辑 复用</p></li><li><p>可以嵌套生命周期</p></li><li><p>合并规则</p><ul><li>data 函数 默认合并 组件内部属性 优先级高</li></ul></li><li><p>生命周期钩子 函数合并成数组 都会被调用的</p><ul><li>只为对象时 定义都会生效 组件 内部优先级高</li></ul></li></ul><h2 id="extends-继承" tabindex="-1">extends（继承） <a class="header-anchor" href="#extends-继承" aria-label="Permalink to &quot;extends（继承）&quot;">​</a></h2><ul><li>继承 属性 方法</li></ul><h3 id="compontions-api" tabindex="-1">compontions API <a class="header-anchor" href="#compontions-api" aria-label="Permalink to &quot;compontions API&quot;">​</a></h3><ul><li>ref template 浅层解包</li><li>readonly 只读（原理就是 使用的proxy 劫持 set方法） ref reactive 普通对象 都可以被包裹</li></ul><h3 id="torow" tabindex="-1">toRow <a class="header-anchor" href="#torow" aria-label="Permalink to &quot;toRow&quot;">​</a></h3><ul><li>返回一个reactive 或readonly 代理原始对象 （不建议保留对原始对象的持久引用，请谨慎使用）</li></ul><h3 id="isproxy" tabindex="-1">isProxy <a class="header-anchor" href="#isproxy" aria-label="Permalink to &quot;isProxy&quot;">​</a></h3><ul><li>检查对象是否由 reactive 或 readonly 创建的 proxy</li></ul><h3 id="isreadonly" tabindex="-1">isReadonly <a class="header-anchor" href="#isreadonly" aria-label="Permalink to &quot;isReadonly&quot;">​</a></h3><ul><li>是否是 readonly代理的对象</li></ul><h3 id="isreactive" tabindex="-1">isReactive <a class="header-anchor" href="#isreactive" aria-label="Permalink to &quot;isReactive&quot;">​</a></h3><ul><li>是否是 由reactive创建的响应式对象</li><li>或者是 使用 readonly 包裹的 reactive 的对象同样也会返回 true</li></ul><h3 id="shallowreactive" tabindex="-1">shallowReactive <a class="header-anchor" href="#shallowreactive" aria-label="Permalink to &quot;shallowReactive&quot;">​</a></h3><ul><li>浅层响应式</li></ul><h3 id="shallowreadonly" tabindex="-1">shallowReadonly <a class="header-anchor" href="#shallowreadonly" aria-label="Permalink to &quot;shallowReadonly&quot;">​</a></h3><ul><li>浅层具有只读 效果</li><li>深层 刻度科可写</li></ul><h3 id="torefs-常用吧" tabindex="-1">torefs（常用吧） <a class="header-anchor" href="#torefs-常用吧" aria-label="Permalink to &quot;torefs（常用吧）&quot;">​</a></h3><blockquote><p>reactive 解构后的数据 不具有响应式；</p><p>注：只是解构 赋值了 让它具有响应式可以使用 toRefs</p><ul><li>const info = reactive({name:&#39;hhhh&#39;})</li><li>const {name} = toRefs(info)</li></ul><p><code>内部相当于内部建立连接 会变成响应式的</code></p></blockquote><h2 id="toref" tabindex="-1">toRef <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef&quot;">​</a></h2><ul><li>参数 reactive 对象 参数 key</li><li>单一的将数据 转换成ref 对象</li></ul><h3 id="unref" tabindex="-1">unref <a class="header-anchor" href="#unref" aria-label="Permalink to &quot;unref&quot;">​</a></h3><ul><li>语法糖 <code>val = isRef(val)?val.value :val</code></li></ul><h3 id="isref" tabindex="-1">isRef <a class="header-anchor" href="#isref" aria-label="Permalink to &quot;isRef&quot;">​</a></h3><ul><li>是否是一个 ref对象</li></ul><h3 id="shallowref" tabindex="-1">shallowRef <a class="header-anchor" href="#shallowref" aria-label="Permalink to &quot;shallowRef&quot;">​</a></h3><ul><li>当 ref 为 对象时 使用 shallowRef 深层 不具备响应式</li></ul><h3 id="triggerref" tabindex="-1">triggerRef <a class="header-anchor" href="#triggerref" aria-label="Permalink to &quot;triggerRef&quot;">​</a></h3><ul><li>手动触发和 shallowRef 相关联的副作用 （手动的 进行刷新操作）</li></ul><h3 id="customref" tabindex="-1">customRef <a class="header-anchor" href="#customref" aria-label="Permalink to &quot;customRef&quot;">​</a></h3><ul><li>创建一个自定义的ref 自行控制 更新触发 显式控制</li><li>需要一个工厂函数 一个是track（收集依赖） trigger（手动触发更新） 两个函数</li><li>防抖 等操作</li></ul><h3 id="watcheffect" tabindex="-1">watchEffect <a class="header-anchor" href="#watcheffect" aria-label="Permalink to &quot;watchEffect&quot;">​</a></h3><ul><li><p>收集 可响应式的对象 依赖</p></li><li><p>有变化 触发</p></li><li><p>默认 初次自动调用</p></li><li><p><strong>停止侦听</strong> 返回值 用变量 继续 调用这个方法 停止监听变化</p></li><li><p><code>清除副作用</code></p><ul><li><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//网络请求 取消上次请求 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watchEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bbb){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onInvalidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     //取消网络请求</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //清除额外的副作用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li><li><p>关于<strong>flush</strong> 配置项</p><ul><li>’post‘ //dom挂载完成后 触发</li><li>‘pre’ //默认 元素挂载或更新前执行</li><li>‘sync’ // 强制同步执行 效能很低 <code>不建议用</code></li></ul></li></ul><h2 id="watch-1" tabindex="-1">watch <a class="header-anchor" href="#watch-1" aria-label="Permalink to &quot;watch&quot;">​</a></h2><ul><li><p>默认惰性 （第一次不会立刻执行）</p></li><li><p>单一数据源</p></li><li><p>传入数据源 是 reactive 默认是deep 深度 监听的</p></li><li><p>监听 reactive时获取一个普通对象的对象 使用浅拷贝 来等到一个 非 proxy对象</p></li><li><p>数据源是<strong>数组</strong>时</p><ul><li><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([xx,xxx],([</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">xxo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">xxv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],[</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">xxxo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">xxxv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	consloe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(o,v)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p>配置属性</p><ul><li><strong>deep</strong> //深度侦听</li><li>immediate //立即侦听</li></ul></li></ul><h3 id="setup中的-ref" tabindex="-1">setup中的 ref <a class="header-anchor" href="#setup中的-ref" aria-label="Permalink to &quot;setup中的 ref&quot;">​</a></h3><ul><li>获取 dom</li><li>生命周期中获取 dom onMounted</li></ul><h3 id="provide-inject" tabindex="-1">provide inject <a class="header-anchor" href="#provide-inject" aria-label="Permalink to &quot;provide inject&quot;">​</a></h3><ul><li><p>在vue 中 获取 provide inject</p></li><li><p>父子 正向</p></li><li><p>provide(&#39;key&#39;,value)提供 inject(&#39;key&#39;) 作为接受</p></li><li><p><code>设计单向数据源 </code> 可以使用 readonly 包裹 数据</p></li></ul><h3 id="hooks" tabindex="-1">hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;hooks&quot;">​</a></h3><ul><li>修改 网页 title</li><li>本地存储 <ul><li>一个参数 取值</li><li>两个参数设置值</li><li>编码 与 解码</li></ul></li><li>hooks index.js 统一出口</li></ul><h3 id="语法糖-2021-年-存在争议" tabindex="-1">语法糖（2021 年 存在争议） <a class="header-anchor" href="#语法糖-2021-年-存在争议" aria-label="Permalink to &quot;语法糖（2021 年 存在争议）&quot;">​</a></h3><ul><li>script setup （在2022 成为正式版）</li></ul><h3 id="h函数" tabindex="-1">h函数 <a class="header-anchor" href="#h函数" aria-label="Permalink to &quot;h函数&quot;">​</a></h3><blockquote><p>17 节 2h14min</p></blockquote><h3 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h3><blockquote><p>场景 ：对dom元素底层进行操作时</p></blockquote><ul><li><h2 id="全局" tabindex="-1">全局 <a class="header-anchor" href="#全局" aria-label="Permalink to &quot;全局&quot;">​</a></h2></li><li><p>局部</p></li><li><p>指令的生命周期</p><ul><li>created 属性还未 应用</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>beforeUnmount</li><li>Unmount</li></ul></li><li><p>修饰符 可以通过 bindings 拿到 value 实例等</p></li></ul><h3 id="插件-plugins" tabindex="-1">插件 plugins <a class="header-anchor" href="#插件-plugins" aria-label="Permalink to &quot;插件 plugins&quot;">​</a></h3><h4 id="场景" tabindex="-1">场景： <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景：&quot;">​</a></h4><ul><li>全局添加属性</li><li>添加全局资源指令过滤器</li><li>全局 mixin 添加一些组件选项</li><li>使用第三方库 自己实现的 库 ，使用其上的若干功能</li></ul><h4 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// object</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        app.config.globalProperties.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;name&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fuction</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(app)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plugins)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="vue源码" tabindex="-1">vue源码 <a class="header-anchor" href="#vue源码" aria-label="Permalink to &quot;vue源码&quot;">​</a></h3><blockquote><p>18 2h ,19, 20</p></blockquote><ul><li><p>虚拟dom 优势（真的有优势嘛？）</p><ul><li>便于比较 diff</li><li>有利于 跨平台 服务端渲染</li><li>可以自己 编写 render 实现 跨平台部署</li></ul></li><li><p>源码三大核心</p><ul><li>Comoiler 模块：编译模块系统；</li><li>Runtime 模块：渲染模块；</li><li>Reactivity 模块： 响应式系统；</li></ul></li></ul><h2 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;vue-router&quot;">​</a></h2><blockquote><p>22 23</p></blockquote><h3 id="vuex" tabindex="-1">vueX <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;vueX&quot;">​</a></h3><blockquote><p>24</p></blockquote><h3 id="nexttick" tabindex="-1">nexttick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;nexttick&quot;">​</a></h3><blockquote><p>25</p></blockquote><h3 id="typescript" tabindex="-1">typescript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;typescript&quot;">​</a></h3><blockquote><p>26 27 28 29 30</p></blockquote>`,180),t=[n];function r(p,o,h,u,d,c){return l(),a("div",null,t)}const m=i(s,[["render",r]]);export{b as __pageData,m as default};
