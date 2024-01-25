import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      height: 1,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      marginVertical: 4,
    },
  }));
