// const varible = value;
/*
const is used to declare a variable and assign a value to it.
After initialization, the value of a const variable cannot be reassigned.
*/

// Key Features of const:

// 1. Block Scope - Variables declared with const are block-scoped, which means they are accessible only within the block, statement, or expression in which they are defined.
if (true) {
    const x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // ReferenceError: x is not defined

// 2. No Reassignment - Variables declared with const cannot be reassigned after their initial declaration. Attempting to do so results in a TypeError.

// const y = 20;
// y = 30; // TypeError: Assignment to constant variable

// 3. Must Be Initialized  - Unlike let, a const variable must be initialized at the time of declaration. Declaring a const variable without assigning a value will throw a SyntaxError.

// const z; // SyntaxError: Missing initializer in const declaration

// The variable z is declared with const, but it is missing an initial value.
// This causes a SyntaxError because const requires an initializer (a value) at the time of declaration.

// 4. Immutable Binding, Not Value Change - Once a const variable is initialized, its value cannot be changed. Attempting to change the value of a const variable results in a TypeError. Const makes the variable binding immutable, but if the value is an object or array, you can still modify its properties or contents.

const obj = { a: 1 };
obj.a = 2; // No error - modifying an existing property
obj.b = 3; // No error - adding a new property
console.log(obj); // { a: 2 }

// 5. No Redeclaration - Variables declared with const cannot be redeclared within the same scope, similar to let.

const x = 10;
// const x = 20; // SyntaxError: Identifier 'x' has already been declared

// 6. Suitable for Constants
const PI = 3.14159;
const MAX_USERS = 100;
PI=10

// 7. Safer with Functions - Using const with functions ensures that the function reference cannot be reassigned, though the function itself can still be executed normally.
const greet = () => console.log("Hello, world!");
greet(); 

greet = () => console.log("Hi!");
greet();

// greet is declared with const, so it can't be reassigned, causing a TypeError.
// The first call logs "Hello, world!", but the reassignment won't happen due to the error.

// 8. Integration with Modern JavaScript - const aligns with modern JavaScript practices, supporting features like destructuring and modules for cleaner, maintainable code.

const { name, age } = { name:"Meenal", age: 28 };
console.log(name, age);
