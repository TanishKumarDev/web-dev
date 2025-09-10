// firstModule.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function divide(a, b) {
  if (b === 0) throw new Error('Divide by zero not allowed');
  return a / b;
}
module.exports = { add, subtract, divide };

// index.js
const firstModule = require('./first-module');
console.log(firstModule.add(10, 20));
try {
  console.log('Trying to divide by zero');
  let result = firstModule.divide(10, 0);
  console.log(result);
} catch (error) {
  console.log('Caught an error:', error.message);
}
console.log(firstModule.subtract(20, 5));

// wrapperExplorer.js
console.log('Node Module Wrapper Demo');
console.log('Filename:', __filename);
console.log('Dirname:', __dirname);
module.exports = { greet: (name) => console.log(`Hello ${name}`) };

// wrapperDemo.js
const wrapperExplorer = require('./wrapper-explorer');
console.log('In wrapperDemo.js file');
console.log('Filename:', __filename);
console.log('Dirname:', __dirname);
wrapperExplorer.greet('Sumanth Mukarji');
