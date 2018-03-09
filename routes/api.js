var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  console.log("************** POST REQUEST *************");
  var entry = req.body;
  var date = new Date();
  var datetime = date.getDate() + "/"
                 + (date.getMonth()+1)  + "/"
                 + date.getFullYear() + " @ "
                 + date.getHours() + ":"
                 + date.getMinutes();

  //entry['status'] = req.body;
  entry['timestamp'] = datetime;
  data_array.push(entry);
  for (var i = 0; i < data_array.length; i++) {
    console.log(entry);
  }

  // make db query to update data vis
  res.send(data_array);
});

module.exports = router;
