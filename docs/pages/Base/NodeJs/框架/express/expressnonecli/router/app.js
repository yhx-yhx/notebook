const express = require('express');

const userRouter = require('./user/index')

const app = express()

app.use('/user',userRouter)
app.listen(8080, () => { 
    console.log('router 路由已启动'); 
})