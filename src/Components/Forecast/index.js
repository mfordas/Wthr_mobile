import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import mainStyling from '../../main_styling/main_styling';

import gaugeSrc from '../../img/gauge.png';
import humiditySrc from '../../img/humidity.png';
import windSrc from '../../img/wind.png';

class Forecast extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
              <View style={{flex:1, flexDirection:'row'}}>
                  {this.props.weatherData.weatherData.daily.map(
                      day => { 
                    return <View style={mainStyling.forecastContainer}>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Text style={mainStyling.conditionsText}>{Math.round(day.temp.day)}°C</Text>
                                </View>
                                <View style={mainStyling.conditionsContainerVertical}>
                                <Image style={mainStyling.conditionsIcon} source={windSrc} />
                                <Text style={mainStyling.conditionsText}>{day.wind_speed} m/s</Text>
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
        </View> 
    );
  }
}

const mapStateToProps = state => ({
    weatherData: state.weatherData,
})

export default connect(mapStateToProps, { })(Forecast);