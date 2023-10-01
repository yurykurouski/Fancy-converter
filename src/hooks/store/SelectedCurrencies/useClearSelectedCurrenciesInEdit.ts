import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';

import { TClearSelectedCurrenciesInEdit } from '../types';

export const useClearSelectedCurrenciesInEdit =
  (): TClearSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      () =>
        dispatch(
          SelectedCurrenciesSlice.actions.clearSelectedCurrenciesInEdit(),
        ),
      [dispatch],
    );
  };
