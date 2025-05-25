// Global Scope
let a = 300;
const b = 200;
var c = 300;

// Block Scope
if (true) {
  let a = 10; // Block-scoped
  const b = 20; // Block-scoped
  var c = 30; // Leaks to global scope
  console.log("Inner a:", a); // Output: Inner a: 10
  console.log("Inner b:", b); // Output: Inner b: 20
  console.log("Inner c:", c); // Output: Inner c: 30
}

// Accessing Variables Outside Block
// console.log(a); // Output: 300 (global a)
// console.log(b); // Output: 200 (global b)
console.log("Outer c:", c); // Output: Outer c: 30 (var leakage)

// var Issue (Global Pollution)
var c = 300; // Another programmer's declaration
if (true) {
  var c = 30; // Overwrites global c
}
console.log("After var overwrite:", c); // Output: After var overwrite: 30

// let/const Fix
let d = 300;
if (true) {
  let d = 30; // Block-scoped, doesn't affect global d
}
console.log("After let:", d); // Output: After let: 300

// Reference: MDN for Scope and Variable Declarations
// https://developer.mozilla.org/en-US/docs/Glossary/Scope
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var