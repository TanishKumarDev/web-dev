```javascript
// File: 02_arrays.js
// Purpose: Practice examples for Arrays Part 2 in JavaScript (Chai aur Code)
// All examples from the YouTube video consolidated here

// 1. Declaring Arrays (Marvel and DC Heroes)
console.log("\n--- Array Declaration ---");
const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];
console.log("Marvel Heroes:", marvelHeroes); // Output: ["Thor", "Ironman", "Spiderman"]
console.log("DC Heroes:", dcHeroes); // Output: ["Superman", "Flash", "Batman"]

// 2. Merging Arrays with push() (Incorrect Approach)
console.log("\n--- Merging with push() ---");
const pushResult = [...marvelHeroes]; // Create a copy to avoid modifying original
pushResult.push(dcHeroes); // Adds dcHeroes as a single element (nested array)
console.log("After push(dcHeroes):", pushResult); // Output: ["Thor", "Ironman", "Spiderman", ["Superman", "Flash", "Batman"]]

// Accessing nested element (not ideal)
console.log("Accessing nested Flash:", pushResult[3][1]); // Output: "Flash"

// 3. Merging Arrays with concat()
console.log("\n--- Merging with concat() ---");
const concatHeroes = marvelHeroes.concat(dcHeroes); // Returns new array
console.log("Concatenated Heroes:", concatHeroes); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]
console.log("Original Marvel Heroes:", marvelHeroes); // Output: ["Thor", "Ironman", "Spiderman"] (unchanged)

// 4. Merging Arrays with Spread Operator (Preferred)
console.log("\n--- Merging with Spread Operator ---");
const newHeroes = [...marvelHeroes, ...dcHeroes]; // Spreads elements individually
console.log("Spread Heroes:", newHeroes); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

// Adding another array with spread
const moreHeroes = ["Hulk", "Wonder Woman"];
const allHeroes = [...marvelHeroes, ...dcHeroes, ...moreHeroes];
console.log("All Heroes (with moreHeroes):", allHeroes); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman", "Hulk", "Wonder Woman"]

// 5. Flattening Nested Arrays with flat()
console.log("\n--- Flattening Arrays with flat() ---");
const nestedArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log("Nested Array:", nestedArr); // Output: [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const flatArr = nestedArr.flat(Infinity); // Flattens all levels
console.log("Flattened Array:", flatArr); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Specific depth flattening
const flatDepth2 = nestedArr.flat(2); // Flattens up to 2 levels
console.log("Flattened (depth 2):", flatDepth2); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]

// 6. Checking and Converting to Arrays
console.log("\n--- Checking and Converting to Arrays ---");
// Array.isArray()
const str = "Hitesh";
console.log("Is 'Hitesh' an array?", Array.isArray(str)); // Output: false
console.log("Is marvelHeroes an array?", Array.isArray(marvelHeroes)); // Output: true

// Array.from()
const nameArr = Array.from("Hitesh"); // Converts string to array
console.log("Array from 'Hitesh':", nameArr); // Output: ["H", "i", "t", "e", "s", "h"]

// Array.from() with object (Interview Question)
const obj = { name: "Hitesh" };
console.log("Array from object:", Array.from(obj)); // Output: [] (empty array, cannot directly convert)

// Workaround for object (use Object.keys or Object.values)
console.log("Array from object keys:", Array.from(Object.keys(obj))); // Output: ["name"]
console.log("Array from object values:", Array.from(Object.values(obj))); // Output: ["Hitesh"]

// 7. Creating Arrays with Array.of()
console.log("\n--- Creating Arrays with Array.of() ---");
const score1 = 100;
const score2 = 200;
const score3 = 300;
const scoresArr = Array.of(score1, score2, score3);
console.log("Array.of scores:", scoresArr); // Output: [100, 200, 300]

// 8. Practical Example: Data Scraping Simulation
console.log("\n--- Data Scraping Simulation ---");
const scrapedData = "Title,Price,Rating"; // Simulating scraped CSV data
const dataArr = Array.from(scrapedData.split(",")); // Convert to array
console.log("Scraped Data as Array:", dataArr); // Output: ["Title", "Price", "Rating"]

// Combining multiple sources
const moreData = ["Description", "Reviews"];
const allData = [...dataArr, ...moreData];
console.log("Combined Data:", allData); // Output: ["Title", "Price", "Rating", "Description", "Reviews"]
```