const http = require('http')
/**
 * 
 * 两中创建方式
 * 1.new http.Server
 * 2.http.createServer()
 * 本质一样的
*/

const server1 = new http.Server((req, res) => { 
    res.end('server1')
})
server1.listen(8081, '0.0.0.0', () => { 
    console.log('8081 启动成功');
})
const server2 = http.createServer((req, res) => {
    res.end('server2');
})
// 0.0.0.0 监听IPV4 的所有值 默认值 也是 IPV4：0.0.0.0 IPV6 ：::
server2.listen(8082, '0.0.0.0', () => {
    console.log('8082 启动成功');
    console.log(server2.address().port); //获取端口
})
/**
 * 监听方法使用
*/ 