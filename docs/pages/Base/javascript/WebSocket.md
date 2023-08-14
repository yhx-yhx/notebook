# WebSocket 

> 通过 WebSocket 对象 创建 管理 WebSocket 连接，实现数据发送 与接受数据的API；

<br/>

## 使用

```javascript
// 创建一个 WebSocket 对象
const ws = WebSocket() //构造函数 f(url,?protocols);返回一个 WebSocket对象

```

## 属性

[`WebSocket.binaryType`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/binaryType)

使用二进制的数据类型连接。

[`WebSocket.bufferedAmount`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/bufferedAmount) 只读

未发送至服务器的字节数。

[`WebSocket.extensions`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/extensions) 只读

服务器选择的扩展。

[`WebSocket.onclose`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/close_event)

用于指定连接关闭后的回调函数。

[`WebSocket.onerror`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/error_event)

用于指定连接失败后的回调函数。

[`WebSocket.onmessage`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/message_event)

用于指定当从服务器接受到信息时的回调函数。

[`WebSocket.onopen`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/open_event)

用于指定连接成功后的回调函数。

[`WebSocket.protocol`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/protocol) 只读

服务器选择的下属协议。

[`WebSocket.readyState`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/readyState) 只读

当前的链接状态。

[`WebSocket.url`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/url) 只读

WebSocket 的绝对路径。

![websocket](/images/websocket.png)

## 实例方法

### close

> **`WebSocket.close()`** 方法关闭 [`WebSocket`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 连接或连接尝试（如果有的话）。如果连接已经关闭，则此方法不执行任何操作。
>
> [`CloseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent)的允许的状态码见[状态码列表](https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent#status_codes) 。

#### 参数

```javascript
ws.close() //code状态码 默认使用 1005
//reason 一个人类可读的字符串，它解释了连接关闭的原因。这个 UTF-8 编码的字符串不能超过 123 个字节。
```

**备注：** 在 Gecko 8.0 之前版本的 Gecko 里，这个方法不支持传参数。

### send

> **`WebSocket.send()`** 方法将需要通过 WebSocket 链接传输至服务器的数据排入队列，并根据所需要传输的 data bytes 的大小来增加 `bufferedAmount`(*尚未发送到服务器的字节数*)的值。若数据无法传输（例如数据需要缓存而缓冲区已满）时，套接字会自行关闭。

#### 参数

```javascript
ws.send('message') //data 用于传输服务器的数据必须是以下类型：USVString（文本字符串）、ArrayBuffer（底层二进制数据）、Blob（将队列中的二进制传输）、ArrayBufferView（以二进制帧形式发送任何的JavaScript类对象数组）
```



## 事件

### close

> 事件监听器将在 WebSocket 连接的[`readyState`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/readyState) 变为 `CLOSED`时被调用；

### error

> error 状态将会被触发；

### message

> 接受到新消息是时被触发

### open

> 当 WebSocket 连接状态 readyState 变为 1时；这意味着当前数据连接已经准备好发送与接收数据，此时会触发该事件。





