const stringUtils = require('./utils/stringUtils');
const numberUtils = require('./utils/numberUtils');

console.log("Uppercase: ", stringUtils.toUpper("nodejs"));
console.log("Uppercase: ", stringUtils.reverse("Nitin"));
console.log("Is 8 even?: ", numberUtils.isEven(81));
console.log("Factorial of 5: ", numberUtils.factorial(5));