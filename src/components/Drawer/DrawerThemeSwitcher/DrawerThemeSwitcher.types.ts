import { ColorSchemeName } from 'react-native';
import { EColorSchemeBehavior } from 'types';

export type TDrawerThemeSwitcherProps = (props: {
  colorScheme: ColorSchemeName;
  setColorScheme: () => void;
  schemeBehavior: EColorSchemeBehavior;
}) => JSX.Element;
