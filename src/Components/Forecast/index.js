import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { chooseIcon } from '../../Common_Functions/icon_choose';
import { changeMetersPerSecondToKMetersPerHour } from '../../Common_Functions/change_m_to_km';
import mainStyling from '../../main_styling/main_styling';

import gaugeSrc from '../../img/gauge.png';
import humiditySrc from '../../img/humidity.png';
import windSrc from '../../img/wind.png';

class Forecast extends React.Component {
  constructor(props){
    super(props)
  }

  dateFormat = (date) => {
    const dateToFormat = new Date(date*1000);
    const day = dateToFormat.getDate();
    const month = dateToFormat.getMonth()+1;
    return <Text style={mainStyling.conditionsText}>{day}/{month}</Text>
  }

  render() {
    return (
              <ScrollView style={{flex:1, flexDirection:'row'}} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}} horizontal={true}>
                  {this.props.weatherData.weatherData.daily.map(
                      day => { 
                    return <View style={mainStyling.forecastContainer}>
                                <View style={mainStyling.conditionsContainerVertical}>
                                  <Text style={mainStyling.conditionsText}>Date</Text>
                                  {this.dateFormat(day.sunrise)}
                                </View>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Image style={mainStyling.conditionsIcon} source={chooseIcon(day.weather[0].icon)} />
                                </View>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Text style={mainStyling.conditionsText}>{Math.round(day.temp.day)}°C</Text>
                                </View>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Image style={mainStyling.conditionsIcon} source={windSrc} />
                                <Text style={mainStyling.conditionsText}>{changeMetersPerSecondToKMetersPerHour(day.wind_speed)} km/h</Text>
                                </View>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Image style={mainStyling.conditionsIcon} source={humiditySrc} />
                                <Text style={mainStyling.conditionsText}>{day.humidity}%</Text>
                                </View>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Image style={mainStyling.conditionsIcon} source={gaugeSrc} />
                                <Text style={mainStyling.conditionsText}>{day.pressure}hPa</Text>
                                </View>
                            </View>
                      }
                  )
                }
        </ScrollView> 
    );
  }
}

const mapStateToProps = state => ({
    weatherData: state.weatherData,
})

export default connect(mapStateToProps, { })(Forecast);