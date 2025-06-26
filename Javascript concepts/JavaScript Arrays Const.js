// -----------------------------------------------------------------------------
// ✅ JavaScript Arrays with `const` – Important Concepts
// -----------------------------------------------------------------------------

// -----------------------------
// 1. Declaring an Array with `const`
// -----------------------------

// You can declare arrays with `const` to prevent reassignment.
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// ❌ This will throw an error:
/// fruits = ["Orange", "Papaya"]; // TypeError: Assignment to constant variable.


// -----------------------------
// 2. But `const` does NOT make the array immutable
// -----------------------------

// You can still modify the contents:
fruits[0] = "Kiwi";          // ✅ allowed
fruits.push("Grapes");       // ✅ allowed
console.log(fruits);         // [ 'Kiwi', 'Banana', 'Mango', 'Grapes' ]

// You just can't reassign the whole array reference


// -----------------------------
// 3. Why use `const` with arrays?
// -----------------------------

/**
 * ➤ To avoid accidental reassignment of the entire array
 * ➤ Makes your code more predictable
 * ➤ Still allows modifying, adding, and removing elements
 */


// -----------------------------
// 4. Comparison: const vs let vs var for Arrays
// -----------------------------

// ✅ const - prefer this when array should not be reassigned
const arr1 = [1, 2, 3];

// ✅ let - use when you plan to reassign the whole array
let arr2 = [4, 5, 6];
arr2 = [7, 8]; // ✅ allowed

// ❌ var - outdated and function scoped, avoid in modern JS
var arr3 = [9, 10, 11];


// -----------------------------
// 5. Object.freeze() – To make array truly immutable
// -----------------------------

const frozenArr = Object.freeze([1, 2, 3]);

// ✅ reading is allowed
console.log(frozenArr[0]); // 1

// ❌ mutation is ignored silently in non-strict mode or throws in strict mode
// frozenArr[0] = 100; // won't work
// frozenArr.push(4);   // won't work


// -----------------------------
// ✅ Summary – const with Arrays
// -----------------------------

/**
 * ➤ const prevents reassignment of the array reference
 * ➤ It does NOT freeze or lock the content
 * ➤ Use const when you don't want to reassign the variable
 * ➤ Use Object.freeze() to prevent modification
 */
