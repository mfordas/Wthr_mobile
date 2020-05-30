import {
    GET_COORDINATES,
    GET_CITY_NAME_AND_COUNTRY
} from '../../actions/types';
import getLocationReducer from '../getLocationReducer';

describe('Get Location Reducer', () => {

    it('Should return default state', () => {
        const newState = getLocationReducer(undefined, {});
        expect(newState).toEqual({
            coordinatesData: {
                latt: '52.22977',
                longt: '21.01178',
            },
            cityData: {
                standard: {
                    city: 'Warszawa',
                    prov: 'PL',
                },
            },
        });
    });

    it('Should return new state of coordinatesData if type is GET_COORDINATES', () => {
        const newCoordinates = {
            latt: '16.55123',
            longt: '44.11109',
        };

        const newState = getLocationReducer(undefined, {
            type: GET_COORDINATES,
            coordinatesData: newCoordinates
        });
        expect(newState).toEqual({
            coordinatesData: newCoordinates,
            cityData: {
                standard: {
                    city: 'Warszawa',
                    prov: 'PL',
                },
            },
        });
    });

    it('Should return new state of coordinatesData if type is GET_CITY_NAME_AND_COUNTRY', () => {
        const newCityNameAndCountry = {
            standard: {
                city: 'New York',
                prov: 'US',
                pro2v: 'US',
            },
        };

        const newState = getLocationReducer(undefined, {
            type: GET_CITY_NAME_AND_COUNTRY,
            cityData: newCityNameAndCountry
        });
        expect(newState).toEqual({
            coordinatesData: {
                latt: '52.22977',
                longt: '21.01178',
            },
            cityData: newCityNameAndCountry,
        });
    });


});