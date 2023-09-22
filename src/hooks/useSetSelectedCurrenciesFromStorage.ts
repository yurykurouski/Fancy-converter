import { useCallback } from 'react';

import { useSetSelectedCurrencies } from './store';

export const useSetSelectedCurrenciesFromStorage = () => {
  const setSelectedCurrencies = useSetSelectedCurrencies();

  return useCallback(
    (value: string) => {
      const currenciesArray = value?.length > 1 ? value.split(',') : [];

      setSelectedCurrencies(currenciesArray);
    },
    [setSelectedCurrencies],
  );
};
