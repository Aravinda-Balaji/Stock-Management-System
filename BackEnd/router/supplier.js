const express = require('express');
const router = express.Router();
const { insertSupplier } = require('../controller/supplier');

// Route to insert a new supplier
router.post('/suppliers', insertSupplier);

module.exports = router;
