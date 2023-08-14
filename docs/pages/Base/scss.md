
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
  border: {
    style: solid;
    width: 1px;
    color: #ccc;
  }
}

//编译后
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
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

@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//编译后
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

//========= 给混合器传递参数
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

a {
  @include link-colors(blue, red, green);
}
// 编译
a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }


// 默认参数混合器
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}


//调用时

@include link-colors(red)//$hover和$visited也会被自动赋值为red。
```

## 继承

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

**继承细节**
```scss
  混合器与 继承相比 继承生成的css代码更少 ；如果你非常关心站点速度，请牢记这一点
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
## 补充
**好处**
- 嵌套写法 减轻了繁重的 css 代码 ；
- 代码混入 提高了复用性；
- 属性嵌套 减轻了繁杂的 css属性

**当用户在使用IE浏览器时，你会通过JavaScript在body标签上添加一个ie的类名，为这种情况编写特殊的样式如下：**

```scss
#content aside {
  color: red;
  body.ie & { color: green }
}

/*编译后*/
#content aside {color: red};
body.ie #content aside { color: green }

```


```scss

article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}

//编译后
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }

```

**静默注释**
```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```