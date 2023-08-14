
# Vue 3 详细教程

## 目录

- [基础概念](#基础概念)
- [数据绑定](#数据绑定) 
- [计算属性](#计算属性)
- [条件渲染](#条件渲染)
- [列表渲染](#列表渲染)
- [事件处理](#事件处理)
- [组件](#组件)
- [自定义组件](#自定义组件)

## 基础概念

- 模板语法:`{{ }}` 用于绑定数据
- `setup()` 组件选项,返回数据和方法
- `ref()` 和 `reactive()` 管理响应式状态
- `computed` 计算属性
- `watch` 监听数据变化

## 数据绑定 

使用 Mustache 语法 `{{ }}` 绑定数据。

```html
<div>{{ message }}</div>
```

```js
// setup()
const message = ref('Hello Vue!') 

return {
  message  
}
```

## 计算属性

计算属性会根据依赖进行缓存。

```js
const count = ref(1)

const double = computed(() => count.value * 2)
```

## 条件渲染 

`v-if` / `v-else` 进行条件渲染。

```html
<div v-if="score >= 90">优秀</div>
<div v-else-if="score >= 80">良好</div> 
<div v-else>加油</div>
```

## 列表渲染

`v-for` 渲染列表数据。

```html
<ul>
  <li v-for="item in list">
    {{ item }}  
  </li>
</ul>
```

## 事件处理

`v-on` 或 `@` 绑定事件处理器。

```html
<button @click="handleClick">提交</button>
```

## 组件

`app.component()` 定义组件。

```js
const TodoItem = {
  // ...
}

app.component('todo-item', TodoItem)
```

## 自定义组件

`defineComponent()` 定义可复用组件。

```js
import { defineComponent } from 'vue'

export default defineComponent({
  // 组件选项  
})
```

后续可以继续补充组合API、router、Pinia等内容。也欢迎提出宝贵意见。