
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

var searchInputVal = document.querySelector('#inputCity')
var button = document.getElementById('searchBtn');
//var input = document.getElementById('inputCity');

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





// function handleSearchFormSubmit(e) {
//         // Don't continue if there is nothing in the search form
//         if (!searchInputVal.value) {
//           return;
//         }
      
//         e.preventDefault();
//         var search = searchInputVal.value.trim();
//         getCoords(search);
//         searchInputVal.value = '';
//       }
      
// searchBtn.addEventListener("click", function (e) {
//         e.preventDefault();
//         var searchBarEl = document.getElementById('inputCity');
//         var city = searchBarEl.value.trim();
//         if (city) {
//           var search = searchInputVal.value.trim();
//           searchInputVal.value = "";
//           //var search = searchInputVal;
//           //console.log(search);
//           fetch(
//             "http://api.openweathermap.org/geo/1.0/direct?q=" +
//               search +
//               "&limit=5&appid=" +
//               ApiKey
//           )
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .then((data) => {

//                 var lat = data[0].lat;
//                 var lon = data[0].lon;
//                 console.log(lat);
//                 console.log(lon);
//                 fetch(
//                         "https://api.openweathermap.org/data/2.5/forecast?lat=" +
//                         lat +
//                         "&lon=" +
//                         lon +
//                         "&appid=" +
//                         ApiKey +
//                         "&units=imperial"
//                 )
//                         .then((response) => response.json())
//                         .then((data) => {
//                                 console.log(data);
                          
//                               })
//           searchBarEl.value = "";
//         // } else {
//         //   alert("Please enter a city")
//         // }
        
// });
searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var searchBarEl = document.querySelector('#inputCity')
        var city = searchBarEl.value.trim();
        if (city) {
          var search = searchInputVal.value.trim();
          search.value = "";
          //var search = searchInputVal;
          //console.log(search);
          fetch(
              "http://api.openweathermap.org/geo/1.0/direct?q=" +
                      city +
                      "&limit=5&appid=" +
                      ApiKey
      
          )
            .then((response) => response.json())
            .then((data) => {
      
              var lat = data[0].lat;
              var lon = data[0].lon;
              console.log(lat);
              console.log(lon);
              fetch(
                      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
                      lat +
                      "&lon=" +
                      lon +
                      "&appid=" +
                      ApiKey +
                      "&units=imperial"
              )
                      .then((response) => response.json())
                      .then((data) => {
                              console.log(data);
                        
                            });
              });
      
              //getCoords(search);
          searchBarEl.value = "";
        } else {
          alert("Please enter a city");
        }
      });
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
//var LatCoord =
function geoLat(){
        var latdiv = document.getElementById('lat')
        //var londiv = document.getElementById('lon')

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=` + ApiKey)
        .then((response) => response.json())
        .then((data) => latdiv.textContent = JSON.stringify(data[0].lat));
};

//var LonCoord =
function geoLon(){
        var londiv = document.getElementById('lon')

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=` + ApiKey)
        .then((response) => response.json())
        .then((data) => londiv.textContent = JSON.stringify(data[0].lon));
};

//var searchBarEl = document.querySelector('#inputCity');


// function handleCitySearch() {
//         //e.preventDefault();
//         var search = searchBarEl.value.trim();
//         search.value = ''
// //var search = searchInputVal;
// //console.log(search);
// getCoords(search);
// }

// var searchBtn = document.getElementById('searchBtn');

// searchBtn.addEventListener('click', handleCitySearch());

// var cityHistory = [];


// function getCoords() {;
//         fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=` + ApiKey)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//          .then(console.log(data[0].lat))
//         // .then(console.log(data[0].lon))
//         //.then((dumper.textContent = data[0]))
// }

//getCoords();
//getCoords()
var apicall = fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial');

function getWeather() {
        //var dumper = document.getElementById('dumper');
        var temp = document.getElementById('temperature');
        var humid = document.getElementById('humidity');
        var wind = document.getElementById('wind')
        //var uV = document.getElementById('uv-index');
        // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
        .then((response) => { 
                return response.json();
        })
        .then((data) => {
                temp.textContent = JSON.stringify(data.list[0].main.temp)
                humid.textContent = JSON.stringify(data.list[0].main.humidity)
                wind.textContent = JSON.stringify(data.list[0].wind.speed)
                imgToday.innerHTML = '<img id="imgToday" class="fiveDay-img mb-2" src="https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@4x.png" />'

                
        })};
        

        function getForecastDay1() {
                var tempday1 = document.getElementById('tempday1');
                var humidday1 = document.getElementById('humidday1');
                var imgDay1 = document.getElementById('imgDay1');
                // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
                .then((response) => { 
                        return response.json();
                })
                .then((data) => {
                        console.log(data)
                        tempday1.textContent = JSON.stringify(data.list[8].main.temp)
                        humidday1.textContent = JSON.stringify(data.list[8].main.humidity)
                        imgDay1.innerHTML = '<img id="imgDay1" class="fiveDay-img mb-2" src="https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png" />'
                })};
        

        
        function getForecastDay2() {
                var tempday2 = document.getElementById('tempday2');
                var humidday2 = document.getElementById('humidday2');
                // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
                .then((response) => { 
                        return response.json();
                })
                .then((data) => {
                        tempday2.textContent = JSON.stringify(data.list[16].main.temp)
                        humidday2.textContent = JSON.stringify(data.list[16].main.humidity)
                        imgDay2.innerHTML = '<img id="imgDay2" class="fiveDay-img mb-2" src="https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png" />'
                })};

                
        function getForecastDay3() {
                var tempday3 = document.getElementById('tempday3');
                var humidday3 = document.getElementById('humidday3');
                // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
                .then((response) => { 
                        return response.json();
                })
                .then((data) => {
                        tempday3.textContent = JSON.stringify(data.list[24].main.temp)
                        humidday3.textContent = JSON.stringify(data.list[24].main.humidity)
                        imgDay3.innerHTML = '<img id="imgDay3" class="fiveDay-img mb-2" src="https://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '@2x.png" />'
                })};
        
         function getForecastDay4() {
                        var tempday4 = document.getElementById('tempday4');
                        var humidday4 = document.getElementById('humidday4');
                        // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
                        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
                        .then((response) => { 
                                return response.json();
                        })
                        .then((data) => {
                                tempday4.textContent = JSON.stringify(data.list[32].main.temp)
                                humidday4.textContent = JSON.stringify(data.list[32].main.humidity)
                                imgDay4.innerHTML = '<img id="imgDay4" class="fiveDay-img mb-2" src="https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png" />'

                        })};

        function getForecastDay5() {
                var tempday5 = document.getElementById('tempday5');
                var humidday5 = document.getElementById('humidday5');
                
                // var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial';
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=02de89be83267d4702049938b828e151&units=imperial')
                .then((response) => { 
                        return response.json();
                })
                .then((data) => {
                        tempday5.textContent = JSON.stringify(data.list[39].main.temp)
                        humidday5.textContent = JSON.stringify(data.list[39].main.humidity)
                        imgDay5.innerHTML = '<img id="imgDay5" class="fiveDay-img mb-2" src="https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png" />'
                        
                })};                
getWeather();
getForecastDay1();
getForecastDay2();
getForecastDay3();
getForecastDay4();
getForecastDay5();


function showWeather() {
        console.log('test');
        var weatherNow = document.getElementById('weatherNow');

        //create h2 for name
        var city = document.createElement('h2');
        city.textContent = weather.name;
        weatherNow.append(city);

        //create p for humidity,wind, description, temp
        var temp = document.createElement('p');
        temp.textContent = 'Temp: ' + response.main.temp + ' F'
        weatherNow.append(temp);
        
        var humidity = document.createElement('p');
        humidity.textContent = "Humidity: " + weather.main.humidity + '%';
        weatherNow.append(humidity);

        var wind = document.createElement('p');
        wind.textContent = "Wind speed: " + weather.wind.speed + ' mph, ' + weather.wind.deg + '°';
        weatherNow.append(wind);
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