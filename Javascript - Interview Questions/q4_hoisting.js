// 1. Hoisting with var
console.log("==1. Hoisting with var==");

console.log("Before var declaration a =",a); // undefined
var a = 10;
console.log("Before var declaration a =",a); // undefined

/*
Internally 

var a; // hoisted
console.log(a);
a = 10

*/

// 2. Hoisting with let and const
console.log("==2. Hoisting with let and const==");
// console.log(b); // ReferenceError: b is not defined
// let b = 20; // TDZ

// console.log(c); // ReferenceError: c is not defined
// const c = 30;

// 3. Hoisting with Functions
// console.log("==3. Hoisting with Functions==");
// greet();
// function greet() {
//     console.log("Hello World");
// }

// Expression me only var ka undefined hoist hota hai, function body nahi.

// greet();  // TypeError: greet is not a function

// var greet = function() {
//   console.log("Hello");
// };

/*

Internally


var greet;       // hoisted → undefined
greet();         // undefined is not a function
greet = function() {}

*/

// Function Expression (let/const + function)
console.log("==Function Expression (let/const + function)==");

hello(); // ReferenceError

let hello = function() {
  console.log("Hi");
};

// | Feature                          | var       | let/const   | function declaration | function expression |
// | -------------------------------- | --------- | ----------- | -------------------- | ------------------- |
// | Hoisted?                         | Yes       | Yes         | Yes                  | Yes (only variable) |
// | Value before declaration         | undefined | TDZ (error) | full function        | undefined / TDZ     |
// | Safe to call before declaration? | No        | No          | Yes                  | No                  |
