// Variables - A variable is like a container that holds data

// 1. var Keyword
var n = 5;  // Declare a variable using 'var'
console.log(n);  // Output: 5

var n = 10;  // Reassigning a new value is allowed with 'var'
console.log(n);  // Output: 10

// 2. let Keyword
let n2 = 10;  // Declare a variable using 'let'
n2 = 20;  // You can update the value of a variable declared with 'let'
console.log(n2);  // Output: 20

// let n = 15; // You cannot redeclare a variable using 'let' in the same scope

// 3. const Keyword
const n3 = 30;  // Declare a constant value using 'const'
console.log(n3);  // Output: 30

// You cannot reassign a new value to a variable declared with 'const'
// const n3 = 40;  // Error: Assignment to constant variable

// Data Types - Primitive data types represent single values and are immutable.
console.log("Primitive data types")

// 4. number
let n4 = 42;  // A number type
let pi = 3.14;  // A floating-point number
console.log(n4);  // Output: 42
console.log(pi);  // Output: 3.14

// 5. string 
let s1 = "Hi";  // A string type
console.log(s1);  // Output: Hi

// 6. Boolean
let bool = true;  // A boolean type, which can be either true or false
console.log(bool);  // Output: true

// 7. undefined
let notAssigned;  // Variable declared but not assigned a value
console.log(notAssigned);  // Output: undefined

// 8. null
let empty = null;  // null represents the intentional absence of any object value
console.log(empty);  // Output: null

// 9. symbol
let sym = Symbol('unique');  // Symbol is a unique identifier
console.log(sym);  // Output: Symbol(unique)

// 10. BigInt
let bigNumber = 123456789012345678901234567890n;  // BigInt type to handle large numbers
console.log(bigNumber);  // Output: 123456789012345678901234567890n

// Data Types - Non-primitive types are objects and can store collections of data or more complex entities

// 11. object
let obj = {
    name: "tanish",
    age: 25
};  // An object with properties
console.log(obj);  // Output: { name: 'tanish', age: 25 }

// 12. array
let a = ["FirstName", "MiddleName", "LastName"];  // An array with string elements
console.log(a);  // Output: ["FirstName", "MiddleName", "LastName"]

// 13. function
function fun() {
    console.log("check functions");  // Function declaration and logging message
}

fun();  // Calling the function, Output: "check functions"

// Short Summary:
// - **`var`**: Function-scoped, allows redeclaration and reassignment, not recommended.
// - **`let`**: Block-scoped, can be reassigned but not redeclared in the same scope.
// - **`const`**: Block-scoped, cannot be reassigned after initialization, but object properties can change.

// **Data Types**
// - **Primitive Types**: Immutable values like number, string, boolean, undefined, null, symbol, and BigInt.
// - **Non-Primitive Types**: Mutable data structures like objects, arrays, and functions.
