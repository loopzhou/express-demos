var express = require('express');
var router = express.Router();

/* GET user page. */
router.get('/', function(req, res, next) {
  res.render('user', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('user', { title: 'Express' });
});

module.exports = router;