var APIKey = '02de89be83267d4702049938b828e151'
var city = Madison,wi
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL);
