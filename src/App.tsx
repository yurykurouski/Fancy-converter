import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import { styles } from './App.styles';
import { ExchangeCourseProvider } from './components/Context/ExchangeCourseContext';
import { CurrenciesMainContent } from './components/CurrenciesMainContent';
import { getCurrentColorTheme } from './utils/getCurrentColorTheme';

const isDarkMode = getCurrentColorTheme();

const App = React.memo(() => (
  <SafeAreaView style={styles.backgroundStyle}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <Text style={styles.header}>Fancy converter</Text>
    <ExchangeCourseProvider>
      <CurrenciesMainContent />
    </ExchangeCourseProvider>
  </SafeAreaView>
));

export default App;
