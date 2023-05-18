# scss

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
```

