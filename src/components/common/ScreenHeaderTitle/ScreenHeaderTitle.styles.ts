import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = () =>
  useTheme(theme => ({
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
