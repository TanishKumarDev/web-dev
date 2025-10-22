const express = require('express');
const path = require('path'); // add this
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Tell Express where the views folder is
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { name: 'Tanish', role: 'Developer' });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
