import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';

import { TSetSelectedCurrEditMode } from '../types';

export const useSetSelectedCurrEditMode = (): TSetSelectedCurrEditMode => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) => dispatch(UISlice.actions.setEditMode(value)),
    [dispatch],
  );
};
