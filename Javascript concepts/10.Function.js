/*
 * JavaScript Functions - A Comprehensive Guide
 * 
 * A JavaScript function is a block of code designed to perform a specific task.
 * Functions are executed when invoked (called) and can take parameters and return values.
 * 
 * This guide covers:
 * 1. Function Syntax: Defining functions with the function keyword
 * 2. Function Invocation: Ways to call functions
 * 3. Parameters and Arguments: Passing data to functions
 * 4. Return Statement: Returning values from functions
 * 5. The () Operator: Invoking functions vs. referencing them
 * 6. Functions as Variable Values: Using functions in expressions
 * 7. Local Variables: Scope and lifetime of variables in functions
 * 
 * Key Notes:
 * - Functions promote code reuse and modularity
 * - Parameters act as local variables inside functions
 * - Local variables are only accessible within their function
 * - Accessing a function without () returns the function object
 * 
 */

// =============================================
// 1. FUNCTION SYNTAX AND BASIC EXAMPLE
// =============================================

/*
 * Functions are defined using the function keyword, a name, parameters in (),
 * and a code block in {}. Function names follow variable naming rules (letters,
 * digits, underscores, dollar signs).
 * 
 * Example: Multiply two numbers and return the product.
 */

function multiply(p1, p2) {
    return p1 * p2; // Returns the product of p1 and p2
  }
  
  console.log("Multiply 4 * 3:", multiply(4, 3)); // 12
  
  // Storing return value
  let result = multiply(5, 6);
  console.log("Multiply 5 * 6 (stored):", result); // 30
  
  // =============================================
  // 2. FUNCTION INVOCATION
  // =============================================
  
  /*
   * Functions are executed when invoked via:
   * - JavaScript code (e.g., function call)
   * - Events (e.g., button click, covered later)
   * - Self-invocation (covered later)
   * 
   * Example: Convert Fahrenheit to Celsius.
   */
  
  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32); // Converts Fahrenheit to Celsius
  }
  
  let celsius = toCelsius(77); // Invoke with argument 77
  console.log("77°F to Celsius:", celsius); // 25
  
  // Incorrect invocation (missing argument)
  let wrongCall = toCelsius(); // Returns NaN (fahrenheit is undefined)
  console.log("toCelsius without argument:", wrongCall); // NaN
  
  // Referencing function without () returns function object
  let funcRef = toCelsius;
  console.log("Function reference (no ()): ", funcRef); // [Function: toCelsius]
  
  // =============================================
  // 3. PARAMETERS AND ARGUMENTS
  // =============================================
  
  /*
   * Parameters are variables listed in the function definition.
   * Arguments are values passed when the function is called.
   * Parameters behave as local variables inside the function.
   * 
   * Example: Function with multiple parameters.
   */
  
  function addNumbers(a, b, c) {
    return a + b + c; // Sum of three parameters
  }
  
  console.log("Add 1 + 2 + 3:", addNumbers(1, 2, 3)); // 6
  console.log("Add 10 + 20 + 30:", addNumbers(10, 20, 30)); // 60
  
  // Fewer arguments than parameters
  console.log("Add with missing argument:", addNumbers(1, 2)); // NaN (c is undefined)
  
  // More arguments than parameters (extra arguments ignored)
  console.log("Add with extra argument:", addNumbers(1, 2, 3, 4)); // 6 (4 is ignored)
  
  // =============================================
  // 4. RETURN STATEMENT
  // =============================================
  
  /*
   * The return statement stops function execution and sends a value back to the caller.
   * If no return is specified, the function returns undefined.
   * 
   * Example: Calculate square of a number.
   */
  
  function square(num) {
    return num * num; // Returns the square
  }
  
  let squared = square(4);
  console.log("Square of 4:", squared); // 16
  
  // Function without return
  function noReturn() {
    let x = 10; // No return statement
  }
  
  console.log("Function without return:", noReturn()); // undefined
  
  // Early return
  function checkPositive(num) {
    if (num > 0) return "Positive"; // Early return
    return "Non-positive";
  }
  
  console.log("Check 5:", checkPositive(5)); // Positive
  console.log("Check -3:", checkPositive(-3)); // Non-positive
  
  // =============================================
  // 5. THE () OPERATOR
  // =============================================
  
  /*
   * The () operator invokes a function, executing its code.
   * Without (), the function object is returned, not the result.
   * 
   * Example: Using toCelsius function.
   */
  
  function toCelsiusAgain(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }
  
  console.log("Invoke with ():", toCelsiusAgain(32)); // 0 (Celsius)
  console.log("Without ():", toCelsiusAgain); // [Function: toCelsiusAgain]
  
  // Incorrect usage
  let invalid = toCelsiusAgain; // Function object, not result
  console.log("Assigning function without ():", invalid); // [Function: toCelsiusAgain]
  
  // =============================================
  // 6. FUNCTIONS AS VARIABLE VALUES
  // =============================================
  
  /*
   * Functions can be used like variables in assignments, calculations, or expressions.
   * The function's return value can be used directly without storing in a variable.
   * 
   * Example: Using toCelsius in a string.
   */
  
  let tempText = "The temperature is " + toCelsiusAgain(77) + " Celsius";
  console.log("Function in expression:", tempText); // The temperature is 25 Celsius
  
  // Compare with storing result first
  let tempValue = toCelsiusAgain(77);
  let tempTextStored = "The temperature is " + tempValue + " Celsius";
  console.log("Stored result:", tempTextStored); // The temperature is 25 Celsius
  
  // Function in arithmetic
  function getPrice(quantity) {
    return quantity * 10;
  }
  
  let totalPrice = getPrice(3) + getPrice(2); // 30 + 20
  console.log("Function in arithmetic:", totalPrice); // 50
  
  // =============================================
  // 7. LOCAL VARIABLES
  // =============================================
  
  /*
   * Variables declared inside a function (with let, const, or var) are local.
   * Local variables are only accessible within the function and are destroyed when
   * the function completes.
   * Different functions can use the same variable names without conflict.
   * 
   * Example: Local variable scope.
   */
  
  function carFunction() {
    let carName = "Volvo"; // Local variable
    console.log("Inside function:", carName); // Accessible here
  }
  
  carFunction();
  // console.log("Outside function:", carName); // Error: carName is not defined
  
  // Same variable name in different functions
  function firstFunction() {
    let message = "Hello";
    console.log("First function:", message); // Hello
  }
  
  function secondFunction() {
    let message = "World";
    console.log("Second function:", message); // World
  }
  
  firstFunction();
  secondFunction();
  
  // Global vs Local
  let globalVar = "I'm global";
  
  function scopeTest() {
    let localVar = "I'm local";
    console.log("Inside scopeTest - globalVar:", globalVar); // Accessible
    console.log("Inside scopeTest - localVar:", localVar); // Accessible
  }
  
  scopeTest();
  console.log("Outside scopeTest - globalVar:", globalVar); // I'm global
  // console.log("Outside scopeTest - localVar:", localVar); // Error: localVar is not defined