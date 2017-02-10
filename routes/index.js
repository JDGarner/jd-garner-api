var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/entries', db.getAllEntries);
router.get('/api/entries/:id', db.getEntry);

module.exports = router;
