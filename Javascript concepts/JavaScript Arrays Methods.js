// -----------------------------------------------------------------------------
// ✅ JavaScript Array Methods - with Explanations & Use Cases
// -----------------------------------------------------------------------------

// Base array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// -----------------------------
// 1. toString() – Convert array to string
// -----------------------------
console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"


// -----------------------------
// 2. join(separator) – Join with custom separator
// -----------------------------
console.log(fruits.join(" | ")); // "Banana | Orange | Apple | Mango"


// -----------------------------
// 3. pop() – Remove last element
// -----------------------------
const popped = fruits.pop(); // "Mango"
console.log(fruits); // ["Banana", "Orange", "Apple"]


// -----------------------------
// 4. push(item) – Add element at the end
// -----------------------------
fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Kiwi"]


// -----------------------------
// 5. shift() – Remove first element
// -----------------------------
const shifted = fruits.shift(); // "Banana"
console.log(fruits); // ["Orange", "Apple", "Kiwi"]


// -----------------------------
// 6. unshift(item) – Add element to beginning
// -----------------------------
fruits.unshift("Lemon");
console.log(fruits); // ["Lemon", "Orange", "Apple", "Kiwi"]


// -----------------------------
// 7. concat() – Merge arrays
// -----------------------------
const vegetables = ["Tomato", "Carrot"];
const combined = fruits.concat(vegetables);
console.log(combined); // ["Lemon", ..., "Carrot"]


// -----------------------------
// 8. slice(start, end) – Extract a part (does NOT modify original)
// -----------------------------
const sliced = fruits.slice(1, 3);
console.log(sliced); // ["Orange", "Apple"]
console.log(fruits); // Unchanged


// -----------------------------
// 9. splice(index, deleteCount, item1, ...) – Add/Remove items
// -----------------------------
// Remove 1 element at index 1, and add 2 new items
fruits.splice(1, 1, "Grapes", "Pineapple");
console.log(fruits); // ["Lemon", "Grapes", "Pineapple", "Apple", "Kiwi"]


// -----------------------------
// 10. sort() – Alphabetical sort
// -----------------------------
fruits.sort();
console.log(fruits); // Sorted alphabetically


// -----------------------------
// 11. reverse() – Reverse the array
// -----------------------------
fruits.reverse();
console.log(fruits);


// -----------------------------
// 12. indexOf(item) – First index (or -1 if not found)
// -----------------------------
console.log(fruits.indexOf("Apple")); // Index if found


// -----------------------------
// 13. includes(item) – Boolean check
// -----------------------------
console.log(fruits.includes("Mango")); // true or false


// -----------------------------
// 14. map(callback) – Create new array by applying logic to each item
// -----------------------------
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]


// -----------------------------
// 15. filter(callback) – Filter elements based on condition
// -----------------------------
const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]


// -----------------------------
// 16. reduce(callback, initialValue) – Reduce to a single value
// -----------------------------
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10


// -----------------------------
// 17. find(callback) – Find first matching item
// -----------------------------
const found = numbers.find((num) => num > 2);
console.log(found); // 3


// -----------------------------
// 18. findIndex(callback) – Find index of first match
// -----------------------------
const idx = numbers.findIndex((num) => num > 2);
console.log(idx); // 2


// -----------------------------
// 19. every(callback) – All items satisfy condition?
// -----------------------------
console.log(numbers.every((num) => num > 0)); // true


// -----------------------------
// 20. some(callback) – At least one item satisfies condition?
// -----------------------------
console.log(numbers.some((num) => num > 3)); // true


// -----------------------------
// 21. flat(depth) – Flatten nested arrays
// -----------------------------
const nested = [1, 2, [3, 4, [5, 6]]];
console.log(nested.flat(1)); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]


// -----------------------------
// 22. fill(value, start?, end?) – Fill part of array
// -----------------------------
const filled = new Array(5).fill(0);
console.log(filled); // [0, 0, 0, 0, 0]
filled.fill(1, 1, 3); // Fill with 1 from index 1 to 2
console.log(filled); // [0, 1, 1, 0, 0]


// -----------------------------
// 23. copyWithin(target, start, end) – Copy part of array in place
// -----------------------------
const sample = [1, 2, 3, 4, 5];
sample.copyWithin(1, 3, 5); // copy elements from index 3–4 to index 1
console.log(sample); // [1, 4, 5, 4, 5]


// -----------------------------
// 24. entries(), keys(), values() – Array iterators
// -----------------------------
const data = ["a", "b", "c"];

for (const [index, value] of data.entries()) {
  console.log(index, value);
}

for (const key of data.keys()) {
  console.log("Key:", key);
}

for (const val of data.values()) {
  console.log("Value:", val);
}


// -----------------------------
// ✅ Summary of Common Use Cases
// -----------------------------

/**
 * ➤ Add/Remove: push, pop, shift, unshift, splice
 * ➤ Extract/Modify: slice, splice, sort, reverse
 * ➤ Loop/Transform: forEach, map, filter, reduce, flat
 * ➤ Search: indexOf, includes, find, findIndex
 * ➤ Check: every, some
 * ➤ Convert: toString, join
 * ➤ Construct: concat, fill, copyWithin
 */
