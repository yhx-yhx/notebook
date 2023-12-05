### less
https://lesscss.cn/

- less 选择器嵌套

#### 定义变量
- @变量名:变量值

#### 运算符 

##### &

#### 运算

- 直接可以进行 四则运算


#### 混入

- mixins 可以携带参数

.box(@w:200px,@h:200px){
    height:@h;
    width:@w;
    background-color:red;
}
.box2{
    //混入 
    .box();
    // 混入与映射结合使用
    background-color:.box()[background-color]
}


#### 继承（extends）
- 继承 .extends(.class)

#### 杂项函数
- convert 从一种单位转为另一种单位

#### 引入 @import