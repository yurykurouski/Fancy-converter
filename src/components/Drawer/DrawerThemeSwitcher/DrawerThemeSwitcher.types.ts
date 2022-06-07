import { ColorSchemeName } from 'react-native';
import { setColorScheme } from 'context/ThemeProvider/ThemeProvider.types';

export type DrawerThemeSwitcher = (props: {
  colorScheme: ColorSchemeName;
  setColorScheme: setColorScheme;
}) => JSX.Element;

export type UseThemeSwitcherAnimations = () => {
  animateThemeSwitcher: (colorScheme: ColorSchemeName) => void;
};

export type UseHandlePress = (
  colorScheme: ColorSchemeName,
  setColorScheme: setColorScheme,
  animation: (colorScheme: ColorSchemeName) => void,
) => () => void;
