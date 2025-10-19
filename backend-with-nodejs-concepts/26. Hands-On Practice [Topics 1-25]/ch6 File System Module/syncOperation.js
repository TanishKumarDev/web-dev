const fs = require('fs');
const path = require('path');

console.log("=== FILE SYSTEM - SYNCHRONOUS ===");

// Reading files synchronously
try {
    const data = fs.readFileSync('./example.txt', 'utf8');
    console.log("File content:", data);
} catch (error) {
    console.error("Error reading file:", error.message);
}

// Writing files synchronously
try {
    fs.writeFileSync('./output.txt', 'Hello, Node.js File System!');
    console.log("File written successfully");
} catch (error) {
    console.error("Error writing file:", error.message);
}

// Appending to files
try {
    fs.appendFileSync('./output.txt', '\nThis is appended content!');
    console.log("Content appended successfully");
} catch (error) {
    console.error("Error appending to file:", error.message);
}

// File operations
try {
    const stats = fs.statSync('./output.txt');
    console.log("File stats:");
    console.log(" - Size:", stats.size, "bytes");
    console.log(" - Created:", stats.birthtime);
    console.log(" - Modified:", stats.mtime);
    console.log(" - Is directory?", stats.isDirectory());
    console.log(" - Is file?", stats.isFile());
} catch (error) {
    console.error("Error getting file stats:", error.message);
}