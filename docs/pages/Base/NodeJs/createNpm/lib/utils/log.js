const chalk = require('chalk');
const { log } = console
const hint = (...info) => {
    log(chalk.blue(info));
}

const error = (...info) => {
    log(chalk.red(info));
}

const clear = () => {
    console.clear();
}
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

module.exports = {
    hint,
    error,
    clear
}