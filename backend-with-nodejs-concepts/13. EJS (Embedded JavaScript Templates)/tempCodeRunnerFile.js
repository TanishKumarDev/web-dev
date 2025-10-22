const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { name: 'Tanish', role: 'Developer' });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
