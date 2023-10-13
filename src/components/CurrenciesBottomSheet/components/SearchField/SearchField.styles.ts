import { useTheme } from 'hooks';

export const useStyles = () =>
  useTheme(theme => ({
    inputContainer: {
      backgroundColor: theme.APP_BACKGROUND_PRIMARY,
      elevation: 1,
      padding: 10,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
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
    cancelBtn: {
      marginHorizontal: 10,
    },
  }));
