import { GET_COORDINATES } from '../actions/types';

const initialState = {
    coordinatesData: {
        lat: '52.22977',
        lon: '21.01178',
    },
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_COORDINATES:
            console.log('reducer coordinates');
        return  {
            ...state,
            coordinatesData: action.coordinatesData,
        }
        default: 
        return state;
    }
}