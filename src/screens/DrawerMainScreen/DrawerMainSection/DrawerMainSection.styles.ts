import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = (pageHeight: number) =>
  useTheme(({ theme }) => ({
    container: {
      height: pageHeight,
    },
    morePlaceholder: {
      height: 300,
      borderRadius: 10,
      marginTop: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
    },
    moreFirstRow: {
      fontSize: 40,
    },
    moreSecondRow: {
      fontSize: 20,
    },
    moreText: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
      alignSelf: 'center',
    },
  }));
