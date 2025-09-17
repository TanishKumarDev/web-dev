// Concept: Nested callbacks create a "pyramid" structure, hard to read/debug.
const fs = require('fs'); 

fs.readFile('file1.txt', 'utf8', (err1, data1) => {
  if (err1) return console.error(err1);
  console.log(data1);

  fs.readFile('file2.txt', 'utf8', (err2, data2) => {
    if (err2) return console.error(err2);
    console.log(data2);

    fs.readFile('file3.txt', 'utf8', (err3, data3) => {
      if (err3) return console.error(err3);
      console.log(data3);
      // More nesting = hell
    });
  });
});


// Purpose: Shows sequential async ops (e.g., reading multiple files) leading to indentation mess.