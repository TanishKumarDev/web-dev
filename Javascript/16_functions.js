// Rest Operator (Shopping Cart)
function calculateCartPrice(...prices) {
  return prices;
}
console.log(calculateCartPrice(200, 400, 500)); // Output: [200, 400, 500]

// Rest with Named Parameters
function calculateCartPriceWithNamed(val1, val2, ...prices) {
  return { val1, val2, prices };
}
console.log(calculateCartPriceWithNamed(500, 2000, 200, 400)); 
// Output: { val1: 500, val2: 2000, prices: [200, 400] }

// Object Parameter
const user = {
  username: "Tanish",
  price: 199
};
function handleObject(anyObject) {
  if (!anyObject.username || !anyObject.price) {
    console.log("Missing username or price");
    return;
  }
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user); // Output: Username is Tanish and price is 199
handleObject({ username: "Sam", price: 399 }); // Output: Username is Sam and price is 399
handleObject({ username: "Sam" }); // Output: Missing username or price

// Array Parameter
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  if (!Array.isArray(getArray) || getArray.length < 2) {
    console.log("Invalid array or insufficient elements");
    return;
  }
  return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // Output: 400
console.log(returnSecondValue([1000, 2000, 3000])); // Output: 2000
console.log(returnSecondValue([100])); // Output: Invalid array or insufficient elements

// Reference: MDN for Rest Parameters, Objects, and Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array