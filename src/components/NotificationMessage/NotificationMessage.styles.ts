import { useTheme } from 'hooks';
import { ENotificationType } from 'types';

export const useStyles = () =>
  useTheme(({ theme }) => ({
    container: {
      position: 'absolute',
      top: -38,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      zIndex: 1,
    },
    text: {
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 16,
      textAlign: 'center',
      color: theme.FONT_SECONDARY_COLOR,
    },
    withIslandContainer: {
      top: 12,
    },
    [ENotificationType.MESSAGE]: {
      backgroundColor: theme.ACCENT_COLOR_LIGHTER,
    },
    [ENotificationType.ERROR]: {
      backgroundColor: theme.SUNSET_ORANGE,
    },
  }));
