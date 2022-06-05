import { ColorSchemeName, StyleSheet } from 'react-native';
import { Theme } from 'assets/colors';

export type ThemeContext = {
  colorScheme: ColorSchemeName;
  themeColors: Theme;
  setColorScheme: setColorScheme;
};

export type WithTheme = <T extends StyleSheet.NamedStyles<T>>(
  mapStyles: (theme: Theme) => T,
) => T;

export type setColorScheme = (colorScheme: ColorSchemeName) => void;

export type UseSetColorScheme = (
  setTheme: React.Dispatch<
    React.SetStateAction<Omit<ThemeContext, 'setColorScheme'>>
  >,
) => setColorScheme;
