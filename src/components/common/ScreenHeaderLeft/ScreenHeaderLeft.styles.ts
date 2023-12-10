import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    iconContainer: {
      backgroundColor: theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 20,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
      transform: [
        {
          rotate: '180deg',
        },
      ],
    },
  }));
