var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Senior Signal',
                        location: 'At home',
                        distance: '0' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'History | Senior Signal'});
});

module.exports = router;
