// -----------------------------------------------------------------------------
// ✅ JavaScript Control Flow - Comparison, Conditional & Loops
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 1. ✅ Comparison Operators
// -----------------------------------------------------------------------------

let x = 10;
let y = "10";

console.log(x == y);   // true   (loose equality, type coercion)
console.log(x === y);  // false  (strict equality, type + value)
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 5);    // true
console.log(x < 20);   // true
console.log(x >= 10);  // true
console.log(x <= 5);   // false

// -----------------------------------------------------------------------------
// 2. ✅ if, else if, else
// -----------------------------------------------------------------------------

let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// -----------------------------------------------------------------------------
// 3. ✅ switch Statement
// -----------------------------------------------------------------------------

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red");
    break;
  case "banana":
    console.log("Bananas are yellow");
    break;
  default:
    console.log("Unknown fruit");
}

// -----------------------------------------------------------------------------
// 4. ✅ for Loop
// -----------------------------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  console.log("i:", i);
}

// -----------------------------------------------------------------------------
// 5. ✅ while Loop
// -----------------------------------------------------------------------------

let count = 0;
while (count < 3) {
  console.log("count:", count);
  count++;
}

// -----------------------------------------------------------------------------
// 6. ✅ do...while Loop
// -----------------------------------------------------------------------------

let num = 0;
do {
  console.log("num:", num);
  num++;
} while (num < 2);

// -----------------------------------------------------------------------------
// 7. ✅ for...in Loop – Iterate over Object Keys
// -----------------------------------------------------------------------------

const person = { name: "Tanish", age: 21, country: "India" };

for (let key in person) {
  console.log(key, ":", person[key]);
}

// -----------------------------------------------------------------------------
// 8. ✅ for...of Loop – Iterate over Iterables (arrays, strings)
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log("color:", color);
}

// Can also be used with strings:
for (let char of "JS") {
  console.log("char:", char);
}

// -----------------------------------------------------------------------------
// 9. ✅ break and continue
// -----------------------------------------------------------------------------

// break - exits the loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log("Break example:", i);
}

// continue - skips the current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Continue example:", i);
}

// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * ➤ Comparison:
 *    ==  (loose), === (strict), !=, !==, >, <, >=, <=
 *
 * ➤ Conditionals:
 *    if, else if, else, switch
 *
 * ➤ Loops:
 *    - for          ➝ numeric loop
 *    - while        ➝ pre-check condition
 *    - do...while   ➝ runs at least once
 *    - for...in     ➝ object keys
 *    - for...of     ➝ arrays, strings
 *
 * ➤ Loop Control:
 *    - break    ➝ exits loop
 *    - continue ➝ skips current iteration
 */
