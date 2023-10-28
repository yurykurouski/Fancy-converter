import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/ui/selectors';

import { TUseTheme } from './types';

const defaultInsets: EdgeInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const useTheme: TUseTheme = mapStyles => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const insets = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create(
        mapStyles(
          THEME_COLORS[colorScheme!],
          insets ?? defaultInsets,
          colorScheme,
        ),
      ),
    [colorScheme, insets, mapStyles],
  );
};
