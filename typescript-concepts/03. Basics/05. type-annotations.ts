// 1. Variable Type Annotations

const str: string  = "Tanish";
const num:  number = 5;
const arr: (number | string) [] = ["Tanish", 5];

console.log(typeof str)
console.log(typeof num)
console.log(arr)

// 2. Function Type Annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Tanish"))

// Object Type Annotations
const person: {
    username: string;
    age: number;
} = {
    username: "Tanish",
    age: 25
}
console.log(person)

// Array Type Annotations
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers)

// Class Type Annotations
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect);       // Rectangle { width: 5, height: 10 }
console.log(rect.area()); // 50
