### Formatting Context
 - IFC(Inline-Block Formatting Context) & BFC(Block Formatting Context)

在BFC 中，box会在垂直方向上 一个挨着一个排布
垂直方向上的间距由margin属性决定的
在同一个BFC 相邻的两个box之间margin会折叠
在BFC 中每个元素都会紧挨着包含块的左边缘

### 解决margin折叠问题 

- 通过跳出同一个BFC 的方式来解决（也就是创建一个新的BFC）

### 浮动元素的高度塌陷问题

- 父级元素创建BFC 
- 子元素默认高度auto
- 如果有浮动 会增加高度以包裹这些浮动元素的边缘
