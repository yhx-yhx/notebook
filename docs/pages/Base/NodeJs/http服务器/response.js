
const http = require('http')

/**
 * response 对象
 * 
 * statusCode 响应状态码
*/

const server = new http.Server((req, res) => {
    console.log(req.method);
    res.write('hello world')
    // 设置statusCode方式一
    // res.statusCode = "4000"
    // 设置statusCode方式二
    // res.writeHead(4000)
    // 设置header方式一
    // res.setHeader('Content-Type', 'application/json')
    // 设置header方式二
    // res.writeHead(4000, { 'Content-Type':'application/json' })
    res.end('hellowordl') //结束 并返回
})
server.listen(8080, '0.0.0.0', () => {
    console.log("response 8080 端口已开启");
})