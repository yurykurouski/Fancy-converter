import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableCurrenciesNames } from 'types';

import { TSetSelectedCurrencies } from './types';

export const useSetSelectedCurrencies = (): TSetSelectedCurrencies => {
  const dispatch = useDispatch();

  return useCallback(
    (value: AvailableCurrenciesNames[]) =>
      dispatch(SelectedCurrenciesSlice.actions.setSelectedCurrencies(value)),
    [dispatch],
  );
};
