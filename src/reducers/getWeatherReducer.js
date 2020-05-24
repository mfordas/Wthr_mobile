import {GET_WEATHER} from '../actions/types';

const initialState = {
  weatherData: {
    current: {
      temp: 0,
      humidity: 0,
      pressure: 0,
      wind_speed: 0,
      weather: [{}],
    },
    daily: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    default:
      return state;
  }
}
