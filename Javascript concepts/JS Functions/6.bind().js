// JavaScript Function bind() Reference

// 1. Function Borrowing with bind()
// The bind() method allows an object to borrow a method from another object.
// It creates a new function with 'this' set to the specified value.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen"
};

// Borrow fullName method and bind it to member
let fullName = person.fullName.bind(member);
console.log("Function Borrowing with bind():", fullName()); // Outputs "Hege Nilsen"

// 2. Preserving 'this' with bind()
// Sometimes 'this' is lost in callbacks (e.g., with setTimeout).
// bind() creates a new function with 'this' permanently set to a specific object.

// Example: Without bind(), 'this' can be lost
const person2 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    return this.firstName + " " + this.lastName;
  }
};

// In a browser, setTimeout(person2.display, 3000) would lose 'this' (becomes global object).
// Here, we simulate the issue and fix with console output.
let unboundDisplay = person2.display;
console.log("Without bind() (simulated loss of 'this'):", unboundDisplay()); // May work here, but 'this' is global in callbacks

// Fix: Use bind() to preserve 'this'
let boundDisplay = person2.display.bind(person2);
console.log("With bind() (preserved 'this'):", boundDisplay()); // Outputs "John Doe"

// Simulate callback with setTimeout (runs after 3 seconds)
console.log("Waiting 3 seconds for bound display...");
setTimeout(boundDisplay, 3000); // Outputs "John Doe" after 3 seconds

// 3. The 'this' Keyword
// - In object methods, 'this' is the object.
// - Alone or in functions, 'this' is the global object (Node.js: global, browser: window).
// - In strict mode, 'this' is undefined in loose functions.
// - bind() locks 'this' to a specific object, unlike call() or apply() which invoke immediately.

// Note: Browser-specific example (e.g., document.getElementById) is adapted here.
// In a browser, bind() is crucial for callbacks like setTimeout to preserve 'this' for DOM updates.