// ===========================================
// ✅ JavaScript JSON (JavaScript Object Notation)
// ===========================================

/**
 * JSON is a format for storing and transporting data
 * ✅ It's text-based and language-independent
 * ✅ Often used for server-client communication
 * ✅ Syntax is very similar to JavaScript objects
 * ✅ Keys must be strings, and data must be valid types
 */

// -----------------------------
// 1. JSON SYNTAX RULES
// -----------------------------

/**
 * JSON format:
 * - Data is in name/value pairs
 * - Data is separated by commas
 * - Curly braces hold objects
 * - Square brackets hold arrays
 */

const jsonExample = `{
  "name": "Tanish",
  "age": 21,
  "skills": ["HTML", "CSS", "JavaScript"],
  "isStudent": true
}`;

// -----------------------------
// 2. JSON STRING to JS OBJECT (parse)
// -----------------------------

// Convert JSON string to JavaScript object
const obj = JSON.parse(jsonExample);
console.log(obj);
console.log(obj.name);       // "Tanish"
console.log(obj.skills[1]);  // "CSS"

// -----------------------------
// 3. JS OBJECT to JSON STRING (stringify)
// -----------------------------

const jsObject = {
  product: "Laptop",
  brand: "HP",
  price: 49999,
  available: true
};

const jsonString = JSON.stringify(jsObject);
console.log(jsonString); // string format

// -----------------------------
// 4. JSON WITH NESTED STRUCTURES
// -----------------------------

const complexJSON = `{
  "user": {
    "id": 101,
    "name": "Tanish",
    "address": {
      "city": "Delhi",
      "pincode": 110001
    },
    "courses": ["JS", "C++", "Node"]
  }
}`;

const parsed = JSON.parse(complexJSON);
console.log(parsed.user.name);         // "Tanish"
console.log(parsed.user.address.city); // "Delhi"

// -----------------------------
// 5. Common JSON Data Types
// -----------------------------

/**
 * ✅ String
 * ✅ Number
 * ✅ Boolean
 * ✅ Null
 * ✅ Object
 * ✅ Array
 */

// Invalid types in JSON: functions, undefined, symbols

// -----------------------------
// 6. JSON.stringify() OPTIONS
// -----------------------------

const student = {
  name: "Riya",
  age: 22,
  college: "IIT"
};

// With spacing (pretty print)
console.log(JSON.stringify(student, null, 2)); // 2 spaces indentation

// -----------------------------
// 7. JSON.parse() with reviver
// -----------------------------

const jsonWithDate = `{
  "name": "Tanish",
  "dob": "2003-05-20T00:00:00Z"
}`;

const revived = JSON.parse(jsonWithDate, function (key, value) {
  if (key === "dob") {
    return new Date(value); // convert date string to Date object
  }
  return value;
});

console.log(revived.dob instanceof Date); // true

// -----------------------------
// 8. JSON use cases
// -----------------------------

/**
 * ✅ API Responses (fetch)
 * ✅ Config files (package.json)
 * ✅ Local storage data
 * ✅ Data interchange between frontend-backend
 */

// -----------------------------
// 9. JSON vs JS Object
// -----------------------------

/**
 * JSON: text format (string)
 * JS Object: actual runtime object
 *
 * JSON.stringify() converts object → string
 * JSON.parse() converts string → object
 */

// -----------------------------
// 10. Interview Points
// -----------------------------

/**
 * 🔹 JSON keys must be in double quotes
 * 🔹 JSON cannot store functions or undefined
 * 🔹 JSON is widely used in REST APIs
 * 🔹 JSON is language-independent and widely supported
 * 🔹 JSON is stricter than JS objects
 */

