const express = require('express')
const multer = require('multer')
const path = require('path')

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

/**
 * formData
 * 安装multer
 * 调用 any方法 //解析非文件
 */

// const upload = multer()

// app.use(upload.any())


// app.post('/login', (req, res, next) => {
//     // 获取json
//     // req.on('data', (data) => {
//     //     console.log(data.toString());
//     // })
//     // req.on('end', () => { 
//     //     res.end('Welcome')
//     // })
//     // express
//     console.log('', req.body);
//     res.end('Welcome')

// })

/**
 * formdata
 * 上传文件 单文件
 * */
const uploads = multer({
    dest: './uploads/'
})

app.post('/uploads', uploads.single('file'), (req, res, next) => {
    console.log('获取文件信息', req.file)
    res.end('上传文件成功uploads')
})


const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads/')
        },
        filename: (req, file, cb) => {
            // 原始文件扩展名称
            cb(null, +new Date() + path.extname(file.originalname));
        }
    })
})

app.post('/upload', upload.array('file'), (req, res, next) => {
    console.log('获取文件信息', req.files)
    res.end('上传文件成功 upload')
})

/**
 * 保存日志信息
 * log morganWriteStream
*/
const morgan = require('morgan')
const fs = require('fs')

// 路径需要手动创建
const writeStream = fs.createWriteStream('./logs/access.log', { flags: "a+" })

// app.use(morgan("combined", { stream: writeStream }))

app.get('/log', morgan("combined", { stream: writeStream }),(req, res, next) => {
    res.end('输出日志')
})


/**
 * 数据传输query
 * 
*/
app.get('/query', (req, res, next) => {
    console.log(req.query);
    res.end('query')
})

/**
 * 数据传输params
*/

app.get('/parmas/:id', (req, res, next) => { 
    console.log(req.params);
    res.end('params')
})
app.listen(8080, () => {
    console.log('应用 8080');
})