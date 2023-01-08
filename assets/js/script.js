
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

const ApiKey = '02de89be83267d4702049938b828e151';

//var cities = ['Madison', 'Chicago', 'Denver', 'Detroit']
//var coords = ['43.07295° N, -89.38669° E', '41.88425° N, -87.63245° E', '39.73715° N, -104.989174° E', '42.331427° N, -83.045754° W']
//cities[0] = coords[0];

var today = dayjs().format('dddd, MMMM D, YYYY');
var dateh3 = document.getElementById('date');
dateh3.textContent = today;
var citySearch = [];
console.log(today);
//todayDate = document.getElementById('')

//var local = document.getElementById('')
// button.addEventListener('click', function saveCity(e) {
//         e.preventDefault()
//         localStorage.setItem('inputCity', );
// })

//fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + ApiKey + '&units=imperial');


//  function getCoords() {
//       fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + nameCity + '&limit=5&appid=' + ApiKey);
//          var nameCity = document.getElementById('inputCity').value;
//  } 

var apicall = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial');

function getWeather() {
        // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
        .then((response) => response.json())
        .then((data) => console.log(data));
         }

getWeather();

function showWeather() {
        console.log('test');
        var weatherNow = document.getElementById('weatherNow');

        //create h2 for name
        var city = document.createElement('h2');
        city.textContent = weather.name;
        weatherNow.append(city);

        //create p for humidity,wind, description, temp
        var temp = document.createElement('p');
        temp.textContent = 'Temp: ' + weather.main.temp + ' F'
        weatherNow.append(temp);
        
        var humidity = document.createElement('p');
        humidity.textContent = "Humidity: " + weather.main.humidity + '%';
        weatherNow.append(humidity);

        var wind = document.createElement('p');
        wind.textContent = "Wind speed: " + weather.wind.speed + ' mph, ' + weather.wind.deg + '°';
        weatherNow.append(wind);
         
        var weatherDetails = weather.weather[0]
        if (weatherDetails && weatherDetails.description) {
                var description = document.createElement('p');
                description.textContent = weatherDetails.description;
                weatherNow.append(description);    
        }
}
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