import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking, Image, PermissionsAndroid, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { connect } from 'react-redux';

import { getWeatherData } from '../../actions/weatherActions';
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
  // constructor(props){
  //   super(props)

  //   this.state = {
  //       city: 'Wrocław',
  //       country: 'PL',
  //     weatherImg: '',
  //     lat: '52.22977',
  //     lon: '21.01178',
  //     citySearch:''
  //   }
  // }

  


  chooseIcon(iconCode) {
    switch (iconCode) {
      case '01d':
        return this.setState({weatherImg: sunSrc});
      case '01n':
        return this.setState({weatherImg: nightSrc});
      case '02d':
        return this.setState({weatherImg: weatherSrc});
      case '02n':
        return this.setState({weatherImg: moonSrc});
      case '03d':
      case '03n':
        return this.setState({weatherImg: cloudSrc});
      case '04d':
      case '04n':
        return this.setState({weatherImg: cloudySrc});
      case '09d':
      case '09n':
        return this.setState({weatherImg: rainSrc});
      case '10d':
        return this.setState({weatherImg: weather2Src});
      case '10n':
        return this.setState({weatherImg: atmospheric2Src});
      case '11d':
        return this.setState({weatherImg: stormSrc});
      case '11n':
        return this.setState({weatherImg: atmosphericSrc});
      case '13d':
      case '13n':
        return this.setState({weatherImg: snowflakeSrc});
      case '50d':
        return this.setState({weatherImg: fogSrc});
      case '50n':
        return this.setState({weatherImg: foggySrc});
      default:
        console.log('Doesnt work');
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

    const mainData = await axios.get(`https://geocode.xyz/${this.state.lat},${this.state.lon}?geoit=json`);
    const cityData = mainData.data;

    this.setState({city: cityData.city, country: cityData.prov});
    
  };

  
  
  async getCityCoordinatesByName(cityName) {
    try {
      const mainData = await axios.get(`https://geocode.xyz/?locate=${cityName}&geoit=json`);
      this.setState({
        lon: mainData.data.longt,
        lat: mainData.data.latt
      })
    } catch {
      console.log('error');
    }

    
  };

componentDidMount () {
    this.requestLocationPermission();
    Geolocation.getCurrentPosition(info => {this.setState({lat: info.coords.latitude, lon: info.coords.longitude})});
    this.props.getWeatherData();
    
};

// componentDidUpdate (prevProps, prevState) {
//   if((this.state.lat !== prevState.lat) && (this.state.lon !== prevState.lon)){
//   this.getCityNameByCoordinates();
//   this.props.getWeatherData();
// };

// };


  render() {

   
  
    return (
        <ScrollView style={mainStyling.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
              
              <View><TouchableOpacity style={mainStyling.locationContainer}>
          <Image style={mainStyling.iconLocation} source={locationSrc} />
          <Text style={mainStyling.mainText}>, </Text>
          <Text style={mainStyling.mainText}></Text>
          </TouchableOpacity>
        <View style={mainStyling.inputContainer}>
          <TextInput style={mainStyling.input} onChangeText={text => this.setState({citySearch: text})}></TextInput>
          <TouchableOpacity style={mainStyling.locationContainer} onPress={() => this.props.getWeatherData()}>
          <Image style={mainStyling.iconConfirm} source={confirmSrc} />
          </TouchableOpacity>
        </View>
        </View> 
        <View style={mainStyling.weatherContainer}>
          <Text style={mainStyling.temperature}>{this.props.temp} °C</Text>
          <View style={mainStyling.conditionsContainer}>
          <Image style={mainStyling.conditionsIcon} source={windSrc} />
          <Text style={mainStyling.conditionsText}>{this.props.wind} m/s</Text>
          </View>
          <View style={mainStyling.conditionsContainer}>
          <Image style={mainStyling.conditionsIcon} source={humiditySrc} />
    <Text style={mainStyling.conditionsText}>{this.props.humidity}%</Text>
          </View>
          <View style={mainStyling.conditionsContainer}>
          <Image style={mainStyling.conditionsIcon} source={gaugeSrc} />
          <Text style={mainStyling.conditionsText}>{this.props.pressure} hPa</Text>
          </View>
          {/* <Image style={mainStyling.mainWeatherIcon} source={this.state.weatherImg} /> */}
        </View>
        <View style={mainStyling.iconsAuthorContainer}>
            <Text>Icons made by </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.flaticon.com/authors/those-icons")}><Text>Those Icons</Text></TouchableOpacity>
             <Text> from </Text>
             <TouchableOpacity onPress={() => Linking.openURL("https://www.flaticon.com/")}><Text>www.flaticon.com</Text></TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  temp: state.temp.temp,
  humidity: state.humidity.humidity,
  pressure: state.pressure.pressure,
  wind: state.wind.wind,
})

export default connect(mapStateToProps, { getWeatherData })(MainScreen);