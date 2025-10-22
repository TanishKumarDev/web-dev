// Create from string
const buf1 = Buffer.from("Tanish");
console.log(buf1); 
// Output: <Buffer 54 61 6e 69 73 68>

// Allocate empty buffer of size 10
const buf2 = Buffer.alloc(10);
console.log(buf2); 
// Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

// Allocate uninitialized buffer (faster)
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3); 
// Output: random bytes

// buffer to string
const buf4 = Buffer.from("Tanish");
console.log(buf4.toString());
console.log(buf4.toString("base64"));
console.log(buf4.toString("hex"));

// manipulate buffer
const buf5 = Buffer.from("NodeJS");

// access individual bytes
console.log(buf5[0])

// change byte
buf5[0] = 70;
console.log(buf5.toString());

// concat buffers
const buf6 = Buffer.concat([buf4, buf5]);
console.log(buf6.toString());

// slice buffer
const buf7 = Buffer.from("Tanish");
const buf8 = buf7.slice(0, 5);
console.log(buf8.toString());