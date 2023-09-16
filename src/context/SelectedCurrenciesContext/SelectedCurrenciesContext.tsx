import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AppState } from 'react-native';
import { SelectedCurrencies } from 'types';
import { setToStorage, StorageKeys } from 'utils';

import { LocalStorageContext } from '../LocalStorageProvider';

type SelectedCurrenciesContext = {
  selectedCurrenciesContext?: {
    selectedCurrencies: SelectedCurrencies;
    setSelectedCurrencies: Dispatch<SetStateAction<string[]>>;
  };
};

export const SelectedCurrenciesContext =
  createContext<SelectedCurrenciesContext>(null);

export const SelectedCurrenciesProvider: FC = ({ children }) => {
  const appState = useRef(AppState.currentState);
  const context = useContext(LocalStorageContext);

  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      //TODO: possible woks only on iOS:
      if (appState.current === 'inactive' && nextAppState === 'background') {
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
