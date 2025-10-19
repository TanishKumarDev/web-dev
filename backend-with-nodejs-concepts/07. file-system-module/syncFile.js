// Import File System & Path modules
const fs = require('fs');
const path = require('path');

try {
    // Use __dirname to always refer to the current script folder
    const filePath = path.join(__dirname, 'example.txt'); // example.txt in current folder
    const outputPath = path.join(__dirname, 'output.txt');

    // Reading a File (Blocking)
    const data = fs.readFileSync(filePath, 'utf8'); // utf8 = string, otherwise Buffer
    console.log("📖 File Content:\n", data);

    // Writing a File (Creates or Overwrites)
    fs.writeFileSync(outputPath, 'Hello, Node.js!');
    console.log("✅ File written successfully:", outputPath);

    // Appending to a File (Does not overwrite)
    fs.appendFileSync(outputPath, '\nAppended line');
    console.log("✅ Data appended successfully:", outputPath);

} catch (err) {
    console.error("❌ File operation failed:", err.message);
}

/*
How it Works:

1. fs.readFileSync → Reads example.txt (blocks execution until file is read).
2. fs.writeFileSync → Writes "Hello, Node.js!" into output.txt (creates if missing).
3. fs.appendFileSync → Appends a new line at the end of output.txt.
4. try-catch → Ensures program doesn’t crash if file is missing or permission denied.
5. path.join(__dirname, ...) → Always resolves the correct path relative to this script.
*/
