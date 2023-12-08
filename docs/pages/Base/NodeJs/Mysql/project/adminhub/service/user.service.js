const pool = require('../app/datebase')
class UserService {
    async create(user) {

        // 存储用户信息
        const result = await pool.promise().query('insert into users (name,password) values(?,?) ', [user.username, user.password])
        // console.log(result, '创建成功');
        if (result[0].affectedRows) {
            return '创建成功'
        }
    }
    // 获取当前名称的用户
    async getUserName(name) {
        const result = await pool.promise().query(`select name from users WHERE name = "${name}"`)
        return result
    }
}

module.exports = new UserService();