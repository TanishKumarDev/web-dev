// -----------------------------------------------------------------------------
// ✅ JavaScript Array Sorting - Basic to Advanced
// -----------------------------------------------------------------------------

// -----------------------------
// 1. sort() – Default behavior (Alphabetical, as strings)
// -----------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Alphabetical order
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

const nums = [100, 25, 30, 1, 4, 200];
nums.sort(); // Incorrect sort (compares as strings)
console.log(nums); // [1, 100, 200, 25, 30, 4]


// -----------------------------
// 2. Correct Sorting of Numbers – Use a compare function
// -----------------------------

// Ascending
nums.sort((a, b) => a - b);
console.log(nums); // [1, 4, 25, 30, 100, 200]

// Descending
nums.sort((a, b) => b - a);
console.log(nums); // [200, 100, 30, 25, 4, 1]


// -----------------------------
// 3. sort() is In-Place – It modifies the original array
// -----------------------------

const original = [10, 5, 8];
const sorted = original.sort((a, b) => a - b);
console.log(original); // [5, 8, 10]
console.log(sorted);   // same reference


// -----------------------------
// 4. Custom Sort – Strings with localeCompare()
// -----------------------------

const names = ["José", "Ana", "Émile", "Zoe"];
names.sort((a, b) => a.localeCompare(b)); // Correct for accents
console.log(names); // ["Ana", "Émile", "José", "Zoe"]


// -----------------------------
// 5. Sorting Array of Objects
// -----------------------------

const users = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Sort by ID (ascending)
users.sort((a, b) => a.id - b.id);
console.log(users);

// Sort by name (alphabetically)
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);


// -----------------------------
// 6. reverse() – Reverse the array order
// -----------------------------

const rev = [1, 2, 3, 4, 5];
rev.reverse();
console.log(rev); // [5, 4, 3, 2, 1]


// -----------------------------
// 7. Non-Mutating Sort (copy before sort)
// -----------------------------

const numsOriginal = [50, 20, 80];
const sortedCopy = [...numsOriginal].sort((a, b) => a - b);
console.log(numsOriginal); // Unchanged
console.log(sortedCopy);   // Sorted copy


// -----------------------------
// ✅ Summary of Array Sorting
// -----------------------------

/**
 * ➤ sort() by default sorts as strings (alphabetically)
 * ➤ Use compare function for numbers: (a, b) => a - b
 * ➤ sort() mutates the original array
 * ➤ Use localeCompare() for proper string/locale sorting
 * ➤ reverse() reverses array order in-place
 * ➤ Use spread ([...arr]) to avoid mutation
 * ➤ Objects can be sorted using custom compare functions
 */

