import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme as useNavTheme } from '@react-navigation/native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { TUseTheme } from './types.ts';

const defaultInsets: EdgeInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

/*export const useTheme: TUseTheme = mapStyles => {
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
};*/

export const useTheme: TUseTheme = mapStyles => {
  const theme = useNavTheme();

  return useMemo(
    () =>
      StyleSheet.create(
        mapStyles({
          theme,
        }),
      ),
    [mapStyles],
  );
};
