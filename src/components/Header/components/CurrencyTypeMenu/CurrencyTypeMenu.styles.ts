import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    container: {
      overflow: 'hidden',
      borderRadius: 10,
      padding: 4,
    },
    activeTab: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
    inactiveTab: {
      color: theme.FONT_COLOR_FADED,
    },
  }));
