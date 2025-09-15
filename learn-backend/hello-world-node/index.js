console.log('Hello Node.js');  // Purpose: Outputs a simple message

let arr = [1, 2, 3, 4];  // Purpose: Declares and logs an array
console.log('Array:', arr);

setTimeout(() => {  // Purpose: Demonstrates async code with a 2-second delay
  console.log('This message is delayed by 2 seconds');
}, 2000);

console.log('This is the last line of synchronous code');  // Purpose: Shows sync code runs first


/*
 Explanation: Synchronous code (console.log) runs immediately, while setTimeout delays execution, demonstrating Node.js’s non-blocking event loop.
 */