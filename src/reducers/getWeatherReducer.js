import { GET_WEATHER , GET_CITY_NAME_AND_COUNTRY, GET_COORDINATES } from '../actions/types';

const initialState = {
    weatherData: {},
    
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_WEATHER:
            console.log('reducer');
        return  {
            ...state,
            weatherData: action.weatherData,
        }
        default: 
        return state;
    }
}