import { ColorSchemeName } from 'react-native';

type TSetColorScheme = (theme: ColorSchemeName) => {
  payload: ColorSchemeName;
  type: 'ColorScheme/setColorScheme';
};

export type DrawerThemeSwitcher = (props: {
  colorScheme: ColorSchemeName;
  setColorScheme: TSetColorScheme;
}) => JSX.Element;

export type UseThemeSwitcherAnimations = () => {
  animateThemeSwitcher: (colorScheme: ColorSchemeName) => void;
};

export type UseHandlePress = (
  colorScheme: ColorSchemeName,
  setColorScheme: TSetColorScheme,
  animation: (colorScheme: ColorSchemeName) => void,
) => () => void;
