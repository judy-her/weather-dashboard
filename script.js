console.log('I am connected');
let cityName = document.getElementById('cityName');
let country = document.getElementById('country');
let dateMain = document.getElementById('dateMain');
let icon = document.getElementById('icon');
let temp = document.getElementById('temp');
let feelsLike = document.getElementById('feelsLike');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let d = document.getElementById('description');

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
    const { city, list } = forecastData;

    list.forEach((item) => {
      const { main, weather, wind } = item;
      const { description, icon } = weather[0];

      console.log('Main from Forecast:', main);
      console.log('Weather from Forecast:', weather);
      console.log('City', city.name);
      console.log('Country', city.country);
      console.log('description:', description);
      cityName.textContent = city.name;
      country.textContent = city.country;
      temp.textContent = main.temp;
      d.textContent = description;
    });
  });
});

const formatToLocalTime = (
  secs,
  zone,
  format = "dddd, DD MMMM YYYY' | Local Time: 'hh:mm a"
) => {
  return dayjs
    .unix(secs)
    .utcOffset(zone / 60)
    .format(format);
};

//use this lat and lon for api forecast
//   let cnt = 5;
//   let lat = coord.lat;
//   let lon = coord.lon;
//   const forecastBASE_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&cnt=${cnt}&lat=${lat}&lon=${lon}`;

//   console.log('Forecast API URL:', forecastBASE_URL);
// });
