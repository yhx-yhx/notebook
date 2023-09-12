### 23 JSON
#### 语法

- 支持3种类型值：
  - 1.简单值：字符串、数值、布尔值 和 null （**undefined不可以**）
  - 2.对象 可以是复杂类型 也可以是简单类型
  - 3.数组 [简单类型|复杂类型]
- 没有变量 函数 对象实例的概念
- JSON中所有的记号都只是表示**结构化数据**

#### 解析与序列化

- stringify（）和parse（）方法

  - JSON.stringify() 

    - 会将一个JavaScript 对象 序列化成一个字符串
    - undefined 类型会被直接跳过 
    - 第一个参数 **js 对象** 第二个参数 **需要被转化成字符串的字段
    - 第三个参数 **控制参数的缩进 与空格** ；例如 4：每级缩进的4个空格；数值大于10 自动换行 ；可以是数字、Tab或任意字符串

  - JSON.parse()

    - 将json序列化的字符串 转化成 JavaScript 对象

    - 参数1序列化字符串 参数二 **替换函数 数据格式包装替换**

    - ```javascript
      JSON.parse(JSONText,(key,value)=>key==="Date"?new Date(value):value)
      ```

- JSON.stringfy(objct,[titleName,titleName2]) 代替函数 

- JSON.parse(json)还原函数

- 其它参数的目的 为了修改或过滤数据
