import { Appearance } from 'react-native';

import { ColorsDark, ColorsLight } from '../assets/colors';

export const getCurrentColorTheme = () => {
  return Appearance.getColorScheme();
};

export const getCurrentThemeColors = () => {
  return getCurrentColorTheme() === 'dark' ? ColorsDark : ColorsLight;
};
