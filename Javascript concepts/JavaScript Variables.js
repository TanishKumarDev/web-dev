// 1. var Keyword
var num1 = 5;
console.log(num1); // Output: 5
var num1 = 20; // Redeclaration and reassignment allowed
console.log(num1); // Output: 20

/*
- Allows redeclaration and reassignment within the same scope.
- Hoisted to the top of the function or global scope.
- Can lead to unexpected bugs due to its scoping behavior.
*/
// 2. let Keyword
let b = 10;
b = 20; // Reassignment allowed
// let b = 15; // Error: Cannot redeclare
console.log(b); // Output: 20
/*
- Allows reassignment but not redeclaration within the same scope.
- Not hoisted to the top of the scope (Temporal Dead Zone).
 */

// 3. const Keyword
const num3 = 10;
// num3 = 20; // Error: Assignment to constant variable
console.log(num3); // Output: 10

/*
- mmutable bindings (cannot reassign the variable).
- Objects or arrays declared with `const` can have their contents modified, but the variable cannot be reassigned to a new object or array.
- Not hoisted to the top of the scope (Temporal Dead Zone).
 */

// Variable Shadowing
// Occurs when a variable in an inner scope has the same name as a variable in an outer scope, overriding it within the inner scope.

let n = 10; // Global scope
{
  let n = 20; // Inner scope
  console.log(n); // Output: 20
}
console.log(n); // Output: 10 (global 'n' unchanged)

// Variable Scope
// 1. Global Scope
/*
- Variables declared outside any function or block.
- `var` attaches to the `window` object in browsers; `let` and `const` do not.
 */
var globalVar = "I'm Global";
let globalLet = "I'm Global";
const globalConst = "I'm Global";

// 2. Function Scope
/*
- Variables declared inside a function are only accessible within that function.
- Applies to `var`, `let`, and `const`.
 */
function test(){
    var localVar = "I am local";
    let localLet = "I am local";
    const localConst = "I am local";
}
// console.log(localVar); // ReferenceError: localVar is not defined

// Block Scope
/*
- Variables declared with `let` or `const` inside a block (e.g., `{}`) are only accessible within that block.
- `var` is not block-scoped and leaks outside the block.
 */
{
    let blockLet = "I am block scoped";
    const blockConst = "I am block scoped";
}
// console.log(blockLet); // ReferenceError: blockLet is not defined


// Mutating const Objects/Arrays:

const obj = { a: 1, b: 2 };
obj.c = 3; // OK: Adding a new property
obj.a = 4; // OK: Modifying an existing property
console.log(obj); // { a: 4, b: 2, c: 3 }