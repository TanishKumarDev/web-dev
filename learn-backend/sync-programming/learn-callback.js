// callback ek function hi hota hai jo doosre function ko argument ke roop mein pass hota hai.

// Normal function
function sayHello() {
    console.log("Hello");
}

sayHello();  // direct call

// output 
// Hello

// Callbackfunction
function greet(name, callback) {
  console.log("Hello " + name);
  callback();  // yahan callback run hoga
}

function sayBye() {
  console.log("Goodbye");
}

greet("Tanish", sayBye);

// output
// Hello Tanish
// Goodbye

// 👉 sayBye ko humne argument ki tarah pass kiya, lekin usko greet() ke andar baad mein call kiya.
// Yehi hai callback ka concept.

// Real-life Node.js Example (Async)
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});

// Yahan (err, data) => {...} ek callback function hai.

// Jab tak file read nahi hoti, ye function call nahi hota.

// File read hone ke baad Node.js automatically callback ko call karta hai.