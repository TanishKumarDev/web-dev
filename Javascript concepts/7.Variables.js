/*
 * JavaScript Variables - A Comprehensive Guide
 * 
 * Variables are containers for storing data in JavaScript.
 * This guide covers:
 * - Four ways to declare variables: automatic, var, let, const
 * - Best practices for variable declaration
 * - Identifiers and naming rules
 * - Assignment operator vs. equality operator
 * - Basic data types (numbers, strings)
 * - Arithmetic operations and string concatenation
 * - Special characters in identifiers ($ and _)
 * - Variable re-declaration and undefined values
 * 
 * Key Notes:
 * - Always declare variables before use (good practice)
 * - Use const for unchanging values, let for reassignable values
 * - Avoid var unless supporting very old browsers (pre-2015)
 * - Identifiers are case-sensitive and follow specific naming rules
 * - JavaScript handles numbers and strings differently in operations
 * 
 * Current Date: June 08, 2025
 */

// =============================================
// 1. VARIABLE DECLARATION METHODS
// =============================================

/*
 * JavaScript supports four ways to declare variables:
 * - Automatic: Undeclared variables (not recommended)
 * - var: Function-scoped, used pre-2015, avoid for modern code
 * - let: Block-scoped, reassignable, introduced in 2015
 * - const: Block-scoped, non-reassignable, introduced in 2015
 * 
 * Always declare variables to avoid errors and improve code clarity.
 */

// Automatic Declaration (Not Recommended)
// x = 5; // Automatically declared, global scope
// y = 6;
// z = x + y;
// console.log("Automatic Declaration - x:", x, "y:", y, "z:", z); // x: 5, y: 6, z: 11

// Using var (Legacy, Avoid Unless Supporting Old Browsers)
var varX = 5;
var varY = 6;
var varZ = varX + varY;
console.log("var Declaration - x:", varX, "y:", varY, "z:", varZ); // x: 5, y: 6, z: 11

// Using let (Modern, Reassignable)
let letX = 5;
let letY = 6;
let letZ = letX + letY;
console.log("let Declaration - x:", letX, "y:", letY, "z:", letZ); // x: 5, y: 6, z: 11

// Using const (Modern, Non-Reassignable)
const constX = 5;
const constY = 6;
const constZ = constX + constY;
console.log("const Declaration - x:", constX, "y:", constY, "z:", constZ); // x: 5, y: 6, z: 11

// Mixed Example (const and let)
const price1 = 5; // Constant value
const price2 = 6; // Constant value
let total = price1 + price2; // Reassignable
console.log("Mixed Example - price1:", price1, "price2:", price2, "total:", total); // price1: 5, price2: 6, total: 11

// Reassigning let
total = 20; // Valid
console.log("Reassigned total:", total); // total: 20

// Reassigning const (will cause error)
// constX = 10; // Error: Assignment to constant variable

// =============================================
// 2. WHEN TO USE var, let, OR const
// =============================================

/*
 * Best Practices:
 * 1. Always declare variables
 * 2. Use const for values that won't change (including arrays/objects)
 * 3. Use let when reassignment is needed
 * 4. Use var only for legacy browser support (pre-2015)
 * 5. Declare variables at the start of a script for clarity
 */

const fixedValue = 100; // Use const for fixed values
let counter = 0; // Use let for values that change
counter += 1;
console.log("const fixedValue:", fixedValue, "let counter:", counter); // fixedValue: 100, counter: 1

// var for legacy code (not recommended)
var oldStyle = "Legacy";
console.log("var oldStyle:", oldStyle); // oldStyle: Legacy

// =============================================
// 3. JAVASCRIPT IDENTIFIERS
// =============================================

/*
 * Identifiers are unique names for variables.
 * Rules:
 * - Can contain letters, digits, underscores (_), and dollar signs ($)
 * - Must begin with a letter, _, or $
 * - Case-sensitive (x and X are different)
 * - Cannot use reserved words (e.g., let, const, function)
 * 
 * Examples:
 * - Valid: name, $price, _count, totalVolume
 * - Invalid: 1name, let, @price
 */

let personName = "John Doe"; // Descriptive identifier
let $price = 200; // Dollar sign identifier
let _count = 10; // Underscore identifier
console.log("Identifiers - personName:", personName, "$price:", $price, "_count:", _count);

// Case sensitivity
let y = 5;
let Y = 10;
console.log("Case Sensitivity - y:", y, "Y:", Y); // y: 5, Y: 10

// =============================================
// 4. ASSIGNMENT OPERATOR
// =============================================

/*
 * The = operator assigns values to variables.
 * - Not an "equal to" operator (use == or === for equality)
 * - Example: x = x + 5 increments x by 5
 */

let assignX = 10;
assignX = assignX + 5; // Assigns 15 to assignX
console.log("Assignment - assignX:", assignX); // assignX: 15

// Shorthand
assignX += 5; // Equivalent to assignX = assignX + 5
console.log("Shorthand Assignment - assignX:", assignX); // assignX: 20

// =============================================
// 5. DATA TYPES
// =============================================

/*
 * JavaScript variables can hold:
 * - Numbers: Integers or decimals, no quotes
 * - Strings: Text, in single or double quotes
 * - Numbers in quotes are treated as strings
 * 
 * Declaring variables sets their initial value (or undefined if unassigned).
 */

const pi = 3.14; // Number
let person = "John Doe"; // String
let answer = 'Yes I am!'; // String with single quotes
let quotedNumber = "100"; // String, not a number
console.log("Data Types - pi:", pi, "person:", person, "answer:", answer, "quotedNumber:", quotedNumber);

// Undefined variable
let carName;
console.log("Undefined Variable - carName:", carName); // carName: undefined

// Assigning after declaration
carName = "Volvo";
console.log("Assigned carName:", carName); // carName: Volvo

// Declaring and assigning
let carModel = "Toyota";
console.log("Declared and Assigned - carModel:", carModel); // carModel: Toyota

// =============================================
// 6. MULTIPLE VARIABLE DECLARATIONS
// =============================================

/*
 * Declare multiple variables in one statement using commas.
 * Can span multiple lines for readability.
 */

let student = "Alice", vehicle = "Honda", cost = 300;
console.log("Multiple Declaration - student:", student, "vehicle:", vehicle, "cost:", cost);

// Multi-line declaration
let employee = "Bob",
    brand = "Tesla",
    value = 500;
console.log("Multi-line Declaration - employee:", employee, "brand:", brand, "value:", value);

// =============================================
// 7. RE-DECLARING VARIABLES
// =============================================

/*
 * var allows re-declaration without losing value (legacy behavior).
 * let and const do not allow re-declaration (causes error).
 */

var redeclare = "Initial";
var redeclare; // No value loss
console.log("var Redeclaration - redeclare:", redeclare); // redeclare: Initial

// let redeclaration (will cause error)
// let redeclareLet = "Test";
// let redeclareLet; // Error: Identifier 'redeclareLet' has already been declared

// =============================================
// 8. ARITHMETIC AND CONCATENATION
// =============================================

/*
 * Arithmetic: Use operators like +, -, *, / with numbers.
 * String Concatenation: + combines strings.
 * Mixing types can lead to concatenation instead of arithmetic.
 */

let arithX = 5 + 2 + 3; // Number arithmetic
console.log("Arithmetic - arithX:", arithX); // arithX: 10

let concatX = "John" + " " + "Doe"; // String concatenation
console.log("Concatenation - concatX:", concatX); // concatX: John Doe

let mixed1 = "5" + 2 + 3; // Starts with string, concatenates
console.log("Mixed Types 1 - mixed1:", mixed1); // mixed1: 523

let mixed2 = 2 + 3 + "5"; // Numbers first, then concatenates
console.log("Mixed Types 2 - mixed2:", mixed2); // mixed2: 55

// =============================================
// 9. SPECIAL CHARACTERS IN IDENTIFIERS
// =============================================

/*
 * Dollar sign ($) and underscore (_) are valid in identifiers.
 * - $: Used in libraries like jQuery, less common in plain JS
 * - _: Often used for "private" variables or aliases
 */

let $greeting = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log("Dollar Sign - $greeting:", $greeting, "$$$:", $$$, "$myMoney:", $myMoney);

let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log("Underscore - _lastName:", _lastName, "_x:", _x, "_100:", _100);

// =============================================
// 10. EXAMPLE: HTML OUTPUT
// =============================================

/*
 * Variables can be used to update HTML content.
 * Example: Assign a value to a variable and display it in a <p> element.
 * Note: This requires an HTML element with id="demo" to work in a browser.
 */

// let carDisplay = "Volvo";
// document.getElementById("demo").innerHTML = carDisplay;
// console.log("HTML Output - carDisplay:", carDisplay); // Commented to avoid error in non-browser environment