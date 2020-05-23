import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';

import { getCityCoordinatesByName, getCityNameByCoordinates } from '../../actions/locationActions';
import mainStyling from '../../main_styling/main_styling';

import locationSrc from '../../img/pin.png';
import confirmSrc from '../../img/checked.png';

class Location extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      citySearch:'',
      showForm: false
    }
  }

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
      console.log('errror');
      console.warn(err);
    }
  };

  showCityName = () => {
    return this.props.cityData.cityData.city ? this.props.cityData.cityData.city : 'City not found'
  };

  showCityCountry = () => {
    return this.props.cityData.cityData.prov ? this.props.cityData.cityData.prov : 'try again'
  };

async componentDidMount () {
    this.requestLocationPermission();
};

  render() {
    return (
              <View><TouchableOpacity style={mainStyling.locationContainer} onPress={() => this.setState({showForm: !this.state.showForm})}>
          <Image style={mainStyling.iconLocation} source={locationSrc} />
          <Text style={mainStyling.mainText}>{this.showCityName()}, </Text>
          <Text style={mainStyling.mainText}>{this.showCityCountry()}</Text>
          </TouchableOpacity>
        { this.state.showForm ? <View style={mainStyling.inputContainer}>
          <TextInput style={mainStyling.input} onChangeText={text => this.setState({citySearch: text})}></TextInput>
          <TouchableOpacity style={mainStyling.locationContainer} onPress={async () => {
              this.setState({showForm: false});
              await this.props.getCityCoordinatesByName(this.state.citySearch);
              await this.props.getCityNameByCoordinates(this.props.coordinatesData.coordinatesData.latt, this.props.coordinatesData.coordinatesData.longt);
              }}>
          <Image style={mainStyling.iconConfirm} source={confirmSrc} />
          </TouchableOpacity>
        </View>: <></>}
        </View> 
    );
  }
}

const mapStateToProps = state => ({
  coordinatesData: state.coordinatesData,
  cityData: state.cityData,
})

export default connect(mapStateToProps, { getCityCoordinatesByName, getCityNameByCoordinates })(Location);