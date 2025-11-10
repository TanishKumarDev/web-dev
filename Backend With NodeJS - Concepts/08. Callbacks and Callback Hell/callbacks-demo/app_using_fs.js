const fs = require('fs'); // Importing File System module

// Read file asynchronously
fs.readFile('./data/info.txt', 'utf8', (err, data) => {
  // This callback executes when file reading finishes (or errors)
  if (err) {
    console.log("Error reading file:", err); // If error (file missing, permission issue)
  } else {
    console.log("File Content:", data); // If successful, print the file content
  }
});

console.log("Reading file..please wait"); // Executes immediately (non-blocking)

/*

👉 Line-by-Line Explanation

const fs = require('fs');
→ Loads Node’s core fs module. No installation needed.

fs.readFile('./data/info.txt', 'utf8', (err, data) => {...})

Reads file asynchronously (non-blocking).

Parameters:

'./data/info.txt' → File path

'utf8' → Encoding (so output is string, not buffer)

(err, data) → Callback function:

err: any error that occurred

data: file content (if successful)

if (err)
→ Checks if file reading failed (like missing file).

console.log("File Content:", data);
→ Prints the text from file once read is complete.

console.log("Reading file..please wait");
→ This executes immediately after calling fs.readFile,
because Node doesn’t block while waiting for file I/O.
This shows how asynchronous non-blocking I/O works.

*/


// Write file asynchronously
fs.writeFile('./data/info.txt', 'Hello from Node.js!', (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});

// Append file asynchronously
fs.appendFile('./data/info.txt', '\nAppended line using fs.appendFile().', (err) => {
  if (err) {
    console.log("Error appending file:", err);
  } else {
    console.log("Data appended successfully!");
  }
});

// Delete file asynchronously
fs.unlink('./data/info.txt', (err) => {
  if (err) {
    console.log("Error deleting file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});

// Rename file asynchronously
fs.rename('./data/info.txt', './data/updated-info.txt', (err) => {
  if (err) {
    console.log("Error renaming file:", err);
  } else {
    console.log("File renamed successfully!");
  }
});

// Copy file asynchronously
fs.copyFile('./data/updated-info.txt', './data/copy-info.txt', (err) => {
  if (err) {
    console.log("Error copying file:", err);
  } else {
    console.log("File copied successfully!");
  }
});

// Read directory asynchronously
fs.readdir('./data', (err, files) => {
  if (err) {
    console.log("Error reading directory:", err);
  } else {
    console.log("Files in directory:", files);
  }
});

// Create directory asynchronously
fs.mkdir('./data/new-dir', (err) => {
  if (err) {
    console.log("Error creating directory:", err);
  } else {
    console.log("Directory created successfully!");
  }
});

// Remove directory asynchronously
fs.rmdir('./data/new-dir', (err) => {
  if (err) {
    console.log("Error removing directory:", err);
  } else {
    console.log("Directory removed successfully!");
  }
});

// Read file asynchronously
fs.readFile('./data/info.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("File Content:", data);
  }
});
