
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