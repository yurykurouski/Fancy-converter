import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    iconContainer: {
      backgroundColor: theme.FONT_PRIMARY_COLOR_INVERTED,
      borderRadius: 16,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
      transform: [
        {
          rotate: '180deg',
        },
      ],
      overflow: 'hidden',
    },
  }));
