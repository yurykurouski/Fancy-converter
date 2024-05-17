import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    drawerContainerStyle: {
      backgroundColor: theme.colors.background,
    },
  }));
