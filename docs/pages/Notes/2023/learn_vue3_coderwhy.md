## 一般指令

### v-once

- 只渲染 一次 
- 当 有子集时 子集也是仅仅渲染 一次
- 该指令可以被用作 性能优化  “没遇见过场景”

### v-pre

-  相当于 原生的 pre 标签 
-  跳过编译 直接将被包裹的模板 渲染到页面上

### v-cloak

- 主要是 为了避免 模板语法 ssr 下的渲染问题 大括号语法 尚未编译渲染在页面上
- 原理 再dom 上架了 `class {display：none}`

### v-bind

- 简写 :
- 动态绑定属性 ： `:[name]="value"  属性名称以及 值 都在 data中取值`

## v-on

- 简称 @

- 修饰符  .

> - stop 阻止事件冒泡 调用 event.stopPropagation()  事件冒泡 子里向外
>
> - prevent 阻止默认事件 调用 event.preventDefault()
> - capture 添加事件监听器 使用 capture 事件捕获 在外向里 （当然也可以理解 为 捕获的优先级 是高于 冒泡的）
> - self 当触发 绑定元素 才会触发 事件
> - {keyAlias} 仅当事件 从特定的 建触发 才会被触发回调 例`@click.enter="test"` 当键盘按下 enter 会被触发
> - once 只触发一次回调
> - left 只当鼠标 左键可以触发回调
> - right 只当鼠标右键 可以触发回调
> - middle 只当触发 鼠标中间键 时 触发回调
> - passive 一般用于 触摸事件的监听器 用来改善 移动端的滚屏性能

### v-if  v-show

- 区别 v-if频繁切换 开销比较大 频繁切换 场景一般 用 v-show来实现  v-show 不能写在 template上 
- v-show diplay none
- v-if是将 元素内容直接销毁的

### v-for

- 支持对象

- `v-for ="(value,key,index) in {name:'uuuu',age='23'}"`
- 渲染结果 `uuuu  name 0;23 age 1`

### 数组检测更新

简而言之 就是 vue 将 pop push unshift shift sort reverse splice 做了处理（重写） 

对于 filter concat slice 生成新的 数组 不改变原来数组

### diff算法



### computed

- 与methods 最大的区别在于 缓存 computed 是有缓存，当数据源不变的情况下 computed getter 不会再次被触发
- getter setter 改变getter 数据源 达到改变 computed 的意图

## vue的基本语法

### 简单聊几句

- vue3 组合式 api 更接近于 原生JavaScript 开发 

### 侦听器 watch

- 监听 数据变化达到 想要的 效果
- deep  内部变化 深层监听 `deep：true内部变化 也会触发回调`
- immediate 立即出发 无论是否有数据变化 都会立即执行一次
- 另一种 api $watch 第一个参数监听的源 第二个参数 监听的回调 第三个参数 配置项 deep immediate 

 *small tips* 巧用 button 来达到 意想不到的 效果 

### v-model基本用法

- 用于双向绑定数据源
- 本质 是 @input 与 ：value 语法糖 
- 修饰符 `lazy ` 默认情况下 绑定的 是 @input 加上修饰符后 @change 事件 只有 enter 提交时才会触发
- 修饰 number 将 string 转换为 number 类型
- 修饰符 trim 去除首尾空格

### 组件开发基础学习

> 整个大前端的开发 都是组件的天下 三大框架 flutter uniapp 移动端 小程序 都在采用组件开发的 思想；
>
> 学习组件化是学习它的思想 ，每个框架 或者是平台 实现的方式不同，但思想都是一样的。

### 什么是组件

> 开发过程中 需要大规模重复使用的 结构 代码 封装成 一个 轮子（提到的轮子  下面 均可以理解为组件）；化繁为简 将复杂的代码逻辑 封装起来 通过传递数据 展现 定制效果； 

### 注册全局组件

> 顾名思义 全局都可以使用的组件
>
> 组件 ：全局组件、局部组件
>
> 开发中更多的是注册局部组件 通知类 弹出层 反复使用的 可以作为 全局组件 看个人使用习惯

- 全局注册 在main.js 中 引入组件 app.component('组件名'，导入的组件)
- 局部注册在 components 属性中声明 规范而已

### 如何支持 sfc

使用打包工具 vite rollup webpack 来实现

## 组件之间的通信

- 拆分成多个 view 页面引入到  

> `于2023年5月25日22:19:18`

### 父组件传递给子组件

- props来实现 通过父组件 绑定属性（字符串数组对象） 子组件接收 可以指定类型 默认值 是否必填 等
- 类型 String Boolean Number Function Array Date Object Symbol
- 多个 可能的 类型 type:[Number,String]
- required true 该props 为必填项
- default  带默认值的 props

#### 非prop的属性继承 Attribute

- 该属性 没有被 props emit 定义
- 常见类型class style id
- 默认会将 属性自动添加到 根节点
- `禁止`继承的方式 在组件中设置 inheritAttrs：false
- 一般 禁用的情况 是为了 通过 $attr 在非根节点 来使用 某些属性
- 多个根节点 没有显示 声明 会警告

### 子组件 传递给父组件

-  通过 自定义事件来实现 绑定事件 子组件 传值 父组件存储

### 非父子组件 的相互通信

- 一般用在无论多深层 多层嵌套关系的组件
- 我基本没用过
- 父级传递 子集接收
- 将 数据变成响应式的 可以通过 computed 来 获取

### 全局事件总线 

> vue3在实例中移除了$on $off $once这些方法

- 官方推荐 一些库 例如 mitt或 tiny-emitter

### 插槽

- slot 默认插槽  具名插槽 

### v-bind

- 动态绑定数据
- :[key]="value"
- 绑定属性   v-bind={name:'12',value:34} （）也可以（：=“{name:'12',value:34}”）  相当于 ：name =“12” ：value="34"
- 高级检索 很方便

### v-on

- 简：@
- v-on={click:click,mouseover:mouseover} 绑定对象

### key 

- 头遍历 key
- 尾遍历 key
- 比对 传空patch（null） 挂载到页面 
- key 作为 索引 比较 尽可能 将 
- 不使用key 最大程度 尽可能复用相同类型元素
- 使用 拿旧的vnode 
- 提升性能

## $watch

监听$watch  可以接收 作为函数 来进行 取消监听

### 对象的引用（指针）的深浅拷贝

-  对象浅拷贝(拷贝表层数据) Object.assign({},info) === [... info]  
-  深拷贝 JSON.parse(JSON.stringfy(obj))
-  loadsh  常用的方法仓库实现
-  _.cloneDeep()  防抖节流

### v-model

- @input value  
- .lazy @change value 

## webpack基础

-  npm init -y `后面的选项 默认yes`
-  npm i  -D 开发依赖  -S 生产依赖
-  局部 npx webpack 局部使用 
-  在package 配置 script ：{build:'webpack'}`默认在局部找`
-  --entry 入口文件  出口--output-path
-  or webpack.config.js ; 
-  cmj    modules.export = { entry:'/xxx',output:'xxx`绝对路径`'}
-  output.filename:'文件名称'
-  配置 --config 对`webpack.config.js 更改文件名称`

```
const path= require('path');
path :path.resolve(__dirname,'///**')
/*__dirname 获取当前文件夹所在路径 ；后面的参数 为了路径拼接*/
```

### webpack依赖

- 配置入口文件 默认`src/main.js`

- 使用了才会被打包

- 根据不同 的文件类型 使用不同的loader 来解析

- `css loader` npm i css-loader

  - 内联 	`在文件内部 import 'css-loader!css.css'`

  - webpack.config.js 

  - ```vue
    `module.rules:[{test:/\.css$/,//正则 表达式,loader:'css-loader'/,user:[loader:'css-loader']] `
    ```

- style-loader npm i style-loader

  - user:["style-loader","css-loader"]  `从后向前执行`没有提取操作  仅仅融合到html

- 处理 less文件 npm i less less-loader

  - user:["less-loader","style-loader","css-loader"]
  - `npm i less` 使用lessc 将less转变成 css

- PostCss 工具

  -  postcss-loader postcss
  -  插件 autoprefixer  `自动给浏览器加前缀`
  -  user:["less-loader","style-loader",{loader:"postcss-loader",options:{postcssOptions:{plugins:[require('autoprefixer')}]}}]
  -  plugins:["autoprefixer"]
  -  or
  -  postcss.config.js `plugins[require('autoprefixer')}]}` 
  -  use:["css-loader","style-loader","postcss"]
  -  `postcss-preset-env`  囊括了 autoprefixder 将css新特性 转换 成浏览器支持的 属性或者值 
  -  `plugins[require('postcss-preset-env')}]}` 
  -  #八位 后两位透明度 css新特性 

#### webpack打包其他资源

#### 图片资源打包

-  file-loader 来处理 ，import require 方式引入 
-  官方文档 webpack 列举了 很多loader
-  file-loader url-loader 
-  学习下 正则表达式？
-  js 设置 img.src = require('./xxx.png') 才会依赖解析
-  or
-  import xxx from “./xxx.png” img.src = xxx

#### 文件命名规则

- placeHolders

url-loader

- 将较小的 文件 转成 base64URI
- 雪碧图
- webpack 配置 limit 小于该数值 就会直接打包成base64

- assest module type 

#### 加载字体文件

- file-loader 打包

#### 清理打包文件 

- 安装

  - npm i clean-webpack-plugin

- 配置

  - ```js
    const {CleanWebpackPlugin} = require('clean-webpack-plugin')
    //webpack.config.js
    plugins:[new CleanWebpackPlugin()]
    ```

#### HtmlWebpackPlugin

- 安装

  - npm i html-webpack-plugin

- 配置

  - ```js
    const html = require('html-webpack-plugin')
    plugins:[new html]
    ```

- 自定义模板数据填充

  - DfinePlugin 内置插件

    - ```
      const {DefinePlugin} = require('webpack')
      plugins:[new DefinePlugin({BASE_URL:"'./'"})]
      //模板渲染路径
      ```

#### CopyWebpackPlugin

  - 配置

    - ```
      const {CpoyWebpackPlugin} = require('CopyWebpackPlugin')
      plugins:[new CopyWebpack({pattens:{
      from:'pulic',to:"build",  
      globOptions:{
      ignore:["**/index.html"]
      }
      }})]
      ```

#### 打包配置

mode:"development"

devtools:"source-map" 文件映射  

### babel

- 环境不支持高级语法 降级 将ES6 转变成 ES5 向后兼容
- jsx 转化成 js 
- 命令行使用

### vite

- 安装

  - npm i vite -D

- 使用

  -  自动解析包

- postcss 
  - npm i postcss-preset-env -D `css前缀`
  - 配置 postcss.config.js module.exports = {plugins:[require('postcss-preset-env')]}

- 原理

  - 搭建 本地服务器Connect（原来用的是 koa） 请求的文件，将代码 转化成 es6js代码 ，拦截请求 转发数据

- 对vue 的支持
  - 安装插件
    - @vitejs/plugin-vue vue3
    - @vitejs/plugin-vue-jsx  jsx
    - @vue/compiler-sfc
    - 引入插件plugins:[]
  - vite 快的原因 vite存在预打包
  - vite preview  `预览` 查看打包效果

- esbuild 解析

  -  支持 es6 Commonjs
  -  支持 es6 tree shaking
  -  支持go（直接转成机器码 无需经过字节码过程） JavaScript（AST=>字节码=>机器码） 的API
  -  支持 ts JSX 等语法
  -  超快 并不需要缓存
  -  支持 SourceMap
  -  支持代码压缩
  -  支持插件扩展
  -  多线程 尽可能快打包

- vite 脚手架

  - npm @vitejs/create-app -g
- create-app 名称 select

> 注：host 0.0.0.0 直接访问 0.0.0.0 在windows 电脑 没办法正常解析 

###   组件化开发

> 多个根元素 会被包裹自动包裹 

- 父子组件通信
  - project inject 
  - props `默认引用类型返回 地址一样 建议使用 Functions `
  - emit
  - $attrs 禁用继承 inheritAttrs 设置;多个根节点

- 组件上的V-model

  - 

- 兄弟组件通信

  - s

- slot
  - 默认插槽
  - 具名
  - 动态插槽 高阶组件
  - 作用域插槽 `父级取子集值` 给slot 加属性 父级就可以做取到了 slotProps 如何实现的呢
  - 多占默认插槽缩写 去掉 template 写在外层 标签上



  ### keep-alive

 - 缓存
 - includes 逗号隔开 数组
 - excludes 正则
 - max 最大缓存数

### webpack代码分包

 

### 异步组件

  - defineAsyncComponent
    - 会被单独打包
    - defineAsyncComponent(()=>import('..../'))
    - 直接()=>import('../')
      - `or` defineAsyncComponent({loader:()=>import('..../'),loadingCompont:`站位组件`,errorCompont:`出错的组件`,delay:`延迟`}) 
- Suspense（悬念）
  - 实验性特性 api可能随时修改
    - 两个插槽
      - default  可以显示 就显示
      - fallback 不显示 default 就显示 fallback

### $refs

- 可以放在`组件` 或者`元素上`
- 获取组件的属性 
- 获取组件的方法

### $parent

- 获取 父组件
- 获取方法 与 值

### $root

- 获取根组件

注：`Vue3中移除了 $children 属性`

### 生命周期

- 创建，挂载，更新，卸载
- keepalive activated（进入活跃状态） deactived(离开活跃状态) 生命周期

### 组件上的 v-model

- 原理 ：@update="$event = message" :model-value="message" 语法糖

14 没看 7 8 好像是 没看

### 认识Mixin

- 原理 ：将方法 挂载到当前 组件实例 或者vue实例上

- 混入 代码逻辑 复用

- 可以嵌套生命周期

- 合并规则

  - data 函数 默认合并 组件内部属性 优先级高

- 生命周期钩子 函数合并成数组 都会被调用的

  - 只为对象时 定义都会生效 组件 内部优先级高

  

## extends（继承）

- 继承 属性 方法

### compontions API 

- ref template 浅层解包
- readonly 只读（原理就是  使用的proxy 劫持 set方法） ref reactive 普通对象 都可以被包裹 

### toRow

- 返回一个reactive 或readonly 代理原始对象 （不建议保留对原始对象的持久引用，请谨慎使用）

### isProxy

- 检查对象是否由 reactive 或 readonly 创建的 proxy

### isReadonly

- 是否是 readonly代理的对象

### isReactive

- 是否是 由reactive创建的响应式对象
- 或者是 使用 readonly 包裹的 reactive 的对象同样也会返回 true

### shallowReactive

- 浅层响应式

### shallowReadonly

- 浅层具有只读 效果 
- 深层 刻度科可写


### torefs（常用吧）

> reactive 解构后的数据 不具有响应式；
>
> 注：只是解构 赋值了 让它具有响应式可以使用 toRefs
>
> - const info = reactive({name:'hhhh'})
> - const {name} = toRefs(info)
>
> `内部相当于内部建立连接 会变成响应式的`

## toRef

- 参数 reactive 对象 参数 key 
- 单一的将数据  转换成ref 对象

### unref

- 语法糖  `val = isRef(val)?val.value :val`

### isRef

- 是否是一个 ref对象

### shallowRef

- 当 ref 为 对象时 使用 shallowRef 深层 不具备响应式

### triggerRef

- 手动触发和 shallowRef 相关联的副作用 （手动的 进行刷新操作）	

### customRef

- 创建一个自定义的ref 自行控制 更新触发 显式控制
- 需要一个工厂函数 一个是track（收集依赖） trigger（手动触发更新） 两个函数
- 防抖 等操作

### watchEffect 

- 收集 可响应式的对象 依赖 

- 有变化 触发

- 默认 初次自动调用

- **停止侦听** 返回值 用变量 继续 调用这个方法  停止监听变化

- `清除副作用` 

  - ```javascript
    //网络请求 取消上次请求 
    watchEffect(bbb){onInvalidate()=>{
         //取消网络请求
        //清除额外的副作用
     } }
    ```

- 关于**flush** 配置项

  - ’post‘   //dom挂载完成后 触发
  - ‘pre’   //默认 元素挂载或更新前执行 
  - ‘sync’  // 强制同步执行 效能很低 `不建议用`

## watch

- 默认惰性 （第一次不会立刻执行）

- 单一数据源

- 传入数据源 是 reactive 默认是deep 深度 监听的

- 监听 reactive时获取一个普通对象的对象 使用浅拷贝 来等到一个 非 proxy对象

- 数据源是**数组**时

  - ```javascript
    watch([xx,xxx],([xxo,xxv],[xxxo,xxxv])=>{
    	consloe.log(o,v)
    })
    ```

- 配置属性

  - **deep** //深度侦听
  - immediate //立即侦听

### setup中的 ref

- 获取 dom 
- 生命周期中获取 dom onMounted

### provide inject

- 在vue 中 获取 provide inject

- 父子 正向 
- provide('key',value)提供 inject('key') 作为接受
- `设计单向数据源 ` 可以使用 readonly 包裹 数据

### hooks

- 修改 网页 title 
- 本地存储 
  - 一个参数 取值
  - 两个参数设置值
  - 编码 与 解码
- hooks index.js 统一出口

### 语法糖（2021 年 存在争议）

- script setup （在2022 成为正式版）

### h函数 

> 17 节  2h14min

### 自定义指令

> 场景 ：对dom元素底层进行操作时

- 全局
  - 
- 局部

- 指令的生命周期
  - created 属性还未 应用
  - beforeMount
  - mounted 
  - beforeUpdate
  - updated
  - beforeUnmount
  - Unmount

- 修饰符 可以通过 bindings 拿到 value 实例等


### 插件 plugins

#### 场景：

- 全局添加属性
- 添加全局资源指令过滤器 
- 全局 mixin 添加一些组件选项
- 使用第三方库 自己实现的 库 ，使用其上的若干功能

#### 语法

``` javascript

// object
export default {
    install(app){
        app.config.globalProperties.name = 'name'
        
    }
}
// fuction
export default function (app) {
    console.log(app)
}

app.use(plugins)
```

### vue源码

> 18 2h  ,19, 20

- 虚拟dom 优势（真的有优势嘛？）
  -  便于比较 diff 
  - 有利于 跨平台 服务端渲染
  - 可以自己 编写 render 实现 跨平台部署

- 源码三大核心
  - Comoiler 模块：编译模块系统；
  - Runtime 模块：渲染模块；
  - Reactivity 模块： 响应式系统；

## vue-router

> 22 23

### vueX

>  24

### nexttick 

> 25

### typescript

> 26 27 28 29 30 