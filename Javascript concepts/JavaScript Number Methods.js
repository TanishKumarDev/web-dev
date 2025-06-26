// ------------------------------------------------------------
// JavaScript Number Methods (used with numeric values)
// ------------------------------------------------------------
// These methods apply to all numbers (literals, variables, expressions):
// - toString()
// - toExponential()
// - toFixed()
// - toPrecision()
// - valueOf()

let num = 123;

console.log(num.toString());        // "123" - Converts number to string
console.log(num.toExponential());  // "1.23e+2" - Exponential notation
console.log(num.toFixed(2));       // "123.00" - 2 decimal places (string)
console.log(num.toPrecision(5));   // "123.00" - Total significant digits
console.log(num.valueOf());        // 123 - Returns primitive number

// Note: `valueOf()` is internally used in JavaScript and not commonly needed directly

console.log(typeof num);           // "number"
console.log(typeof num.valueOf()); // "number"


// ------------------------------------------------------------
// Number() - Converts various values to number
// ------------------------------------------------------------

let boolToNum = Number(true);          // 1
let strToNum = Number("10.33");        // 10.33
let invalidToNum = Number("hello");    // NaN

console.log(boolToNum, strToNum, invalidToNum);


// ------------------------------------------------------------
// Number() used on Date object
// ------------------------------------------------------------

let now = new Date();
let timestamp = Number(now); // milliseconds since Jan 1, 1970
console.log(timestamp);


// ------------------------------------------------------------
// parseInt() - Global function to extract integer from string
// ------------------------------------------------------------

console.log(parseInt("-10"));        // -10
console.log(parseInt("-10.33"));     // -10
console.log(parseInt("10"));         // 10
console.log(parseInt("10.33"));      // 10
console.log(parseInt("10 20 30"));   // 10
console.log(parseInt("10 years"));   // 10
console.log(parseInt("years 10"));   // NaN


// ------------------------------------------------------------
// parseFloat() - Global function to extract float from string
// ------------------------------------------------------------

console.log(parseFloat("10"));         // 10
console.log(parseFloat("10.33"));      // 10.33
console.log(parseFloat("10 20 30"));   // 10
console.log(parseFloat("10 years"));   // 10
console.log(parseFloat("years 10"));   // NaN


// ------------------------------------------------------------
// Number Object Utility Methods (ES6)
// ------------------------------------------------------------
// These are methods of the `Number` object, NOT instance methods.
// Use like: Number.isInteger(value), NOT value.isInteger()

console.log(Number.isInteger(10));             // true
console.log(Number.isInteger(10.5));           // false

console.log(Number.isSafeInteger(10));         // true
console.log(Number.isSafeInteger(12345678901234567890)); // false

console.log(Number.parseFloat("10.55"));       // 10.55
console.log(Number.parseInt("25.9"));          // 25

// Note: Number.parseInt() and Number.parseFloat() are the same as global versions.
// Reason: modularization of JavaScript for use outside browsers (e.g., Node.js)


// ------------------------------------------------------------
// Safe Integer Range Reminder
// ------------------------------------------------------------

// JavaScript can precisely represent integers between:
// - (2^53 - 1) = 9007199254740991 and -(2^53 - 1) = -9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


// ------------------------------------------------------------
// Summary
// ------------------------------------------------------------

/**
 * ➤ Instance Methods for Numbers:
 *   - toString(): number to string
 *   - toExponential(): exponential notation string
 *   - toFixed(n): fixed-point with 'n' decimal places
 *   - toPrecision(n): total digits as string
 *   - valueOf(): returns primitive number
 * 
 * ➤ Global Conversion:
 *   - Number(): convert value (e.g., boolean, string, date) to number
 *   - parseInt(): extract integer from string
 *   - parseFloat(): extract float from string
 * 
 * ➤ Number Object Methods (ES6):
 *   - Number.isInteger()
 *   - Number.isSafeInteger()
 *   - Number.parseInt()  // same as global parseInt()
 *   - Number.parseFloat() // same as global parseFloat()
 * 
 * ➤ Precautions:
 *   - Don’t use `value.isInteger()` → Use `Number.isInteger(value)`
 *   - All conversions failing return NaN
 *   - Know the safe integer limit: ±9007199254740991
 */
