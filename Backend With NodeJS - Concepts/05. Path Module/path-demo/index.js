
// Example: Basic Path Operations


// Import the built-in path module
const path = require('path');

// Get the current file name
console.log("File Name:", path.basename(__filename));

// Get the current directory name
console.log("Directory Name:", path.dirname(__filename));

// Get the file extension
console.log("File Extension:", path.extname(__filename));

// Parse the full path into an object
console.log("Path Object:", path.parse(__filename));

// Join paths safely (OS-independent)
const joinedPath = path.join(__dirname, 'data', 'sample.txt');
console.log("Joined Path:", joinedPath);

// Resolve an absolute path
const absolutePath = path.resolve('data', 'sample.txt');
console.log("Absolute Path:", absolutePath);
