import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DrawerSlice } from 'store/drawer/slices/DrawerSlice';

import { TSetDrawerStatus } from './types';

export const useSetDrawerStatus = (): TSetDrawerStatus => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) =>
      dispatch(DrawerSlice.actions.setDrawerOpenedState(value)),
    [dispatch],
  );
};
