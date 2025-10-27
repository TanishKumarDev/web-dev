// Variable Hoisting with var
console.log("Before var declaration: ", x); // ReferenceError: x is not defined
var x = 10; 
console.log("After var declaration: ", x);

// // Variable Hoisting with let (Temporal Dead Zone)
// console.log("Before let declartion: ", y) // ReferenceError: y is not defined
let y = 10;
console.log("After let declaration: ", y);

// Function Declaration Hoisting
sayHello(); // works -> fully hoisted

function sayHello() {
    console.log("Hello World");
}

// Function Expression Hoisting
// console.log(greet); // undefined (variable hoisted, but not assigned)
var greet = function() {
    console.log("Greetings!");
};
greet(); // Works: "Greetings!"

// Arrow Function (similar to function expression)
// console.log(arrowFunc); // undefined (variable hoisted, but not assigned)
var arrowFunc = () => console.log("Arrow Function!");
arrowFunc(); // Works: "Arrow Function!"

// Example with scope
function testHoisting() {
    console.log("Inside function: a =", a); // undefined (hoisted within function scope)
    var a = 5;
    console.log("Inside function after declaration: a =", a); // 5
}
testHoisting();