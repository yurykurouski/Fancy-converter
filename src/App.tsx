import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import { styles } from './App.styles';
import { ExchangeCourseProvider } from './components/Context/ExchangeCourseContext';
import { LocalStorageProvider } from './components/Context/LocalStorageProvider/LocalStorageProvider';
import { CurrenciesMainContent } from './components/CurrenciesMainContent';
import {
  getCurrentColorTheme,
  getCurrentThemeColors,
} from './utils/getCurrentColorTheme';

const isDarkMode = getCurrentColorTheme();
const colors = getCurrentThemeColors();

const App = React.memo(() => (
  <LocalStorageProvider>
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.APP_BACKGROUND_PRIMARY}
      />
      <Text style={styles.header}>Fancy converter</Text>
      <ExchangeCourseProvider>
        <CurrenciesMainContent />
      </ExchangeCourseProvider>
    </SafeAreaView>
  </LocalStorageProvider>
));

export default App;
