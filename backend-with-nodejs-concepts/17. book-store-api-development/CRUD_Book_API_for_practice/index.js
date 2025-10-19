const express = require('express');
const bookRoutes = require('./routes/books');

const app = express();
app.use(express.json());

app.use('/api/books', bookRoutes);

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));