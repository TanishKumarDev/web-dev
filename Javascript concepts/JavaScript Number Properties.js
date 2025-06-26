// ------------------------------------------------------------
// JavaScript Number Properties
// ------------------------------------------------------------
// These are static properties of the `Number` object and should be used as: Number.<property>

// ------------------------------------------------------------
// 1. Number.EPSILON
// ------------------------------------------------------------
// EPSILON is the smallest difference between 1 and a number greater than 1

console.log("EPSILON:", Number.EPSILON); // ≈ 2.220446049250313e-16

// Use case: comparing floating-point numbers for near-equality
function areAlmostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log("0.1 + 0.2 ≈ 0.3:", areAlmostEqual(0.1 + 0.2, 0.3)); // true


// ------------------------------------------------------------
// 2. Number.MAX_VALUE
// ------------------------------------------------------------
// Largest positive number JS can represent

console.log("MAX_VALUE:", Number.MAX_VALUE); // ≈ 1.7976931348623157e+308

// Going beyond this gives Infinity
console.log("MAX_VALUE * 2:", Number.MAX_VALUE * 2); // Infinity


// ------------------------------------------------------------
// 3. Number.MIN_VALUE
// ------------------------------------------------------------
// Smallest positive number (closest to zero, not most negative)

console.log("MIN_VALUE:", Number.MIN_VALUE); // ≈ 5e-324

// Note: MIN_VALUE is > 0, not the most negative number
console.log("MIN_VALUE > 0:", Number.MIN_VALUE > 0); // true


// ------------------------------------------------------------
// 4. Number.MAX_SAFE_INTEGER
// ------------------------------------------------------------
// Maximum integer that can be safely represented

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)


// ------------------------------------------------------------
// 5. Number.MIN_SAFE_INTEGER
// ------------------------------------------------------------
// Minimum (negative) safe integer

console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991


// ------------------------------------------------------------
// 6. Number.POSITIVE_INFINITY
// ------------------------------------------------------------
// Represents Infinity (e.g., from overflow or division by 0)

console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinity
console.log("1 / 0:", 1 / 0); // Infinity


// ------------------------------------------------------------
// 7. Number.NEGATIVE_INFINITY
// ------------------------------------------------------------
// Represents negative infinity (e.g., -1 divided by 0)

console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // -Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity


// ------------------------------------------------------------
// 8. Number.NaN (Not a Number)
// ------------------------------------------------------------
// Represents a value that is not a legal number

let invalidResult = 100 / "Apple";
console.log("NaN example:", invalidResult); // NaN
console.log("typeof NaN:", typeof NaN); // "number"

// Use Number.isNaN() to check safely
console.log("isNaN(100 / 'Apple'):", Number.isNaN(invalidResult)); // true


// ------------------------------------------------------------
// Summary of Number Properties
// ------------------------------------------------------------

/**
 * ➤ Number.EPSILON
 *     - Smallest difference between 1 and next representable number
 *     - Use for floating point comparisons
 *
 * ➤ Number.MAX_VALUE / Number.MIN_VALUE
 *     - Largest/smallest positive JS number
 *
 * ➤ Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
 *     - Largest/smallest accurate integers in JS (±2^53 - 1)
 *
 * ➤ Number.POSITIVE_INFINITY / NEGATIVE_INFINITY
 *     - Returned when overflow or invalid math (like 1 / 0)
 *
 * ➤ Number.NaN
 *     - Returned when invalid arithmetic occurs
 *     - Use `Number.isNaN()` for reliable check
 */
