var express = require('express');
var router = express.Router();
const j1 = require('../public/javascripts/j1');

/* GET users listing. */
router.get('/:userId', function(req, res, next) {    
    res.render('layout', { title: 'helion', a1: j1.ver });
});

module.exports = router;