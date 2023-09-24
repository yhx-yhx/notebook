const express = require('express');

const app = express()
/** 
 * 返回数据 json格式
*/
app.get('/res', (req, res, next) => {
    // 传统方案
    // res.type('application/json') //设置 数据格式
    // res.end(JSON.stringify({name:'yhx',age:23}))

    // res.json
    res.json({ name: 'yhx', age: 23 })
    // res.json(['wang','li','liu'])
})

/**
 * 返回状态码
*/

app.get('/status', (req, res, next) => {
    // 传统方案
    // res.type('application/json') //设置 数据格式
    // res.end(JSON.stringify({name:'yhx',age:23}))

    // res.json、
    res.status(204)
    res.json({ name: 'yhx', age: 23 })
})
app.listen(8080, () => { 
    console.log('8080 服务启动成功'); 
})