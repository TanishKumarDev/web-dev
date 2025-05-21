// Basic String Declaration
let name = "Tanish";
let repoCount = 50;

// Old Concatenation (Not Recommended)
console.log(name + " has " + repoCount + " repos");
// Output: Tanish has 50 repos

// Modern String Interpolation (Recommended)
console.log(`Hello, my name is ${name} and I have ${repoCount} repos`);
// Output: Hello, my name is Tanish and I have 50 repos

// String as Object
let gameName = new String("Tanish-K");
console.log(gameName); // Output: [String: 'Tanish-K']
console.log(gameName[0]); // Output: H
console.log(gameName.length); // Output: 8
console.log(gameName.__proto__); // Output: String prototype object

// String Methods
console.log(gameName.toUpperCase()); // Output: Tanish-K
console.log(gameName); // Output: [String: 'Tanish-K'] (original unchanged)
console.log(gameName.charAt(2)); // Output: t
console.log(gameName.indexOf("t")); // Output: 2

// Substring and Slice
let newString = gameName.substring(0, 3);
console.log(newString); // Output: Hit
let anotherString = gameName.slice(-8, -5);
console.log(anotherString); // Output: Hit (negative indices supported)

// Trim
let strWithSpaces = "   Tanish   ";
console.log(strWithSpaces); // Output:    Tanish   
console.log(strWithSpaces.trim()); // Output: Tanish

// Replace
let url = "https://tanish@gmail.com";
console.log(url.replace("%20", "-")); // Output: https://Tanish-choudhary.com

// Includes
console.log(url.includes("Tanish")); // Output: true
console.log(url.includes("xyz")); // Output: false

// Split
let splitStr = "Tanish-K-Dev";
console.log(splitStr.split("-")); // Output: ["Tanish", "K", "Dev"]

// Reference: MDN for string methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String