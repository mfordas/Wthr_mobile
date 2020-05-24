import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {connect} from 'react-redux';

import {getWeatherData} from '../../actions/weatherActions';
import {
  getCityCoordinatesByName,
  getCityNameByCoordinates,
} from '../../actions/locationActions';
import {chooseIcon} from '../../Common_Functions/icon_choose';
import {changeMetersPerSecondToKMetersPerHour} from '../../Common_Functions/change_m_to_km';
import mainStyling from '../../main_styling/main_styling';
import Location from './Location';

import gaugeSrc from '../../img/gauge.png';
import humiditySrc from '../../img/humidity.png';
import windSrc from '../../img/wind.png';

class MainScreen extends React.Component {
  async componentDidMount() {
    Geolocation.getCurrentPosition(async (info) => {
      await this.props.getCityNameByCoordinates(
        info.coords.latitude,
        info.coords.longitude,
      );
      await this.props.getWeatherData(
        info.coords.latitude,
        info.coords.longitude,
      );
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.coordinatesData.coordinatesData.latt !==
        prevProps.coordinatesData.coordinatesData.latt &&
      this.props.coordinatesData.coordinatesData.longt !==
        prevProps.coordinatesData.coordinatesData.longt
    ) {
      this.props.getWeatherData(
        this.props.coordinatesData.coordinatesData.latt,
        this.props.coordinatesData.coordinatesData.longt,
      );
    }
  }

  render() {
    return (
      <ScrollView
        style={mainStyling.container}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <Location />
        <View style={mainStyling.weatherContainer}>
          <Text style={mainStyling.temperature}>
            {Math.round(this.props.weatherData.weatherData.current.temp)}°C
          </Text>
          <View style={mainStyling.conditionsContainer}>
            <Image style={mainStyling.conditionsIcon} source={windSrc} />
            <Text style={mainStyling.conditionsText}>
              {changeMetersPerSecondToKMetersPerHour(
                this.props.weatherData.weatherData.current.wind_speed,
              )}{' '}
              km/h
            </Text>
          </View>
          <View style={mainStyling.conditionsContainer}>
            <Image style={mainStyling.conditionsIcon} source={humiditySrc} />
            <Text style={mainStyling.conditionsText}>
              {this.props.weatherData.weatherData.current.humidity}%
            </Text>
          </View>
          <View style={mainStyling.conditionsContainer}>
            <Image style={mainStyling.conditionsIcon} source={gaugeSrc} />
            <Text style={mainStyling.conditionsText}>
              {this.props.weatherData.weatherData.current.pressure} hPa
            </Text>
          </View>
          <Image
            style={mainStyling.mainWeatherIcon}
            source={chooseIcon(
              this.props.weatherData.weatherData.current.weather[0].icon,
            )}
          />
        </View>
        <Button
          title="Go to 7 days forecast"
          onPress={() => this.props.navigation.navigate('Forecast')}
        />
        <View style={mainStyling.iconsAuthorContainer}>
          <Text>Icons made by </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.flaticon.com/authors/those-icons')
            }>
            <Text>Those Icons</Text>
          </TouchableOpacity>
          <Text> from </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.flaticon.com/')}>
            <Text>www.flaticon.com</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
  coordinatesData: state.coordinatesData,
  cityData: state.cityData,
});

export default connect(mapStateToProps, {
  getWeatherData,
  getCityCoordinatesByName,
  getCityNameByCoordinates,
})(MainScreen);
