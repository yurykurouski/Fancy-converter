import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      backgroundColor: theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 20,
      padding: 4,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: theme.ACCENT_COLOR_DARKER,
    },
    labelText: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
