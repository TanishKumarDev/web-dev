// 2. Creating a Basic Express Server
const express = require('express');
const app = express();


// Home Route
app.get('/', (req, res) => {
    res.send('Hello from Home page!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('Hello from About page!');
})

// Contact Route
app.get('/contact', (req, res) => {
    res.send('Hello from Contact page!');
})

// start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
