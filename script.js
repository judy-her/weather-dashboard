console.log('I am connected :)');

// const url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}"

const APIKey = 'f4d2ec0aceb6adaf6e9866e242642310';

function searchCity() {
  const city = 'los angeles';
  const country = 'US';

  const coordUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${APIKey}`;

  fetch(coordUrl)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => {
      //remove lat and lon from each city object
      const extractedData = data.map((city) => ({
        name: city.name,
        lat: city.lat,
        lon: city.lon,
        state: city.state,
        country: city.country,
      }));

      console.log(extractedData);

      extractedData.forEach(({ lat, lon }) => {
        searchWeather(lat, lon);
      });
      displaySearchResults(name, state, country);
    })
    .catch((error) => console.error('Error', error));
}
searchCity();

function displaySearchResults(results) {
  console.log('city name, and state', results);

  const resultsDiv = document.getElementById('result-content');
  resultsDiv.innerHTML = '';

  const name = 'Los Angeles';
  const state = 'California';
  const country = 'US';
  // const { lat, lon } = city.coord;
  if (results) {
    const resultsElem = ` 
    <p> <strong> City: <strong> ${name} </p>
    <p> <strong> State: <strong> ${state} </p>
    <p> <strong> Country: <strong> ${country} </p>
    `;

    //append to resultsUL
    resultsDiv.innerHTML = resultsElem;
  }
}
displaySearchResults();
//function to search for weather
function searchWeather(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;

  //API request
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log('what is this one ', data))
    .then((data) => displayWeatherInfo(data))
    .catch((error) => console.error('Error', error));

  // displayWeatherInfo(data);
}

//search button for api
document
  .getElementById('searchButton')
  .addEventListener('click', searchWeather);

//add keydown event listener
document
  .getElementById('search-input')
  .addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      searchWeather();
    }
  });

//Function to display weather info
function displayWeatherInfo(data) {
  console.log('lets see what this is', data);

  const resultsUL = document.getElementById('temp-wind-humidity');
  resultsUL.innerHTML = '';

  // const data = [0];
  // const { humidity, wind, coord } = city.name;
  const { name } = city.name;
  const { temp } = city.list.main.temp;
  const { lat, lon } = city.coord;

  //htmp template for temp, wind, and humidity
  const resultsLi = ` 
    <li> Temperature : ${temp} </li>
    <li> Wind : ${wind.speed} m/s </li>
    <li> Humidity : ${humidity} </li>
    <li> City : ${name} </li>
    <li> Latitude : ${lat}, Longitude :${lon} </li>`;

  //append to resultsUL
  resultsUL.innerHTML = resultsLi;
}
// searchCity();

// const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

// const btn = document
//   .getElementById('search-btn')
//   .addEventListener('click', queryURL);

// fetch(queryURL)
//   .then((response) => response.json())
//   // .then((data) => console.log(data))
//   .then((data) => {
//     console.log(data);
//     const { lat, lon } = data.coord;
//     const { temp } = data.main;
//     const name = data.name;

//     console.log('Latitude', lat);
//     console.log('Longitude', lon);
//     console.log('City is:', name);
//     console.log('Temperature', temp);
//   })
//   .catch((error) => console.error('Error', error));

// const weatherApp = {
//   init: () => {
//     document
//       .getElementById('search-btn')
//       .addEventListener('click', weatherApp.fetchWeather);
//     document
//       .getElementById('btnCurrent')
//       .addEventListener('click', weatherApp.getLocation);
//   },

// function fetchWeather() {

// },
// //geolocation
// function getLocation (ev) {
//     let opts = {
//         enableHighAccuracy: true,
//         timout: 1000 * 10, //10 seconds
//         maximumAge: 1000 * 60 * 5 //5 minutes
//     }
//     navigator.geolocation.getCurrentPosition(app.ftw, app.wtf,opts)

// },
// ftw: (position)=>{

// },
// wtf: (err)=>{

// },
// function showWeather (){

// }
