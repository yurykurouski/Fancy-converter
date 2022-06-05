import React, { useEffect, useState } from 'react';
import { SelectedCurrencies } from 'types';
import { getFromStorage, StorageKeys } from 'utils';

export const LocalStorageContext =
  React.createContext<SelectedCurrencies | null>(null);

export const LocalStorageProvider: React.FC = ({ children }) => {
  const [storageSelectedCurrencies, setStorageSelectedCurrencies] = useState(
    [],
  );

  useEffect(() => {
    (async () => {
      const item = await getFromStorage(StorageKeys.SELECTED_CURRENCIES);

      const currenciesArray = convertToArray(item);
      setStorageSelectedCurrencies(currenciesArray);
    })();
  }, []);

  return (
    <LocalStorageContext.Provider value={storageSelectedCurrencies}>
      {children}
    </LocalStorageContext.Provider>
  );
};

const convertToArray = (storageValue: string): string[] => {
  const pasrsed = JSON.parse(storageValue);
  return storageValue === null
    ? []
    : Object.keys(pasrsed).map(key => pasrsed[key]);
};
