// -----------------------------------------------------------------------------
// ✅ JavaScript Set and Set Methods
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 1. ✅ What is a Set?
// -----------------------------------------------------------------------------

/**
 * A Set is a collection of unique values.
 * ➤ No duplicate values allowed
 * ➤ Can hold any data type (string, number, object, etc.)
 * ➤ Maintains insertion order
 */

// -----------------------------------------------------------------------------
// 2. ✅ Creating a Set
// -----------------------------------------------------------------------------

const mySet = new Set();

// Adding values using add()
mySet.add(10);
mySet.add("apple");
mySet.add({ name: "Tanish" });
mySet.add(10); // Duplicate, will not be added

console.log("Set:", mySet); // Output: Set(3) { 10, 'apple', { name: 'Tanish' } }

// Creating a Set from an Array
const arr = [1, 2, 3, 4, 4, 2, 1];
const uniqueSet = new Set(arr);
console.log("Unique values from array:", uniqueSet); // Set(4) { 1, 2, 3, 4 }


// -----------------------------------------------------------------------------
// 3. ✅ Set Methods
// -----------------------------------------------------------------------------

// 🔹 add(value)
mySet.add("banana");

// 🔹 delete(value)
mySet.delete("apple"); // returns true if deleted

// 🔹 has(value)
console.log(mySet.has(10)); // true
console.log(mySet.has(100)); // false

// 🔹 clear()
const tempSet = new Set([1, 2, 3]);
tempSet.clear(); // Empties the set
console.log(tempSet); // Set(0) {}

// -----------------------------------------------------------------------------
// 4. ✅ Set Size
// -----------------------------------------------------------------------------

console.log("Size of mySet:", mySet.size); // 3


// -----------------------------------------------------------------------------
// 5. ✅ Iterating over a Set
// -----------------------------------------------------------------------------

// 🔹 using for...of
for (let value of mySet) {
  console.log("Value:", value);
}

// 🔹 using forEach
mySet.forEach((val) => {
  console.log("ForEach Value:", val);
});


// -----------------------------------------------------------------------------
// 6. ✅ Convert Set to Array
// -----------------------------------------------------------------------------

const setToArr = [...mySet]; // or Array.from(mySet)
console.log("Array from Set:", setToArr);


// -----------------------------------------------------------------------------
// 7. ✅ Convert Array to Set (Remove Duplicates)
const numbers = [1, 2, 2, 3, 4, 4];
const noDuplicates = [...new Set(numbers)];
console.log("Deduplicated Array:", noDuplicates); // [1, 2, 3, 4]

// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * ➤ Set is used to store unique values
 * ➤ Methods:
 *    - add(value)
 *    - delete(value)
 *    - has(value)
 *    - clear()
 *    - size
 * ➤ Can iterate using for...of or forEach
 * ➤ Use Set to remove duplicates from arrays
 */
