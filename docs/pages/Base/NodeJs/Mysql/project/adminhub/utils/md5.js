// MD5
const crypto = require('crypto')

async function encryptPassword(password) {
    // 只可以给文本加密
    // 不能够给数字加密
    const result = crypto.createHash('md5').update(password.toString()).digest('hex')
    return result
}

async function decryptPassword(password) {

}

module.exports = { encryptPassword, decryptPassword }