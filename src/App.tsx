import React, { useMemo } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ExchangeCourseProvider } from './components/Context/ExchangeCourseContext';
import { CurrenciesMainContent } from './components/CurrenciesMainContent';

const App = React.memo(() => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = useMemo(
    () => ({
      height: '100%',
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      paddingHorizontal: 10,
    }),
    [isDarkMode],
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.header}>Fancy converter</Text>
      <ExchangeCourseProvider>
        <CurrenciesMainContent />
      </ExchangeCourseProvider>
    </SafeAreaView>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    paddingVertical: 25,
    alignSelf: 'center',
  },
});
