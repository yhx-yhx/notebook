// async function main() {
//     const mysql = require('mysql2/promise');
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '123456',
//         database: 'av-player'
//     })
//     const [result, fields] = await connection.execute('SELECT * FROM `singer WHERE location like ?`', ['中国台湾'])
//     console.log(result)
//     console.log(fields);
// }
// main()

// ! contection 公开了.promise函数
async function main() {
    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'av-player'
    })
    connection.promise().execute('SELECT * FROM `singer`  WHERE location like ?', ['中国台湾']).then(([res, fields]) => {
        console.log(res)
    }).catch(err => {
        console.log(err);
    }).then(() => {
        // reject connection
        connection.end();
    })
}
main()