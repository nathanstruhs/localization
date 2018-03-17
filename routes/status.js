var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log("************** GET STATUS *************");
  console.log(status)
  console.log(history);
  res.send(status);
});

module.exports = router;
