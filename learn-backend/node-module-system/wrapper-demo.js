const wrapperExplorer = require('./wrapper-explorer');  // Purpose: Import module

console.log('In wrapperDemo.js file');
console.log('Filename:', __filename);  // Purpose: Different file, different path
console.log('Dirname:', __dirname);

wrapperExplorer.greet('Tanish');  // Output: Hello Tanish