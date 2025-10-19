// file-structure.js
const path = require('path');

class FileManager {
    constructor(baseDir) {
        this.baseDir = path.resolve(baseDir);
    }
    
    getFullPath(relativePath) {
        return path.join(this.baseDir, relativePath);
    }
    
    isSafePath(userPath) {
        const resolvedPath = path.resolve(this.baseDir, userPath);
        return resolvedPath.startsWith(this.baseDir);
    }
    
    getFileInfo(filePath) {
        return {
            name: path.basename(filePath),
            extension: path.extname(filePath),
            directory: path.dirname(filePath),
            absolute: path.resolve(filePath)
        };
    }
}

// Usage
const fm = new FileManager(__dirname);
console.log("File Manager Demo:");
console.log("Full path for config:", fm.getFullPath('config/app.json'));
console.log("Is safe path?", fm.isSafePath('../sensitive-file'));
console.log("File info:", fm.getFileInfo('/users/test/document.txt'));