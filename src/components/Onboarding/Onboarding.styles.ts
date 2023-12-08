import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme((theme, { bottom }) => ({
    contentContainer: {
      flex: 1,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      paddingBottom: bottom,
    },
  }));

export const useCommonOnboardingStyles = () =>
  useTheme(theme => ({
    title: {
      marginTop: 60,
    },
    subTitle: {
      marginTop: 20,
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
