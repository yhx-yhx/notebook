const http = require('http');
const url = require('url');
const qs = require('querystring'); //处理请求query

const server = new http.Server((req, res) => { 
    // console.log('url', req.url);
    // console.log('method', req.method);
    // console.log('headers', req.headers);

    // 解析参数
    const { pathname, query } = url.parse(req.url)
    if (pathname === '/login') { 
        const { username,password}= qs.parse(query)
        res.end(`username:${username}\npassword:${password}\n请求方式：GET`)
    } 
    
    // post请求方式
    else if (req.method === 'POST') { 
        if (pathname === "/post") {
            // 拿到data body
            req.setEncoding('utf8') // set
            req.on('data', (data) => { 
                // console.log(data.toString); //二进制转 utf8
                const { username,password} = JSON.parse(data)
                res.end(`username:${username}\npassword:${password}\n请求方式：POST`)
            })
           
        }
    } else {
        res.end('end login')
    }
})
server.listen(8080, '0.0.0.0', () => { 
    // request 对象封装了 传递给服务器的信息
    console.log("server服务器已成功开启");
})