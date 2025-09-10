console.log('Hello Node.js');  // Purpose: Basic output to console

let arr = [1, 2, 3, 4];  // Purpose: Declare and log an array
console.log('Array:', arr);

setTimeout(() => {  // Purpose: Demonstrate async execution with a 2-second delay
  console.log('This message is delayed by 2 seconds');
}, 2000);

console.log('This is the last line of synchronous code');  // Purpose: Show sync runs first