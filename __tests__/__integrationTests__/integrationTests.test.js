import nock from 'nock';

import {
    testStore
} from '../../src/Common_Functions/testStore';
import {
    getWeatherData
} from '../../src/actions/weatherActions';
import {
    getCityCoordinatesByName,
    getCityNameByCoordinates
} from '../../src/actions/locationActions';

describe('GetWeatherData', () => {

    test('Store is updated correctly', () => {
        nock.disableNetConnect();

        const lat = '12.22977';
        const lon = '21.01178';

        const expectedState = {
                current: {
                    temp: 20,
                    humidity: 50,
                    pressure: 1050,
                    wind_speed: 100,
                    weather: [{}],
                  },
                  daily: [],
        };

        nock('https://api.openweathermap.org')
            .get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=47f83ac09c8aba4209901acd619fdb03`)
            .reply(200, {
                current: {
                    temp: 20,
                    humidity: 50,
                    pressure: 1050,
                    wind_speed: 100,
                    weather: [{}],
                  },
                  daily: [],
            });

            const store = testStore();

            return store.dispatch(getWeatherData(lat,lon))
            .then(() => {
                const newState = store.getState();
                expect(newState.weatherData.weatherData).toEqual(expectedState);
            });

    });

});


describe('Get city data', () => {

    test('City name in Store is updated correctly', () => {

        nock.disableNetConnect();

        const lat = '19.22977';
        const lon = '2.01178';

        const expectedState = {
                standard: {
                  city: 'Abeibara',
                  prov: 'Mali',
                },
        };

        nock('https://geocode.xyz')
            .get(`/${lat},${lon}?geoit=json`)
            .reply(200, {
                    standard: {
                      city: 'Abeibara',
                      prov: 'Mali',
                    },
            });

            const store = testStore();

            return store.dispatch(getCityNameByCoordinates(lat,lon))
            .then(() => {
                const newState = store.getState();
                expect(newState.cityData.cityData).toEqual(expectedState);
            });

    });


    test('City coordinates in Store are updated correctly', () => {
        nock.disableNetConnect();

        const cityName = 'Wroclaw';

        const expectedState = {
                latt: '19.22977',
                longt: '2.01178',
        };

        nock('https://geocode.xyz')
            .get(`/?locate=${cityName}&geoit=json`)
            .reply(200, {
                      latt: '19.22977',
                      longt: '2.01178',
            });

            const store = testStore();

            return store.dispatch(getCityCoordinatesByName(cityName))
            .then(() => {
                const newState = store.getState();
                expect(newState.coordinatesData.coordinatesData).toEqual(expectedState);
            });

    });

});