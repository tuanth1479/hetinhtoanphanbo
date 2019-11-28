var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/dev', function (req, res) {
  res.send('hello dev');
});

app.listen(process.env.PORT || 3000);
 
module.exports = app;
