const express = require('express')
//  createApplication
// 中间件
const app = express() //return function

// app.use

app.get('/', (req, res, next) => { 
    /**
     * request
     * 
     * response
     * 
     * next 用于执行下一个中间件函数
     *  调用栈中的下一个中间件
     * 
     * next or end
    */
    res.end('Welcome')
})

app.listen(8080, () => { 
    console.log('启动成功8080');
})
