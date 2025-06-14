
//  JavaScript Numbers

// JavaScript has only one type of number. Numbers can be written with or without decimals.
// They can be positive, negative, or zero.

let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
let num3 = -7; // Negative number
let num4 = 0; // Zero
console.log("Integer:", num1); // 42
console.log("Floating-point number:", num2); // 3.14
console.log("Negative number:", num3); // -7
console.log("Zero:", num4); // 0    

// JavaScript Numbers are Always 64-bit Floating Point
/*
JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:
*/

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let intPrecision = 9007199254740991; // Maximum safe integer
let intPrecisionPlusOne = 9007199254740992; // One more than the maximum safe integer
console.log("Integer Precision:", intPrecision); // 9007199254740991
// The maximum number of decimals is 17

// Floating Precision
// Floating point arithmetic is not always 100% accurate:
let floatPrecision = 0.1 + 0.2; // This may not equal 0.3 due to floating point precision issues
console.log("Floating Point Precision:", floatPrecision); // 0.30000000000000004

// To solve the problem above, it helps to multiply and divide:
let preciseResult = (0.1 * 10 + 0.2 * 10) / 10; // Now it equals 0.3
console.log("Precise Result:", preciseResult); // 0.3

// Adding Numbers and Strings
// When you add a number and a string, JavaScript converts the number to a string:

/*
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.
*/
let numAndString = 5 + "5"; // This will concatenate, not add
console.log("Number and String Concatenation:", numAndString); // "55"

// If you add two numbers, the result will be a number:
let num1PlusNum2 = 5 + 5; // This will add the numbers
console.log("Number Addition:", num1PlusNum2); // 10

// If you add two strings, the result will be a string concatenation:
let str1 = "Hello";
let str2 = "World";
let strConcatenation = str1 + " " + str2; // This will concatenate the strings
console.log("String Concatenation:", strConcatenation); // "Hello World"


/**
 * Note
 * The JavaScript interpreter works from left to right.
 * First 10 + 20 is added because x and y are both numbers.
 * Then 30 + "30" is concatenated because z is a string.
 */ 

// Numeric Strings
// JavaScript strings can have numeric content:
let numericString = "123";
let result = numericString + 1; // This will concatenate, not add
console.log("Numeric String Concatenation:", result); // "1231"

// To convert a numeric string to a number, you can use the Number() function:
let convertedNumber = Number(numericString) + 1; // Now it will add
console.log("Converted Number Addition:", convertedNumber); // 124
// parseInt() or parseFloat() to convert strings to numbers:
let parsedInt = parseInt(numericString) + 1; // Converts to integer
console.log("Parsed Integer Addition:", parsedInt); // 124
let parsedFloat = parseFloat(numericString) + 1; // Converts to floating-point number

// console.log("Parsed Float Addition:", parsedFloat); // 124
// Note: parseInt() and parseFloat() can handle numeric strings with decimals or other characters, but will stop parsing at the first non-numeric character.

// NaN - Not a Number
// NaN is a special value in JavaScript that represents an invalid number.
let invalidNumber = "Hello" / 2; // This will result in NaN
console.log("Invalid Number Result:", invalidNumber); // NaN

// Check if a value is NaN using the isNaN() function:
let isNanCheck = isNaN(invalidNumber); // This will return true
console.log("Is NaN Check:", isNanCheck); // true

// NaN is a number: typeof NaN returns number:


// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let largeNumber = 1 / 0; // This will result in Infinity
console.log("Large Number Result:", largeNumber); // Infinity
let negativeLargeNumber = -1 / 0; // This will result in -Infinity
console.log("Negative Large Number Result:", negativeLargeNumber); // -Infinity

// dont use Infinity in calculations, as it can lead to unexpected results:

// Infinity is a number: typeof Infinity returns number.