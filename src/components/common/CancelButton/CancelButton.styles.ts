import { withTheme } from './../../../context/ThemeProvider/ThemeProvider.hooks';

export const useStyles = () =>
  withTheme(theme => ({
    buttonWrapper: {
      borderRadius: 24,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      marginHorizontal: 10,
    },
  }));
