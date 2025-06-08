// === Understanding JavaScript Common Mistakes ===
// JavaScript’s flexibility can lead to subtle errors that produce unexpected results.
// - Purpose: Recognizing common mistakes helps you write more reliable and predictable code.
// - Key Features:
//   - Misusing operators (e.g., = vs. ==), misunderstanding type coercion, and improper syntax.
//   - Issues with arrays, objects, semicolons, and return statements.
//   - Confusion between undefined and null, or trailing commas in older browsers.
// - Why Important? Avoiding these mistakes prevents bugs, improves code reliability, and saves debugging time.
// - Why Confusing? JavaScript’s loose typing, automatic semicolon insertion (ASI), and array/object behavior can be unintuitive.
// - Analogy: Think of JavaScript mistakes as stepping on hidden traps in a game—knowing where they are helps you navigate safely.
// - Tip: Use strict mode ("use strict"), linters (e.g., ESLint), and test code incrementally to catch errors early.

// === Accidentally Using the Assignment Operator ===
// Using = (assignment) instead of == or === in conditions assigns a value and returns it, causing unexpected results.
console.log("\n=== Assignment Operator Mistake ===");
let x = 0;
if (x = 10) { // Assignment, not comparison
  console.log("x is 10"); // Runs because 10 is truthy
} else {
  console.log("x is not 10"); // Skipped
}
// Correct
if (x === 10) {
  console.log("x is 10"); // Skipped
} else {
  console.log("x is not 10"); // "x is not 10"
}
// Reason: Assignment (=) sets x to 10 and returns 10 (truthy), bypassing the intended comparison.
// Logic: Always use === for comparisons to check value and type.

// === Expecting Loose Comparison ===
// Loose comparison (==) ignores type, while strict comparison (===) checks both value and type.
console.log("\n=== Loose vs. Strict Comparison ===");
let a = 10;
let b = "10";
console.log("a == b:", a == b); // "a == b: true" (coercion)
console.log("a === b:", a === b); // "a === b: false" (no coercion)
// Switch statement uses strict comparison
let c = 10;
switch (c) {
  case "10":
    console.log("String 10"); // Skipped
    break;
  case 10:
    console.log("Number 10"); // "Number 10"
    break;
}
// Reason: == converts types (e.g., "10" to 10), while === and switch require exact matches.
// Logic: Use === to avoid unexpected coercion; be aware switch uses strict comparison.

// === Confusing Addition & Concatenation ===
// The + operator adds numbers but concatenates strings, leading to unexpected results.
console.log("\n=== Addition vs. Concatenation ===");
let num1 = 10;
let num2 = 5;
console.log("Number + Number:", num1 + num2); // "Number + Number: 15"
let str1 = "10";
console.log("Number + String:", num1 + str1); // "Number + String: 105"
// Fix: Convert string to number
console.log("Fixed:", num1 + Number(str1)); // "Fixed: 20"
// Reason: + concatenates if any operand is a string; otherwise, it adds.
// Logic: Use Number() or parseInt() for explicit conversion when adding.

// === Misunderstanding Floats ===
// JavaScript’s floating-point numbers can cause precision issues in calculations.
console.log("\n=== Floating-Point Issues ===");
let x1 = 0.1;
let y1 = 0.2;
console.log("0.1 + 0.2:", x1 + y1); // "0.1 + 0.2: 0.30000000000000004"
// Fix: Scale numbers to integers
let z1 = (x1 * 10 + y1 * 10) / 10;
console.log("Fixed:", z1); // "Fixed: 0.3"
// Reason: Floating-point arithmetic (IEEE 754) isn’t always precise for decimals.
// Logic: Multiply and divide to work with integers, or use toFixed() for display.

// === Breaking a JavaScript String ===
// Breaking a string across lines without a backslash causes a syntax error.
console.log("\n=== Breaking Strings ===");
let validStr = "Hello \
World!";
console.log("Valid String:", validStr); // "Valid String: Hello World!"
// Bad example: Invalid break
// let invalidStr = "Hello
// World!"; // SyntaxError
// Reason: JavaScript doesn’t allow unescaped line breaks in strings.
// Logic: Use \ to continue a string across lines or template literals for multiline strings.

// Template literal alternative
let multiline = `Hello
World!`;
console.log("Template Literal:", multiline); // "Template Literal: Hello\nWorld!"
// Reason: Template literals (``) allow multiline strings without backslashes.
// Logic: Use template literals for cleaner multiline string handling.

// === Misplacing Semicolon ===
// A misplaced semicolon can cause code to execute unexpectedly.
console.log("\n=== Misplaced Semicolon ===");
let y = 5;
if (y == 5); { // Semicolon terminates the if statement
  console.log("This runs regardless"); // "This runs regardless"
}
// Correct
if (y === 5) {
  console.log("This runs conditionally"); // "This runs conditionally"
}
// Reason: A semicolon after if () ends the statement, making the block run unconditionally.
// Logic: Avoid semicolons after conditionals; use linters to catch this.

// === Breaking a Return Statement ===
// Breaking a return statement across lines causes it to return undefined due to automatic semicolon insertion (ASI).
console.log("\n=== Breaking Return Statements ===");
function correctReturn(a) {
  let power = 10;
  return a * power; // Same line
}
console.log("Correct:", correctReturn(5)); // "Correct: 50"
// Bad example: Broken return
function badReturn(a) {
  let power = 10;
  return // ASI inserts semicolon here
    a * power;
}
console.log("Bad:", badReturn(5)); // "Bad: undefined"
// Reason: JavaScript inserts a semicolon after return if the line ends, causing early termination.
// Logic: Keep return expressions on the same line as return.

// === Accessing Arrays with Named Indexes ===
// Arrays in JavaScript use numeric indexes; named indexes turn arrays into objects.
console.log("\n=== Array Named Indexes ===");
const person = [];
person[0] = "John";
person[1] = "Doe";
console.log("Array Length:", person.length, "First:", person[0]); // "Array Length: 2 First: John"
// Bad example: Named indexes
const badPerson = [];
badPerson["firstName"] = "John";
badPerson["lastName"] = "Doe";
console.log("Bad Length:", badPerson.length, "First:", badPerson[0]); // "Bad Length: 0 First: undefined"
// Reason: Named indexes redefine the array as an object, breaking array methods.
// Logic: Use objects for named keys and arrays for numeric indexes.

// === Ending Definitions with Trailing Commas ===
// Trailing commas in objects/arrays are valid in modern JavaScript but fail in older browsers (e.g., IE8).
console.log("\n=== Trailing Commas ===");
const validObj = {
  firstName: "John",
  lastName: "Doe" // No trailing comma
};
console.log("Valid Object:", validObj); // "Valid Object: {firstName: 'John', lastName: 'Doe'}"
// Bad example: Trailing comma
// const badObj = {
//   firstName: "John",
//   lastName: "Doe",
// }; // Fails in older browsers
const validArr = [1, 2, 3]; // No trailing comma
console.log("Valid Array:", validArr); // "Valid Array: [1, 2, 3]"
// Reason: Trailing commas are invalid in JSON and older browsers.
// Logic: Avoid trailing commas for compatibility, especially with JSON.

// === Undefined is Not Null ===
// Undefined and null are distinct; checking them incorrectly can cause errors.
console.log("\n=== Undefined vs. Null ===");
let undefVar; // Undefined
let nullVar = null; // Null
// Incorrect: Throws error if variable is undefined
// if (undefVar === null) { console.log("This fails"); }
// Correct: Check undefined first
if (typeof undefVar !== "undefined" && undefVar !== null) {
  console.log("Not undefined or null");
} else {
  console.log("Undefined or null"); // "Undefined or null"
}
// Reason: undefined is a type; null is a value. Checking null on undefined variables throws errors.
// Logic: Use typeof to check undefined before comparing with null.

// === Best Practices to Avoid Mistakes ===
// 1. Use === for comparisons to avoid type coercion.
// 2. Enable "use strict" to catch undeclared variables and other errors.
// 3. Keep return statements on one line to avoid ASI issues.
// 4. Use objects for named keys, arrays for numeric indexes.
// 5. Avoid trailing commas in objects/arrays for compatibility.
// 6. Use template literals for multiline strings.
console.log("\n=== Best Practices Example ===");
"use strict";
function processData(value = 0) {
  if (typeof value !== "undefined" && value !== null) {
    return value * 10; // Single-line return
  }
  return 0;
}
const data = [1, 2, 3]; // No trailing comma
console.log("Processed:", processData(data[0])); // "Processed: 10"
// Reason: Combines strict mode, strict equality, and proper syntax.
// Logic: Prevents common errors while keeping code clear.

// === Real-World Scenario: Avoiding Mistakes ===
// Simulate a function that avoids common pitfalls.
console.log("\n=== Real-World Example ===");
function calculateTotal(items) {
  "use strict";
  if (typeof items === "undefined" || items === null) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += Number(items[i].price); // Ensure number addition
  }
  return total; // Single-line return
}
const cart = [{ price: "50" }, { price: "30" }]; // No trailing comma
console.log("Cart Total:", calculateTotal(cart)); // "Cart Total: 80"
// Reason: Avoids type coercion, undefined/null errors, and ASI issues.
// Logic: Robust code handles edge cases and follows best practices.

// === Common Pitfalls Summary ===
// - = instead of ===: Causes unintended assignments.
// - Loose comparison (==): Leads to type coercion bugs.
// - String concatenation vs. addition: Produces unexpected strings.
// - Floating-point precision: Causes inaccurate calculations.
// - Broken strings/returns: Triggers syntax errors or undefined.
// - Named array indexes: Breaks array behavior.
// - Trailing commas: Fails in older browsers or JSON.
// - Undefined vs. null: Causes incorrect checks.

// === Recommended Tools ===
// - ESLint: Catches mistakes like = vs. === or trailing commas.
// - Browser DevTools: Debug unexpected outputs (e.g., concatenation).
// - Strict Mode: Prevents undeclared variables and other errors.
// Tip: Test small code snippets to catch mistakes early.