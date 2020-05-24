import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import Forecast from '../Forecast';
import mainStyling from '../../main_styling/main_styling';
import store from '../../store/store';

test('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><Forecast /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });