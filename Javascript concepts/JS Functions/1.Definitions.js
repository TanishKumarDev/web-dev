// JavaScript Function Definitions Reference

// 1. Function Declarations
// Defined with the 'function' keyword, not executed immediately, saved for later use.
// No semicolon is typically needed after declarations.
function myFunction(a, b) {
    return a * b;
}
// Example usage
let result1 = myFunction(4, 3); // Returns 12

// 2. Function Expressions
// A function can be defined and stored in a variable (often anonymous).
const x = function (a, b) {
    return a * b;
};
// Use the variable to call the function
let result2 = x(4, 3); // Returns 12
// Note: Ends with a semicolon because it’s part of an executable statement.

// 3. The Function() Constructor
// Functions can be created using the built-in Function() constructor.
const myFunctionConstructor = new Function("a", "b", "return a * b");
// Call it like any function
let result3 = myFunctionConstructor(4, 3); // Returns 12
// Alternative (preferred) without 'new':
const myFunctionAlt = function (a, b) {
    return a * b;
};
let result4 = myFunctionAlt(4, 3); // Returns 12
// Note: Avoid 'new' when possible for simplicity.

// 4. Function Hoisting
// Function declarations are hoisted (moved to the top of the scope), so they can be called before definition.
let result5 = hoistExample(5); // Works, returns 25
function hoistExample(y) {
    return y * y;
}
// Function expressions are NOT hoisted, so they must be defined before use.

// 5. Self-Invoking Functions
// Function expressions can be made self-invoking by adding () after the expression.
// These run automatically and are often anonymous.
(function () {
    let x = "Hello!!"; // I will invoke myself
    console.log("Self-Invoking Function:", x); // Outputs "Hello!!" to the console
})();
// Note: You must wrap the function in parentheses to make it an expression.

// 6. Functions Can Be Used as Values
// Functions can be assigned to variables or used directly in expressions.
function multiply(a, b) {
    return a * b;
}
let result6 = multiply(4, 3); // Returns 12
let result7 = multiply(4, 3) * 2; // Returns 24 (used in an expression)

// 7. Functions are Objects
// Functions have properties and methods, behaving like objects.
function argCount(a, b) {
    return arguments.length; // Property: number of arguments passed
}
let args = argCount(1, 2); // Returns 2

function toStringExample(a, b) {
    return a * b;
}
let funcString = toStringExample.toString(); // Method: converts function to string

// 8. Arrow Functions (ES6)
// A concise syntax for function expressions, no 'function' or 'return' needed for single statements.
const arrowFunc = (x, y) => x * y;
let result8 = arrowFunc(4, 3); // Returns 12
// More explicit form (good practice):
const arrowFuncExplicit = (x, y) => { return x * y; };
let result9 = arrowFuncExplicit(4, 3); // Returns 12
// Notes:
// - Arrow functions do not have their own 'this', not ideal for object methods.
// - Not hoisted, must be defined before use.
// - Not supported in IE11 or earlier.

// Output Results
console.log("Function Declaration:", result1);
console.log("Function Expression:", result2);
console.log("Function Constructor:", result3);
console.log("Alternative Function:", result4);
console.log("Hoisting Example:", result5);
console.log("Functions as Values:", result6, result7);
console.log("Arguments Length:", args);
console.log("Function to String:", funcString);
console.log("Arrow Function:", result8);
console.log("Explicit Arrow Function:", result9);