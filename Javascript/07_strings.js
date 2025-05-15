// Basic String Declaration
let name = "Hitesh";
let repoCount = 50;

// Old Concatenation (Not Recommended)
console.log(name + " has " + repoCount + " repos");
// Output: Hitesh has 50 repos

// Modern String Interpolation (Recommended)
console.log(`Hello, my name is ${name} and I have ${repoCount} repos`);
// Output: Hello, my name is Hitesh and I have 50 repos

// String as Object
let gameName = new String("Hitesh-K");
console.log(gameName); // Output: [String: 'Hitesh-K']
console.log(gameName[0]); // Output: H
console.log(gameName.length); // Output: 8
console.log(gameName.__proto__); // Output: String prototype object

// String Methods
console.log(gameName.toUpperCase()); // Output: HITESH-K
console.log(gameName); // Output: [String: 'Hitesh-K'] (original unchanged)
console.log(gameName.charAt(2)); // Output: t
console.log(gameName.indexOf("t")); // Output: 2

// Substring and Slice
let newString = gameName.substring(0, 3);
console.log(newString); // Output: Hit
let anotherString = gameName.slice(-8, -5);
console.log(anotherString); // Output: Hit (negative indices supported)

// Trim
let strWithSpaces = "   Hitesh   ";
console.log(strWithSpaces); // Output:    Hitesh   
console.log(strWithSpaces.trim()); // Output: Hitesh

// Replace
let url = "https://tanish@gmail.com";
console.log(url.replace("%20", "-")); // Output: https://hitesh-choudhary.com

// Includes
console.log(url.includes("hitesh")); // Output: true
console.log(url.includes("xyz")); // Output: false

// Split
let splitStr = "Hitesh-K-Dev";
console.log(splitStr.split("-")); // Output: ["Hitesh", "K", "Dev"]

// Reference: MDN for string methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String