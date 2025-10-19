const fs = require('fs');
const path = require('path');

// Use __dirname to always refer to the current script folder
const filePath = path.join(__dirname, 'example.txt'); // __dirname ensures Node looks inside 07. file-system-module, not the project root.

// Reading a File (Non-blocking)
const data = fs.readFileSync(filePath, 'utf8');
console.log(data);

// Writing a File (Creates or Overwrites)
fs.writeFileSync('output.txt', 'Hello, Node.js!');
console.log("✅ File written successfully: output.txt");

// Appending to a File (Does not overwrite)
fs.appendFileSync('output.txt', '\nAppended line');
console.log("✅ Data appended successfully: output.txt");