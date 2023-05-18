> ##  [HTML MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)

# HTML 

## 基本结构

| 标签        |                             说明                             |
| :---------- | :----------------------------------------------------------: |
| DOCTYPE     |                       声明为 HTML 文档                       |
| html        |           lang:网页的语言，如 en/zh 等,非必填选项            |
| head        |      文档说明部分，对搜索引擎提供信息或加载 CSS、JS 等       |
| title       |                           html标题                           |
| keyword     |                          声明关键词                          |
| description |                     声明html页面信息描述                     |
| body        |                         html主体内容                         |
| meta        | 声明元信息（信息配置标识）[更多](https://www.runoob.com/tags/tag-meta.html) |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## 页面结构

### 标题标签h1-h6

标签说明：h1 - h6 标签被用来定义 HTML 标题。

**h1定义重要等级最高的标题。h6 定义重要等级最低的标题**

```html
    <h1>我是h1标签</h1>
    <h2>我是h2标签</h2>
    <h3>我是h3标签</h3>
    <h4>我是h4标签</h4>
    <h5>我是h5标签</h5>
    <h6>我是h6标签</h6>
```

### 语义化标签

`语义化标签 主要是有利于编码阅读 最主要的是为了 更好的seo`

#### 页眉页脚

header  footer

#### 头部区域

header

#### 导航区域

nav

#### 主要区域

main

#### 内容区域

article

#### 区块定义

section

#### 附加内容区域

aside

## form表单

### input   

`type  支持类型 button checkbox color date datetime-loacl email file hidden(提交隐藏信息) image month number password radio range reset search submit tel text time url week`  

## 块级元素

`h div ul li dl dd dt form header hr p ol pre section aside form  footer table 等`

## 行内元素

`span label select input  img a  等`    

`上述作为 区分 无非就是 人为规定的遵循的标准 浏览器厂商 以 display:block; or  display:inline-block`

## 盒子模型

### 标准盒子

width(content)   box-sizing :content-box;

### 怪异盒子

  border + padding + content = width box-sizing:border-box;

