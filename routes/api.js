var express = require('express');
var router = express.Router();
var dateHelper = require('../helpers/date-helper');

router.post('/', function(req, res) {

  var entry = req.body;
  entry['timestamp'] = dateHelper.getCurrentDateAndTime();
  history.push(entry);
  status = entry['status'];
  res.send(history);

});

module.exports = router;
