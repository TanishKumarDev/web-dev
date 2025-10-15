// 2. Creating a Basic Express Server
const express = require('express');
const app = express();

// 4. Route Handlers and Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date().toLocaleTimeString()}`);
    next(); // pass control to next handler
};

// Apply middleware to all routes
app.use(logger);

// Route-specific middleware example
const checkAuth = (req, res, next) => {
    const isAuth = true;
    if(isAuth) {
        console.log('User is authenticated');
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

app.get('/dashboard', checkAuth, (req, res) => {
    res.send('📊 Welcome to Dashboard');
});

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
})
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

// 3. Implementing Routing and Route Parameters
// Route with params
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // capture id from URL
    res.send(`User ID: ${userId}`);
})
// Multiple params
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params; // destructuring 
    res.send(`Category: ${category}, ID: ${id}`);
})

// start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
