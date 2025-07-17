// JavaScript Notes: Functions and Parameter Passing
// This file contains examples for learning JavaScript functions and parameter passing

// === Basic Function Declaration ===
// Defines a function to add two numbers
function sum(x, y) {
    return x + y; // Returns the sum of x and y
}
console.log(sum(6, 9)); // Output: 15

// === Function Parameters with Default Value ===
// Creates a greeting message with a default name
function welcomeMsg(name = "User") {
    return `Hello ${name}, welcome to the site`; // Uses template literal for string
}
console.log(welcomeMsg("Rohan")); // Output: Hello Rohan, welcome to 

// === Function Expression ===
// Assigns an anonymous function to a variable for multiplication
const mul = function (x, y) {
    return x * y; // Returns the product of x and y
};
console.log(mul(4, 5)); // Output: 20

// === Arrow Function (ES6) ===
// Maps an array to get string lengths using an arrow function
const a = ["Hydrogen", "Helium", "Lithium"];
const lengths = a.map(s => s.length); // Concise arrow function with implicit return
console.log(lengths); // Output: [8, 6, 7]

// === Immediately Invoked Function Expression (IIFE) ===
// Runs immediately to log a message
(function () {
    console.log("This runs immediately!"); // Executes once at definition
})(); // Output: This runs immediately!

// === Callback Function ===
// Passes a function as an argument to double a number
function num(n, callback) {
    return callback(n); // Calls the callback with n
}
const double = n => n * 2; // Arrow function to double a number
console.log(num(5, double)); // Output: 10

// === Anonymous Function ===
// Uses an anonymous function in a timer
setTimeout(function () {
    console.log("Executed after 1 second!"); // Runs after 1000ms delay
}, 1000);

// === Nested Function with Closure ===
// Outer function returns an inner function that uses closure
function outerFun(a) {
    function innerFun(b) {
        return a + b; // Accesses outer function's variable a
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5)); // Output: 15

// === Pure Function ===
// Adds two numbers without side effects
function pureAdd(a, b) {
    return a + b; // Always returns same output for same inputs
}
console.log(pureAdd(2, 3)); // Output: 5

// === Function Constructor ===
// Creates an object with name and age properties
function Person(name, age) {
    this.name = name; // Assigns name to the new object
    this.age = age; // Assigns age to the new object
}
const person = new Person("Vikash", 22);
console.log(person.name, person.age); // Output: Vikash 22

// === Function Method: call() ===
// Borrows a method and sets a custom 'this' context
const employee = {
    details: function (designation, experience) {
        return `${this.name} ${this.id} ${designation} ${experience}`; // Uses this for object properties
    }
};
const emp2 = { name: "B", id: "456" };
console.log(employee.details.call(emp2, "Manager", "4 years")); // Output: B 456 Manager 4 years

// === Method Example ===
// Defines a method within an object
const employeeObj = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return `${this.empname} works with ${this.department}`; // Accesses object properties via this
    }
};
console.log(employeeObj.details()); // Output: Rahul works with sales

// === Pass by Value (Primitives) ===
// Demonstrates that primitive changes don't affect the original
let n = 10;
function modify(x) {
    x = 20; // Modifies local copy of x
}
modify(n);
console.log(n); // Output: 10

// === Pass by Reference (Non-Primitives) ===
// Shows that object property changes affect the original
const obj = { name: "Ravi" };
function modifyObj(o) {
    o.name = "Arun"; // Modifies the original object's property
}
modifyObj(obj);
console.log(obj.name); // Output: Arun

// === Reference Reassignment ===
// Demonstrates reassigning a reference doesn't affect the original
const obj2 = { name: "Ravi" };
function reassign(o) {
    o = { name: "Arun" }; // Creates a new object, doesn't affect original
}
reassign(obj2);
console.log(obj2.name); // Output: Ravi

// === Avoiding Side Effects with Shallow Copy ===
// Creates a copy to prevent modifying the original object
const original = { name: "Ravi" };
const copy = { ...original }; // Shallow copy
copy.name = "Arun";
console.log(original.name); // Output: Ravi

// === Call by Value Example ===
// Shows that primitives are copied, not referenced
let a1 = 5;
let b = a1; // Copies the value of a1
a1 = 3; // Changes a1, doesn't affect b
console.log(a1, b); // Output: 3 5

// === Call by Reference Example ===
// Shows that object changes affect all references
let c = { greeting: "Welcome" };
let d = c; // Points to the same object
c.greeting = "Welcome to the site"; // Modifies the shared object
console.log(c.greeting, d.greeting); // Output: Welcome to the site Welcome to the site