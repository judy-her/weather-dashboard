console.log('I am connected');

const API_KEY = 'f4d2ec0aceb6adaf6e9866e242642310';
//test
let query = 'london';
let units = 'imperial';
const weatherBASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${units}`;

const getWeatherData = () => {
  return fetch(weatherBASE_URL).then((res) => res.json());
};

getWeatherData().then((weatherData) => {
  const {
    coord,
    weather,
    main,
    wind,
    dt,
    sys,
    timezone,
    id,
    name,
  } = weatherData;

  const weatherItems = {
    coord: {
      lon: coord.lon,
      lat: coord.lat,
    },
    weather: {
      id: weather[0].id,
      main: weather.main,
      description: weather.description,
      icon: weather[0].icon,
    },
    wind: {
      speed: wind.speed,
    },
    dt,
    sys: {
      type: sys.type,
      id: sys.id,
      country: sys.country,
      sunrise: sys.sunrise,
      sunset: sys.sunset,
    },
    timezone,
    id,
    name,
  };
  console.log(weatherItems);
  console.log(weatherItems);
  console.log('City:', name);
  console.log('lat:', coord.lat);
  console.log('lon:', coord.lon);
  console.log('Country:', sys.country);
  console.log('Temparature:', main.temp);
  console.log('Humidity:', main.humidity);
  console.log('Wind:', wind.speed, 'mph');
  console.log('Feels Like:', main.feels_like);

  //use this lat and lon for api forecast
  let cnt = 5;
  let lat = coord.lat;
  let lon = coord.lon;
  const forecastBASE_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&cnt=${cnt}&lat=${lat}&lon=${lon}`;

  console.log('Forecast API URL:', forecastBASE_URL);
});
