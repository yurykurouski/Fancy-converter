import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FocusedCurrencySlice } from 'store/focusedCurrency/slices/FocusedCurrencySlice';

import { TSetFocusedCurrencyValue } from '../types';

export const useSetFocusedCurrencyValue = (): TSetFocusedCurrencyValue => {
  const dispatch = useDispatch();

  return useCallback(
    (value: string) =>
      dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyValue(value)),
    [dispatch],
  );
};
