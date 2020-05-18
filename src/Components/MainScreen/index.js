import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image, PermissionsAndroid, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import mainStyling from '../../main_styling/main_styling';
// import ErrorMessage from '../ReusableComponents/ErrorMessage';

import sunSrc from '../../img/sun.png';
import weatherSrc from '../../img/weather.png';
import weather2Src from '../../img/weather_2.png';
import cloudSrc from '../../img/cloud.png';
import cloudySrc from '../../img/cloudy.png';
import rainSrc from '../../img/rain.png';
import stormSrc from '../../img/storm.png';
import snowflakeSrc from '../../img/snowflake.png';
import fogSrc from '../../img/fog.png';
import foggySrc from '../../img/foggy.png';
import atmospheric2Src from '../../img/atmospheric_2.png';
import atmosphericSrc from '../../img/atmospheric.png';
import moonSrc from '../../img/moon.png';
import nightSrc from '../../img/night.png';
import gaugeSrc from '../../img/gauge.png';
import humiditySrc from '../../img/humidity.png';
import windSrc from '../../img/wind.png';

import locationSrc from '../../img/pin.png';
import confirmSrc from '../../img/checked.png';





class MainScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        city: 'Wrocław',
        country: 'PL',
      weatherImg: '',
      lat: '52.22977',
      lon: '21.01178',
    }
  }


  

  setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(`${key}`, `${value}`)
    } catch (e) {
      // saving error
    }
  };

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Wthr App Location Permission",
          message:
            "Wthr App needs access to your location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
        
      );
      
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async getCityNameByCoordinates() {
      Geolocation.getCurrentPosition(info => {this.setState({lat: info.coords.latitude, lon: info.coords.longitude})});

    const mainData = await axios.get(`https://geocode.xyz/${this.state.lat},${this.state.lon}?geoit=json`);
    const cityData = mainData.data;

    this.setState({city: cityData.city, country: cityData.country});

    // return new Promise(function (resolve, reject) {
    //   fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
    //     .then(res => res.json())
    //     .then(data => {
    //       resolve(data);
    //     })
    //     .catch((error) => {
    //       reject(error);
    //     });
    // });
  };

  
  
//   getCityCoordinatesByName(cityName) {
//     return new Promise(function (resolve, reject) {
//       fetch(`https://geocode.xyz/?locate=${cityName}&geoit=json`)
//         .then(res => res.json())
//         .then(data => {
//           resolve(data);
//         })
//         .catch((data) => {
//           reject(data);
//         });
//     });
//   };

//   getUserLocation() {
//     return new Promise(function (resolve, reject) {
//       window.navigator.geolocation.getCurrentPosition(
//         async position => {
//             let lat = Math.round(position.coords.latitude * 100000) / 100000;
//             let lon = Math.round(position.coords.longitude * 100000) / 100000;
//             lat = lat.toString();
//             lon = lon.toString();
//             for (let i = lat.length - 1; i >= 1; i--) {
//               if (lat[i - 1] !== '.') {
//                 if (lat[i] === '0') {
//                   lat.pop();
//                 } else {
//                   break;
//                 }
//               }
//             }
//             for (let i = lon.length - 1; i >= 1; i--) {
//               if (lon[i - 1] !== '.') {
//                 if (lon[i] === '0') {
//                   lon.pop();
//                 } else {
//                   break;
//                 }
//               }
//             }
//             resolve({
//               lat,
//               lon
//             });
//           },
//           err => {
//             reject(err);
//           },
//       );
//     });
//   };


componentDidMount () {
    this.requestLocationPermission();
    this.getCityNameByCoordinates();
}


  render() {

   const {city, country} = this.state;
  
    return (
        <View style={mainStyling.container}>
              <TouchableOpacity style={mainStyling.locationContainer}>
          <Image style={mainStyling.iconLocation} source={locationSrc} />
          <Text style={mainStyling.mainText}>{city}, </Text>
          <Text style={mainStyling.mainText}>{country}</Text>
          </TouchableOpacity>
          <Button onPress={() => this.getCityNameByCoordinates()} title={'button'}></Button>
        </View>
    );
  }
}

export default MainScreen;