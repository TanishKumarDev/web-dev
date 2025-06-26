// ===============================
// JavaScript String Search Methods
// ===============================

let text = "a b b  b";

// 1. indexOf() - Returns the first index of the specified value, or -1 if not found
let index = text.indexOf("b");
console.log("indexOf:", index); // 2

// 2. lastIndexOf() - Returns the last index of the specified value, or -1 if not found
let lastIndex = text.lastIndexOf("b");
console.log("lastIndexOf:", lastIndex); // 8

// 3. search() - Searches for a match using a string or RegExp, returns the index of the match or -1
let searchIndex = text.search("b");
console.log("search:", searchIndex); // 2

// 4. match() - Returns an array of matches or null
let matchResult = text.match(/b/g); // Use regex with 'g' for all matches
console.log("match:", matchResult); // [ 'b', 'b', 'b', 'b' ]

// 5. matchAll() - Returns an iterator of all match results (ES2020+)
let matchAllResult = [...text.matchAll(/b/g)];
console.log("matchAll:", matchAllResult); // Array of match objects

// 6. includes() - Returns true if the string contains the specified value
let includesResult = text.includes("b");
console.log("includes:", includesResult); // true

// 7. startsWith() - Checks if string starts with specified value
let startsWithResult = text.startsWith("b");
console.log("startsWith:", startsWithResult); // false

// 8. endsWith() - Checks if string ends with specified value
let endsWithResult = text.endsWith("b");
console.log("endsWith:", endsWithResult); // true

// ===============================
// Notes:
// - All methods are case-sensitive.
// - indexOf, lastIndexOf, search return index or -1.
// - match returns array or null; matchAll returns iterator (spread to array).
// - includes, startsWith, endsWith return boolean.
// - Use regex for advanced searching with match, matchAll, search.