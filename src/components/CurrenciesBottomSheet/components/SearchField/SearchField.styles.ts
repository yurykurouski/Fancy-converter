import { withTheme } from 'utils';

export const useStyles = () =>
  withTheme(theme => ({
    inputContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      height: 60,
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      paddingHorizontal: 10,
      elevation: 5,
      paddingTop: 10,
      paddingBottom: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      gap: 10,
    },
    inputWrapper: {
      flexDirection: 'row',
      backgroundColor: theme.ACCENT_COLOR_DARKER,
      borderRadius: 20,
      flexGrow: 1,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.ACCENT_COLOR_DARKER,
    },
    input: {
      paddingTop: 5,
      paddingLeft: 20,
      paddingBottom: 5,
      fontSize: 20,
      fontWeight: '400',
      flexGrow: 1,
      color: theme.FONT_PRIMARY_COLOR,
    },
    inputFocused: {
      borderColor: theme.ACCENT_COLOR_LIGHTER,
    },
  }));
