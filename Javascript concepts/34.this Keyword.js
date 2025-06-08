// === Understanding the this Keyword ===
// The `this` keyword in JavaScript refers to an object, but its value depends on how and where a function is called.
// - Context Matters: `this` changes based on the execution context (e.g., object method, global scope, event handler).
// - Key Contexts:
//   - Object Method: `this` is the object owning the method.
//   - Global Scope/Function: `this` is the global object (e.g., window in browsers) or undefined in strict mode.
//   - Event Handler: `this` is the HTML element that triggered the event.
//   - Explicit Binding: `call()`, `apply()`, or `bind()` can set `this` to any object.
// - Not a Variable: `this` is a keyword, not a variable, so its value cannot be reassigned.
// Why confusing? `this`’s value is dynamic, leading to unexpected behavior if the context isn’t clear.
// Analogy: Think of `this` as a name tag that changes depending on who’s wearing it during a conversation.
// Tip: Always check the calling context of a function to predict `this`. Use strict mode to avoid accidental global binding.

/*
What is this in JavaScript?
- this refers to the object that is executing the current function. 
- But what it points to depends on how the function is called, not where it's written.

Why does this exist?
To give context — so a function can act based on the object that invoked it.
To allow code reuse — you can write one function and use it for multiple objects.
*/
console.log("=== JavaScript this Keyword Examples ===");

// === this in an Object Method ===
// In an object method, `this` refers to the object that owns the method.

console.log("\n=== this in Object Method ===");
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  getId: function() {
    return this.id;
  }
};
console.log(person.fullName()); // "John Doe"
console.log(person.getId()); // 5566
// Reason: `this` refers to the `person` object because fullName and getId are its methods.
// Logic: When a function is called as a method (e.g., person.fullName()), `this` is the object before the dot.

// === this Alone (Global Scope) ===
// When used alone or in a non-method function, `this` refers to the global object (window in browsers).

console.log("\n=== this Alone ===");
console.log(this === window); // true (in browsers)
// let x = this; // x is window (in browsers)
// console.log(x); // [object Window]
// Reason: In non-strict mode, `this` defaults to the global object in the global scope.
// Logic: Without a specific context, `this` points to the top-level environment (window in browsers).

// === this in a Function (Non-Strict Mode) ===
// In a regular function, `this` defaults to the global object (window in browsers).

console.log("\n=== this in Function (Non-Strict) ===");
function myFunction() {
  return this;
}
console.log(myFunction() === window); // true (in browsers)
// Reason: In non-strict mode, functions not called as methods bind `this` to the global object.
// Logic: JavaScript’s default binding assumes the global context for standalone functions.

// === this in a Function (Strict Mode) ===
// In strict mode, `this` in a function is undefined unless explicitly bound.

console.log("\n=== this in Function (Strict Mode) ===");
function strictFunction() {
  "use strict";
  return this;
}
console.log(strictFunction()); // undefined
// Reason: Strict mode disables default binding to the global object, making `this` undefined.
// Logic: Prevents accidental reliance on the global object, forcing explicit context definition.

// === this in Event Handlers ===
// In HTML event handlers, `this` refers to the element that triggered the event.

console.log("\n=== this in Event Handlers ===");
// Example (commented as it requires a browser environment):
// <button onclick="console.log(this)">Click Me</button>
// Reason: In event handlers, `this` is the DOM element that received the event (e.g., the button).
// Logic: JavaScript binds `this` to the element to allow direct manipulation of its properties.

// Simulated event handler example (for non-browser environments)
const button = {
  text: "Click Me",
  clickHandler: function() {
    console.log(this.text); // "Click Me"
  }
};
button.clickHandler();
// Reason: The clickHandler method is called on the button object, so `this` is the button.
// Logic: Mimics how `this` works in a real event handler.

// === Explicit Function Binding (call, apply, bind) ===
// Methods like call(), apply(), and bind() let you explicitly set the value of `this`.

console.log("\n=== Explicit Binding ===");
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
const person2 = {
  firstName: "Jane",
  lastName: "Smith"
};
console.log(person1.fullName.call(person2)); // "Jane Smith"
console.log(person1.fullName.apply(person2)); // "Jane Smith"
const boundFullName = person1.fullName.bind(person2);
console.log(boundFullName()); // "Jane Smith"
// Reason: call() and apply() invoke the function immediately, setting `this` to person2; bind() returns a new function with `this` permanently set to person2.
// Logic: These methods override the default `this` binding, allowing flexible function reuse.

// === Function Borrowing with bind() ===
// bind() allows an object to borrow a method from another object.

console.log("\n=== Function Borrowing ===");
const person3 = {
  firstName: "Hege",
  lastName: "Nilsen"
};
const fullName = person1.fullName.bind(person3);
console.log(fullName()); // "Hege Nilsen"
// Reason: bind() creates a new function where `this` is permanently set to person3.
// Logic: Enables method sharing between objects without modifying the original method.

// === this Precedence ===
// The value of `this` follows this precedence: bind() > call()/apply() > object method > global scope.

console.log("\n=== this Precedence ===");
function testPrecedence() {
  return this.name;
}
const obj1 = { name: "Obj1", test: testPrecedence };
const obj2 = { name: "Obj2" };
const boundTest = testPrecedence.bind({ name: "Bound" });
console.log(testPrecedence()); // "" (window.name in browsers, non-strict)
console.log(obj1.test()); // "Obj1" (object method)
console.log(testPrecedence.call(obj2)); // "Obj2" (call/apply)
console.log(boundTest()); // "Bound" (bind)
// Reason: bind() takes highest precedence, followed by call()/apply(), object methods, and global scope.
// Logic: JavaScript evaluates `this` based on how the function is invoked, prioritizing explicit bindings.

// === Best Practice: Controlling this ===
// Use strict mode, arrow functions, or explicit binding to avoid `this` surprises.

console.log("\n=== Best Practice ===");
const safePerson = {
  firstName: "Alice",
  lastName: "Brown",
  fullName: () => {
    return this.firstName; // undefined (arrow functions don’t bind `this`)
  },
  safeFullName: function() {
    "use strict";
    return this.firstName + " " + this.lastName;
  }
};
console.log(safePerson.safeFullName()); // "Alice Brown"
// console.log(safePerson.fullName()); // undefined
// Reason: Arrow functions inherit `this` from the surrounding scope (often undefined or window); strict mode ensures predictable `this` in methods.
// Logic: Use explicit binding or strict mode to make `this` behavior clear and reliable.