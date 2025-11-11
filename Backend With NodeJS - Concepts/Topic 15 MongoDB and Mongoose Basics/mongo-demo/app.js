// ===========================
// CRUD with Mongoose
// ===========================

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
app.use(express.json());

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error:', err));

// CREATE - Add new user
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ - Get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ - Get user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

// UPDATE - Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'User updated', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove user
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

app.listen(4000, () => console.log('API running at http://localhost:4000'));
