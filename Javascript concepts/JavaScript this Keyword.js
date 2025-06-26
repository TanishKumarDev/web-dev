// -----------------------------------------------------------------------------
// ✅ 1. What is `this` in JavaScript?
// -----------------------------------------------------------------------------

/**
 * 🔹 `this` refers to the object **that is executing the current function**.
 * The value of `this` depends on **how a function is called**, not where it’s written.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Global Scope (non-strict vs strict)
// -----------------------------------------------------------------------------

console.log(this); // 👉 In browsers: refers to the global `window` object

"use strict";
// console.log(this); // 👉 undefined (in strict mode outside of any object)

// -----------------------------------------------------------------------------
// ✅ 3. Inside a Regular Function
// -----------------------------------------------------------------------------

function regularFunction() {
  console.log("Regular function `this`:", this);
}
regularFunction(); // 👉 In non-strict: global object | strict: undefined

// -----------------------------------------------------------------------------
// ✅ 4. Inside a Method (Object Function)
// -----------------------------------------------------------------------------

const user = {
  name: "Tanish",
  greet: function () {
    console.log("Inside method:", this.name); // 👉 refers to `user` object
  },
};
user.greet(); // Output: "Inside method: Tanish"

// -----------------------------------------------------------------------------
// ✅ 5. Losing `this` when assigning method to variable
// -----------------------------------------------------------------------------

const detachedGreet = user.greet;
// detachedGreet(); // 👉 `this` becomes undefined or global, not `user`

// -----------------------------------------------------------------------------
// ✅ 6. Arrow Functions — `this` is lexically bound
// -----------------------------------------------------------------------------

const arrowUser = {
  name: "Tanish",
  greet: () => {
    console.log("Arrow Function `this`:", this.name);
  },
};
arrowUser.greet(); // Output: undefined (arrow functions don’t bind their own `this`)

// Arrow functions inherit `this` from their parent scope.

function outer() {
  const inner = () => console.log("Arrow inner `this`:", this);
  inner();
}
outer(); // `this` depends on how outer() was called (e.g., global or object)

// -----------------------------------------------------------------------------
// ✅ 7. `this` in Constructor Functions
// -----------------------------------------------------------------------------

function Person(name) {
  this.name = name;
}
const p1 = new Person("Tanish");
console.log(p1.name); // Output: "Tanish"

// In constructor functions, `this` refers to the new object created

// -----------------------------------------------------------------------------
// ✅ 8. `this` with `call`, `apply`, `bind`
// -----------------------------------------------------------------------------

function showName() {
  console.log("Name:", this.name);
}

const user2 = { name: "Rahul" };

showName.call(user2);  // 👉 passes user2 as `this`
showName.apply(user2); // 👉 same as call, with arguments as array

const boundShow = showName.bind(user2);
boundShow(); // `this` is permanently bound to user2

// -----------------------------------------------------------------------------
// ✅ 9. `this` in Class
// -----------------------------------------------------------------------------

class Car {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log("Car name:", this.name);
  }
}

const myCar = new Car("BMW");
myCar.show(); // Output: "Car name: BMW"

// -----------------------------------------------------------------------------
// ✅ 10. `this` in Event Listeners
// -----------------------------------------------------------------------------

// document.getElementById("btn").addEventListener("click", function () {
//   console.log(this); // 👉 refers to the button element
// });

// document.getElementById("btn").addEventListener("click", () => {
//   console.log(this); // 👉 inherits from outer lexical scope (usually `window`)
// });

// -----------------------------------------------------------------------------
// ✅ Summary - What Does `this` Refer To?
// -----------------------------------------------------------------------------

/**
 * 🔸 Global scope (non-strict)  => global object (`window` in browser)
 * 🔸 Global scope (strict)      => undefined
 * 🔸 Inside function (non-strict) => global object
 * 🔸 Inside function (strict)     => undefined
 * 🔸 Inside method               => the object calling the method
 * 🔸 Arrow function              => inherited from parent (lexical)
 * 🔸 Constructor                 => new instance created
 * 🔸 `call`, `apply`, `bind`     => explicitly set
 * 🔸 DOM Event Handler (regular) => the HTML element
 * 🔸 DOM Event Handler (arrow)   => inherited from parent
 */

// -----------------------------------------------------------------------------
// ✅ Interview Tip
// -----------------------------------------------------------------------------

/**
 * Always ask: “How is the function being called?”
 * That's how you determine what `this` refers to.
 */
