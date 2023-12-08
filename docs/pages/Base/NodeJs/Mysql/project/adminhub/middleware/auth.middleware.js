const { The_passed_parameter_cannot_be_empty } = require('../constant/error-types')
const UserService = require('../service/user.service')
const { decryptPassword } = require('../utils/md5')

async function userVerity(ctx, next) {
    const { username, password } = ctx.request.body
    if (username && password) {
        console.log(username, password);
        await next()
    } else {
        const error = new Error(The_passed_parameter_cannot_be_empty)
        ctx.app.emit('error', error, ctx)
    }
}

//密码解密

async function handlePassword(ctx, next) {
    // const { password } = ctx.request.body
    // ctx.request.body.password = await decryptPassword(password)
    await next()
}

module.exports = {
    userVerity,
    handlePassword
} 