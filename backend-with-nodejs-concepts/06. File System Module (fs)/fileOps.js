const fs = require('fs');

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}

function appendFile(filePath, content) {
    fs.appendFileSync(filePath, content);
}

function deleteFile(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`${filePath} deleted`);
    } else console.log(`${filePath} not found`);
}

module.exports = { readFile, writeFile, appendFile, deleteFile };
