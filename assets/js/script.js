var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
// var name = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');
var ApiKey = '02de89be83267d4702049938b828e151';
//var latLon = getCoordinates() 

//fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151')
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + ApiKey);

function getCoords() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + nameCity + '&limit=5&appid=' + ApiKey);
var nameCity = document.getElementById('inputCity');
} 
    



var baseApiUrl = 'https://api.openweathermap.org';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=02de89be83267d4702049938b828e151

//fetch('https://api.openweathermap.org')
// var city; 
// var cities = [];
// var queryUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
// var geoCodeUrl = "api.openweathermap.org/geo/1.0/direct?q=" + cityname, + statecode, + countrycode + "&limit=" + limit + "&appid=" + apiKey


//TODO: Call 5 day openweathermap forecast API
//TODO: Get data from openweater api to display in both current weather and 5 day forecast
//TODO: Use Geocoding API to get cities by name instead of coordinates
//TODO: Create function that calls Geocoding API to get data using city name from search value
//TODO: append city search history to a clickable list 
//TODO: Get current date from dayjs


//5 Day Forecast API to get 5 day forecast
//Geocoding API to get lat and lon from city name


//ACCEPTANCE CRITERIA
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
        //Local Storage + display on page and be clickable in search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
        // get weather icons 
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history

// THEN I am again presented with current and future conditions for that city