
# JavaScript笔记

## 目录

- [基础语法](#基础语法)
- [数据类型](#数据类型)  
- [运算符](#运算符)
- [函数](#函数)
- [数组](#数组)
- [对象](#对象)
- [模块](#模块)
- [面向对象编程](#面向对象编程)
- [作用域](#作用域)
- [异步编程](#异步编程)

## 基础语法

### 变量

使用 `let` 和 `const` 声明变量

```js
let name = 'John';
const age = 20;
```

### 数据类型

number、string、boolean、null、undefined 等

```js
let count = 10; // number
let name = 'John'; // string
let isDone = false; // boolean
```

### 条件语句

使用 `if...else` 和 `switch` 进行条件判断

```js 
if (age > 18) {
  console.log('adult');
} else {
  console.log('minor'); 
}

switch(fruit) {
  case 'apple':
    // ...
    break;
  default:
    // ...
}
```

### 循环语句

`for`、`while`、`do...while`、`forEach`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

array.forEach(item => {
  // ...  
});
```

### 函数

使用 `function` 关键字定义函数

```js
function sum(a, b) {
  return a + b;
}
```

### 作用域

变量有函数作用域和块级作用域

```js
function foo() {
  let a = 1; 
}

if (true) {
  let b = 2;
}
```

## 数据类型

- 基本类型:Number、String、Boolean、Null、Undefined
- 引用类型:Object、Array、Function

引用类型传递和赋值时要注意是引用关系

## 数组

```js
let fruits = ['Apple', 'Banana'];

// 访问和修改
fruits[0]; 
fruits[1] = 'Pear';

// 添加和删除
fruits.push('Orange');
fruits.pop();

// 遍历
fruits.forEach(fruit => {
  console.log(fruit);  
});
```

## 函数

- 函数声明与表达式

```js
// 声明
function sum(a, b) {
  return a + b;
}

// 表达式
const sum = function(a, b) {
  return a + b;
}
```

- 默认参数和剩余参数

```js
function sum(a, b = 2) {
  return a + b; 
}

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

- 箭头函数:`(params) => expression`

- 闭包:函数内部可以访问外部的变量

## 对象

键值对的集合,使用 `.` 或 `[]` 访问属性

```js
let person = {
  name: 'John',
  age: 20 
};

person.name; 
person['name'];

// 遍历
for (let key in person) {
  console.log(key, person[key]);
}
```

## 类

ES6 引入了 class,可以面向对象编程

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHi() {
    console.log(`Hi ${this.name}`); 
  }
}

let p = new Person('John', 20);
p.sayHi();
```

## 模块

使用 `export` 和 `import` 进行模块化开发

```js
// utils.js
export function sum(a, b) {
  return a + b;
}

// main.js 
import { sum } from './utils.js';
```

## 异步编程

- 回调函数
- Promise
- async/await

```js
fetch(url)
  .then(res => res.json())
  .then(data => {});

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}
```

以上内容对JavaScript做了概览介绍,还有很多知识点需要进一步学习,比如DOM操作、BOM、AJAX等。欢迎指正错误以及补充。
以上主要介绍了JavaScript的一些基础知识点,欢迎补充和修改。
# javaScript

> > **PS： 渐进式的编写，至逻辑性不强，简单基础能想到的问题，罗列在上面；**
>
> ​          **2022-05-12 前完成 重要常用的 **
>
> ​          **后续可能会陆续更新；**

## **写在前面**

> 不要刻意的去记忆 尊重下脑子的遗忘规律

- 主要了解常用的api
- api干嘛用的 

- 传参 
-  简单了解逻辑
-  返回值

## 文档推荐

[JavaScript MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[ES6 阮一峰的  跟着大佬走 不会错的 ](https://es6.ruanyifeng.com/)

[JavaScript高级程序设计] `后续 可能会 将pdf 放进来 当然仅供阅读 尊重作者版权所有 侵删 `



### ⭐️ JavaScript

- 💬 描述：具有函数优先的轻量级，解释型或即时编译型的编程语言。
- 📚 资源：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

- ⭐️ 基本语法
- ⭐️ 数据类型
  - 值类型
    - 字符串 String
    - 数组 Number
    - 布尔 Boolean
    - 空值 Null
    - 未定义 Undefined
    - Symbol
    - bigInt
  - 引用类型
    - 对象 Object
    - 数组 Array
    - 函数 Function
- ✅ 数据类型转换
- ✅ 函数
  - ⭐️ 概念
  - ⭐️ 自定义函数
  - 调用方式
    - ⭐️ 全局调用
    - 构造函数调用
    - ⭐️ 函数方法调用
    - apply
    - call
  - ✅❗ 闭包
- ✅ 对象
  - 概念
  - this
  - 原型链和继承
  - 常用对象
    - 数字 Number
    - 字符串 String 对象
    - 日期 Date 对象
    - 数组 Array
    - 布尔 Boolean
    - 算数 Math
  - 自定义对象
- ✅❗ 作用域（作用域链）
- ✅ BOM API
- ⭐️ DOM API
- ⭐️ JSON
- ⭐️ Ajax
- ✅ JavaScript 执行机制



#### ✅ ES6+ 特性

- 💬 描述：新引入的 JavaScript 语法特性。
- 📚 资源：ES6 入门教程 https://es6.rua/nyifeng.com/

- let 和 const
- 变量解构赋值
- 对象扩展和新增方法
- Symbol
- Set 和 Map 数据结构
- ⭐️❗ Promise & async / await 异步编程
- Generator 函数异步编程





## 基础

### 注释

####  单行注释

```javascript

  //let num =121;//单行注释
    
```

####  多行注释

```javascript

	//以下是多行注释
	/*let num=1;
	console.log('num',num);*/

```

### 变量

#### 常见命名规则：

​    ps：合法前提；

​	单驼峰命名规范；（常量建议大写，见名知意；）

#### 变量声明

​     var  let const   

##### var

存在变量提升，仅提升声明；函作用域

```javascript
console.log(num);//undefined
var num = 23;
```

##### let

有块级作用域；函数作用域

```javascript
{
	let num =23;
}
consloe.log(num) //nd is not defined
```

##### const

声明后一定赋值；同样有块级作用域；

```javascript
const NUM=23;
```

**ps **let const 存在暂时性死区  建议先声明在使用；

## Array

### push

给数组追加 **元素**   **改变**原数组   **返回**数组长度

```javascript
let array = ['y', 'h', 'x']
console.log(array.push('good'));  //4
console.log(array); //['y', 'h', 'x', 'good']
```

### pop

删除数组末尾**元素 **     **改变**原数组  **返回**被删除元素

```javascript
let array = ['y', 'h', 'x']
console.log(array.pop());  //"x"
console.log(array); //['y', 'h']
```

### shift

删除数组起始**元素**            **改变**原数组    **返回**被删除元素

```javascript
let array = ['y', 'h', 'x']
console.log(array.shift());  //"y"
console.log(array); //['h', 'x']
```

### unshift

在数组的起始位置**添加**元素    **改变**原数组  **返回**数组长度

```javascript
let array = ['y', 'h', 'x']
console.log(array.unshift('good'));  //4
console.log(array); //['good', 'y', 'h', 'x']
```

### reverse

**翻转**             **改变**原数组   **返回**新数组

```javascript
let array = ['y', 'h', 'x']
console.log(array.reverse());  //['x', 'h', 'y']
console.log(array); //['x', 'h', 'y']
```

### join

将**数组转换成字符串**           **不改变**原数组   返回**字符串**

```javascript
let array = ['y', 'h', 'x']
console.log(array.join(""));  //yhx
console.log(array); //['y', 'h', 'x']
```

### concat

将**数组进行拼接**           **不改变**原数组   返回**新数组**

```javascript
let array = ['y', 'h', 'x']
let array1 = ['good']
console.log(array.concat(array1));  // ['y', 'h', 'x', 'good']
console.log(array); //['y', 'h', 'x']
```

### reduce

#### 1.数组求和

```javascript
let array = [1, 3, 2, 4, 5]
let sum = array.reduce((p, c) => {
     return p + c
}, 0)
console.log(sum);
//或
let obj = [{ x: 1 }, { x: 3 }, { x: 5 }]
 console.log(obj.reduce((p, c) => p + c.x, 0));
```

#### 2数组乘积

```javascript
 let array = [1, 3, 2, 4, 5]
 let f = array.reduce((p, c) => {
      return p * c
}, 1)
console.log(f);
```

#### 3二维数组转换成一维数组

```javascript
let arr = [[0, 1], [2, 3], [4, 5]]
console.log(arr.reduce((p, c) => p.concat(c), []));  //[0, 1, 2, 3, 4, 5]
```

#### 4.计算数组中每个元素出现的次数

```javascript
 let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
        names = names.reduce((p, c) => {
            //in 语法 对象：对象A中是否有a属性  ==> a in A
            //        数组中是否有 该下标元素  ===> 1 in array
            //  该语法可以找到 原生属性
            if (c in p) { 
                p[c]++;
            } else {
                p[c] = 1
            }
            return p
        }, {})
        console.log(names);
```

#### 5.按属性对object分类

```javascript
  let people = [
            { name: 'Alice', age: 21 },
            { name: 'Max', age: 20 },
            { name: 'Jane', age: 20 }
        ];
        //统计数量
        people = people.reduce((p, c) => {
            let key = c.age
            if (!p[key]) {
                p[key] = []
            }
            p[key].push(c)
            return p
        }, {})
        console.log(people);
```

#### 6数组去重

```javascript
  let Newarr = arr.reduce((p, c) => {
            if (p.indexOf(c) === -1) {
                p.push(c)
            }
            return p
        }, [])

        console.log(Newarr);
```

#### 7使用reduce 替换map和filter

```javascript
let arr = [2, 3, 45, 6, 2, 2, 2, 2]
        arr = arr.reduce((p, c) => {
            if (c < 6) {
                p.push(c)
            }
            return p
        }, [])
        console.log(arr);
```

------

### filter

根据return 条件过滤数组        **不改变**原数组   返回**新数组**

```javascript
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.filter((item) => {
            return item > 5
        }));
```

### some

根据 返回值 boolean 类型 有一个符合条件的就会返回  true 返之 false

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.some((item) => {
            return item > 11
        }));
        //true
```

### every

根据条件返回 boolean 类型 所有 都符合条件 会返回true 反之 false

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.every((item) => {
            return item > 11
        }));
```



### indexOf

根据条件 返回 第一个 符合条件的index

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.indexOf(2));
       //1 条件严格相等
```



### lastIndexOf

与indexOf 从后往前 查找 返回正序

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.lastIndexOf(2));
```



### findIndex

条件查询 返回第一个符合条件的 index

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.findIndex((l,i)=>l >=2));
        //1
```



### findIndexLast

条件查询 从后向前 进行查询  返回的index 正序

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
        console.log(arr.findLastIndex((l,i)=>l >=2));
```

### sort

实现排序

```
let arr = [134, 78,45]
arr.sort((a,b)=>a-b)  //从小到大
arr.sort((a,b)=>b-a)   //从大到小
```

### toString

```

```

### splice

**增删改** 数组  数组方法   改变原数组

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
arr.splice(1,2) //[2, 3]
arr // [1, 5, 6, 7, 8, 9, 0]
```

### slice

截取数组

```
let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0]
arr.slice(1,9)
// [2, 3, 5, 6, 7, 8, 9, 0]
arr
// [1, 2, 3, 5, 6, 7, 8, 9, 0]
```





------



## 常见排序

### 1.冒泡排序

```javascript
let array = [3, 4, 6, 7, 8, 2, 5, 4]
for (let j = 0; j < array.length - 1; j++) {
      for (let i = 0; i < array.length - 1 - j; i++) {
          if (array[i] > array[i + 1]) {
             let temp = array[i]
             array[i] = array[i + 1];
             array[i + 1] = temp
           }
       }
}
console.log(array);
```

### 2.快速排序

```javascript
let array = [1, 6, 23, 8, 3]
for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log(array);
```

## 数组去重

### 1.ES6+Set 数组去重

```
let arr = [2, 3, 4, 4, 4, 5, 6]
console.log(Array.from([...new Set(arr)]));
```

### 2.indexOf+forEach

```
let arr = [2, 3, 4, 4, 4, 5, 6]
let newArr = []
arr.forEach((item) => {
    if (newArr.indexOf(item) === -1) {
       newArr.push(item)
      }
  })
console.log(newArr);
```

### 3.indexOf+filter

```
let arr = [2, 3, 4, 4, 4, 5, 6]
arr = arr.filter((item, index) => {
    return index === arr.indexOf(item)
})
console.log(arr);
```

### 4.reduce+includes

```
let arr = [1, 2, 3, 4, 3, 4]
arr = arr.reduce((a, b) => a.includes(b) ? a : [...a, b], [])
console.log(arr);
```

## 统计字符串中字母出现的次数

```
let str = "asdfsdsaaaaa"
let strRarr = [...new Set(str.split(''))];
let obj = {};
strRarr.forEach(el => {
    obj[el] = 0;
})

for (const j in obj) {
    for (let i = 0; i < str.length; i++) {
        if (j === str[i]) {
            obj[j]++;
        }
    }
}
console.log(obj);
```

# BOM

## 获取页面可视窗口

```javascript
console.log(innerHeight); //获取页面可视窗口
console.log(innerWidth);
```

## location

![image-20220830151358308](/image-20220830151358308.png)

# DOM

## 获取当前元素的宽高

```javascript
console.log(div.offsetHeight); //h
console.log(div.offsetWidth); //w 会与box-sizing 值同步
console.log(div.offsetLeft);  //margin-left的值
```

## offsetWidth clientWidth scrollWidth  e.pageX e.clientX e.screenX e.offsetX 区别

# javaScript API



## 对过去总结 梳理

### 大纲

- ### 基础内容

- `了解javaScript 历史`

- `基础语法、变量、注释、类型转换、运算符、分支语句、循环`

- `常用数组方法 数组 排序 去重 对象方法 Map `

- `函数 this call apply bind`

- `作用域  原型链`

- `DOM 方法  获取 事件 节点的增删改 `  

- `BOM window 原型上的api `

- ### 异步任务

- `then catch promise`













