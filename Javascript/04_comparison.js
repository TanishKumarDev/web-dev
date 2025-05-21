// Basic comparisons (same type)
console.log(2 > 1); // Output: true
console.log(2 >= 1); // Output: true
console.log(2 < 1); // Output: false
console.log(2 <= 1); // Output: false
console.log(2 == 1); // Output: false
console.log(2 != 1); // Output: true

// Mixed-type comparisons (coercion issues)
console.log("2" > 1); // Output: true (string "2" converts to number 2)
console.log("02" > 1); // Output: true (string "02" converts to number 2)

// Null comparisons
console.log(null > 0); // Output: false (no conversion)
console.log(null == 0); // Output: false (null only equals null/undefined)
console.log(null >= 0); // Output: true (null converts to 0, so 0 >= 0)
// Note: Inconsistent results due to coercion; avoid loose comparisons

// Undefined comparisons
console.log(undefined == 0); // Output: false
console.log(undefined > 0); // Output: false
console.log(undefined < 0); // Output: false
// Note: undefined always returns false for >, <, ==

// Strict equality
console.log("2" === 2); // Output: false (different types: string vs. number)
console.log(2 === 2); // Output: true (same type and value)
// Note: Use === for predictable results; checks type and value

// Recommendation: Always use ===/!== to avoid coercion issues
// Reference: ECMAScript comparison rules (tc39.es)