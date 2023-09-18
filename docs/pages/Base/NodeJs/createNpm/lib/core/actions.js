const { promisify } = require('util') // 异步回调转成 promise
const download = promisify(require('download-git-repo')) //为了git clone 
// const open = require('open')

const { VueRepo } = require('../config/repo-config')

const { commandSpawn } = require('../utils/terminal')
const fs = require('fs')
const path = require('path')
// const log = require('../utils/log');
const { ejsCompile, writeFile, mkdirSync } = require('../utils/files');

const createProject = async (name, ...args) => {
    // 1.执行 gitclone 命令
    await download(VueRepo, name, { clone: true })
    // git clone https://gitee.com/yhx825/yhxnotedist.git 

    // 2.npm install
    // windows npm 报错 实际上执行的是 npm.cmd
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${name}` })
    // 3.npm run dev
    commandSpawn(command, ['run', 'serve'], { cwd: `./${name}` })
    // 动画库
    // install 下载 动画
    // 4.打开浏览器
    // open("http://localhost:8080/")

    // 选项询问向 vue3 Inquirer插件实现

}
const handleEjsToFile = async (name, dest, template, filename) => {
    // 1.获取模块引擎的路径
    const templatePath = path.resolve(__dirname, template);
    const cpnPath = `${dest.replace('router', 'views').replace("src", "@") }/${name}/${filename}`
    const routePath = `${dest.replace('/router', '').replace('src', '')}/${ name }/${name}.vue`
    const result = await ejsCompile(templatePath, { name, lowerName: name.toLowerCase(), cpnPath , routePath });

    // 2.写入文件中
    const targetPath = path.resolve(dest, name);
    mkdirSync(targetPath);
    writeFile(path.resolve(targetPath, filename), result);
}

const addpage = async (name, dest, template = '../templates/vue-component.vue.ejs', extname = "vue") => {
    handleEjsToFile(name, dest, template, `${name}.${extname}`);
}

const addRouter = async (name, dest) => {
    addpage(name, dest, '../templates/vue-component.vue.ejs', 'vue');
    // 添加路由 这里是不正确的 每次添加 应该去重写 routerjs 或者直接 按目录生成路由结构
    handleEjsToFile(name, dest, '../templates/vue-router.js.ejs', 'router.js')
}

const addApi = (name, dest) => {
    //添加一个api模板页面
    addpage(name, dest, '../templates/api.js.ejs', 'js');
}

module.exports = {
    createProject,
    addpage,
    addRouter,
    addApi
}