import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = (pageHeight: number) => {
  return useTheme((theme, { bottom, top }) => ({
    container: {
      height: pageHeight,
      gap: 6,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
      alignSelf: 'center',
      marginTop: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.FONT_PRIMARY_COLOR,
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
    },
    itemContent: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.FONT_PRIMARY_COLOR,
      textDecorationLine: 'underline',
    },
    iconContainer: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
      backgroundColor: theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 20,
    },
    poweredContainer: {
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 30,
      padding: 4,
      marginBottom: bottom + 50 + (isAndroid ? top : 10),
    },
    poweredText: {
      fontSize: 14,
    },
    creditsSmallText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.FONT_PRIMARY_COLOR,
      ...(isAndroid && { fontFamily: 'monospace' }),
    },
    footerContainer: {
      marginTop: 'auto',
      marginBottom: 10,
      gap: 10,
    },
    credsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconFix: {
      paddingBottom: 3,
    },
  }));
};