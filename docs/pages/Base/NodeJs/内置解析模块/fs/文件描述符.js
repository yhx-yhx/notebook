/**
 *文件描述符
 并通过文件描述符来获取文件信息
*/
const fs = require('fs')
const filePath = "./abc.txt"

fs.open(filePath, (err, fd) => {
    if (err) {
        console.log(err)
    } else {
        console.log('fd', fd)
        // 通过文件描述符来获取文件信息
        // 在这用 总觉得是在脱裤子放屁
        fs.fstat(fd, (err, stat) => {
            console.log('stat', stat)
            console.log('err', err)
        })
    }
})
