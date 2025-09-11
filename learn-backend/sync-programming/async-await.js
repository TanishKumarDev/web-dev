const fs = require('fs').promises;  // Purpose: Promise-based FS

async function readAndProcess() {  // Purpose: Async function
  try {
    const data = await fs.readFile('example.txt', 'utf8');  // Purpose: Await pauses until resolved
    console.log('File data:', data);

    const upperData = data.toUpperCase();
    await fs.writeFile('output.txt', upperData);  // Purpose: Await write
    console.log('Processed and written');
  } catch (err) {  // Purpose: Try/catch for errors
    console.error('Error:', err.message);
  }
}

readAndProcess();  // Purpose: Call async function
console.log('This runs first');  // Purpose: Show non-blocking