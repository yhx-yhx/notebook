>    :calendar: 生活的嘈杂 当然 你也可以把它称作 "聒噪"



#### 复盘



:timer_clock: 2023-11-17

最近微搭了 智慧公房系统 `整体布局` `主体功能`  `组件拆分`  

上面提到的组件更多的是 布局组件 基本采用的 flexible 布局；

组件主要是`三分栏` 布局， 提取公共的 `header `  `content` 等;

`二次封装menu组件` :过程中遇到了一个小坑 [坑点1]*后面会提到*；

`封装水印js`:支持`font` 、`横纵布局` 小问题不少：`动态自定义radio `  `布局宽度 纵横数量 区域位置` 

这里可以有两种思路：

- `canvas画布里面 划分成n个区域 找到做点位 绘制` 绘制过程 统一函数处理；
- `在div 分割成多个 child div` 将canvas 填入到 div 中来实现 `定位需要再canvas 通过 fillTex函数参数来实现 `
-  该说不说挺难算的啊

`other small tip`

- freedo 崩溃 至今尚未解决 `tmd 谁测谁是大冤种好吧`:secret:；

- `tree 右键封装` 当前的版本 不够灵活；
  - 大致思路dialog props 传递数组 传入 label event 状态
  - show 状态时 click 触发 同时 display:none `menubox`
  - `current version有点鸡肋` 可以尝试 `自定义指令` + `render function`