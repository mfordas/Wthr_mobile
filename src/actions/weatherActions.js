import axios from 'axios';

import { GET_WEATHER , GET_CITY_NAME_AND_COUNTRY, GET_COORDINATES } from '../actions/types';

setURL = (lat, lon) => {
    const weatherApiKey = '47f83ac09c8aba4209901acd619fdb03';
    const weatherApiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}}&lon=${lon}&units=metric&APPID=${weatherApiKey}`;
    return weatherApiURL;
  };

export const  getWeatherData = (lat, lon) => async dispatch => {
    const weatherData = await axios.get(setURL(lat, lon));
    dispatch({
        type: GET_WEATHER,
        weatherData: weatherData.data,
    });
};