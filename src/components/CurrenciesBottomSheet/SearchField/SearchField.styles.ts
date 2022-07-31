import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    inputContainer: {
      flexDirection: 'row',
      height: 60,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      gap: 10,
    },
    inputWrapper: {
      flexDirection: 'row',
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
      borderRadius: 5,
      flexGrow: 1,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    input: {
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 18,
      flexGrow: 1,
      color: theme.FONT_PRIMARY_COLOR,
    },
    inputFocused: {
      borderColor: theme.ACCENT_COLOR_LIGHTER,
    },
  }));
