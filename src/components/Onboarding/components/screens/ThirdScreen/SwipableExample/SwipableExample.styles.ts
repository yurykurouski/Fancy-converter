import { withTheme } from 'utils';

export const useStyles = () =>
  withTheme(theme => ({
    underlayBackground: {
      flexDirection: 'row',
      backgroundColor: theme.SUNSET_ORANGE,
      borderRadius: 15,
      height: 54,
      alignItems: 'center',
    },
  }));
