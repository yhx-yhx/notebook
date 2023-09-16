/**
 * 
 * 
*/
const fs = require('fs')
const filePath = "./abc.txt"
const content = "hello world 我是 hello World"
/**
 * 1文件写入
 * @param{filePath, content,options:{flag:""},callback} 
 * 
*/
fs.writeFile(filePath, content, (err) => {
    console.log(err);//null error
})
// 注意读取写入 不要同时使用
// 2读取文件
fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    console.log('data', data)//data hello world 我是 hello World
})