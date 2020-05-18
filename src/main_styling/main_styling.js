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
}

// .weather-container {
//     display: flex;
//     flex-direction: column;
//     margin: .5rem;
//     font-size: 3rem;
//     padding: 1rem .5rem;
//     text-align: center;
//     color: #000000;
//     transition: all 0.7s;
//     width: 200px;
//     align-items: center;
//     justify-content: center;
//     flex:1;
//     align-self: center;
// }
// .input {
//     display: flex;
//     margin: .5rem;
//     font-size: 1.5rem;
//     padding: 0.5rem .5rem;
//     text-align: center;
//     color: #000000;
//     transition: all 0.7s;
//     width: 200px;
//     align-self: center;
//     justify-content: center;
//     border-bottom: 2px solid #000000;
//     position: relative;
    
// }

// #input{
//     text-decoration:none;
//     width: 100%;
//     color:#000000;
//     border: none;
//     text-align: center;
//     font-size: 1.5rem;
//   }

// #icon-location{
//     height: 1.5rem;
//     padding: 0rem .5rem;
//     align-self: center;
// }

// #icon-confirm {
//     position: absolute;
//     right: 0px;
//     align-self: center;
//     justify-self: center;
//     height: 1.5rem;
//     padding: 0rem .5rem 0rem 2.5rem;
//     z-index: 100;

// }



// .icons-author-container {
//     margin: .5rem;
//     font-size: 1rem;
//     padding: 0.5rem .5rem;
//     text-align: center;
//     color: #000000;
//     transition: all 0.7s;
//     width: 200px;
//     align-self: center;
    
// }



// .temperature {
//     font-size: 10rem;
// }


// .wind, .humidity, .pressure {
//     font-size: 3rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// #icon {
//     padding: 0.5rem .5rem;
//     max-width: 125px;
// }

// .hide {
// display: none;
// }

// #windIcon, #humidityIcon, #pressureIcon {
//     max-height: 3rem;
//     padding: 0.5rem 0.5rem;
    
// }

});

export default mainStyling;
