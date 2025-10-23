const fs = require('fs');
const crypto = require('crypto');
const { promises } = require('dns');

console.log("1. start")
setTimeout(() => {
    console.log('2. Timeout executed');
}, 0);
setTimeout(() => {
    console.log('3. Timeout executed');
}, 0);
setTimeout(() => {
    console.log('4. Timeout executed');
}, 0);

Promise.resolve().then(() => {
    console.log('5. Promise resolved');
});

process.nextTick(() => {
    console.log('6. Next tick executed');
});

fs.readFile(__filename, () => {
    console.log('7. File read completed');
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('8. Password encrypted');
});

console.log("9. end")