const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/errorHandler');

const items = [
    { id: 1, name: 'Item One', description: 'This is the first item' },
    { id: 2, name: 'Item Two', description: 'This is the second item' },
    { id: 3, name: 'Item Three', description: 'This is the third item' },
    { id: 4, name: 'Item Four', description: 'This is the fourth item' }
];

// GET all items
router.get('/', asyncErrorHandler(async (req, res) => {
    res.json({ status: 'success', data: items });
}));

// GET item by ID
router.get('/:id', asyncErrorHandler(async (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id, 10));
    if (!item) return res.status(404).json({ status: 'error', message: 'Item not found' });
    res.json({ status: 'success', data: item });
}));

module.exports = router;
