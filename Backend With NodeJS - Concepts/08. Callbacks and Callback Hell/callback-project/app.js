// Mini Project: File Workflow with Callbacks

const fs = require('fs');

// Step 1: Create log file
fs.writeFile('./logs/app.log', 'Server started...\n', (err) => {
  if (err) return console.log("Error creating file:", err);
  console.log("Log file created.");

  // Step 2: Append log
  fs.appendFile('./logs/app.log', 'New request received...\n', (err) => {
    if (err) return console.log("Error appending data:", err);
    console.log("Log updated.");

    // Step 3: Read log file
    fs.readFile('./logs/app.log', 'utf8', (err, data) => {
      if (err) return console.log("Error reading file:", err);
      console.log("\nLog Content:\n", data);

      // Step 4: Delete file
      fs.unlink('./logs/app.log', (err) => {
        if (err) return console.log("Error deleting file:", err);
        console.log("Log file deleted successfully.");
      });
    });
  });
});
