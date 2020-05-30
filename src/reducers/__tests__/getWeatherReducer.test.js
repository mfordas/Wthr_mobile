import {
    GET_WEATHER
} from '../../actions/types';
import getWeatherReducer from '../getWeatherReducer';

describe('Get Weather Reducer', () => {

    it('Should return default state', () => {
        const newState = getWeatherReducer(undefined, {});
        expect(newState).toEqual({
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
        });
    });

    it('Should return new state of weatherData if type is GET_WEATHER', () => {
        const newWeatherData = {
            current: {
                temp: 15,
                humidity: 56,
                pressure: 1000,
                wind_speed: 30,
                weather: [{}],
              },
              daily: [],
        };

        const newState = getWeatherReducer(undefined, {
            type: GET_WEATHER,
            weatherData: newWeatherData
        });
        expect(newState).toEqual({
            weatherData: newWeatherData
        });
    });

});