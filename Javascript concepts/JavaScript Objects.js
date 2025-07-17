// JavaScript Notes: Objects
// Examples for object creation, properties, methods, and related concepts

// === Literal Form: Creating an Object ===
let student = {
    name: "Martin", // Property: string
    class: "12th", // Property: string
    section: "A" // Property: string
};
console.log(student.name); // Output: Martin

// === Constructed Form: Creating an Object ===
let product = new Object();
product.name = "Earbuds"; // Add property
product.cost = "799"; // Add property
console.log(product.name); // Output: Earbuds

// === Object Properties and Methods ===
let myObj = {
    int_prop: 5, // Integer property
    str_prop: "GeeksforGeeks", // String property
    func_prop: function() { // Method
        console.log("Welcome to GeeksforGeeks!");
    }
};
console.log(myObj.int_prop); // Output: 5
myObj.func_prop(); // Output: Welcome to GeeksforGeeks!

// === Prototypal Inheritance with Object.create() ===
const coder = {
    isStudying: false, // Property
    printIntroduction: function() { // Method
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder); // Inherit from coder
me.name = "Mukul"; // Add own property
me.isStudying = true; // Override inherited property
me.printIntroduction(); // Output: My name is Mukul. Am I studying?: true

// === Checking Key Existence ===
let exampleObj = {
    id: 1, // Property
    remarks: "Good" // Property
};
console.log("id" in exampleObj); // Output: true
console.log(exampleObj.hasOwnProperty("remarks")); // Output: true
console.log(Object.keys(exampleObj).includes("name")); // Output: false

// === Pushing Arrays into Objects ===
let obj = {
    arrayOne: [], // Empty array property
    arrayTwo: [] // Empty array property
};
let arraynew = ["Geeks", "for", "Geeks"];
obj.arrayOne.push(arraynew); // Add entire array
obj.arrayTwo.push(...arraynew); // Add array elements
console.log(obj.arrayOne); // Output: [["Geeks", "for", "Geeks"]]
console.log(obj.arrayTwo); // Output: ["Geeks", "for", "Geeks"]

// === Primitives vs. Objects ===
let strPrimitive = "GeeksforGeeks";
console.log(typeof strPrimitive); // Output: string
console.log(strPrimitive instanceof String); // Output: false

let strObject = new String("GeeksforGeeks");
console.log(typeof strObject); // Output: object
console.log(strObject instanceof String); // Output: true