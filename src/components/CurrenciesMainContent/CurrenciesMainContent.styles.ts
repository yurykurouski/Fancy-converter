import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    drawerContainerStyle: {
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
    },
  }));
