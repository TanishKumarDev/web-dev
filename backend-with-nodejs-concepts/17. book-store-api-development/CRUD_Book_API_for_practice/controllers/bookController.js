const fs = require('fs').promises;
const path = require('path');

const readBooks = async () => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../data/books.json'), 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const writeBooks = async (books) => {
    await fs.writeFile(path.join(__dirname, '../data/books.json'), JSON.stringify(books, null, 2));
};

module.exports = {
    getAllBooks: async (req, res) => {
        const books = await readBooks();
        res.json(books);
    },
    getBookById: async (req, res) => {
        const id = parseInt(req.params.id);
        const books = await readBooks();
        const book = books.find(b => b.id === id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    },
    createBook: async (req, res) => {
        const newBook = req.body;
        if (!newBook.title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        const books = await readBooks();
        newBook.id = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
        books.push(newBook);
        await writeBooks(books);
        res.status(201).json(newBook);
    },
    updateBook: async (req, res) => {
        const id = parseInt(req.params.id);
        const updatedBook = req.body;
        if (!updatedBook.title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        const books = await readBooks();
        const index = books.findIndex(b => b.id === id);
        if (index !== -1) {
            books[index] = { id, ...updatedBook };
            await writeBooks(books);
            res.json(books[index]);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    },
    deleteBook: async (req, res) => {
        const id = parseInt(req.params.id);
        const books = await readBooks();
        const index = books.findIndex(b => b.id === id);
        if (index !== -1) {
            books.splice(index, 1);
            await writeBooks(books);
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    }
};