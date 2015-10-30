var express = require("express");
var app = express();
app.set('port', process.env.PORT || 3000);
var os = require('os');

app.get('/test', function(req, res) {
  for(var i = 0; i < 10000; i ++){
    console.log(i);
  }
  res.send('Hello World!');
});

app.get('/', function(req, res){
	res.send("Server name: " +os.hostname());
});

app.listen(app.get('port'));
