import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Button,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CurrencySelector } from './components/CurrencySelector/CurrencySelector';
import { CurrencyValue } from './components/CurrencyValue/CurrencyValue';
import { useGetCurrenciesList } from './hooks/useGetCurrenciesList';
import avaliableCurrencies from './avaliable-currencies.json';
import { API_CITIES_GRODNO } from './contsants';

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const [currentCity, setCurrentCity] = useState(API_CITIES_GRODNO);

  const isDarkMode = useColorScheme() === 'dark';

  const [isLoading, exchangeCourse] = useGetCurrenciesList(currentCity);

  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingHorizontal: 10,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.header}>Fancy converter</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <ScrollView style={styles.container}>
            {selectedCurrencies.map(currency => (
              <CurrencyValue currencyCode={currency} key={currency} />
            ))}

            <Button onPress={() => setIsModal(true)} title="Add a currency" />
          </ScrollView>
          <CurrencySelector
            avaliableCurrencies={avaliableCurrencies}
            isModal={isModal}
            setIsModal={setIsModal}
            setSelectedCurrencies={setSelectedCurrencies}
            selectedCurrencies={selectedCurrencies}
          />
          {/* {selectedCurrencies && <Button title="API Test" onPress={onPressHandler} />} */}
        </>
      )}
    </SafeAreaView>
  );
};

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
