// JavaScript Function apply() Reference

// 1. Method Reuse with apply()
// The apply() method allows a function to be used on different objects, redefining 'this'.
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
};

// Apply the fullName method to person1
let result1 = person.fullName.apply(person1);
console.log("apply() with person1:", result1); // Outputs "Mary Doe"

// 2. The apply() Method vs call()
// - call() takes arguments separately: person.fullName.call(person1, "Oslo", "Norway")
// - apply() takes arguments as an array, making it handy for array-based inputs.

// 3. The apply() Method with Arguments
// apply() accepts arguments in an array after the 'this' value.
const personWithArgs = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person2 = {
  firstName: "John",
  lastName: "Doe"
};

// Apply fullName with arguments in an array
let result2 = personWithArgs.fullName.apply(person2, ["Oslo", "Norway"]);
console.log("apply() with Arguments:", result2); // Outputs "John Doe, Oslo, Norway"

// Compare with call() for the same result
let result3 = personWithArgs.fullName.call(person2, "Oslo", "Norway");
console.log("call() for Comparison:", result3); // Outputs "John Doe, Oslo, Norway"

// 4. Simulate a Max Method on Arrays
// JavaScript arrays lack a max() method, but Math.max() can be applied to an array.
let numbers = [1, 2, 3];
let max1 = Math.max(1, 2, 3); // Direct use of Math.max
console.log("Math.max() Direct:", max1); // Outputs 3

// Use apply() to find max in an array
let max2 = Math.max.apply(null, numbers);
console.log("apply() with Array (null):", max2); // Outputs 3

// Other valid first arguments (not used in this case)
let max3 = Math.max.apply(Math, [1, 2, 3]);
console.log("apply() with Array (Math):", max3); // Outputs 3
let max4 = Math.max.apply(" ", [1, 2, 3]);
console.log("apply() with Array (string):", max4); // Outputs 3
let max5 = Math.max.apply(0, [1, 2, 3]);
console.log("apply() with Array (0):", max5); // Outputs 3
// Note: The first argument (e.g., null) doesn’t matter here, as Math.max ignores 'this'.

// 5. JavaScript Strict Mode
// In strict mode, if the first argument of apply() is not an object, it becomes the owner of the function.
// In non-strict mode, it becomes the global object.
// Example in strict mode (uncomment to test):
/*
"use strict";
const strictTest = {
  name: "Test",
  show: function() {
    return this ? this.name : "undefined in strict mode";
  }
};
let resultStrict = strictTest.show.apply(null);
console.log("apply() in Strict Mode:", resultStrict); // Outputs "undefined in strict mode"
*/

// Non-strict mode example
const nonStrictTest = {
  name: "Test",
  show: function() {
    return this ? this.name : "undefined";
  }
};
let resultNonStrict = nonStrictTest.show.apply(null);
console.log("apply() in Non-Strict Mode:", resultNonStrict); // Outputs "Test" or global object property