var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  console.log("************** POST REQUEST *************");
  data_array.push(req.body);
  for (var i = 0; i < data_array.length; i++) {
    console.log(data_array[i]);
  }

  // make db query to update data vis
  res.send("hi");
});

module.exports = router;
