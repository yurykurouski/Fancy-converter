import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { getFromStorage, StorageKeys } from 'utils';

export const useSetCurrenciesFromStorage = () => {
  const dispatch = useDispatch();

  const setSelectedCurrencies = useCallback(
    (value: string[]) => {
      dispatch(SelectedCurrenciesSlice.actions.setSelectedCurrencies(value));
    },
    [dispatch],
  );

  useEffect(() => {
    (async () => {
      const item = await getFromStorage(StorageKeys.SELECTED_CURRENCIES);

      // const currenciesArray = convertToArray(item);
      const currenciesArray = item.split(',');

      setSelectedCurrencies(currenciesArray);
    })();
  }, [setSelectedCurrencies]);
};
