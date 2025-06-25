// JavaScript Assignment Operators

let x = 10;
let y = 5;

console.log("Initial x =", x, "y =", y);

x = y;
console.log("x = y:", x); // 5

x = 10;
x += y;
console.log("x += y:", x); // 15

x = 10;
x -= y;
console.log("x -= y:", x); // 5

x = 10;
x *= y;
console.log("x *= y:", x); // 50

x = 10;
x /= y;
console.log("x /= y:", x); // 2

x = 10;
x %= y;
console.log("x %= y:", x); // 0

x = 2;
x **= y;
console.log("x **= y:", x); // 32
