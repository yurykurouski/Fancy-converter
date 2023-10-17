import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';

import { TSetDrawerStatus } from '../types';

export const useSetDrawerStatus = (): TSetDrawerStatus => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) => dispatch(UISlice.actions.setDrawerOpenedState(value)),
    [dispatch],
  );
};
