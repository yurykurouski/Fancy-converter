import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    handleContainer: {
      height: 30,
      alignItems: 'center',
    },
    handlePressable: {
      marginTop: 10,
    },
    handle: {
      width: 50,
      height: 5,
      backgroundColor: theme.FONT_PRIMARY_COLOR,
      borderRadius: 5,
    },
  }));
