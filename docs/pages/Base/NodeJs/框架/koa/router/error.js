const Router = require('koa-router')

const router = new Router({ prefix: "/error" })

router.get('/', function (ctx, next) {
    try {
        const err = new Error("Couldn't connect")
        ctx.app.emit('error', err ,ctx)
   } catch (error) {
    console.log('error', error);
   }
})

module.exports = router