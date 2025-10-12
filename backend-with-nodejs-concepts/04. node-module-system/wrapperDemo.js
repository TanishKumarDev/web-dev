// wrapperDemo.js
const wrapperExplorer = require('./wrapperExplorer');  // Purpose: Imports the module
console.log('Filename in wrapperDemo.js:', __filename);
console.log('Directory in wrapperDemo.js:', __dirname);
wrapperExplorer.greet('S Mukarji');  // Purpose: Calls the exported greet function