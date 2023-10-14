import { ColorSchemeName } from 'react-native';
import { EColorSchemeBehavior } from 'types';

export type TDrawerThemeSwitcherProps = (props: {
  colorScheme: ColorSchemeName;
  setColorScheme: () => void;
  schemeBehavior: EColorSchemeBehavior;
}) => JSX.Element;

export type UseThemeSwitcherAnimations = () => {
  animateThemeSwitcher: (colorScheme: ColorSchemeName) => void;
};

export type UseHandlePress = (setColorScheme: () => void) => () => void;
