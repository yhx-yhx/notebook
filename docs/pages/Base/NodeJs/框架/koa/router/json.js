const Router = require('koa-router')

const router = new Router({ prefix: "/json" })
const path = require('path')

/**
 * koa-bodyparser 第三方库
 * 解析json 解析 urlencoded
 * 
 */
const bodyParser = require('koa-bodyparser')
router.use(bodyParser())

const multer = require('koa-multer')


router.get('/', function ({ request, response }, next) {
    response.body = "json get"
})

const upload = multer({
    dest: '/upload',
})

/**
 * form-data 解析
 */

// router.post('/', upload.any(), function ({ request, response,req }, next) {
//     console.log(request.body); //解析json  解析 urlencoded
//     console.log(req.body); //form-data 解析
//     response.body = "json post"
// })

/**
 * 文件上传
 * 
 */
const uploadFile = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads') //文件夹必须是存在的
        },
        filename: (req, file, cb) => {
            // 原始文件扩展名称
            cb(null, +new Date() + path.extname(file.originalname));
        }
    })
})

router.post('/', uploadFile.single('file'), function ({ request, response, req }, next) {
    console.log(request.body); //解析json  解析 urlencoded
    console.log(req.body); //form-data 解析
    response.body = "json 文件上传"
})


router.put('/', function ({ request, response }, next) {
    response.body = "json put"
})




module.exports = router