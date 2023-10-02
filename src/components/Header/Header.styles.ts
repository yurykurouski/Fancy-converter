import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = (headerBlurred: boolean) =>
  useTheme((theme, { top }) => ({
    blurView: {
      position: 'absolute',
      width: '100%',
      top: 0,
      zIndex: 1,
    },
    container: {
      paddingTop: top,
      paddingHorizontal: 5,
      alignItems: 'flex-end',
      backgroundColor: headerBlurred
        ? 'transparent'
        : theme.APP_BACKGROUND_PRIMARY,
      width: '100%',
      borderBottomColor: headerBlurred
        ? theme.ELEMENT_FADE_OR_BACKGROUND
        : theme.APP_BACKGROUND_PRIMARY,
      borderBottomWidth: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      overflow: 'hidden',
    },
    scrollContainer: {
      height: 30,
      marginBottom: 10,
      overflow: 'hidden',
      paddingRight: 10,
    },
    containerFrame: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
