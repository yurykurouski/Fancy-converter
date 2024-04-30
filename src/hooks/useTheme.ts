import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { THEME_COLORS } from 'assets/colors';
import { ELEVATIONS } from 'assets/styles';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { useSnapshot } from 'valtio';

import { TUseTheme } from './types';

const defaultInsets: EdgeInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const useTheme: TUseTheme = mapStyles => {
  const { colorScheme } = useSnapshot(colorSchemeStore);
  const insets = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create(
        mapStyles({
          theme: THEME_COLORS[colorScheme!],
          insets: insets ?? defaultInsets,
          colorScheme,
          elevation: ELEVATIONS,
        }),
      ),
    [colorScheme, insets, mapStyles],
  );
};
