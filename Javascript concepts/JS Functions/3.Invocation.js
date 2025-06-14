// JavaScript Function Invocation Reference

// 1. Invoking a JavaScript Function
// Code inside a function runs when invoked (called), not when defined.
// Terms like "call", "start", or "execute" are common, but we use "invoke" here.
function myFunction(a, b) {
  return a * b;
}
let result1 = myFunction(10, 2); // Invoking the function
console.log("Invoking as a Function:", result1); // Outputs 20

// 2. Invoking a Function as a Function
// Functions not tied to an object belong to the global object (e.g., window in browsers).
// myFunction() and  window.myFunction() ----> making global to bcz rn not running in window,global.myFunction() are the same in a browser context.
let result2 = global.myFunction ? global.myFunction(10, 2) : myFunction(10, 2);
console.log("Invoking via Global Object (global):", result2); // Outputs 20
// Note: In Node.js, the global object is 'global', not 'window'.
// Avoid global functions to prevent name conflicts and bugs.

// 3. The Global Object and 'this'
// When a function is invoked without an owner, 'this' is the global object.
// In browsers, the global object is the window.
function checkThis() {
  return this;
}
let x = checkThis(); // In browsers, returns the window object
console.log("Value of 'this' in Function:", x === global ? "global (Node.js)" : x); // Node.js: "global (Node.js)"

// Note: In strict mode, 'this' is undefined in functions without an owner.
// Example in strict mode (uncomment to test):
/*
"use strict";
function checkThisStrict() {
  return this;
}
console.log("Value of 'this' in Strict Mode:", checkThisStrict()); // Outputs undefined
*/

// 4. Invoking a Function as a Method
// Functions defined as object properties are methods, and 'this' refers to the object.
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
let fullName = myObject.fullName(); // Invoking as a method
console.log("Invoking as Object Method:", fullName); // Outputs "John Doe"

// Test: Return 'this' from the method
const myObject2 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
};
let thisValue = myObject2.fullName(); // 'this' is the object itself
console.log("Value of 'this' in Method:", thisValue); // Outputs the myObject2 object

// 5. Invoking a Function with the Constructor
// Using 'new' with a function creates a new object, and 'this' refers to that new object.
// This is a constructor invocation.
function myFunctionConstructor(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}
const myObj = new myFunctionConstructor("John", "Doe"); // Creates a new object
console.log("Constructor Invocation (firstName):", myObj.firstName); // Outputs "John"
console.log("Constructor Invocation (lastName):", myObj.lastName); // Outputs "Doe"
// Note: The new object inherits properties and methods from the constructor.