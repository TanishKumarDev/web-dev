// ----------------------------------------------------
// JavaScript Numbers: Core Concepts and Behavior
// ----------------------------------------------------

// ----------------------------------------------------
// 1. JavaScript Numbers: Integer or Decimal
// ----------------------------------------------------

let integerValue = 10;
let decimalValue = 3.14;

console.log(integerValue, decimalValue); // 10 3.14

// Both integers and decimals are stored as the same type: 'number'

// ----------------------------------------------------
// 2. Scientific (Exponent) Notation
// ----------------------------------------------------

let largeExponential = 12e5;   // 12 * 10^5 => 1200000
let smallExponential = 12e-5;  // 12 * 10^-5 => 0.00012

console.log(largeExponential, smallExponential); // 1200000 0.00012

// Useful for representing very large or very small numbers

// ----------------------------------------------------
// 3. JavaScript Numbers Are Always 64-bit Floating Point
// ----------------------------------------------------

// JS uses IEEE-754 64-bit floating point format for all numbers
// No separate types like int, float, or double

// Structure of 64-bit representation:
// - 1 bit: sign
// - 11 bits: exponent
// - 52 bits: fraction (mantissa)
// This supports huge ranges but limits precision to ~15-17 digits

let exampleInt = 10;
let exampleFloat = 10.5;

console.log(typeof exampleInt);   // 'number'
console.log(typeof exampleFloat); // 'number'

// Both use the same internal format

// ----------------------------------------------------
// 4. Precision Limitations
// ----------------------------------------------------

let safePrecision = 999999999999999;     // 15 digits
let unsafePrecision = 9999999999999999;  // 16 digits (not accurate)

console.log(safePrecision);   // 999999999999999
console.log(unsafePrecision); // 10000000000000000 (rounded)

// Numbers beyond 15-17 digits lose precision

// ----------------------------------------------------
// 5. Floating Point Arithmetic Errors
// ----------------------------------------------------

let sum = 0.1 + 0.2;
console.log(sum); // 0.30000000000000004 (not exactly 0.3)

// Fix: compare floating-point numbers using tolerance

function areAlmostEqual(n1, n2, epsilon = 1e-10) {
  return Math.abs(n1 - n2) < epsilon;
}

console.log(areAlmostEqual(0.1 + 0.2, 0.3)); // true

// ----------------------------------------------------
// 6. Safe Integer Range
// ----------------------------------------------------

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// Beyond this range, integers become inaccurate

// ----------------------------------------------------
// 7. BigInt: For Large Integers (ES2020+)
// ----------------------------------------------------

const bigInt1 = 9007199254740991n;
const bigInt2 = bigInt1 + 1n;

console.log(bigInt1); // 9007199254740991n
console.log(bigInt2); // 9007199254740992n

// Cannot mix BigInt and regular Number types
// console.log(bigInt1 + 1); // TypeError

// ----------------------------------------------------
// 8. NaN (Not a Number)
// ----------------------------------------------------

let invalidMath = 100 / "Apple"; // Not a numeric string
console.log(invalidMath);        // NaN

let validDivision = 100 / "10";  // Numeric string
console.log(validDivision);      // 10

let isInvalid = isNaN(100 / "Apple");
console.log(isInvalid); // true

let addNaN = 100 + NaN;
console.log(addNaN); // NaN

console.log(typeof NaN); // 'number'

// ----------------------------------------------------
// 9. Infinity and -Infinity
// ----------------------------------------------------

// Infinity occurs when number exceeds the largest limit
console.log(typeof Infinity); // 'number'

let growingValue = 2;

while (growingValue !== Infinity) {
  growingValue *= growingValue;
}

console.log(growingValue); // Infinity

let divideByZero = 100 / 0;
console.log(divideByZero); // Infinity

// ----------------------------------------------------
// 10. Hexadecimal Numbers
// ----------------------------------------------------

let hexNumber = 0x1F; // Hex for 31
console.log(hexNumber); // 31

// Note: Avoid using numbers with leading zero like 07 (may be octal in older JS)

// ----------------------------------------------------
// 11. Base Conversion using toString()
// ----------------------------------------------------

let baseValue = 32;

console.log(baseValue.toString(32)); // base 32
console.log(baseValue.toString(16)); // base 16 (hexadecimal)
console.log(baseValue.toString(12)); // base 12
console.log(baseValue.toString(10)); // base 10 (decimal)
console.log(baseValue.toString(8));  // base 8 (octal)
console.log(baseValue.toString(2));  // base 2 (binary)

// Can convert number to any base between 2 to 36

// ----------------------------------------------------
// 12. Number Objects (Avoid Using)
// ----------------------------------------------------

let primitiveNumber = 123;
let numberObject = new Number(123);

console.log(primitiveNumber == numberObject);  // true (type conversion)
console.log(primitiveNumber === numberObject); // false (different types)

console.log(typeof primitiveNumber); // 'number'
console.log(typeof numberObject);    // 'object'

// Comparing two Number objects:
let numberObject2 = new Number(123);
console.log(numberObject === numberObject2); // false

// Recommendation: always use number primitives instead of objects

// ----------------------------------------------------
// Summary
// ----------------------------------------------------

/**
 * - All JS numbers are 64-bit floating point (IEEE-754)
 * - Integer, float, and decimal are the same 'number' type
 * - Max safe integer: 9007199254740991
 * - Use BigInt for large integer precision
 * - NaN indicates invalid number operations
 * - Infinity results from overflow or division by 0
 * - Use `toString(base)` to convert numbers to different bases
 * - Avoid using `new Number()`, prefer primitive values
 */
