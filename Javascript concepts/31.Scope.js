// === Understanding Scope ===
// Scope is like a set of access rules: it determines where variables are visible and usable in your code.
// - Block Scope: Variables (let, const) inside { } are only accessible within that block.
// - Function Scope: Variables (var, let, const) inside a function are only accessible within that function.
// - Global Scope: Variables outside functions are accessible everywhere.
// Why confusing? var vs. let/const, automatic globals, and window object interactions can lead to surprises.
// Analogy: Think of scope as rooms in a house: block scope is a locked closet (let/const), function scope is a private room (var/let/const), and global scope is the living room (accessible to all).
// Tip: Use let/const over var to avoid accidental globals and prefer block scope for better control.

console.log("=== JavaScript Scope Examples ===");

// === Block Scope (let and const) ===
// Variables declared with let or const inside a { } block are only accessible within that block.

console.log("\n=== Block Scope ===");
{
  let x = 2;
  console.log(x); // 2
}
// console.log(x); // ReferenceError: x is not defined
// Reason: let creates block scope; x is only accessible inside the { } block.
// Logic: Prevents x from being used outside, ensuring tight control over variable visibility.

{
  const y = 3;
  console.log(y); // 3
}
// console.log(y); // ReferenceError: y is not defined
// Reason: const also creates block scope; y is confined to the block.
// Logic: Similar to let but with constant value enforcement.

// var does NOT have block scope
{
  var z = 4;
}
console.log(z); // 4
// Reason: var ignores block scope, making z accessible outside the block.
// Logic: var declarations are hoisted to the function or global scope, causing potential issues.

// === Function Scope ===
// Variables declared inside a function (var, let, const) are local to that function.

console.log("\n=== Function Scope ===");
function myFunction() {
  var carNameVar = "Volvo";
  let carNameLet = "Toyota";
  const carNameConst = "Honda";
  console.log(carNameVar); // "Volvo"
  console.log(carNameLet); // "Toyota"
  console.log(carNameConst); // "Honda"
}
myFunction();
// console.log(carNameVar); // ReferenceError: carNameVar is not defined
// console.log(carNameLet); // ReferenceError: carNameLet is not defined
// console.log(carNameConst); // ReferenceError: carNameConst is not defined
// Reason: var, let, and const all have function scope; they’re only accessible inside myFunction.
// Logic: Function scope isolates variables, preventing external access and allowing reuse of names.

// Variables with the same name in different functions
function func1() {
  let x = 10;
  console.log(x); // 10
}
function func2() {
  let x = 20;
  console.log(x); // 20
}
func1();
func2();
// Reason: Each function has its own scope, so x in func1 and func2 are separate.
// Logic: Function scope allows independent variable declarations.

// === Global Scope ===
// Variables declared outside functions are global and accessible everywhere.

console.log("\n=== Global Scope ===");
var globalVar = 5;
let globalLet = 6;
const globalConst = 7;

function testGlobal() {
  console.log(globalVar); // 5
  console.log(globalLet); // 6
  console.log(globalConst); // 7
}
testGlobal();
console.log(globalVar, globalLet, globalConst); // 5 6 7
// Reason: Variables declared outside functions have global scope, accessible anywhere.
// Logic: Global scope makes variables shared across functions and scripts.

// === Automatically Global Variables ===
// Assigning a value to an undeclared variable makes it global (unless in strict mode).

console.log("\n=== Automatically Global ===");
function setGlobal() {
  carName = "Volvo"; // No var, let, or const
}
setGlobal();
console.log(carName); // "Volvo"
// Reason: Undeclared variables become global, attached to the global object (e.g., window in browsers).
// Logic: Dangerous practice, as it can lead to unintended global pollution.

// === Strict Mode ===
// In strict mode, undeclared variables throw errors instead of becoming global.

console.log("\n=== Strict Mode ===");
function strictFunction() {
  "use strict";
  // myVar = 10; // ReferenceError: myVar is not defined
}
strictFunction();
// Reason: Strict mode enforces explicit variable declarations, preventing automatic globals.
// Logic: Improves code safety by catching errors early.

// === Global Variables and the Window Object ===
// Global variables with var are attached to the window object; let and const are not.

console.log("\n=== Window Object ===");
var windowVar = "I’m on window";
let windowLet = "I’m not on window";
console.log(typeof window.windowVar); // "string"
// console.log(window.windowLet); // undefined
// Reason: var globals are properties of the window object; let and const globals are not.
// Logic: This behavior helps prevent accidental overwrites of global variables.