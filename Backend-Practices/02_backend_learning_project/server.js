const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory tasks (to be replaced with MongoDB in Module 4)
const tasks = [
  { id: 1, title: 'Do homework', completed: false, creator: 'Tanish' },
  { id: 2, title: 'Buy groceries', completed: true, creator: 'Tanmay' }
];

// Custom validation middleware for task creation
const validateTask = (req, res, next) => {
  const { title, completed } = req.body;

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return res.status(400).json({ error: 'Title must be a string with at least 3 characters' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Completed must be a boolean' });
  }

  next();
};

// POST: Create a task with advanced validation
app.post('/api/tasks', validateTask, (req, res) => {
  const { title, completed = false } = req.body;

  // Simulate creator (will use JWT in Module 5)
  const creator = 'Tanish'; // Hardcoded for now

  // Check for duplicate task titles
  if (tasks.find(t => t.title.toLowerCase() === title.toLowerCase())) {
    return res.status(409).json({ error: 'Task with this title already exists' });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title.trim(),
    completed,
    creator
  };
  tasks.push(newTask);

  res.status(201).json({ message: 'Task created', data: newTask });
});

// GET: Fetch all tasks
app.get('/api/tasks', (req, res) => {
  res.status(200).json({ message: 'Tasks retrieved', data: tasks });
});

// Start server
app.listen(3000, () => {
  console.log('TaskMaster Server running at http://localhost:3000');
});
