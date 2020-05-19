import { combineReducers } from 'redux';
import getLocationReducer from './getLocationReducer';
import getCityNameAndCountryReducer from './getCityNameAndCountryReducer';
import getWeatherReducer from './getWeatherReducer';


export default combineReducers({
        temp: getWeatherReducer,
        humidity: getWeatherReducer,
        pressure: getWeatherReducer,
        wind: getWeatherReducer,
})