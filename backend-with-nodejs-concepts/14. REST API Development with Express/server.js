const express = require('express');
const app = express();
const routes = require('./routes/book.routes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
