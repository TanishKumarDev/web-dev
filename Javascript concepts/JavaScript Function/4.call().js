// JavaScript Function call() Reference

// 1. Method Reuse with call()
// In JavaScript, all functions are object methods; if not tied to an object, they belong to the global object.
// The call() method allows a function to be used on different objects, redefining 'this'.

// Example: Define a method on one object
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
// The fullName method uses 'this' to refer to the object it is called on.
// Here, 'this' will refer to the object that invokes the method.
console.log("=== JavaScript Function call() Method ===");

// 2. Using call() to Invoke a Method
// The call() method invokes a function with a specified 'this' value (an object) as its argument.
// Here, we reuse the fullName method on different objects.
const person1 = {
  firstName: "John",
  lastName: "Doe"
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe"
};

// Invoke fullName with person1 as 'this'
let result1 = person.fullName.call(person1);
console.log("call() with person1:", result1); // Outputs "John Doe"

// Invoke fullName with person2 as 'this'
let result2 = person.fullName.call(person2);
console.log("call() with person2:", result2); // Outputs "Mary Doe"

// 3. The 'this' Keyword
// In object methods, 'this' refers to the object owning the method.
// With call(), 'this' is dynamically set to the object passed as the first argument.
// Note: 'this' is a keyword, not a variable, and its value cannot be changed directly.

// 4. The call() Method with Arguments
// call() can accept additional arguments after the first one (the 'this' value).
const personWithArgs = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person3 = {
  firstName: "John",
  lastName: "Doe"
};

// Invoke fullName with person3 as 'this' and pass arguments
let result3 = personWithArgs.fullName.call(person3, "Oslo", "Norway");
console.log("call() with Arguments:", result3); // Outputs "John Doe, Oslo, Norway"