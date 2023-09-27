import { Platform } from 'react-native';
import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = (headerBlur: boolean) =>
  useTheme(theme => ({
    blurView: {
      position: 'absolute',
      width: '100%',
      top: 0,
      zIndex: 1,
    },
    container: {
      paddingBottom: 12,
      alignItems: 'center',
      backgroundColor: Platform.select({
        ios: headerBlur ? 'transparent' : theme.APP_BACKGROUND_PRIMARY,
        android: theme.APP_BACKGROUND_PRIMARY,
      }),
      width: '100%',
      borderBottomColor: headerBlur
        ? theme.ELEMENT_FADE_OR_BACKGROUND
        : 'transparent',
      borderBottomWidth: 1,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
