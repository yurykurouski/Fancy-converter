import { withTheme } from 'context';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  withTheme(theme => ({
    contentContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      zIndex: 5,
    },
    title: {
      marginTop: 60,
    },
    mainText: {
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
