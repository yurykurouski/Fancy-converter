import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    contentContainer: {
      paddingTop: top,
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    controlsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
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
    iconsContainer: {
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      borderRadius: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }));
