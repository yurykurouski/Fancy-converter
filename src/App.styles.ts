import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme, insets: { bottom } }) => {
    return {
      wrapper: {
        flex: 1,
        backgroundColor: theme.ACCENT_COLOR_DARKER,
      },
      container: {
        flex: 1,
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
        marginBottom: bottom,
      },
    };
  });
