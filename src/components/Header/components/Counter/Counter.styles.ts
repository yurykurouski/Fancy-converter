import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      width: 56,
      overflow: 'hidden',
      borderRadius: 10,
      padding: 5,
    },
    counterText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
