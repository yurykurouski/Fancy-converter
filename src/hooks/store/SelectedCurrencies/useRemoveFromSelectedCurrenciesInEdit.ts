import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedForEditSlice } from 'store/selectedForEdit/slices/SelectedForEditSlice';
import { TAvailableCurrenciesNames } from 'types';

import { TRemoveFromSelectedCurrenciesInEdit } from '../types';

export const useRemoveFromSelectedCurrenciesInEdit =
  (): TRemoveFromSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      (value: TAvailableCurrenciesNames) =>
        dispatch(SelectedForEditSlice.actions.clearSelected(value)),
      [dispatch],
    );
  };
