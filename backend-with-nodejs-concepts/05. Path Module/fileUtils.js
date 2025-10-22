const path = require('path');

function fileInfo(filePath) {
    return {
        name: path.basename(filePath),
        dir: path.dirname(filePath),
        ext: path.extname(filePath),
        fullPath: path.resolve(filePath)
    };
}

module.exports = fileInfo;
