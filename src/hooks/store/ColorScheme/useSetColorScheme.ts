import { useCallback } from 'react';
import { ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';

import { TSetColorScheme } from '../types';

export const useSetColorScheme = (): TSetColorScheme => {
  const dispatch = useDispatch();

  return useCallback(
    (theme: ColorSchemeName) =>
      dispatch(ColorSchemeSlice.actions.setColorScheme(theme)),
    [dispatch],
  );
};
