let books = [];  // In-memory DB for demo

// GET all books
app.get('/books', (req, res) => res.json(books));

// POST new book
app.post('/books', (req, res) => {
  const book = { id: Date.now(), ...req.body };  // Purpose: Add ID, body data
  books.push(book);
  res.status(201).json(book);
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ error: 'Not found' });
  res.json(book);
});

// PUT /books/:id
app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };  // Purpose: Update fields
    res.json(books[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

// DELETE /books/:id
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index !== -1) {
    books.splice(index, 1);  // Purpose: Remove book
    res.json({ message: 'Deleted' });
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});