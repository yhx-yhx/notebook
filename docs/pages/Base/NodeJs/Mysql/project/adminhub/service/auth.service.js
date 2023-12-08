const pool = require('../app/datebase')
class UserService {
    async create(user) {
        // 信息比对
        // 根据username 查询数据库
        const { username } = user
        const [results, fields] = await pool.promise().query(`select name  from users WHERE name = "${username}"`)
        return results
        // 用户名密码是否表中的数据一直
    }
    // 获取当前名称的用户
    async getUserName(name) {
        const result = await pool.promise().query(`select name from users WHERE name = "${name}"`)
        return result
    }
}

module.exports = new UserService();