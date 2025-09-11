// Create a Promise
const myPromise = new Promise((resolve, reject) => {  // Purpose: Promise constructor
  setTimeout(() => {
    const success = true;  // Simulate async op
    if (success) {
      resolve('Success: Operation complete');  // Purpose: Fulfill promise
    } else {
      reject(new Error('Failure: Something went wrong'));  // Purpose: Reject with error
    }
  }, 2000);
});

// Consume Promise
myPromise
  .then((result) => {  // Purpose: Handle success
    console.log(result);  // Output: Success: Operation complete
  })
  .catch((error) => {  // Purpose: Handle error
    console.error('Error:', error.message);
  });

// Error Handling with Promises (e.g., FS)
const fs = require('fs').promises;  // Purpose: Promise-based FS
fs.readFile('example.txt', 'utf8')
  .then((data) => console.log('File data:', data))
  .catch((err) => console.log('File error:', err.message));