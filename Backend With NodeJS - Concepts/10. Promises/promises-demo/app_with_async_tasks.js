// Example: Promise Chaining

function step1() {
  return new Promise((resolve) => {
    console.log("Step 1: Starting task..."); // Step 1 log
    setTimeout(() => resolve("Step 1 completed"), 1000); // Simulate async work (1 sec)
  });
}

function step2() {
  return new Promise((resolve) => {
    console.log("Step 2: Starting task..."); // Step 2 log
    setTimeout(() => resolve("Step 2 completed"), 1000); // Simulate async work (1 sec)
  });
}

function step3() {
  return new Promise((resolve) => {
    console.log("Step 3: Starting task..."); // Step 3 log
    setTimeout(() => resolve("Step 3 completed"), 1000); // Simulate async work (1 sec)
  });
}

// Chain Promises
step1()
  .then((result) => {
    console.log("Success: ", result); // Output from step1
    return step2(); // Move to step2
  })
  .then((result) => {
    console.log("Success: ", result); // Output from step2
    return step3(); // Move to step3
  })
  .then((result) => {
    console.log("Success: ", result); // Output from step3
  })
  .catch((error) => {
    console.log("Error: ", error); // Handle any errors in chain
  })
  .finally(() => {
    console.log("Promise completed!"); // Always runs, success or error
  });


// 👉 A Promise in JavaScript represents an asynchronous operation that will complete in the future, returning either:

// Resolved value (success), or
// Rejected reason (error).

// Promise chaining means: Once a Promise resolves, its .then() returns another Promise, allowing a sequence of async steps without deeply nested callbacks.

// 👉 Line-by-Line Explanation
// Step Functions

// function step1() { ... }
// → Defines step1 as a function returning a new Promise object.

// return new Promise((resolve) => { ... })
// → Creates a Promise that will resolve after an async operation (like file read, DB query, etc).

// console.log("Step 1: Starting task...");
// → Prints immediately when step1 starts.

// setTimeout(() => resolve("Step 1 completed"), 1000);
// → Simulates async work using setTimeout (1 second delay),
//   then resolves with message "Step 1 completed".

// Same logic applies for step2() and step3().
// Each function returns a Promise that resolves after 1 second.

// 👉 Chaining Begins
// step1()
// → Call the first function. Returns a Promise object.

// 👉 First then()
// .then((result) => {
//   console.log("Success:", result);
//   return step2();
// })
// → Executes when step1() Promise is resolved.
// → Prints “Success: Step 1 completed”.
// → Returns step2() (another Promise), continuing the chain.

// // 👉 Second then()
// .then((result) => {
//   console.log("Success:", result);
//   return step3();
// })
// → Executes when step2() Promise is resolved.
// → Prints “Success: Step 2 completed”.
// → Returns step3() (another Promise), continuing the chain.

// // 👉 Third then()
// .then((result) => {
//   console.log("Success:", result);
// })
// → Executes when step3() Promise is resolved.
// → Prints “Success: Step 3 completed”.
// → Returns undefined, ending the chain.

// // 👉 Catching Errors
// .catch((error) => {
//   console.log("Error:", error);
// })
// → Executes when any Promise in the chain is rejected.
// → Prints “Error: <error message>”.
// → Returns undefined, ending the chain.

// // 👉 Finally Block
// .finally(() => {
//   console.log("Promise completed!");
// })
// → Executes regardless of success or error.
// → Prints “Promise completed!”.
// → Returns undefined, ending the chain.

// 👉 Output (Sequential Execution)

// Step 1: Starting task...
// Success:  Step 1 completed
// Step 2: Starting task...
// Success:  Step 2 completed
// Step 3: Starting task...
// Success:  Step 3 completed
// Promise completed!

// Notice: Even though Promises are asynchronous, each step runs sequentially, because we return the next Promise in each .then().

// 👉 Key Learnings

// | Concept      | Meaning                                                                  |
// | ------------ | ------------------------------------------------------------------------ |
// | `Promise`    | Wrapper for async code, with `resolve()` or `reject()` callbacks         |
// | `.then()`    | Runs when Promise resolves successfully                                  |
// | `.catch()`   | Runs if Promise is rejected                                              |
// | `.finally()` | Runs in both success & error cases                                       |
// | Chaining     | Each `.then()` returns a new Promise, making sequential async flow clean |

// 👉 Notes
// Returning Promises inside .then() ensures proper sequencing.

// If you forget to return, the next .then() will execute immediately, breaking the chain.

// The same code can later be simplified using async/await syntax (which makes it look synchronous).