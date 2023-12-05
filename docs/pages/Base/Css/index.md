
# CSS详细教程

## 目录

- [权重与继承](#权重与继承)
- [选择器](#选择器)  
- [文本样式](#文本样式)
- [背景与边框](#背景与边框)
- [盒模型](#盒模型) 
- [定位与浮动](#定位与浮动)
- [CSS3样式](#css3样式)
- [动画](#动画)

## 权重与继承

权重由高到低排列：

- !important
- 行内样式
- id
- class
- 标签
- 继承 
- *

## 选择器

选择器用于选取要设置样式的元素。

- 元素选择器:直接使用元素名称作为选择器
- id选择器:#id名
- 类选择器:.class名  
- 属性选择器:[attr=value]
- 后代选择器:div p
- 下一个兄弟选择器 +
- 后面的兄弟选择器 ~

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

/* 下一个兄弟选择器 */
div + p {
    border:1px soild blue;
}


/* 后面的兄弟选择器 */
div ~ p {
    border:1px soild blue;
}
/* 结构为类选择器*/
div:first-child 匹配父元素的第一个子元素div。

div:last-child 匹配父元素的最后一个子元素div。

div:nth-child(n) 匹配父元素的第n个子元素div。注意，盒子的编号是从1开始算起，不是从0开始算起。

div:nth-child(odd) 匹配奇数

div:nth-child(even) 匹配偶数

div:nth-last-child(n) 匹配父元素的倒数第n个子元素div。

div:first-of-type 匹配同类型中的第一个同级兄弟元素div。

div:last-of-type 匹配同类型中的最后一个同级兄弟元素div。

div:nth-of-type(n) 匹配同类型中的第n个同级兄弟元素div。

div:nth-last-of-type(n) 匹配同类型中的倒数第n个同级兄弟元素div。
div:empty 匹配没有任何子节点（包括空格等text节点）的元素div。

div:target 匹配相关URL指向的div元素。要配合锚点使用。


/*伪元素选择器 */
div::before 设置在 元素div 前面（依据对象树的逻辑结构）的内容，配合content属性一起使用。

div::after 设置在 元素div 后面（依据对象树的逻辑结构）的内容，配合content属性一起使用。

div::first-letter 设置div的第一个字符样式

div::fist-line 设置div 的第一行元素的样式
div::selection 设置div被鼠标选中的区域样式


/* 静态伪类 :link :visited */

/* 动态伪类 :active :focus :hover*/
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
- width/height(content)
- padding 内边距
- margin 外边距
- width:width(content)+padding+border:width(content)

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

## 动画

- 过渡

## 更多内容

此处仅列出各大类,每个知识点还有更多属性与详细用法。

可以继续补充完善这份CSS教程大纲,欢迎提出宝贵意见。
