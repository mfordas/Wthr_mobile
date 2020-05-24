/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import store from '../src/store/store';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
