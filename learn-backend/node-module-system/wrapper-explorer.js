console.log('Node Module Wrapper Demo');
console.log('Filename:', __filename);  // Purpose: Log full path to current file
console.log('Dirname:', __dirname);    // Purpose: Log directory path

module.exports = {  // Purpose: Export a function for reuse
  greet: (name) => console.log(`Hello ${name}`)
};