import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {chooseIcon} from '../../Common_Functions/icon_choose';
import {changeMetersPerSecondToKMetersPerHour} from '../../Common_Functions/change_m_to_km';
import mainStyling from '../../main_styling/main_styling';

import gaugeSrc from '../../img/gauge.png';
import humiditySrc from '../../img/humidity.png';
import windSrc from '../../img/wind.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }

  dateFormat = (date) => {
    const dateToFormat = new Date(date * 1000);
    const day = dateToFormat.getDate();
    const month = dateToFormat.getMonth() + 1;
    const dayName = dateToFormat.toDateString().slice(0,3);
    return (
      <>
      <Text style={mainStyling.conditionsText}>
        {day}/{month}
      </Text>
      <Text style={mainStyling.conditionsText}>
        {dayName}
      </Text>
      </>
    );
  };

  render() {
    return (
      <>
      <Text style={mainStyling.headerText}>7 days forecast</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
        horizontal={true}>
        {this.props.weatherData.weatherData.daily.map((day) => {
          return (
            <View style={mainStyling.forecastContainer}>
              <View style={mainStyling.conditionsContainerVertical}>
                <Text style={[mainStyling.conditionsText, {marginBottom: 10}]}>Date</Text>
                {this.dateFormat(day.sunrise)}
              </View>
              <View style={mainStyling.conditionsContainerVertical}>
                <Image
                  style={mainStyling.conditionsIcon}
                  source={chooseIcon(day.weather[0].icon)}
                />
              </View>
              <View style={mainStyling.conditionsContainerVertical}>
                <Text style={mainStyling.conditionsText}>
                  {Math.round(day.temp.day)}°C
                </Text>
              </View>
              <View style={mainStyling.conditionsContainerVertical}>
                <Image style={mainStyling.conditionsIcon} source={windSrc} />
                <Text style={mainStyling.conditionsText}>
                  {changeMetersPerSecondToKMetersPerHour(day.wind_speed)} km/h
                </Text>
              </View>
              <View style={mainStyling.conditionsContainerVertical}>
                <Image
                  style={mainStyling.conditionsIcon}
                  source={humiditySrc}
                />
                <Text style={mainStyling.conditionsText}>{day.humidity}%</Text>
              </View>
              <View style={mainStyling.conditionsContainerVertical}>
                <Image style={mainStyling.conditionsIcon} source={gaugeSrc} />
                <Text style={mainStyling.conditionsText}>
                  {day.pressure}hPa
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
});

Forecast.propTypes = {
  weatherData: PropTypes.object
}

export default connect(mapStateToProps, {})(Forecast);
