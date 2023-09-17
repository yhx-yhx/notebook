/**
 *  执行终端命令的代码
 */
const { exec, spawn } = require('child_process'); //开启一个子进程
const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args)
        // 在主进程 显示过程信息
        // 本次输出流 插入到全局的输出流中
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        // 事件钩子
        childProcess.on('close', () => {
            resolve()
        })
    })
}
module.exports = {
    commandSpawn,
    exec
}