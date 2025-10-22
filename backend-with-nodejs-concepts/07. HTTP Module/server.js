const http = require('http');

// Creating a Simple Server

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1>Hello World</h1>');
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

// Handling Different URLs
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
