import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';

export const useSetSelectedCurrencies = () => {
  const dispatch = useDispatch();

  return useCallback(
    (value: string) => {
      const currenciesArray = value.length > 1 ? value.split(',') : [];

      dispatch(
        SelectedCurrenciesSlice.actions.setSelectedCurrencies(currenciesArray),
      );
    },
    [dispatch],
  );
};
