import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => {
    return {
      backgroundStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      },
    };
  });
