
// Array Declaration
let myArr = [0, 1, 2, 3, 4, 5];
let heroes = ["Ironman", "Batman", true, 123];
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]
console.log(heroes); // Output: ["Ironman", "Batman", true, 123]

// Accessing Elements
console.log(myArr[2]); // Output: 2

// Array Properties
console.log(myArr.length); // Output: 6

// Array Methods
// push
myArr.push(6);
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]
myArr.push(7);
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// pop
myArr.pop();
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// unshift
myArr.unshift(9);
console.log(myArr); // Output: [9, 0, 1, 2, 3, 4, 5, 6]

// shift
myArr.shift();
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// includes
console.log(myArr.includes(9)); // Output: false
console.log(myArr.includes(3)); // Output: true

// indexOf
console.log(myArr.indexOf(3)); // Output: 2
console.log(myArr.indexOf(9)); // Output: -1

// join
let newArr = myArr.join();
console.log(newArr); // Output: "0,1,2,3,4,5,6"
console.log(typeof newArr); // Output: string

// slice
let newArr1 = myArr.slice(1, 3);
console.log(newArr1); // Output: [1, 2]
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6] (unchanged)

// splice
let newArr2 = myArr.splice(1, 3);
console.log(newArr2); // Output: [1, 2, 3]
console.log(myArr); // Output: [0, 4, 5, 6] (modified)

// Reference: MDN for Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
