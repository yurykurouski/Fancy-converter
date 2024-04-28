import { HEADER_HEIGHT } from 'constants';
import { useTheme } from 'hooks';
import { isAndroid } from 'utils/platform';

export const useStyles = () =>
  useTheme((theme, { top }) => ({
    container: {
      height: top + HEADER_HEIGHT,
      paddingHorizontal: 6,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      overflow: 'hidden',
    },
    scrollContainer: {
      marginTop: top + 4,
      overflow: 'hidden',
    },
    containerFrame: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
      marginRight: 4,
    },
  }));
