import { useCallback } from 'react';
import { ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';
import { useThemeSwitcherAnimations } from 'components/Drawer/DrawerThemeSwitcher/DrawerThemeSwitcher.hooks';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';

export const useSetColorScheme = () => {
  const dispatch = useDispatch();

  const { animateThemeSwitcher } = useThemeSwitcherAnimations();

  const setColorScheme = useCallback(
    (theme: ColorSchemeName) =>
      dispatch(ColorSchemeSlice.actions.setColorScheme(theme)),
    [dispatch],
  );

  return useCallback(
    (colorScheme: ColorSchemeName) => {
      if (colorScheme) {
        setColorScheme(colorScheme);
        animateThemeSwitcher(colorScheme === 'dark' ? 'light' : 'dark');
      }
    },
    [animateThemeSwitcher, setColorScheme],
  );
};
