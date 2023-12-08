const { The_passed_parameter_cannot_be_empty } = require('../constant/error-types')
const UserService = require('../service/user.service')
const { encryptPassword } = require('../utils/md5')

async function userVerity(ctx, next) {
    const { username, password } = ctx.request.body
    if (username && password) {
        if ((await UserService.getUserName(username))[0].length) {
            const error = new Error('用户名已存在')
            ctx.app.emit('error', error, ctx)
            return
        } else {
            await next()
        }

    } else {
        const error = new Error(The_passed_parameter_cannot_be_empty)
        ctx.app.emit('error', error, ctx)
    }
}

//密码加密

async function handlePassword(ctx, next) {
    const { password } = ctx.request.body
    ctx.request.body.password = await encryptPassword(password)
    await next()
}

module.exports = {
    userVerity,
    handlePassword
} 