
const { writeFile } = require('fs')
const http = require('http')
const url = require('url')
const qs = require('querystring')
const fs = require('fs')

/**
 * form-data
 * 
 * 
*/

const server = new http.Server((req, res) => {
    const { pathname } = url.parse(req.url)
    const { method } = req
    if (pathname === '/file') {
        if (method === 'POST') {
            req.setEncoding('binary')
            /**
             * error 文件上传
            const fileWriter = fs.createWriteStream('./foo.jpg', { flags: 'a+' })
            // req.pipe(fileWriter)
            req.on('data', data => {  
                // data 不仅仅包含 文件 还有很多文件信息 描述
                需要做截取
                fileWriter.write(data.toString())
            })
            
            req.on('end', () => { 
                console.log('上传成功');
            })
              */
            let body = ''
            let result = ''
            const boundary = req.headers['content-type'].split(';')[1].split('=')[1]
            req.on('data', (data) => { 
                //获取进度尚未实现
                result += (`文件已经上传了${(body.length / data.length) * 100} %\n`)
                body += data
            })
            req.on('end', () => {
                /**
                 * 处理 body
                 */
                // 1.获取 contnet-type === query string
                let payload = qs.parse(body, '\r\n', ': ') //以'\r\n' 分割 ，key valve 用 ’：‘分割
                const ContentType = payload['Content-Type']
                const ContentTypeIndex = body.indexOf(ContentType)
                const ContentTypeLength = ContentType.length
                // 2.截取掉 content-type 之前的string 包含 content-type
                // console.log('Content-Type', payload['Content-Type']);
                let dealData = body.substring(ContentTypeIndex + ContentTypeLength)
                // 3去除空格
                dealData = dealData.replace(/^\s\s*/, '')
                // 4 去除 boundary
                dealData = dealData.substring(0, dealData.indexOf(`--${boundary}--`))
                // const fileWriter = fs.createWriteStream(`./xxx.jpg`, {encoding:'binary'})
                // fileWriter.write(dealData)
                // console.log(dealData);
                fs.writeFile('./xxx.png', dealData, 'binary', (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                res.end(result + '文件已经上传了10%\n' +"上传成功")
            })
        }
    }

})
server.listen(8080, '0.0.0.0', () => {
    console.log("response 8080 端口已开启");
})