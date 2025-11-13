// var
/**
 Function scoped

Hoisted with undefined

Redeclaration allowed

Can be updated (reassigned)
 */
var x = 10;
var x = 20;   // allowed
x = 30;       // allowed


// Hoisting behavior:
console.log(a); // undefined
var a = 50;


// let
/*
Block scoped ({})

Hoisted, but stays in Temporal Dead Zone

Redeclaration NOT allowed

Update allowed
*/
let y = 10;
// let y = 20;   // error (redeclaration not allowed)
y = 30;          // allowed

// TDZ behavior:
// console.log(b); // ReferenceError
// let b = 100;

// const
/*
Block scoped

Hoisted (TDZ same as let)

No redeclaration

No reassignment

Must be initialized at declaration
 */

const z = 10;
// z = 20;  // error (cannot reassign)

// const object ke reference ko lock karta hai,
// object ke content ko nahi.

const user = { name: "Aman" };
user.name = "Rohan"; // allowed

console.log(user.name);

// | Feature       | var             | let               | const                |
// | ------------- | --------------- | ----------------- | -------------------- |
// | Scope         | function        | block             | block                |
// | Hoisting      | yes (undefined) | yes (TDZ)         | yes (TDZ)            |
// | Redeclaration | allowed         | not allowed       | not allowed          |
// | Reassignment  | allowed         | allowed           | not allowed          |
// | Default use   | Avoid           | Use for variables | Use for fixed values |

/*
var is function-scoped and hoisted with undefined.
let and const are block-scoped and hoisted to the TDZ.
let can be reassigned, const cannot.
*/