import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';

export const useSwitchAppearanceBehavior = () => {
  const dispatch = useDispatch();

  return useCallback(
    () => dispatch(UISlice.actions.switchAppearanceBehavior()),
    [dispatch],
  );
};
