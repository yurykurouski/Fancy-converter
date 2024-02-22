import { Platform } from 'react-native';
import { ELEVATION_1 } from 'constants';
import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      borderRadius: 20,
      padding: 4,
      ...ELEVATION_1,
      ...Platform.select({
        android: {
          overflow: 'hidden',
        },
      }),
    },
    labelText: {
      fontSize: 16,
      fontWeight: 'bold',
      ...(isAndroid && { fontFamily: 'monospace' }),
      textTransform: 'uppercase',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
