# html

## 目录

- [基础标签](#基础标签)
- [表格](#表格)  
- [表单](#表单)
- [Div和Span](#Div和Span)
- [其他常用标签](#其他常用标签)
- [多媒体元素](#多媒体元素)
- [其他常用标签](#其他常用标签)
- [H5新增语义化标签](#H5新增语义化标签)
- [H5画布Canvas](#H5画布Canvas)
- [盒子模型](#盒子模型)


## 基础标签

- 标题标签:`<h1> to <h6>` 用来定义标题,`<h1>`字体最大。
- 段落标签:`<p>`定义段落 
- 文本格式化标签:`<b>` 加粗,`<i>` 斜体,`<sup>` 上标,`<sub>` 下标等
- 图片和超链接:`<img>` 插入图片,`<a>` 定义超链接
- 列表:`<ul>` 无序列表,`<ol>` 有序列表,用`<li>`包含列表项

示例:

```html
<h1>一级标题</h1>
<p>这是一个段落,包含<b>加粗</b>和<i>斜体</i>文本</p>  
<img src="pic.jpg">
<a href="https://www.example.com">这是一个链接</a>

<ul>
  <li>列表项1</li>
  <li>列表项2</li>
</ul>
```

## 表格

用`<table>`定义表格,`<tr>`定义行,`<td>`定义单元格。可以用`<th>`定义表头单元格。

示例:

```html
<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th> 
  </tr>
  <tr>
    <td>小明</td>
    <td>18</td>
  </tr>
</table>
```

## 表单

- 输入框:`<input>`的类型有text、password、checkbox、radio、button等  
- 下拉菜单:`<select>`包含`<option>`定义选项
- 文本域:`<textarea>`用户多行文本输入  

示例:

```html
<!-- 输入框 -->
<input type="text" placeholder="请输入姓名"> 

<!-- 下拉菜单 -->
<select>
  <option value="1">选项1</option>
  <option value="2">选项2</option>
</select>

<!-- 文本域 -->
<textarea rows="5" cols="50">
我的内容
</textarea>
```

## Div和Span

- `<div>`:块级元素,用于组合其他元素
- `<span>`:内联元素,用于组合内联元素

```html
<div>
  <h2>标题</h2>
  <p>段落</p>
</div>

<p>这是一段文本,包含<span>内联元素</span></p>
```

## 多媒体元素

- `<img>`:显示图片
- `<video>`:播放视频
- `<audio>`:播放音频

```html
<img src="pic.jpg">

<video src="movie.mp4" controls></video>

<audio src="music.mp3" controls></audio>  
```

## 其他常用标签

`<meta>`、`<link>`、`<script>`、`<style>`等定义元数据、引入外部资源等。

## H5新增语义化标签

`<header>`、`<nav>`、`<main>`、`<article>`、`<aside>`、`<footer>`等。

## H5画布Canvas

`<canvas>`元素用于图形绘制,通过脚本来完成:

```html
<canvas id="canvas"></canvas>

<script>
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue'; 
ctx.fillRect(50, 50, 100, 100);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();
</script>
```

## 盒子模型

HTML盒子模型可以这样理解:

HTML中的每一个元素都可以看成是一个矩形的盒子。盒子由内容(content)、内边距(padding)、边框(border)和外边距(margin)组成。

- 内容(content):盒子中的实际内容,如文本、图片等。

- 内边距(padding):清除内容周围的区域, transparent。

- 边框(border):围绕内边距和内容的边框。可以设置边框的宽度、样式、颜色等。

- 外边距(margin):清除边框外的区域,transparent 的。用来隔开邻近的元素。

盒子的总宽度计算公式:

```
总宽度 = 内容宽度 + 内边距 + 边框 + 外边距
```

默认情况下,元素框从内到外排列。 boxing model 的特点:

- 块级元素是一个矩形盒子,占满整行。内联元素只占必要的宽度。

- 盒子可以嵌套,内部盒子放在父盒子内部。

- 通过 CSS 可以控制盒子的大小、位置、显示方式等。

- 浏览器根据标准盒模型解析 HTML 代码并构建渲染树。

- 掌握好盒子模型有助于精确控制网页布局和样式。

总之,HTML 盒子模型是前端布局的基石,理解盒子的组成方式和关系是非常重要的。这有助于写出语义正确、结构合理的 HTML 代码。

对HTML盒子模型的补充理解:

box-sizing属性可以用来控制盒子尺寸的计算方式:

- content-box:默认值,Width和height仅包括内容的大小

- border-box:Width和height包括内容、内边距和边框,不会因为添加边框和内边距而改变盒子的实际宽高

一个例子:

```css
.content-box {
  box-sizing: content-box; /* 默认值 */
  width: 100px;
  padding: 10px;
  border: 1px solid #333;
}

.border-box {
  box-sizing: border-box;
  width: 100px; 
  padding: 10px;
  border: 1px solid #333;  
}
```

.content-box 的总宽度会是 100px + 10px + 10px + 1px + 1px = 122px

.border-box 指定为100px,所以其内容区实际只有100px - 20px(内边距) - 2px(边框) = 78px的宽度

设置为border-box更直观,在设置outer width时就包含了padding和border。这在响应式布局中很有用。

box-sizing改变了盒子尺寸的作用方式,让我们更容易控制布局。掌握好它可以减少不少头疼的问题。

以上对HTML做了较为详尽的概览和示例介绍,还有很多细节需要深入学习。