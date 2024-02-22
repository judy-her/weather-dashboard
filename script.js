console.log('I am connected :)');
const APIKey = 'f4d2ec0aceb6adaf6e9866e242642310';

// const url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}"

let city = 'los angeles';
const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

fetch(queryURL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error', error));

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

// },

// };
