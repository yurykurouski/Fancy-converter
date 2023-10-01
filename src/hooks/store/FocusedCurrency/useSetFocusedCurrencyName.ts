import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FocusedCurrencySlice } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { AvailableCurrenciesNames } from 'types';

import { TSetFocusedCurrencyName } from '../types';

export const useSetFocusedCurrencyName = (): TSetFocusedCurrencyName => {
  const dispatch = useDispatch();

  return useCallback(
    (name: AvailableCurrenciesNames) =>
      dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyName(name)),
    [dispatch],
  );
};
