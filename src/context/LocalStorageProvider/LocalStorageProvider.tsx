import React, { useEffect, useState } from 'react';
import { SelectedCurrencies } from 'types/avaliable-currencies';
import { getFromStorage, StorageKeys } from 'utils';

export const LocalStorageContext = React.createContext<SelectedCurrencies>([]);

export const LocalStorageProvider: React.FC = ({ children }) => {
  const [storageSelectedCurrencies, setStorageSelectedCurrencies] = useState(
    [],
  );

  useEffect(() => {
    (async () => {
      const item = await getFromStorage(StorageKeys.SELECTED_CURRENCIES);

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