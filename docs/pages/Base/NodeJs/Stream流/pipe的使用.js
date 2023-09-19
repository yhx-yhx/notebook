const fs = require('fs');
// 传统写法
// fs.readFile('./pip.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./pip.txt', 'Hello world', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('写入成功');
//             }
//         })
//     }
// })

// Stream 的写法
const writer = fs.createWriteStream('./pipe/pipewrite.txt');
const reader = fs.createReadStream('./pipe/pipereader.txt');

// 将读取的流 写入新的文件
reader.pipe(writer)
// writer.close()