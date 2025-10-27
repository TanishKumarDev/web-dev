// Primitive Data Types
let undefinedVar;
let nullVar = null;
let isActive = true;
let age = 20;
let bigNumber = BigInt(11111111111111111111111111111111);
let name = "John";
let uniqueId = Symbol("id");

// Non-Primitive Data Types
let person = {
    name: "John",
    age: 20,
    isActive: true,
};

let number = [1,2,3,4,5];
let greet = function() {
    console.log("Hello World");
}

// logging type to verify
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof isActive);
console.log(typeof age);
console.log(typeof bigNumber);
console.log(typeof name);
console.log(typeof uniqueId);
console.log(typeof person);
console.log(typeof number);
console.log(typeof greet);