import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux';

import { getWeatherData } from '../../actions/weatherActions';
import { getCityCoordinatesByName, getCityNameByCoordinates } from '../../actions/locationActions';
import mainStyling from '../../main_styling/main_styling';
import Location from './Location';

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

class MainScreen extends React.Component {

  chooseIcon(iconCode) {
    switch (iconCode) {
      case '01d':
        return <Image style={mainStyling.mainWeatherIcon} source={sunSrc} />;
      case '01n':
        return <Image style={mainStyling.mainWeatherIcon} source={nightSrc} />;
      case '02d':
        return <Image style={mainStyling.mainWeatherIcon} source={weatherSrc} />
      case '02n':
        return <Image style={mainStyling.mainWeatherIcon} source={moonSrc} />
      case '03d':
      case '03n':
        return <Image style={mainStyling.mainWeatherIcon} source={cloudSrc} />
      case '04d':
      case '04n':
        return <Image style={mainStyling.mainWeatherIcon} source={cloudySrc} />
      case '09d':
      case '09n':
        return <Image style={mainStyling.mainWeatherIcon} source={rainSrc} />
      case '10d':
        return <Image style={mainStyling.mainWeatherIcon} source={weather2Src} />
      case '10n':
        return <Image style={mainStyling.mainWeatherIcon} source={atmospheric2Src} />
      case '11d':
        return <Image style={mainStyling.mainWeatherIcon} source={stormSrc} />
      case '11n':
        return <Image style={mainStyling.mainWeatherIcon} source={atmosphericSrc} />
      case '13d':
      case '13n':
        return <Image style={mainStyling.mainWeatherIcon} source={snowflakeSrc} />
      case '50d':
        return <Image style={mainStyling.mainWeatherIcon} source={fogSrc} />
      case '50n':
        return <Image style={mainStyling.mainWeatherIcon} source={foggySrc} />
      default:
        return null
    }
  };

async componentDidMount () {
    Geolocation.getCurrentPosition(async info => {
      await this.props.getCityNameByCoordinates(info.coords.latitude, info.coords.longitude);
      await this.props.getWeatherData(info.coords.latitude, info.coords.longitude);
    });
    
};

componentDidUpdate (prevProps, prevState) {
  if((this.props.coordinatesData.coordinatesData.latt !== prevProps.coordinatesData.coordinatesData.latt) && (this.props.coordinatesData.coordinatesData.longt !== prevProps.coordinatesData.coordinatesData.longt)){
  this.props.getWeatherData(this.props.coordinatesData.coordinatesData.latt, this.props.coordinatesData.coordinatesData.longt);
};
};


  render() {
    return (
        <ScrollView style={mainStyling.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <Location />
        <View style={mainStyling.weatherContainer}>
          <Text style={mainStyling.temperature}>{Math.round(this.props.weatherData.weatherData.main.temp)}°C</Text>
          <View style={mainStyling.conditionsContainer}>
          <Image style={mainStyling.conditionsIcon} source={windSrc} />
          <Text style={mainStyling.conditionsText}>{this.props.weatherData.weatherData.wind.speed} m/s</Text>
          </View>
          <View style={mainStyling.conditionsContainer}>
          <Image style={mainStyling.conditionsIcon} source={humiditySrc} />
    <Text style={mainStyling.conditionsText}>{this.props.weatherData.weatherData.main.humidity}%</Text>
          </View>
          <View style={mainStyling.conditionsContainer}>
          <Image style={mainStyling.conditionsIcon} source={gaugeSrc} />
          <Text style={mainStyling.conditionsText}>{this.props.weatherData.weatherData.main.pressure} hPa</Text>
          </View>
          {this.chooseIcon(this.props.weatherData.weatherData.weather[0].icon)}
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
  weatherData: state.weatherData,
  coordinatesData: state.coordinatesData,
  cityData: state.cityData,
})

export default connect(mapStateToProps, { getWeatherData, getCityCoordinatesByName, getCityNameByCoordinates })(MainScreen);