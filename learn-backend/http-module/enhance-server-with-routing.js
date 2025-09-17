// Handling Requests and Responses
// Enhanced(from basic-server) Server with Routing:
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200; // Success
    res.setHeader('Content-Type', 'text/plain'); // Header for text
    res.write('Welcome to homepage'); // Send body (can call multiple times)
    res.end(); // Close response
  } else if (req.url === '/about') {
    res.end('About page');
  } else {
    res.statusCode = 404;
    res.end('Page Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on `http://localhost:3000`');
});