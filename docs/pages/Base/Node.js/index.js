
console.log(process.argv[2])
console.log(process.argv[3])
console.log("weweewew")
// console.trace() //打印函数调用栈
// 特殊的全局对象 
//__dirname / __filename / require /export 
console.log(__dirname); //目录名称
console.log(__filename); //包含文件名称

// 常见的全局对象
// process / console / 定时器 setTimeout  setInterval setImmediate
// console.log(process.env)
// nextTick 下个进程执行
process.nextTick(() => { 
    console.log('nextTick');
})
// setImmediate 立即执行

