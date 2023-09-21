const Router = require('koa-router')

const router = new Router({ prefix: "/response" })

router.get('/', function ({ request, response }, next) {
    response.body = "response get"
})

router.post('/', function (ctx, next) {
    // response.status 默认为 404
    // response.body = "response post"
    // array
    // response.body = [90,90,23]
    // console.log(response.status);
    // 返回数据
    ctx.body = { name: 'response' }
    // 都可以直接进行获取 源码直接是实现了代理
})

router.put('/', function ({ request, response }, next) {
    response.body = "response put"
})
/**
 * 了解真相 再能获得绝对的自由
 */ 
module.exports = router