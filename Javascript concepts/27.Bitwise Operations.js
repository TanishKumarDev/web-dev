// === Understanding Bitwise Operations ===
// Bitwise operations are like playing with light switches at the binary level: each bit (0 or 1) is a switch,
// and operators (AND, OR, XOR, etc.) decide which switches stay on or off.
// - JavaScript converts numbers to 32-bit signed integers for bitwise operations, then back to 64-bit numbers.
// - Why use them? Optimize performance (e.g., flags, masks), manipulate binary data, or perform low-level tasks.
// Why confusing? Binary math and two's complement for negative numbers can feel alien.
// Analogy: Think of bits as a row of 32 light bulbs; each operation changes which bulbs are lit.
// Tip: Visualize binary numbers (e.g., 5 = 0101) and use small numbers to practice.

console.log("=== JavaScript Bitwise Operations Examples ===");

// === Bitwise AND (&) ===
// Sets a bit to 1 only if both corresponding bits are 1.
// Example: 5 & 1 compares 0101 & 0001.

console.log("\n=== Bitwise AND (&) ===");
let andResult = 5 & 1;
console.log(andResult); // 1
// Reason: 5 (0101) & 1 (0001) = 0001 (1), as only the last bit is 1 in both.
// Logic: Bit-by-bit comparison; useful for checking specific bits (e.g., flags).

// 4-bit example for clarity
console.log(15 & 1); // 1 (1111 & 0001 = 0001)
// Reason: Only the last bit is 1 in both numbers.
// Logic: Demonstrates AND with a larger number.

// === Bitwise OR (|) ===
// Sets a bit to 1 if at least one corresponding bit is 1.
// Example: 5 | 1 compares 0101 | 0001.

console.log("\n=== Bitwise OR (|) ===");
let orResult = 5 | 1;
console.log(orResult); // 5
// Reason: 5 (0101) | 1 (0001) = 0101 (5), as the bits in 5 are already 1 where needed.
// Logic: Combines bits; useful for setting flags.

console.log(15 | 1); // 15 (1111 | 0001 = 1111)
// Reason: OR keeps all 1s from either number.
// Logic: Shows OR with a number that’s already “full” of 1s.

// === Bitwise XOR (^) ===
// Sets a bit to 1 if exactly one corresponding bit is 1 (not both).
// Example: 5 ^ 1 compares 0101 ^ 0001.

console.log("\n=== Bitwise XOR (^) ===");
let xorResult = 5 ^ 1;
console.log(xorResult); // 4
// Reason: 5 (0101) ^ 1 (0001) = 0100 (4), as only the second-to-last bit differs.
// Logic: Toggles bits; useful for flipping specific bits or encryption.

console.log(15 ^ 1); // 14 (1111 ^ 0001 = 1110)
// Reason: The last bit flips (1 ^ 1 = 0, 1 ^ 0 = 1 elsewhere).
// Logic: Shows XOR’s toggling effect.

// === Bitwise NOT (~) ===
// Inverts all bits (0 → 1, 1 → 0). In 32-bit signed integers, ~n = -(n + 1).
// Example: ~5 inverts 0101 to 1111...11111010 (-6 in two’s complement).

console.log("\n=== Bitwise NOT (~) ===");
let notResult = ~5;
console.log(notResult); // -6
// Reason: 5 (000...0101) inverts to 111...11111010, which is -6 in two’s complement.
// Logic: NOT is tricky due to signed integers; ~n = -(n + 1) is a shortcut to understand it.

// === Bitwise Left Shift (<<) ===
// Shifts bits left, adding zeros on the right; leftmost bits fall off.
// Example: 5 << 1 shifts 0101 to 1010 (10).

console.log("\n=== Bitwise Left Shift (<<) ===");
let leftShiftResult = 5 << 1;
console.log(leftShiftResult); // 10
// Reason: 5 (0101) << 1 = 1010 (10); shifts left, multiplies by 2 per shift.
// Logic: Equivalent to multiplying by 2^n (n = shift amount).

// === Bitwise Right Shift (>>) ===
// Shifts bits right, copying the sign bit (leftmost) on the left; rightmost bits fall off.
// Example: -5 >> 1 shifts 111...11111011 to 111...11111101 (-3).

console.log("\n=== Bitwise Right Shift (>>) ===");
let rightShiftResult = -5 >> 1;
console.log(rightShiftResult); // -3
// Reason: -5 (111...11111011) >> 1 = 111...11111101 (-3); sign bit (1) is copied.
// Logic: Preserves the sign; divides by 2^n, rounding down for negatives.

// === Bitwise Zero-Fill Right Shift (>>>) ===
// Shifts bits right, adding zeros on the left; rightmost bits fall off.
// Example: 5 >>> 1 shifts 0101 to 0010 (2).

console.log("\n=== Bitwise Zero-Fill Right Shift (>>>) ===");
let zeroFillRightShiftResult = 5 >>> 1;
console.log(zeroFillRightShiftResult); // 2
// Reason: 5 (0101) >>> 1 = 0010 (2); always adds zeros, ignoring sign.
// Logic: Treats the number as unsigned; divides by 2^n.

// === Converting Decimal to Binary ===
// Convert a decimal number to a binary string.

console.log("\n=== Decimal to Binary ===");
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
console.log(dec2bin(5)); // "101"
// Reason: dec >>> 0 ensures unsigned 32-bit integer; toString(2) converts to binary.
// Logic: Useful for visualizing binary representation.

console.log(dec2bin(40)); // "101000"
// Reason: 40 = 32 + 8 = 00101000 in binary.
// Logic: Shows a multi-bit number.

// === Converting Binary to Decimal ===
// Convert a binary string to a decimal number.

console.log("\n=== Binary to Decimal ===");
function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}
console.log(bin2dec("101")); // 5
// Reason: parseInt("101", 2) interprets "101" as binary, returning 5.
// Logic: Converts binary strings back to decimal for calculations.

console.log(bin2dec("101000")); // 40
// Reason: "101000" = 32 + 8 = 40 in decimal.
// Logic: Demonstrates a larger binary number.

// === Understanding Binary Numbers ===
// Binary numbers with one bit set show powers of 2.
// Example: 000...00000001 = 1, 000...00000010 = 2, 000...00000100 = 4.

console.log("\n=== Binary Patterns ===");
console.log(bin2dec("0001")); // 1
console.log(bin2dec("0010")); // 2
console.log(bin2dec("0100")); // 4
// Reason: Each bit represents a power of 2 (2^0, 2^1, 2^2, etc.).
// Logic: Helps understand binary-to-decimal conversion.

// Two’s complement for negative numbers
console.log(dec2bin(-5)); // "11111111111111111111111111111011"
// Reason: -5 is ~5 + 1 in two’s complement (inverts 0101, adds 1).
// Logic: Explains why ~5 = -6 (inverts to -6 in 32-bit signed format).

// === Exercise: What number does the binary number 010 represent? ===
console.log("\n=== Exercise Result ===");
let binary = "010";
console.log(bin2dec(binary)); // 2
// Reason: Binary "010" = 0*2^2 + 1*2^1 + 0*2^0 = 0 + 2 + 0 = 2.
// Logic: Each digit represents a power of 2; only the middle bit (2^1) is 1.
// Correct Answer: 2