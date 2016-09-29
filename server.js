var express = require("express");
var firebase = require("firebase");
var app = express();
var port = 3000;

var fireBaseConfig = {
  apiKey: "AIzaSyAE2Im6UXhsv4hbrgytHNIr7oZhFoKv1HU",
  authDomain: "simplifyfootball.firebaseapp.com",
  databaseURL: "https://simplifyfootball.firebaseio.com",
  storageBucket: "simplifyfootball.appspot.com",
  messagingSenderId: "205929549115"
};

firebase.initializeApp(fireBaseConfig);

app.listen(port, function(err, res){
  if(err){
      console.log("Server error!");
      console.log(err);
  }
  else{
    var dbRef = firebase.database().ref().child('matches/0/en/0');
    dbRef.on("value", function(snapshot) {
        console.log(snapshot.val());
    });

    this.newScore = 0;
    setInterval(function(){
      this.newScore++;
      dbRef.set({
        date: "2016-08-13",
        score1: this.newScore,
        score2: 3,
        team1: { code: 'EVE', key: 'everton', name: 'Everton' },
        team2: { code: 'TOT', key: 'tottenham', name: 'Tottenham Hotspur' },
        time: '15:00'
      })
    }.bind(this), 5000);

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
