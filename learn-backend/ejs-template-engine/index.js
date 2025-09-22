const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Optional: Set views directory (default is ./views)
app.set('views', './views');

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));

//  Home Route
app.get('/', (req, res) => {
//   res.render('index'); // Renders views/index.ejs
  res.render('index', {title : 'My App', user : 'John Doe'}); // Renders views/index.ejs
});