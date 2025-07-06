// "Pass by Value" in JavaScript
/*
When a variable is passed by value, a copy of the actual value is passed to the function. Any changes made to the parameter inside the function do not affect the original variable.

primitive data types are passed by value. These include:

// Numbers
// Strings
// Booleans
// Undefined
// Null
// Symbol
// BigInt
*/

// "Pass by Reference" in JavaScript
/*
When a variable is passed by reference, a reference to the original variable is passed to the function. Any changes made to the parameter inside the function affect the original variable.

(memory address) - This is the memory location where the variable is stored in the computer's memory. 

non-primitive data types are passed by reference. These include:

// Objects
// Arrays
// Functions
*/

// Example 1: Pass by Value
function add(a, b) {
  return a + b;
}

let num1 = 5;
let num2 = 10;

console.log(add(num1, num2)); // Output: 15

// ✅ num1 and num2 are unchanged
console.log(num1); // 5
console.log(num2); // 10


// Example 2: Pass by Reference
function modifyArray(arr) {
  arr.push(4);
}

let myArray = [1, 2, 3];

modifyArray(myArray);

console.log(myArray); // Output: [1, 2, 3, 4]

// What if you reassign the parameter?

function resetArray(arr) {
  arr = []; // This does NOT affect the original array
}

let originalArray = [10, 20, 30];
resetArray(originalArray);

console.log(originalArray); // [10, 20, 30] ❗Not changed

/*
🧠 Why?
Reassignment (arr = []) makes arr point to a new array in memory — the original stays unchanged.

*/