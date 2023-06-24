### learn vue 3文档

### 组件注册

- `全局注册` app.component(’组件名‘，组件的实现 )；
- `局部注册` components :{ComponentA}
- 组件名命名格式 双驼峰命名

### props

- `setup语法糖`显式的声明 
- `setup(props)`来接受 props 
- `defineProps(['foo'])`数组
- `defineProps({foo:{type:String},likes:Number})`
- props 不传值 `隐式转换` true
- 单项数据流

### 组件的事件

- 组件的触发事件 没有冒泡机制
- 父组件 绑定事件 @cs=“（n）=>cs+=n”
- 子组件 $emit('cs','2') `参数一事件名 参数2 传参`
- 原生事件 作为 自定义事件 将不会触发原生事件 仅会出发自定义事件

### 事件的校验





### 组件v-model

- 父组件 v-model=“value”
- 子组件  $emit('update:modelValue') $props.modelValue
- 父组件 v-model:titile="value"
- 子组件 $emit('update:title') $props.titile
- 修饰符  父组件v-model.capitalize = "text"
- 子组件 $props.modelModifers.capitalize 
- 父组件 v-model:title.capitalize = "text"
- 子组件 $props.titleModifers.capitlize 
- `怎么自定义修饰符呢`

### 插槽

- 动态指令插槽 `#[name]`

- 作用域插槽

- ```vue
  <template>
    <MyComponent>
      <!-- 使用显式的默认插槽 -->
      <template #default="{ message }">
        <p>{{ message }}</p>
      </template>
  
      <template #footer>
  	<!-- 此处 使用 {{message}} 会报错-->
        <p>Here's some contact info</p>
      </template>
    </MyComponent>
  </template>
  ```

  ### 依赖注入

- provide   provide(/*注入名*/，‘值’)  `可以放在组件内部 也可放在全局`

- inject（‘注入名’，‘默认值’） 来获取  `接受`

- `没提供有接收 会警告`

- 为了确保数据单向 不被修改 可以 使用 `readonly包装` API

- 建议使用Symbol 来作为注入名以避免潜在的冲突。




#### 穿透$attr

- 继承 `例如class style id @等`
- 对 class style 进行合并 `子组件单一根节点`
- 事件 @监听 `相当于事件冒泡`
- 不包含 props emit
- 禁用继承 `子组件声明inheritAttrs：false；注意使用script 来声明`

```vue
<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>
```

- `$attrs` 对象包含了除组件所声明的 `props` 和 `emits` 之外的所有其他 attribute

- `tips`子组件 内部 解构方法

- 子组件`多个节点` 必须显式绑定 `$attrs` ； 否则 `抛出警告`

- `setup语法糖 `使用 `useAttrs()` API 来访问 attribtue

- setup 则在 上下文中解构出来 

  ```vue
  setup(props,ctx){ //被暴露为 ctx.$attrs}
  ```

  

- attrs不具备响应式 attrs总是反应当前对象的最新值；`可以使用 props 或者配合onUpdated()使用`

#### 插槽

- `slot`可以是`文本、html、组件`

- 插槽内容**无法访问**子组件的数据

- 默认插槽

  ```vue
  //Slot.vue 子组件 
  <button type="submit">
    <slot>
      Submit <!-- 默认内容 -->
    </slot>
  </button>
  //父组件
  <Slot>Click</Slot>
  ```

- 具名插槽

  ```vue
  //Slot.vue 子组件 
  <button type="submit">
    <slot name="text">
      Submit <!-- 默认内容 -->
    </slot>
  </button>
  //父组件
  <Slot>Click</Slot>
  ```

#### 异步组件

- `大型项目` 将应用分割成若干 小组件 需要时像`服务器`请求加载相关组件

- ```vue
  import {defineAsyncComponent} from "vue"
  
  const AsyncCom = defineAsyncComponent(()=>{
  	return new Promise(
  		(resovle,reject)=>{
  		//在服务器获取组件
  			resovle('获取到的组件')
  		}
  	)
  })
  
  ```

- 由于 import 动态加载`import()`;导入 同样是返回的 promise `可以在嵌套使用 仅在页面渲染时加载组件`

- 与懒加载区别？

- 虽然被套壳 但`props slot 均被直接传给内部组件` ==> *实现了延迟加载*

- :trumpet:可以 `全局注册` 

  ```vue
  app.component('componentname',defineAsyncComponent(()=>{import( 'xx/xx.vue')}))
  ```

- :trumpet:可以 `局部注册`

  > 用变量接收 直接使用即可

- 加载错误 `可以配置加载 成功前的组件（loadeing）加载错误时组件 延迟响应时间`

  ```vue
  const AsyncComp = defineAsyncComponent({
  	// 加载函数
  	loader: () => import('./Foo.vue'),
  
  	// 加载异步组件时使用的组件
  	loadingComponent: LoadingComponent,
  	// 展示加载组件前的延迟时间，默认为 200ms 提升用户体验 避免页面闪烁
  	delay: 200,
  
  	// 加载失败后展示的组件
  	errorComponent: ErrorComponent,
  	// 如果提供了一个 timeout 时间限制，并超时了
  	// 也会显示这里配置的报错组件，默认值是：Infinity
  	timeout: 3000
  })
  ```

#### 组合式函数`hooks`

- 封装**无状态**的逻辑 单例模式（状态管理）

- **命名** 按照惯例 组合式函数约定用驼峰命名法命名，并以“**use**”作为开头。

- 内部管理状态 做出更新 返回给外部

- 外部直接使用 反馈给 `视图` or `页面`

- 主张函数复用 逻辑复用 逻辑抽离

- 可以多层嵌套 

- ```vue
  // fetch.js
  import { ref } from 'vue'
  
  export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
  
    fetch(url)
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  
    return { data, error }
  }
  ```

- **unref** **解包** ref值 ；传入非响应式的值 会直接返回该值；

- `isRef` 检测是否是一个 动态的ref

- ```vue
  // fetch.js
  import { ref, isRef, unref, watchEffect } from 'vue'
  
  export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
  
    function doFetch() {
      // 在请求之前重设状态...
      data.value = null
      error.value = null
      // unref() 解包可能为 ref 的值
      fetch(unref(url))
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))
    }
  
    if (isRef(url)) {
      // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
      watchEffect(doFetch)
    } else {
      // 否则只请求一次
      // 避免监听器的额外开销
      doFetch()
    }
  
    return { data, error }
  }
  ```

- 返回值 使用 **reactive**接收 内部会**自动解包**

#### 自定义指令

- 重用主要涉及 普通元素的底层dom访问的逻辑

- 局部实现 `在 directives:{focus:{/*具体实现*/}}`

- 全局实现 `app.direcruve('focus',/*具体实现*/)`

- 指令钩子：**created** 、**beforeMount**、 **mounted** 、**beforeUpdate**、**updated**、**beforeUnmount**、**unmounted**

- ```vue
  const myDirective = {
    // 在绑定元素的 attribute 前
    // 或事件监听器应用前调用
    created(el, binding, vnode, prevVnode) {
      // 下面会介绍各个参数的细节
    },
    // 在元素被插入到 DOM 前调用
    beforeMount(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载后调用
    unmounted(el, binding, vnode, prevVnode) {}
  }
  ```

- 钩子参数 **el, binding, vnode, prevVnode**


- ```vue
  el：指令绑定到的元素。这可以用于直接操作 DOM。
  
  binding：一个对象，包含以下属性。
  
  value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
  oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
  arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
  modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
  instance：使用该指令的组件实例。
  dir：指令的定义对象。
  vnode：代表绑定元素的底层 VNode。
  
  prevNode：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。
  ```

- **tips**：除了el 其他都是只读的 ；需要共享 钩子之间的数据信息 可以通过 dataset 实现

- **简化形式**

- **des**: 常见的情况 只需要 mounted 与 updated 时使用 仅在这两个周期会被触发

- ```vue
  app.directive('color',((el,binding)=>{
  	/*这里 会在mounted 和 updated 时调用*/
  	el.style.color = binding.value
  }))
  ```

- **组件上的自定义指令**

- **不推荐** 

- 始终会将指令 应用于 **组件根节点**

- 组件多节点 时 warn `似乎无解 避免使用`

#### 插件

- 安装

  - ```vue
    const myPlugin = {install(app,options)=>{
    	//配置应用
    }} 
    app.use(myPlugin,{
    	/*可选的选项*/	
    })
    ```

- 常见场景

  - ```
    通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。
    
    通过 app.provide() 使一个资源可被注入进整个应用。
    
    向 app.config.globalProperties 中添加一些全局实例属性或方法
    
    一个可能上述三种都包含了的功能库 (例如 vue-router)。
    ```

- **Start**

  - 创建一个单文件 并导入它。例如（i18n国际化）：

  - 全局事件

  - ```
    //plugins/i18n.js
    export default {
    	install:(app,options)=>{
            //options 用户传递配置项	
    		//全局注入$translate()方法
    		app.config.globalProperties.$translate = (key)=>{
    			//获取 options对象的深层属性
    			//获取 key 作为索引
    			return key.split('.').reduce((o,i)=>{
    			if(o)return o[i]
    			},options)
    		}
    	}
    }
    ```

  - 使用 provide、inject实现

  - ```
    export default = {
    	//使用 provide 提供一个选项对象
    	install:(app,options)=>{
    		app.provide('i18n',options)
    	}
    }
    ```

    

### 内置组件

#### Transition

- 内置组件 基于状态变化的过渡与动画

- 会在元素或组件 进入或离开时 应用动画

- 无需注册 

- 触发条件

  - v-if 触发切换
  - v-show 触发切换
  - 特殊元素component  动态切换组件
  - 改变 特殊的key属性？？？特殊？

- 仅支持单个元素 换言之 **必须有根组件**

- 基本用法

  - ```
    <--! template-->
    <button @click="show=!show">toggle</button>
    <transition>
        <p v-if="show">show</p>
    </transition>
    /* style*/
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    ```

- 基于css的动画效果 

  - css Class **v-enter-from 、v-enter-active 、 v-enter-to 、v-leave-from、 v-leave-active、 v-leave-to**

- 动画效果命名

  - ```
    <--! template-->
    <button @click="show=!show">toggle</button>
    <transition name="name">
        <p v-if="show">show</p>
    </transition>
    /* style*/
    .name-enter-active,
    .name-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .name-enter-from,
    .name-leave-to {
      opacity: 0;
    }
    ```

  - [**transition-timing-function**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)  css transition

  - animation

  - 使用第三方 动画库 可以使用 props 例如 ：‘enter-form-class：’xxxx‘

- props **type**  可选`animation` `tansition` ；若只是二者取其一 会自动探测 类型 无需配置？怎么做到的

- **深层级过渡** 

  - ```
    <Transition name="nested">
      <div v-if="show" class="outer">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>
    ```

  - ```
    /* 应用于嵌套元素的规则 */
    .nested-enter-active .inner,
    .nested-leave-active .inner {
      transition: all 0.3s ease-in-out;
    }
    
    .nested-enter-from .inner,
    .nested-leave-to .inner {
      transform: translateX(30px);
      opacity: 0;
    }
    
    /* ... 省略了其他必要的 CSS */
    ```

    

### keepalive

- 内部缓存怎么实现的？

- include

  - `String` include="a,b"
  - `正则` :include="/a|b/"
  - `数组` :include="['a','b']"

- 最大的缓存实例数

- `max` prop

- 缓存实例生命周期

  - ```
    <script setup>
    import { onActivated, onDeactivated } from 'vue'
    
    onActivated(() => {
      // 调用时机为首次挂载
      // 以及每次从缓存中被重新插入时
    })
    
    onDeactivated(() => {
      // 在从 DOM 上移除、进入缓存
      // 以及组件卸载时调用
    })
    </script>
    ```

### mixins

- 全局注册

  - ```
    cosnt gloablMixins = ()=>{consloe.log('mixins')}
    app.mixin(gloablMixins)
    ```

- 局部注册

  - ```
    
    ```

### extends

- 优先级高于 mixins
- 继承组件的方法属性 专注与继承 `提高代码复用`
- 很少用 一般习惯使用 v-if 来实现 组件多样性 或者slot

