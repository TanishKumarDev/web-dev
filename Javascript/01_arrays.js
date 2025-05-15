// 1. Basic Array Declaration
console.log("\n--- Basic Array Declaration ---");
const myArr = [0, 1, 2, 3, 4, 5]; // Number array
console.log("myArr:", myArr); // Output: [0, 1, 2, 3, 4, 5]

// Mixed data types
const mixedArr = [1, "Hitesh", true]; // Number, string, boolean
console.log("mixedArr:", mixedArr); // Output: [1, "Hitesh", true]

// Thematic array (e.g., superheroes)
const myHeroes = ["Ironman", "Spiderman", "Batman"];
console.log("myHeroes:", myHeroes); // Output: ["Ironman", "Spiderman", "Batman"]

// 2. Array Properties
console.log("\n--- Array Properties ---");
// Length property
console.log("myArr length:", myArr.length); // Output: 6

// Accessing elements (zero-based indexing)
console.log("First element (myArr[0]):", myArr[0]); // Output: 0
console.log("Second element (myArr[1]):", myArr[1]); // Output: 1

// 3. Shallow Copy (Reference-Based)
console.log("\n--- Shallow Copy ---");
const copyArr = myArr; // Shallow copy
copyArr[0] = 100; // Changes affect original
console.log("copyArr after change:", copyArr); // Output: [100, 1, 2, 3, 4, 5]
console.log("myArr after copy change:", myArr); // Output: [100, 1, 2, 3, 4, 5]

// Reset myArr for further examples
myArr[0] = 0; // Restore original
console.log("myArr reset:", myArr); // Output: [0, 1, 2, 3, 4, 5]

// 4. Basic Array Methods
console.log("\n--- Basic Array Methods ---");
// push(): Add elements to the end
myArr.push(6); // Add 6
myArr.push(7); // Add 7
console.log("After push(6, 7):", myArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// pop(): Remove last element
myArr.pop(); // Remove 7
console.log("After pop():", myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// unshift(): Add elements to the start
myArr.unshift(9); // Add 9 at start
console.log("After unshift(9):", myArr); // Output: [9, 0, 1, 2, 3, 4, 5, 6]

// shift(): Remove first element
myArr.shift(); // Remove 9
console.log("After shift():", myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// 5. Query Methods
console.log("\n--- Query Methods ---");
// includes(): Check if element exists (returns boolean)
console.log("Includes 3:", myArr.includes(3)); // Output: true
console.log("Includes 9:", myArr.includes(9)); // Output: false

// indexOf(): Get index of element or -1 if not found
console.log("Index of 3:", myArr.indexOf(3)); // Output: 3
console.log("Index of 9:", myArr.indexOf(9)); // Output: -1

// 6. Transformation Method: join()
console.log("\n--- join() Method ---");
const joinedArr = myArr.join(); // Convert array to string
console.log("Joined array:", joinedArr); // Output: "0,1,2,3,4,5,6"
console.log("Type of joinedArr:", typeof joinedArr); // Output: string
console.log("Original myArr:", myArr); // Output: [0, 1, 2, 3, 4, 5, 6] (unchanged)

// 7. Slice vs. Splice (Interview Focus)
console.log("\n--- Slice vs. Splice ---");
// slice(): Non-destructive, copies portion (end index exclusive)
const sliceArr = myArr.slice(1, 3); // From index 1 to before 3
console.log("slice(1, 3):", sliceArr); // Output: [1, 2]
console.log("myArr after slice:", myArr); // Output: [0, 1, 2, 3, 4, 5, 6] (unchanged)

// splice(): Destructive, removes portion and modifies original
const spliceArr = myArr.splice(1, 3); // Start at 1, remove 3 elements
console.log("splice(1, 3):", spliceArr); // Output: [1, 2, 3]
console.log("myArr after splice:", myArr); // Output: [0, 4, 5, 6] (modified)

// 8. Practical Example: To-Do List Simulation
console.log("\n--- To-Do List Simulation ---");
const todoList = ["Learn JS", "Build Project", "Practice Coding"];
console.log("Initial to-do list:", todoList); // Output: ["Learn JS", "Build Project", "Practice Coding"]

// Add task at start
todoList.unshift("Plan Day");
console.log("After unshift('Plan Day'):", todoList); // Output: ["Plan Day", "Learn JS", "Build Project", "Practice Coding"]

// Remove completed task
todoList.shift(); // Remove "Plan Day"
console.log("After shift():", todoList); // Output: ["Learn JS", "Build Project", "Practice Coding"]

// Check if task exists
console.log("Includes 'Build Project':", todoList.includes("Build Project")); // Output: true
