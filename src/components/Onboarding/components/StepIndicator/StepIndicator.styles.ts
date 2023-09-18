import { withTheme } from 'utils';

export const useStyles = () =>
  withTheme(theme => ({
    container: {
      backgroundColor: theme.ACCENT_COLOR_LIGHTER,
      height: 6,
      width: 6,
      borderRadius: 3,
    },
  }));
