import { GET_WEATHER , GET_CITY_NAME_AND_COUNTRY, GET_COORDINATES } from '../actions/types';

const initialState = {
    weatherData: {},
    city: 'Wrocław',
    country: 'PL',
  weatherImg: '',
  lat: '52.22977',
  lon: '21.01178',
    temp: '',
    humidity: '',
    pressure: '',
    wind: '',
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_WEATHER:
            console.log('reducer');
        return  {
            ...state,
            temp: action.temp,
            humidity: action.humidity,
            pressure: action.pressure,
            wind: action.wind,
        }
        default: 
        return state;
    }
}