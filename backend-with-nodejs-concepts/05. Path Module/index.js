const path = require('path');
const fileInfo = require('./fileUtils');

console.log("filePathAbsolute")
const filePathAbsolute = `/Users/tanish/Desktop/Node.js/05. Path Module/index.js`
console.log(path.resolve(filePathAbsolute));

console.log("filePathRelative")
const filePathRelative = `./index.js` // relative path

console.log(path.resolve(filePathRelative));

// Returns filename with extension from a path.
console.log(path.basename(filePathRelative))

// Returns directory name from a path
console.log(path.dirname(filePathRelative))

// Returns file extension from a path
console.log(path.extname(filePathRelative))

// Returns true if the path is absolute
console.log(path.isAbsolute(filePathRelative))

// Returns true if the path is absolute
console.log(path.isAbsolute(filePathAbsolute))

// Joins path segments in a cross-platform way
const pathSegments = ['Users', 'tanish', 'Desktop', 'Node.js', '05. Path Module', 'index.js']
console.log(path.join(...pathSegments))

// Returns absolute path
console.log(path.resolve(...pathSegments))

// Returns object with file information

const info = fileInfo('./test.txt');
console.log(info);