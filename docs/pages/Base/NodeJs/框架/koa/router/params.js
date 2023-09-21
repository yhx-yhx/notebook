const Router = require('koa-router')

const router = new Router({ prefix: "/params" })

router.get('/:id', function ({ request, response }, next) {
    const { url, params, query } = request
    console.log(url, params, query);
    response.body = "params get"
})

router.post('/', function ({ request, response }, next) {
    const { url, params, query } = request
    console.log(url, params, query);
    response.body = "params post"
})

router.put('/', function ({ request, response }, next) {
    response.body = "params put"
})

module.exports = router