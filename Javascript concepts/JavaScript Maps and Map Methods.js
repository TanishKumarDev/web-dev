// -----------------------------------------------------------------------------
// ✅ JavaScript Map and Map Methods
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 1. ✅ What is a Map?
// -----------------------------------------------------------------------------

/**
 * ➤ A `Map` is a collection of key-value pairs.
 * ➤ Keys can be of any data type (objects, functions, primitives).
 * ➤ Maintains the order of insertion.
 * ➤ More powerful than plain objects for key-value storage.
 */

// -----------------------------------------------------------------------------
// 2. ✅ Creating a Map
// -----------------------------------------------------------------------------

const myMap = new Map();

// Add values using set(key, value)
myMap.set("name", "Tanish");
myMap.set("age", 21);
myMap.set(1, "numberKey");
myMap.set(true, "booleanKey");

console.log("Map:", myMap);

// -----------------------------------------------------------------------------
// 3. ✅ Common Map Methods
// -----------------------------------------------------------------------------

// 🔹 set(key, value)
myMap.set("country", "India");

// 🔹 get(key)
console.log(myMap.get("name"));      // Tanish
console.log(myMap.get(1));           // numberKey

// 🔹 has(key)
console.log(myMap.has("age"));       // true
console.log(myMap.has("email"));     // false

// 🔹 delete(key)
myMap.delete("country");             // removes key "country"

// 🔹 clear()
const tempMap = new Map([["a", 1], ["b", 2]]);
tempMap.clear();                     // Empties the map

// 🔹 size
console.log("Map Size:", myMap.size); // number of entries

// -----------------------------------------------------------------------------
// 4. ✅ Iterating over a Map
// -----------------------------------------------------------------------------

const user = new Map([
  ["id", 101],
  ["username", "codeMaster"],
  ["isAdmin", true]
]);

// 🔹 for...of with entries()
for (let [key, value] of user.entries()) {
  console.log(`${key}: ${value}`);
}

// 🔹 forEach
user.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// 🔹 keys()
for (let key of user.keys()) {
  console.log("Key:", key);
}

// 🔹 values()
for (let val of user.values()) {
  console.log("Value:", val);
}

// 🔹 entries()
for (let entry of user.entries()) {
  console.log("Entry:", entry);
}

// -----------------------------------------------------------------------------
// 5. ✅ Convert Map to Array
// -----------------------------------------------------------------------------

const arrFromMap = Array.from(user); // or [...user]
console.log("Array from Map:", arrFromMap);

// -----------------------------------------------------------------------------
// 6. ✅ Convert Array to Map
// -----------------------------------------------------------------------------

const arrayPairs = [["lang", "JavaScript"], ["level", "Advanced"]];
const mapFromArray = new Map(arrayPairs);
console.log("Map from Array:", mapFromArray);

// -----------------------------------------------------------------------------
// 7. ✅ Map vs Object - Key Differences
// -----------------------------------------------------------------------------

/**
 * Object:
 * - Only strings/symbols as keys
 * - Unordered
 * - Simpler but limited

 * Map:
 * - Any type of key (object, number, string, etc.)
 * - Maintains insertion order
 * - Optimized for frequent addition/removal of key-value pairs
 */

// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * ➤ Map Methods:
 *    - set(key, value)
 *    - get(key)
 *    - has(key)
 *    - delete(key)
 *    - clear()
 *    - size
 *
 * ➤ Iteration:
 *    - for...of with entries(), keys(), values()
 *    - forEach()
 *
 * ➤ Use Map when you need ordered key-value storage with any data type as key
 */
