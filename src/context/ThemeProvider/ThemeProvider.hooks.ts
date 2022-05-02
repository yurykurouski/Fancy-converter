import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from 'assets/colors';

import { ThemeContext } from './ThemeProvider';

type WithTheme = <T extends StyleSheet.NamedStyles<T>>(
  mapStyles: (theme: Theme) => T,
) => T;

export const withTheme: WithTheme = mapStyles => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { themeColors } = useContext(ThemeContext);

  return StyleSheet.create(mapStyles(themeColors));
};
