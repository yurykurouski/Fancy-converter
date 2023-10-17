import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableFlatNames } from 'types';

import { TRemoveFromSelectedCurrenciesInEdit } from '../types';

export const useRemoveFromSelectedCurrenciesInEdit =
  (): TRemoveFromSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      (value: AvailableFlatNames) =>
        dispatch(
          SelectedCurrenciesSlice.actions.removeFromSelectedCurrenciesInEdit(
            value,
          ),
        ),
      [dispatch],
    );
  };
