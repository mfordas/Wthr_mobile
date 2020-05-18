import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PermissionsAndroid
} from 'react-native';

import MainScreen from './src/Components/MainScreen';

import mainStyling from './src/main_styling/main_styling';



const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <MainScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
