/**
 * TypeScript "----" References
 * A Simple Summary of All TypeScript Topics Learned
 */

/**
 * 1. Introduction to TypeScript
 * What We Learned: TypeScript is JavaScript with added type syntax.
 * Key Takeaway: It’s a superset of JavaScript, adding static typing to catch errors early.
 * Why It Matters: Makes code safer, clearer, and better for big projects.
 * Example: let name: string = "Alice"; // TypeScript adds type to JavaScript
 */

/**
 * 2. Simple Types
 * What We Learned: Basic types include boolean, number, string, bigint, and symbol.
 * Key Takeaway: Types can be explicit (you write them) or implicit (TypeScript guesses).
 * Why It Matters: Prevents wrong data (e.g., string to number), unlike JavaScript.
 * Example: let age: number = 25; // Explicit type
 */

/**
 * 3. Special Types
 * What We Learned: Special types: any (no type checking), unknown (safer, needs checks), never (no value), null, undefined.
 * Key Takeaway: Use 'any' cautiously, 'unknown' for safety, 'never' for errors or no return.
 * Why It Matters: Balances flexibility and safety in tricky scenarios.
 * Example: let x: any = "flexible"; x = 5; // No error
 */

// Typed "Variables/else" : Jab hum kisi variable ya function ko ek specific type dete hain, jaise let name: string = "Rohan";, toh isse "typed" kehte hain.
// Logic: Type batata hai ki variable mein kya store hoga (text, number, etc.).
// Reason: Galtiyan pakadta hai, jaise string wali jagah number daal dena.
// Use Case: Code ko safe aur samajhne mein aasan banata hai.

// Example

let age: number = 25; // "age" is typed as a number
age = 30; // Works fine
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'
console.log(age);

// Key Point: TypeScript mein "typed" ka matlab hai data ko ek type ke saath bind karna, taaki code reliable ho. Agar aur saaf karna ho, toh mujhe bol, bhai!

/**
 * 4. Arrays
 * What We Learned: Arrays have typed elements (e.g., string[]) and can be readonly.
 * Key Takeaway: TypeScript ensures array items match the type; readonly stops changes.
 * Why It Matters: Keeps lists consistent and protects fixed data.
 * Example: const names: string[] = ["Dylan"]; // Typed array
 */

/**
 * 5. Tuples
 * What We Learned: Tuples are typed arrays with fixed length and specific types per index.
 * Key Takeaway: Order matters; can be readonly, named, or destructured.
 * Why It Matters: Great for structured, mixed data like coordinates or state pairs.
 * Example: let tuple: [number, boolean] = [5, true]; // Fixed types and order
 */

/**
 * Final Notes
 * What We Learned: TypeScript enhances JavaScript with types, error checking, and better tooling.
 * Key Takeaway: Use types for safety, readability, and reliability in code.
 * Why It Matters: Saves time, reduces bugs, and scales well for projects.
 */