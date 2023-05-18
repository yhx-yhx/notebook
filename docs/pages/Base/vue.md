# Vue3.0

## 生命周期钩子函数

setup 创建实例前

onBeforeMount 挂载DOM前

onMount 挂载DOM后

onBeforeUpdate 更新组件前

onUpdated 更新组件后

onBeforeUnmount 卸载销毁前

onUnmounted 现在销毁后

## 组合API-reactive函数

将**复杂类型数据**包装成一个**响应式数据**

## 组合API-toRef函数

将复杂数据类型的数据 解构成 单个**响应式数据**；

PS：解构语法 解构出来的数据 不具有响应式；

```
const obj =reactive({name:'xxx',age:23})
const name =toRef(obj,'name')
```

**使用场景**：有一个响应式对象数据，在模板中仅需要其中一个数据；

## 组合API-toRefs函数

将整个对象变成响应式数据对象

**使用场景**:将数据解构展开，使用对象中的多个或所有属性作为**响应式数据**

## 组合API-ref函数

将**简单数据类型** 包装成 响应式数据

PS：**修改时** 必须使用**.value**; **模板中** 省略 **.value**

## 组合式API-computed 函数

**支持双向绑定**

```
const newAge=computed(()=>{
  	get(){
  	return age.value+2
  	}
  	set(value){
  	age.value=value
  	}
})
```

## 组合式API-watch函数







