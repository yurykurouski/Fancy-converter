import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { SelectedCurrencies } from 'types';
import { setToStorage, StorageKeys } from 'utils';

import { LocalStorageContext } from '../LocalStorageProvider';

type SelectedCurrenciesContext = {
  selectedCurrenciesContext?: {
    selectedCurrencies: SelectedCurrencies;
    setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export const SelectedCurrenciesContext =
  React.createContext<SelectedCurrenciesContext>(null);

export const SelectedCurrenciesProvider: React.FC = ({ children }) => {
  const appState = useRef(AppState.currentState);
  const context = useContext(LocalStorageContext);

  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current === 'active' && nextAppState === 'background') {
        const result = Object.assign({}, selectedCurrencies);
        setToStorage(StorageKeys.SELECTED_CURRENCIES, result);
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [selectedCurrencies]);

  useEffect(() => {
    setSelectedCurrencies(context);
  }, [context]);

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
