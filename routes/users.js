var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('../public/javascripts/j1.js');
});

module.exports = router;
