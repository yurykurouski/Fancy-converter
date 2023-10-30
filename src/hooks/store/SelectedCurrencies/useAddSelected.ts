import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

import { TAddSelectedCurr } from '../types';

export const useAddSelected = (): TAddSelectedCurr => {
  const dispatch = useDispatch();

  return useCallback(
    (value: EAvailableFiatNames | EAvailableCryptoNames) =>
      dispatch(SelectedCurrenciesSlice.actions.addSelectedCurr(value)),
    [dispatch],
  );
};
