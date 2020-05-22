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
import { Provider } from 'react-redux';
import store from './src/store/store';
import MainScreen from './src/Components/MainScreen';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <MainScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
