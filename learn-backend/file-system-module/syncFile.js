// Import File System module
const fs = require('fs');

try {
    // Reading a File (Blocking)
    const data = fs.readFileSync('example.txt', 'utf8'); // utf8 = string, otherwise Buffer
    console.log("📖 File Content:\n", data);

    // Writing a File (Creates or Overwrites)
    fs.writeFileSync('output.txt', 'Hello, Node.js!');
    console.log("✅ File written successfully: output.txt");

    // Appending to a File (Does not overwrite)
    fs.appendFileSync('output.txt', '\nAppended line');
    console.log("✅ Data appended successfully: output.txt");

} catch (err) {
    console.error("❌ File operation failed:", err.message);
}

//  How it Works

// fs.readFileSync → Reads example.txt (blocks execution until file is read).
// fs.writeFileSync → Writes "Hello, Node.js!" into output.txt (creates if missing).
// fs.appendFileSync → Appends a new line at the end of output.txt.
// try-catch → Ensures program doesn’t crash if file is missing or permission denied.