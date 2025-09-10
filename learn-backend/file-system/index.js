const fs = require('fs');  // Purpose: Import File System module
const path = require('path');  // Purpose: Import Path for safe paths

const dataFolder = path.join(__dirname, 'data');  // Purpose: Build path to 'data' folder

// Create Folder (Sync)
if (!fs.existsSync(dataFolder)) {  // Purpose: Check if folder exists
  fs.mkdirSync(dataFolder);  // Purpose: Create folder if it doesn't exist
  console.log('Data folder created');
}

// Write File (Sync)
const filePath = path.join(dataFolder, 'example.txt');  // Purpose: Path to file in data/
fs.writeFileSync(filePath, 'Hello from Node.js');  // Purpose: Create/write file
console.log('File created successfully');

// Read File (Sync)
const fileContent = fs.readFileSync(filePath, 'utf8');  // Purpose: Read file as string
console.log('File Content:', fileContent);  // Output: Hello from Node.js

// Append File (Sync)
fs.appendFileSync(filePath, '\nThis is a new line added to the file');  // Purpose: Add text
console.log('New file content added');

const asyncFilePath = path.join(dataFolder, 'async-example.txt');  // Purpose: Path for async file

// Write File (Async)
fs.writeFile(asyncFilePath, 'Hello async Node.js', (err) => {  // Purpose: Async write with callback
  if (err) throw err;
  console.log('Async file created successfully');

  // Read File (Async)
  fs.readFile(asyncFilePath, 'utf8', (err, data) => {  // Purpose: Async read
    if (err) throw err;
    console.log('Async File Content:', data);  // Output: Hello async Node.js

    // Append File (Async)
    fs.appendFile(asyncFilePath, '\nThis is another line added', (err) => {  // Purpose: Async append
      if (err) throw err;
      console.log('New line added to async file');

      // Read Updated File (Async)
      fs.readFile(asyncFilePath, 'utf8', (err, updatedData) => {  // Purpose: Verify append
        if (err) throw err;
        console.log('Updated File Content:', updatedData);
      });
    });
  });
});