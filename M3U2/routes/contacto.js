var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto'); // contacto.hbs > view
});

module.exports = router;