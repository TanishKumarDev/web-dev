/*
 * 1. Basic Type Inference
 * TypeScript automatically determines types from initial values
 */

// Number inference
let inferredAge = 25;  // TypeScript infers as number
let inferredScore = 95.5;  // TypeScript infers as number
console.log("Age type:", typeof inferredAge);
console.log("Score type:", typeof inferredScore);

// String inference
let inferredName = "Tanish";  // TypeScript infers as string
let inferredGreeting = `Hello, ${inferredName}!`;  // TypeScript infers as string
console.log("Name type:", typeof inferredName);
console.log("Greeting type:", typeof inferredGreeting);

// Boolean inference
let inferredIsActive = true;  // TypeScript infers as boolean
let inferredIsCompleted = false;  // TypeScript infers as boolean
console.log("IsActive type:", typeof inferredIsActive);

/**
 * 2. Array Type Inference
 * TypeScript infers array types based on their elements
 */

// String array inference
let inferredFruits = ["Apple", "Banana", "Cherry"];  // TypeScript infers as string[]
console.log("Fruits array:", inferredFruits);

// Number array inference
let inferredNumbers = [1, 2, 3, 4, 5];  // TypeScript infers as number[]
console.log("Numbers array:", inferredNumbers);

// Mixed array inference
let inferredMixed = ["Tanish", 25, true];  // TypeScript infers as (string | number | boolean)[]
console.log("Mixed array:", inferredMixed);

/**
 * 3. Object Type Inference
 * TypeScript infers object types based on their properties
 */

// Object inference
let inferredPerson = {
    name: "Tanish",
    age: 25,
    isDeveloper: true
};  // TypeScript infers the complete object type
console.log("Person object:", inferredPerson);

// Nested object inference
let inferredEmployee = {
    name: "Tanish",
    details: {
        role: "Developer",
        experience: 3,
        skills: ["TypeScript", "JavaScript", "React"]
    }
};  // TypeScript infers nested object structure
console.log("Employee object:", inferredEmployee);

/**
 * 4. Function Type Inference
 * TypeScript infers function parameter and return types
 */

// Function return type inference
function inferredAdd(a: number, b: number) {
    return a + b;  // TypeScript infers return type as number
}
console.log("Add function result:", inferredAdd(5, 10));

// Function with object parameter inference
function inferredGreet(user: { name: string; age: number }) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}  // TypeScript infers return type as string
console.log("Greet function result:", inferredGreet({ name: "Tanish", age: 25 }));

/**
 * 5. Complex Type Inference Examples
 */

// Array method inference
let inferredNumbers2 = [1, 2, 3, 4, 5];
let inferredDoubled = inferredNumbers2.map(n => n * 2);  // TypeScript infers as number[]
console.log("Doubled numbers:", inferredDoubled);

// Object method inference
let inferredCalculator = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b
};  // TypeScript infers method types
console.log("Calculator add result:", inferredCalculator.add(10, 5));

// Class property inference
class InferredStudent {
    name = "Tanish";  // TypeScript infers as string
    age = 25;  // TypeScript infers as number
    grades = [85, 90, 95];  // TypeScript infers as number[]
}
const inferredStudent = new InferredStudent();
console.log("Student object:", inferredStudent);

/**
 * 6. Type Inference Best Practices
 */

// Let TypeScript infer types when possible
let bestPracticeString = "Hello";  // Better than: let bestPracticeString: string = "Hello";
let bestPracticeNumber = 42;  // Better than: let bestPracticeNumber: number = 42;

// Use type annotations when needed for clarity
function processInferredUser(user: { name: string; age: number }): string {
    return `${user.name} is ${user.age} years old`;
}

// Demonstrate type inference in action
function demonstrateInference(): void {
    console.log("\nType Inference Demonstration:");
    console.log("String inference:", typeof bestPracticeString);
    console.log("Number inference:", typeof bestPracticeNumber);
    console.log("Function result:", processInferredUser({ name: "Tanish", age: 25 }));
}

// Run the demonstration
demonstrateInference();
