var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Senior Signal', status: 'home' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'History | Senior Signal' });
});

module.exports = router;
