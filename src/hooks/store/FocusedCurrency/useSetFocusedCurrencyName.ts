import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FocusedCurrencySlice } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { AvailableFiatNames } from 'types';

import { TSetFocusedCurrencyName } from '../types';

export const useSetFocusedCurrencyName = (): TSetFocusedCurrencyName => {
  const dispatch = useDispatch();

  return useCallback(
    (name: AvailableFiatNames) =>
      dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyName(name)),
    [dispatch],
  );
};
