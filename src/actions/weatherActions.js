import axios from 'axios';

import {GET_WEATHER} from '../actions/types';

setURL = (lat, lon) => {
  const weatherApiKey = '47f83ac09c8aba4209901acd619fdb03';
  const weatherApiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&
    exclude=current,daily&appid=${weatherApiKey}`;
  return weatherApiURL;
};

export const getWeatherData = (lat, lon) => async (dispatch) => {
  try {
    const weatherData = await axios.get(setURL(lat, lon));
    dispatch({
      type: GET_WEATHER,
      weatherData: weatherData.data,
    });
  } catch {
    console.log('No data for this coordinates, try again');
  }
};
