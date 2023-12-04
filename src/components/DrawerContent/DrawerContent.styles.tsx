import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

import { DRAWER_CONTENT_WIDTH } from './Drawer.constants';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    contentContainer: {
      paddingTop: top,
      flex: 1,
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
    controlsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      borderRadius: 30,
      padding: 4,
    },
    switchLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
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
