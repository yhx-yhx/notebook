const http = require('http')

// 发送get 请求
http.get('http://localhost:8080/', (res) => { 
    res.on('data', (data) => { 
       console.log(data.toString());
    })
    // 
    res.on('end', () => { 
        console.log('获取到所有的请求结果')
    })
})
// 发送 post请求
const postRequest = http.request({
    method: "POST",
    hostname: "localhost",
    port: 8080,
}, (res) => { 
    res.on('data', (data) => { 
        console.log(data.toString());
    })
    res.on('end', () => { 
        console.log('获取到结果数据');
    })
})

// 返回数据
postRequest.end()
