import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableFlatNames } from 'types';

import { TAddToSelectedCurrenciesInEdit } from '../types';

export const useAddToSelectedCurrenciesInEdit =
  (): TAddToSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      (value: AvailableFlatNames) =>
        dispatch(
          SelectedCurrenciesSlice.actions.addToSelectedCurrenciesInEdit(value),
        ),
      [dispatch],
    );
  };
