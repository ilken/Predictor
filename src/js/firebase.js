export function initFireBaseConfig(){
	const config = {
		apiKey: "AIzaSyAE2Im6UXhsv4hbrgytHNIr7oZhFoKv1HU",
    authDomain: "simplifyfootball.firebaseapp.com",
    databaseURL: "https://simplifyfootball.firebaseio.com",
    storageBucket: "simplifyfootball.appspot.com",
    messagingSenderId: "205929549115"
	};

	firebase.initializeApp(config);
}
