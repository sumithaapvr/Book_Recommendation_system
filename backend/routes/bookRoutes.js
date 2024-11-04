const express = require('express');
const router = express.Router();
const { searchBooks } = require('../controllers/bookController');

// Search route
router.post('/search', searchBooks);

module.exports = router;
