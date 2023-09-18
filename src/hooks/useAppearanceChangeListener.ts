import { useCallback } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';

export const useAppearanceChangeListener = () => {
  const dispatch = useDispatch();

  const setColorScheme = useCallback(
    (theme: ColorSchemeName) =>
      dispatch(ColorSchemeSlice.actions.setColorScheme(theme)),
    [dispatch],
  );

  Appearance.addChangeListener(({ colorScheme }) =>
    setColorScheme(colorScheme),
  );
};
