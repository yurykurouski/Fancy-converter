import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => {
    return {
      container: {
        flex: 1,
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      },
    };
  });
