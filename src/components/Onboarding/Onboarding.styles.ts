import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    contentContainer: {
      flex: 1,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
    },
  }));

export const useCommonOnboardingStyles = () =>
  useTheme(({ theme }) => ({
    title: {
      marginTop: 60,
    },
    subTitle: {
      marginTop: 'auto',
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
