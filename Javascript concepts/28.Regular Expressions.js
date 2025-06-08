// === Understanding Regular Expressions ===
// Regular expressions (regex) are like a search filter: they define a pattern to match text, like finding a specific word or format.
// - Syntax: /pattern/modifiers (e.g., /w3schools/i for case-insensitive search).
// - Use cases: Search, replace, validate input (e.g., emails, phone numbers).
// Why confusing? Regex syntax looks cryptic (e.g., \d, [a-z]), and modifiers change behavior subtly.
// Analogy: Think of regex as a metal detector: the pattern is your setting to find specific "treasures" (matches) in text.
// Tip: Start with simple patterns (e.g., /cat/), test them, and use tools like regex101.com for visualization.

console.log("=== JavaScript Regular Expressions Examples ===");

// === Basic Regular Expression Syntax ===
// A regex is written as /pattern/modifiers, where the pattern defines what to match, and modifiers adjust behavior.
// Example: /w3schools/i searches for "w3schools" case-insensitively.

console.log("\n=== String search() with a String ===");
let text = "Visit W3Schools!";
let pos = text.search("W3Schools");
console.log(pos); // 6
// Reason: search() finds the first occurrence of "W3Schools" starting at index 6.
// Logic: Returns the index of the match or -1 if not found.

// Using a regular expression
console.log("\n=== String search() with a Regular Expression ===");
pos = text.search(/w3schools/i);
console.log(pos); // 6
// Reason: /w3schools/i matches "W3Schools" (case-insensitive) at index 6.
// Logic: The i modifier ignores case, making the search more flexible.

// === String replace() with a String ===
// Replace a substring with another string.
console.log("\n=== String replace() with a String ===");
text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result); // "Visit W3Schools!"
// Reason: replace() swaps the first occurrence of "Microsoft" with "W3Schools".
// Logic: Simple string replacement, case-sensitive.

// Using a regular expression
console.log("\n=== String replace() with a Regular Expression ===");
result = text.replace(/microsoft/i, "W3Schools");
console.log(result); // "Visit W3Schools!"
// Reason: /microsoft/i matches "Microsoft" case-insensitively and replaces it.
// Logic: Regex makes replacements more powerful (e.g., case-insensitive).

// === Regular Expression Modifiers ===
// Modifiers change how the pattern is applied (e.g., case sensitivity, global search).

console.log("\n=== Modifiers Example ===");
text = "Visit W3Schools and w3schools!";
result = text.replace(/w3schools/g, "MDN"); // Global replace
console.log(result); // "Visit MDN and MDN!"
// Reason: The g modifier replaces all matches, not just the first.
// Logic: Useful for replacing every occurrence in a string.

result = text.replace(/w3schools/igm, "MDN"); // Case-insensitive, global, multiline
console.log(result); // "Visit MDN and MDN!"
// Reason: i (case-insensitive), g (global), m (multiline) combine for flexible matching.
// Logic: m is relevant for patterns involving line breaks (not shown here).

// === Regular Expression Patterns ===
// Brackets and metacharacters define specific character sets or positions.

console.log("\n=== Patterns Example ===");
text = "Is it 123 or abc?";
console.log(text.match(/[a-c]/g)); // ["a", "b", "c"]
// Reason: [a-c] matches any character from 'a' to 'c'; g finds all matches.
// Logic: Returns an array of matching characters.

console.log(text.match(/\d/g)); // ["1", "2", "3"]
// Reason: \d matches any digit (0-9); g finds all matches.
// Logic: Useful for extracting numbers from text.

console.log(text.match(/\b123\b/)); // ["123"]
// Reason: \b ensures "123" is a whole word (not part of "1234").
// Logic: Word boundaries help match exact words.

console.log(text.match(/123|abc/g)); // ["123", "abc"]
// Reason: (123|abc) matches either "123" or "abc"; g finds all.
// Logic: Alternation (|) allows multiple possible matches.

// === Quantifiers ===
// Quantifiers specify how many times a pattern should appear.

console.log("\n=== Quantifiers Example ===");
text = "hello helo helllo";
console.log(text.match(/hel+o/g)); // ["hello", "helllo"]
// Reason: l+ matches one or more 'l's; g finds all matches.
// Logic: Matches "hel" followed by any number of 'l's, then "o".

console.log(text.match(/hel*o/g)); // ["helo", "hello", "helllo"]
// Reason: l* matches zero or more 'l's; g finds all matches.
// Logic: Includes cases with no 'l' (e.g., "heo" if present).

console.log(text.match(/hel?o/g)); // ["helo", "hello"]
// Reason: l? matches zero or one 'l'; g finds all matches.
// Logic: Matches "heo" or "helo".

// === Using the RegExp Object ===
// The RegExp object provides methods like test() and exec() for pattern matching.

console.log("\n=== RegExp test() ===");
const pattern = /e/;
console.log(pattern.test("The best things in life are free!")); // true
// Reason: test() returns true if the pattern (/e/) is found in the string.
// Logic: Simple way to check for a match without needing the position.

console.log(/e/.test("The best things in life are free!")); // true
// Reason: Same as above, but written directly without a variable.
// Logic: Shorter syntax for one-off checks.

// === Using RegExp exec() ===
console.log("\n=== RegExp exec() ===");
let match = /e/.exec("The best things in life are free!");
console.log(match); // ["e", index: 2, input: "The best things in life are free!", groups: undefined]
// Reason: exec() returns an object with the first match, its index, and input string.
// Logic: Returns null if no match; useful for detailed match information.

// === Exercise: What does the i modifier represent in Regular Expressions? ===
console.log("\n=== Exercise Result ===");
console.log("The i modifier represents: Perform case-insensitive matching");
// Reason: The i modifier makes regex patterns ignore case (e.g., /w3schools/i matches "W3Schools").
// Logic: Allows flexible matching for user input or varied text formats.
// Correct Answer: Perform case-insensitive matching