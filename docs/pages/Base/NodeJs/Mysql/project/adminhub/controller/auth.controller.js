const service = require('../service/auth.service')
class AuthController {
    async create(ctx, next) {
        // 获取用户信息
        const user = ctx.request.body
        // console.log(ctx.request.body);

        // 查询数据库信息
        const result = await service.create(user)
        // 返回数据
        ctx.body = result
    }
}

module.exports = new AuthController()
