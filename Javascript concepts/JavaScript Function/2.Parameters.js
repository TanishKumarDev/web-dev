// JavaScript Function Parameters Reference

// 1. Function Parameters and Arguments
// Parameters are names in the function definition.
// Arguments are the actual values passed to the function.
function functionName(parameter1, parameter2, parameter3) {
    return parameter1 + parameter2 + parameter3;
}
// Example usage
let result1 = functionName(1, 2, 3); // Arguments: 1, 2, 3
console.log("Function with Parameters:", result1); // Outputs 6

// 2. Parameter Rules
// - JavaScript doesn’t specify data types for parameters.
// - No type checking on arguments.
// - No check on the number of arguments received.
// If arguments are missing, they are set to undefined.
function myFunction(x, y) {
    if (y === undefined) {
        y = 2; // Manual default value if y is undefined
    }
    return x + y;
}
let result2 = myFunction(5); // y is undefined, defaults to 2
console.log("Manual Default Parameter:", result2); // Outputs 7

// 3. Default Parameter Values (ES6)
// ES6 allows default values in the function definition.
function myFunctionES6(x, y = 10) {
    return x + y;
}
let result3 = myFunctionES6(5); // y defaults to 10
let result4 = myFunctionES6(5, 20); // y is 20
console.log("ES6 Default Parameter (missing y):", result3); // Outputs 15
console.log("ES6 Default Parameter (with y):", result4); // Outputs 25

// 4. Function Rest Parameter
// The rest parameter (...) collects multiple arguments into an array.
function sum(...args) {
    let total = 0;
    for (let arg of args) total += arg;
    return total;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log("Rest Parameter Sum:", x); // Outputs 326

// 5. The Arguments Object
// Built-in object holding all arguments passed to the function.
// Useful for handling variable numbers of arguments.
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
let maxValue = findMax(1, 123, 500, 115, 44, 88);
console.log("Find Max with Arguments Object:", maxValue); // Outputs 500

// Example: Sum all arguments
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
let total = sumAll(1, 123, 500, 115, 44, 88);
console.log("Sum All with Arguments Object:", total); // Outputs 871

// 6. Arguments are Passed by Value
// Functions receive the values of arguments, not their locations.
// Changes to arguments inside the function don’t affect the original.
function modifyValue(a) {
    a = 100; // Changes local copy only
    return a;
}
let num = 5;
let result5 = modifyValue(num);
console.log("Pass by Value (original num):", num); // Outputs 5
console.log("Pass by Value (modified in function):", result5); // Outputs 100

// 7. Objects are Passed by Reference
// Object references are passed, so changes to object properties affect the original.
function modifyObject(obj) {
    obj.value = 100; // Changes the original object’s property
    return obj.value;
}
let myObj = { value: 5 };
let result6 = modifyObject(myObj);
console.log("Pass by Reference (original object value):", myObj.value); // Outputs 100
console.log("Pass by Reference (modified in function):", result6); // Outputs 100