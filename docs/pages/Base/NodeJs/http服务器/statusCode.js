
const http = require('http')

/**
 * statusCode 响应状态码
 * 
*/

const server = new http.Server((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.write('hello world')
    res.end() //结束 并返回
})
server.listen(8080, '0.0.0.0', () => {
    console.log("response 8080 端口已开启");
})