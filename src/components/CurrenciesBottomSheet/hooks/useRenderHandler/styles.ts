import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    handleContainer: {
      height: 30,
      alignItems: 'center',
    },
    handlePressable: {
      paddingVertical: 12,
      paddingHorizontal: 10,
    },
    handle: {
      width: 50,
      height: 5,
      backgroundColor: theme.FONT_PRIMARY_COLOR,
      borderRadius: 5,
    },
  }));
