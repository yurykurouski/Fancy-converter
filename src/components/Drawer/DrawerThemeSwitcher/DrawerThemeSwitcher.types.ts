import { Animated, ColorSchemeName } from 'react-native';
import { setColorScheme } from 'context/ThemeProvider/ThemeProvider.types';

export type DrawerThemeSwitcher = (props: {
  colorScheme: ColorSchemeName;
  setColorScheme: setColorScheme;
}) => JSX.Element;

export type UseThemeSwitcherAnimations = () => {
  ANIMATED_ROTATE: Animated.Value;
  ANIMATED_SCALE: Animated.Value;
  ANIMATED_OPACITY_DARK: Animated.Value;
  ANIMATED_OPACITY_LIGHT: Animated.Value;
  animation: (colorScheme: ColorSchemeName) => void;
};

export type UseHandlePress = (
  colorScheme: ColorSchemeName,
  setColorScheme: setColorScheme,
  animation: (colorScheme: ColorSchemeName) => void,
) => () => void;
