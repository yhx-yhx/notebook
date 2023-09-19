/**
 * Stream流
*/
const fs = require('fs');
const reader = fs.createReadStream('./foo.txt', {
    start: 3,
    end: 6,
    highWaterMark: 2
})
// 读取文件
reader.on("data", (data) => { 
    console.log(data);
    setTimeout(() => { 
        reader.resume();
    },1000)
})
// 监听开启
reader.on('open', (data) => { 
    console.log('文件被打开了');
})
// 监听关闭
reader.on('close', (data) => {
    console.log('文件被关闭了 ' );
})

//传统写入方式
fs.writeFile('./foo.txt', 'hello world foo', (err) => { 
    if (err) { 
        console.log(err);
    }
})

// 写入文件
const writer = fs.createWriteStream('./foo.txt',{flags:'a',start:4})
writer.write('你好啊', (err) => { 
    if (err) { 
        console.log(err);
    }
})
//写入完成 同时关闭流
writer.end('追加到最后')
writer.on('close', (data) => { 
    console.log("文被关闭");
})
