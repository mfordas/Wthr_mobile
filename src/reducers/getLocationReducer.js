import { GET_COORDINATES, GET_CITY_NAME_AND_COUNTRY } from '../actions/types';

const initialState = {
    coordinatesData: {
        latt: '52.22977',
        longt: '21.01178',
        
    },
    cityData: {
        standard: {
            city: 'Warszawa',
            prov: 'PL'
        }
    }
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_COORDINATES:
        return  {
            ...state,
            coordinatesData: action.coordinatesData,
        }
        case GET_CITY_NAME_AND_COUNTRY:
        return  {
            ...state,
            cityData: action.cityData,
        }
        default: 
        return state;
    }
}