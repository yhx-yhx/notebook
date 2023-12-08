const mysql = require('mysql2');
const { APP_PORT,
    APP_HOST,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME } = require('./config');
// create pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
})
pool.getConnection(function (err, connection) {
    if (err) {
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功');
});

module.exports = pool;