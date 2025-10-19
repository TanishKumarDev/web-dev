const path = require('path');

// Basic path operations
console.log("=== PATH MODULE DEMO ===");

const filePath = '/users/john/documents/project/app.js';

console.log("Original path:", filePath);
console.log("Directory name:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("File extension:", path.extname(filePath));
console.log("File name without extension:", path.basename(filePath, path.extname(filePath)));

// Path joining and resolution
console.log("\n=== PATH JOINING ===");
console.log("Join paths:", path.join('/users', 'john', 'documents', 'app.js'));
console.log("Resolve paths:", path.resolve('src', 'app.js'));
console.log("Relative path:", path.relative('/users/john', '/users/john/documents/file.txt'));

// Platform-specific paths
console.log("\n=== PLATFORM SPECIFIC ===");
console.log("Path separator:", path.sep);
console.log("Delimiter:", path.delimiter);
console.log("Normalized path:", path.normalize('/users//john/../documents/./file.txt'));

// Working with __dirname and __filename
console.log("\n=== CURRENT FILE INFO ===");
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);
console.log("Relative to current:", path.relative(__dirname, __filename));

// Practical examples
console.log("\n=== PRACTICAL EXAMPLES ===");
const configPath = path.join(__dirname, 'config', 'database.json');
console.log("Config file path:", configPath);

const publicPath = path.resolve('public', 'images');
console.log("Public images path:", publicPath);