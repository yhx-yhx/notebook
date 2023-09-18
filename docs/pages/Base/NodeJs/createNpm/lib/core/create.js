const program = require('commander')
const { createProject, addpage, addApi, addRouter } = require('./actions')
const createCommand = function () {
    // 创建工程
    program
        .command('create <name> [others...]')
        .description('clone repository into a folder')
        .action(createProject)
    // 添加 组件模板
    program
        .command('addCmp <name>')
        .description('创建Components;例如：创建Components yhx addCmp name [-d src/Componentss] ')
        .action((name) => addpage(name, program.dest || 'src/components'))
    // 添加路由
    program
        .command('addRouter <name>')
        .description('创建router;例如：创建router yhx addRouter name')
        .action((name) => addRouter(name , program.dest || 'src/views'))
    // 添加api模板
    program
        .command('addApi <name>')
        .description('创建api;例如：创建api yhx addApi name [-d src/apis] ')
        .action((name) => addApi(name, program.dest || 'src/apis'))
}
module.exports = createCommand