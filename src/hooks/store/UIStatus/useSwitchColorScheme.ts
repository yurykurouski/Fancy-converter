import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UISlice } from 'store/ui/slices/UISlice';
import { EColorSchemeBehavior } from 'types';

export const useSwitchColorScheme = () => {
  const dispatch = useDispatch();

  return useCallback(
    (behavior: EColorSchemeBehavior) =>
      dispatch(UISlice.actions.switchColorScheme(behavior)),
    [dispatch],
  );
};
