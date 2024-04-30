import { Platform } from 'react-native';
import { useTheme } from 'hooks';
import { isAndroid } from 'utils';

export const useStyles = () =>
  useTheme(({ theme, elevation }) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      borderRadius: 20,
      padding: 4,
      ...elevation[1],
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
