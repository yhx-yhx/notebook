## 面试过程中遇到的小题目

> 我印象里的第一道面试题 让我手写的题目

### 1.实现 在AABBCCCDDDDDDD 记录每个字母出现的次数？

:::code-group

```javascript [reduce实现.js] 
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {
            return words.split('').reduce((a, b) => {
                if (a.hasOwnProperty(b)) {
                    return { [b]: a[b]++, ...a }
                } else {
                    return { [b]: 1, ...a }
                }
            }, {})
        }
```
```javascript [forof实现.js] 
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {
            const obj = {}
            for (let i of words) {
                if (obj.hasOwnProperty(i)) {
                    obj[i]++
                } else {
                    obj[i] = 1
                }
            }
            return obj
        }
```
```javascript [for实现.js]
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {
            const obj = {}
            for (let i = 0; i < words.length; i++) {
                if (obj.hasOwnProperty(words[i])) {
                    obj[words[i]]++
                } else {
                    obj[words[i]] = 1
                }
            }
            return obj
        }
```
```javascript [forEach实现.js]
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {
            const obj = {}
            words.split('').forEach(item => {
                if (obj.hasOwnProperty(item)) {
                    obj[item]++
                } else {
                    obj[item] = 1
                }
            })
            return obj
        }
```
```javascript [forin实现.js]
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {  
            const obj = {}
            for (let i in words) {
                if (obj.hasOwnProperty(words[i])) {
                    obj[words[i]]++
                } else {
                    obj[words[i]] = 1
                }
            }
            return obj
        }
```
```javascript [map实现.js]
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {
            const obj = {}
            words.split('').map(item => {
                if (obj.hasOwnProperty(item)) {
                    obj[item]++
                } else {
                    obj[item] = 1
                }
            })
            return obj
        }
```
:::

### 2.数组扁平化

::: code-group

```javascript [flat原生API实现.js]
const arr = [1, [2, [3, [4, 5], 6], 7], 8]
const flat = (arr) => arr.flat(Infinity)
```
```javascript [reduce实现.js]
const arr = [1, [2, [3, [4, 5], 6], 7], 8]
const flat = (arr,aa)=>arr.reduce((a,b)=>{
    if(Array.isArray(b)){
       return flat(b,a)
    }else{
       return  [...a,b]
    }
},aa)
```
``` javascript [forEach实现.js]
const arr = [1, [2, [3, [4, 5], 6], 7], 8]
const flat = (arr) => {
    const result = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flat(item))
        } else {
            result.push(item)
        }
    })
    return result
}
```
``` javascript [map实现.js]
const arr = [1, [2, [3, [4, 5], 6], 7], 8]
const flat = (arr,result) => {
    if(!result){
        result = []
    }
    return arr.map(item=>{
        if(Array.isArray(item)){
            return flat(item,result)
        }else{
            return result.push(item)
         }
    })
}
```
``` javascript [递归实现.js]
 const arr = [1, [2, [3, [4, 5], 6], 7], 8]
        const flat = (arr, result) => {
            arr.forEach(item => {
                if (Array.isArray(item)) {
                    return flat(item, result)
                } else {
                    result.push(item)
                }
            })
            return result
        }
```
``` javascript [replaceAll实现.js]
 const arr = [1, [2, [3, [4, 5], 6], 7], 8]
        const flat = (arr) => {
            return JSON.parse('[' + JSON.stringify(arr).replaceAll('[', '').replaceAll(']', '').split(',') + ']')
        }
```
:::

### 3.数组去重

:::code-group set实现
``` javascript [set实现.js]
const arr = [1,3,4,3,4,5]
let arrayDeDuplication = [...new Set(arr)]
```
```javascript  [includes实现.js]
const arrayDeDuplication = (arr) => {
    let result = []
    arr.forEach(item => {
        if(!result.includes(item)){
            result.push(item)
        }
    })
    return result
}
```
```javascript [indexOf实现.js]
const arrayDeDuplication = (arr) => {
    let result = []
    arr.forEach(item => {
        if(result.indexOf(item) === -1){
            result.push(item)
    }
    })
}
```
```javascript [filter实现.js]
const arrayDeDuplication = (arr) => {
    let result = []
    arr.forEach(item => {
        let state = result.filter(it=>it===item)
        if(state.length === 0){
            result.push(item)
        }
    })
    return result
}
```
```markdown [大体思路.md]
主要思路大差不差
- 首先遍历数组
- 判断当前元素是否存在于数组中
- 存在则进入下依次循环 不存在则添加到数组中 
```
:::

### 4.伪数组转化为数组
:::code-group
```javascript [ArrayForm实现.js]
const pseudoArray = []
Array.form(pseudoArray)
```
```javascript [concat实现.js]

```
```javascript [slice实现.js]

```
```javascript [扩展运算符实现.js]

```


:::

### 5.debounce（防抖）



### 6.throttle（节流）





### 7.函数珂里化

> 函数接受多个参数为函数的变量





### 8.继承

:::code-group
```javascript [extends实现.js]
```
```javascript [Object.create实现.js]
```
:::

### 9.深浅拷贝

### 10.promise 源码实现思路 实现all race any  并行方式

### 11.JSONP



### 12.图片懒加载


### 13.滚动加载



### 14.渲染大量数据 不卡主页面

### 15.将VirtualDom转化为真实DOM结构


### 16.new操作符


### 17.字符串abcde如何反转

1 . 首先字符串转成数组 
- Array.from()
- [...new Set()]
- split

:::code-group
```javascript [reduce实现]
let str = 'helloworld'
let tt = [...str].reduce((a,b)=>b+a,'')
```
```javascript [unshift实现]
let str = 'helloworld'
let tt = [...str].reduce((a,b)=>b+a,'')
```
:::
### 17.字符串abcde如何反转

https://blog.csdn.net/Ed7zgeE9X/article/details/119336745