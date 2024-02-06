/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';

import App from './src/App';

AppRegistry.registerComponent('main', () => App);
Platform.OS === 'web' &&
  AppRegistry.runApplication('main', {
    rootTag: document.getElementById('root'),
  });
