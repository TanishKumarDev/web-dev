// products.js
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 },
];

function addNumbers(a, b) {
    return a + b;
}

// Calculate total price
let total = 0;
for (let product of products) {
    total = addNumbers(total, product.price);
}

console.log("Total Price:", total);
