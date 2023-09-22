/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { setupDefaultFlipperReporter } from 'react-native-performance-flipper-reporter';
import { initAsyncStorageInspector } from 'asyncstorage-inspector-flipper';

import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  setupDefaultFlipperReporter();
  initAsyncStorageInspector();
}

AppRegistry.registerComponent(appName, () => App);
