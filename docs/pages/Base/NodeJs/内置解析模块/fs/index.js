/**
 * API 大多有三种操作方式
 * 方式1：同步操作文件：代码会被阻塞
 * 方式2：异步回调操作文件：需要传入回调函数 调用回调 获取结果
 * 方式3：异步Promise ：返回Promise 通过 then catch 来处理
*/
const fs = require('fs')
const filePath = "./abc.txt"
// 方式1 同步通过操作
const getFileStatus1 = fs.statSync(filePath)
console.log('获取文件', getFileStatus1)//获取文件 
/**
 * Stats {
  dev: 4031650434,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 281474978062517,
  size: 17,
  blocks: 0,
  atimeMs: 1694870024431.592,
  mtimeMs: 1694870024431.592,
  ctimeMs: 1694870024431.592,
  birthtimeMs: 1694870007769.3984,
  atime: 2023-09-16T13:13:44.432Z,
  mtime: 2023-09-16T13:13:44.432Z,
  ctime: 2023-09-16T13:13:44.432Z,
  birthtime: 2023-09-16T13:13:27.769Z
}
*/

// 方式2 异步获取
// const getFileStatus2 = 
fs.stat(filePath, (err, data) => {
    console.log('err', err)
    console.log('data', data)// 同上
})
// console.log('getFileStatus2', getFileStatus2);

// 方式3 异步Promise
fs.promises.stat(filePath).then(res => {
    console.log('res', res);// 同上
}).catch(err => console.log(err))