var baseUrl = "/src/data/football.json/2016-17/"

var AppConfig = {
  leagues : [
    {
      id : "en",
      clubs : baseUrl + "en.1.clubs.json",
      results : baseUrl + "en.1.json"
    },
    {
      id : "de",
      clubs : baseUrl + "de.1.clubs.json",
      results : baseUrl + "de.1.json"
    }
  ]
};
