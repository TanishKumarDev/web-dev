// Number conversions
let score = "33";
console.log(typeof score); // Output: string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Output: number
console.log(valueInNumber); // Output: 33

score = "33abc";
valueInNumber = Number(score);
console.log(typeof valueInNumber); // Output: number
console.log(valueInNumber); // Output: NaN
// Note: NaN (Not a Number) occurs for invalid number conversions

score = null;
valueInNumber = Number(score);
console.log(valueInNumber); // Output: 0
// Note: null converts to 0, which may cause bugs

score = undefined;
valueInNumber = Number(score);
console.log(valueInNumber); // Output: NaN

score = true;
valueInNumber = Number(score);
console.log(valueInNumber); // Output: 1
// Note: true -> 1, false -> 0

score = "Tanish";
valueInNumber = Number(score);
console.log(valueInNumber); // Output: NaN

// Boolean conversions
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Output: true
// Note: 1 -> true, 0 -> false

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Output: false
// Note: Empty string -> false, non-empty -> true

isLoggedIn = "Tanish";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Output: true

// String conversion
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // Output: 33
console.log(typeof stringNumber); // Output: string
// Note: Number converts to string, visually similar but different type


// Arithmetic operations
let value = 3;
console.log(-value); // Output: -3
// Note: Negation is straightforward

// String concatenation
let str1 = "Hello";
let str2 = " Tanish"; // Space for readability
let str3 = str1 + str2;
console.log(str3); // Output: Hello Tanish

// Tricky string-to-number conversions
console.log("1" + 2); // Output: 12 (string)
console.log(1 + "2"); // Output: 12 (string)
console.log("1" + 2 + 2); // Output: 122 (string, left-to-right)
console.log(1 + 2 + "2"); // Output: 32 (number 3 + string "2")
// Note: String first -> all strings; string last -> compute numbers first

// Tricky boolean conversions
console.log(+true); // Output: 1
console.log(+false); // Output: 0
console.log(+""); // Output: 0
// Note: Avoid such conversions; use explicit Number(true) for clarity

// Assignment operators
let num1, num2, num3;
num1 = num2 = num3 = 4;
console.log([num1, num2, num3]); // Output: [4, 4, 4]
// Note: Readable individual assignments preferred

// Increment operator
let gameCounter = 100;
console.log(gameCounter); // Output: 100
gameCounter++;
console.log(gameCounter); // Output: 101

// Assignment: Study prefix (++x) vs. postfix (x++) on MDN

// Reference: ECMAScript ToPrimitive for conversions
// https://tc39.es/ecma262/#sec-toprimitive
