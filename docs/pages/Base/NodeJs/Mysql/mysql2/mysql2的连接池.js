// !连接池 重用以前的链接 来帮助减少 链接Mysql服务器所花费的时间，有利于改善查询延迟 避免建立新的连接的开销
const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'av-player',
    port: 3306,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    enablekeepAlive: true,
    keepAliveInitialDelay: 0,
});


// pool.query('SELECT * FROM `singer` WHERE location = ?',
//     ['中国台湾'],
//     (err, result) => {
//         console.log(result);
//     })

pool.execute('SELECT * FROM `singer` WHERE location = ?',
    ['中国台湾'],
    (err, result) => {
        console.log(result);
    })