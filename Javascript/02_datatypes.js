// Enable modern JavaScript standards
"use strict";

// alert("Hello"); // Error: Not available in Node.js
// Note: We are using Node.js, not browser

// Bad practice: Unreadable code
// console.log(3 + 3)console.log("Tanish"); // Avoid

// Good practice: Readable code
console.log(3 + 3); // Output: 6
console.log("Tanish"); // Output: Tanish

// Primitive = Value-based
/*
Definition: Data directly holds the actual value.

Example: number, string, boolean, null, undefined, symbol, bigint (in JS)

Memory: Stored in stack.

Assignment: Value is copied, not linked.
*/
let username = "Tanish"; // String
let age = 18; // Number
let isLoggedIn = true; // Boolean
let state = "Delhi"; // Undefined
let temperature = null; // Null (empty value)
let uniqueId = Symbol("id"); // Symbol (unique identifier)

// Non-Primitive = Reference-based
/*
Definition: Data holds a reference (address) to the actual value.

Example: object, array, function (in JS)

Memory: Reference stored in stack, actual data in heap.

Assignment: Reference is shared, not copied.
*/
let object1 = {
    name: "Tanish",
    age: 18,
    isLoggedIn: true,
    state: "Delhi",
    temperature: null,
    uniqueId: Symbol("id")
}

let object2 = object1; // Reference is shared, not copied

object1.name = "Kumar"; // Modifying object1 will also modify object2

console.log(object1); // Output: { name: 'Kumar', age: 18, isLoggedIn: true, state: 'Delhi', temperature: null, uniqueId: Symbol(id) }
console.log(object2); // Output: { name: 'Kumar', age: 18, isLoggedIn: true, state: 'Delhi', temperature: null, uniqueId: Symbol(id) }


// Type checking
/*
Typeof - Returns the type of the variable
*/

console.log(typeof username); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isLoggedIn); // Output: boolean
console.log(typeof state); // Output: undefined
console.log(typeof temperature); // Output: object (historical bug)
console.log(typeof uniqueId); // Output: symbol

// Display all variables
console.table([username, age, isLoggedIn, state, temperature, uniqueId]);
