function userError(error, ctx) {
    ctx.body = error.message
}

module.exports = userError;