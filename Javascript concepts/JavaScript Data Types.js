// ==========================================
// JavaScript Data Types (8 Types)
// ==========================================

// 1. String
let name = "John";
let carName1 = "Volvo XC60";   // double quotes
let carName2 = 'Volvo XC60';   // single quotes
let answer1 = "It's alright";  // mix quotes
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

console.log(typeof name); // "string"

// 2. Number (always 64-bit float in JS)
let age = 30;
let price = 99.99;
let x1 = 123e5;    // 12300000
let x2 = 123e-5;   // 0.00123

console.log(typeof price); // "number"

// 3. BigInt (for large integers, ES2020+)
let big = BigInt("123456789012345678901234567890");
console.log(typeof big); // "bigint"

// 4. Boolean (true / false)
let isAvailable = true;
let isLoggedIn = false;
console.log(typeof isAvailable); // "boolean"

// 5. Undefined (declared but not assigned)
let car;
console.log(car);          // undefined
console.log(typeof car);   // "undefined"

car = undefined;           // also undefined type
console.log(typeof car);   // "undefined"

// 6. Null (intentional empty value)
let bike = null;
console.log(bike);         // null
console.log(typeof bike);  // "object" (quirk in JS)

// 7. Symbol (unique identifier, ES6)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (unique)
console.log(typeof sym1);   // "symbol"

// 8. Object (includes arrays, dates, etc.)

// a. Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(typeof person); // "object"

// b. Array (type is object)
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars); // "object"

// c. Date (type is object)
const today = new Date("2022-03-25");
console.log(typeof today); // "object"

let result1 = 16 + "Volvo";      // "16Volvo"
let result2 = "Volvo" + 16;      // "Volvo16"
let result3 = 16 + 4 + "Volvo";  // "20Volvo"
let result4 = "Volvo" + 16 + 4;  // "Volvo164"

// ✅ How JavaScript Handles Mixed Types
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

/*

- JavaScript reads left to right.
- If it starts with a number, it'll keep doing math until it hits a string.
- After that, everything becomes string concatenation.

*/

// ✅ typeof Operator Recap
console.log(typeof "hello");     // string
console.log(typeof 123);         // number
console.log(typeof true);        // boolean
console.log(typeof []);          // object (array)
console.log(typeof {});          // object
console.log(typeof null);        // object (JS bug)
console.log(typeof undefined);   // undefined
console.log(typeof Symbol());    // symbol
console.log(typeof BigInt(100)); // bigint

// ✅ Dynamic Typing Example

let dynamicVar;
console.log(typeof dynamicVar); // undefined

dynamicVar = 5;
console.log(typeof dynamicVar); // number

dynamicVar = "John";
console.log(typeof dynamicVar); // string
