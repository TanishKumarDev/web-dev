/**
 * TypeScript Union to Intersection Type Transformations
 * Author: Tanish
 * Last Updated: 2024
 * 
 * This file demonstrates how to transform union types into intersection types
 * using different approaches in TypeScript.
 */

/**
 * 1. Basic Union and Intersection Types
 * Understanding the fundamental concepts
 */

// Union Type Example
type PetType = "Dog" | "Cat" | "Bird";
const pet: PetType = "Dog";  // Valid
// const invalidPet: PetType = "Fish";  // Error: Type '"Fish"' is not assignable to type 'PetType'

// Intersection Type Example
type Person = { name: string } & { age: number };
const tanish: Person = {
    name: "Tanish",
    age: 25
};

/**
 * 2. Using Distributive Conditional Types
 * Transforming union types to intersection types
 */

// Basic Union to Intersection transformation
type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
) extends (k: infer I) => void
    ? I
    : never;

// Example with object types
type ObjectUnion = { a: number } | { b: string } | { c: boolean };
type ObjectIntersection = UnionToIntersection<ObjectUnion>;

// Using the transformed type
const combinedObject: ObjectIntersection = {
    a: 42,
    b: "hello",
    c: true
};

/**
 * 3. Using Conditional Template Literal Types
 * Alternative approach using template literals
 */

// Template literal based transformation
type TemplateUnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    (k: infer I) => void) ? I : never;

// Example with interface types
interface User {
    id: number;
    name: string;
    email?: string;  // Optional property
    readonly createdAt: Date;  // Read-only property
}

interface Employee {
    role: string;
    department: string;
}

type UserOrEmployee = User | Employee;
type UserAndEmployee = TemplateUnionToIntersection<UserOrEmployee>;

// Using the transformed type
const tanishProfile: UserAndEmployee = {
    id: 1,
    name: "Tanish",
    role: "Developer",
    department: "Engineering",
    createdAt: new Date()  // Adding the required createdAt property
};

/**
 * 4. Practical Examples
 * Real-world use cases
 */

// Example 1: Form Field Types
type TextField = { type: "text"; value: string };
type NumberField = { type: "number"; value: number };
type CheckboxField = { type: "checkbox"; value: boolean };

type FormField = TextField | NumberField | CheckboxField;
type CombinedFormField = UnionToIntersection<FormField>;

// Example 2: API Response Types
type SuccessResponse = { status: "success"; data: any };
type ErrorResponse = { status: "error"; message: string };
type LoadingResponse = { status: "loading" };

type ApiResponseUnion = SuccessResponse | ErrorResponse | LoadingResponse;
type ApiResponseIntersection = UnionToIntersection<ApiResponseUnion>;

/**
 * 5. Advanced Usage
 * Complex type transformations
 */

// Nested type transformation
type NestedUnion = 
    | { user: { name: string } }
    | { user: { age: number } }
    | { user: { email: string } };

type NestedIntersection = UnionToIntersection<NestedUnion>;

// Using the nested transformed type
const nestedObject: NestedIntersection = {
    user: {
        name: "Tanish",
        age: 25,
        email: "tanish@example.com"
    }
};

/**
 * 6. Type Guard Functions
 * Working with transformed types
 */

// Type guard for checking properties
function hasAllProperties<T extends object>(
    obj: T,
    props: (keyof T)[]
): boolean {
    return props.every(prop => prop in obj);
}

// Example usage of type guard
const isValidUser = hasAllProperties(tanishProfile, ["id", "name", "role", "department", "createdAt"]);
console.log("Is valid user:", isValidUser);

/**
 * 7. Demonstration Function
 * Showcasing all transformations
 */

function demonstrateTransformations(): void {
    console.log("\nUnion to Intersection Type Transformations:");
    console.log("1. Basic Object:", combinedObject);
    console.log("2. User Profile:", tanishProfile);
    console.log("3. Nested Object:", nestedObject);
    console.log("4. Type Guard Result:", isValidUser);
}

// Run the demonstration
demonstrateTransformations(); 