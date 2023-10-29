import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';

export const useSwitchColorScheme = () => {
  const dispatch = useDispatch();

  return useCallback(
    () => dispatch(UISlice.actions.switchColorScheme()),
    [dispatch],
  );
};
