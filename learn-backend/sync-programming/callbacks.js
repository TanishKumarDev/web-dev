const fs = require('fs');  // Purpose: Use FS for async file ops to simulate I/O

// Basic Callback Example
fs.readFile('non-existent.txt', 'utf8', (err, data) => {  // Purpose: Async read with callback
  if (err) {
    console.log('Error:', err.message);  // Output: ENOENT: no such file or directory
  } else {
    console.log('Data:', data);
  }
});
console.log('This runs first (sync code)');  // Purpose: Show non-blocking—logs before callback