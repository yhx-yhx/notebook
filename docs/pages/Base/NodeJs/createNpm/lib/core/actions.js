const { promisify } = require('util') // 异步回调转成 promise
const download = promisify(require('download-git-repo')) //为了git clone 
const open = require('open')

const { VueRepo } = require('../lib/config/repo-config')

const { commandSpawn } = require('../utils/terminal')
const fs = require('fs')
const path = require('path')

const createProjectAction = async (project) => {

    // 1.执行 gitclone 命令
    await download('dirct:' + VueRepo, project, { clone: true })
    // git clone https://gitee.com/yhx825/yhxnotedist.git 

    // 2.npm install
    // windows npm 报错 实际上执行的是 npm.cmd
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${project}` })
    // 3.npm run dev
    commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
    // 动画库
    // install 下载 动画
    // 4.打开浏览器
    // npm install open
    // open("http://localhost:8080/")
    // vite启动端口

    // 选项询问向 vue3 Inquirer插件实现

}
const createCompontensAction = async (name) => {
    // 1参数 文件名称
    // 2ejs 模板代码
    // 3 编译 ejs return String
    // 写入vue文件中
    // new Promise((resolve, reject) => {
    //     // 1文件名称
    //     fs.mkdir(path.resolve(__dirname, name), (err) => {
    //         if (err) {
    //             reject(err)
    //         }
    //         resolve()
    //     })
    //     fs.writeFile(path.resolve(__dirname, name), 'data模板', (err) => {
    //         if (err) {
    //             reject(err)
    //         }
    //         resolve()
    //     })
    // })
}
module.exports = { createProjectAction, createCompontensAction } 