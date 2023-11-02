import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedForEditSlice } from 'store/selectedForEdit/slices/SelectedForEditSlice';

export const useClearSelectedCurrenciesInEdit = () => {
  const dispatch = useDispatch();

  return useCallback(
    () => dispatch(SelectedForEditSlice.actions.deleteAllSelected()),
    [dispatch],
  );
};
