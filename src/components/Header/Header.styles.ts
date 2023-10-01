import { useTheme } from 'hooks';
import { isAndroid, isIos } from 'utils/platform';

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
      paddingBottom: 10,
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
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      textAlignVertical: 'bottom',
      color: theme.FONT_PRIMARY_COLOR,
      marginTop: isIos ? 12 : 10,
    },
    controlsContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
  }));
