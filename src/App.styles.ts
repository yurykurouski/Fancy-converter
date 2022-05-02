import { withTheme } from './context/ThemeProvider/ThemeProvider.hooks';

export const useStyles = () =>
  withTheme(theme => {
    return {
      backgroundStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      },
    };
  });
