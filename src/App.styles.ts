import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme((theme, { bottom }) => {
    return {
      container: {
        flex: 1,
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
        paddingBottom: bottom,
      },
    };
  });
