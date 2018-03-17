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

  entry['timestamp'] = datetime;
  history.push(entry);
  status = entry['status'];
  for (var i = 0; i < history.length; i++) {
    console.log(entry);
  }
  res.send(history);
});

module.exports = router;
