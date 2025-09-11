// A Promise ek object hai jo future mein resolve ya reject hota hai:

// Pending → operation abhi chal raha hai.
// Fulfilled (resolved) → operation successful, result mil gaya.
// Rejected → operation fail, error aaya.

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task done!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise
  .then(result => console.log(result))   // agar resolve hua
  .catch(error => console.error(error)); // agar reject hua

// Using Promises with Node.js fs.promises
// Node.js ke fs module mein ek promises API bhi hota hai, jo callbacks ki jagah Promise return karta hai.
const fs = require('fs').promises;
const path = require('path');

async function run() {
  try {
    const dataFolder = path.join(__dirname, 'data');
    const filePath = path.join(dataFolder, 'example.txt');
    const asyncFilePath = path.join(dataFolder, 'async-example.txt');

    // Create Folder
    await fs.mkdir(dataFolder, { recursive: true });
    console.log("Data folder ensured");

    // Write File
    await fs.writeFile(filePath, 'Hello from Node.js');
    console.log("File created successfully");

    // Read File
    let fileContent = await fs.readFile(filePath, 'utf8');
    console.log("File Content:", fileContent);

    // Append File
    await fs.appendFile(filePath, '\nThis is a new line added to the file');
    console.log("New file content added");

    // Write File (Async version with Promises)
    await fs.writeFile(asyncFilePath, 'Hello async Node.js');
    console.log("Async file created successfully");

    // Read File
    let asyncData = await fs.readFile(asyncFilePath, 'utf8');
    console.log("Async File Content:", asyncData);

    // Append File
    await fs.appendFile(asyncFilePath, '\nThis is another line added');
    console.log("New line added to async file");

    // Read Updated File
    let updatedData = await fs.readFile(asyncFilePath, 'utf8');
    console.log("Updated File Content:", updatedData);

  } catch (err) {
    console.error("Error:", err);
  }
}

run();
