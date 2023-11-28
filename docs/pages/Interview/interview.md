### 问题：Margin 塌陷问题如何解决？

#### 原因
   
#### 解决方法

1 触发bfc（块级格式化格式上下文）
 - 脱离文档流
    - overflow 部位none
    - 定位
    - float  

###  空窗期？

#### 解决方法

 - 帮朋友写项目 
 - 关于什么的项目 
 - 做了什么
 - 现在到了什么阶段 

### vue3 里ref 和 reactive 的区别？

如果是引用类型 ref 内部使用的是 reactive

### vue3 的diff算法

### 防抖节流 概念

防抖 一定时间触发只执行最后一次
节流 一定时间 短信验证码 一段时间只执行一次


### 什么是websocket 

H5 提供的持久连接（长轮询）；
http1.0 http1.1都是不支持的 持久连接的；
http1.1的 keepalive 是将多个 http 请求合并为一个；

websocket 是基于 http协议的
http1.0 只允许一个request 返回一个response；
http1.1 允许客户端 发出多个request 服务器可以同时返回多个response 关系是一一对应的；

### http 2.0

https 是基于ssl加密的http 协议 ；
（ssl 安全通信协议 加密方式 有公钥 加密 私钥加密）；

提升的访问速度（对于 http1.0而言 请求时间更少 请求速度更快）
多路复用（在一个物理信道上同传输多个信号，发送多个请求 提升了信道的利用率 降低传输成本 【当然引发 工艺成本？】）
改善了（同一时间 同一域名请求数量 超过会被阻塞）
二进制分帧 （将传输信息分割陈更小的信息单元（信息和帧） 并对他们进行二进制分帧 同时为了兼容 http1.x 将header封装到了Headers中 request body封装到了Data帧中）

### 请求状态码？

### fetch 发送两次请求？

options 请求 预检请求 服务器是否支持该请求类型 
第二次发送真正的请求

### cookies sessionStorage localStorage 区别联系？

sessionStorage 生命周期为 关闭浏览器窗口
localStorage 生命周期为 永久，除非手动删除
cookies 生命周期为 设置过期时间

### web worker ?

执行指定的 URl 脚本 脚本必须遵守 同源策略
可以用来执行复杂的脚本 不会阻塞主线程

### HTML语义化标签的理解

Html5 新增的语义化标签 结构良好 便于阅读 有利于SEO 利于开发和维护

### iframe 是什么 优缺点？

iframe 是内联框架 嵌入网页 的解决方案 是移动端的解决方案

缺点：
1. 搜索引擎 无法解析 无法爬取
2. 页面加载速度慢 onload 事件无法触发
3. 同源策略（？） 


### Doctype 作用？

文档的声明告诉浏览器 当前文件采用的什么标准 
严格模式 浏览器必须支持HTML5规范 才能被正常渲染
混杂模式 是为了兼容旧版本的浏览器 
现代的浏览器都是支持HTML5的

### cookies 防止XSS工具？

XSS  是一种网站的安全漏洞攻击，通过代码注入网页 其他用户受到不可控影响的攻击方式
主要分为反射形 存储形和 DOM-based 
通过Xss 来获取用户的敏感信息 cookies session tokens 
或者以其他方式欺诈用户 甚至完全控制浏览器

### RESTFUL 是什么？

RESTFUL 是一种通过HTTP协议传输数据，通过URL来标识资源的位置和状态


### click ios 会有300ms 延迟？

1. 禁用掉缩放 viewport user-scaleable=no
2. 检测到touchend事件后 立即模拟触发 click事件 阻止 touchend 事件的默认行为


### 强缓存 协商缓存？


