// ==========================================
// JavaScript Assignment Operators - All Types
// ==========================================

console.log("=== Simple Assignment ===");
let x = 10;
console.log("x =", x);
x = 10 + 5;
console.log("x = 10 + 5 →", x); // 15

console.log("\n=== Arithmetic Assignment ===");
x = 10;
x += 5;
console.log("x += 5 →", x); // 15

x = 10;
x -= 5;
console.log("x -= 5 →", x); // 5

x = 10;
x *= 5;
console.log("x *= 5 →", x); // 50

x = 10;
x /= 5;
console.log("x /= 5 →", x); // 2

x = 10;
x %= 4;
console.log("x %= 4 →", x); // 2

x = 2;
x **= 3;
console.log("x **= 3 →", x); // 8

let text = "Hello";
text += " World";
console.log(`text += " World" →`, text); // "Hello World"

console.log("\n=== Shift Assignment ===");
x = -100;
x <<= 2;
console.log("x <<= 2 →", x); // Left shift

x = -100;
x >>= 2;
console.log("x >>= 2 →", x); // Right shift (signed)

x = -100;
x >>>= 2;
console.log("x >>>= 2 →", x); // Right shift (unsigned)

console.log("\n=== Bitwise Assignment ===");
x = 10;
x &= 5;
console.log("x &= 5 →", x); // Bitwise AND

x = 10;
x |= 5;
console.log("x |= 5 →", x); // Bitwise OR

x = 10;
x ^= 5;
console.log("x ^= 5 →", x); // Bitwise XOR

console.log("\n=== Logical Assignment (ES2020+) ===");

x = 10;
x &&= 5; // if x is truthy, assign 5
console.log("x &&= 5 →", x); // 5

x = 0;
x ||= 20; // if x is falsy, assign 20
console.log("x ||= 20 →", x); // 20

let y;
y ??= 30; // if y is null/undefined, assign 30
console.log("y ??= 30 →", y); // 30
