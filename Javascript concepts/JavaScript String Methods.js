// ===============================
// JavaScript Strings: Methods Overview
// ===============================

// JavaScript strings are primitive and immutable.
// Any method that "modifies" a string actually creates a new string instead of changing the original one.

/*
📌 Keywords:
Primitive → Basic data type (not an object).
Immutable → Cannot be changed after creation.
*/

// ===============================
// 1. String Length
// ===============================
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); // 26

// ===============================
// 2. Extracting String Characters
// ===============================

// .at(position) - ES2022+, supports negative indices
console.log(text.at(8)); // 'I'
console.log(text.at(0)); // 'A'

// .charAt(position)
console.log(text.charAt(8)); // 'I'

// .charCodeAt(position) - returns UTF-16 code
console.log(text.charCodeAt(8)); // 73

// Property access (like arrays)
console.log(text[8]); // 'I'

// ===============================
// 3. Extracting String Parts
// ===============================

// .slice(start, end) - end not included, supports negative indices
console.log(text.slice(0, 5)); // 'ABCDE'

// .substring(start, end) - negative values treated as 0
console.log(text.substring(0, 5)); // 'ABCDE'
console.log(text.substring(-0, 5)); // 'ABCDE'

// .substr(start, length) - deprecated, but still works
console.log(text.substr(0, 26)); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// ===============================
// 4. Changing Case
// ===============================
console.log(text.toUpperCase()); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(text.toLowerCase()); // 'abcdefghijklmnopqrstuvwxyz'

// ===============================
// 5. Concatenation
// ===============================
let anotherText = "0123456789";
console.log(text.concat(anotherText)); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

// ===============================
// 6. Trimming Whitespace
// ===============================
let trimmed = "   Tanish   ";
console.log(trimmed.trim()); // 'Tanish'
console.log(trimmed.trimStart()); // 'Tanish   '
console.log(trimmed.trimEnd()); // '   Tanish'

// ===============================
// 7. Padding
// ===============================
let padded = "Tanish";
console.log(padded.padStart(10, "*")); // '****Tanish'
console.log(padded.padEnd(10, "*")); // 'Tanish****'

// ===============================
// 8. Searching Within Strings
// ===============================

// .indexOf(searchValue, start)
console.log(text.indexOf("M")); // 12

// .lastIndexOf(searchValue, start)
console.log(text.lastIndexOf("A")); // 0

// .includes(searchValue, start)
console.log(text.includes("XYZ")); // true

// .startsWith(searchValue, start)
console.log(text.startsWith("ABC")); // true

// .endsWith(searchValue, length)
console.log(text.endsWith("XYZ")); // true

// ===============================
// 9. Replacing String Content
// ===============================

// .replace(searchValue, newValue) - replaces first match
let greet = "Hello World";
console.log(greet.replace("World", "Tanish")); // 'Hello Tanish'

// .replaceAll(searchValue, newValue) - replaces all matches (ES2021+)
let repeated = "foo bar foo";
console.log(repeated.replaceAll("foo", "baz")); // 'baz bar baz'

// ===============================
// 10. Splitting Strings
// ===============================

// .split(separator, limit)
let csv = "red,green,blue";
console.log(csv.split(",")); // ['red', 'green', 'blue']

// ===============================
// 11. Repeating Strings
// ===============================
let hi = "Hi! ";
console.log(hi.repeat(3)); // 'Hi! Hi! Hi! '

// ===============================
// 12. Matching with Regular Expressions
// ===============================

// .match(regexp)
let sentence = "The rain in SPAIN stays mainly in the plain";
console.log(sentence.match(/ain/g)); // ['ain', 'ain', 'ain']

// .search(regexp)
console.log(sentence.search(/SPAIN/)); // 12

// ===============================
// 13. Other Useful Methods
// ===============================

// .localeCompare(compareString)
console.log("a".localeCompare("b")); // -1 (a < b)

// .valueOf() - returns primitive value
console.log(text.valueOf()); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// .toString() - returns string representation
console.log((123).toString()); // '123'

// ===============================
// Summary Notes
// ===============================
// - Strings are immutable: methods return new strings.
// - Use .slice(), .substring(), or .substr() to extract parts.
// - Use .toUpperCase() and .toLowerCase() for case conversion.
// - Use .trim(), .trimStart(), .trimEnd() to remove whitespace.
// - Use .indexOf(), .includes(), .startsWith(), .endsWith() for searching.
// - Use .replace(), .replaceAll() for replacing content.
// - Use .split() to convert a string to an array.
// - Use .padStart(), .padEnd() for padding.
// - Use .repeat() to repeat a string.
// - Use .match(), .search() for regex operations.