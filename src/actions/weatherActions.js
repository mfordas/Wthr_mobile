import axios from 'axios';

import {GET_WEATHER} from '../actions/types';

export const getWeatherData = (lat, lon) => async (dispatch) => {
  const weatherApiKey = '47f83ac09c8aba4209901acd619fdb03';
  try {
    const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`).then(res => res.data);

    dispatch({
      type: GET_WEATHER,
      weatherData: weatherData,
    });
  } catch {
    console.log('No data for this coordinates, try again');
  }
};
