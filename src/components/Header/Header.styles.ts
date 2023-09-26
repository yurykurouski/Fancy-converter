import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      paddingTop: 25,
      alignSelf: 'center',
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',

      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
