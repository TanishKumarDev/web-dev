// -----------------------------------------------------------------------------
// ✅ 1. What is Scope?
// -----------------------------------------------------------------------------

/**
 * Scope determines the **visibility** or **accessibility** of variables.
 * It defines where a variable can be used inside the code.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Types of Scope in JavaScript
// -----------------------------------------------------------------------------

/**
 * 🔸 Global Scope
 * 🔸 Function Scope
 * 🔸 Block Scope (introduced with ES6)
 * 🔸 Lexical Scope (aka Static Scope)
 */

// -----------------------------------------------------------------------------
// ✅ 3. Global Scope
// -----------------------------------------------------------------------------

// Declared outside any function or block → Accessible anywhere
let globalVar = "I'm Global";

function showGlobal() {
  console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar); // Accessible

// -----------------------------------------------------------------------------
// ✅ 4. Function Scope (Only `var` supports function scope)
// -----------------------------------------------------------------------------

function testFunctionScope() {
  var insideFunc = "Function Scoped";
  console.log(insideFunc);
}
// console.log(insideFunc); ❌ Error: not accessible outside the function

// -----------------------------------------------------------------------------
// ✅ 5. Block Scope (let, const only)
// -----------------------------------------------------------------------------

{
  let blockLet = "Block Scoped";
  const blockConst = "Also Block Scoped";
  var blockVar = "Function Scoped"; // Not block scoped
}

// console.log(blockLet); ❌ Error
// console.log(blockConst); ❌ Error
console.log(blockVar); // ✅ Accessible

// -----------------------------------------------------------------------------
// ✅ 6. Scope Differences: var vs let/const
// -----------------------------------------------------------------------------

function testScope() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ✅ 10 (var is function-scoped)
  // console.log(y); ❌ Error (let is block-scoped)
  // console.log(z); ❌ Error (const is block-scoped)
}
testScope();

// -----------------------------------------------------------------------------
// ✅ 7. Lexical Scope (Static Scope)
// -----------------------------------------------------------------------------

/**
 * A function can access variables defined in its outer scope.
 */

function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    console.log(outerVar); // ✅ Accessible due to lexical scope
  }
  inner();
}
outer();

// -----------------------------------------------------------------------------
// ✅ 8. Hoisting & Scope
// -----------------------------------------------------------------------------

console.log(a); // undefined (var is hoisted but not the value)
var a = 5;

// console.log(b); ❌ Error: Cannot access 'b' before initialization
let b = 10;

// -----------------------------------------------------------------------------
// ✅ 9. Interview Trick: Shadowing
// -----------------------------------------------------------------------------

let value = 10;

function shadow() {
  let value = 20; // Shadows the outer `value`
  console.log(value); // 20
}
shadow();
console.log(value); // 10

// -----------------------------------------------------------------------------
// ✅ 10. Summary – Scope Rules
// -----------------------------------------------------------------------------

/**
 * 🔹 Global scope – accessible everywhere
 * 🔹 Function scope – `var` is visible only inside functions
 * 🔹 Block scope – `let` and `const` are block scoped
 * 🔹 Lexical scope – inner function can access outer variables
 * 🔹 Avoid using `var` in modern code
 * 🔹 Shadowing can be tricky in nested scopes
 */

// ✅ Code Comparison — Function vs Block Scope
function demoScope() {
  if (true) {
    var a = 10;       // Function scoped
    let b = 20;       // Block scoped
    const c = 30;     // Block scoped
  }

  console.log(a); // ✅ 10 - var is function scoped
  // console.log(b); // ❌ ReferenceError - block scoped
  // console.log(c); // ❌ ReferenceError - block scoped
}

demoScope();

// 🧠 Nested Example: Why var is dangerous
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}
// Output (after loop ends): var i: 3 (3 times)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}
// Output: let j: 0, 1, 2 ✅ (correct)


// 🔥 Interview Mistake (Trick)
function checkVarLet() {
  var a = 1;
  {
    var a = 2; // Re-declares the same variable (no error)
    console.log(a); // 2
  }
  console.log(a); // 2 ❗️ Same var

  let b = 1;
  {
    // let b = 2; // ✅ Allowed — block-scoped
    // let b = 1; // ❌ Error if re-declared in same block
    console.log(b); // 1 (outer block)
  }
  console.log(b); // 1
}
checkVarLet();

// 🛠 Real Rule of Thumb
// ✅ Always use let or const.
// ❌ Avoid var unless maintaining old code.
// ✅ Understand function scope for var, block scope for let/const.