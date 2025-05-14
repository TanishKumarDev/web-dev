// 1. JavaScript Arithmetic Operators
// Performing basic arithmetic operations
const sum = 10 + 5;  // Addition
const diff = 10 - 5; // Subtraction
const p = 10 * 5;    // Multiplication
const q = 10 / 5;    // Division

console.log(sum, diff, p, q);  // Output: 15 5 50 2

// 2. JavaScript Assignment Operators
// Using assignment operators to modify the value of a variable
let n = 10;
n += 5;  // Equivalent to n = n + 5
console.log(n);  // Output: 15
n += 2;  // Equivalent to n = n + 2
console.log(n);  // Output: 17
n = +2;  // Simply assigns +2 to n
console.log(n);  // Output: 2

// 3. JavaScript Comparison Operators
// Comparing values with relational operators
console.log(10 > 5);   // Output: true (10 is greater than 5)
console.log(10 === "5"); // Output: false (type checking also fails, since "5" is a string and 10 is a number)

// 4. JavaScript Logical Operators
// Using logical operators (AND, OR)
const a = true, b = false;
console.log(a && b);  // Output: false (both conditions need to be true for AND)
console.log(a || b);  // Output: true (either condition needs to be true for OR)

// 5. JavaScript Bitwise Operators
// Using bitwise AND operator on numbers
const result = 5 & 1;  // 5 (binary 101) AND 1 (binary 001) results in 1 (binary 001)
console.log(result);  // Output: 1

// 6. JavaScript Ternary Operator
// Ternary operator (conditional expression) for conditional decision
const age = 8;
const status = age >= 18 ? "Adult" : "Minor";  // If age >= 18, return "Adult", otherwise "Minor"
console.log(status);  // Output: Minor

// 7. JavaScript Comma Operator
// Using the comma operator to evaluate multiple expressions
let n1, n2;
const res = (n1 = 1, n2 = 2, n1 + n2);  // n1 and n2 are set first, then n1 + n2 is evaluated
console.log(res);  // Output: 3

// 8. JavaScript Unary Operators
// Using increment and decrement operators
let x = 5;
console.log(++x); // Pre-increment: first increments x, then prints 6
console.log(x--); // Post-decrement: prints x (6), then decrements it to 5
console.log(x);   // Output: 5 (after post-decrement)

// 9. JavaScript Relational Operators
// Using relational operators like 'in' and 'instanceof'
const obj = { length: 10 };
console.log("length" in obj); // Output: true (obj has the property 'length')
console.log([] instanceof Array); // Output: true (an empty array is an instance of Array)

// 10. JavaScript BigInt Operators
// Using BigInt for handling large integers
const big1 = 123456789012345678901234567890n;  // BigInt literal
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);  // Output: 1111111110111111111011111111100n

// 11. JavaScript String Operators
// Concatenating strings with + operator
const s1 = "Hi" + " " + "There!";  // Concatenation
console.log(s1);  // Output: "Hi There!"

// 12. JavaScript Chaining Operator (?.)
// Safe navigation with optional chaining (?.)
const obj1 = { name: "Tan", address: { city: "Delhi" } };
console.log(obj1.address?.city);  // Output: "Delhi" (accesses city property safely)
console.log(obj1.contact?.phone); // Output: undefined (since contact is not defined)
