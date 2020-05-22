import { combineReducers } from 'redux';
import getLocationReducer from './getLocationReducer';
import getWeatherReducer from './getWeatherReducer';


export default combineReducers({
        weatherData: getWeatherReducer,
        coordinatesData: getLocationReducer,
        cityData: getLocationReducer,
})