// ----------------------------------------------------
// JavaScript BigInt & Number Accuracy
// ----------------------------------------------------

// ----------------------------------------------------
// 1. JavaScript Integer Accuracy (Max 15 Digits Safely)
// ----------------------------------------------------

let safeInt = 999999999999999;     // 15 digits - accurate
let unsafeInt = 9999999999999999;  // 16+ digits - loses precision

console.log(safeInt);   // 999999999999999
console.log(unsafeInt); // 10000000000000000 (rounded)

// All numbers in JavaScript follow IEEE-754 64-bit floating point standard.
// Therefore, JavaScript integers are only accurate up to (2^53 - 1).

// Maximum Safe Integer = 9007199254740991
// Minimum Safe Integer = -9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// ----------------------------------------------------
// 2. Introduction to BigInt
// ----------------------------------------------------

// BigInt is used to store arbitrarily large integers beyond the safe limit.

let bigInteger = BigInt("123456789012345678901234567890");
console.log(typeof bigInteger); // 'bigint'
console.log(bigInteger);        // 123456789012345678901234567890n

// You can also use the `n` suffix to create BigInt literals
let bigLiteral = 1234567890123456789012345678901234567890n;

// ----------------------------------------------------
// 3. Total Data Types in JavaScript (8)
// ----------------------------------------------------

// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// ----------------------------------------------------
// 4. BigInt Arithmetic
// ----------------------------------------------------

let bigX = 9007199254740995n;
let bigY = 9007199254740995n;
let bigZ = bigX * bigY;

console.log(bigZ); // Works as expected for large multiplication

// Note: Arithmetic between BigInt and Number is NOT allowed
// Example:
// let result = bigX + 10; // ❌ TypeError

// You must explicitly convert types if needed (not recommended)

// ----------------------------------------------------
// 5. BigInt Limitations
// ----------------------------------------------------

// - Cannot have decimal values
// let invalidBig = 10.5n; // ❌ SyntaxError

// - Unsigned right shift (>>>) is not allowed on BigInt

// - Cannot mix BigInt with Number in operations directly

// ----------------------------------------------------
// 6. BigInt with Hexadecimal, Octal, Binary
// ----------------------------------------------------

let bigHex = 0x20000000000003n;                    // Hexadecimal
let bigOct = 0o400000000000000003n;                // Octal
let bigBin = 0b100000000000000000000000000000000000000000000000000011n; // Binary

console.log(bigHex, bigOct, bigBin);

// ----------------------------------------------------
// 7. Precision Problem in JS Numbers
// ----------------------------------------------------

// Due to limited precision, this comparison is TRUE (!)
console.log(9007199254740992 === 9007199254740993); // true

// This is because both values are stored as the same floating-point number
// This can lead to subtle bugs or security issues

// ----------------------------------------------------
// 8. Number Utility Methods
// ----------------------------------------------------

// Check if a value is an integer
console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false

// Check if a value is a safe integer
console.log(Number.isSafeInteger(10));                      // true
console.log(Number.isSafeInteger(12345678901234567890));    // false

// Safe Integers are within range:
// - (2^53 - 1) → 9007199254740991
// - -(2^53 - 1) → -9007199254740991

// ----------------------------------------------------
// Summary
// ----------------------------------------------------

/**
 * - JavaScript numbers (Number type) are precise only up to 15-17 digits.
 * - Max safe integer: 9007199254740991
 * - BigInt is used for large integer values (arbitrary precision).
 * - Cannot mix BigInt and Number types directly.
 * - BigInt doesn't support decimals or >>> shift.
 * - Use Number.isInteger() to check for integers.
 * - Use Number.isSafeInteger() to check for safe (precise) integers.
 * - Be careful with equality checks on large numbers near the safe limit.
 */
