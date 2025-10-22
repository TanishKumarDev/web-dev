const http = require('http');

// create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
});

// start server
server.listen(3000, () => {
    console.log('Server running on port 3000');
});