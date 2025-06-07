/*
 * JavaScript Operators - A Comprehensive Guide
 * 
 * Operators perform mathematical, logical, and other computations in JavaScript.
 * This guide covers:
 * - Arithmetic Operators: Perform math operations
 * - Assignment Operators: Assign values to variables
 * - Comparison Operators: Compare values
 * - String Operators: Concatenate strings
 * - Logical Operators: Combine conditions
 * - Bitwise Operators: Operate on binary numbers
 * - Type Operators: Check variable types
 * 
 * Key Notes:
 * - Operators vary in behavior based on data types (e.g., numbers vs. strings)
 * - String concatenation uses the + operator
 * - Bitwise operations work on 32-bit signed integers
 * - Always consider type coercion in mixed-type operations
 * 
 */

// =============================================
// 1. ARITHMETIC OPERATORS
// =============================================

/*
 * Arithmetic operators perform mathematical calculations:
 * + (Addition), - (Subtraction), * (Multiplication), / (Division)
 * ** (Exponentiation, ES2016), % (Modulus), ++ (Increment), -- (Decrement)
 */

let a = 3;
let x = (100 + 50) * a; // Parentheses first, then multiplication
console.log("Arithmetic: (100 + 50) * 3 =", x); // 450

// Basic Operations
let num1 = 10;
let num2 = 4;
console.log("Addition: 10 + 4 =", num1 + num2); // 14
console.log("Subtraction: 10 - 4 =", num1 - num2); // 6
console.log("Multiplication: 10 * 4 =", num1 * num2); // 40
console.log("Division: 10 / 4 =", num1 / num2); // 2.5
console.log("Modulus: 10 % 4 =", num1 % num2); // 2
console.log("Exponentiation: 10 ** 2 =", num1 ** 2); // 100

// Increment and Decrement
let counter = 5;
counter++; // Increment by 1
console.log("Increment: counter++ =", counter); // 6
counter--; // Decrement by 1
console.log("Decrement: counter-- =", counter); // 5

// =============================================
// 2. ASSIGNMENT OPERATORS
// =============================================

/*
 * Assignment operators assign values to variables:
 * = (Assign), += (Add and assign), -= (Subtract and assign)
 * *= (Multiply and assign), /= (Divide and assign)
 * %= (Modulus and assign), **= (Exponentiation and assign)
 */

let assignX = 10;
console.log("Initial assignX:", assignX); // 10

assignX += 5; // assignX = assignX + 5
console.log("+=: assignX += 5 =", assignX); // 15

assignX -= 3; // assignX = assignX - 3
console.log("-=: assignX -= 3 =", assignX); // 12

assignX *= 2; // assignX = assignX * 2
console.log("*=: assignX *= 2 =", assignX); // 24

assignX /= 4; // assignX = assignX / 4
console.log("/=: assignX /= 4 =", assignX); // 6

assignX %= 5; // assignX = assignX % 5
console.log("%=: assignX %= 5 =", assignX); // 1

assignX **= 3; // assignX = assignX ** 3
console.log("**=: assignX **= 3 =", assignX); // 1

// =============================================
// 3. COMPARISON OPERATORS
// =============================================

/*
 * Comparison operators compare values and return booleans:
 * == (Equal to), === (Strict equal), != (Not equal), !== (Strict not equal)
 * > (Greater than), < (Less than), >= (Greater than or equal), <= (Less than or equal)
 * ? (Ternary operator, covered separately)
 */

let compX = 5;
let compY = "5";

console.log("== (loose equality): 5 == '5' =", compX == compY); // true
console.log("=== (strict equality): 5 === '5' =", compX === compY); // false
console.log("!= (loose not equal): 5 != '5' =", compX != compY); // false
console.log("!== (strict not equal): 5 !== '5' =", compX !== compY); // true
console.log(">: 5 > 4 =", compX > 4); // true
console.log("<: 5 < 6 =", compX < 6); // true
console.log(">=: 5 >= 5 =", compX >= 5); // true
console.log("<=: 5 <= 6 =", compX <= 6); // true

// String Comparison (Alphabetical)
let text1 = "A";
let text2 = "B";
console.log("String Comparison: 'A' < 'B' =", text1 < text2); // true

let textNum1 = "20";
let textNum2 = "5";
console.log("String Number Comparison: '20' < '5' =", textNum1 < textNum2); // true (alphabetical)

// =============================================
// 4. STRING OPERATORS
// =============================================

/*
 * The + operator concatenates strings.
 * The += operator can also concatenate and assign.
 * When mixing strings and numbers, the result is a string.
 */

let str1 = "John";
let str2 = "Doe";
let str3 = str1 + " " + str2;
console.log("String Concatenation: 'John' + ' ' + 'Doe' =", str3); // John Doe

let str4 = "What a very ";
str4 += "nice day";
console.log("String +=: 'What a very ' += 'nice day' =", str4); // What a very nice day

// Strings and Numbers
let numStr1 = 5 + 5;
let numStr2 = "5" + 5;
let numStr3 = "Hello" + 5;
console.log("Number + Number: 5 + 5 =", numStr1); // 10
console.log("String + Number: '5' + 5 =", numStr2); // 55
console.log("String + Number: 'Hello' + 5 =", numStr3); // Hello5

// =============================================
// 5. LOGICAL OPERATORS
// =============================================

/*
 * Logical operators combine conditions:
 * && (AND): True if both operands are true
 * || (OR): True if at least one operand is true
 * ! (NOT): Inverts the truth value
 */

let logicalA = true;
let logicalB = false;

console.log("AND: true && false =", logicalA && logicalB); // false
console.log("OR: true || false =", logicalA || logicalB); // true
console.log("NOT: !true =", !logicalA); // false

// Practical Example
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;
console.log("Can Drive (age >= 18 && hasLicense):", canDrive); // true

// =============================================
// 6. TYPE OPERATORS
// =============================================

/*
 * Type operators check variable types:
 * typeof: Returns the type of a variable as a string
 * instanceof: Checks if an object is an instance of a specific type
 */

let typeNum = 42;
let typeStr = "Hello";
let typeObj = { name: "Alice" };
let typeArr = [1, 2, 3];

console.log("typeof number:", typeof typeNum); // number
console.log("typeof string:", typeof typeStr); // string
console.log("typeof object:", typeof typeObj); // object
console.log("typeof array:", typeof typeArr); // object

console.log("instanceof Array:", typeArr instanceof Array); // true
console.log("instanceof Object:", typeObj instanceof Object); // true
console.log("instanceof String:", typeStr instanceof String); // false (primitive string)

// =============================================
// 7. BITWISE OPERATORS
// =============================================

/*
 * Bitwise operators work on 32-bit signed integers:
 * & (AND), | (OR), ~ (NOT), ^ (XOR)
 * << (Left shift), >> (Right shift), >>> (Unsigned right shift)
 * Operands are converted to 32-bit integers, and results are converted back.
 * Note: ~5 returns -6 due to 32-bit signed integer representation.
 */

let bitA = 5; // 0101 in binary
let bitB = 1; // 0001 in binary

console.log("Bitwise AND: 5 & 1 =", bitA & bitB); // 1 (0001)
console.log("Bitwise OR: 5 | 1 =", bitA | bitB); // 5 (0101)
console.log("Bitwise NOT: ~5 =", ~bitA); // -6 (inverts bits, signed)
console.log("Bitwise XOR: 5 ^ 1 =", bitA ^ bitB); // 4 (0100)
console.log("Bitwise Left Shift: 5 << 1 =", bitA << 1); // 10 (1010)
console.log("Bitwise Right Shift: 5 >> 1 =", bitA >> 1); // 2 (0010)
console.log("Bitwise Unsigned Right Shift: 5 >>> 1 =", bitA >>> 1); // 2 (0010)

// =============================================
// 8. TERNARY OPERATOR
// =============================================

/*
 * The ternary operator (?) is a shorthand for if-else:
 * condition ? valueIfTrue : valueIfFalse
 */

let ageForTernary = 20;
let access = ageForTernary >= 18 ? "Allowed" : "Denied";
console.log("Ternary: age >= 18 ? 'Allowed' : 'Denied' =", access); // Allowed