const buff1 = Buffer.alloc(10); // Allocates a buffer of 10 bytes initialized with zeros
console.log('Buffer 1:', buff1);

const buff2 = Buffer.allocUnsafe(10); // Allocates a buffer of 10 bytes without initializing it
console.log('Buffer 2:', buff2);

const buff3 = Buffer.from([1, 2, 3, 4, 5]); // Creates a buffer from an array of bytes
console.log('Buffer 3:', buff3);

const buff4 = Buffer.from('Hello, World!', 'utf-8'); // Creates a buffer from a string
console.log('Buffer 4:', buff4);

// Modifying buffer contents
buff1.write('Node.js'); // Writing a string into the buffer
console.log('Buffer 1 after write:', buff1);

// Reading single byte
const byte1 = buff3[2]; // Accessing the third byte
const byte2 = buff2[2]; // Accessing the third byte
console.log('Third byte of Buffer 3:', byte1);
console.log('Third byte of Buffer 2:', byte2);

// cancat buffers
const concatenatedBuffer = Buffer.concat([buff3, buff4]);
console.log('Concatenated Buffer:', concatenatedBuffer);
console.log('Concatenated Buffer as string:', concatenatedBuffer.toString());

// Slicing a buffer
const slicedBuffer = buff4.slice(0, 5);
console.log('Sliced Buffer:', slicedBuffer);
console.log('Sliced Buffer as string:', slicedBuffer.toString());
