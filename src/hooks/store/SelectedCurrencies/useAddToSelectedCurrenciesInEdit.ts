import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableFiatNames } from 'types';

import { TAddToSelectedCurrenciesInEdit } from '../types';

export const useAddToSelectedCurrenciesInEdit =
  (): TAddToSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      (value: AvailableFiatNames) =>
        dispatch(
          SelectedCurrenciesSlice.actions.addToSelectedCurrenciesInEdit(value),
        ),
      [dispatch],
    );
  };
