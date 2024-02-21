import { useCallback } from 'react';
import { InteractionManager } from 'react-native';
import { useDispatch } from 'react-redux';
import { ColorSchemeSliceActions } from 'store/colorScheme/slices/ColorSchemeSlice';
import { EColorSchemeBehavior } from 'types';

export const useSwitchColorScheme = () => {
  const dispatch = useDispatch();

  return useCallback(
    (behavior: EColorSchemeBehavior) =>
      InteractionManager.runAfterInteractions(() => {
        dispatch(ColorSchemeSliceActions.switchColorScheme(behavior));
      }),
    [dispatch],
  );
};
