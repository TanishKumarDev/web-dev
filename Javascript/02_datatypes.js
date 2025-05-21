// Enable modern JavaScript standards
"use strict";

// alert("Hello"); // Error: Not available in Node.js
// Note: We are using Node.js, not browser

// Bad practice: Unreadable code
// console.log(3 + 3)console.log("Tanish"); // Avoid

// Good practice: Readable code
console.log(3 + 3); // Output: 6
console.log("Tanish"); // Output: Tanish

// Primitive Data Types
let username = "Tanish"; // String
let age = 18; // Number
let isLoggedIn = true; // Boolean
let state; // Undefined
let temperature = null; // Null (empty value)
let uniqueId = Symbol("id"); // Symbol (unique identifier)

// Type checking
console.log(typeof username); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isLoggedIn); // Output: boolean
console.log(typeof state); // Output: undefined
console.log(typeof temperature); // Output: object (historical bug)
console.log(typeof uniqueId); // Output: symbol

// Display all variables
console.table([username, age, isLoggedIn, state, temperature, uniqueId]);
