// Union Type

type Animal = "Dog" | "Cat" | "Bird";

let pet: Animal;
pet = "Dog";   // ✅ valid
// pet = "Lion";  // ❌ Error


// Intersection Type

type Person = { name: string } & { age: number };

const user: Person = {
  name: "Tanish",
  age: 22
}; // ✅ valid

