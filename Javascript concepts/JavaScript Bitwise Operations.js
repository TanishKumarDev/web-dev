// -----------------------------------------------------------------------------
// ✅ 1. What are Bitwise Operators?
// -----------------------------------------------------------------------------

/**
 * Bitwise operators perform operations at the **bit level**.
 * JavaScript converts numbers to **32-bit signed integers** before applying these.
 * These are mostly used in low-level operations, optimization tricks, flags, etc.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Common Bitwise Operators
// -----------------------------------------------------------------------------

let a = 5;   // binary: 0101
let b = 3;   // binary: 0011

console.log(a & b);  // AND         => 0001 => 1
console.log(a | b);  // OR          => 0111 => 7
console.log(a ^ b);  // XOR         => 0110 => 6
console.log(~a);     // NOT         => 1111...1010 => -6
console.log(a << 1); // Left shift  => 1010 => 10 (5 * 2)
console.log(a >> 1); // Right shift => 0010 => 2 (5 / 2 floor)
console.log(a >>> 1);// Zero-fill right shift => 2

// -----------------------------------------------------------------------------
// ✅ 3. Operator Description
// -----------------------------------------------------------------------------

/**
 * &  (AND)               -> Sets each bit to 1 if both bits are 1
 * |  (OR)                -> Sets each bit to 1 if one of two bits is 1
 * ^  (XOR)               -> Sets each bit to 1 if only one of the two bits is 1
 * ~  (NOT)               -> Inverts all the bits
 * << (Left Shift)        -> Shifts bits to the left (multiply by 2^n)
 * >> (Right Shift)       -> Shifts bits to the right (divide by 2^n)
 * >>> (Zero-fill Right)  -> Right shift but fills left with 0 (for unsigned)
 */

// -----------------------------------------------------------------------------
// ✅ 4. Bitwise Example Use Cases (Interview-Focused)
// -----------------------------------------------------------------------------

// 1️⃣ Check if number is EVEN or ODD using bitwise AND
function isEven(n) {
  return (n & 1) === 0;
}
console.log(isEven(10)); // true
console.log(isEven(7));  // false

// 2️⃣ Swap two numbers without temp (XOR Trick)
let x = 4, y = 7;
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(x, y); // 7 4

// 3️⃣ Multiply or divide by 2 using shifts
let num = 5;
console.log(num << 1); // 10 (5 * 2)
console.log(num >> 1); // 2  (floor of 5 / 2)

// 4️⃣ Set, clear, toggle, check a specific bit using masks

let n = 5; // 0101

// Set 2nd bit (from right, 0-indexed)
n = n | (1 << 1); // 0101 | 0010 = 0111 => 7
console.log(n);

// Clear 2nd bit
n = n & ~(1 << 1); // 0111 & ~(0010) = 0111 & 1101 = 0101 => 5
console.log(n);

// Toggle 0th bit
n = n ^ (1 << 0); // 0101 ^ 0001 = 0100 => 4
console.log(n);

// Check if 2nd bit is set
let isSet = (n & (1 << 2)) !== 0;
console.log(isSet); // true if bit is set

// -----------------------------------------------------------------------------
// ✅ 5. Summary
// -----------------------------------------------------------------------------

/**
 * &  AND
 * |  OR
 * ^  XOR
 * ~  NOT
 * << Left Shift
 * >> Right Shift
 * >>> Unsigned Right Shift
 *
 * ➤ Common for low-level optimization, bit masks, flag systems, and interview tricks.
 */
