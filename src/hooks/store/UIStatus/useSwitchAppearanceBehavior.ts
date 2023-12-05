import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';

export const useSwitchAppearanceBehavior = () => {
  const dispatch = useDispatch();

  return useCallback(
    () => dispatch(ColorSchemeSlice.actions.switchAppearanceBehavior()),
    [dispatch],
  );
};
