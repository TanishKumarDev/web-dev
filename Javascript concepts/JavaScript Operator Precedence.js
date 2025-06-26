// -----------------------------------------------------------------------------
// ✅ 1. What is Operator Precedence?
// -----------------------------------------------------------------------------

/**
 * Operator precedence determines **which operation is performed first** in an expression.
 * If multiple operators appear together, JS uses precedence rules to decide the execution order.
 * 
 * For equal precedence, associativity (left-to-right or right-to-left) is used.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Precedence Table (High to Low)
// -----------------------------------------------------------------------------

/**
 * 🔢 Precedence | 🔀 Associativity | 🔧 Operator(s)
 * ----------------------------------------------------------------
 *  20           | right to left   | () function call, new
 *  19           | left to right   | [], ., ( )
 *  18           | left to right   | ++, -- (postfix)
 *  17           | right to left   | ++, -- (prefix), +x, -x, ~, !
 *  16           | right to left   | ** (exponentiation)
 *  15           | left to right   | *, /, %
 *  14           | left to right   | +, -
 *  13           | left to right   | <<, >>, >>>
 *  12           | left to right   | <, <=, >, >=, in, instanceof
 *  11           | left to right   | ==, !=, ===, !==
 *  10           | left to right   | &
 *   9           | left to right   | ^
 *   8           | left to right   | |
 *   7           | left to right   | &&
 *   6           | left to right   | ||
 *   5           | right to left   | ?:
 *   4           | right to left   | =, +=, -=, *=, etc.
 *   3           | right to left   | yield
 *   2           | left to right   | ,
 */

// -----------------------------------------------------------------------------
// ✅ 3. Examples to Understand Operator Precedence
// -----------------------------------------------------------------------------

console.log(3 + 4 * 5);  // 3 + (4 * 5) = 23

console.log(2 ** 3 ** 2); // 2 ** (3 ** 2) = 512

console.log(100 / 10 * 2); // (100 / 10) * 2 = 20

console.log((3 + 2) * 4);  // Parentheses override precedence = 20

console.log(5 > 3 && 10 < 20); // true

console.log(5 + 3 > 6 || false); // (5 + 3 > 6) => true

// -----------------------------------------------------------------------------
// ✅ 4. Associativity – Left to Right vs Right to Left
// -----------------------------------------------------------------------------

let a = 10;
let b = 5;
let c = 2;

let result = a = b = c; // right-to-left
console.log(result); // 2

console.log(5 - 2 - 1); // (5 - 2) - 1 = 2 (left to right)

console.log(2 ** 3 ** 2); // right to left: 2 ** (3 ** 2) = 512

// -----------------------------------------------------------------------------
// ✅ 5. Common Pitfalls in Interview
// -----------------------------------------------------------------------------

let x = 10;

console.log(x++ * 2); // 10 * 2 = 20 (then x = 11)
console.log(++x * 2); // 12 * 2 = 24

let bool = true + false; // 1 + 0 = 1
console.log(bool);

let tricky = "5" + 1 * 2; // 1*2 = 2; "5" + 2 = "52"
console.log(tricky);

let res = "10" - "4" - "3" - 2 + "5";
// "10" - "4" = 6
// 6 - "3" = 3
// 3 - 2 = 1
// 1 + "5" = "15"
console.log(res); // "15"

// -----------------------------------------------------------------------------
// ✅ 6. When in Doubt — Use Parentheses!
// -----------------------------------------------------------------------------

let safe = (3 + 4) * (5 - 2);
console.log(safe); // 7 * 3 = 21

// -----------------------------------------------------------------------------
// ✅ 7. Summary – Interview Tips
// -----------------------------------------------------------------------------

/**
 * ➤ Use parentheses to avoid confusion
 * ➤ Know that `**` is right-associative (binds from right)
 * ➤ Assignment is right-to-left
 * ➤ Arithmetic > Comparison > Logical
 * ➤ `+` operator does both addition and string concat – depends on operand types
 * ➤ `,` comma operator has the **lowest precedence**
 */
