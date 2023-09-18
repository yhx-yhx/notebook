#!/usr/bin/env node
//自动执行 配置node路径 shebang
const program = require('commander')
const getHelp = require('./lib/core/help')
const createCommand = require('./lib/core/create')
// 查看版本号
program.version(require('./package.json').version)

// 增加options与 help
getHelp();

// 创建其他指令
createCommand()

// console.log('dest', program.dest);

// 监听某一指令
// program.on('--help', function (val) {
//     console.log('--help 参数', val);
// })

// 获取 -p 结果
// console.log('process.port', process.port)
// 解析终端指令
program.parse(process.argv);