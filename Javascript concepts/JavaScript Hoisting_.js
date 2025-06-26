// -----------------------------------------------------------------------------
// ✅ 1. What is Hoisting?
// -----------------------------------------------------------------------------

/**
 * 🔹 Hoisting is JavaScript's default behavior of **moving declarations to the top**
 *    of their scope (before code execution).
 * 🔹 Only declarations are hoisted, **not initializations**.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Variable Hoisting – `var`
// -----------------------------------------------------------------------------

console.log(a); // undefined, NOT ReferenceError
var a = 5;

/**
 * Internally, JS interprets the above as:
 * var a;
 * console.log(a); // undefined
 * a = 5;
 */

// -----------------------------------------------------------------------------
// ✅ 3. Variable Hoisting – `let` and `const`
// -----------------------------------------------------------------------------

// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;

// console.log(c); // ❌ ReferenceError
const c = 20;

// let & const are hoisted too, but they are in **Temporal Dead Zone (TDZ)**
// TDZ = Time between entering the block and the actual declaration

// -----------------------------------------------------------------------------
// ✅ 4. Function Hoisting – Function Declarations
// -----------------------------------------------------------------------------

sayHello(); // ✅ Works: "Hello"

function sayHello() {
  console.log("Hello");
}

// Full function declarations are hoisted (both name and body)

// -----------------------------------------------------------------------------
// ✅ 5. Function Hoisting – Function Expressions
// -----------------------------------------------------------------------------

// sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi");
};

// With `var`, sayHi is hoisted as `undefined`
// So `sayHi()` becomes `undefined()`, which throws a TypeError

// -----------------------------------------------------------------------------
// ✅ 6. Function Hoisting – Arrow Functions
// -----------------------------------------------------------------------------

// greet(); // ❌ TypeError: greet is not a function

const greet = () => {
  console.log("Greetings");
};

// Arrow functions are treated like variables (`const greet = ...`)
// Hence not hoisted like declarations

// -----------------------------------------------------------------------------
// ✅ 7. Hoisting Interview Trick – Shadowing
// -----------------------------------------------------------------------------

var x = 100;

function test() {
  console.log(x); // undefined, due to inner hoisting
  var x = 200;
  console.log(x); // 200
}
test();

/**
 * Internally becomes:
 * function test() {
 *   var x;
 *   console.log(x); // undefined
 *   x = 200;
 *   console.log(x); // 200
 * }
 */

// -----------------------------------------------------------------------------
// ✅ 8. Summary – Hoisting Rules
// -----------------------------------------------------------------------------

/**
 * 🔹 `var` → hoisted, initialized with `undefined`
 * 🔹 `let`, `const` → hoisted but not initialized (TDZ)
 * 🔹 Function Declaration → hoisted (fully)
 * 🔹 Function Expression / Arrow Function → hoisted as variable (undefined)
 */

// -----------------------------------------------------------------------------
// ✅ 9. Best Practices
// -----------------------------------------------------------------------------

/**
 * ✅ Always declare variables at the top of their scope
 * ✅ Use `let` and `const` to avoid unexpected behavior
 * ✅ Avoid `var` unless you understand its scoping + hoisting
 * ✅ Always declare functions before you use them (for clarity)
 */
