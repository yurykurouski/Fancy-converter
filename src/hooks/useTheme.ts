import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { TUseTheme } from './types';

export const useTheme: TUseTheme = mapStyles => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return StyleSheet.create(mapStyles(THEME_COLORS[colorScheme]));
};
