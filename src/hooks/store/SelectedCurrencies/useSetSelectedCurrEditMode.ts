import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';

import { TSetSelectedCurrEditMode } from '../types';

export const useSetSelectedCurrEditMode = (): TSetSelectedCurrEditMode => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) =>
      dispatch(SelectedCurrenciesSlice.actions.setIsInEditMode(value)),
    [dispatch],
  );
};
