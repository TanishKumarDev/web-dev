app.set('view engine', 'ejs');  // Purpose: Set engine
app.get('/', (req, res) => {
  res.render('index', { name: 'World', users: ['John', 'Jane'] });  // Purpose: Render with data
});