import { Appearance } from 'react-native';

import { ColorsDark, ColorsLight } from '../assets/colors';

export const getCurrentColorTheme = () => {
  return Appearance.getColorScheme() === 'dark';
};

export const getCurrentThemeColors = () => {
  return getCurrentColorTheme() ? ColorsDark : ColorsLight;
};
