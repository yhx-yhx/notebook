// app 入口服务
require('./app/datebase')
const app = require('./app');
const { APP_HOST, APP_PORT } = require('./app/config');

const APP_HOST_PORT = APP_HOST + ':' + APP_PORT

app.listen(APP_PORT, () => {
    console.log(`服务器启动端口:${APP_HOST_PORT}\n服务器启动成功~~~~`);
}) 