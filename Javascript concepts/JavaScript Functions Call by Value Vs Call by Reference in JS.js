// Call by Value (Used for Primitives)

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

/*
What Happens Internally?

a receives value 10

b receives value 20

They live in separate memory than the variables num1, num2

The function only adds the two values and returns result

Original values remain unchanged

*/

// Call by Reference (Used for Objects & Arrays)

let person = { name: "John" };
let friend = person;

// Changing person also affects friend
person.name = "Jane";

console.log(person);
console.log(friend);

/*
What Happens Internally?
person holds a reference (pointer) to an object in memory

friend = person → now both point to the same object

Mutating person.name updates the shared object

*/
