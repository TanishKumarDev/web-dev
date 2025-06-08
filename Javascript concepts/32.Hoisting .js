// === Understanding Hoisting ===
// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope (global or function) before code execution.
// - What’s Hoisted? Variable declarations (var) and function declarations are hoisted; initializations and expressions are not.
// - var: Hoisted and initialized to undefined.
// - let/const: Hoisted but not initialized (in a "temporal dead zone" until declared).
// - Function Declarations: Fully hoisted, including their body.
// Why confusing? Using variables before declaration can lead to undefined or errors, especially with var vs. let/const.
// Analogy: Think of hoisting as setting up a bulletin board: variable names and function definitions are pinned up before the day starts, but values are added later.
// Tip: Always declare variables at the top of their scope and use let/const to avoid hoisting-related bugs.

console.log("=== JavaScript Hoisting Examples ===");

// === var Hoisting ===
// Variables declared with var are hoisted to the top of their scope and initialized to undefined.

console.log("\n=== var Hoisting ===");
console.log(x); // undefined
var x = 5;
console.log(x); // 5
// Reason: The declaration `var x` is hoisted to the top, initialized as undefined.
// Logic: JavaScript processes this as:
// var x;
// console.log(x); // undefined
// x = 5;
// console.log(x); // 5

// Example from exercise
x = 5;
console.log(x); // 5 (Note: alert(x) is replaced with console.log for broader compatibility)
var x;
// Reason: var x is hoisted, so x = 5 assigns 5 to the hoisted variable, and console.log(x) outputs 5.
// Logic: The declaration is moved to the top, making x available for assignment before console.log.

// === let and const Hoisting ===
// Variables declared with let and const are hoisted but not initialized, remaining in a "temporal dead zone" (TDZ) until their declaration line.

console.log("\n=== let and const Hoisting ===");
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
// Reason: let and const are hoisted to the top of their block but remain uninitialized until their declaration.
// Logic: The TDZ prevents access before declaration, ensuring safer variable usage.

// Example with TDZ
// carName = "Volvo"; // ReferenceError: Cannot access 'carName' before initialization
// let carName;
// Reason: Attempting to use carName before its let declaration throws an error due to the TDZ.
// Logic: This enforces explicit declaration before use, preventing accidental errors.

// === Function Declaration Hoisting ===
// Function declarations are fully hoisted, including their body, so they can be called before their definition.

console.log("\n=== Function Declaration Hoisting ===");
sayHello(); // "Hello, World!"
function sayHello() {
  console.log("Hello, World!");
}
// Reason: The entire function declaration is hoisted to the top of the scope.
// Logic: JavaScript moves the function definition to the top, making it callable anywhere in the scope.

// === Function Expression Hoisting ===
// Function expressions (assigned to variables) are hoisted as variables, not as functions.

console.log("\n=== Function Expression Hoisting ===");
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
sayHi(); // "Hi!"
// Reason: Only the variable declaration (var sayHi) is hoisted, initialized to undefined, not the function assignment.
// Logic: JavaScript sees this as:
// var sayHi;
// sayHi(); // undefined is not a function
// sayHi = function() { console.log("Hi!"); };
// sayHi(); // "Hi!"

// With let/const
// greet(); // ReferenceError: Cannot access 'greet' before initialization
let greet = () => console.log("Greetings!");
greet(); // "Greetings!"
// Reason: let/const function expressions are hoisted but in the TDZ until initialized.
// Logic: Prevents calling the function before its assignment, enhancing code safety.

// === Hoisting in Function Scope ===
// Hoisting applies within function scopes, not just globally.

console.log("\n=== Hoisting in Function Scope ===");
function testHoisting() {
  console.log(localVar); // undefined
  var localVar = 50;
  console.log(localVar); // 50
}
testHoisting();
// Reason: var localVar is hoisted to the top of the function scope, initialized as undefined.
// Logic: Inside testHoisting, it’s processed as:
// var localVar;
// console.log(localVar); // undefined
// localVar = 50;
// console.log(localVar); // 50

// === Hoisting Gotchas ===
// Hoisting can cause issues when variables are shadowed or used unexpectedly.

console.log("\n=== Hoisting Gotchas ===");
var a = 1;
function hoistExample() {
  console.log(a); // undefined
  var a = 2;
  console.log(a); // 2
}
hoistExample();
console.log(a); // 1
// Reason: The var a inside hoistExample is hoisted to the top of the function, shadowing the global a.
// Logic: Inside hoistExample, it’s like:
// var a;
// console.log(a); // undefined
// a = 2;
// console.log(a); // 2
// The global a remains 1, unaffected.

// === Strict Mode and Hoisting ===
// Strict mode prevents undeclared variables, but hoisting still occurs.

console.log("\n=== Strict Mode ===");
function strictHoist() {
  "use strict";
  // b = 15; // ReferenceError: b is not defined
  var b = 15;
  console.log(b); // 15
}
strictHoist();
// Reason: Strict mode requires explicit declarations, but var b is still hoisted within the function.
// Logic: Hoisting behavior is unchanged, but strict mode catches undeclared assignments.

// === Global Variables and the Window Object ===
// Global var declarations are attached to the window object; let and const are not.

console.log("\n=== Window Object ===");
var windowVar = "I’m on window";
let windowLet = "I’m not on window";
console.log(typeof window.windowVar); // "string"
// console.log(window.windowLet); // undefined
// Reason: var globals become properties of the window object (in browsers); let/const globals do not.
// Logic: This reduces the risk of overwriting global variables with let/const.