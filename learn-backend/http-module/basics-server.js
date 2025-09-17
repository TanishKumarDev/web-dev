const http = require('http');

// Purpose: Create server and handle requests
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js server!'); // Send response and close connection
});

// Start listening on a port
server.listen(3000, () => {
  console.log('Server running on port 3000');
});