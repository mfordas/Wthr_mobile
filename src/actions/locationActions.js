import axios from 'axios';

import {GET_CITY_NAME_AND_COUNTRY, GET_COORDINATES} from '../actions/types';

export const getCityCoordinatesByName = (cityName) => async (dispatch) => {
  try {
    const mainData = await axios.get(
      `https://geocode.xyz/?locate=${cityName}&geoit=json`,
    );
    dispatch({
      type: GET_COORDINATES,
      coordinatesData: mainData.data,
    });
  } catch {
    console.log('Coordinates for this city not found');
  }
};

export const getCityNameByCoordinates = (lat, lon) => async (dispatch) => {
  try {
    const mainData = await axios.get(
      `https://geocode.xyz/${lat},${lon}?geoit=json`,
    );
    const cityData = mainData.data;
    dispatch({
      type: GET_CITY_NAME_AND_COUNTRY,
      cityData: cityData,
    });
  } catch {
    console.log('City name for this coordinates not found');
  }
};
