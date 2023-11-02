import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedForEditSlice } from 'store/selectedForEdit/slices/SelectedForEditSlice';

import { TAddToSelectedCurrenciesInEdit } from '../types';

export const useAddToSelectedCurrenciesInEdit =
  (): TAddToSelectedCurrenciesInEdit => {
    const dispatch = useDispatch();

    return useCallback(
      value => dispatch(SelectedForEditSlice.actions.addToSelected(value)),
      [dispatch],
    );
  };
