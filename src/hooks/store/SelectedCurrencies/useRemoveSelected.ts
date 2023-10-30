import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

import { TRemoveSelectedCurr } from '../types';

export const useRemoveSelected = (): TRemoveSelectedCurr => {
  const dispatch = useDispatch();

  return useCallback(
    (value: EAvailableFiatNames | EAvailableCryptoNames) =>
      dispatch(SelectedCurrenciesSlice.actions.removeSelectedCurr(value)),
    [dispatch],
  );
};
