// === Understanding Strict Mode ===
// Strict mode is a JavaScript feature introduced in ECMAScript 5 to enforce stricter parsing and error handling in your code.
// - Purpose: Makes code safer by throwing errors for common mistakes (e.g., using undeclared variables).
// - Usage: Enabled by adding "use strict"; at the beginning of a script (global scope) or function (local scope).
// - Compatibility: Supported by all modern browsers (except IE 9 and earlier); ignored by older browsers.
// Why confusing? Strict mode changes JavaScript’s default “forgiving” behavior, which can surprise developers used to loose mode.
// Analogy: Think of strict mode as a strict teacher who enforces clear rules, catching mistakes early to prevent sloppy code.
// Tip: Always use strict mode in new code to write cleaner, safer JavaScript and avoid silent errors.

console.log("=== JavaScript Strict Mode Examples ===");

// === Declaring Strict Mode (Global Scope) ===
// Adding "use strict"; at the top of a script applies strict mode to all code in the file.

console.log("\n=== Global Strict Mode ===");
// "use strict";
// x = 3.14; // ReferenceError: x is not defined
// Reason: In strict mode, undeclared variables cannot be used.
// Logic: Forces explicit variable declarations (var, let, const), preventing accidental global variables.

// Without strict mode (for comparison)
x = 3.14; // Works, creates global variable
console.log(x); // 3.14
// Reason: In non-strict mode, assigning to an undeclared variable creates a global variable.
// Logic: This can lead to unintended global pollution, which strict mode prevents.

// === Declaring Strict Mode (Function Scope) ===
// Strict mode inside a function applies only to that function’s scope.

console.log("\n=== Function Strict Mode ===");
function strictFunction() {
  "use strict";
  // y = 3.14; // ReferenceError: y is not defined
  let y = 3.14;
  console.log(y); // 3.14
}
strictFunction();

function nonStrictFunction() {
  y = 3.14; // Creates global variable
  console.log(y); // 3.14
}
nonStrictFunction();
console.log(typeof window.y); // "number" (in browsers)
// Reason: Strict mode in strictFunction requires explicit declarations; non-strict mode allows globals.
// Logic: Function-scoped strict mode isolates strict behavior, leaving outer code unaffected.

// === Prohibited Actions in Strict Mode ===
// Strict mode throws errors for actions that are allowed in non-strict mode.

// 1. Using Undeclared Variables or Objects
console.log("\n=== Undeclared Variables/Objects ===");
function strictUndeclared() {
  "use strict";
  // z = { p1: 10, p2: 20 }; // ReferenceError: z is not defined
}
// Reason: Assigning to undeclared objects is forbidden in strict mode.
// Logic: Prevents accidental creation of global objects.

// 2. Deleting Variables, Objects, or Functions
console.log("\n=== Deleting Variables/Functions ===");
function strictDelete() {
  "use strict";
  let x = 3.14;
  // delete x; // SyntaxError: Delete of an unqualified identifier
  // function myFunc() {}
  // delete myFunc; // SyntaxError: Delete of an unqualified identifier
}
// Reason: Deleting variables or functions is not allowed in strict mode.
// Logic: Protects variables and functions from being removed unexpectedly.

// 3. Duplicating Parameter Names
console.log("\n=== Duplicating Parameters ===");
function strictParams(p1, p2) {
  "use strict";
  console.log(p1, p2); // Works fine
}
// function strictDuplicate(p1, p1) { // SyntaxError: Duplicate parameter name
//   "use strict";
// }
// Reason: Duplicate parameter names in functions are not allowed in strict mode.
// Logic: Ensures clarity in function signatures.

// 4. Octal Literals and Escape Characters
console.log("\n=== Octal Literals ===");
function strictOctal() {
  "use strict";
  // let x = 010; // SyntaxError: Octal literals are not allowed
  // let y = "\010"; // SyntaxError: Octal escape sequences are not allowed
}
// Reason: Octal literals (e.g., 010) and escape sequences (e.g., "\010") are deprecated and forbidden.
// Logic: Encourages modern number formats (e.g., 0o10 for octal).

// 5. Writing to Read-Only or Getter-Only Properties
console.log("\n=== Read-Only Properties ===");
function strictReadOnly() {
  "use strict";
  const obj = {};
  Object.defineProperty(obj, "x", { value: 0, writable: false });
  // obj.x = 3.14; // TypeError: Cannot assign to read only property
  const obj2 = { get x() { return 0; } };
  // obj2.x = 3.14; // TypeError: Cannot set property x which has only a getter
}
// Reason: Strict mode prevents modifying non-writable or getter-only properties.
// Logic: Protects object integrity by enforcing property descriptors.

// 6. Deleting Undeletable Properties
console.log("\n=== Deleting Undeletable Properties ===");
function strictDeleteProp() {
  "use strict";
  // delete Object.prototype; // TypeError: Cannot delete property 'prototype'
}
// Reason: Deleting built-in properties like Object.prototype is not allowed.
// Logic: Prevents modification of core JavaScript objects.

// 7. Using Reserved Words as Variables
console.log("\n=== Reserved Words ===");
function strictReserved() {
  "use strict";
  // let eval = 3.14; // SyntaxError: Unexpected eval or arguments
  // let arguments = 3.14; // SyntaxError: Unexpected eval or arguments
  // let public = 1500; // SyntaxError: Unexpected strict reserved word
}
// Reason: Strict mode reserves words like eval, arguments, and future keywords (e.g., public).
// Logic: Prevents conflicts with JavaScript’s syntax and future features.

// 8. eval() Restrictions
console.log("\n=== eval() Restrictions ===");
function strictEval() {
  "use strict";
  // eval("var x = 2"); // x is not accessible outside eval
  // console.log(x); // ReferenceError: x is not defined
}
// Reason: In strict mode, eval() cannot declare variables in the calling scope.
// Logic: Isolates eval() to prevent unintended variable creation.

// === The this Keyword in Strict Mode ===
// In strict mode, this in functions is undefined unless explicitly bound.

console.log("\n=== this in Strict Mode ===");
function strictThis() {
  "use strict";
  console.log(this); // undefined
}
strictThis();

function nonStrictThis() {
  console.log(this); // window (in browsers) or global (in Node.js)
}
nonStrictThis();
// Reason: In strict mode, this is undefined in functions not called as methods; in non-strict mode, it’s the global object.
// Logic: Prevents accidental reliance on the global object, improving code clarity.

// === Best Practice: Always Use Strict Mode ===
// Enabling strict mode at the top of scripts ensures consistent, safe coding.

console.log("\n=== Best Practice ===");
"use strict";
let a = 10;
console.log(a); // 10
// b = 20; // ReferenceError: b is not defined
// Reason: Strict mode enforces explicit declarations and catches errors early.
// Logic: Makes code more predictable and easier to debug.