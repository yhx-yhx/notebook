const http = require('http')
/**
 * header 属性
 * content-type :携带的数据类型
 * applicant/json：json
 * text/plain ：文本
 * application/xml：xml
 * multipart/form-data ：上传文件
*/

/**
 * header 属性
 * content-length :文件大小和长度
*/

/**
 * header 属性
 * connection:keep-alive
 * http 基于TCP 协议 通常进行请求响应结束后 立即中断
 * Node 中默认是 5s
 * 服务端保持时间不同
*/

/**
 * header 属性
 * accept-encodeing :告知服务器 客户端支持 的文件压缩格式 例如 js 压缩成 gzip 编码，对应文件格式 .gz
 * 
*/

/**
 * header 属性
 * accept :告知服务器接受文件格式类型
 * 
*/

/**
 * header 属性
 * user-agent :客户端相关信息
 * 
*/

const server = new http.Server((req, res) => { 
    res.setHeader('Content-Type', 'application/json')
    console.log(req.headers);
    res.end('end')
})
server.listen(8080, '0.0.0.0', () => {
    console.log("8080 端口已开启");
})