// JavaScript Closures Reference

// 1. Local Variables
// Local variables are private, defined inside a function, and only accessible there.
function myFunction() {
  let a = 4; // Local variable
  return a * a;
}
console.log("Local Variable Example:", myFunction()); // Outputs 16

// 2. Global Variables
// Global variables are public, defined outside functions, and accessible everywhere.
let a = 4; // Global variable
function globalFunction() {
  return a * a;
}
console.log("Global Variable Example:", globalFunction()); // Outputs 16
// Note: Global and local variables with the same name are distinct.

// 3. Variable Lifetime
// - Global variables live until the page is discarded.
// - Local variables are created when a function starts and deleted when it ends.

// 4. A Counter Dilemma
// Goal: A counter variable accessible to all, but protected from external changes.
// Problem with global variable:
let counter = 0;
function addGlobal() {
  counter += 1; // Any code can change counter directly
}
addGlobal();
addGlobal();
addGlobal();
console.log("Global Counter (vulnerable):", counter); // Outputs 3
// Issue: Other code can modify 'counter' without calling addGlobal.

// Problem with local variable:
function addLocal() {
  let counter = 0; // Resets every call
  counter += 1;
  return counter;
}
let x = 0;
x = addLocal();
x = addLocal();
x = addLocal();
console.log("Local Counter (resets each call):", x); // Outputs 1

// 5. JavaScript Nested Functions
// Nested functions have access to the scope "above" them (parent scope).
function addNested() {
  let counter = 0;
  function plus() {
    counter += 1; // Accesses parent's counter
  }
  plus();
  return counter;
}
console.log("Nested Function Example:", addNested()); // Outputs 1
// Issue: We can’t access plus() from outside, and counter resets each call.

// 6. JavaScript Closures
// A closure is a function that retains access to its parent scope after the parent has finished.
// Solution: Initialize counter once, protect it, and allow controlled access.
function myCounter() {
  let counter = 0; // Private variable
  return function() { // Inner function (closure)
    counter++;
    return counter;
  };
}
const add = myCounter(); // Runs myCounter once, returns the inner function
console.log("Closure Example (call 1):", add()); // Outputs 1
console.log("Closure Example (call 2):", add()); // Outputs 2
console.log("Closure Example (call 3):", add()); // Outputs 3
// The counter is now 3, protected within the closure.

// 7. Conclusion
// - A closure is a function with access to its parent scope, even after the parent closes.
// - Uses: Private variables, state preservation, block-scoping (pre-ES6), design patterns (e.g., currying, memoization).
// - Modern JS (ES6+) offers alternatives like 'let' and 'const' for some use cases.