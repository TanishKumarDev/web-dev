// -----------------------------------------------------------------------------
// ✅ 1. typeof Operator
// -----------------------------------------------------------------------------

/**
 * typeof is used to find the data type of a value or variable
 * It returns a string representing the type.
 */

console.log(typeof 42);              // 'number'
console.log(typeof "hello");         // 'string'
console.log(typeof true);            // 'boolean'
console.log(typeof undefined);       // 'undefined'
console.log(typeof null);            // 'object' (⚠️ historical bug in JS)
console.log(typeof {});              // 'object'
console.log(typeof []);              // 'object'
console.log(typeof function() {});   // 'function'

// typeof on variables
let x = 10;
console.log(typeof x); // 'number'

// typeof is useful for type checking
function checkType(val) {
  if (typeof val === "string") {
    console.log("It's a string!");
  }
}
checkType("hello");


// -----------------------------------------------------------------------------
// ✅ 2. toString() Method (from Object.prototype)
// -----------------------------------------------------------------------------

/**
 * All JavaScript objects inherit a `toString()` method.
 * For primitive types like numbers and strings, toString() converts the value to a string.
 */

const num = 123;
console.log(num.toString());  // "123"

const bool = true;
console.log(bool.toString()); // "true"

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

const obj = { a: 1 };
console.log(obj.toString()); // "[object Object]"

// Use Object.prototype.toString.call() to check internal [[Class]] type
console.log(Object.prototype.toString.call([]));      // "[object Array]"
console.log(Object.prototype.toString.call(null));    // "[object Null]"
console.log(Object.prototype.toString.call(123));     // "[object Number]"



// -----------------------------------------------------------------------------
// ✅ 3. Typed Arrays in JavaScript
// -----------------------------------------------------------------------------

/**
 * Typed Arrays are array-like views of binary data
 * Used for performance-heavy or low-level operations like image processing, WebGL, etc.
 * ➤ Fixed-length, same-type data
 * ➤ Backed by ArrayBuffer
 */

const buffer = new ArrayBuffer(16); // 16 bytes = 128 bits
const int32View = new Int32Array(buffer); // 4 bytes per int => 4 integers

// Set values
int32View[0] = 42;
int32View[1] = 99;

// Access values
console.log(int32View[0]); // 42
console.log(int32View.length); // 4
console.log(int32View.BYTES_PER_ELEMENT); // 4 (bytes per int32)

// Different types of Typed Arrays:

/**
 * Int8Array       - 8-bit signed integer
 * Uint8Array      - 8-bit unsigned integer
 * Uint8ClampedArray - 8-bit unsigned clamped integer
 * Int16Array      - 16-bit signed integer
 * Uint16Array     - 16-bit unsigned integer
 * Int32Array      - 32-bit signed integer
 * Uint32Array     - 32-bit unsigned integer
 * Float32Array    - 32-bit float
 * Float64Array    - 64-bit float
 */

const floatArr = new Float32Array([3.14, 2.71, 1.41]);
console.log(floatArr[1]); // 2.71

// You can create them from arrays too
const int8 = new Int8Array([1, -1, 127, -128]);
console.log(int8); // Int8Array(4) [1, -1, 127, -128]


// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * typeof:
 *   ➤ Used to check data type
 *   ➤ Returns string like 'number', 'string', 'object', etc.

 * toString():
 *   ➤ Converts values to string
 *   ➤ Also used via Object.prototype.toString.call(x) to check exact internal type

 * Typed Arrays:
 *   ➤ High-performance arrays for binary data
 *   ➤ Fixed length, all same type
 *   ➤ Useful for advanced operations like canvas, audio, WebGL, etc.
 */
