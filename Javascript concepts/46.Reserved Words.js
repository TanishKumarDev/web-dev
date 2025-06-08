// === Understanding JavaScript Reserved Words ===
// Reserved words in JavaScript are keywords that cannot be used as identifiers (e.g., variable names, function names, or labels).
// - Purpose: Reserved words are part of JavaScript’s syntax, used for language constructs like loops, conditionals, and declarations.
// - Key Features:
//   - Include keywords (e.g., `if`, `for`, `function`), future-reserved words (e.g., `abstract`, `enum`), and built-in object/method names.
//   - Also cover HTML event handlers and Java-related terms to avoid conflicts in web contexts.
// - Why Important? Using reserved words as identifiers causes syntax errors or unexpected behavior, breaking your code.
// - Why Confusing? The list is extensive, includes non-JavaScript terms (e.g., Java, HTML), and some words are reserved for future use.
// - Analogy: Think of reserved words as restricted street names—you can’t name your house “Main Street” because it’s already taken by the city.
// - Tip: Use descriptive, unique names for variables/functions and check the reserved word list when debugging syntax errors.

// === Reserved Words in JavaScript ===
// These keywords are reserved for JavaScript’s syntax and cannot be used as identifiers.
console.log("\n=== Reserved Keywords Example ===");
try {
  // let if = 5; // SyntaxError: Unexpected token 'if'
  let safeIf = 5; // Valid: Descriptive, non-reserved name
  console.log("Safe Variable:", safeIf); // "Safe Variable: 5"
} catch (error) {
  console.log("Error:", error.message); // "Error: Unexpected token 'if'" (if uncommented)
}
// Reason: Keywords like `if`, `for`, `function` are reserved for language constructs.
// Logic: Use meaningful names (e.g., `userCount` instead of `count`) to avoid conflicts.

// === ECMAScript 5/6 Additions ===
// New reserved words (e.g., `let`, `const`, `await`) were added in ECMAScript 5/6.
console.log("\n=== ECMAScript 5/6 Reserved Words ===");
const myLet = 10; // Valid: Not using `let` as a name
// let let = 10; // SyntaxError: Unexpected token 'let'
console.log("My Let:", myLet); // "My Let: 10"
// Reason: `let`, `const`, `await` are reserved for modern JavaScript features (e.g., block scoping, async/await).
// Logic: Avoid these keywords, especially in modern codebases using ES6+.

// === Removed Reserved Words ===
// Some words (e.g., `abstract`, `byte`, `float`) were removed from ECMAScript 5/6 but should still be avoided for compatibility.
console.log("\n=== Removed Reserved Words ===");
let myAbstract = "test"; // Valid but risky in older browsers
console.log("My Abstract:", myAbstract); // "My Abstract: test"
// Bad: Using removed reserved word
// let float = 3.14; // Avoid: May cause issues in older environments
// Reason: Older browsers (pre-ES5) may treat these as reserved, causing errors.
// Logic: Avoid these words for backward compatibility, especially in legacy projects.

// === JavaScript Built-in Objects, Properties, and Methods ===
// Avoid using names of built-in objects (e.g., `Array`, `Math`) or their properties/methods (e.g., `length`, `toString`).
console.log("\n=== Built-in Objects ===");
let myArray = [1, 2, 3]; // Valid: Not using `Array`
console.log("My Array:", myArray); // "My Array: [1, 2, 3]"
// Bad: Using built-in object name
// let Array = [1, 2, 3]; // Overwrites Array constructor, causing errors
try {
  let length = 5; // Risky: Shadows Array.prototype.length
  console.log("Length:", length); // "Length: 5" (but confuses array usage)
} catch (error) {
  console.log("Error:", error.message);
}
// Reason: Built-in names are part of JavaScript’s core; overwriting them breaks functionality.
// Logic: Use descriptive prefixes (e.g., `myArray`, `userLength`) to avoid conflicts.

// === Java Reserved Words ===
// Avoid Java-related names (e.g., `java`, `JavaObject`) since JavaScript often interacts with Java in some environments.
console.log("\n=== Java Reserved Words ===");
let myJava = "script"; // Valid: Not using `java`
console.log("My Java:", myJava); // "My Java: script"
// Bad: Using Java term
// let java = "script"; // Avoid: May conflict in JavaScript-Java integrations
// Reason: Java terms can cause issues in mixed environments (e.g., applets, legacy systems).
// Logic: Choose unrelated names to prevent confusion in cross-language contexts.

// === Other Reserved Words (HTML/Window Objects) ===
// Avoid names of HTML/Window objects (e.g., `window`, `document`) and properties (e.g., `location`, `navigator`).
console.log("\n=== HTML/Window Objects ===");
let myWindow = "custom"; // Valid: Not using `window`
console.log("My Window:", myWindow); // "My Window: custom"
// Bad: Using Window object name
// let window = "custom"; // Overwrites window object, breaks code
// Reason: Window/document names are global; overwriting them disrupts browser functionality.
// Logic: Prefix with descriptive terms (e.g., `myLocation`) to avoid conflicts.

// === HTML Event Handlers ===
// Avoid using HTML event handler names (e.g., `onclick`, `onload`) as identifiers.
console.log("\n=== HTML Event Handlers ===");
let myClick = "button"; // Valid: Not using `onclick`
console.log("My Click:", myClick); // "My Click: button"
// Bad: Using event handler name
// let onclick = "button"; // Conflicts with HTML event attributes
// Reason: Event handler names are used in HTML/JS integration; overwriting them causes errors.
// Logic: Use unique names (e.g., `handleClick`) for event-related variables.

// === Best Practices for Avoiding Reserved Words ===
// 1. Use descriptive, unique names with prefixes (e.g., `myVar`, `userFunction`).
// 2. Enable "use strict" to catch accidental use of reserved words.
// 3. Check variable names against the reserved word list when debugging.
// 4. Use camelCase for clarity and consistency with JavaScript conventions.
// 5. Avoid Java, HTML, or Window-related names in web projects.
console.log("\n=== Best Practices Example ===");
"use strict";
function processUser(userName) { // Descriptive, non-reserved
  const userData = { name: userName, id: 1 }; // Avoids `Object`, `name`
  return `Processed: ${userData.name}`;
}
console.log(processUser("John")); // "Processed: John"
// Reason: Uses strict mode, descriptive names, and avoids reserved words.
// Logic: Clear naming prevents syntax errors and improves readability.

// === Real-World Scenario: Safe Variable Naming ===
// Simulate a function avoiding reserved word conflicts.
console.log("\n=== Real-World Example ===");
"use strict";
function displayMessage(myMessage, myEvent) { // Avoids `message`, `event`
  const myDocument = { content: myMessage }; // Avoids `document`
  return `Message: ${myDocument.content}, Event: ${myEvent}`;
}
console.log(displayMessage("Hello", "click")); // "Message: Hello, Event: click"
// Reason: Uses unique names, strict mode, and avoids reserved words like `event`, `document`.
// Logic: Safe naming ensures compatibility and prevents runtime errors.

// === Common Pitfalls ===
// - Using reserved words (e.g., `if`, `let`) as variable names: Causes SyntaxError.
// - Overwriting built-in objects (e.g., `Array`, `Math`): Breaks core functionality.
// - Using HTML event handlers (e.g., `onclick`): Conflicts with DOM events.
// - Using removed reserved words (e.g., `float`): Risks errors in older browsers.
// - Ignoring Java/Window names: Causes issues in specific environments.

// === Recommended Tools ===
// - ESLint: Flags reserved words with rules like `no-restricted-syntax`.
// - Browser DevTools: Debug SyntaxErrors caused by reserved words.
// - Strict Mode: Prevents accidental use of some reserved words.
// Tip: Maintain a reference list of reserved words or use a linter to catch them automatically.

// === Full Reserved Words List (Reference) ===
// Keywords: abstract, arguments, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, eval, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, let, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, void, volatile, while, with, yield
// Removed (Avoid): abstract, boolean, byte, char, double, final, float, goto, int, long, native, short, synchronized, throws, transient, volatile
// Built-in Objects/Properties/Methods: Array, Date, eval, function, hasOwnProperty, Infinity, isFinite, isNaN, isPrototypeOf, length, Math, NaN, name, Number, Object, prototype, String, toString, undefined, valueOf
// Java-Related: getClass, java, JavaArray, javaClass, JavaObject, JavaPackage
// HTML/Window: alert, document, window, location, navigator, etc.
// Event Handlers: onblur, onclick, onerror, onfocus, etc.