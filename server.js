

var path = require('path');
var express = require('express');
var app = express();





app.use(express.static("clientFiles/js"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/clientFiles/index.html'));
});
app.listen(3000, function(){
  console.log('Server Express Ready!');
});
