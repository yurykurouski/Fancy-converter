import { useCallback } from 'react';
import { ColorSchemeName } from 'react-native';
import { useThemeSwitcherAnimations } from 'components/Drawer/DrawerThemeSwitcher/DrawerThemeSwitcher.hooks';
import { getCurrentColorTheme } from 'utils';

import { useSetColorScheme } from './store';

export const useSetColorSchemeFromStorage = () => {
  const { animateThemeSwitcher } = useThemeSwitcherAnimations();

  const setColorScheme = useSetColorScheme();

  return useCallback(
    (colorScheme: ColorSchemeName) => {
      if (colorScheme) {
        setColorScheme(colorScheme);
        animateThemeSwitcher(colorScheme === 'dark' ? 'light' : 'dark');
      } else {
        const scheme = getCurrentColorTheme();

        setColorScheme(scheme);
        animateThemeSwitcher(scheme === 'dark' ? 'light' : 'dark');
      }
    },
    [animateThemeSwitcher, setColorScheme],
  );
};
