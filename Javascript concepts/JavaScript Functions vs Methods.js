// Function Declaration
function func(a, b) {
    let sum = a + b; // Local variable holding the sum of a and b
    return sum;      // Returning the result back to the caller
}

// Function Call
console.log(func(1, 2)); // Output: 3

// Method Declaration
const obj = {
    a: 1,
    b: 2,
    sum: function () {
        return this.a + this.b;
    }
};

// Method Call
console.log(obj.sum()); // Output: 3

// Note: Functions are objects in JavaScript

