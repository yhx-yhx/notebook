
const http = require('http')

/**
 * response 对象
 * 
 * 
*/

const server = new http.Server((req, res) => {
    res.end('hellowordl') 
})
server.listen(8080, '0.0.0.0', () => {
    console.log("response 8080 端口已开启");
})