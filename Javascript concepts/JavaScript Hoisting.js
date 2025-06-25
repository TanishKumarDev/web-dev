// =======================
// 1. HOISTING DEFINITION
// =======================
/*
Hoisting is JavaScript's default behavior of moving declarations to the top
of the current scope (script or function). 
Only declarations are hoisted, not initializations.
*/

// -----------------------
// Example: var is hoisted
// -----------------------
console.log(a); // undefined (hoisted declaration, not initialization)
var a = 10;

// function is hoisted
sayHello(); // works, because function declaration is hoisted

function sayHello(){
    console.log("Hello from hoisted function");
}

// =======================
// 2. LET AND CONST
// =======================
/*
let and const were introduced in ES6.
They are block-scoped and not initialized until the declaration is evaluated.
*/

// ==============================================
// 🔍 What is the TDZ (Temporal Dead Zone)?
// ==============================================
/*
The Temporal Dead Zone (TDZ) is the period between when a block is entered and when a variable declared with let or const is initialized.

During this time:
    The variable exists in memory.
    BUT it cannot be accessed.
    Trying to use it will throw a ReferenceError.


    📦 Think of it like this:
Imagine walking into a room (a block scope), and you know someone is supposed to be in the room (let or const variable). But until they actually arrive (the line where the variable is declared), if you try to talk to them, you get slapped with a ReferenceError!


*/

let letX = 10;
console.log("letX: ", letX); // 10


const constY = 10;
console.log("constY: ", constY); // 10

// const must be initialized
// const z; // ❌ Error: Missing initializer in const declaration

// =======================
// 3. TEMPORAL DEAD ZONE (TDZ)
// =======================
/*
The TDZ is the time between entering the block and the actual declaration
being processed. Accessing a let/const variable in this zone throws a ReferenceError.
*/

// -----------------------
// TDZ example with let
// -----------------------

try{
    console.log(tdzVar);
} catch(e){
    console.log("Accessing tdzVar before declaration causes:", e.message);
}

let tdzVar = " Now its safe to access tdzVar";
console.log(tdzVar);


// -----------------------
// TDZ example with const
// -----------------------

try {
  console.log(tdzConst); // ❌ ReferenceError
} catch (e) {
  console.log("Accessing tdzConst before declaration causes:", e.message);
}

const tdzConst = "Now it's safe to access tdzConst";
console.log(tdzConst); // ✅ Works fine

// =======================
// Summary
// =======================
/*
- var is function-scoped and hoisted (initialized to undefined).
- let and const are block-scoped and hoisted BUT uninitialized, causing a TDZ.
- TDZ prevents usage of let/const before their declaration. 
-- You can't use them before the line they are declared.
- const must be initialized during declaration.
- That unsafe zone is the TDZ.


💡 Key Rule:
TDZ only applies to let and const.
var does NOT have a TDZ — it's hoisted and initialized to undefined.


*/

