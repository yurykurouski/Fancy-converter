import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme(theme => ({
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      paddingTop: 25,
      alignSelf: 'center',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
