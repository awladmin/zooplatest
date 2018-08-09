const express = require('express');
const router = express.Router();
const results = require('./routes/results');
const search = require('./routes/search');

router.get('/', search);//catch root calls
router.get('/search', search);
router.get('/results', results);

module.exports = router;
