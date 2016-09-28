var express = require("express");
var app = express();
var port = 3000;

app.listen(port, function(err, res){
  if(err){
      console.log("Server error!");
      console.log(err);
  }
  else{
    console.log("Server started!");
  }
});

// Static content
app.use(express.static(__dirname + '/dist'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

// Routes
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get('/teams/:leagueId', function(req, res){
  res.sendFile(__dirname + "/src/data/football.json/2016-17/" + req.params.leagueId + ".1.clubs.json");
});

app.get('/matches/:leagueId', function(req, res){
  res.sendFile(__dirname + "/src/data/football.json/2016-17/" + req.params.leagueId + ".1.json");
});

app.get('*', function(req, res){
  res.send("Ninjas stole this page!");
});
