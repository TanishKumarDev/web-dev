// 1. Concept
// Promise ek object hota hai jo asynchronous operation ka result represent karta hai (future value).

// 3 states hote hain:
// Pending → Initial state (operation chal raha hai).
// Fulfilled → Operation success (value mil gayi).
// Rejected → Operation fail (error hua).

const promise = new Promise((resolve, reject) => {
    let success = true; // Simulate success/failure
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

promise
    .then(result => console.log(result)) // Success handling
    .catch(error => console.error(error)) // Error handling
    .finally(() => console.log("🎯 Done"));

// 3. fs Promises Example (Avoiding Callback Hell)
// Instead of nested callbacks:
// 👉 Yahan pe .then() chaining ke wajah se code clean hai — callback pyramid khatam ✅

const fs = require('fs').promises; // use promise-based fs

fs.readFile('file1.txt', 'utf8')
  .then(data1 => {
      console.log(data1);
      return fs.readFile('file2.txt', 'utf8');
  })
  .then(data2 => {
      console.log(data2);
      return fs.readFile('file3.txt', 'utf8');
  })
  .then(data3 => {
      console.log(data3);
  })
  .catch(err => {
      console.error("Error:", err.message);
  });

// 4. Async/Await (Promise Shortcut)
// Aur bhi clean likhne ka tarika:

async function readFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        console.log(data1);

        const data2 = await fs.readFile('file2.txt', 'utf8');
        console.log(data2);

        const data3 = await fs.readFile('file3.txt', 'utf8');
        console.log(data3);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

readFiles();

// 5. Key Takeaways

// Promises = cleaner async flow.
// .then() / .catch() chaining avoid karta hai callback hell.
// async/await makes code look like synchronous → most preferred in modern Node.js.