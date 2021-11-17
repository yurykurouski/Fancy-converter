import { Appearance } from 'react-native';

export const getCurrentColorTheme = () => {
  return Appearance.getColorScheme() === 'dark';
};
