const express = require('express')

const app = express()

// app.use(function (req, res, next) { 
//     // 统一处理json
//     if (req.headers['content-type'] === 'application/json') { 
//         req.on('data', function (data) { 
//             const json = JSON.parse(data.toString())
//             if (!req.hasOwnProperty('body')) {
//                 req.body = {}
//             }
//             let info = { ...req.body, ...json }
//             req.body = info
//             console.log(info);
            
//         })
//     }
//     req.on('end', () => {
//         next()
//     })
    
// })

/**
 * body-parser express 3.x 内置
 * body-pasers express 4.x 移出
 * body-pasers express 4.16.x 内置成函数 类似功能
*/ 

app.use(express.json())

/**
 * extended 
 * true 对urlencoded 进行解析 使用 第三库 qs
 * false 对urlencoded 进行解析 使用 Nodejs内置函数 querystring
 * 
 * */

app.use(express.urlencoded({ extended: true }))


app.post('/login', (req, res, next) => {
    // 获取json
    // req.on('data', (data) => {
    //     console.log(data.toString());
    // })
    // req.on('end', () => { 
    //     res.end('Welcome')
    // })
    // express
    res.end(JSON.stringify(req.body))
    
})

app.listen(8080, () => { 
    console.log('应用 8080');
})