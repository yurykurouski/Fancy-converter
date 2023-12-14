/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { initAsyncStorageInspector } from 'asyncstorage-inspector-flipper';

import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  initAsyncStorageInspector();
}

AppRegistry.registerComponent(appName, () => App);
