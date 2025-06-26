// ===============================
// 1. String Declaration
// ===============================

// Double and single quotes can be used interchangeably
let doubleQuoted = "double quoted string";
let singleQuoted = 'single quoted string';

// Nesting quotes: Use single inside double or vice versa
let nestedQuotes = "single 'quoted' string";

console.log(doubleQuoted);
console.log(singleQuoted);
console.log(nestedQuotes);

// ===============================
// 2. Template Strings (Template Literals)
// ===============================

// Use backticks (`) for template strings, which allow embedded expressions and multi-line strings
let templateString = `this is the template string`;
console.log(templateString);

// Note: Template literals are not supported in Internet Explorer.

// ===============================
// 3. String Length
// ===============================

let findLength = "a b c"; // Spaces are counted as characters
console.log(findLength.length); // Output: 5

// ===============================
// 4. Escape Characters in Strings
// ===============================

// Escape characters let you include special characters in strings
console.log("Single quote: I\'m learning JS!");     // I'm learning JS!
console.log("Double quote: He said, \"Hello!\"");   // He said, "Hello!"
console.log("Backslash: This is a backslash \\");   // This is a backslash \
console.log("New Line:\nThis is on a new line.");   // New line output
console.log("Tab:\tThis is tabbed.");               // Tabbed spacing
console.log("Carriage Return:\rReplaced line");     // May behave differently in consoles
console.log("Backspace: ABC\bD");                   // Removes C, outputs ABD

// ===============================
// 5. Real Use Cases for Escape Characters
// ===============================

// Writing quotes inside strings
let quote = "He said, \"Never give up.\"";
console.log(quote);

// Creating formatted outputs (new lines and tabs)
let formatted = "Name:\tTanish\nRole:\tDeveloper";
console.log(formatted);

// File paths (Windows)
let path = "C:\\Users\\Tanish\\Documents";
console.log(path); // Proper file path with backslashes

// Combining escapes
let story = "She said, \"It\'s a beautiful day!\"\nAnd smiled.";
console.log(story);

// ===============================
// 6. JavaScript Strings as Objects vs. Primitives
// ===============================

// Note: Do NOT create String objects using 'new'.
// - The new keyword complicates code and slows execution.
// - String objects can produce unexpected results.

// Primitive string (recommended)
let username = "username";
console.log(username);
console.log(typeof username); // string

// String object (not recommended)
let username1 = new String("username1");
console.log(username1);
console.log(typeof username1); // object

// Comparing string objects
let x = new String("John");
let y = new String("John");

// Note the difference between (x == y) and (x === y).
console.log(x == y);   // false, because objects are compared by reference

// Note: Comparing two JavaScript objects always returns false unless they reference the same object.

// ===============================
// Summary Notes
// ===============================
// - Use string literals ("" or '') for most cases.
// - Use template literals (``) for multi-line strings or embedded expressions.
// - Avoid using String objects (with new).
// - Escape characters help include special characters