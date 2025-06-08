// === Understanding Operator Precedence ===
// Operator precedence is like a recipe: it tells JavaScript which ingredients (operations) to process first.
// - Each operator has a precedence value (1 to 18); higher numbers mean higher priority (e.g., 18 for parentheses).
// - Why the numbers (15, 17, etc.)? They come from JavaScript’s precedence table, showing which operators “win” when evaluated.
// - Why confusing? Many operators and subtle differences (e.g., i++ vs. ++i) can lead to unexpected results.
// Analogy: Think of a kitchen where chefs follow a strict order: chop (high precedence, e.g., * = 12) before mix (low precedence, e.g., + = 11).
// Tip: Use parentheses ( ) to control order explicitly and avoid memorizing precedence numbers.

// === Operator Precedence Reference Table ===
// Key operators and their precedence values (higher number = evaluated first):
// 18: ( ) - Parentheses
// 17: ., [], ?. - Member access, optional chaining
// 17: () - Function call
// 15: i++, i-- - Postfix increment/decrement
// 14: ++i, --i, !, ~, +, -, typeof, delete - Prefix and unary operators
// 13: ** - Exponentiation
// 12: *, /, % - Multiplication, division, remainder
// 11: +, - - Addition, subtraction, concatenation
// 10: <<, >>, >>> - Bitwise shifts
// 9: in, instanceof - Relational
// 8: <, <=, >, >=, ==, ===, !=, !== - Comparisons
// 4: && - Logical AND
// 3: ||, ?? - Logical OR, nullish coalescing
// 2: =, +=, *=, etc. - Assignments
// 1: , - Comma

console.log("=== JavaScript Operator Precedence Examples ===");

// === Basic Precedence: Arithmetic Operations ===
// Multiplication (*) and division (/) (precedence 12) are evaluated before addition (+) and subtraction (-) (precedence 11).

console.log("\n=== Arithmetic Precedence ===");
let x = 100 + 50 * 3;
console.log(x); // 250
// Reason: * (precedence 12) is higher than + (precedence 11), so 50 * 3 = 150 first, then 100 + 150 = 250.
// Logic: Higher precedence of * ensures multiplication happens before addition.

x = (100 + 50) * 3;
console.log(x); // 450
// Reason: Parentheses (precedence 18) force 100 + 50 = 150 first, then 150 * 3 = 450.
// Logic: Parentheses override default precedence, ensuring addition happens first.

x = 100 / 50 * 3;
console.log(x); // 6
// Reason: / and * (both precedence 12) are evaluated left-to-right: 100 / 50 = 2, then 2 * 3 = 6.
// Logic: Same-precedence operators follow left-to-right order, unlike higher/lower precedence.

// === Member Access and Function Calls (Precedence 17) ===
// Operators like ., [], ?. (optional chaining), and () (function call) have high precedence (17).

console.log("\n=== Member Access and Function Calls ===");
const person = { name: "John", age: 30 };
console.log(person.name); // "John"
// Reason: . (precedence 17) is higher than most operators, so person.name is resolved first.
// Logic: Ensures property access happens before lower-precedence operations like + or &&.

const arr = [1, 2, 3];
console.log(arr[1]); // 2
// Reason: [] (precedence 17) accesses index 1 before other operations.
// Logic: High precedence prioritizes array indexing.

function myFunction() { return 42; }
console.log(myFunction()); // 42
// Reason: () (precedence 17) calls the function before using its result in lower-precedence operations.
// Logic: Function calls are executed early due to their high precedence.

// === Increment Operators (Precedence 15 and 14) ===
// Postfix (i++, i--) has higher precedence (15) than prefix (++i, --i) (14).

console.log("\n=== Increment Operators ===");
let i = 5;
console.log(i++ + 2); // 7
// Reason: i++ (precedence 15) returns 5 (original value) and increments i to 6, then 5 + 2 = 7.
// Logic: Postfix increments return the original value, evaluated before + (precedence 11).

console.log(++i + 2); // 8
// Reason: ++i (precedence 14) increments i to 7 first, then 7 + 2 = 8.
// Logic: Prefix increments return the new value, still evaluated before +.

// === Unary Operators (Precedence 14) ===
// Operators like !, ~, +, -, typeof, void, delete (precedence 14) act on a single operand.

console.log("\n=== Unary Operators ===");
let y = "5";
console.log(+y); // 5
// Reason: Unary + (precedence 14) converts "5" to 5 before lower-precedence operations.
// Logic: High precedence ensures type conversion happens first.

console.log(!true); // false
// Reason: ! (precedence 14) negates true to false before other operations.
// Logic: Logical NOT is evaluated early due to high precedence.

console.log(~5); // -6
// Reason: ~ (precedence 14) inverts bits of 5 (0101) to -6 in two’s complement, before other operations.
// Logic: Bitwise NOT is prioritized, affecting the result early.

console.log(typeof y); // "string"
// Reason: typeof (precedence 14) returns the type of y before lower-precedence operations.
// Logic: Type checking is resolved early.

let car = { color: "blue" };
delete car.color;
console.log(car.color); // undefined
// Reason: delete (precedence 14) removes the property before other operations.
// Logic: Property deletion is prioritized due to high precedence.

// === Arithmetic Operators (Precedence 13 to 11) ===
// Exponentiation (**), multiplication (*), division (/), remainder (%), addition (+), subtraction (-).

console.log("\n=== More Arithmetic Operators ===");
console.log(10 ** 2); // 100
// Reason: ** (precedence 13) is higher than *, /, +, -, so 10 ** 2 = 100 is evaluated first.
// Logic: Exponentiation takes priority over other arithmetic operators.

console.log(10 % 3); // 1
// Reason: % (precedence 12) computes the remainder (10 - 9 = 1) before + or - (precedence 11).
// Logic: Same precedence as * and /, evaluated left-to-right.

console.log("John" + " " + "Doe"); // "John Doe"
// Reason: + (precedence 11) for strings performs concatenation after higher-precedence operations.
// Logic: Concatenation combines strings, with lower priority than * or /.

// === Shift Operators (Precedence 10) ===
// Bitwise shifts (<<, >>, >>>) have precedence 10, evaluated after arithmetic.

console.log("\n=== Shift Operators ===");
console.log(5 << 1); // 10
// Reason: << (precedence 10) shifts 5 (0101) left to 1010 (10), after arithmetic operations.
// Logic: Shifts occur before comparisons but after *, /, +, -.

console.log(5 >> 1); // 2
// Reason: >> (precedence 10) shifts 5 (0101) right to 0010 (2), preserving sign.
// Logic: Sign-preserving shift is evaluated after arithmetic.

console.log(5 >>> 1); // 2
// Reason: >>> (precedence 10) shifts 5 (0101) right to 0010 (2), adding zeros.
// Logic: Zero-fill shift treats the number as unsigned.

// === Relational and Comparison Operators (Precedence 9 and 8) ===
// in, instanceof (9); <, <=, >, >=, ==, ===, !=, !== (8).

console.log("\n=== Relational and Comparison Operators ===");
console.log("PI" in Math); // true
// Reason: in (precedence 9) checks if "PI" is a property of Math, after shifts but before comparisons.
// Logic: Relational operators are prioritized over comparisons.

let arr2 = [1, 2, 3];
console.log(arr2 instanceof Array); // true
// Reason: instanceof (precedence 9) checks if arr2 is an Array instance, before comparisons.
// Logic: Type checking is resolved early.

console.log(5 < 10); // true
// Reason: < (precedence 8) compares 5 and 10, after relational operators.
// Logic: Comparison operators are evaluated after in and instanceof.

console.log(5 === "5"); // false
// Reason: === (precedence 8) checks strict equality (type and value), after relational operators.
// Logic: Strict comparison ensures no type coercion.

// === Logical Operators (Precedence 4 and 3) ===
// && (4), || (3), ?? (3) for logical operations.

console.log("\n=== Logical Operators ===");
console.log(true && false); // false
// Reason: && (precedence 4) evaluates to false if either operand is false, before || or ??.
// Logic: Logical AND is prioritized over OR and nullish coalescing.

console.log(true || false); // true
// Reason: || (precedence 3) evaluates to true if either operand is true, after &&.
// Logic: Lower precedence than AND but still before assignments.

console.log(undefined ?? "default"); // "default"
// Reason: ?? (precedence 3) returns the right operand if the left is null or undefined, after &&.
// Logic: Nullish coalescing is useful for default values.

// === Assignment Operators (Precedence 2) ===
// Assignment operators (=, +=, *=, etc.) are evaluated last.

console.log("\n=== Assignment Operators ===");
let z = 5;
z += 3;
console.log(z); // 8
// Reason: += (precedence 2) adds 3 to z and assigns the result, after all other operations.
// Logic: Assignments are performed last, storing the final result.

// === Comma Operator (Precedence 1) ===
// The comma operator evaluates expressions and returns the last one.

console.log("\n=== Comma Operator ===");
x = (1 + 2, 3 + 4);
console.log(x); // 7
// Reason: The comma operator (precedence 1) evaluates 1 + 2, then 3 + 4, returning 7, after all else.
// Logic: Lowest precedence, evaluates multiple expressions in sequence.