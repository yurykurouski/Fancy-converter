import { StyleSheet } from 'react-native';
import { Colors } from 'assets/colors';

import { useTheme } from './hooks';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND_PRIMARY,
  },
});

export const useStyles = () =>
  useTheme(({ theme }) => ({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  }));
