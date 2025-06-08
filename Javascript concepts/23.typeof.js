// === The typeof Operator ===
// The typeof operator returns the data type of a variable or expression.
// It is unary (takes one operand) and helps identify the type of a value.
console.log("=== typeof Operator Examples ===");
// Primitive Data Types
// JavaScript has 7 primitive data types: string, number, boolean, bigint, symbol, null, undefined
// These are single values with no properties or methods.

console.log(typeof "John");         // "string"
// Reason: "John" is a string literal, so typeof returns "string".
console.log(typeof ("John" + "Doe")); // "string"
// Reason: String concatenation ("John" + "Doe") results in a new string, so typeof returns "string".
console.log(typeof 3.14);           // "number"
// Reason: 3.14 is a floating-point number, so typeof returns "number".
console.log(typeof 33);             // "number"
// Reason: 33 is an integer, so typeof returns "number".
console.log(typeof (33 + 66));      // "number"
// Reason: The expression (33 + 66) evaluates to 99, a number, so typeof returns "number".
console.log(typeof true);           // "boolean"
// Reason: true is a boolean value, so typeof returns "boolean".
console.log(typeof false);          // "boolean"
// Reason: false is a boolean value, so typeof returns "boolean".
console.log(typeof 1234n);         // "bigint"
// Reason: 1234n is a BigInt literal, so typeof returns "bigint".
console.log(typeof Symbol());       // "symbol"
// Reason: Symbol() creates a unique symbol, so typeof returns "symbol".
console.log(typeof undefined);     // "undefined"
// Reason: An undeclared or undefined variable returns "undefined" with typeof.
console.log(typeof null);           // "object"
// Reason: This is a historical bug in JavaScript. null is a primitive, but typeof returns "object".
/*
In JavaScript, saying "null is a primitive" means that null is a basic data type, not an object or a reference type.

What is a primitive?
A primitive is a data type that is not an object and has no methods. JavaScript's primitives are:

string
number
bigint
boolean
undefined
symbol
null

Why is null a primitive?

null represents the intentional absence of any object value.
It is not an object itself, even though typeof null returns "object" (this is a long-standing bug in JavaScript).
Primitives are immutable and compared by value, not by reference.
Example:
Summary:
null is a primitive because it is a basic, immutable value in JavaScript, not an object or a reference.
*/

// === Complex Data Types ===
// JavaScript has one complex data type: object (includes arrays, functions, sets, maps, etc.).
// Complex types can store multiple values and/or different data types.

console.log("\n=== Complex Data Type Examples ===");
console.log(typeof {name: "John"}); // "object"
// Reason: An object literal {name: "John"} is an object, so typeof returns "object".
console.log(typeof [1, 2, 3, 4]);   // "object"
// Reason: Arrays are objects in JavaScript, so typeof returns "object" (not "array").
console.log(typeof new Map());       // "object"
// Reason: Map is a specialized object, so typeof returns "object".
console.log(typeof new Set());       // "object"
// Reason: Set is a specialized object, so typeof returns "object".
console.log(typeof function() {});   // "function"
// Reason: Functions are a special type of object, but typeof returns "function" for callable objects.

// Note: typeof cannot distinguish between different types of objects (e.g., arrays vs. objects vs. dates).

// === Recognizing Arrays ===
// To check if a variable is an array, use Array.isArray() (introduced in ECMAScript 5, 2009).

console.log("\n=== Array.isArray() Examples ===");
const fruits = ["apples", "bananas", "oranges"];
console.log(Array.isArray(fruits)); // true
// Reason: fruits is an array, so Array.isArray() returns true.
console.log(Array.isArray({name: "John"})); // false
// Reason: An object is not an array, so Array.isArray() returns false.

// === The instanceof Operator ===
// The instanceof operator checks if an object is an instance of a specific constructor.

console.log("\n=== instanceof Operator Examples ===");
const time = new Date();
console.log(time instanceof Date); // true
// Reason: time is created with the Date constructor, so instanceof Date returns true.

const fruitsArray = ["apples", "bananas", "oranges"];
console.log(fruitsArray instanceof Array); // true
// Reason: fruitsArray is created as an array, so instanceof Array returns true.

const fruitsMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruitsMap instanceof Map); // true
// Reason: fruitsMap is created with the Map constructor, so instanceof Map returns true.

const fruitsSet = new Set(["apples", "bananas", "oranges"]);
console.log(fruitsSet instanceof Set); // true
// Reason: fruitsSet is created with the Set constructor, so instanceof Set returns true.

// === Undefined Variables ===
// A variable that is declared but not assigned a value, or not declared at all, is undefined.

console.log("\n=== Undefined Examples ===");
let car;
console.log(typeof car); // "undefined"
// Reason: car is declared but has no value, so typeof returns "undefined".

console.log(typeof nonexistent); // "undefined"
// Reason: nonexistent is not declared, so typeof returns "undefined".

car = "Volvo";
car = undefined;
console.log(typeof car); // "undefined"
// Reason: Assigning undefined to a variable sets its value and type to undefined.

// === Empty Values ===
// An empty string is a valid value with a type of "string", distinct from undefined.

console.log("\n=== Empty Value Examples ===");
let emptyCar = "";
console.log(typeof emptyCar); // "string"
// Reason: An empty string is a valid string value, so typeof returns "string".

// === Null ===
// null represents the intentional absence of any object value, but typeof returns "object" (a bug).

console.log("\n=== Null Examples ===");
let person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
person = null;
console.log(typeof person); // "object"
// Reason: After setting to null, the value is null, but typeof still returns "object" due to the bug.

person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
person = undefined;
console.log(typeof person); // "undefined"
// Reason: Setting to undefined makes both the value and type undefined.

// === Difference Between Undefined and Null ===
console.log("\n=== Undefined vs Null ===");
console.log(typeof undefined); // "undefined"
// Reason: undefined is its own type.
console.log(typeof null); // "object"
// Reason: Historical bug in JavaScript.
console.log(null === undefined); // false
// Reason: Strict equality (===) checks type and value; types differ.
console.log(null == undefined); // true
// Reason: Loose equality (==) coerces types, and null and undefined are considered equal.

// === The constructor Property ===
// The constructor property returns the constructor function of an object.

console.log("\n=== Constructor Property Examples ===");
console.log({name: "John", age: 34}.constructor); // function Object() {[native code]}
// Reason: Objects are created by the Object constructor.
console.log([1, 2, 3, 4].constructor); // function Array() {[native code]}
// Reason: Arrays are created by the Array constructor.
console.log(new Date().constructor); // function Date() {[native code]}
// Reason: Dates are created by the Date constructor.
console.log(new Set().constructor); // function Set() {[native code]}
// Reason: Sets are created by the Set constructor.
console.log(new Map().constructor); // function Map() {[native code]}
// Reason: Maps are created by the Map constructor.
console.log(function() {}.constructor); // function Function() {[native code]}
// Reason: Functions are created by the Function constructor.

// Using constructor to check types
const myArray = [1, 2, 3];
console.log(myArray.constructor === Array); // true
// Reason: myArray was created by the Array constructor.
const myDate = new Date();
console.log(myDate.constructor === Date); // true
// Reason: myDate was created by the Date constructor.

// === The void Operator ===
// The void operator evaluates an expression and returns undefined.
// Often used in "javascript:void(0)" for links that do nothing.

console.log("\n=== void Operator Examples ===");
console.log(void(0)); // undefined
// Reason: void(0) evaluates the expression 0 and returns undefined.

// Simulating the HTML example (cannot run in console, but shown for reference):
// <a href="javascript:void(0);">Useless link</a>
// Reason: Clicking the link evaluates void(0), does nothing, and returns undefined.

// <a href="javascript:void(document.body.style.backgroundColor='red');">
//   Click me to change the background color of body to red
// </a>
// Reason: void evaluates the expression (changes background color) and returns undefined.

// === Exercise: typeof('John' + 35) ===
let x = typeof("John" + 35);
console.log("\n=== Exercise Result ===");
console.log(x); // "string"
// Reason: The expression "John" + 35 concatenates the string "John" with the number 35,
// resulting in the string "John35". Thus, typeof returns "string".
// Correct Answer: string