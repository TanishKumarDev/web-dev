/*
 * JavaScript Data Types - A Comprehensive Guide
 * 
 * JavaScript has 8 data types:
 * 1. String: Text or character sequences
 * 2. Number: Integers or floating-point numbers
 * 3. BigInt: Large integers beyond Number's safe limit
 * 4. Boolean: True or false values
 * 5. Undefined: Variables without a value
 * 6. Null: Intentional absence of value
 * 7. Symbol: Unique identifiers (ES2015)
 * 8. Object: Collections of key-value pairs, including arrays, dates, etc.
 * 
 * Key Notes:
 * - JavaScript is dynamically typed: variables can hold any data type
 * - Mixing types (e.g., number + string) may lead to type coercion
 * - Use typeof to check a variable's type
 * - Undefined and empty values (e.g., "") are distinct
 * 
 */

// =============================================
// 1. STRING DATA TYPE
// =============================================

/*
 * Strings represent text and are enclosed in single ('') or double ("") quotes.
 * Quotes inside strings must differ from the enclosing quotes.
 * Strings are immutable but can be reassigned.
 */

let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes
let answer1 = "It's alright"; // Single quote inside double quotes
let answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes

console.log("String (double quotes):", carName1); // Volvo XC60
console.log("String (single quotes):", carName2); // Volvo XC60
console.log("String with inner quotes:", answer1); // It's alright
console.log("String with inner single quotes:", answer2); // He is called 'Johnny'
console.log("String with inner double quotes:", answer3); // He is called "Johnny"

// String Concatenation
let strConcat = "Hello" + " " + "World";
console.log("String Concatenation:", strConcat); // Hello World

// =============================================
// 2. NUMBER DATA TYPE
// =============================================

/*
 * Numbers are 64-bit floating-point values, used for integers and decimals.
 * Numbers can use exponential notation for very large/small values.
 * JavaScript has only one number type (no separate int/float).
 */

let length = 16; // Integer
let weight = 7.5; // Decimal
let largeNum = 123e5; // Exponential: 12300000
let smallNum = 123e-5; // Exponential: 0.00123

console.log("Number (integer):", length); // 16
console.log("Number (decimal):", weight); // 7.5
console.log("Number (exponential large):", largeNum); // 12300000
console.log("Number (exponential small):", smallNum); // 0.00123

// Number + String Coercion
let mixed1 = 16 + "Volvo"; // Number + String = String
let mixed2 = "Volvo" + 16; // String + Number = String
let mixed3 = 16 + 4 + "Volvo"; // Numbers first, then string
let mixed4 = "Volvo" + 16 + 4; // String first, all treated as strings

console.log("Number + String:", mixed1); // 16Volvo
console.log("String + Number:", mixed2); // Volvo16
console.log("Number + Number + String:", mixed3); // 20Volvo
console.log("String + Number + Number:", mixed4); // Volvo164

// =============================================
// 3. BIGINT DATA TYPE
// =============================================

/*
 * BigInt (ES2020) stores large integers beyond Number's safe limit (2^53 - 1).
 * Created using BigInt() or appending 'n' to a number literal.
 * Cannot be mixed with Number in operations without conversion.
 */

let bigNum = BigInt("123456789012345678901234567890");
let bigNum2 = 123456789012345678901234567890n;

console.log("BigInt (using BigInt):", bigNum); // 123456789012345678901234567890
console.log("BigInt (using n):", bigNum2); // 123456789012345678901234567890

// BigInt vs Number
// let invalid = bigNum + 5; // Error: Cannot mix BigInt and Number
let valid = bigNum + 5n;
console.log("BigInt + BigInt:", valid); // 123456789012345678901234567895

// =============================================
// 4. BOOLEAN DATA TYPE
// =============================================

/*
 * Booleans represent true or false values.
 * Often used in conditional statements and comparisons.
 */

let boolX = true;
let boolY = false;
let comparison1 = 5 == 5; // true
let comparison2 = 5 == 6; // false

console.log("Boolean (true):", boolX); // true
console.log("Boolean (false):", boolY); // false
console.log("Comparison (5 == 5):", comparison1); // true
console.log("Comparison (5 == 6):", comparison2); // false

// =============================================
// 5. UNDEFINED DATA TYPE
// =============================================

/*
 * Undefined indicates a variable that has been declared but not assigned a value.
 * Type and value are both undefined.
 * Variables can be explicitly set to undefined.
 */

let car;
console.log("Undefined Variable:", car); // undefined
console.log("Type of Undefined:", typeof car); // undefined

car = undefined; // Explicitly set to undefined
console.log("Explicitly Undefined:", car); // undefined
console.log("Type of Explicitly Undefined:", typeof car); // undefined

// =============================================
// 6. NULL DATA TYPE
// =============================================

/*
 * Null represents the intentional absence of a value.
 * Type is 'object' (historical quirk in JavaScript).
 * Used to indicate "no value" or "empty".
 */

let nullValue = null;
console.log("Null Value:", nullValue); // null
console.log("Type of Null:", typeof nullValue); // object

// Null vs Undefined
console.log("Null == Undefined:", null == undefined); // true (loose equality)
console.log("Null === Undefined:", null === undefined); // false (strict equality)

// =============================================
// 7. SYMBOL DATA TYPE
// =============================================

/*
 * Symbol (ES2015) creates unique identifiers, often used as object keys.
 * Each Symbol is unique, even with the same description.
 */

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol 1:", sym1.toString()); // Symbol(id)
console.log("Symbol 2:", sym2.toString()); // Symbol(id)
console.log("Symbol Equality:", sym1 === sym2); // false (unique)

// Using Symbol as Object Key
let objWithSymbol = {};
objWithSymbol[sym1] = "Value1";
console.log("Object with Symbol Key:", objWithSymbol[sym1]); // Value1

// =============================================
// 8. OBJECT DATA TYPE
// =============================================

/*
 * Objects are collections of key-value pairs, enclosed in curly braces {}.
 * Includes built-in types like objects, arrays, dates, maps, sets, etc.
 * Properties are accessed using dot (.) or bracket ([]) notation.
 */

const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log("Object:", person);
console.log("Object Property (dot):", person.firstName); // John
console.log("Object Property (bracket):", person["lastName"]); // Doe

// Array Object
const cars = ["Saab", "Volvo", "BMW"];
console.log("Array:", cars);
console.log("Array Element (index 0):", cars[0]); // Saab

// Date Object
const date = new Date("2022-03-25");
console.log("Date:", date); // 2022-03-25T00:00:00.000Z

// =============================================
// 9. DYNAMIC TYPING
// =============================================

/*
 * JavaScript is dynamically typed: variables can hold different types over time.
 * No need to declare type; type is determined at runtime.
 */

let dynamic;
console.log("Dynamic (undefined):", dynamic, "Type:", typeof dynamic); // undefined, undefined

dynamic = 5;
console.log("Dynamic (number):", dynamic, "Type:", typeof dynamic); // 5, number

dynamic = "John";
console.log("Dynamic (string):", dynamic, "Type:", typeof dynamic); // John, string

// =============================================
// 10. TYPEOF OPERATOR
// =============================================

/*
 * The typeof operator returns the type of a variable or expression as a string.
 * Useful for debugging and type checking.
 * Note: typeof null returns "object" (historical quirk).
 */

console.log("typeof empty string:", typeof ""); // string
console.log("typeof string:", typeof "John Doe"); // string
console.log("typeof number:", typeof 314); // number
console.log("typeof expression:", typeof (3 + 4)); // number
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null); // object
console.log("typeof array:", typeof [1, 2, 3]); // object
console.log("typeof object:", typeof { name: "John" }); // object

// =============================================
// 11. EMPTY VALUES
// =============================================

/*
 * Empty values (e.g., "") are distinct from undefined and null.
 * An empty string has a valid value and type ("string").
 */

let emptyString = "";
console.log("Empty String:", emptyString); // ""
console.log("Type of Empty String:", typeof emptyString); // string

// Compare with undefined
let undefinedVar;
console.log("Undefined vs Empty:", emptyString === undefinedVar); // false

// Compare with null
let nullVar = null;
console.log("Null vs Empty:", emptyString === nullVar); // false