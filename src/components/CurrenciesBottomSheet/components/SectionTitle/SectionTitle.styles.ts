import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    container: {
      paddingBottom: 10,
      alignItems: 'flex-start',
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      zIndex: 1,
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
