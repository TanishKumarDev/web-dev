// Data types in JavaScript are flexible due to which the type of the variables can be changed when the program runs. Type Conversion and Type Coercion are the two ways through which we can change the data type of the variables from one type to the other.

// Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

// 1. String to Number
let s = "123";
let n= Number(s);
console.log(n);

// 2. Number to String
let n1 = "123";
let s1 = Number(n1);
console.log(s1);

// 3. Boolean to Number
let bool = true;
let n2 = Number(bool);
console.log(n2);

// 4. Boolean to String
let bool1 = true;
let s2 = String(bool1);
console.log(s2);

// Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.

// 1. String + Number
let n3=5;
let s3 = "5";
let result = n3+s3;
console.log(result);
console.log(typeof(result));

// 2. Boolean + Number
let bool3 = true;
let n4 = 10;
let result1 = bool3 + n4;  // JavaScript converts boolean to number
console.log(result1);  
console.log(typeof(result1));

// 3. Comparison of Different Types
let s5 = "10";
let n5 = 10;
console.log(s5 == n5);  // true, JavaScript converts str to number

// 4. Boolean Context
let s4= "";
if (s4) {
    console.log("this won't print"); // empty sting is falsy
} else {
    console.log("this will print"); // // Empty string is automatically converts(coerced) to false
}

// 🎯 Final one-line answer for you: Check type using typeof, and remember: + cares about strings, - * / care about numbers, and == tries to match types.

// Line 1
console.log(2 + '3');   
// Explanation: 
// Number (2) + String ('3')
// '+' operator jab ek operand string hota hai, to doosra bhi string ban jaata hai
// So, "2" + "3" => "23" (String concatenation)

// Output: "23"

// --------------------------------------------------------

// Line 2
console.log('5' - 2);
// Explanation: 
// String ('5') - Number (2)
// '-' operator jab hota hai, JS string ko number mein convert karta hai
// So, 5 - 2 => 3 (Number subtraction)

// Output: 3

// --------------------------------------------------------

// Line 3
console.log(true + 1);
// Explanation: 
// Boolean (true) + Number (1)
// true ko number mein convert karte hai (true => 1)
// 1 + 1 => 2

// Output: 2

// --------------------------------------------------------

// Line 4
console.log(false == 0);
// Explanation: 
// '==' loose equality karta hai (type coercion allow karta hai)
// false => 0, so 0 == 0 => true

// Output: true

// --------------------------------------------------------

// Line 5
console.log('' == 0);
// Explanation: 
// Empty string ('') loose equality mein 0 ke barabar hoti hai
// '' => 0, so 0 == 0 => true

// Output: true

// --------------------------------------------------------

// Line 6
console.log([] + {});
// Explanation:
// [] is an empty array -> converts to empty string ''
// {} is an empty object -> converts to string '[object Object]'
// '' + '[object Object]' => '[object Object]' (String concatenation)

// Output: "[object Object]"

// --------------------------------------------------------

// Line 7
console.log(null + 5);
// Explanation:
// null implicitly converts to 0
// 0 + 5 => 5

// Output: 5
