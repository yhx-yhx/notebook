
# CSS详细教程

## 目录

- [选择器](#选择器)  
- [文本样式](#文本样式)
- [背景与边框](#背景与边框)
- [盒模型](#盒模型) 
- [定位与浮动](#定位与浮动)
- [CSS3样式](#css3样式)

## 选择器

选择器用于选取要设置样式的元素。

- 元素选择器:直接使用元素名称作为选择器
- id选择器:#id名
- 类选择器:.class名  
- 属性选择器:[attr=value]
- 后代选择器:div p

```css
/* 元素选择器 */
div {
  color: red; 
} 

/* id选择器 */
#container {
  width: 960px;
}

/* 类选择器 */
.box {
  background-color: #ddd;
}

/* 属性选择器 */
a[target=_blank] {
  color: blue;  
}

/* 后代选择器 */
div p {
  margin: 0;
}
```

## 文本样式

设置文字颜色、对齐等样式。

- color 
- text-align 
- text-decoration
- line-height

```css
p {
  color: blue;
  text-align: center;
  text-decoration: underline;
  line-height: 1.5;
}
```

## 背景与边框 

设置元素的背景与边框。

- background-color
- background-image  
- border-width
- border-style 
- border-color

```css
div {
  background-color: #eee;
  background-image: url("bg.png");
  
  border-width: 1px;
  border-style: solid;
  border-color: red;
}
```

## 盒模型

控制元素占用空间的方式。

- box-sizing: content-box | border-box
- width/height
- padding 内边距
- margin 外边距

## 定位与浮动

控制元素位置。

- position: static | relative | absolute | fixed
- top/left/right/bottom
- float: left | right  
- clear: left | right | both

## CSS3样式

CSS3带来了圆角、阴影、动画等样式。

- border-radius 创建圆角
- box-shadow 设置阴影
- @keyframes 定义动画
- transform 进行元素转换

## 更多内容

此处仅列出各大类,每个知识点还有更多属性与详细用法。

可以继续补充完善这份CSS教程大纲,欢迎提出宝贵意见。



好的,这里是生成的包含目录结构的SCSS详细Markdown文件:

# SCSS详细教程

## 目录

- [特征](#特征)
- [变量](#变量)
- [嵌套](#嵌套)
- [混入](#混入)
- [扩展](#扩展)
- [运算](#运算)

## 特征

SCSS是一种CSS预处理器,提供了以下额外的功能:

- 变量(Variables)
- 嵌套(Nesting)
- 混入(Mixins)
- 继承(Inheritance)
- 循环语句(Loop)
- 条件语句(Conditions)
- 运算(Operations)

SCSS文件需要编译为CSS后才能在浏览器中使用。

## 变量

变量以`$`开头,用于存储值。

```scss
// SCSS
$primary-color: #333;
$font-stack: Helvetica, sans-serif;

body {
  color: $primary-color;
  font-family: $font-stack;
}
```

## 嵌套

支持选择器嵌套,表示层级关系。

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li { 
    display: inline-block; 
  }
  
  a {
    display: block;
    padding: 6px 12px;  
    text-decoration: none; 
  }
}
```

## 混入

混入(mixin)用于定义可重用的样式组。

```scss
@mixin clearfix {
  &::after {
    content: "";
    clear: both;
    display: table;
  }
}

.container {
  @include clearfix;
}
```

## 扩展

继承(extend)避免重复选择器。

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}
```

## 运算 

支持运算符 `+`、`-`、`*`、`/`等。

```scss
.container {
  width: 100% - 30px;
}
```

SCSS提供了很多CSS不具备的额外功能,可以让我们更优雅地组织样式代码,值得学习使用。

后续可以继续补充更多SCSS知识点和示例,也欢迎提出宝贵意见。




<!-- # scss

## 变量

```
$color:blue;
$width:100px;

.main{
  background:$color;
  width:$width*2;
}
```

## @if @else

**@if条件为字符串**

```
$isShow:true;
$isRed:true;

@if($isShow==true){
    .main{
      background:$color;
      width:$width*2;
      @if(isRed==true){
          color:red
      }
      @else{
          color:blue
      }
    }
}
@else{
    .main{
      background:$color;
      width:$width*4;
    }
}
```

## @for

```
// 变量$item从1开始不包括6
@form $item from 1 to 6{
   li:nth-child(#{$item}){
       position:absolute;
       left:($item  -  1) * 100px;
       top:($item - 1)*100px
   }
}
 // 变量$item从1开始包括6
@form $item from 1 through 6{
   li:nth-child(#{$item}){
       position:absolute;
       left:($item  -  1) * 100px;
       top:($item - 1)*100px
   }
}
```

## @each

```
$color:red,blue,green;
@each $item in $colors{
    $index:index($colors,$item);
    li:nth-child(#{$index}){
    background:$item
}
}
```

## 混入 @mixin @inlude

```
@mixin tran($q,$b:2s){
transition：all 1s;
}
.main{
@include tran($q,$b)
}
```

## 嵌套

**&伪类**

```
ul{
    >li{
        background:red
        &:hover{
        color:red
    }
}
}
```

## 继承

**@extend 类名**

```
.base{
width:200px;
height:100px;
outline:none;
}
.btn_base{
  @extend .base;
  background-color:red
}
```

## 导入

**定制文件**

```
import "./xxxx"
``` -->

