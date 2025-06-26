// -----------------------------------------------------------------------------
// ✅ JavaScript Array Iteration Methods - Complete Guide
// -----------------------------------------------------------------------------

const fruits = ["Apple", "Banana", "Mango", "Orange"];

// -----------------------------
// 1. forEach() – perform an action for each item (no return)
// -----------------------------
// Does NOT return a new array

fruits.forEach((item, index, array) => {
  console.log(`Item at index ${index}: ${item}`);
});

// forEach is best for side effects (logging, DOM updates, etc.)


// -----------------------------
// 2. map() – create and return a NEW array based on original
// -----------------------------

const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "MANGO", "ORANGE"]

// map() is used when transforming data


// -----------------------------
// 3. filter() – return items that match condition (new array)
// -----------------------------

const longNamedFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNamedFruits); // ["Banana", "Orange"]


// -----------------------------
// 4. reduce() – reduce all elements to a single value
// -----------------------------

const nums = [10, 20, 30, 40];
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 100

// reduce() is powerful for totals, combining objects, etc.


// -----------------------------
// 5. some() – check if ANY element satisfies condition
// -----------------------------

const hasLongWord = fruits.some(fruit => fruit.length > 6);
console.log(hasLongWord); // true


// -----------------------------
// 6. every() – check if ALL elements satisfy condition
// -----------------------------

const allShort = fruits.every(fruit => fruit.length < 10);
console.log(allShort); // true


// -----------------------------
// 7. find() – get the FIRST element that matches condition
// -----------------------------

const foundFruit = fruits.find(fruit => fruit.startsWith("M"));
console.log(foundFruit); // "Mango"


// -----------------------------
// 8. findIndex() – get INDEX of the first matching element
// -----------------------------

const index = fruits.findIndex(fruit => fruit === "Banana");
console.log(index); // 1


// -----------------------------
// 9. entries() – get an iterator of [index, value]
// -----------------------------

for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}


// -----------------------------
// 10. keys() – get array index iterator
// -----------------------------

for (let index of fruits.keys()) {
  console.log(index);
}


// -----------------------------
// 11. values() – get array values (ES2015+)
// -----------------------------

for (let value of fruits.values()) {
  console.log(value);
}


// -----------------------------
// ✅ Summary – When to Use What?
// -----------------------------

/**
 * forEach()     ➤ Loop over elements (side effects, no return)
 * map()         ➤ Create a new transformed array
 * filter()      ➤ Filter and return elements based on a condition
 * reduce()      ➤ Reduce array to a single value
 * some()        ➤ At least one element matches?
 * every()       ➤ All elements match?
 * find()        ➤ Return first element that matches
 * findIndex()   ➤ Return index of first match
 * entries()     ➤ Loop [index, value]
 * keys()        ➤ Loop indexes
 * values()      ➤ Loop values
 */

