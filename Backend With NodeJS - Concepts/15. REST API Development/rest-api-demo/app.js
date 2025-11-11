// ===========================
// Example: Basic REST API
// ===========================

const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

let users = [
  { id: 1, name: 'Tanish', email: 'tanish@example.com' },
  { id: 2, name: 'Ravi', email: 'ravi@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name;
  user.email = req.body.email;
  res.json({ message: 'User updated', user });
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted' });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
