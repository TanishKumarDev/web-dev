// Key Features of let:

// 1. Block Scope - Variables declared with let are block-scoped, meaning they are only accessible within the block, statement, or expression where they are defined. This is a significant improvement over var, which has function scope and can lead to unexpected behaviour.
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // ReferenceError: x is not defined

// 2. No Hoisting Issues - While variables declared with let are hoisted, they are not initialized. This creates a temporal dead zone (TDZ) where accessing the variable before its declaration results in a ReferenceError, helping prevent unintended access.

// console.log(y); // ReferenceError: y is not defined
let y = 20;

// 3. No Redeclaration - A major benefit of let is that it does not allow redeclaration of the same variable in the same scope. This prevents accidental overwrites of variables, reducing bugs and improving code readability.

// let z = 30;
// let z = 40; // SyntaxError: Identifier 'z' has already been declared

// Attempting to redeclare z results in a SyntaxError, which helps catch potential issues early in development.

// 4. Suitable for Loops - Using let in loops is particularly beneficial because the variable declared with let is scoped to the loop block, and each iteration gets a new instance of the variable.

for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// 5. Cleaner Syntax - Because let has block-level scope, it prevents variable declarations from "leaking" outside of their intended scope. This makes code cleaner and easier to debug.

{
    let a = 5;
}
// console.log(a); // ReferenceError: a is not defined

// 6. Temporal Dead Zone (TDZ) - When using let, accessing a variable before its declaration results in a Temporal Dead Zone (TDZ), which prevents accidental access to uninitialized variables.

// console.log(b); // ReferenceError: b is not defined
let b = 10;

// This TDZ behavior ensures that variables are not accessed before they are properly initialized, promoting safer coding practices.

// 7. Safer Closure Behavior - With let, closures work as expected, providing a separate instance of the variable for each iteration in a loop. This avoids the common issue where the last value of a loop variable is captured by closures when using var.

const funcs = [];
for (let i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();

// Each function in the funcs array captures its own i due to let's block scoping, providing the expected behavior in closures.
// What is closure?

// A closure is a function that has access to variables from its parent scope, even after the parent function has returned.
// In other words, a closure is a combination of a function and the lexical environment in which it was created.

// 8. Integration with Modern  - The use of let aligns with modern JavaScript best practices, supporting compatibility with modules, destructuring, and ES6+ features.

let {name, age} = {name: "Tanish", age: 21};
console.log(name, age); // Output: "Tanish"

// This code uses destructuring assignment to extract the name and age properties from the object and assign them to corresponding variables.
// The console.log will output Pranjal 20, as the values of name and age are successfully assigned from the object.

// Interesting facts about let
// Block Scope: Unlike var, which is function-scoped, let is block-scoped, meaning it only exists within the block where it's defined (like inside loops or conditionals).
// No Redeclaration: You can't redeclare a variable with let in the same scope, which helps prevent accidental bugs in your code.
// Hoisted, But Not Initialized: let is hoisted to the top of its scope, but it isn't initialized until the line where it's declared, avoiding unexpected behavior.
// Temporal Dead Zone (TDZ): When using let, accessing the variable before its declaration results in a "temporal dead zone," leading to a reference error, which makes your code more predictable.
// Works Well with Loops: In loops, let ensures each iteration has its own value of the loop variable, unlike var, which can cause unexpected results when used inside closures.

// Drawbacks of using let
// Limited Browser Support in Older Versions: Older browsers, especially Internet Explorer, don't support let, requiring polyfills or alternative methods for compatibility.
// No Hoisting Initialization: While let is hoisted, it can't be accessed until the declaration line, which can sometimes lead to confusion or errors for developers used to var's behavior.
// Cannot Redeclare in the Same Scope: While this is generally an advantage, it can be a drawback in cases where you might want to redeclare a variable for clarity or for resetting a value in the same block.
// Can Cause TDZ Confusion: The Temporal Dead Zone (TDZ) behavior can be tricky, especially for new developers who may not fully understand why a let variable isn't accessible before its declaration.
// Increased Memory Usage: Since let creates block-scoped variables, it can sometimes lead to more memory usage in long-running loops or functions due to its strict scope handling.