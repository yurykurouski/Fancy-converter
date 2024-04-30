import { useTheme } from 'hooks';

export const useStyles = (isActive: boolean) =>
  useTheme(({ theme }) => ({
    container: {
      backgroundColor: theme.ACCENT_COLOR_LIGHTER,
      height: 6,
      width: 6,
      borderRadius: 3,
      elevation: isActive ? 2 : 1,
    },
  }));
