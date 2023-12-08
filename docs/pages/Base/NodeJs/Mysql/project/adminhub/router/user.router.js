const Router = require('koa-router');
const router = new Router({ prefix: "/user" });
const { create } = require('../controller/user.controller');
const { userVerity, handlePassword } = require('../middleware/user.middleware');
router.post('/', userVerity, handlePassword, create);

// router.post('/', (ctx, next) => {
//     ctx.body = 'Hello World post';
// })

module.exports = router;