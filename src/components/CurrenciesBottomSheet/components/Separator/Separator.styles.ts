import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    container: {
      marginBottom: 10,
      alignItems: 'flex-start',
    },
    text: {
      paddingHorizontal: 10,
      paddingTop: 4,
      fontSize: 18,
      lineHeight: 18,
      fontWeight: '700',
      color: theme.ACCENT_COLOR_LIGHTER,
      borderRadius: 8,
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND_DARKER,
      overflow: 'hidden',
    },
  }));
