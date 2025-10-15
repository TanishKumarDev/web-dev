const express = require('express');
const app = express();

// Import Controllers
const userController = require('./controllers/userController');

// Import Custom Middleware
const { checkAuth } = require('./middleware/authMiddleware');

// Routes using controllers
app.get('/', userController.getHome);

// Route with params + middleware + controller
app.get('/user/:id', checkAuth, userController.getUser);

// Start server
app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
