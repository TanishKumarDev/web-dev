/**
 * 1. PRIMITIVE TYPES
 * These are the basic building blocks of TypeScript
 */

// Number: Represents both integer and floating-point numbers
let userAge: number = 25;
let productPrice: number = 99.99;
let binaryNumber: number = 0b1010;  // Binary number
let octalNumber: number = 0o744;    // Octal number
let hexNumber: number = 0xf00d;     // Hexadecimal number

// String: Represents textual data
let userName: string = "John Doe";
let userGreeting: string = `Hello, ${userName}!`;  // Template literal
let multilineString: string = `This is a
multiline string`;

// Boolean: Represents logical values
let isActive: boolean = true;
let isCompleted: boolean = false;

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Symbol: Represents unique identifiers
let sym1: symbol = Symbol("key");
let sym2: symbol = Symbol("key");
console.log(sym1 === sym2);  // false, symbols are unique

// BigInt: Represents integers with arbitrary precision
let bigNumber: bigint = 9007199254740991n;
let anotherBigNumber: bigint = BigInt(9007199254740991);

// prog.ts(39,25): error TS2737: BigInt literals are not available when targeting lower than ES2020.

/**
 * 2. OBJECT TYPES
 * These are more complex types that can contain multiple values
 */

// Array: Collection of elements of the same type
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["apple", "banana", "orange"];

// Tuple: Array with fixed number of elements of specific types
let tuple: [string, number, boolean] = ["John", 25, true];

// Enum: Set of named constants
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
let favoriteColor: Color = Color.Blue;

// Object: Represents any non-primitive type
let person: object = {
    name: "John",
    age: 30
};

// Interface: Defines the structure of an object
interface User {
    id: number;
    name: string;
    email?: string;  // Optional property
    readonly createdAt: Date;  // Read-only property
}

// Class: Blueprint for creating objects
class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public makeSound(): void {
        console.log("Some sound");
    }
}

/**
 * 3. ADVANCED TYPES
 * These types provide additional capabilities for complex type definitions
 */

// Union Types: Variable can hold one of several types
let id: string | number = "ABC123";
id = 12345;  // Also valid

// Intersection Types: Combines multiple types
interface Employee {
    name: string;
    id: number;
}
interface Manager {
    department: string;
}
type ManagerEmployee = Employee & Manager;

// Literal Types: Exact value types
let direction: "north" | "south" | "east" | "west" = "north";

// Type Aliases: Creates a new name for a type
type Point = {
    x: number;
    y: number;
};

// Function Types
type MathFunction = (x: number, y: number) => number;
let add: MathFunction = (x, y) => x + y;

/**
 * 4. UTILITY TYPES
 * Built-in TypeScript utility types for type manipulation
 */

// Partial: Makes all properties optional
interface Todo {
    title: string;
    description: string;
}
type PartialTodo = Partial<Todo>;

// Readonly: Makes all properties read-only
type ReadonlyTodo = Readonly<Todo>;

// Record: Creates a type with specified keys and values
type CatInfo = {
    age: number;
    breed: string;
};
type CatName = "miffy" | "boris";
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" }
};

// Pick: Creates a type with selected properties
type TodoPreview = Pick<Todo, "title">;

// Omit: Creates a type with all properties except selected ones
type TodoWithoutDescription = Omit<Todo, "description">;

/**
 * 5. TYPE ASSERTIONS
 * Ways to tell TypeScript that you know more about a type than it does
 */

// Angle-bracket syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as syntax (preferred)
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

// Example usage of the types
function demonstrateTypes(): void {
    console.log("Number:", userAge);
    console.log("String:", userName);
    console.log("Boolean:", isActive);
    console.log("Array:", numbers);
    console.log("Tuple:", tuple);
    console.log("Enum:", favoriteColor);
    console.log("Union Type:", id);
    console.log("Function Type Result:", add(5, 3));
}

// Call the demonstration function
demonstrateTypes();