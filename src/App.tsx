import React, { useState, useCallback } from 'react';
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
import { currenciesService } from './services/currencies-service';
import avaliableCurrencies from './avaliable-currencies.json';
import { API_CITIES_GRODNO } from './contsants';

const DEFAULT_CURRENCY = {
  BY: {
    alpha3: 'BLR',
    currencyId: 'BYN',
    currencyName: 'New Belarusian ruble',
    currencySymbol: 'p.',
    id: 'BY',
    name: 'Belarus',
  },
};

const App = () => {
  const [values, setValues] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';

  const [isLoading, currenciesList] = useGetCurrenciesList();

  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingHorizontal: 10,
  };

  const onPressHandler = useCallback(async () => {
    const response = await currenciesService.getCoursesExchangeWithCity(
      API_CITIES_GRODNO,
    );
    console.log(response);
    const responseMapped = Object.keys(response).map(key => ({
      [key]: response[key],
    }));
    setValues(responseMapped);
  }, []);

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
            //todo выбранные валюты нужно в контекст провайдер
            selectedCurrencies={selectedCurrencies}
          />
          {selectedCurrencies && <Button title="API Test" onPress={onPressHandler} />}
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
