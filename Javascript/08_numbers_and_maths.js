```javascript
// File: 01_basics/06_numbers_and_maths.js
// Purpose: Practice JavaScript numbers and Math library

// Number Declaration
let score = 400;
console.log(score); // Output: 400

let balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Number Methods
console.log(balance.toString().length); // Output: 3 (for "100")
console.log(balance.toFixed(2)); // Output: "100.00"

let otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // Output: "124"
console.log((23.8966).toPrecision(3)); // Output: "23.9"

let hundred = 1000000;
console.log(hundred.toLocaleString()); // Output: "1,000,000"
console.log(hundred.toLocaleString("en-IN")); // Output: "10,00,000"

// Number Properties
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// Math Library
console.log(Math.PI); // Output: 3.141592653589793

// Math Methods
console.log(Math.abs(-4)); // Output: 4
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.6)); // Output: 5
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.sqrt(25)); // Output: 5
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.min(4, 3, 6, 8)); // Output: 3
console.log(Math.max(4, 3, 6, 8)); // Output: 8

// Math.random
console.log(Math.random()); // Output: Random number between 0 and <1 (e.g., 0.5234)

// Random number in range [min, max]
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: Random integer between 10 and 20 (e.g., 12, 15, 19)

// Reference: MDN for Number and Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
```