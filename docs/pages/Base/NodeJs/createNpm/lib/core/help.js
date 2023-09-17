const program = require('commander');
// 监听某一指令
module.exports = getHelp = () => {
    program.option('-d, --dest <dest>', 'destination ,描述信息')
    program.on('--help', function (val) {
        console.log('')
        console.log('Other:')
        console.log('')
    })
}
