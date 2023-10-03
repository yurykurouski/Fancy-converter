import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    handleContainer: {
      height: 10,
      alignItems: 'center',
    },
    handlePressable: {
      transform: [
        {
          translateY: 10,
        },
      ],
    },
    handle: {
      width: 50,
      height: 6,
      backgroundColor: theme.FONT_PRIMARY_COLOR,
      borderRadius: 5,
    },
  }));
