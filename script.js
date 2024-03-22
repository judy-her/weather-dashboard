console.log('I am connected');

const API_KEY = 'f4d2ec0aceb6adaf6e9866e242642310';
//test
let query = 'london';
let units = 'imperial';
const weatherBASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${units}`;

const cnt = 5; //for 5 days

const getWeatherData = () => {
  return fetch(weatherBASE_URL).then((res) => res.json());
};

const getForecastData = (lat, lon) => {
  //forecast url
  const forecastBASE_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&cnt=${cnt}&lat=${lat}&lon=${lon}`;
  return fetch(forecastBASE_URL)
    .then((res) => res.json())
    .then(console.log('Forecast API', forecastBASE_URL));
};

getWeatherData().then((weatherData) => {
  const { coord } = weatherData;
  const { lat, lon } = coord;

  console.log('Weather Data:', weatherData);
  console.log('lat:', lat);
  console.log('lon:', lon);

  getForecastData(lat, lon).then((forecastData) => {
    console.log('Forecast Data', forecastData);
  });
});

//use this lat and lon for api forecast
//   let cnt = 5;
//   let lat = coord.lat;
//   let lon = coord.lon;
//   const forecastBASE_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&cnt=${cnt}&lat=${lat}&lon=${lon}`;

//   console.log('Forecast API URL:', forecastBASE_URL);
// });
