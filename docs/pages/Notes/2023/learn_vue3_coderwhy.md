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

