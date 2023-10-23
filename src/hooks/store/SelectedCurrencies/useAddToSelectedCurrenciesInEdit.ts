import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { EAvailableFiatNames } from 'types';

import { TAddToSelectedCurrenciesInEdit } from '../types';

export const useAddToSelectedCurrenciesInEdit =
  (): TAddToSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      (value: EAvailableFiatNames) =>
        dispatch(
          SelectedCurrenciesSlice.actions.addToSelectedCurrenciesInEdit(value),
        ),
      [dispatch],
    );
  };
