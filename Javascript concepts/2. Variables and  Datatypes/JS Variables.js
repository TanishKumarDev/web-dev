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
x = 5; // Automatically declared, global scope
y = 6;
z = x + y;
console.log("Automatic Declaration - x:", x, "y:", y, "z:", z); // x: 5, y: 6, z: 11


// Using var (Legacy, Avoid Unless Supporting Old Browsers)
var varX = 1;
var varY = 2;
var varZ = varX + varY;
console.log("var Declaration - varX:", varX, "varY:", varY, "varZ:", varZ); // varX: 1, varY: 2, varZ: 3

// Using let (Modern, Reassignable)
let letX = 10;
let letY = 20;
let letZ = letX + letY;
console.log("let Declaration - letX:", letX, "letY:", letY, "letZ:", letZ); // letX: 10, letY: 20, letZ: 30

// Using const (Modern, Non-Reassignable)
const constX = 100;
const constY = 200;
const constZ = constX + constY;
console.log("const Declaration - constX:", constX, "constY:", constY, "constZ:", constZ); // constX: 100, constY: 200, constZ: 300

// Mixed Example (const and let)
const price1 = 50;
const price2 = 100;
let totalPrice = price1 + price2;
console.log("Mixed Declaration - price1:", price1, "price2:", price2, "totalPrice:", totalPrice); // price1: 50, price2: 100, totalPrice: 150

// Reasssing let variable
let letA = 5;
letA = 10; // Reassigning let variable
console.log("Reassigned letA:", letA); // Reassigned letA: 10


// Reassigning const variable (will throw an error)

// Reassigning const (will cause error)
// constX = 10; // Error: Assignment to constant variable // Uncommenting this line will throw an error
try {
    const constA = 15;
    constA = 20; // This will throw an error
}
catch (error) {
    console.error("Error reassigning constA:", error.message); // Error reassigning constA: Assignment to constant variable.
}


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

const fixedValue = 42; // Use const for fixed values
let counter = 0; // Use let for values that will change
counter++; // Increment counter
console.log("Counter after increment:", counter); // Counter after increment: 1

// var for legacy support (not recommended)
var legacyVariable = "This is a legacy variable"; // Use var only if necessary
console.log("Legacy Variable:", legacyVariable); // Legacy Variable: This is a legacy variable

// what is legacy code 
// Legacy code refers to older code that may use outdated practices or technologies, such as using 'var' for variable declaration.
// what is legacyVariable?
// Legacy variable is a variable declared using 'var', which is function-scoped and can lead to issues in modern JavaScript.

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

let validIdentifier = "This is a valid identifier"; // Valid identifier
let $price = 99.99; // Valid identifier with dollar sign
let _count = 10; // Valid identifier with underscore
let totalVolume = 1000; // Valid identifier with multiple words
// let invalidIdentifier = 1name; // Invalid identifier (starts with a digit)

console.log("Valid Identifiers - validIdentifier:", validIdentifier, "$price:", $price, "_count:", _count, "totalVolume:", totalVolume); // Outputs valid identifiers
// Invalid identifiers will throw an error if uncommented
// console.log("Invalid Identifier - invalidIdentifier:", invalidIdentifier); // Uncommenting this line will throw an error


// Case sensitivity
let CaseY = 5;
let Casey = 10;
console.log("Case Sensitivity - CaseY:", CaseY, "Casey:", Casey); // CaseY: 5, Casey: 10
// Identifiers cannot be reserved words
// let let = 20; // This will throw an error if uncommented

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

// Assignment vs. Equality
let a = 5; // Assignment
let b = 10; // Assignment
let isEqual = (a == b); // Equality check (false)
console.log("Assignment vs. Equality - a:", a, "b:", b, "isEqual:", isEqual); // Outputs: a: 5, b: 10, isEqual: false

// Using assignment operator to increment
assignX += 5; // Incrementing assignX by 5
console.log("After Increment - assignX:", assignX); // Outputs: After Increment - assignX: 15


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


// undefined variable
let undefinedVariable; // Declared but not assigned
console.log("Undefined Variable - undefinedVariable:", undefinedVariable); // Outputs: undefinedVariable: undefined

// Assigning after declaration
undefinedVariable = "Now I have a value"; // Assigning a value later

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
var reDeclareVar = "Initial Value";
var reDeclareVar = "Re-declared Value"; // Allowed with var
console.log("Re-declared var - reDeclareVar:", reDeclareVar); // Outputs: Re-declared var - reDeclareVar: Re-declared Value


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

let mixed3 = "5" + (2 + 3); // Parentheses force addition first
console.log("Mixed Types 3 - mixed3:", mixed3); // mixed3: 55

let mixed4 = "5" + 2 * 3; // Multiplication before concatenation
console.log("Mixed Types 4 - mixed4:", mixed4); // mixed4: 511 (2 * 3 = 6, then concatenated with "5")

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