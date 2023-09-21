const Router = require('koa-router')
const router = new Router({ prefix: "/static" })
/**
 *或许是不支持 这种写法
 * 直接zaiapp.js 里面实现是没问题的
 */ 
const koaStatic = require('koa-static')
router.use('/',koaStatic('../static'))
// router.get('/', function ({ request, response }, next) {
//     response.body = "static get"
// })
module.exports = router 