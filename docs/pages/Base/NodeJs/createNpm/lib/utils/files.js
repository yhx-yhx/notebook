const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const log = require('./log');

const ejsCompile = (templatePath, data = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, options, (err, str) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(str);
        })
    })
}

const writeFile = (path, content) => {
    if (fs.existsSync(path)) {
        log.error("当前文件已存在了~")
        return;
    }
    return fs.promises.writeFile(path, content);
}

const mkdirSync = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}

module.exports = {
    ejsCompile,
    writeFile,
    mkdirSync
}