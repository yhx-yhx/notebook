const Router = require('koa-router')

const router = new Router({ prefix: "/users" })

router.get('/', function ({ request, response }, next) {
    response.body = "users get"
})

router.post('/', function ({ request, response }, next) {
    response.body = "users post"
})

router.put('/', function ({ request, response }, next) {
    response.body = "users put"
})

module.exports = router