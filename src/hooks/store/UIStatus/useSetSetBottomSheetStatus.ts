import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';

import { TSetBSStatus } from '../types';

export const useSetSetBottomSheetStatus = (): TSetBSStatus => {
  const dispatch = useDispatch();

  return useCallback(
    (value: number) => dispatch(UISlice.actions.setBottomSheetState(value)),
    [dispatch],
  );
};
