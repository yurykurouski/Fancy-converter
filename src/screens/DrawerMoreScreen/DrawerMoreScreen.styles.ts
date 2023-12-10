import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: { gap: 10 },
    icon: {
      backgroundColor: theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 20,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
