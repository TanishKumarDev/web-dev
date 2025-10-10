// products.ts
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 },
];

// Type-safe addNumbers function
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Calculate total price
let total: number = 0;
for (let product of products) {
    total = addNumbers(total, product.price);
}

console.log("Total Price:", total);
