// wrapperExplorer.js
console.log('Node module wrapper demo');
console.log('Filename:', __filename);  // Purpose: Logs the absolute path of the current file
console.log('Directory:', __dirname);  // Purpose: Logs the directory path

function greet(name) {
  console.log(`Hello ${name}`);
}

module.exports = { greet };