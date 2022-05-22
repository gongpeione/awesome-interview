const fs = require('fs');
const path = require('path');

const pwd = __dirname;
const targetDir = path.resolve(__dirname, 'awesome-interview');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

const files = fs.readdirSync(__dirname);
files.filter(file => file !== 'awesome-interview' && !/^\./.test(file)).map(file => {
    console.log(file);
    fs.cpSync(path.resolve(pwd, file), path.resolve(path.resolve(targetDir, file)), {
        recursive: true
    });
});
