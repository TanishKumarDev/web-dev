// Defining JavaScript Objects : Methods
// 1. Object Literal (Preferred):
// Syntax: const obj = {key1: value1, key2: value2};
const person = {
  firstName: "tanish",
  lastName: "kumar",
  age: 20,
  eyeColor: "blue"
};
console.log(person);


// 2. Empty Object with Property Assignment:
const unknownObject = {};
unknownObject.firsName = "tannu";
unknownObject.lastName = "paswan";
unknownObject.age = 21;
unknownObject.eyeColor = "black";
console.log(unknownObject);

// using 'new Object()' : Similar to object literal but less readable and slower.

const newPerson  = new Object();
newPerson.firstName = "tanish1";
newPerson.lastName = "kumar1";
newPerson.age= 21;
newPerson.eyeColor = "green";
console.log(newPerson);

// Object Properties
// --------------------
// Definition: Named values (key:value pairs) in an object, also called properties.

//  Object Methods