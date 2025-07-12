// -----------------------------------------------------------------------------
// ✅ 1. JavaScript Type Conversion Overview
// -----------------------------------------------------------------------------

/**
 * JavaScript has **dynamic typing**: variables can hold any type.
 * Type Conversion is the automatic or manual process of changing a value from one type to another.
 * 
 * ➤ Implicit Conversion (Type Coercion) mean automatic type conversion
 * ➤ Explicit Conversion (Type Casting or Type Conversion) mean manual type conversion
 */

// -----------------------------------------------------------------------------
// ✅ 2. Implicit Type Conversion (Type Coercion)
// -----------------------------------------------------------------------------

// Number + String → String
console.log(1 + "2");          // "12"      → number converted to string

// Subtraction, multiplication, division → tries to convert strings to numbers
console.log("5" - 2);          // 3         → string to number
console.log("5" * "2");        // 10
console.log("10" / 2);         // 5
console.log("10" - "foo");     // NaN

// Boolean to number
console.log(true + 1);         // 2
console.log(false + 1);        // 1

// null and undefined
console.log(null + 1);         // 1
console.log(undefined + 1);    // NaN

// Array to string or number (tricky)
console.log([1, 2] + 3);       // "1,23"    → array coerced to string
console.log([] + {});          // "[object Object]"
console.log({} + []);          // 0         → parsed as code block + array
console.log([] + []);          // ""
console.log([10] * 2);         // 20

// -----------------------------------------------------------------------------
// ✅ 3. Explicit Type Conversion (Type Casting)
// -----------------------------------------------------------------------------

// Using Number(), String(), Boolean()

// ➤ To Number
console.log(Number("123"));    // 123
console.log(Number(""));       // 0
console.log(Number("abc"));    // NaN
console.log(Number(null));     // 0
console.log(Number(undefined));// NaN
console.log(Number(true));     // 1

// ➤ To String
console.log(String(123));      // "123"
console.log(String(true));     // "true"
console.log((123).toString()); // "123"

// ➤ To Boolean
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean("hello"));  // true
console.log(Boolean(42));       // true

// Converting to String
let n = 123;
let s1 = String(n);  
let s2 = n.toString();  
console.log(s1)
console.log(s2)

// Converting to Number
let s = "123";
let n2 = Number(s);  
let s3 = "12.34";
let n1 = parseFloat(s3);  
console.log(n)
console.log(n1)

// Converting to Boolean
let str = "hello";
let b1 = Boolean(str);
let emptyStr = "";
let b2 = Boolean(emptyStr);
console.log(b1)
console.log(b2)
// -----------------------------------------------------------------------------
// ✅ 4. Interview Tricky Questions
// -----------------------------------------------------------------------------

console.log([] == false);      // true    → [] → "" → false
console.log([] == 0);          // true    → [] → "" → 0
console.log(null == undefined);// true
console.log(null === undefined); // false
console.log([] + {});          // "[object Object]"
console.log({} + []);          // 0 (weird parsing)
console.log("5" + 1);          // "51"
console.log("5" - 1);          // 4
console.log([1] == 1);         // true    → [1].toString() → "1" → number
console.log([] == ![]);        // true    → [] == false

// -----------------------------------------------------------------------------
// ✅ 5. Interview Notes & Tips
// -----------------------------------------------------------------------------

/**
 * 🔸 `==` does type coercion, `===` does not.
 * 🔸 Only 6 falsy values: 0, "", false, null, undefined, NaN
 * 🔸 NaN is never equal to NaN → use isNaN() or Number.isNaN()
 * 🔸 `typeof null === "object"` is a long-standing JS bug
 * 🔸 To detect true type: Object.prototype.toString.call(val)

 * 🔸 Remember abstract equality rules:
 *   - null == undefined → true
 *   - null == 0 → false
 *   - "0" == false → true
 *   - [] == "" → true
 *   - [] == 0 → true
 *   - [null] == 0 → true
 *   - ["0"] == 0 → true
 */

// -----------------------------------------------------------------------------
// ✅ 6. Conversion Shortcuts (for Interviews)
// -----------------------------------------------------------------------------

// ➤ To Number
+ "123"           // 123
parseInt("123px") // 123
parseFloat("1.23")

// ➤ To Boolean
!!"hello"         // true
!!0               // false

// ➤ To String
123 + ""          // "123"

// ➤ Nullish Coalescing vs OR
let val = null;
console.log(val || "default");   // "default"
console.log(val ?? "default");   // "default"

// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * ➤ Implicit Coercion happens with +, -, *, / and comparisons
 * ➤ Use === to avoid unexpected coercions
 * ➤ Always be cautious with falsy values in conditionals
 * ➤ NaN != NaN → use Number.isNaN() for safe checks
 * ➤ Know weird behavior of [], {}, null, undefined
 */
