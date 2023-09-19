const http = require('http');
/**
 * 开发web服务器
*/
// 创建一个服务器
const server = http.createServer((req, res) => {
    res.end('hello change');//添加并关闭 返回数据
})
// 配置端口号，postname callback
server.listen(8888, '0.0.0.0', () => { 
    console.log('服务器已成功开启~');
})

/**
 * nodemon 文件变化直接重启
*/