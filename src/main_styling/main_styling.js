import { StyleSheet } from 'react-native';

const background = '#03875b';
const heartRightSideColor =  'rgb(233, 82, 18)';
const heartLeftSideColor = 'rgb(197, 60, 28)';
const humanColor = 'rgb(245, 239, 191)';
const leafRightSideColor = 'rgb(142, 193, 79)';
const leafLeftSideColor = 'rgb(119, 170, 49)';

const mainStyling = StyleSheet.create({
  
container: {
    flex: 1,
    backgroundColor: background,
},

locationContainer: {
    margin: 5,
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    alignContent: "center",
},

iconLocation: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
},

mainText: {
    fontSize: 20,
    fontFamily: "Exo2-VariableFont_wght",
    alignSelf: 'center',
},

inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    height: 40   
},

input: {
    fontSize: 20,
    paddingBottom: 0,
    textAlign: 'center',
    color: 'black',
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: "Exo2-VariableFont_wght",
},

iconConfirm: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginBottom: -10
},

weatherContainer: {
    margin: .5,
    fontSize: 45,
    padding: 1,
    textAlign: 'center',
    color: 'black',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
},

temperature: {
    fontSize: 70
},


conditionsContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
},

mainWeatherIcon: {
    margin: 15,
    width: 125,
    height: 125,
},

conditionsIcon: {
    height: 40,
    width: 40,
    marginHorizontal: 15,
},

conditionsText: {
    fontSize: 20,
    fontFamily: "Exo2-VariableFont_wght",
},

iconsAuthorContainer: {
    margin: .5,
    fontSize: 10,
    padding: 1,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center',
    flexDirection: 'row',
}

});

export default mainStyling;
