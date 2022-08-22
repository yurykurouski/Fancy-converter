import { withTheme } from 'context';

export const useStyles = () =>
  withTheme(theme => ({
    containerWrapper: {
      borderRadius: 15,
      borderColor: 'transparent',
      borderWidth: 2,
      overflow: 'hidden',
      backgroundColor: theme.ELEMENT_FADE_OR_BACKGROUND,
    },
    container: {
      flexDirection: 'row',
      borderRadius: 15,
      alignItems: 'center',
      height: 60,
      paddingRight: 10,
    },
    containerWrapperFocused: {
      borderColor: theme.ACCENT_COLOR_LIGHTER,
    },
    title: {
      textAlignVertical: 'center',
      textAlign: 'center',
      padding: 10,
      color: theme.FONT_COLOR_FADED,
      fontSize: 22,
    },
    titleFocused: {
      color: theme.FONT_PRIMARY_COLOR,
      fontWeight: '500',
    },
    input: {
      height: 60,
      flexGrow: 1,
      fontSize: 24,
      fontWeight: '500',
      color: theme.FONT_PRIMARY_COLOR,
    },
  }));
