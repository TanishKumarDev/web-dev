console.log(typeof "Hello");
console.log(typeof 42);     
console.log(typeof true);
console.log(typeof {});      
console.log(typeof undefined);
/*
Always outputs the data type as a string.
Can be used anywhere without imports or dependencies.
Determines the type of literals, variables, and expressions.

Special Cases:
    typeof null returns "object" (a known quirk).
    Functions return "function" instead of "object".

    Useful for checking types in dynamic or untyped environments.
*/

// Example 1 : Validatting user inpyt
function validateInput(input){
    if(typeof input !== "string"){
        console.log("Invalid input. Input must be a string.");
    } else{
        console.log("Input is valid.");
    }
}
validateInput(42); // invalid
validateInput("Hello"); // valid

// Example 2: Dynamic Property Access
const obj = {
    name: "John",
    age: 30
};
const propertyName = "age";
console.log(obj[propertyName]);

// Example 2: Dynamic Property Access
const settings = { darkMode: false };
if (typeof settings.darkMode === "boolean") {
    console.log("Dark mode setting is valid.");
} else {
    console.log("Dark mode setting is invalid.");
}

// Example 3: Object Type Checking
function isObject(obj){
    return typeof obj === "object" && obj !== null;
}
console.log(isObject({})); // true
console.log(isObject("Hello")); // false


// Example of Limitations
console.log(typeof null);          // Output: object
console.log(typeof [1, 2, 3]);     // Output: object
console.log(typeof NaN);           // Output: number
console.log(typeof class MyClass {}); // Output: function
/*
typeof null returns "object", which is misleading and a legacy bug in JavaScript.
Cannot distinguish between arrays and objects (typeof [] is "object").
Cannot differentiate between classes or specific object types.
typeof NaN returns "number", though it's technically "not a number."
 */