const fileOps = require('./fileOps');

fileOps.writeFile('demo.txt', 'Hello from Node.js');
console.log(fileOps.readFile('demo.txt'));

fileOps.appendFile('demo.txt', '\nAppended text!');
console.log(fileOps.readFile('demo.txt'));
console.log(fileOps.readFile('demo.txt'));

fileOps.deleteFile('demo.txt');
// console.log(fileOps.readFile('demo.txt'));
