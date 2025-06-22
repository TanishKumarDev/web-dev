const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Dummy data
const users = [
  { id: 1, name: 'Tanish', email: 'tanish@example.com' },
  { id: 2, name: 'Tanmay', email: 'tanmay@example.com' },
  { id: 3, name: 'Harsh', email: 'harsh@example.com' }
];

// Route 1: Home
app.get('/', (req, res) => {
  res.send('Welcome to the Mini Users API 🚀');
});

// Route 2: About
app.get('/about', (req, res) => {
  res.send('This is a simple Express API to manage users.');
});

// Route 3: Get All Users
app.get('/users', (req, res) => {
  res.json(users);
});

// Route 4: Get User by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});


// ✅ Route 5: Create New User
app.post('/users/create', (req, res) => {
  const { name, email } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Create new user with auto-incremented ID
  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser); // Add user to array

  res.status(201).json(newUser); // Return new user with 201 Created
});


// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
