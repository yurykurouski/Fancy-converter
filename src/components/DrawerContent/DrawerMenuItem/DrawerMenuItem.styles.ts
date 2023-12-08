import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      minHeight: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      borderRadius: 30,
      padding: 4,
      overflow: 'hidden',
    },
    labelContainer: {
      width: 200,
    },
    labelText: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
