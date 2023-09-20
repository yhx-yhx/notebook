const express = require('express');

const app = express();

// 按顺序 依次匹配 匹配all路径

// 编写普通的中间件
// app.use(function (req, res, next) {
//     console.log('第一个中间件');
//     // 周期中只可以有 一个end 周期事件 提前结束 next()不能有end方法
//     // res.end('hello world!');
//     next();
// })

// app.use(function (req, res, next) {
//     console.log('第二个中间件');
//     next();
// })

// app.use(function (req, res, next) {
//     console.log('第三个中间件');
//     res.end('简单的中间件')
// })



/**
 * 路径匹配中间件
 * 
 */

// app.use('/home',function (req, res, next) {
//     console.log('第一个带路径的中间件');
//     res.end('路径中间件')
// })


/**
 * 路径 &方法中间件
*/
// app.get('/login', function(req, res, next){
//     console.log('路径 & 方法中间件');
//     res.end('路径 & 方法中间件')
// })

/**
 * 注册多个中间件
 */

app.get('/logins', (req, res, next) => {
    console.log("注册多个中间件1");
    next();
}, (req, res, next) => {
    console.log("注册多个中间件2");
    res.end('注册多个中间件')
})

app.listen(8080, () => {
    console.log('8080启动成功');
})
