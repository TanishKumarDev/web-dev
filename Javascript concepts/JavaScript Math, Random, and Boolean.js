// -----------------------------------------------------------------------------
// ✅ JavaScript Math, Random, and Boolean – Complete in One File
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 1. 🔢 JavaScript Math Object – Static Utility Methods
// -----------------------------------------------------------------------------

// ✅ Math Constants
console.log("Math.PI:", Math.PI);               // 3.14159...
console.log("Math.E:", Math.E);                 // Euler's number

// ✅ Rounding
console.log("Math.round(4.6):", Math.round(4.6));  // 5
console.log("Math.ceil(4.1):", Math.ceil(4.1));    // 5
console.log("Math.floor(4.9):", Math.floor(4.9));  // 4
console.log("Math.trunc(4.9):", Math.trunc(4.9));  // 4 (removes decimals)

// ✅ Math Power, Root
console.log("Math.pow(2, 3):", Math.pow(2, 3));    // 8
console.log("Math.sqrt(25):", Math.sqrt(25));      // 5

// ✅ Absolute, Sign
console.log("Math.abs(-10):", Math.abs(-10));      // 10
console.log("Math.sign(-5):", Math.sign(-5));      // -1

// ✅ Min / Max
console.log("Math.min(1, 3, -5, 10):", Math.min(1, 3, -5, 10)); // -5
console.log("Math.max(1, 3, -5, 10):", Math.max(1, 3, -5, 10)); // 10

// ✅ Trigonometry (in radians)
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1


// -----------------------------------------------------------------------------
// 2. 🎲 Math.random() – Random Numbers
// -----------------------------------------------------------------------------

// ✅ Random decimal between 0 (inclusive) and 1 (exclusive)
let rand = Math.random();
console.log("Random decimal (0–1):", rand);

// ✅ Random integer between 0 and 9
let rand0to9 = Math.floor(Math.random() * 10);
console.log("Random 0–9:", rand0to9);

// ✅ Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 50–100:", getRandomInt(50, 100));

// ✅ Random float between min and max
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
console.log("Random float 1.5–5.5:", getRandomFloat(1.5, 5.5));


// -----------------------------------------------------------------------------
// 3. ✅ JavaScript Booleans – true, false, truthy, falsy
// -----------------------------------------------------------------------------

// ✅ Primitive Boolean Values
let isActive = true;
let isVerified = false;
console.log(typeof isActive); // "boolean"

// ✅ Falsy Values (evaluated as false in boolean context)
let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((val) => console.log(Boolean(val))); // all false

// ✅ Truthy Values (everything else is true)
let truthyValues = [true, 1, "hello", [], {}, -5];
truthyValues.forEach((val) => console.log(Boolean(val))); // all true

// ✅ Boolean Conversion
console.log(Boolean(0));      // false
console.log(Boolean("hi"));   // true
console.log(Boolean([]));     // true
console.log(Boolean(null));   // false

// ✅ Logical Operators
let a = true;
let b = false;

console.log("a && b:", a && b);  // false
console.log("a || b:", a || b);  // true
console.log("!a:", !a);          // false

// ✅ Double NOT (!!) to force boolean conversion
let val = "hello";
console.log(!!val); // true

// ✅ Boolean in Conditionals
if ("non-empty string") {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}


// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * ➤ Math: useful for rounding, roots, powers, min/max, etc.
 * ➤ Math.random(): generate random float (0-1), or scaled to int/float ranges
 * ➤ Boolean:
 *    - Falsy: false, 0, "", null, undefined, NaN
 *    - Truthy: everything else
 *    - Use Boolean(val) or !!val to convert
 */
