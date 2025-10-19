// Import fs module first
const fs = require('fs');

console.log("\n=== FILE SYSTEM - ASYNCHRONOUS ===");

// Callback-based file operations
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("Async file content:", data);
});

// Writing file asynchronously
fs.writeFile('./async-output.txt', 'Async write operation', (err) => {
    if (err) {
        console.error("Error writing file:", err.message);
        return;
    }
    console.log("Async file written successfully");
    
    // Appending after write
    fs.appendFile('./async-output.txt', '\nAppended async content', (err) => {
        if (err) {
            console.error("Error appending:", err.message);
            return;
        }
        console.log("Content appended async");
    });
});

// Checking file existence
fs.access('./example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log("File doesn't exist");
    } else {
        console.log("File exists");
    }
});