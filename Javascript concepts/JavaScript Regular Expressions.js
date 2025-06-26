// -----------------------------------------------------------------------------
// ✅ 1. What are Regular Expressions?
// -----------------------------------------------------------------------------

/**
 * Regular Expressions (RegEx) are patterns used to match character combinations in strings.
 * JavaScript supports RegEx using:
 *   ➤ Literal syntax: /pattern/flags
 *   ➤ Constructor: new RegExp('pattern', 'flags')
 */

// -----------------------------------------------------------------------------
// ✅ 2. Creating a RegEx
// -----------------------------------------------------------------------------

const re1 = /hello/;
const re2 = new RegExp("hello");

console.log(re1.test("hello world")); // true
console.log(re2.test("hi there"));    // false

// -----------------------------------------------------------------------------
// ✅ 3. Flags in RegEx
// -----------------------------------------------------------------------------

/**
 * i – case-insensitive match
 * g – global match (find all matches)
 * m – multiline match
 */

const str = "Hello hello HELLO";
const regex = /hello/gi;

console.log(str.match(regex)); // [ 'Hello', 'hello', 'HELLO' ]

// -----------------------------------------------------------------------------
// ✅ 4. RegEx Methods
// -----------------------------------------------------------------------------

let text = "My email is example@gmail.com";

let pattern = /\w+@\w+\.\w+/;

console.log(pattern.test(text));         // true → returns boolean
console.log(pattern.exec(text));         // returns match object
console.log(text.match(pattern));        // returns match array
console.log(text.search(pattern));       // returns index
console.log(text.replace(pattern, "***"));// replace match with ***
console.log(text.split(/\s/));           // split by space using RegEx

// -----------------------------------------------------------------------------
// ✅ 5. Common Meta Characters
// -----------------------------------------------------------------------------

/**
 * .       – any character except newline
 * \d      – digit (0-9)
 * \D      – non-digit
 * \w      – word character (a-zA-Z0-9_)
 * \W      – non-word character
 * \s      – whitespace
 * \S      – non-whitespace
 * \b      – word boundary
 * \B      – non-word boundary
 * ^       – beginning of string
 * $       – end of string
 * \       – escape character
 */

let metaPattern = /\d{3}-\d{2}-\d{4}/;
console.log(metaPattern.test("123-45-6789")); // true

// -----------------------------------------------------------------------------
// ✅ 6. Character Sets & Ranges
// -----------------------------------------------------------------------------

/**
 * [abc]     – matches a, b, or c
 * [^abc]    – not a, b, or c
 * [a-z]     – any lowercase letter
 * [A-Z]     – any uppercase letter
 * [0-9]     – any digit
 */

let vowelPattern = /[aeiou]/gi;
console.log("Javascript".match(vowelPattern)); // ['a', 'a', 'i']

// -----------------------------------------------------------------------------
// ✅ 7. Quantifiers
// -----------------------------------------------------------------------------

/**
 * X?       – 0 or 1 occurrence
 * X*       – 0 or more
 * X+       – 1 or more
 * X{n}     – exactly n
 * X{n,}    – at least n
 * X{n,m}   – between n and m
 */

let q1 = /lo*/;
console.log("helloooo".match(q1)); // ['looooo']

let q2 = /\d{3}/;
console.log("Phone: 123456".match(q2)); // ['123']

// -----------------------------------------------------------------------------
// ✅ 8. Anchors
// -----------------------------------------------------------------------------

/**
 * ^   – start of string
 * $   – end of string
 */

let anchorPattern = /^hello/;
console.log(anchorPattern.test("hello world")); // true
console.log(anchorPattern.test("say hello"));   // false

// -----------------------------------------------------------------------------
// ✅ 9. Groups & Capture
// -----------------------------------------------------------------------------

let nameRegex = /(\w+)\s(\w+)/;
let nameStr = "Tanish Choudhary";

let result = nameRegex.exec(nameStr);
console.log(result[0]); // Full match
console.log(result[1]); // First name
console.log(result[2]); // Last name

// -----------------------------------------------------------------------------
// ✅ 10. Useful Real-world Patterns
// -----------------------------------------------------------------------------

// Email validation
const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
console.log(emailRegex.test("test@example.com")); // true

// Phone number (US)
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(phoneRegex.test("123-456-7890")); // true

// Password: at least 1 lowercase, 1 uppercase, 1 digit, 1 special char, min 8
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
console.log(passwordRegex.test("Abcd@1234")); // true

// -----------------------------------------------------------------------------
// ✅ 11. Interview Tips & Tricks
// -----------------------------------------------------------------------------

/**
 * ➤ Use RegEx to:
 *    - validate input
 *    - search/replace
 *    - extract data from logs, HTML, etc.
 * 
 * ➤ Don't overcomplicate — try to break the pattern logically.
 * 
 * ➤ Important to explain what each group does if asked in interview.
 */

// -----------------------------------------------------------------------------
// ✅ 12. Summary Cheatsheet
// -----------------------------------------------------------------------------

/**
 * Basic Symbols:
 *  .    any char     ^ start   $ end
 *  *    0+            + 1+      ? 0 or 1
 *  {}   exact         () group
 *  []   char set      \ escape
 * 
 * Flags:
 *  i – case-insensitive
 *  g – global
 *  m – multiline
 */
