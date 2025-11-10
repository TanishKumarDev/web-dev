// ===========================
// Mini Project: File Operations with Promises
// ===========================

const fs = require('fs').promises; // Use built-in fs.promises

async function manageFiles() {
  try {
    // 1. Write a file
    await fs.writeFile('./data/promise-demo.txt', 'Learning Promises in Node.js');
    console.log('File written successfully.');

    // 2. Read the file
    const data = await fs.readFile('./data/promise-demo.txt', 'utf8');
    console.log('File Content:', data);

    // 3. Append more data
    await fs.appendFile('./data/promise-demo.txt', '\nPromises make async easy!');
    console.log('Data appended.');

    // 4. Read again
    const updated = await fs.readFile('./data/promise-demo.txt', 'utf8');
    console.log('Updated Content:\n', updated);

    // 5. Delete file
    await fs.unlink('./data/promise-demo.txt');
    console.log('File deleted successfully.');

  } catch (err) {
    console.log('Error:', err.message);
  } finally {
    console.log('Operation completed.');
  }
}

manageFiles();
