$(document).ready(function(){
	$('.nav-item').click(function(e){
		$('section').removeClass('active');

		var section = $(e.target).attr('href');
		$(section).addClass('active');
	});


	//var loader = new Loader();


	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAE2Im6UXhsv4hbrgytHNIr7oZhFoKv1HU",
		authDomain: "simplifyfootball.firebaseapp.com",
		databaseURL: "https://simplifyfootball.firebaseio.com",
		storageBucket: "simplifyfootball.appspot.com",
		messagingSenderId: "205929549115"
	};
	firebase.initializeApp(config);

	var preObj = $("#section1");
	var dbRef = firebase.database().ref('matches');
	console.log(dbRef);
	dbRef.on('value', function(snapshot) {
		var leagues = snapshot.val()[0];
	  console.log(snapshot.val());
		$("#section1").empty();
		_.each(leagues, function(league, key){
			var template = _.template("<ul><% _.each(data, function(match) { %> <li> <%=match.team1.name%> <%=match.score1%> - <%=match.score2%> <%=match.team2.name%> </li> <% }); %></ul>");
			$("#section1").append(template({data: league}));



			console.log(key);
				console.log(league);
		});
	});
});
