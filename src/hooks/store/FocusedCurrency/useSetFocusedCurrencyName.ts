import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FocusedCurrencySlice } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

import { TSetFocusedCurrencyName } from '../types';

export const useSetFocusedCurrencyName = (): TSetFocusedCurrencyName => {
  const dispatch = useDispatch();

  return useCallback(
    (value: {
      currencyCode: EAvailableFiatNames | EAvailableCryptoNames;
      value: string;
    }) => dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyName(value)),
    [dispatch],
  );
};
