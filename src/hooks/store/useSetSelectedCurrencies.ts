import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableFiatNames } from 'types';

import { TSetSelectedCurrencies } from './types';

export const useSetSelectedCurrencies = (): TSetSelectedCurrencies => {
  const dispatch = useDispatch();

  return useCallback(
    (value: AvailableFiatNames[]) =>
      dispatch(SelectedCurrenciesSlice.actions.setSelectedCurrencies(value)),
    [dispatch],
  );
};
