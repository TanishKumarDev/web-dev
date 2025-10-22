const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const filePath1= path.join(__dirname, 'bigFile.txt');

// Reading a File (Readable Stream)

// Create a readable stream
const readStream = fs.createReadStream(filePath1, { encoding: 'utf8', highWaterMark: 16 });

// Listen for 'data' event
readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// Listen for 'end' event
readStream.on('end', () => {
  console.log('Finished reading file.');
});

// Listen for 'error' event
readStream.on('error', (err) => {
  console.error('Error:', err);
});

// Writing to a File (Writable Stream)

const filePath2 = path.join(__dirname, 'output.txt');
const writeStream = fs.createWriteStream(filePath2);

// Write to the writable stream
writeStream.write('Hello, ');
writeStream.write('world!\n');
writeStream.end(); 

writeStream.on('finish', () => {
  console.log('Finished writing to file.');
});

writeStream.on('error', (err) => {
  console.error('Error:', err);
});

// Piping Streams

const readStream1= fs.createReadStream(filePath1);
const writeStream2 = fs.createWriteStream(filePath2);

readStream1.pipe(writeStream2);

writeStream2.on('finish', () => {
  console.log('Finished piping streams.');
});

// Transform Stream (Compression)

const readStream2 = fs.createReadStream(filePath1);
const writeStream3 = fs.createWriteStream(filePath2);
const gzipStream = zlib.createGzip();

readStream2.pipe(gzipStream).pipe(writeStream3);

writeStream3.on('finish', () => {
  console.log('Finished compressing file.');
});