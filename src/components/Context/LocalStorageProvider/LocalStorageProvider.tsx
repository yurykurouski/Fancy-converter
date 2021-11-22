import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SelectedCurrencies } from 'types/avaliable-currencies';

export const LocalStorageContext = React.createContext<SelectedCurrencies>([]);

export const LocalStorageProvider: React.FC = ({ children }) => {
  const [storageSelectedCurrencies, setStorageSelectedCurrencies] = useState(
    [],
  );
  const { getItem } = useAsyncStorage('selectedCurrencies');

  useEffect(() => {
    (async () => {
      const item = await getItem();

      const currenciesArray = converToArray(item);
      setStorageSelectedCurrencies(currenciesArray);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocalStorageContext.Provider value={storageSelectedCurrencies}>
      {children}
    </LocalStorageContext.Provider>
  );
};

const converToArray = (storageValue: string): string[] => {
  const pasrsed = JSON.parse(storageValue);
  return storageValue === null
    ? []
    : Object.keys(pasrsed).map(key => pasrsed[key]);
};
