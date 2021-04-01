var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Is season 4 part 2 of Attack on Titan out yet?' });
});

module.exports = router;
