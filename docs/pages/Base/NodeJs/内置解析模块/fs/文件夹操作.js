/**
 * 文件夹的操作
 * 1.创建文件夹
 * 2.读取文件所在文件的所有文件
 * 3.文件夹的重命名
*/
const fs = require('fs')
const path = require('path')

const filePath = "./测试文件夹"
// 判断文件是否存在
console.log('fs.Directory.exists(filePath)', fs.existsSync(filePath))
if (!fs.existsSync(filePath)) {
    // 1.创建文件夹
    fs.mkdir(filePath, (err) => {
        console.log('err', err)
    })
}

// 2.读取文件所有文件
// 封装获取文件在所有内容文件
const getFiles = (filePath, result) => {
    return new Promise((resolve, reject) => {
        fs.promises.readdir(filePath, { withFileTypes: true }).then(files => {
            files.forEach(file => {
                result.push(file.name)
                if (file.isDirectory()) {
                    getFiles(path.resolve(filePath, file.name), result)
                }
            })
            files.filter(file => file.isDirectory()).length === 0 && console.log(result) && resolve(result)
        })

    })
}
// 深层的await return 
getFiles(filePath, []).then(res => {
    console.log('res', res);
})

// fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
//     files.forEach(file => {
//         console.log('是否是个文件夹', file.isDirectory());
//         console.log('是否是文件', file.isFile())
//         console.log('文件名', file.name);
//     })
// })
// 3.文件夹的重命名
if (!fs.existsSync('./测试文件夹/testReName')) {
    fs.rename("./测试文件夹/test", "./测试文件夹/testReName", (err) => {
        console.log('err', err)
    })
}
// 4.文件的复制
fs.copyFile('./测试文件夹/testReName/tr01.txt', './测试文件夹/testReName/tr02.txt', (err) => {
    console.log('err', err);
})
