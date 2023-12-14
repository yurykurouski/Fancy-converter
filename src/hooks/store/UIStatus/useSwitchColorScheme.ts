import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ColorSchemeSliceActions } from 'store/colorScheme/slices/ColorSchemeSlice';
import { EColorSchemeBehavior } from 'types';

export const useSwitchColorScheme = () => {
  const dispatch = useDispatch();

  return useCallback(
    (behavior: EColorSchemeBehavior) =>
      dispatch(ColorSchemeSliceActions.switchColorScheme(behavior)),
    [dispatch],
  );
};
