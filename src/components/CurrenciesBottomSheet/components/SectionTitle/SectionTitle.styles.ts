import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    text: {
      paddingHorizontal: 10,
      paddingTop: 4,
      fontSize: 18,
      lineHeight: 18,
      fontWeight: '700',
      color: theme.ACCENT_COLOR_LIGHTER,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      overflow: 'hidden',
    },
  }));
