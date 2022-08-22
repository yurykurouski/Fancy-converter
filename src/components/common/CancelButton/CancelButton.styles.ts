import { withTheme } from 'context/ThemeProvider/ThemeProvider.hooks';

export const useStyles = (size: number) =>
  withTheme(theme => ({
    buttonWrapper: {
      borderRadius: size / 2,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_LIGHTER,
      width: size,
      heigth: size,
    },
  }));
