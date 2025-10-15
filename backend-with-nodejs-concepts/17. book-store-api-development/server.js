const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://tanish2992002_db_user:20g6PVhvAMYf2DOh@learn-backend-part1.kiobva2.mongodb.net/?retryWrites=true&w=majority&appName=learn-backend-part1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Mount routes
app.use('/api/books', bookRoutes);

app.listen(3000, () => 
    console.log('Server on http://localhost:3000')
);