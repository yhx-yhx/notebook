/**
 * 核心代码 1千行
 * express  koa 开发成员基本一致
 * 写在前面 nodejs coderwhy13 未看完【koa 源码解读部分没看】
 * 
*/

/**
 * koa-router 社区插件
 * 
 * */ 
const Koa = require('koa'); //类

const app = new Koa()

// koa只有 use 这一种注册方式
// 无 方法注册
// 无 连续注册
// 无 path 注册

// app.use(({ resquest,response}, next) => {
//     response.body = "Hello Word"
// })

const UserRouter = require('./router/user')

app.use(UserRouter.routes()) // UserRouter.routes() 获取中间件

// 统一错误处理 某个路由错误
app.use(UserRouter.allowedMethods())

/**
 * params 处理 
*/ 
const ParamsRouter = require('./router/params')

app.use(ParamsRouter.routes()) 

// 统一错误处理 某个路由错误
app.use(ParamsRouter.allowedMethods())

/**
 * json 处理 
*/

const JsonRouter = require('./router/json')

app.use(JsonRouter.routes())

// 统一错误处理 某个路由错误
app.use(JsonRouter.allowedMethods())


const ReponseRouter = require('./router/response')

app.use(ReponseRouter.routes())

// 统一错误处理 某个路由错误
app.use(ReponseRouter.allowedMethods())


// const StaticRouter = require('./router/static')

// app.use(StaticRouter.routes())

// // 统一错误处理 某个路由错误
// app.use(StaticRouter.allowedMethods())


const koaStatic = require('koa-static')
app.use(koaStatic('./static'))


const ErrorRouter = require('./router/error')

app.use(ErrorRouter.routes())

// 统一错误处理 某个路由错误
app.use(ErrorRouter.allowedMethods())


// 处理页面错误

app.on('error', (err, ctx) => {
    ctx.status = 401
    ctx.body = err.message
})
app.listen(8080, () => { 
    console.log('8080 服务器启动成功');
})