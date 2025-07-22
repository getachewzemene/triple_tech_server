const express = require('express');
const router = express.Router();
const Sale = require('../models/sales');
const authMiddleware = require('../middleware/authMiddleware');

// Create Sale
router.post('/', authMiddleware, async (req, res) => {
    try {
        const sale = await Sale.create(req.body);
        res.status(201).json(sale);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all Sales
router.get('/', authMiddleware, async (req, res) => {
    try {
        const sales = await Sale.findAll();
        res.json(sales);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
