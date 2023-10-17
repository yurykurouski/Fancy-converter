import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FocusedCurrencySlice } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { AvailableFlatNames } from 'types';

import { TSetFocusedCurrencyName } from '../types';

export const useSetFocusedCurrencyName = (): TSetFocusedCurrencyName => {
  const dispatch = useDispatch();

  return useCallback(
    (name: AvailableFlatNames) =>
      dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyName(name)),
    [dispatch],
  );
};
