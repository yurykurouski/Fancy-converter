import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';

import { TSetEditMode } from '../types';

export const useSetEditMode = (): TSetEditMode => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) => dispatch(UISlice.actions.setEditMode(value)),
    [dispatch],
  );
};
