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
  
fetch('xx/xxx/',{method:'POST',signal:abortController,{page:1}).then(res=>res.json()).then(res=>console.log(res))
  setTimeout(()=>abortController.abort(),5000)
  ```
  

#### Header 对象

- 方法 has get delete set keys values entires append(与set类似)





### 14DOM

- 节点