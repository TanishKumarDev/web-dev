// Example 1: Function Declaration (Hoisted)
function greet() {
    return "Hello!";
}

// Calling the function
console.log(greet()); // Output: Hello!

// Example 2: Function with Parameters
function getName(name) {
    return name;
}

let myName = getName("Tanish");
console.log(myName); // Output: Tanish

// DON'T do this: Overwriting the function with a variable of same name
// let getName = getName("Tanish"); // This would override the function reference

// Example 3: Function Constructor
/*
In JavaScript, you can create objects using function constructors.
Function constructors use the `this` keyword to assign properties.
Must be used with `new` keyword to create a new instance.
*/

function Person(name) {
    this.name = name;
}

// Create a new Person object
let person = new Person("Tanish");

// Logging the object and property
console.log(person);         // Output: Person { name: 'Tanish' }
console.log(person.name);    // Output: Tanish

