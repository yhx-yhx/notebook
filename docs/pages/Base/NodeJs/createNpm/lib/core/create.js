const program = require('commander')
const { createProjectAction, createCompontensAction } = require('/actions')
const createCommand = function () {
    console.log("createCommand");
    // 创建工程
    program
        .command('create <project> [others...]')
        .description('clone repository into a folder')
        .action(createProjectAction)
    // 添加 组件模板
    program
        .command('add <template> <project>')
        .description('add a template')
        .action(createCompontensAction)
}
module.exports = createCommand