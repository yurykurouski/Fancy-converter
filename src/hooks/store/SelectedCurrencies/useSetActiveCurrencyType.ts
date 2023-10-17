import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { ECurrencyType } from 'types';

import { TSetActiveCurrencyType } from '../types';

export const useSetActiveCurrencyType = (): TSetActiveCurrencyType => {
  const dispatch = useDispatch();

  return useCallback(
    (value: ECurrencyType) =>
      dispatch(SelectedCurrenciesSlice.actions.setActiveCurrencyType(value)),
    [dispatch],
  );
};
