// Data types are categorized into Primitive and Non-Primitive (Reference) based on memory storage and access

// Primitive Data Types (Call by Value)
// Copied when assigned; changes affect the copy, not the original
// 7 Types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null (empty value, not 0 or "")
// 5. Undefined (declared but unassigned)
// 6. Symbol (unique identifiers)
// 7. BigInt (large integers)

// Examples
let name = "Hitesh"; // String
let score = 100; // Number
let scoreValue = 3.3; // Number (no separate float type)
let isLoggedIn = false; // Boolean
let temperature = null; // Null (e.g., no temperature data)
let userEmail; // Undefined (or explicitly: let userEmail = undefined)
let id = Symbol("123"); // Symbol (unique)
let anotherId = Symbol("123"); // Symbol (unique, not equal to id)
let bigNumber = 12345678901234567890n; // BigInt (append n)

// Verify Symbol uniqueness
console.log(id === anotherId); // Output: false

// Non-Primitive (Reference) Data Types (Call by Reference)
// Reference to memory location; changes affect the original
// 3 Main Types:
// 1. Array
// 2. Object
// 3. Function

// Examples
let heroes = ["Krish", "Shaktiman", "Nagraj"]; // Array
let myObj = {
  name: "Hitesh",
  age: 22,
}; // Object
let myFunction = function () {
  console.log("Hello World");
}; // Function

// JavaScript is Dynamically Typed
// No need to define variable types (unlike TypeScript)
let constant = 100; // Number (no type declaration needed)
constant = false; // Boolean (can change type dynamically)

// Type Checking with typeof
console.log(typeof bigNumber); // Output: bigint
console.log(typeof temperature); // Output: object (historical bug)
console.log(typeof score); // Output: number
console.log(typeof isLoggedIn); // Output: boolean
console.log(typeof userEmail); // Output: undefined
console.log(typeof id); // Output: symbol
console.log(typeof heroes); // Output: object
console.log(typeof myObj); // Output: object
console.log(typeof myFunction); // Output: function (technically object)

// Reference: MDN for typeof and data types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures