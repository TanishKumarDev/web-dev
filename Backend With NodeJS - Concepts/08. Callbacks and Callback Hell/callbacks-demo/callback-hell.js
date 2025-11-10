// Example: Callback Hell
const fs = require('fs');

// Step 1: Create a file
fs.writeFile('./data/task.txt', 'Task started', (err) => {
  if (err) throw err;
  console.log('File created!');

  // Step 2: Append data
  fs.appendFile('./data/task.txt', '\nStep 2 completed.', (err) => {
    if (err) throw err;
    console.log('Data appended!');

    // Step 3: Read file
    fs.readFile('./data/task.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File content:\n', data);

      // Step 4: Rename file
      fs.rename('./data/task.txt', './data/final-task.txt', (err) => {
        if (err) throw err;
        console.log('File renamed successfully!');
      });
    });
  });
});
