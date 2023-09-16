const path = require('path');
const path1 = '/User/yhx'
const path2 = 'abc.txt'
// 路径拼接
const completedPath = path.resolve(path1, path2)
console.log('完整路径', completedPath) //完整路径 E:\User\yhx\abc.txt
// 获取文件基础路径
const basePath = path.dirname(completedPath)
console.log('文件基础路径', basePath)//文件基础路径 E:\User\yhx
// 获取文件名
const fileName = path.basename(completedPath)
console.log('文件名', fileName)//文件名 abc.txt
// 获取文件扩展名
const extName = path.extname(completedPath)
console.log('文件扩展名', extName)//文件扩展名 .txt

// 通过 json实现路径拼接
const path3 = path.join(path1, path2)
console.log('路径拼接', path3) // 路径拼接 \User\yhx\abc.txt
// 与 path.resolve 与 path.join 区别
// 1以 '/' './','../' 开头 resolve 会携带 父级到根目录