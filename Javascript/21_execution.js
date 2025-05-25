```javascript
// File: 03_basics/05_execution.js
// Purpose: Practice execution context and call stack

// Basic Execution Context Example
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
console.log(result1); // Output: 15
console.log(result2); // Output: 12

// Call Stack Example (Nested Functions)
function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
// Output: one
//         two
//         three

// Reference: MDN for Execution Context and Call Stack
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Execution_context
// https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
```