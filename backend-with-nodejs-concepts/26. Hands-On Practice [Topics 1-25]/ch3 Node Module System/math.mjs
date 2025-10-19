// math.mjs
export const PI = 3.14159;

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default export
const calculator = {
    add,
    multiply,
    PI
};

export default calculator;