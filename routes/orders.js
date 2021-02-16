var express = require('express');
var router = express.Router();

/* GET orders hbs */
router.get('/', function(req, res, next) {
    res.render('orders');
});

module.exports = router;
