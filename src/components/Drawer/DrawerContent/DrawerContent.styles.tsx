import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    contentContainer: {
      paddingTop: top,
      flex: 1,
      justifyContent: 'space-between',
    },
    controlsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    switchLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }));
