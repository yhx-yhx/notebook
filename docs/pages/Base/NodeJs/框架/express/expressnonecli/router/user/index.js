/**
 * express 路由
 * 一个 Router实例 拥有完整的 中间件和路由系统
 * mini-app （迷你应用程序） 
*/
const express = require('express')

const router = express.Router()

router.get('/',(req,res,next) => { 
    res.end('get')
})

router.post('/', (req, res, next) => {
    res.end('post')
})

router.delete('/', (req, res, next) => {
    res.end('delete')
})


router.put('/', (req, res, next) => {
    res.end('put')
})


module.exports = router