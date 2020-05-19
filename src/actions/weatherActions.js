import axios from 'axios';

import { GET_WEATHER , GET_CITY_NAME_AND_COUNTRY, GET_COORDINATES } from '../actions/types';

setURL = () => {
    const weatherApiKey = '47f83ac09c8aba4209901acd619fdb03';
    const weatherApiURL = `https://api.openweathermap.org/data/2.5/weather?lat=52.22977&lon=21.01178&units=metric&APPID=${weatherApiKey}`;
    return weatherApiURL;
  };

export const  getWeatherData = () => async dispatch => {
    console.log('action');
    const weatherData = await axios.get(setURL());
    dispatch({
        type: GET_WEATHER,
      temp: Math.round(weatherData.data.main.temp),
      humidity: weatherData.data.main.humidity,
      pressure: weatherData.data.main.pressure,
      wind: weatherData.data.wind.speed,
    });
};