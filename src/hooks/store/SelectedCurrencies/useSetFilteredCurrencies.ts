import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableCryptoNames, AvailableFlatNames, ECurrencyType } from 'types';

import { TSetFilteredCurrencies } from '../types';

export const useSetFilteredCurrencies = (): TSetFilteredCurrencies => {
  const dispatch = useDispatch();

  return useCallback(
    (
      type: ECurrencyType,
      value: AvailableFlatNames[] | AvailableCryptoNames[],
    ) =>
      dispatch(
        SelectedCurrenciesSlice.actions.setFilteredCurrencies({ type, value }),
      ),
    [dispatch],
  );
};
