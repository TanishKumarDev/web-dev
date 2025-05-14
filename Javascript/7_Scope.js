// Understanding JavaScript Scope and Variable Declaration

// 1. Global Scope Example:
var globalVar = "I am global";  // var attaches to window object
let globalLet = "I am block-scoped";  // let is not attached to window object
const globalConst = "I am block-scoped";  // const is not attached to window object

console.log(globalVar);  // Output: I am global (accessible globally)
console.log(globalLet);  // Output: I am block-scoped (accessible globally)
console.log(globalConst);  // Output: I am block-scoped (accessible globally)
console.log(window.globalVar);  // Output: I am global (var is attached to window object)
console.log(window.globalLet);  // Output: undefined (let is not attached to window object)

// 2. Block Scope Example (let and const are block-scoped):
if (true) {
    var x = 10;  // var is function-scoped, not block-scoped
    let y = 20;  // let is block-scoped
    const z = 30;  // const is block-scoped
}

console.log(x);  // Output: 10 (var is function-scoped, accessible outside the block)
console.log(y);  // Error: y is not defined (let is block-scoped)
console.log(z);  // Error: z is not defined (const is block-scoped)

// 3. Function Scope Example:
function example() {
    var a = 10;  // var is function-scoped
    let b = 20;  // let is function-scoped
    const c = 30;  // const is function-scoped
    console.log(a, b, c);  // Output: 10 20 30
}

example();
console.log(a);  // Error: a is not defined
console.log(b);  // Error: b is not defined
console.log(c);  // Error: c is not defined

// 4. Modular Scope (Example for modules; ES6 feature)
console.log("Modular Scope example is demonstrated in a separate file with 'require' method");

// 5. Lexical Scope (Closure Example):
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);  // Accessing the outer function's variable
    }
    inner();
}

outer();  // Output: "I'm in the outer scope!" (inner function accesses outer's variable)

// 6. Global and Local Variables (Accessing Variables Inside/Outside a Block):
let globalLetVar = "This is a global variable";
{
    let localLetVar = "This is a local variable";
    console.log(globalLetVar);  // Output: This is a global variable
    console.log(localLetVar);  // Output: This is a local variable
}

console.log(globalLetVar);  // Output: This is a global variable
console.log(localLetVar);  // Error: localLetVar is not defined (block-scoped)

// 7. Global and Local Variables with Same Name:
let globalVarName = "This is a global variable";

function testFunction() {
    let globalVarName = "This is a local variable";
    console.log(globalVarName);  // Output: This is a local variable
}

testFunction();
console.log(globalVarName);  // Output: This is a global variable

// 8. Implicit Global Variables (Without let or const):
function implicitGlobal() {
    implicitGlobalVar = "This is a global variable without declaration";  // This creates a global variable implicitly
}

implicitGlobal();
console.log(implicitGlobalVar);  // Output: This is a global variable without declaration

// 9. Window Object for Global Scope Variables:
var windowVar = "I am a global variable attached to window";
function checkWindow() {
    var windowVar = "I am a local variable";
    console.log(window.windowVar);  // Output: I am a global variable attached to window
}

checkWindow();

// 10. Accessing Global Variable Inside a Function:
var globalVarInFunc = "I am a global variable";

function showGlobalVar() {
    var globalVarInFunc = "I am a local variable";
    console.log(globalVarInFunc);  // Output: I am a local variable (local to function)
    console.log(window.globalVarInFunc);  // Output: I am a global variable (accessing from window object)
}

showGlobalVar();

// Short Summary:
// - **Global Scope**: Accessible everywhere in your code (var is attached to window).
// - **Block Scope**: Only accessible within the block (let, const).
// - **Function Scope**: Variables are accessible only within the function.
// - **Lexical Scope (Closure)**: Inner function can access outer function's variables even after the outer function has finished.
// - **Avoid Implicit Globals**: Always use let, const, or var to declare variables explicitly to avoid accidental global variables.

// ⚠️ Best Practice: Always use let and const to avoid accidental global variables and issues related to scope.
