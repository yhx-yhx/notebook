const Router = require('koa-router');
const router = new Router({ prefix: "/login" });
const { create } = require('../controller/auth.controller');

const { userVerity, handlePassword } = require('../middleware/auth.middleware');

router.post('/', create);

// router.post('/', (ctx, next) => {
//     ctx.body = 'Hello World post';
// })

module.exports = router;