import React, { useMemo } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import avaliableCurrencies from './avaliable-currencies.json';
import CurrencySelector from './components/CurrencySelector/CurrencySelector';
import CurrencyValue from './components/CurrencyValue/CurrencyValue';
import { SelectedCurrenciesProvider } from './components/SelectedCurrenciesContext';

const App = React.memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [isLoading, exchangeCourse] = useGetCurrenciesList();

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
      {false ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <SelectedCurrenciesProvider>
            <ScrollView style={styles.container}>
              <CurrencyValue />
            </ScrollView>
            <CurrencySelector avaliableCurrencies={avaliableCurrencies} />
          </SelectedCurrenciesProvider>
        </>
      )}
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
