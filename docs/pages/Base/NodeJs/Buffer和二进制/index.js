const msg = "Hello world!";
// 创建方式1
// const buffer = new Buffer(msg);
// 创建方式2 content , 编码格式（默认utf8）
const buffer = Buffer.from(msg);
// 16进制 展示 
console.log("编码", buffer); //<Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21>

// 解码 toString 默认 utf8
console.log("解码", buffer.toString()); //Hello world!
// 创建方式3 参数 字节数量
const buffer2 = Buffer.alloc(10);
console.log("创建方式3", buffer2); //创建方式3 <Buffer 00 00 00 00 00 00 00 00 00 00>
// 修改 buffer2
buffer2[0] = 80;
buffer2[1] = 65;
console.log("修改", buffer2); //修改 <Buffer 50 41 00 00 00 00 00 00 00 00>
const fs = require("fs");

// 读取文件 txt
fs.readFile('./txt.txt', function (err, data) {
    console.log('.txt:data', data)//data <Buffer e6 9d 8e e7 8b 97 e8 9b 8b>
})

// 读取png文件
fs.readFile('./png.png', function (err, data) {
    console.log('png:data', data)//png:data <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 06 b0 00 00 02 ad 08 06 00 00 00 6f d5 2e 71 00 00 20 00 49 44 41 54 78 9c ec 9d d7 92 e3 d6 96 ... 372956 more bytes>
})

// 实现 图片的截取 
// sharp 使用
const sharp = require("sharp");
sharp('./png.png').resize(200, 200).toBuffer().then(function (data) {
    fs.writeFile('./pngsharp.png', data, (err) => {
        if (err) {
            console.log('err', err)
        }
    });
})

// 创建buffer 申请内存时 默认大小8kb(内存池) 并不会频繁地申请内存 直到耗光 8kb，申请下一次内存