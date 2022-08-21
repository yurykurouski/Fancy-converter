import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    listContainer: {
      paddingHorizontal: 10,
    },
    background: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
    },
  }));
