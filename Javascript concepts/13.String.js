/*
 * JavaScript Strings - A Comprehensive Guide
 * 
 * Strings are used to store and manipulate text in JavaScript. They are immutable,
 * meaning their content cannot be changed, but variables can be reassigned.
 * Strings are enclosed in single ('') or double ("") quotes, and can contain
 * special characters using escape sequences.
 * 
 * This guide covers:
 * 1. Creating Strings: Using quotes and template literals
 * 2. String Properties: Accessing length
 * 3. String Methods: Common methods for manipulation
 * 4. String Concatenation: Combining strings
 * 5. Template Literals: Modern string interpolation (ES2015)
 * 6. Escape Sequences: Handling special characters
 * 7. Strings and Type Coercion: Behavior with other types
 * 
 * Key Notes:
 * - Strings are primitive but have object-like methods
 * - Use template literals for cleaner string interpolation
 * - Strings are case-sensitive
 * - Mixing strings with numbers results in concatenation
 */

// =============================================
// 1. CREATING STRINGS
// =============================================

/*
 * Strings can be created using single or double quotes.
 * Both are equivalent, but quotes inside strings must differ from enclosing quotes.
 * Empty strings ("") are valid and have a type of "string".
 */

let str1 = "Hello, World!"; // Double quotes
let str2 = 'JavaScript'; // Single quotes
let emptyStr = ""; // Empty string
let mixedQuotes = "He said 'Hi!'"; // Single quotes inside double quotes

console.log("Double quotes string:", str1); // Hello, World!
console.log("Single quotes string:", str2); // JavaScript
console.log("Empty string:", emptyStr); // ""
console.log("Mixed quotes:", mixedQuotes); // He said 'Hi!'
console.log("Type of empty string:", typeof emptyStr); // string

// =============================================
// 2. STRING PROPERTIES
// =============================================

/*
 * The primary string property is length, which returns the number of characters.
 * Includes spaces and special characters.
 */

let text = "JavaScript";
console.log("Length of 'JavaScript':", text.length); // 10

let sentence = "Hello, World!";
console.log("Length of 'Hello, World!':", sentence.length); // 13 (includes space and !)

// =============================================
// 3. STRING METHODS
// =============================================

/*
 * Strings have built-in methods for manipulation (non-mutating; return new strings).
 * Common methods:
 * - toUpperCase(), toLowerCase(): Change case
 * - trim(): Remove leading/trailing whitespace
 * - charAt(index), slice(start, end): Extract characters or substrings
 * - includes(), startsWith(), endsWith(): Search for substrings
 * - replace(), replaceAll(): Replace text
 * - split(): Convert string to array
 */

let sample = "  JavaScript is Fun!  ";

console.log("Original:", sample); //   JavaScript is Fun!  
console.log("toUpperCase:", sample.toUpperCase()); // JAVASCRIPT IS FUN!
console.log("toLowerCase:", sample.toLowerCase()); // javascript is fun!
console.log("trim:", sample.trim()); // JavaScript is Fun!
console.log("charAt(3):", sample.charAt(3)); // J
console.log("slice(2, 12):", sample.slice(2, 12)); // JavaScript
console.log("includes('Fun'):", sample.includes("Fun")); // true
console.log("startsWith('  J'):", sample.startsWith("  J")); // true
console.log("endsWith('!  '):", sample.endsWith("!  ")); // true
console.log("replace('Fun', 'Awesome'):", sample.replace("Fun", "Awesome")); //   JavaScript is Awesome!  
console.log("replaceAll('a', 'X'):", sample.replaceAll("a", "X")); //   JXvXScript is Fun!  
console.log("split(' '):", sample.split(" ")); // ["", "", "JavaScript", "is", "Fun!", "", ""]

// =============================================
// 4. STRING CONCATENATION
// =============================================

/*
 * Concatenation combines strings using the + operator or concat() method.
 * += can also be used for concatenation and assignment.
 * Mixing strings with other types (e.g., numbers) results in string coercion.
 */

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Concatenation (+):", fullName); // John Doe

let greeting = "Hello";
greeting += ", World!";
console.log("Concatenation (+=):", greeting); // Hello, World!

let concatMethod = firstName.concat(" ", lastName);
console.log("concat method:", concatMethod); // John Doe

// String + Number coercion
let mixed = "Number: " + 42;
console.log("String + Number:", mixed); // Number: 42

// =============================================
// 5. TEMPLATE LITERALS
// =============================================

/*
 * Template literals (ES2015) use backticks (`) and ${} for interpolation.
 * Allow multiline strings and dynamic expressions.
 * Cleaner than concatenation for complex strings.
 */

let name = "Alice";
let age = 25;
let templateStr = `Hello, ${name}! You are ${age} years old.`;
console.log("Template Literal:", templateStr); // Hello, Alice! You are 25 years old.

// Multiline template literal
let multiLine = `
  Line 1
  Line 2
  Line 3`;
console.log("Multiline Template Literal:", multiLine);
// 
//   Line 1
//   Line 2
//   Line 3

// Expression in template literal
let price = 10;
let quantity = 3;
console.log(`Total: $${price * quantity}`); // Total: $30

// =============================================
// 6. ESCAPE SEQUENCES
// =============================================

/*
 * Escape sequences use \ to include special characters:
 * - \': Single quote
 * - \": Double quote
 * - \\: Backslash
 * - \n: Newline
 * - \t: Tab
 */

let escaped = "She said \"Hello!\"\nNew line\tTabbed";
console.log("Escaped String:", escaped);
// She said "Hello!"
// New line    Tabbed

let backslash = "Path: C:\\Users\\Alice";
console.log("Backslash:", backslash); // Path: C:\Users\Alice

// =============================================
// 7. STRINGS AND TYPE COERCION
// =============================================

/*
 * Strings interact with other types via coercion:
 * - Number + String = String (concatenation)
 * - String comparisons use alphabetical order
 * - Use String() or toString() for explicit conversion
 */

let numStr = 16 + "Volvo";
console.log("Number + String:", numStr); // 16Volvo

let strNum1 = "20";
let strNum2 = "5";
console.log("String Comparison: '20' < '5':", strNum1 < strNum2); // true (alphabetical)

let num = 42;
console.log("Explicit to String:", String(num)); // "42"
console.log("toString method:", num.toString()); // "42"

// Dynamic typing with strings
let dynamic;
dynamic = "Initial string";
console.log("Dynamic (string):", dynamic, "Type:", typeof dynamic); // Initial string, string
dynamic = 123;
console.log("Dynamic (number):", dynamic, "Type:", typeof dynamic); // 123, number

// =============================================
// 8. PRACTICAL EXAMPLE: STRING MANIPULATION
// =============================================

/*
 * Example: Process a user input string to create a formatted output.
 * Demonstrates multiple string methods and template literals.
 */

function formatUserInput(input) {
  let trimmed = input.trim(); // Remove whitespace
  let capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  let hasJavaScript = trimmed.includes("javascript");
  return `${capitalized} is ${hasJavaScript ? "related to JavaScript!" : "not related to JavaScript."}`;
}

let userInput = "  javaScript coding  ";
console.log("Formatted Input:", formatUserInput(userInput)); // Javascript coding is related to JavaScript!