import { GET_WEATHER , GET_CITY_NAME_AND_COUNTRY, GET_COORDINATES } from '../actions/types';

const initialState = {
    weatherData: {
        main: {
            temp: 0,
            humidity: 0,
            pressure: 0,
        },
        wind: { speed: 0},
        weather: [{ }],
    },
    
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_WEATHER:
        return  {
            ...state,
            weatherData: action.weatherData,
        }
        default: 
        return state;
    }
}