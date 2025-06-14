/*
 * JavaScript Variables: Block Scope, let, const, and var
 *
 * Topics Covered:
 * 1. Block Scope (let and const vs. var)
 * 2. Redeclaration and Reassignment
 * 3. Hoisting
 * 4. const with Arrays and Objects
 * 5. HTML Output (Browser Environment)
 *
 * Best Practices:
 * - Use let for reassignable variables.
 * - Use const for fixed values or constant references (arrays/objects).
 * - Avoid var unless supporting legacy browsers.
 * - Always declare variables before use.
 * - Use block scope to prevent unintended overwrites.
 */

// --------------------------------------------
// 1. BLOCK SCOPE
// --------------------------------------------

// let: Block-scoped — variables are limited to the block in which they are defined
let x = 10; // Outer x
{
    let x = 2; // Inner x — separate variable due to block scope
    console.log("Inside block (let):", x); // 2
}
console.log("Outside block (let):", x); // 10 — Outer x is unaffected by the inner one

// var: Function-scoped — NOT block-scoped
var xx = 10; // Outer xx
{
    var xx = 2; // Same variable — redeclared in block but affects the outer scope
    console.log("Inside block (var):", xx); // 2
}
console.log("Outside block (var):", xx); // 2 — Outer xx was overwritten

// --------------------------------------------
// 2. REDECLARATION AND REASSIGNMENT
// --------------------------------------------

// var: Allows both redeclaration and reassignment
var y = 2;
var y = 3; // Redeclaration allowed
y = 4;     // Reassignment allowed
console.log("var redeclaration:", y); // 4

// let: Allows reassignment but NOT redeclaration in the same scope
let z = 10;
// let z = 20; // ❌ Error: 'z' already declared in this scope
z = 20;     // ✅ Allowed: just reassignment
console.log("let reassignment:", z); // 20

// let: Can be redeclared in different blocks (block-scoped)
let w = 2;
{
    let w = 3; // ✅ Allowed: new block, new variable
    console.log("Inside block (let):", w); // 3
}
{
    let w = 4; // ✅ Again, different block
    console.log("Inside another block (let):", w); // 4
}
console.log("Outside block (let):", w); // 2 — original w

// const: Neither redeclaration nor reassignment is allowed
const PI = 3.14159;
// PI = 3.14; // ❌ Error: Cannot reassign a const
console.log("const PI:", PI);

// --------------------------------------------
// 3. HOISTING
// --------------------------------------------

// var: Hoisted to top of scope, initialized with `undefined` by default
carName = "Volvo"; // Works even before declaration
var carName;
console.log("Hoisted var:", carName); // Volvo

// let: Also hoisted, but exists in the "Temporal Dead Zone" until declaration
// console.log(myLet); // ❌ Error: Cannot access before initialization
let myLet = 5;
console.log("let after declaration:", myLet); // 5

// --------------------------------------------
// 4. CONST WITH ARRAYS AND OBJECTS
// --------------------------------------------

// const arrays: Elements can be modified, but reassignment is not allowed
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota"; // ✅ Allowed — modifies content
cars.push("Audi");  // ✅ Allowed — adds new item
console.log("Modified const array:", cars); // ["Toyota", "Volvo", "BMW", "Audi"]
// cars = ["Toyota", "Volvo", "Audi"]; // ❌ Error: Cannot reassign entire array

// const objects: Properties can be changed/added, object reference cannot change
const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";       // ✅ Allowed — modifying property
car.owner = "Johnson";   // ✅ Allowed — adding new property
console.log("Modified const object:", car); // Updated object
// car = { type: "Volvo" }; // ❌ Error: Cannot reassign entire object

// --------------------------------------------
// 5. HTML OUTPUT (Browser-Only)
// --------------------------------------------

// This code works only in a browser environment (not Node.js)
// Checks if 'document' exists to avoid runtime error
if (typeof document !== "undefined") {
    let carDisplay = "Volvo";
    // Updates content of element with id="demo" in HTML
    document.getElementById("demo").innerHTML = carDisplay;
    console.log("HTML Output:", carDisplay); // Volvo
} else {
    // For environments like Node.js where 'document' is undefined
    console.log("HTML Output: Requires a browser environment with an element id='demo'");
}
