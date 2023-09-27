import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
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
  }));

export const useCommonOnboardingStyles = () =>
  useTheme(theme => ({
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
