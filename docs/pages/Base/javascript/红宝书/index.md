## 21章 错误处理与调试

- trycatch 异常捕获

```javascript
try{
    //正常状态执行
    console.log(wewewe)
}catch(error){
    //所有浏览器都有 message属性
    console.log(error.message) //wewewe is not defined
}finally{
    //最终都会被执行
    console.log('最后都被执行了 不论是否被catch')
}
```

- 场景用法
  - 在某个第三方库中存在 不致命的 错误（无法修改） ，可以使用trycatch方法来进行 包裹 
  - 若明确知道代码错误 这样就不再适合 用trycatch了

- 错误类型 8种
  - Error
  - syntaxError
  - URIError //只会在 encodeURI() 或者 decodeURI 传入格式错误时候发生 很少见
  - TypeError //类型错误
  - ReferenceError //引用错误

> Error是基类型

- 抛出错误throw

- 统一的错误处理函数 减轻代码冗余

  ```javascript
  function assert(condition,message){
      if(!condition) {
          throw new Error(message)
      }
  }
  ```

  

  ### 23 JSON

- JSON.stringfy(objct,[titleName,titleName2]) 代替函数 

- JSON.parse(json)还原函数

- 其它参数的目的 为了修改或过滤数据

### 24 网络请求

> 实际开发中尽可能用fetch 

#### XHR

- xhr XMLHttpRequest

  ```javascript
  let xhr = new XMLHttpRequest()
  xhr.open('get','资源地址',false)//第三个参数 是否开启同步
  xhr.send(null)//发送请求数据 ，无需请求体则 传递null
  xhr.readyState //
  // 0：未初始化（Uninitialized）。尚未调用 open()方法。
  // 1：已打开（Open）。已调用 open()方法，尚未调用 send()方法。
  // 2：已发送（Sent）。已调用 send()方法，尚未收到响应。
  // 3：接收中（Receiving）。已经收到部分响应。
  // 4：完成（Complete）。已经收到所有响应，可以使用了。
  ```

- abort() //取消异步请求 同时清除引用

- setRequestHeader()//设置请求头  跨域返回空 

- getAllResponseHeaders()//获取所有请求头 跨域返回空

- getResponseheaders('XX')//获取XX请求头

- FormData类型 append方法添加数据

- 超时timeout

- 进度事件 Progress Events

  ```javascript
event事件 target其属性是 XHR 
  包含额外属性lengthCoputable：布尔值 进度信息是否可用
  position：接收到的字节数
  toalSize：响应头部字节总数 用户提供的数据字节数
  ```
  
#### 预检请求  

- 先向服务器发送一个‘预检’请求，这个请求使用的OPTIONS方法并带有：Origin，请求方法，请求头
- 预检请求会有缓存 过期后才会再次发送 预检请求

#### 凭据请求

- 默认情况 跨域请求 不提供凭证（cookies，HTTP认证，客户端 SSL证书）；可以声明withCredentials 为true表明 请求会发送数据

#### 替代跨域技术 利用dom特性

- 图片探测
  - 利用img标签最早实现跨域的一种技术
  - 缺点：只能单向在服务器获取响应内容 单向通信；
- JSONP
  - 包括回调 与 数据；借用script标签 实现；
  - 缺点 安全性较差 ，无法界定请求失败 h5设定标准 onerror 但没有任何浏览器实现？（2022年）

#### Fetch

- 可以加载json
- 加载 blob
- 加载 text
- 中断请求 
  ```javascript
  let abortController = new AbortController()
  fetch('xx/xxx/',{method:'POST',signal:abortController,    {page:1}).then(res=>res.json()).then(res=>console.log(res))
  setTimeout(()=>abortController.abort(),5000)
  ```
  

#### Header 对象

- 方法 has get delete set keys values entires append(与set类似)





### 14DOM

- 节点


### 25 客户端存储
#### cookies
##### 限制
- cookies 与特定的域绑定  这个限制保证了 只能被认可的接受者接受 **不可以被其他域访问**
- 不要超过300个cookie
- 每个域的cookie总数不超过20个
- 每个cookie不能超过4096字节
- 每个域不能超过81920字节
:walking: 不同浏览器存在差异 例如:
- 最新的IE 与 Edge 限制每个域不超过 50个cookie
- 最新的fireFox 限制每个域不超过 150个cookie
- 最新的Opera 限制每个域不超过 180个cookie
- Safari 和 Chrome 对每个域的cookie数没有限制
:fu: 如果cookie 总数超过单个域 上限 浏览器会删除之前设置的cookie。浏览器之间会存在差异，避免不确定性，**不要超出限制。**

##### cookies的构成

- **名称：** 唯一标识cookie 的名称，不区分大小写；
- **值：** 存储 字符串值，值必须经过URL 编码。
- **过期时间：** 何时删除cookie值 ；时间到了立即删除 未设置时间 **会话结束删除 cookie**
- **安全标志：** 设置之后 只使用SSL安全连接的情况下 才会把cookie 发送到服务器。例如请求 https:// xxx 会携带 cookie http:xx则不会携带
- cookie 设置了secure 只能在SSL连接上发送

##### JavaScript中的 cookie

- 通过 **document.cookie** 设置； 例如：document.cookie ="name=value"
- 所有的**值与名必须是URI编码**； 必须使用decodeURIComponent() 解码;
- 简化繁杂操作 可以使用**cookie.js**

##### 子cookie

- 一个键的值 对应多组键值关系的结构；例如：**name=name1=value1&name2=value2&name3=value3;**

- 实际开发中注意**不要超出单个cookie大小**

##### 使用cookie 的注意事项

- HTTP-only 的cookie ；可以在**服务器或浏览器**进行设置；**只能在服务器读取**

- cookie **存储大量的信息 可能会影响 浏览器的性能**；保存cookie越大 请求耗费时间越长；
- cookie**不要存放敏感数据** 不安全 任何人都可以获取

####  web Storage

> 规范中的两个目标
>
> - 提供在cookie 之外的存储会话数据途径
> - 提供跨会话持久化存储大量数据机制
> - 定义了两个对象：localStorage 和 sessionStorage
> - localStorage 是永久的存储机制；sessionStorage 是跨会话的存储机制

###### storage类型

增加了如下方法

- **clear**():删除所有值；
- **getItem**(name):获取name的值；
- **key**(index):取得给定位置的名称；
- **removeItem**(name):删除给定name的名值对；
- **setItem**(name,value);设置给定name的value

##### sessionStorage 对象

- 只存储会话数据，**只能保存数据到浏览器（当前页面）关闭**；
- 存储的sessionStorage **不受页面刷新**的影响；
- sessionStorage 对象 与服务器会话紧密相关 **运行本地文件不能使用**；
- 存储在sessionStorage对象的数据 **只能在最初的页面使用** 再多页面程序用处有限；
- 添加数据 两种方式：
  - sessionStorage.setItem("name","value") //使用setItem实现
  - sessionStorage.name = value // 使用属性存储数据
- 所有现代浏览器实现存储写入 都是使用**同步阻塞**方式，因此数据会立即提交到存储；

- 获取属性 两种方式：
  - sessionStorage.getItem('name')//通过 getItem实现
  - sessionStorage.name //使用对象属性方式 获取
- 遍历所有值可以通过 for循环与 key()方法实现
- 删除属性
  - sessionStorage.removeItem(name) 实现
  - delete  sessionStorage.name //对象方法实现

##### localStorage 对象