function Loader(){
  this.getLeagueData('en');
  this.getClubsData('en');
}

Loader.prototype.loadAllLeagues = function(){
  var leagues = AppConfig.leagues;
};

Loader.prototype.getLeagueData = function(id){
  var leagueData = this.getLeagueConfig(id);
  this.loadLeagueData(leagueData, this.loadLeagueDataSuccess.bind(this));
};

Loader.prototype.getLeagueConfig = function(id){
  return _.find(AppConfig.leagues, function(league){
    return league.id === id;
  });
};

Loader.prototype.loadLeagueData = function(leagueData, callback){
  $.ajax({
    url: "/matches/en"
  }).done(function(res) {
    callback(res);
  });
};

Loader.prototype.loadLeagueDataSuccess = function(leagueData){
  console.log(leagueData);

  var teamKey = "mancity";
  var teamMatches = [];

  _.each(leagueData.rounds, function(round){
    _.each(round.matches, function(match){
      if(match.score1 === null || match.score2 === null) return;

      if(match.team1.key === teamKey || match.team2.key === teamKey){
        teamMatches.push(match);
      }
    });
  });
  console.log(teamMatches);

  var template = _.template("<ul><% _.each(data, function(match) { %> <li> <%=match.team1.name%> <%=match.score1%> - <%=match.score2%> <%=match.team2.name%> </li> <% }); %></ul>");
	$("#section1").append(template({data: teamMatches}));

  var matchesPlayed = teamMatches.length;
  var win = 0;
  var draw = 0;
  var lose = 0;
  var btts = 0;
  var over = 0;

  var template = _.template("<div>Matches Played: <%=matchesPlayed %> </div>");
	$("#section1").append(template({matchesPlayed: matchesPlayed}));

  _.each(teamMatches, function(match){
    if(match.team1.key === teamKey){
      if(match.score1 > match.score2){ win++;}
      else if(match.score1 === match.score2){ draw++; }
      else{ lose++; }
    }
    else{
      if(match.score1 > match.score2){ lose++;}
      else if(match.score1 === match.score2){ draw++; }
      else{ win++; }
    }

    if(match.score1 > 0 && match.score2 > 0){
      btts++;
    }

    if(match.score1 + match.score2 > 2){
      over++;
    }
  });

  var template = _.template("<div>Win: <%=win %> </div> <div>Draw: <%=draw %> </div> <div>Lose: <%=lose %> </div> <div>Both teams to score: <%=btts %> / <%=played %> </div> <div>Over 2.5 Goals: <%=over %> / <%=played %> </div>");
	$("#section1").append(template({
    played : matchesPlayed,
    win: win,
    draw: draw,
    lose: lose,
    btts: btts,
    over: over
  }));
};

Loader.prototype.getClubsData = function(leagueId){
  var leagueData = this.getLeagueConfig(leagueId);
  this.loadClubsData(leagueData, this.loadClubsDataSuccess.bind(this));
};

Loader.prototype.loadClubsData = function(leagueData, callback){
  $.getJSON(leagueData.clubs, function(data) {
		callback(data);
	});
};

Loader.prototype.loadClubsDataSuccess = function(clubsData){
  console.log(clubsData);
};
