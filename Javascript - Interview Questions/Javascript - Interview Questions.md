## JS Interview Q/A

---
01. Data Types

* What are Data Types
* Difference between `null` and `undefined`
* Type Coercion and Equality (`==` vs `===`)

---
02. Variables and Scope

* `let`, `const`, and `var`
* Variable Scope
* Global vs Local Variables
* Temporal Dead Zone (TDZ)
* Variable Shadowing

---
03. Functions

* Closure
* Different Ways to Define Functions
* Higher-Order Functions
* Function Hoisting
* Pure Functions
* Function Declaration vs Expression
* IIFE (Immediately Invoked Function Expression)
* Arrow Functions

---
04. Objects

* Creating Objects
* Adding and Removing Properties
* Checking if Property Exists
* `this` Keyword in Objects

---
05. Arrays

* Looping through Arrays
* `for...in` vs `for...of`
* Adding and Removing Elements
* `map()` Function
* `filter()` vs `find()`
* `some()` vs `every()`

---
06. DOM Manipulation

* Selecting Elements
* Creating and Appending Elements
* `innerHTML` vs `textContent`
* Removing Elements

---
07. ES6 Features

* Destructuring
* Template Literals
* Spread Operator
* Default Parameters
* Rest Parameters

---
08. Asynchronous JavaScript

* Callbacks and Callback Hell
* Promise Basics
* Chaining Promises
* `Promise.all()`
* `Promise.finally()`
* `async` / `await`
* Error Handling in `async` / `await`

---
09. Modules

* Default Export vs Named Export

---
10. JSON and Web Storage

* Converting Object to JSON
* Converting JSON to Object
* `localStorage` Basics
* `sessionStorage` Basics
* Deleting and Clearing Storage

---

### Question 1: What are the data types in JavaScript?

**Concept Explanation**:

JavaScript is a dynamically typed language, meaning variables can hold values of any type without explicit type declaration. JavaScript has two main categories of data types: **Primitive** and **Non-Primitive (Reference)**.

1. **Primitive Data Types** (immutable, stored by value):
   - **Undefined**: A variable that has been declared but not assigned a value.
   - **Null**: Represents the intentional absence of any value.
   - **Boolean**: Represents `true` or `false`.
   - **Number**: Represents integers and floating-point numbers (e.g., `42`, `3.14`). Includes special values like `Infinity`, `-Infinity`, and `NaN`.
   - **BigInt**: For integers larger than the Number type’s safe integer limit (`2^53 - 1`).
   - **String**: Represents a sequence of characters (e.g., `"hello"`).
   - **Symbol**: A unique and immutable value, often used as object property keys (introduced in ES6).

2. **Non-Primitive (Reference) Data Types** (mutable, stored by reference):
   - **Object**: A collection of key-value pairs. Includes:
     - Regular objects (e.g., `{ name: "John" }`)
     - Arrays (e.g., `[1, 2, 3]`)
     - Functions
     - Special objects like `Date`, `RegExp`, etc.

**Real-World Use Case**:
- **Primitive Types**: Used for simple data like user inputs (strings), flags (boolean), or counters (number).
- **Objects/Arrays**: Used for structured data, like storing user profiles or lists of products in an e-commerce app.
- **Symbols**: Used for unique keys in objects to avoid property name collisions in libraries or frameworks.

**Code Example** 
```javascript
// Primitive Data Types
let undefinedVar; // Undefined
let nullVar = null; // Null
let isActive = true; // Boolean
let age = 30; // Number
let bigNumber = BigInt(9007199254740992); // BigInt
let name = "Alice"; // String
let uniqueId = Symbol("id"); // Symbol

// Non-Primitive Data Type
let person = { name: "Bob", age: 25 }; // Object
let numbers = [1, 2, 3]; // Array
let greet = function() { console.log("Hello!"); }; // Function

// Logging types to verify
console.log("undefinedVar:", typeof undefinedVar); // undefined
console.log("nullVar:", typeof nullVar); // object (historical quirk)
console.log("isActive:", typeof isActive); // boolean
console.log("age:", typeof age); // number
console.log("bigNumber:", typeof bigNumber); // bigint
console.log("name:", typeof name); // string
console.log("uniqueId:", typeof uniqueId); // symbol
console.log("person:", typeof person); // object
console.log("numbers:", typeof numbers); // object
console.log("greet:", typeof greet); // function
```

**Dry Run**:
1. Declare variables for each data type.
2. Use `typeof` operator to check the type of each variable.
3. Output:
   ```
   undefinedVar: undefined
   nullVar: object
   isActive: boolean
   age: number
   bigNumber: bigint
   name: string
   uniqueId: symbol
   person: object
   numbers: object
   greet: function
   ```

**Edge Cases**:
- **Null vs. Object**: `typeof null` returns `"object"` due to a historical bug in JavaScript, but it’s a primitive type.
- **NaN**: `typeof NaN` is `"number"`, but `isNaN(NaN)` returns `true`.
- **BigInt**: Cannot mix with regular numbers in arithmetic without explicit conversion (e.g., `Number(bigNumber)`).

**Counter Cases**:
- Misunderstanding `null` as an object due to `typeof null`.
- Assuming arrays or functions are distinct types (they are objects).
- Forgetting `BigInt` for large integers, leading to precision issues with `Number`.

**Interview Tips**:
- Emphasize the difference between primitive (immutable) and reference types (mutable).
- Mention `typeof` quirks (e.g., `null` and arrays).
- Highlight `BigInt` for handling large integers in financial or cryptographic applications.

---
### Question 2: What is the difference between == and ===?

**Concept Explanation**:

In JavaScript, `==` and `===` are comparison operators used to check equality between values, but they differ significantly in how they perform the comparison.

1. **== (Loose Equality)**:
   - Compares values for equality **after type coercion(automatic conversion of a value from one data type to another)**.
   - JavaScript converts the operands to a common type (e.g., number, string) before comparing.
   - Can lead to unexpected results due to automatic type conversion.

2. **=== (Strict Equality)**:
   - Compares both **value and type** without type coercion.
   - Returns `true` only if both operands are of the same type and have the same value.
   - Preferred in modern JavaScript for predictable and safer comparisons.

**Key Differences**:
| Feature | `==` (Loose Equality) | `===` (Strict Equality) |
|---------|-----------------------|-------------------------|
| Type Coercion | Performs type coercion | No type coercion |
| Compares | Value only | Value and type |
| Performance | Slightly slower (due to coercion) | Faster (no coercion) |
| Use Case | Rarely used, legacy code | Standard for reliable comparisons |

**Real-World Use Case**:
- **Loose Equality (`==`)**: Rarely used, but might appear in legacy code or when comparing values from user inputs where type is uncertain (e.g., form input `"5"` vs. number `5`).
- **Strict Equality (`===`)**: Used in modern applications (e.g., validating API responses, checking user roles, or comparing IDs) to avoid bugs from type coercion.

**Code Example** 
```javascript
// Test cases
let num = 5;
let str = "5";
let nullVal = null;
let undefinedVal = undefined;
let boolVal = true;
let obj1 = { value: 5 };
let obj2 = { value: 5 };

// Using == (Loose Equality)
console.log("Loose Equality (==):");
console.log("num == str:", num == str); // true (type coercion: "5" -> 5)
console.log("null == undefined:", null == undefined); // true (special case)
console.log("boolVal == 1:", boolVal == 1); // true (true -> 1)
console.log("obj1 == obj2:", obj1 == obj2); // false (different references)

// Using === (Strict Equality)
console.log("\nStrict Equality (===):");
console.log("num === str:", num === str); // false (different types)
console.log("null === undefined:", null === undefined); // false (different types)
console.log("boolVal === 1:", boolVal === 1); // false (different types)
console.log("obj1 === obj2:", obj1 === obj2); // false (different references)
```

**Dry Run**:
1. Declare variables: `num = 5` (number), `str = "5"` (string), `nullVal = null`, `undefinedVal = undefined`, `boolVal = true`, `obj1` and `obj2` (objects with same content).
2. **Loose Equality (`==`)**:
   - `num == str`: `"5"` is coerced to `5`, so `5 == 5` → `true`.
   - `null == undefined`: Special case in JavaScript, returns `true`.
   - `boolVal == 1`: `true` is coerced to `1`, so `1 == 1` → `true`.
   - `obj1 == obj2`: No coercion for objects; different references → `false`.
3. **Strict Equality (`===`)**:
   - `num === str`: Different types (number vs. string) → `false`.
   - `null === undefined`: Different types → `false`.
   - `boolVal === 1`: Different types (boolean vs. number) → `false`.
   - `obj1 === obj2`: Different references → `false`.
4. Output:
   ```
   Loose Equality (==):
   num == str: true
   null == undefined: true
   boolVal == 1: true
   obj1 == obj2: false

   Strict Equality (===):
   num === str: false
   null === undefined: false
   boolVal === 1: false
   obj1 === obj2: false
   ```

**Edge Cases**:
- **Empty String and Zero**: `"" == 0` is `true` because `""` coerces to `0`, but `"" === 0` is `false`.
- **False and Zero**: `false == 0` is `true` (both coerce to `0`), but `false === 0` is `false`.
- **Objects**: Comparing objects with `==` or `===` checks reference, not content, so `{a:1} == {a:1}` is `false`.

**Counter Cases**:
- Using `==` in form validation might allow `"true"` to equal `true`, causing bugs.
- Assuming `null == undefined` behaves the same as `null === undefined`.
- Misusing `==` when comparing user inputs without sanitizing types.

**Interview Tips**:
- Always recommend `===` unless there’s a specific need for type coercion.
- Explain type coercion rules (e.g., `ToNumber`, `ToString`) briefly to show deep understanding.
- Mention that `!=` (loose inequality) and `!==` (strict inequality) follow similar rules.

---

### Question 3: What is the difference between null and undefined?

**Concept Explanation**:

In JavaScript, `null` and `undefined` both represent the absence of a value, but they have distinct meanings and use cases.

1. **undefined**:
   - A variable that has been declared but not assigned a value is `undefined`.
   - It’s the default value of uninitialized variables, function arguments that aren’t passed, or object properties that don’t exist.
   - Indicates an **unintentional** absence of value, often set by JavaScript itself.
   - Type: `typeof undefined` returns `"undefined"`.

2. **null**:
   - Represents the **intentional** absence of any object value.
   - It’s explicitly assigned by the developer to indicate that a variable should have no value or points to no object.
   - Type: `typeof null` returns `"object"` (a historical quirk in JavaScript, though `null` is a primitive type).

**Key Differences**:
| Feature | `undefined` | `null` |
|---------|-------------|--------|
| Meaning | Variable declared but not assigned | Intentional absence of value |
| Type | `undefined` | `object` (quirk) |
| Default | Set by JavaScript for uninitialized variables | Must be explicitly set by developer |
| Comparison | `null == undefined` (true, loose equality) | `null === undefined` (false, strict equality) |
| Use Case | Missing arguments, uninitialized variables | Resetting variables, clearing object references |

**Real-World Use Case**:
- **undefined**: Common when a function doesn’t return a value (implicitly returns `undefined`) or when accessing a non-existent object property (e.g., `user.address` when `address` isn’t defined).
- **null**: Used to clear a variable (e.g., resetting a form field’s value) or indicate no object (e.g., `user = null` after logging out).

**Code Example**
```javascript
// q3_null_vs_undefined.js
// Demonstrates the difference between null and undefined

// Undefined cases
let uninitializedVar; // Declared but not assigned
function noReturn() {} // No return statement
function missingParam(a, b) {
    console.log("b is:", b); // b is undefined if not passed
}
let obj = { name: "Alice" }; // No age property

// Null case
let user = null; // Explicitly set to no value

// Logging values and types
console.log("uninitializedVar:", uninitializedVar, "Type:", typeof uninitializedVar); // undefined
console.log("noReturn():", noReturn(), "Type:", typeof noReturn()); // undefined
console.log("obj.age:", obj.age, "Type:", typeof obj.age); // undefined
missingParam(1); // b is: undefined
console.log("user:", user, "Type:", typeof user); // null, object

// Equality comparisons
console.log("null == undefined:", null == undefined); // true (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)

// Practical example: Resetting a variable
let formData = { value: "some data" };
formData = null; // Clear form data after submission
console.log("formData after reset:", formData); // null
```

**Dry Run**:
1. **Undefined Cases**:
   - `uninitializedVar`: Declared but not assigned → `undefined`.
   - `noReturn()`: Function without return statement → `undefined`.
   - `obj.age`: Accessing non-existent property → `undefined`.
   - `missingParam(1)`: Second parameter `b` not passed → `undefined`.
2. **Null Case**:
   - `user`: Explicitly set to `null` → `null`.
3. **Type Checks**:
   - `typeof uninitializedVar` → `"undefined"`.
   - `typeof noReturn()` → `"undefined"`.
   - `typeof obj.age` → `"undefined"`.
   - `typeof user` → `"object"` (quirk).
4. **Equality**:
   - `null == undefined`: Loose equality coerces to `true`.
   - `null === undefined`: Different types → `false`.
5. **Practical Example**:
   - `formData` is reset to `null` to indicate no data.
6. Output:
   ```
   uninitializedVar: undefined Type: undefined
   noReturn(): undefined Type: undefined
   obj.age: undefined Type: undefined
   b is: undefined
   user: null Type: object
   null == undefined: true
   null === undefined: false
   formData after reset: null
   ```

**Edge Cases**:
- **Typeof Quirk**: `typeof null` returning `"object"` can confuse developers expecting a distinct type.
- **Loose Equality**: `null == undefined` is `true`, which can lead to bugs if not handled carefully.
- **JSON Serialization**: `JSON.stringify({ x: undefined })` omits `undefined` properties, but `JSON.stringify({ x: null })` includes `null`.

**Counter Cases**:
- Assuming `null` and `undefined` are interchangeable (e.g., using `==` instead of `===` can cause bugs).
- Not explicitly setting `null` to clear a variable, leading to `undefined` when checking uninitialized variables.
- Misinterpreting `typeof null` as meaning `null` is an object.

**Interview Tips**:
- Emphasize the intentional (`null`) vs. unintentional (`undefined`) distinction.
- Mention the `typeof null` quirk and recommend strict equality (`===`) for comparisons.
- Highlight real-world scenarios like clearing object references (`null`) or handling missing data (`undefined`).

---

### Question 4: Explain the concept of hoisting in JavaScript.

**Concept Explanation**:

Hoisting is a JavaScript behavior where **variable and function declarations** are moved to the top of their containing scope (global or function scope) during the compilation phase, before the code is executed. However, only the **declarations** are hoisted, not the initializations or assignments. This allows variables and functions to be used before they are declared in the code.

**Key Points**:
1. **Variable Hoisting**:
   - Variables declared with `var` are hoisted and initialized with `undefined`.
   - Variables declared with `let` and `const` are also hoisted, but they are not initialized, leading to a **Temporal Dead Zone** (TDZ) until their declaration is reached.
2. **Function Hoisting**:
   - **Function declarations** are fully hoisted, including their body, so they can be called before their declaration.
   - **Function expressions** (including arrow functions) are not fully hoisted; only the variable declaration (if using `var`) is hoisted, not the function assignment.
3. **Scope**: Hoisting occurs within the current scope (global or function). Block-scoped variables (`let`, `const`) are hoisted to the top of their block but remain in the TDZ until declared.
4. **Best Practice**: Avoid relying on hoisting to prevent confusion and bugs. Declare variables and functions before using them.

**Real-World Use Case**:
- **Function Hoisting**: Useful in utility functions where you call a helper function before its declaration in a large codebase.
- **Variable Hoisting**: Can cause issues if developers assume a variable is defined when it’s actually `undefined` due to hoisting, leading to bugs in loops or conditionals.
- **TDZ with `let/const`**: Prevents accessing variables before initialization, improving code safety in modern JavaScript.

**Code Example**
```javascript
// q4_hoisting.js
// Demonstrates hoisting behavior in JavaScript

// Variable Hoisting with var
console.log("Before var declaration: x =", x); // undefined (hoisted, initialized as undefined)
var x = 10;
console.log("After var declaration: x =", x); // 10

// Variable Hoisting with let (Temporal Dead Zone)
// console.log("Before let declaration: y =", y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log("After let declaration: y =", y); // 20

// Function Declaration Hoisting
sayHello(); // Works: "Hello, World!" (fully hoisted)
function sayHello() {
    console.log("Hello, World!");
}

// Function Expression Hoisting
// console.log(greet); // undefined (variable hoisted, but not assigned)
var greet = function() {
    console.log("Greetings!");
};
greet(); // Works: "Greetings!"

// Arrow Function (similar to function expression)
// console.log(arrowFunc); // undefined (variable hoisted, but not assigned)
var arrowFunc = () => console.log("Arrow Function!");
arrowFunc(); // Works: "Arrow Function!"

// Example with scope
function testHoisting() {
    console.log("Inside function: a =", a); // undefined (hoisted within function scope)
    var a = 5;
    console.log("Inside function after declaration: a =", a); // 5
}
testHoisting();
```

**Dry Run**:
1. **Variable Hoisting (`var`)**:
   - `x` is hoisted to the top of the global scope and initialized as `undefined`.
   - `console.log(x)` outputs `undefined`.
   - `x = 10` assigns the value, so the next `console.log(x)` outputs `10`.
2. **Variable Hoisting (`let`)**:
   - `y` is hoisted to the top of the global scope but remains in the TDZ.
   - Accessing `y` before declaration would throw a `ReferenceError`.
   - After `let y = 20`, `y` is initialized, and `console.log(y)` outputs `20`.
3. **Function Declaration**:
   - `sayHello` is fully hoisted, including its body, so `sayHello()` works before its declaration and outputs `"Hello, World!"`.
4. **Function Expression**:
   - `greet` (with `var`) is hoisted as `undefined`, so accessing it before assignment outputs `undefined`.
   - After assignment, `greet()` outputs `"Greetings!"`.
5. **Arrow Function**:
   - Similar to function expression, `arrowFunc` is hoisted as `undefined` (with `var`), and works after assignment.
6. **Function Scope**:
   - Inside `testHoisting`, `a` is hoisted to the top of the function scope as `undefined`.
   - First `console.log(a)` outputs `undefined`, then `a = 5` assigns the value, and the next `console.log(a)` outputs `5`.
7. Output:
   ```
   Before var declaration: x = undefined
   After var declaration: x = 10
   After let declaration: y = 20
   Hello, World!
   Greetings!
   Arrow Function!
   Inside function: a = undefined
   Inside function after declaration: a = 5
   ```

**Edge Cases**:
- **TDZ with `let/const`**: Accessing `let` or `const` variables before their declaration causes a `ReferenceError`.
- **Function vs. Variable Hoisting**: If a variable and function have the same name, the function declaration is hoisted first, but a subsequent `var` declaration can overwrite it with `undefined`.
- **Block Scope**: `let` and `const` in a block (e.g., inside `{}`) are hoisted to the block’s top, not the function or global scope.

**Counter Cases**:
- Assuming `let` or `const` variables are accessible before declaration (leads to TDZ errors).
- Relying on hoisting for function expressions, which only hoists the variable, not the function.
- Naming conflicts between hoisted variables and functions, causing unexpected `undefined` values.

**Interview Tips**:
- Explain hoisting as a compilation-phase behavior, not runtime.
- Highlight the difference between `var` (initialized as `undefined`) and `let/const` (TDZ).
- Emphasize avoiding hoisting-related bugs by declaring variables/functions at the top of their scope.
- Mention that modern JavaScript (ES6+) encourages `let` and `const` to avoid hoisting confusion.

---
### Question 5: What is the difference between let, const, and var?

**Concept Explanation**:

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they differ in **scope**, **hoisting**, **reassignment**, and **initialization** behavior. Understanding these differences is crucial for writing predictable and maintainable code.

1. **`var`**:
   - **Scope**: Function-scoped or global-scoped (if declared outside a function).
   - **Hoisting**: Hoisted to the top of its scope and initialized with `undefined`, allowing use before declaration (though it’s bad practice).
   - **Reassignment**: Can be reassigned and redeclared in the same scope without errors.
   - **Initialization**: Optional; defaults to `undefined` if not initialized.
   - **Issues**: Can lead to bugs due to hoisting and lack of block scoping (e.g., in loops).

2. **`let`**:
   - **Scope**: Block-scoped (limited to the block `{}` where it’s defined, e.g., inside loops or conditionals).
   - **Hoisting**: Hoisted to the top of its block but not initialized, leading to a **Temporal Dead Zone (TDZ)** until the declaration is reached.
   - **Reassignment**: Can be reassigned but cannot be redeclared in the same scope.
   - **Initialization**: Optional; uninitialized `let` variables are `undefined` after the TDZ.
   - **Use Case**: Preferred for variables that need to change, like loop counters or temporary values.

3. **`const`**:
   - **Scope**: Block-scoped, like `let`.
   - **Hoisting**: Hoisted to the top of its block but not initialized (TDZ applies).
   - **Reassignment**: Cannot be reassigned or redeclared after initialization. However, for objects and arrays, their **contents** can be modified (e.g., adding properties to an object).
   - **Initialization**: Mandatory; a `const` variable must be initialized at declaration.
   - **Use Case**: Used for constants or values that shouldn’t be reassigned, like configuration settings or fixed references.

**Key Differences**:
| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function/global | Block | Block |
| Hoisting | Hoisted, initialized as `undefined` | Hoisted, TDZ | Hoisted, TDZ |
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Initialization | Optional | Optional | Mandatory |
| Common Issues | Hoisting bugs, no block scope | TDZ errors | Forgetting initialization |

**Real-World Use Case**:
- **`var`**: Rarely used in modern JavaScript due to its quirks but might appear in legacy code or simple scripts.
- **`let`**: Ideal for loop counters, temporary variables, or values that change during execution (e.g., tracking user input in a form).
- **`const`**: Used for constants (e.g., API endpoints, configuration objects) or to ensure references (e.g., DOM elements) aren’t reassigned, improving code clarity.

**Code Example**
```javascript
// q5_var_let_const.js
// Demonstrates differences between var, let, and const

// var: Function scope, hoisting
console.log("Before var declaration: x =", x); // undefined (hoisted)
var x = 10;
console.log("After var declaration: x =", x); // 10
var x = 20; // Redeclaration allowed
console.log("After redeclaration: x =", x); // 20

// let: Block scope, TDZ
// console.log("Before let declaration: y =", y); // ReferenceError: Cannot access 'y' before initialization
let y = 30;
console.log("After let declaration: y =", y); // 30
y = 40; // Reassignment allowed
console.log("After reassignment: y =", y); // 40
// let y = 50; // SyntaxError: Identifier 'y' has already been declared

// const: Block scope, TDZ, no reassignment
// console.log("Before const declaration: z =", z); // ReferenceError: Cannot access 'z' before initialization
const z = 100;
console.log("After const declaration: z =", z); // 100
// z = 200; // TypeError: Assignment to constant variable
// const z = 300; // SyntaxError: Identifier 'z' has already been declared

// Block scope example
function testScope() {
    if (true) {
        var a = "var inside block"; // Function-scoped
        let b = "let inside block"; // Block-scoped
        const c = "const inside block"; // Block-scoped
        console.log("Inside block:", a, b, c);
    }
    console.log("Outside block, var:", a); // Accessible
    // console.log("Outside block, let:", b); // ReferenceError: b is not defined
    // console.log("Outside block, const:", c); // ReferenceError: c is not defined
}
testScope();

// const with objects (mutable contents)
const person = { name: "Alice" };
person.name = "Bob"; // Allowed: modifying object contents
console.log("Modified const object:", person); // { name: "Bob" }
// person = { name: "Charlie" }; // TypeError: Assignment to constant variable
```

**Dry Run**:
1. **var**:
   - `x` is hoisted and initialized as `undefined`, so `console.log(x)` outputs `undefined`.
   - `x = 10` assigns the value, so `console.log(x)` outputs `10`.
   - Redeclaration `var x = 20` is allowed, so `console.log(x)` outputs `20`.
2. **let**:
   - `y` is hoisted but in TDZ, so accessing it before declaration would throw a `ReferenceError`.
   - `let y = 30` initializes `y`, so `console.log(y)` outputs `30`.
   - Reassignment `y = 40` is allowed, so `console.log(y)` outputs `40`.
   - Redeclaration `let y = 50` would throw a `SyntaxError`.
3. **const**:
   - `z` is hoisted but in TDZ, so accessing it before declaration would throw a `ReferenceError`.
   - `const z = 100` initializes `z`, so `console.log(z)` outputs `100`.
   - Reassignment `z = 200` or redeclaration `const z = 300` would throw errors.
4. **Block Scope**:
   - Inside `if` block: `a` (var), `b` (let), `c` (const) are accessible and output their values.
   - Outside block: `a` is accessible (function-scoped), but `b` and `c` are not (block-scoped), causing `ReferenceError` if accessed.
5. **const with Objects**:
   - `person.name = "Bob"` modifies the object’s property (allowed).
   - Reassigning `person = { name: "Charlie" }` would throw a `TypeError`.
6. Output:
   ```
   Before var declaration: x = undefined
   After var declaration: x = 10
   After redeclaration: x = 20
   After let declaration: y = 30
   After reassignment: y = 40
   After const declaration: z = 100
   Inside block: var inside block let inside block const inside block
   Outside block, var: var inside block
   Modified const object: { name: 'Bob' }
   ```

**Edge Cases**:
- **TDZ Errors**: Accessing `let` or `const` before declaration causes a `ReferenceError`.
- **const Mutability**: Developers may assume `const` objects are fully immutable, but only the reference is constant, not the contents.
- **var in Loops**: Using `var` in loops can lead to unexpected behavior due to function scope (e.g., all loop iterations share the same variable).

**Counter Cases**:
- Using `var` in modern code, leading to scoping issues in loops or blocks.
- Forgetting to initialize a `const` variable, causing a `SyntaxError`.
- Assuming `const` prevents object property changes, leading to bugs in state management.
- Redeclaring `let` or `const` in the same scope, causing `SyntaxError`.

**Interview Tips**:
- Emphasize block scoping (`let`, `const`) as a modern standard over `var`.
- Explain the TDZ for `let` and `const` to show understanding of hoisting nuances.
- Clarify that `const` prevents reassignment but allows mutation of object/array contents.
- Recommend `const` by default for variables that won’t be reassigned, `let` for those that will, and avoiding `var` in modern code.

---