import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styles } from './App.styles';
import { ExchangeCourseProvider } from './components/Context/ExchangeCourseContext';
import { LocalStorageProvider } from './components/Context/LocalStorageProvider/LocalStorageProvider';
import { CurrenciesMainContent } from './components/CurrenciesMainContent';
import {
  getCurrentColorTheme,
  getCurrentThemeColors,
} from './utils/getCurrentColorTheme';

const currentTheme = getCurrentColorTheme();
const colors = getCurrentThemeColors();

const App = React.memo(() => (
  <GestureHandlerRootView>
    <LocalStorageProvider>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar
          barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={colors.APP_BACKGROUND_PRIMARY}
        />
        <Text style={styles.header}>Fancy converter</Text>

        <ExchangeCourseProvider>
          <CurrenciesMainContent />
        </ExchangeCourseProvider>
      </SafeAreaView>
    </LocalStorageProvider>
  </GestureHandlerRootView>
));

export default App;
