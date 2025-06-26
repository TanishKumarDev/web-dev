// -----------------------------------------------------------------------------
// ✅ 1. What is an Arrow Function?
// -----------------------------------------------------------------------------

/**
 * Arrow functions were introduced in ES6 (2015).
 * They are a **shorter syntax** for writing functions.
 * They do **not bind their own `this`** (lexical scoping).
 */

// -----------------------------------------------------------------------------
// ✅ 2. Basic Syntax
// -----------------------------------------------------------------------------

// Traditional function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Arrow function equivalent
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // 5

// -----------------------------------------------------------------------------
// ✅ 3. Syntax Variants
// -----------------------------------------------------------------------------

// a. Single parameter (no parentheses needed)
const square = x => x * x;
console.log(square(4)); // 16

// b. Multiple parameters (parentheses required)
const multiply = (a, b) => a * b;

// c. No parameters (must use parentheses)
const sayHi = () => console.log("Hi!");
sayHi(); // Hi!

// d. With a block body (use return explicitly)
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 5)); // 5

// -----------------------------------------------------------------------------
// ✅ 4. Arrow Functions and `this`
// -----------------------------------------------------------------------------

const obj = {
  name: "Tanish",
  regularFunc: function () {
    console.log("Regular function `this`:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow function `this`:", this.name);
  }
};

obj.regularFunc(); // "Tanish"
obj.arrowFunc();   // undefined (inherits `this` from parent scope, which is global)

// -----------------------------------------------------------------------------
// ✅ 5. Arrow Functions Can’t Be Used as Constructors
// -----------------------------------------------------------------------------

// const Person = (name) => {
//   this.name = name;
// };
// const p = new Person("Tanish"); // ❌ TypeError: Person is not a constructor

// -----------------------------------------------------------------------------
// ✅ 6. Arrow Functions in Callbacks
// -----------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

// Traditional
const doubled = numbers.map(function (n) {
  return n * 2;
});

// Arrow
const doubledArrow = numbers.map(n => n * 2);

console.log(doubledArrow); // [2, 4, 6, 8, 10]

// -----------------------------------------------------------------------------
// ✅ 7. When NOT to Use Arrow Functions
// -----------------------------------------------------------------------------

/**
 * 🔸 In object methods (if you need `this`)
 * 🔸 As constructor functions
 * 🔸 In event handlers (if you need the element as `this`)
 */

// Example in event:
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// button.addEventListener("click", () => {
//   console.log(this); // ❌ window (not the button)
// });

// Use regular function for correct `this`
// button.addEventListener("click", function () {
//   console.log(this); // ✅ refers to the button element
// });

// -----------------------------------------------------------------------------
// ✅ 8. Summary: Arrow vs Regular Functions
// -----------------------------------------------------------------------------

/**
 * 🔹 Shorter syntax
 * 🔹 Lexical `this` (no own `this`)
 * 🔹 Not suitable as constructor
 * 🔹 Useful for callbacks
 * 🔹 No `arguments` object (must use rest parameters)
 */

// -----------------------------------------------------------------------------
// ✅ 9. Interview Tip
// -----------------------------------------------------------------------------

/**
 * Q: What is the difference between arrow and regular functions?
 * A:
 * - Arrow functions don’t have their own `this`, `arguments`, or `super`.
 * - They inherit `this` from the surrounding scope.
 * - They can’t be used as constructors.
 */

// Bonus: Arrow functions ignore `new` keyword and don’t bind `super`.

