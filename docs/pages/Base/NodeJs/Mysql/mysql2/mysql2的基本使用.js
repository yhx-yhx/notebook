// 引入mysql2
const mysql = require('mysql2');

// 创建连接
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'av-player'
})

// !编写查询语句
// 简单查询
// const sql = `SELECT * FROM singer WHERE location LIKE '中国台湾';`

// conn.query(sql, (err, result) => {
//     console.log(result);
//     conn.end();
// })

// !占位符查询
// const sql = `SELECT * FROM singer WHERE location LIKE ?;`
// conn.query(sql, ['中国台湾'], (err, result, fields) => {
//     console.log(result);
//     console.log(fields);// 额外的元数据
//     conn.end();
// });

// !sql的预处理使用 提供了 exectue 辅助函数，可以手动的准备 和取消准备（prepare/unprepare）
const sql = `SELECT * FROM singer WHERE location LIKE ?;`
conn.execute(sql, ['中国%'], (err, result, fields) => {
    console.log(result);
    console.log(fields);// 额外的元数据
    conn.end();
    // 如果再次执行相同语句 他讲从缓存中选取
    // 这能有效的节省准备时间获得更好的性能
})
