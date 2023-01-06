
//TODO: Call 5 day openweathermap forecast API
//TODO: Get data from openweater api to display in both current weather and 5 day forecast
//TODO: Use Geocoding API to get cities by name instead of coordinates
//TODO: Create function that calls Geocoding API to get data using city name from search value
//TODO: append city search history to a clickable list 
//TODO: Get current date from dayjs

//ACCEPTANCE CRITERIA
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
//      Local Storage + display on page and be clickable in search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
//      get weather icons 
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


var button = document.getElementById('searchBtn');
var input = document.getElementById('inputCity');
button.addEventListener('click', function () {
        console.log(input.value);
})


var ApiKey = '02de89be83267d4702049938b828e151';



var cities = [];
var city = 




fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + ApiKey);


// function getCoords() {
//      fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + nameCity + '&limit=5&appid=' + ApiKey);
//         var nameCity = document.getElementById('inputCity').value;
//  } 

// function getWeather() {
//         if (response.ok) {
//                 fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + ApiKey);
//         }
// }




// var baseApiUrl = 'https://api.openweathermap.org';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=02de89be83267d4702049938b828e151

//fetch('https://api.openweathermap.org')
// var city; 
// var cities = [];
// var queryUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
// var geoCodeUrl = "api.openweathermap.org/geo/1.0/direct?q=" + cityname, + statecode, + countrycode + "&limit=" + limit + "&appid=" + apiKey



//5 Day Forecast API to get 5 day forecast
//Geocoding API to get lat and lon from city name






// Function to display the search history list
 //function searchHistory() {
        //Start at end of history array and count down to show the most recent at the top.
//        }
   
       

       
// // Function to update history in local storage then updates displayed history.
// function appendSearch() {
       
// }

// function startHistory() {

// }


// // Function to display the current weather data fetched from OpenWeather api.
// function getCurrWeather(city, weather) {
//         // Store response data from our fetch request in variables
//         var today = dayjs().format('M/D/YYYY');
//         var temp 
//         var humid
//         var wind 
//         var uvIndex 
// }

// function getFiveDayWeather() {

// }

// function showData (city, data) {
        
// }

// function getCoords() {

// }
 
// function searchSubmit () {

// }

// function searchClick () {

// }