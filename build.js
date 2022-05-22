const fs = require('fs');
const path = require('path');

const pwd = __dirname;
const targetDir = path.resolve(__dirname, 'awesome-interview');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

const replaceFile = (file) => {
    console.log(file);
    let text = fs.readFileSync(file, { encoding: 'utf-8' }).replace(/\/awesome-interview\//g, '/');
    fs.writeFileSync(file, text, { encoding: 'utf-8' });
};

function getAllFiles(dir) {
    const files = fs.readdirSync(dir);
    const fileList = [];

    for (const file of files) {
        if (file === 'awesome-interview' || /^\./.test(file)) {
            continue;
        }

        const stat = fs.statSync(path.join(dir, file));

        if (stat.isDirectory()) {
            const list = getAllFiles(path.join(dir, file));
            fileList.push(...list);
        } else {
            fileList.push(path.join(dir, file));
        }
    }

    return fileList;
}

const files = getAllFiles(__dirname);
files.forEach(file => {
    replaceFile(path.resolve(pwd, file));
});
