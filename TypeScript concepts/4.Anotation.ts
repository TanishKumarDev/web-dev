/*
 * 1. Basic Type Annotations
 * TypeScript allows explicit type definitions for variables
 */

// String type annotation
const typeDemoName: string = "Tanish";
const typeDemoGreeting: string = `Hello, ${typeDemoName}!`;  // Template literal example

// Number type annotation
const typeDemoAge: number = 25;
const typeDemoScore: number = 95.5;

// Boolean type annotation
const typeDemoIsActive: boolean = true;
const typeDemoIsCompleted: boolean = false;

// Array type annotations
const typeDemoNumbers: number[] = [1, 2, 3, 4, 5];
const typeDemoMixedArray: (string | number)[] = ["Tanish", 25, "Developer", 100];

// Type checking demonstration
console.log("Type of typeDemoName:", typeof typeDemoName);
console.log("Type of typeDemoAge:", typeof typeDemoAge);
console.log("Mixed array:", typeDemoMixedArray);

/**
 * 2. Function Type Annotations
 * Demonstrates how to add type annotations to functions
 */

// Function with parameter and return type annotations
function greetUser(name: string): string {
    return `Welcome, ${name}!`;
}

// Function with multiple parameters and return type
function calculateUserAge(birthYear: number, currentYear: number): number {
    return currentYear - birthYear;
}

// Function with optional parameter
function createUserProfile(name: string, age: number, email?: string): string {
    return email 
        ? `${name} (${age}) - ${email}`
        : `${name} (${age})`;
}

/**
 * 3. Object Type Annotations
 * Shows how to define types for objects
 */

// Object with type annotation
const userProfile: { 
    name: string; 
    age: number; 
    isAdmin: boolean;
    skills?: string[];  // Optional property
} = {
    name: "Tanish",
    age: 25,
    isAdmin: true,
    skills: ["TypeScript", "JavaScript", "React"]
};

// Interface for object type
interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
    startDate: Date;
    printSalary(): void;  // Method declaration
}

// Using the interface
const employee: Employee = {
    id: 1001,
    name: "Tanish",
    department: "Engineering",
    salary: 75000,
    startDate: new Date("2024-01-01"),
    printSalary(): void {
        console.log(`Salary: ${this.salary}`);
    }
};

/**
 * 4. Class Type Annotations
 * Demonstrates type annotations in classes
 */

class Student {
    // Property type annotations
    private studentName: string;
    private studentAge: number;
    private studentGrades: number[];

    // Constructor parameter type annotations
    constructor(name: string, age: number) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrades = [];
    }

    // Method with type annotations
    addGrade(grade: number): void {
        this.studentGrades.push(grade);
    }

    // Method with return type annotation
    getAverageGrade(): number {
        if (this.studentGrades.length === 0) return 0;
        return this.studentGrades.reduce((a, b) => a + b) / this.studentGrades.length;
    }
}

// Using the Student class
const newStudent = new Student("Tanish", 25);
newStudent.addGrade(85);
newStudent.addGrade(90);
console.log("Average grade:", newStudent.getAverageGrade());

/**
 * 5. Type Assertions
 * Shows how to use type assertions when needed
 */

// Type assertion using 'as' syntax
let unknownValue: unknown = "Hello, Tanish!";
let stringLength: number = (unknownValue as string).length;

// Type assertion using angle-bracket syntax
let numericValue: unknown = 42;
let numberValue: number = (<number>numericValue);

// Example usage of all the defined types
function demonstrateTypeAnnotations(): void {
    console.log("Greeting:", greetUser("Tanish"));
    console.log("Age:", calculateUserAge(1999, 2024));
    console.log("Profile:", createUserProfile("Tanish", 25, "tanish@example.com"));
    console.log("User:", userProfile);
    console.log("Employee:", employee);
    console.log("String length:", stringLength);
}

// Run the demonstration
demonstrateTypeAnnotations();