import { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from 'assets/colors';

import { ThemeContext } from './ThemeProvider';
import { UseSetColorScheme, WithTheme } from './ThemeProvider.types';

export const withTheme: WithTheme = mapStyles => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { themeColors } = useContext(ThemeContext);

  return StyleSheet.create(mapStyles(themeColors));
};

export const useSetColorScheme: UseSetColorScheme = setTheme =>
  useCallback(
    colorScheme =>
      setTheme({
        colorScheme,
        themeColors: THEME_COLORS[colorScheme],
      }),
    [setTheme],
  );
