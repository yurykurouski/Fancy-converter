import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { SelectedCurrencies } from 'types/avaliable-currencies';

import { LocalStorageContext } from '../LocalStorageProvider/LocalStorageProvider';

type SelectedCurrenciesContext = {
  selectedCurrenciesContext?: {
    selectedCurrencies: SelectedCurrencies;
    setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export const SelectedCurrenciesContext =
  React.createContext<SelectedCurrenciesContext>({});

export const SelectedCurrenciesProvider: React.FC = ({ children }) => {
  const appState = useRef(AppState.currentState);
  const context = useContext(LocalStorageContext);
  const { setItem } = useAsyncStorage('selectedCurrencies');

  const [selectedCurrencies, setSelectedCurrencies] = useState(() => context);

  useEffect(() => {
    const writeItemToStorage = async (newValue: string) => {
      await setItem(newValue);
    };

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current === 'active' && nextAppState === 'background') {
        const result = arrayToObject(selectedCurrencies);
        const stateStringified = JSON.stringify(result);
        writeItemToStorage(stateStringified);
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [selectedCurrencies, setItem]);

  return (
    <SelectedCurrenciesContext.Provider
      value={{
        selectedCurrenciesContext: {
          selectedCurrencies: selectedCurrencies,
          setSelectedCurrencies: setSelectedCurrencies,
        },
      }}>
      {children}
    </SelectedCurrenciesContext.Provider>
  );
};

const arrayToObject = array =>
  array.reduce(
    (acc, _, index) => ({
      ...acc,
      [index]: array[index],
    }),
    {},
  );
