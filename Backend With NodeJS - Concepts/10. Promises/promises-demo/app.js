// Example: Simple Promise

// Create a promise
const task = new Promise((resolve, reject) => {
    // const isDone = true; --> // Success
    const isDone = false; // --> Error
    if (isDone) {
        resolve("Task completed!");
    } else {
        reject("Task not completed!");
    }
});

// Consume the promise
task
    .then((result) => {
        console.log("Success: ",result)
    })
    .catch((error) => {
        console.log("Error: ",error)
    })
    .finally(() => {
        console.log("Promise completed!");
    });
