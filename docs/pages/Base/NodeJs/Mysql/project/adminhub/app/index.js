const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

const userouter = require('../router/user.router');
app.use(bodyparser()).use(userouter.routes()).use(userouter.allowedMethods())

const authrouter = require('../router/auth.router');
app.use(bodyparser()).use(authrouter.routes()).use(authrouter.allowedMethods())

const userError = require('./errorEvent/user.error')
app.on('error', userError)

module.exports = app;