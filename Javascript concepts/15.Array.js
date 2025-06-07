/*
 * JavaScript Arrays - A Comprehensive Guide
 * 
 * An array in JavaScript is a special type of object that stores multiple values in a single variable.
 * Arrays can store any type of data (numbers, strings, objects, etc.) and are zero-indexed.
 * 
 * Key Characteristics:
 * - Zero-based indexing (first element is at index 0)
 * - Dynamic size (can grow or shrink)
 * - Can store mixed data types
 * - Have built-in methods for manipulation
 */

// =============================================
// 1. CREATING ARRAYS
// =============================================

/*
 * There are two main ways to create arrays in JavaScript:
 * 1. Array Literal (Recommended) - More readable and efficient
 * 2. Array Constructor - Less common, but useful in specific cases
 */

// Method 1: Array Literal (Recommended)
let emptyArray = [];  // Creates an empty array
console.log("Empty array:", emptyArray);

let numberArray = [1, 2, 3, 4, 5];  // Creates array with numbers
console.log("Number array:", numberArray);

// Method 2: Array Constructor
let constructorArray = new Array(10, 20, 30, 40, 50);
console.log("Constructor array:", constructorArray);

// =============================================
// 2. ACCESSING ARRAY ELEMENTS
// =============================================

/*
 * Array elements are accessed using their index (position) in the array.
 * Indexes start at 0 for the first element.
 * You can access elements using square bracket notation: array[index]
 */

let webTech = ["html", "css", "js", "react", "node", "express", "mongoDB"];

// Accessing individual elements
console.log("First element (index 0):", webTech[0]);  // html
console.log("Second element (index 1):", webTech[1]); // css
console.log("Third element (index 2):", webTech[2]);  // js

// Accessing first and last elements (common operations)
let firstElement = webTech[0];
let lastElement = webTech[webTech.length - 1];
console.log("First element:", firstElement);
console.log("Last element:", lastElement);

// =============================================
// 3. MODIFYING ARRAYS
// =============================================

/*
 * Arrays are mutable, meaning their elements can be changed after creation.
 * You can modify elements directly using their index.
 */

let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// Modifying an element
numbers[0] = 100;
console.log("After modification:", numbers);

// =============================================
// 4. ARRAY METHODS - ADDING ELEMENTS
// =============================================

/*
 * Common methods to add elements to arrays:
 * - push(): Adds element(s) to the end
 * - unshift(): Adds element(s) to the beginning
 */

let fruits = [1, 2, 3, 4, 5];
console.log("Original array:", fruits);

// Adding to end of array
fruits.push(6);
console.log("After push:", fruits);

// Adding to beginning of array
fruits.unshift(0);
console.log("After unshift:", fruits);

// =============================================
// 5. ARRAY METHODS - REMOVING ELEMENTS
// =============================================

/*
 * Common methods to remove elements from arrays:
 * - pop(): Removes and returns the last element
 * - shift(): Removes and returns the first element
 */

let fruitBasket = ["Apple", "Banana", "Cherry", "Date"];
console.log("Original array:", fruitBasket);

// Removing from end
let removedLast = fruitBasket.pop();
console.log("Removed element:", removedLast);
console.log("After pop:", fruitBasket);

// Removing from beginning
let removedFirst = fruitBasket.shift();
console.log("Removed element:", removedFirst);
console.log("After shift:", fruitBasket);

// =============================================
// 6. ARRAY LENGTH AND SIZE MANIPULATION
// =============================================

/*
 * The length property:
 * - Returns the number of elements in an array
 * - Can be used to resize arrays
 * - Can be used to truncate arrays
 */

let sizeArray = [10, 20, 30, 40, 50];
console.log("Original length:", sizeArray.length);

// Increasing array size
sizeArray.length = 7;
console.log("After increasing length:", sizeArray);
console.log("New length:", sizeArray.length);

// Decreasing array size (truncates array)
sizeArray.length = 2;
console.log("After decreasing length:", sizeArray);
console.log("New length:", sizeArray.length);

// =============================================
// 7. ITERATING THROUGH ARRAYS
// =============================================

/*
 * There are multiple ways to iterate through arrays:
 * - for loop (traditional)
 * - for...of loop (modern)
 * - forEach() method (functional)
 */

let colors = ["red", "green", "blue", "yellow", "purple"];

// Traditional for loop
console.log("Using for loop:");
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// =============================================
// 8. ARRAY OPERATIONS
// =============================================

/*
 * Common array operations:
 * - concat(): Combines arrays
 * - join(): Converts array to string
 * - toString(): Converts array to string
 * - sort(): Sorts array elements
 * - reverse(): Reverses array order
 */

// Array Concatenation
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let combinedArray = array1.concat(array2);
console.log("Concatenated array:", combinedArray);

// Array to String Conversion
let sports = ["Cricket", "Football", "Tennis", "Basketball", "Hockey"];
console.log("Original array:", sports);
console.log("Array type:", typeof sports);

let sportsString = sports.toString();
console.log("As string:", sportsString);
console.log("String type:", typeof sportsString);

// Array Type Checking
let sampleArray = [1, 2, 3, 4, 5];
console.log("Type of array:", typeof sampleArray);
console.log("Is array? (Array.isArray):", Array.isArray(sampleArray));
console.log("Is array? (instanceof):", sampleArray instanceof Array);

// Array Manipulation Methods
let numbersArray = [1, 2, 3, 4, 5];

// Splice: Removes elements and/or adds new elements
console.log("Original array:", numbersArray);
let removed = numbersArray.splice(2, 3);
console.log("Removed elements:", removed);
console.log("Array after splice:", numbersArray);

// Sort: Sorts array elements
let unsorted = [10, 50, 30, 40, 20];
console.log("Unsorted array:", unsorted);
unsorted.sort();
console.log("Sorted array:", unsorted);

// Reverse: Reverses array order
let original = [1, 2, 3, 4, 5];
console.log("Original array:", original);
original.reverse();
console.log("Reversed array:", original);

// Join: Joins array elements with a separator
let joinArray = [1, 2, 3, 4, 5];
console.log("Original array:", joinArray);
let joined = joinArray.join("-");
console.log("Joined with '-':", joined);
