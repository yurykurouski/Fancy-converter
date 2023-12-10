import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

import { DRAWER_CONTENT_WIDTH } from './DrawerMainScreen.constants';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    contentContainer: {
      paddingTop: top,
      flex: 1,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      width: DRAWER_CONTENT_WIDTH,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    mailIcon: {
      backgroundColor: theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 20,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    morePlaceholder: {
      height: 300,
      borderRadius: 10,
      marginTop: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.ACCENT_COLOR_DARKER,
    },
    moreText: {
      color: theme.FONT_PRIMARY_COLOR,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
    },
    moreFirstRow: {
      fontSize: 40,
    },
    moreSecondRow: {
      fontSize: 20,
    },
    iconsContainer: {
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      borderRadius: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
  }));
