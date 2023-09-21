/**
 * 错误处理
*/ 

const express = require('express');

const app = express()


app.get('/error', (req, res, next) => {
    // 带参数 则会进入 err
    next(new Error("ERROR 应该被返回的错误信息~~~~~~~~~~~~~~~~"))
 })

app.use((err, req, res, next) => {
    res.end(err.message)
 })
app.listen(8080, () => {
    console.log('router 路由已启动');
})

/**
 * 
 */ 