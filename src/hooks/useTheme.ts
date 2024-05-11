import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'assets/colors';

import { TUseTheme } from './types';

const defaultInsets: EdgeInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const useTheme: TUseTheme = mapStyles => {
  const insets = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create(
        mapStyles({
          theme: Colors!,
          insets: insets ?? defaultInsets,
        }),
      ),
    [insets, mapStyles],
  );
};
