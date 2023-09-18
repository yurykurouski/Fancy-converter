import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { WithTheme } from './utils.types';

export const withTheme: WithTheme = mapStyles => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorScheme } = useSelector(selectColorSchemeState);

  return StyleSheet.create(mapStyles(THEME_COLORS[colorScheme]));
};
