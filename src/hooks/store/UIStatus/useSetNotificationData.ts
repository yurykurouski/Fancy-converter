import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';
import { TNotificationData } from 'types';

import { TSetNotificationData } from '../types';

export const useSetNotificationData = (): TSetNotificationData => {
  const dispatch = useDispatch();

  return useCallback(
    (value: TNotificationData) =>
      dispatch(UISlice.actions.setNotificationData(value)),
    [dispatch],
  );
};
