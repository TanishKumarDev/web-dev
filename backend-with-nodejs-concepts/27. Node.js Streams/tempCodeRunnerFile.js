
// // Create a readable stream
// const readStream = fs.createReadStream(filePath1, { encoding: 'utf8', highWaterMark: 16 });

// // Listen for 'data' event
// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// // Listen for 'end' event
// readStream.on('end', () => {
//   console.log('Finished reading file.');
// });

// // Listen for 'error' event
// readStream.on('error', (err) => {
//   console.error('Error:', err);
// });

// // Writing to a File (Writable Stream)

// const filePath2 = path.join(__dirname, 'output.txt');
// const writeStream = fs.createWriteStream(filePath2);

// // Write to the writable stream
// writeStream.write('Hello, ');
// writeStream.write('world!\n');
// writeStream.end(); 

// writeStream.on('finish', () => {
//   console.log('Finished writing to file.');
// });

// writeStream.on('error', (err) => {
//   console.error('Error:', err);
// });
