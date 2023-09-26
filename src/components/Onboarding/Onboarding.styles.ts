import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = (bottom?: number) =>
  useTheme(theme => ({
    contentContainer: {
      position: 'absolute',
      top: bottom,
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      zIndex: 5,
      paddingBottom: bottom,
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
    appIcon: {
      alignSelf: 'center',
    },
  }));
